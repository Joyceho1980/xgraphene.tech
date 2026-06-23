$python = "C:\Users\Administrator.DESKTOP-PCHA21E\AppData\Local\Programs\Python\Python312\python.exe"
$appPath = "D:\CODEX\XIHE-CRM\app.py"
$workingDir = "D:\CODEX\XIHE-CRM"
$logDir = "D:\CODEX\LAUCH VERSION\DOCUMENTS\SALES-DIRECTOR\logs"
$stdoutLog = Join-Path $logDir "xihe-crm-streamlit.out.log"
$stderrLog = Join-Path $logDir "xihe-crm-streamlit.err.log"
$healthLog = Join-Path $logDir "xihe-crm-health.log"
$port = 8501
$timestamp = [int](Get-Date -UFormat %s)

New-Item -ItemType Directory -Force -Path $logDir | Out-Null

function Write-HealthLog($msg) {
    "$(Get-Date -Format 'yyyy-MM-dd HH:mm:ss') $msg" | Out-File -Append -FilePath $healthLog -Encoding utf8
}

Write-HealthLog "Launch request received (PS1)"
$listener = Get-NetTCPConnection -LocalPort $port -State Listen -ErrorAction SilentlyContinue | Select-Object -First 1

if (-not $listener) {
    Write-HealthLog "Starting Streamlit process..."
    Start-Process `
        -FilePath $python `
        -ArgumentList "-m", "streamlit", "run", $appPath, "--server.headless", "true", "--server.port", "$port", "--server.address", "0.0.0.0", "--server.fileWatcherType", "none" `
        -WorkingDirectory $workingDir `
        -WindowStyle Hidden `
        -RedirectStandardOutput $stdoutLog `
        -RedirectStandardError $stderrLog `
        | Out-Null

    # Health check: poll for up to 20s
    $ready = $false
    for ($i = 1; $i -le 40; $i++) {
        Start-Sleep -Milliseconds 500
        # Check 127.0.0.1
        try {
            $r = Invoke-WebRequest -Uri "http://127.0.0.1:$port" -TimeoutSec 2 -UseBasicParsing
            $ready = $true
            Write-HealthLog "READY on 127.0.0.1:$port (attempt $i)"
            Start-Process "http://127.0.0.1:$port/?_t=$timestamp"
            break
        } catch {}
        # Check LAN IP
        try {
            $r = Invoke-WebRequest -Uri "http://192.168.1.9:$port" -TimeoutSec 2 -UseBasicParsing
            $ready = $true
            Write-HealthLog "READY on 192.168.1.9:$port (attempt $i)"
            Start-Process "http://192.168.1.9:$port/?_t=$timestamp"
            break
        } catch {}
    }
    if (-not $ready) {
        Write-HealthLog "FATAL: CRM did not become ready"
    }
} else {
    Write-HealthLog "Already running on port $port - opening browser"
    Start-Process "http://127.0.0.1:$port/?_t=$timestamp"
}

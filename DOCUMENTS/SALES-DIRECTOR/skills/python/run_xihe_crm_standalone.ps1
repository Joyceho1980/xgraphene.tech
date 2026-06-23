$ErrorActionPreference = "Stop"
$python = "C:\Users\Administrator.DESKTOP-PCHA21E\AppData\Local\Programs\Python\Python312\python.exe"
$app = "D:\CODEX\XIHE-CRM\app.py"
$logDir = "D:\CODEX\LAUCH VERSION\DOCUMENTS\SALES-DIRECTOR\logs"
$outLog = Join-Path $logDir "xihe-crm-streamlit.out.log"
$errLog = Join-Path $logDir "xihe-crm-streamlit.err.log"

New-Item -ItemType Directory -Force -Path $logDir | Out-Null

$psi = New-Object System.Diagnostics.ProcessStartInfo
$psi.FileName = $python
$psi.Arguments = "-m streamlit run `"$app`" --server.headless true --server.port 8501 --server.address 0.0.0.0 --server.fileWatcherType none"
$psi.WorkingDirectory = "D:\CODEX\XIHE-CRM"
$psi.UseShellExecute = $false
$psi.CreateNoWindow = $true
$psi.RedirectStandardOutput = $true
$psi.RedirectStandardError = $true

$process = New-Object System.Diagnostics.Process
$process.StartInfo = $psi
[void]$process.Start()

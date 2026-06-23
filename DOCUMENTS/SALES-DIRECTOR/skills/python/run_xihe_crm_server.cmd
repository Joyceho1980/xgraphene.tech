@echo off
setlocal enabledelayedexpansion
set "LOG_DIR=D:\CODEX\LAUCH VERSION\DOCUMENTS\SALES-DIRECTOR\logs"
set "OUT_LOG=%LOG_DIR%\xihe-crm-manual.out.log"
set "ERR_LOG=%LOG_DIR%\xihe-crm-manual.err.log"
set "PYTHON=C:\Users\Administrator.DESKTOP-PCHA21E\AppData\Local\Programs\Python\Python312\python.exe"
set "APP_PATH=D:\CODEX\XIHE-CRM\app.py"
set "HOST=0.0.0.0"
set "PORT=8501"

if not exist "%LOG_DIR%" mkdir "%LOG_DIR%"

echo [%date% %time%] Starting XIHE CRM...>>"%OUT_LOG%"

cd /d D:\CODEX\XIHE-CRM
START "XIHE-CRM" /B "%PYTHON%" -m streamlit run "%APP_PATH%" --server.headless true --server.port %PORT% --server.address %HOST% --server.fileWatcherType none 1>>"%OUT_LOG%" 2>>"%ERR_LOG%"

echo [%date% %time%] Waiting for CRM to become ready on 127.0.0.1:%PORT%...>>"%OUT_LOG%"

:: Health check: poll up to 40 times (0.5s each = 20s max)
for /L %%i in (1,1,40) do (
    powershell -NoProfile -Command "try { $r = Invoke-WebRequest -Uri 'http://127.0.0.1:%PORT%' -TimeoutSec 2 -UseBasicParsing; exit 0 } catch { exit 1 }" >nul 2>&1
    if !errorlevel! equ 0 (
        echo [%date% %time%] CRM READY on http://127.0.0.1:%PORT%/>>"%OUT_LOG%"
        :: Open fresh browser tab (bypasses old cached error pages)
        start "" "http://127.0.0.1:%PORT%/?_t=%RANDOM%"
        exit /b 0
    )
    :: Also try LAN IP as fallback
    powershell -NoProfile -Command "try { $r = Invoke-WebRequest -Uri 'http://192.168.1.9:%PORT%' -TimeoutSec 2 -UseBasicParsing; exit 0 } catch { exit 1 }" >nul 2>&1
    if !errorlevel! equ 0 (
        echo [%date% %time%] CRM READY on http://192.168.1.9:%PORT%/>>"%OUT_LOG%"
        start "" "http://192.168.1.9:%PORT%/?_t=%RANDOM%"
        exit /b 0
    )
    timeout /t 1 /nobreak >nul
)

echo [%date% %time%] FAILED: CRM did not become ready on 127.0.0.1:%PORT%>>"%OUT_LOG%"
echo CRM startup failed - check logs at %OUT_LOG% and %ERR_LOG%>&2
exit /b 1

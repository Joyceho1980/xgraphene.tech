@echo off
setlocal
powershell.exe -ExecutionPolicy Bypass -File "D:\CODEX\LAUCH VERSION\DOCUMENTS\SALES-DIRECTOR\skills\python\run_xihe_crm_standalone.ps1"
echo Waiting for CRM to become ready...
timeout /t 6 /nobreak >nul
start "" http://127.0.0.1:8501/?_t=%RANDOM%
start "" http://192.168.1.9:8501/?_t=%RANDOM%

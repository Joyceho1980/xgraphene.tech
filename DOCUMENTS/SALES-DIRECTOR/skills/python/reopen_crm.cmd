@echo off
:: Force-open a fresh CRM browser tab (bypasses old cached error pages)
:: First tries 127.0.0.1, then falls back to LAN IP 192.168.1.9
echo Opening XIHE CRM in browser...
start "" "http://127.0.0.1:8501/?_t=%RANDOM%"
timeout /t 2 /nobreak >nul
start "" "http://192.168.1.9:8501/?_t=%RANDOM%"
echo Done. If CRM doesn't load, run the launch script first.
pause

@echo off
chcp 65001 >nul
title Google Indexing API - Proxy Test

echo ============================================
echo   Testing Proxy Connection...
echo ============================================
echo.

cd /d D:\CODEX\LAUCH VERSION

echo [1] Testing with HTTP proxy on port 10807...
curl -s -o nul -w "HTTP Proxy Status: %%{http_code}" --connect-timeout 10 --proxy http://127.0.0.1:10807 https://www.googleapis.com/oauth2/v1/tokeninfo 2>&1
echo.
echo.

echo [2] Testing with SOCKS5 proxy on port 10807...
curl -s -o nul -w "SOCKS5 Status: %%{http_code}" --connect-timeout 10 --socks5-hostname 127.0.0.1:10807 https://www.googleapis.com/oauth2/v1/tokeninfo 2>&1
echo.
echo.

echo [3] Testing direct connection...
curl -s -o nul -w "Direct Status: %%{http_code}" --connect-timeout 10 https://www.googleapis.com/oauth2/v1/tokeninfo 2>&1
echo.
echo.

pause
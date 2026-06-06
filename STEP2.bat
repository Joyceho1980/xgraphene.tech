@echo off
chcp 65001 >nul
title Step 2: API Test

cd /d D:\CODEX\LAUCH VERSION

echo Running Step 2: Indexing API Test...
echo This will test if the API is enabled and accessible.
echo.
echo If this hangs for more than 30 seconds, press Ctrl+C
echo.

node step2-test-api.js

pause
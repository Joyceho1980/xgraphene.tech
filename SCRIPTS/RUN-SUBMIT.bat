@echo off
chcp 65001 >nul
title Google Indexing - curl version

echo ============================================
echo   Google Indexing - Simple curl version
echo ============================================
echo.

cd /d D:\CODEX\LAUCH VERSION

echo Getting access token...
for /f "delims=" %%a in ('powershell -ExecutionPolicy Bypass -Command "$key = Get-Content 'google-key.json' | ConvertFrom-Json; $now = [Math]::Floor((Get-Date -UFormat %s)); $header = [Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes('{""alg"":""RS256"",""typ"":""JWT""}')).Replace(''+'',''-'' ).Replace(''/'',''_'' ).Replace(''='',''''); $claim = '{""iss"":""'' + $key.client_email + '"",""scope"":""https://www.googleapis.com/auth/indexing"",""aud"":""'' + $key.token_uri + '"",""iat"":'' + $now + '",""exp"":'' + ($now+3600) + ''}'; $claimB64 = [Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes($claim)).Replace(''+'',''-'' ).Replace(''/'',''_'' ).Replace(''='',''''); Write-Output ($header + ''.'' + $claimB64)"') do set JWT_HEADER=%%a

echo Token: %JWT_HEADER:~0,20%...
echo.
echo If you see token above, press any key to continue...
pause

echo Submitting URLs with proxy...
echo.

set PROXY=http://127.0.0.1:10807
set BASE=https://www.xgraphene.tech

echo [1/20] Homepage...
curl -s -X POST "%PROXY%" https://indexing.googleapis.com/v3/urlNotifications:publish -H "Content-Type: application/json" -H "Authorization: Bearer TOKEN_HERE" -d "{\"url\":\"%BASE%/\",\"type\":\"URL_UPDATED\"}" --connect-timeout 15

echo.
echo Done! Check results above.
pause
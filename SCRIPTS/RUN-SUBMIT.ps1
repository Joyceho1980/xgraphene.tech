$ErrorActionPreference = "Stop"

Write-Host "============================================" -ForegroundColor Cyan
Write-Host "  Google Indexing API - URL Submission" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $scriptPath

$keyFile = Join-Path $scriptPath "google-key.json"
if (-not (Test-Path $keyFile)) {
    Write-Host "[ERROR] google-key.json not found!" -ForegroundColor Red
    pause
    exit 1
}

$keyJson = Get-Content $keyFile -Raw
$key = $keyJson | ConvertFrom-Json

$urls = @(
    "/",
    "/ABOUT/AboutOrigin.html",
    "/ABOUT/AboutMission.html",
    "/ABOUT/AboutPhilosophy.html",
    "/SCIENCE/Technology.html",
    "/SCIENCE/Mechanism.html",
    "/SCIENCE/Evidence.html",
    "/science.html",
    "/PRODUCTS/FILM/GrapheneFilm.html",
    "/PRODUCTS/ProductPage.html",
    "/PRODUCTS/CABIN/cabin.html",
    "/PRODUCTS/CAPSULE/capsule-b2b.html",
    "/PRODUCTS/PORTABLES/DeepRecovery.html",
    "/PRODUCTS/PORTABLES/NeuralResilience.html",
    "/PRODUCTS/PORTABLES/VisceralVitality.html",
    "/applications.html",
    "/partnership.html",
    "/NEWS/index.html",
    "/NEWS/pku-clinical-trial.html",
    "/CONTACT/index.html"
)

$baseUrl = "https://www.xgraphene.tech"
$delayMs = 1200

function Base64UrlEncode([string]$text) {
    $bytes = [System.Text.Encoding]::UTF8.GetBytes($text)
    $base64 = [Convert]::ToBase64String($bytes)
    return $base64.Replace('+','-').Replace('/','_').Replace('=','')
}

function Create-JWT {
    param([string]$keyJson)
    
    $header = '{"alg":"RS256","typ":"JWT"}'
    
    $now = [Math]::Floor((Get-Date -UFormat %s))
    $claim = "{""iss"":""$($key.client_email)"",""scope"":""https://www.googleapis.com/auth/indexing"",""aud"":""$($key.token_uri)"",""iat"":$now,""exp"":$($now + 3600)}"
    
    $headerB64 = Base64UrlEncode $header
    $claimB64 = Base64UrlEncode $claim
    
    $toSign = "$headerB64.$claimB4"
    
    $keyData = $key.private_key
    
    $tempKeyFile = Join-Path $env:TEMP "google_sa_key.pem"
    Set-Content -Path $tempKeyFile -Value $keyData -Encoding UTF8
    
    $tempInputFile = Join-Path $env:TEMP "jwt_input.txt"
    Set-Content -Path $tempInputFile -Value $toSign -Encoding UTF8 -NoNewline
    
    $tempSigFile = Join-Path $env:TEMP "jwt_sig.bin"
    
    $openssl = Get-Command openssl -ErrorAction SilentlyContinue
    if ($openssl) {
        & openssl dgst -sha256 -sign $tempKeyFile -out $tempSigFile $tempInputFile 2>$null
        if ($LASTEXITCODE -eq 0) {
            $sigBytes = [System.IO.File]::ReadAllBytes($tempSigFile)
            $sigB64 = [Convert]::ToBase64String($sigBytes).Replace('+','-').Replace('/','_').Replace('=','')
            
            Remove-Item $tempKeyFile -ErrorAction SilentlyContinue
            Remove-Item $tempInputFile -ErrorAction SilentlyContinue
            Remove-Item $tempSigFile -ErrorAction SilentlyContinue
            
            return "$headerB64.$claimB64.$sigB64"
        }
    }
    
    Remove-Item $tempKeyFile -ErrorAction SilentlyContinue
    Remove-Item $tempInputFile -ErrorAction SilentlyContinue
    Remove-Item $tempSigFile -ErrorAction SilentlyContinue
    
    Write-Host "[WARN] Using fallback JWT method..." -ForegroundColor Yellow
    
    Add-Type -TypeDefinition @"
using System;
using System.Security.Cryptography;
using System.Text;

public class JwtHelper {
    public static string Sign(string privateKeyPem, string data) {
        try {
            byte[] keyBytes = Convert.FromBase64String(privateKeyPem);
            using (var rsa = new RSACryptoServiceProvider()) {
                rsa.ImportCspBlob(keyBytes);
                using (var sha256 = SHA256.Create()) {
                    byte[] dataBytes = Encoding.UTF8.GetBytes(data);
                    byte[] hash = sha256.ComputeHash(dataBytes);
                    byte[] signature = rsa.SignHash(hash, CryptoConfig.MapNameToOID("SHA256"));
                    return Convert.ToBase64String(signature).Replace("+","-").Replace("/","_").Replace("=","");
                }
            }
        } catch (Exception ex) {
            throw new Exception("Sign failed: " + ex.Message, ex);
        }
    }
}
"@ -ReferencedAssemblies System.Core
    
    $privateKeyClean = $key.private_key -replace "-----BEGIN PRIVATE KEY-----" -replace "-----END PRIVATE KEY-----" -replace "`r" -replace "`n"
    
    try {
        $sigB64 = [JwtHelper]::Sign($privateKeyClean, $toSign)
        return "$headerB64.$claimB64.$sigB64"
    } catch {
        Write-Host "[ERROR] Cannot sign JWT: $_" -ForegroundColor Red
        throw
    }
}

function Get-AccessToken {
    param([object]$keyObj)
    
    $jwt = Create-JWT ($keyObj | ConvertTo-Json -Depth 10)
    
    $body = @{
        grant_type = "urn:ietf:params:oauth:grant-type:jwt-bearer"
        assertion = $jwt
    }
    
    try {
        $response = Invoke-RestMethod -Uri $keyObj.token_uri -Method Post -ContentType "application/x-www-form-urlencoded" -Body $body -TimeoutSec 30
        return $response.access_token
    } catch {
        Write-Host "[FATAL] Cannot get access token: $_" -ForegroundColor Red
        throw
    }
}

function Submit-Url {
    param([string]$token, [string]$url)
    
    $apiUrl = "https://indexing.googleapis.com/v3/urlNotifications:publish"
    $body = @{ url = $url; type = "URL_UPDATED" } | ConvertTo-Json -Compress
    
    try {
        $headers = @{
            "Authorization" = "Bearer $token"
            "Content-Type" = "application/json"
        }
        
        $response = Invoke-RestMethod -Uri $apiUrl -Method Post -Headers $headers -Body $body -TimeoutSec 30
        
        $notifyTime = ""
        if ($response.urlNotificationMetadata.latestUpdate.notifyTime) {
            $notifyTime = $response.urlNotificationMetadata.latestUpdate.notifyTime
        } else {
            $notifyTime = "OK"
        }
        
        Write-Host "[200] $url — $notifyTime" -ForegroundColor Green
        return $true
    } catch {
        $errMsg = $_.Exception.Message
        if ($_ -is [System.Net.WebException]) {
            if ($_.Exception.Response) {
                $statusCode = [int]$_.Exception.Response.StatusCode
                $reader = New-Object System.IO.StreamReader($_.Exception.Response.GetResponseStream())
                $errBody = $reader.ReadToEnd()
                Write-Host "[$statusCode] $url — $errBody" -ForegroundColor Red
            } else {
                Write-Host "[ERR] $url — $errMsg" -ForegroundColor Red
            }
        } else {
            Write-Host "[ERR] $url — $errMsg" -ForegroundColor Red
        }
        return $false
    }
}

Write-Host "Getting access token..." -ForegroundColor Yellow
try {
    $accessToken = Get-AccessToken $key
    Write-Host "Access token OK!" -ForegroundColor Green
} catch {
    Write-Host "[FATAL] Failed to get access token!" -ForegroundColor Red
    pause
    exit 1
}
Write-Host ""

$ok = 0
$fail = 0

for ($i = 0; $i -lt $urls.Count; $i++) {
    $fullUrl = "$baseUrl$($urls[$i])"
    Write-Host -NoNewline "[$($i+1)/$($urls.Count)] "
    
    if (Submit-Url -token $accessToken -url $fullUrl) {
        $ok++
    } else {
        $fail++
    }
    
    if ($i -lt ($urls.Count - 1)) {
        Start-Sleep -Milliseconds $delayMs
    }
}

Write-Host ""
Write-Host "=== Done: $ok OK, $fail FAIL ===" -ForegroundColor Cyan
if ($fail -gt 0) {
    Write-Host "[WARNING] Some URLs failed to submit!" -ForegroundColor Yellow
} else {
    Write-Host "[SUCCESS] All URLs submitted successfully!" -ForegroundColor Green
}
Write-Host ""
pause
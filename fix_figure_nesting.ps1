
$knowledgePath = "d:\CODEX\LAUCH VERSION\WEBSITE\pages\SCIENCE\KNOWLEDGE"

$htmlFiles = Get-ChildItem -Path $knowledgePath -Recurse -Filter "*.html"

foreach ($file in $htmlFiles) {
    $content = Get-Content -Path $file.FullName -Raw
    
    $content = $content -replace '<figure>\s*<figure data-graph-node="([^"]+)" data-graph-edges="([^"]+)">\s*<img\s+src="([^"]+)"\s+alt="([^"]+)"\s+loading="lazy"\s+decoding="async">\s*<figcaption></figcaption>\s*</figure>\s*loading="lazy">\s*<figcaption>([^<]+)</figcaption>\s*</figure>', '<figure data-graph-node="$1" data-graph-edges="$2"><img src="$3" alt="$4" loading="lazy" decoding="async"><figcaption>$5</figcaption></figure>'
    
    Set-Content -Path $file.FullName -Value $content -NoNewline
    Write-Host "Fixed: $($file.FullName)"
}

Write-Host "Fixed nested figure tags."

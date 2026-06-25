
$knowledgePath = "d:\CODEX\LAUCH VERSION\WEBSITE\pages\SCIENCE\KNOWLEDGE\Sleep\how-graphene-fir-affects-sleep-architecture.html"

$content = Get-Content -Path $knowledgePath -Raw

$content = $content -replace '<figure>\s*<figure data-graph-node="([^"]+)" data-graph-edges="([^"]+)">\s*<img\s+src="([^"]+)"\s+alt="([^"]+)"\s+loading="lazy"\s+decoding="async">\s*<figcaption></figcaption>\s*</figure>\s*>\s*</figure>', '<figure data-graph-node="$1" data-graph-edges="$2"><img src="$3" alt="$4" loading="lazy" decoding="async"><figcaption></figcaption></figure>'

Set-Content -Path $knowledgePath -Value $content -NoNewline
Write-Host "Fixed: $knowledgePath"

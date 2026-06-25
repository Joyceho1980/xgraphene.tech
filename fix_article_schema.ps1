$articles = @(
    @{path = "d:\CODEX\LAUCH VERSION\WEBSITE\pages\SCIENCE\KNOWLEDGE\cellular-energy\atp-study.html"; hubName = "Cellular Energy Hub"; hubUrl = "/SCIENCE/KNOWLEDGE/cellular-energy/"},
    @{path = "d:\CODEX\LAUCH VERSION\WEBSITE\pages\SCIENCE\KNOWLEDGE\Clinical-Evidence\pku-clinical-trial.html"; hubName = "Clinical Evidence Hub"; hubUrl = "/SCIENCE/KNOWLEDGE/Clinical-Evidence/"},
    @{path = "d:\CODEX\LAUCH VERSION\WEBSITE\pages\SCIENCE\KNOWLEDGE\graphene-fir\comparison.html"; hubName = "Graphene FIR Hub"; hubUrl = "/SCIENCE/KNOWLEDGE/graphene-fir/"},
    @{path = "d:\CODEX\LAUCH VERSION\WEBSITE\pages\SCIENCE\KNOWLEDGE\graphene-fir\elderly-anxiety-cognition-rct-2024.html"; hubName = "Graphene FIR Hub"; hubUrl = "/SCIENCE/KNOWLEDGE/graphene-fir/"},
    @{path = "d:\CODEX\LAUCH VERSION\WEBSITE\pages\SCIENCE\KNOWLEDGE\graphene-fir\pku-clinical-trial.html"; hubName = "Graphene FIR Hub"; hubUrl = "/SCIENCE/KNOWLEDGE/graphene-fir/"},
    @{path = "d:\CODEX\LAUCH VERSION\WEBSITE\pages\SCIENCE\KNOWLEDGE\Inflammation\beyond-thermal-comfort-biological-recovery.html"; hubName = "Inflammation Hub"; hubUrl = "/SCIENCE/KNOWLEDGE/Inflammation/"},
    @{path = "d:\CODEX\LAUCH VERSION\WEBSITE\pages\SCIENCE\KNOWLEDGE\Microcirculation\graphene-fir-microcirculation.html"; hubName = "Microcirculation Hub"; hubUrl = "/SCIENCE/KNOWLEDGE/Microcirculation/"},
    @{path = "d:\CODEX\LAUCH VERSION\WEBSITE\pages\SCIENCE\KNOWLEDGE\Mitochondria\atp-study.html"; hubName = "Mitochondria Hub"; hubUrl = "/SCIENCE/KNOWLEDGE/Mitochondria/"},
    @{path = "d:\CODEX\LAUCH VERSION\WEBSITE\pages\SCIENCE\KNOWLEDGE\Mitochondria\mitochondrial-function-far-infrared.html"; hubName = "Mitochondria Hub"; hubUrl = "/SCIENCE/KNOWLEDGE/Mitochondria/"},
    @{path = "d:\CODEX\LAUCH VERSION\WEBSITE\pages\SCIENCE\KNOWLEDGE\graphene-fir\RESONANCE\alpha-wave-zhejiang-2022.html"; hubName = "Graphene FIR Hub"; hubUrl = "/SCIENCE/KNOWLEDGE/graphene-fir/"}
)

foreach ($article in $articles) {
    $content = Get-Content -Path $article.path -Raw
    
    if ($content -match '"@type": "Article"') {
        Write-Host "Skipping $($article.path) - already has Article Schema"
        continue
    }
    
    $titleMatch = [regex]::Match($content, '<title>(.+?)</title>')
    if ($titleMatch.Success) {
        $title = $titleMatch.Groups[1].Value -replace ' \| XIHE.*', ''
    } else {
        $title = "Untitled"
    }
    
    $descMatch = [regex]::Match($content, '<meta name="description" content="(.+?)"')
    if ($descMatch.Success) {
        $description = $descMatch.Groups[1].Value
    } else {
        $description = ""
    }
    
    $fileName = $article.path -replace '.*/([^/]+)$', '$1'
    $urlPath = $article.hubUrl + $fileName
    
    $articleSchema = @"
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "$title",
    "description": "$description",
    "url": "https://www.xgraphene.tech$urlPath",
    "isPartOf": {
      "@type": "CollectionPage",
      "name": "$($article.hubName) — XIHE Knowledge",
      "url": "https://www.xgraphene.tech$($article.hubUrl)"
    },
    "mentions": {
      "@type": "Thing",
      "name": "Graphene Far-Infrared"
    },
    "publisher": {
      "@type": "Organization",
      "name": "XIHE Technology",
      "url": "https://www.xgraphene.tech"
    },
    "inLanguage": "en"
  }
  </script>
"@
    
    $content = $content.Replace('</head>', "$articleSchema`n</head>")
    
    Set-Content -Path $article.path -Value $content -NoNewline
    Write-Host "Added Article Schema to: $($article.path)"
}

Write-Host "`n=== Article Schema Fix Complete ==="

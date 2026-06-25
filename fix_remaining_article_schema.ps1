$articles = @(
    @{path = "d:\CODEX\LAUCH VERSION\WEBSITE\pages\SCIENCE\KNOWLEDGE\old-cellular-energy-index.html"; hubName = "Cellular Energy Hub"; hubUrl = "/SCIENCE/KNOWLEDGE/cellular-energy/"},
    @{path = "d:\CODEX\LAUCH VERSION\WEBSITE\pages\SCIENCE\KNOWLEDGE\graphene-fir\how-to-evaluate-fir-heating-film.html"; hubName = "Graphene FIR Hub"; hubUrl = "/SCIENCE/KNOWLEDGE/graphene-fir/"},
    @{path = "d:\CODEX\LAUCH VERSION\WEBSITE\pages\SCIENCE\KNOWLEDGE\graphene-fir\ontology.html"; hubName = "Graphene FIR Hub"; hubUrl = "/SCIENCE/KNOWLEDGE/graphene-fir/"},
    @{path = "d:\CODEX\LAUCH VERSION\WEBSITE\pages\SCIENCE\KNOWLEDGE\graphene-fir\what-is-emissivity.html"; hubName = "Graphene FIR Hub"; hubUrl = "/SCIENCE/KNOWLEDGE/graphene-fir/"},
    @{path = "d:\CODEX\LAUCH VERSION\WEBSITE\pages\SCIENCE\KNOWLEDGE\graphene-fir\what-is-far-infrared-radiant-efficiency.html"; hubName = "Graphene FIR Hub"; hubUrl = "/SCIENCE/KNOWLEDGE/graphene-fir/"},
    @{path = "d:\CODEX\LAUCH VERSION\WEBSITE\pages\SCIENCE\KNOWLEDGE\Sleep\how-graphene-fir-affects-sleep-architecture.html"; hubName = "Sleep Hub"; hubUrl = "/SCIENCE/KNOWLEDGE/Sleep/"}
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

Write-Host "`n=== Remaining Article Schema Fix Complete ==="

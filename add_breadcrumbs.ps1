$breadcrumbPages = @(
    @{path = "d:\CODEX\LAUCH VERSION\WEBSITE\pages\ABOUT\AboutMission.html"; items = @(@{position=1; name="Home"; item="https://www.xgraphene.tech/"}, @{position=2; name="About"; item="https://www.xgraphene.tech/ABOUT/AboutOrigin.html"}, @{position=3; name="Mission"; item="https://www.xgraphene.tech/ABOUT/AboutMission.html"})},
    @{path = "d:\CODEX\LAUCH VERSION\WEBSITE\pages\ABOUT\AboutOrigin.html"; items = @(@{position=1; name="Home"; item="https://www.xgraphene.tech/"}, @{position=2; name="About"; item="https://www.xgraphene.tech/ABOUT/AboutOrigin.html"}, @{position=3; name="Origin"; item="https://www.xgraphene.tech/ABOUT/AboutOrigin.html"})},
    @{path = "d:\CODEX\LAUCH VERSION\WEBSITE\pages\ABOUT\AboutPhilosophy.html"; items = @(@{position=1; name="Home"; item="https://www.xgraphene.tech/"}, @{position=2; name="About"; item="https://www.xgraphene.tech/ABOUT/AboutOrigin.html"}, @{position=3; name="Philosophy"; item="https://www.xgraphene.tech/ABOUT/AboutPhilosophy.html"})},
    @{path = "d:\CODEX\LAUCH VERSION\WEBSITE\pages\CONTACT\index.html"; items = @(@{position=1; name="Home"; item="https://www.xgraphene.tech/"}, @{position=2; name="Contact"; item="https://www.xgraphene.tech/CONTACT/"})},
    @{path = "d:\CODEX\LAUCH VERSION\WEBSITE\pages\NEWS\index.html"; items = @(@{position=1; name="Home"; item="https://www.xgraphene.tech/"}, @{position=2; name="News"; item="https://www.xgraphene.tech/NEWS/"})},
    @{path = "d:\CODEX\LAUCH VERSION\WEBSITE\pages\PRODUCTS\ProductPage.html"; items = @(@{position=1; name="Home"; item="https://www.xgraphene.tech/"}, @{position=2; name="Products"; item="https://www.xgraphene.tech/PRODUCTS/ProductPage.html"})},
    @{path = "d:\CODEX\LAUCH VERSION\WEBSITE\pages\SCIENCE\Evidence.html"; items = @(@{position=1; name="Home"; item="https://www.xgraphene.tech/"}, @{position=2; name="Science"; item="https://www.xgraphene.tech/SCIENCE/Landing.html"}, @{position=3; name="Evidence"; item="https://www.xgraphene.tech/SCIENCE/Evidence.html"})},
    @{path = "d:\CODEX\LAUCH VERSION\WEBSITE\pages\SCIENCE\Landing.html"; items = @(@{position=1; name="Home"; item="https://www.xgraphene.tech/"}, @{position=2; name="Science"; item="https://www.xgraphene.tech/SCIENCE/Landing.html"})},
    @{path = "d:\CODEX\LAUCH VERSION\WEBSITE\pages\SCIENCE\Mechanism.html"; items = @(@{position=1; name="Home"; item="https://www.xgraphene.tech/"}, @{position=2; name="Science"; item="https://www.xgraphene.tech/SCIENCE/Landing.html"}, @{position=3; name="Mechanism"; item="https://www.xgraphene.tech/SCIENCE/Mechanism.html"})},
    @{path = "d:\CODEX\LAUCH VERSION\WEBSITE\pages\SCIENCE\Technology.html"; items = @(@{position=1; name="Home"; item="https://www.xgraphene.tech/"}, @{position=2; name="Science"; item="https://www.xgraphene.tech/SCIENCE/Landing.html"}, @{position=3; name="Technology"; item="https://www.xgraphene.tech/SCIENCE/Technology.html"})},
    @{path = "d:\CODEX\LAUCH VERSION\WEBSITE\pages\applications.html"; items = @(@{position=1; name="Home"; item="https://www.xgraphene.tech/"}, @{position=2; name="Applications"; item="https://www.xgraphene.tech/applications.html"})},
    @{path = "d:\CODEX\LAUCH VERSION\WEBSITE\pages\partnership.html"; items = @(@{position=1; name="Home"; item="https://www.xgraphene.tech/"}, @{position=2; name="Partnership"; item="https://www.xgraphene.tech/partnership.html"})},
    @{path = "d:\CODEX\LAUCH VERSION\WEBSITE\pages\nodes\emissivity.html"; items = @(@{position=1; name="Home"; item="https://www.xgraphene.tech/"}, @{position=2; name="Knowledge Nodes"; item="https://www.xgraphene.tech/nodes/"}, @{position=3; name="Emissivity"; item="https://www.xgraphene.tech/nodes/emissivity.html"})},
    @{path = "d:\CODEX\LAUCH VERSION\WEBSITE\pages\nodes\index.html"; items = @(@{position=1; name="Home"; item="https://www.xgraphene.tech/"}, @{position=2; name="Knowledge Nodes"; item="https://www.xgraphene.tech/nodes/"})},
    @{path = "d:\CODEX\LAUCH VERSION\WEBSITE\pages\science.html"; items = @(@{position=1; name="Home"; item="https://www.xgraphene.tech/"}, @{position=2; name="Science"; item="https://www.xgraphene.tech/SCIENCE/Landing.html"})},
    @{path = "d:\CODEX\LAUCH VERSION\WEBSITE\pages\SCIENCE\KNOWLEDGE\index.html"; items = @(@{position=1; name="Home"; item="https://www.xgraphene.tech/"}, @{position=2; name="Science"; item="https://www.xgraphene.tech/SCIENCE/Landing.html"}, @{position=3; name="Knowledge"; item="https://www.xgraphene.tech/SCIENCE/KNOWLEDGE/"})}
)

foreach ($page in $breadcrumbPages) {
    $content = Get-Content -Path $page.path -Raw
    
    if ($content -match 'BreadcrumbList') {
        Write-Host "Skipping $($page.path) - already has BreadcrumbList"
        continue
    }
    
    $itemList = @()
    foreach ($item in $page.items) {
        $itemJson = @"
{
  "@type": "ListItem",
  "position": $($item.position),
  "name": "$($item.name)",
  "item": "$($item.item)"
}
"@
        $itemList += $itemJson
    }
    $itemsJson = $itemList -join ",`n"
    
    $breadcrumbSchema = @"
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    $itemsJson
  ]
}
</script>
"@
    
    $content = $content.Replace('</head>', "$breadcrumbSchema`n</head>")
    
    Set-Content -Path $page.path -Value $content -NoNewline
    Write-Host "Added BreadcrumbList to: $($page.path)"
}

Write-Host "`n=== BreadcrumbList Fix Complete ==="

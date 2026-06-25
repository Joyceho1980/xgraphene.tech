$files = @(
    "d:\CODEX\LAUCH VERSION\WEBSITE\pages\SCIENCE\KNOWLEDGE\cellular-energy\atp-pain-signaling.html",
    "d:\CODEX\LAUCH VERSION\WEBSITE\pages\SCIENCE\KNOWLEDGE\cellular-energy\cellular-energy-atp.html",
    "d:\CODEX\LAUCH VERSION\WEBSITE\pages\SCIENCE\KNOWLEDGE\cellular-energy\central-sensitization-energy.html",
    "d:\CODEX\LAUCH VERSION\WEBSITE\pages\SCIENCE\KNOWLEDGE\graphene-fir\elderly-anxiety-cognition-rct-2024.html",
    "d:\CODEX\LAUCH VERSION\WEBSITE\pages\SCIENCE\KNOWLEDGE\graphene-fir\how-fir-works.html",
    "d:\CODEX\LAUCH VERSION\WEBSITE\pages\SCIENCE\KNOWLEDGE\Inflammation\beyond-thermal-comfort-biological-recovery.html",
    "d:\CODEX\LAUCH VERSION\WEBSITE\pages\SCIENCE\KNOWLEDGE\Inflammation\inflammation-recovery-biology.html",
    "d:\CODEX\LAUCH VERSION\WEBSITE\pages\SCIENCE\KNOWLEDGE\Inflammation\nociceptive-vs-neuropathic-mechanisms.html",
    "d:\CODEX\LAUCH VERSION\WEBSITE\pages\SCIENCE\KNOWLEDGE\Microcirculation\microcirculation-science.html",
    "d:\CODEX\LAUCH VERSION\WEBSITE\pages\SCIENCE\KNOWLEDGE\Mitochondria\mitochondrial-function-recovery.html"
)

$hubConfigs = @{
    "cellular-energy" = @{
        hubUrl = "/SCIENCE/KNOWLEDGE/cellular-energy/"
        knowledgePosition = "Cellular Energy Hub"
    }
    "graphene-fir" = @{
        hubUrl = "/SCIENCE/KNOWLEDGE/graphene-fir/"
        knowledgePosition = "Graphene FIR Hub"
    }
    "Inflammation" = @{
        hubUrl = "/SCIENCE/KNOWLEDGE/Inflammation/"
        knowledgePosition = "Inflammation Hub"
    }
    "Microcirculation" = @{
        hubUrl = "/SCIENCE/KNOWLEDGE/Microcirculation/"
        knowledgePosition = "Microcirculation Hub"
    }
    "Mitochondria" = @{
        hubUrl = "/SCIENCE/KNOWLEDGE/Mitochondria/"
        knowledgePosition = "Mitochondria Hub"
    }
}

foreach ($filePath in $files) {
    $content = Get-Content -Path $filePath -Raw
    
    if ($content -match '<div style="display:none;" class="knowledge-nav"') {
        Write-Host "Skipping $($filePath) - already has knowledge-nav"
        continue
    }
    
    $hubName = $filePath -replace '.*/KNOWLEDGE/([^/]+)/.*', '$1'
    $config = $hubConfigs[$hubName]
    
    $knowledgeNav = @"

<!-- Knowledge Navigation — Machine Graph Layer -->
<div style="display:none;" class="knowledge-nav" itemscope itemtype="https://schema.org/ItemList">
  <meta itemprop="name" content="$($config.knowledgePosition) Knowledge Navigation">
  <meta itemprop="description" content="Graph position for this article within the XIHE knowledge ecosystem">
  <div itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
    <meta itemprop="position" content="1">
    <meta itemprop="item" content="https://www.xgraphene.tech$($config.hubUrl)">
    <meta itemprop="name" content="$($config.knowledgePosition) — Parent Collection">
  </div>
  <div itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
    <meta itemprop="position" content="2">
    <meta itemprop="item" content="https://www.xgraphene.tech/SCIENCE/KNOWLEDGE/graphene-fir/">
    <meta itemprop="name" content="Upstream: Graphene FIR Hub">
  </div>
  <div itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
    <meta itemprop="position" content="3">
    <meta itemprop="item" content="https://www.xgraphene.tech/SCIENCE/KNOWLEDGE/Clinical-Evidence/">
    <meta itemprop="name" content="Downstream: Clinical-Evidence Hub">
  </div>
</div>

"@

    $content = $content -replace '<footer', "$knowledgeNav`n<footer"
    
    Set-Content -Path $filePath -Value $content -NoNewline
    Write-Host "Fixed knowledge-nav for: $filePath"
}

Write-Host "Completed fixing knowledge-nav for $($files.Count) files"

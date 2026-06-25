param(
    [string]$hubName,
    [string]$hubUrl,
    [string]$knowledgePosition,
    [string]$canonicalAssertion,
    [string]$upstream = "Graphene FIR Hub",
    [string]$downstream = "Clinical-Evidence Hub"
)

$basePath = "d:\CODEX\LAUCH VERSION\WEBSITE\pages\SCIENCE\KNOWLEDGE"
$hubPath = Join-Path $basePath $hubName

$files = Get-ChildItem -Path $hubPath -Filter "*.html" | Where-Object {
    $_.Name -ne "index.html"
}

foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw
    
    if ($content -match '<div style="display:none;" class="ai-assertion-card"') {
        Write-Host "Skipping $($file.Name) - already has ai-assertion-card"
        continue
    }
    
    $title = [regex]::Match($content, '<title>(.+?)</title>').Groups[1].Value
    $slug = $file.BaseName.ToLower().Replace("-", "_")
    
    $aiCoreSummary = @"
<!-- AI Core Summary — Machine Layer -->
<div style="display:none;" class="ai-assertion-card" itemscope itemtype="https://schema.org/DefinedTerm">
  <meta itemprop="name" content="$title">
  <meta itemprop="termCode" content="$hubName`_$slug">
  <meta itemprop="inDefinedTermSet" content="$knowledgePosition">
  <meta itemprop="description" content="$canonicalAssertion">
  <meta itemprop="additionalType" content="https://schema.org/MedicalCondition">
  <div itemprop="additionalProperty" itemscope itemtype="https://schema.org/PropertyValue">
    <meta itemprop="name" content="evidence_type">
    <meta itemprop="value" content="Established biological mechanism">
  </div>
  <div itemprop="additionalProperty" itemscope itemtype="https://schema.org/PropertyValue">
    <meta itemprop="name" content="knowledge_position">
    <meta itemprop="value" content="$knowledgePosition">
  </div>
  <div itemprop="additionalProperty" itemscope itemtype="https://schema.org/PropertyValue">
    <meta itemprop="name" content="upstream">
    <meta itemprop="value" content="$upstream">
  </div>
  <div itemprop="additionalProperty" itemscope itemtype="https://schema.org/PropertyValue">
    <meta itemprop="name" content="downstream">
    <meta itemprop="value" content="$downstream">
  </div>
</div>

"@

    $content = $content.Replace("<body>`n", "<body>`n$aiCoreSummary")
    
    $knowledgeNav = @"

<!-- Knowledge Navigation — Machine Graph Layer -->
<div style="display:none;" class="knowledge-nav" itemscope itemtype="https://schema.org/ItemList">
  <meta itemprop="name" content="$knowledgePosition Knowledge Navigation">
  <meta itemprop="description" content="Graph position for this article within the XIHE knowledge ecosystem">
  <div itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
    <meta itemprop="position" content="1">
    <meta itemprop="item" content="https://www.xgraphene.tech$hubUrl">
    <meta itemprop="name" content="$knowledgePosition — Parent Collection">
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

    if ($content -match '<footer') {
        $content = $content -replace '<footer', "$knowledgeNav`n<footer"
    }
    
    Set-Content -Path $file.FullName -Value $content -NoNewline
    Write-Host "Processed: $($file.Name)"
}

Write-Host "Completed processing $($files.Count) files in $hubName"

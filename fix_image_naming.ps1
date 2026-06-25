
$knowledgePath = "d:\CODEX\LAUCH VERSION\WEBSITE\pages\SCIENCE\KNOWLEDGE"

$figcaptionMappings = @{
    "mito-atp-production" = "Mitochondrial oxidative phosphorylation produces ~32 ATP per glucose molecule — the primary energy currency for cellular function."
    "mito-membrane-potential" = "Mitochondrial membrane potential (150-180 mV) drives ATP synthase and is a key indicator of mitochondrial health."
    "fir-spectrum" = "Graphene FIR emission peaks at 9.4μm within the 5-15μm range — aligning with water molecule absorption for resonant energy transfer."
    "fir-emissivity-comparison" = "XIHE graphene heating film achieves 0.88 spectral emissivity, significantly higher than commodity graphene alternatives."
    "sleep-brainwave-alpha" = "Alpha brainwaves (8-12 Hz) dominate during relaxed wakefulness and light sleep, facilitating transition to deeper sleep stages."
    "sleep-circadian-alarm" = "The body's internal circadian clock regulates sleep-wake cycles through light exposure and melatonin production."
    "inflam-m1-m2-polarization" = "Macrophage polarization between M1 (pro-inflammatory) and M2 (anti-inflammatory) states is critical for immune response and tissue repair."
    "atp-electron-transport-chain" = "The electron transport chain in mitochondria generates the proton gradient that drives ATP synthesis."
}

$htmlFiles = Get-ChildItem -Path $knowledgePath -Recurse -Filter "*.html"

foreach ($file in $htmlFiles) {
    $content = Get-Content -Path $file.FullName -Raw
    
    $content = $content -replace '<figure data-graph-node="figure_XIHE" data-graph-edges="">', ''
    $content = $content -replace '<figcaption></figcaption></figure> style=', ' style='
    
    $content = $content -replace '<img\s+src="([^"]+VISUAL-LIBRARY[^"]+)"\s+alt="([^"]+)"\s*>', {
        param($match)
        $src = $match.Groups[1].Value
        $alt = $match.Groups[2].Value
        
        $nodeId = "figure_" + $alt.Replace(" ", "_").Replace("?", "").Replace("-", "_")
        $edges = ""
        
        $figCaption = "This image illustrates key concepts related to this topic."
        
        foreach ($key in $figcaptionMappings.Keys) {
            if ($src -match $key -or $alt -match [regex]::Escape($key.Replace("-", " "))) {
                $figCaption = $figcaptionMappings[$key]
                break
            }
        }
        
        return "<figure data-graph-node=`"$nodeId`" data-graph-edges=`"$edges`"><img src=`"$src`" alt=`"$alt`" loading=`"lazy`" decoding=`"async`"><figcaption>$figCaption</figcaption></figure>"
    }
    
    Set-Content -Path $file.FullName -Value $content -NoNewline
    Write-Host "Updated: $($file.FullName)"
}

Write-Host "HTML image tags updated with proper figure wrapper and figcaption."

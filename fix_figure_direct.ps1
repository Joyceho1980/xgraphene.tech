
$filePath = "d:\CODEX\LAUCH VERSION\WEBSITE\pages\SCIENCE\KNOWLEDGE\Sleep\how-graphene-fir-affects-sleep-architecture.html"

$content = Get-Content -Path $filePath -Raw

$content = $content -replace '<figure>\s*<figure data-graph-node="figure_A calm bedroom before dawn with a steady thermal atmosphere" data-graph-edges=""><img src="/VISUAL-LIBRARY/how-graphene-fir-affects-sleep-architecture-hero.png" alt="A calm bedroom before dawn with a steady thermal atmosphere" loading="lazy" decoding="async"><figcaption></figcaption></figure> >\s*<figcaption>The article starts with the human feeling, not with the technology.</figcaption>\s*</figure>', '<figure data-graph-node="figure_A calm bedroom before dawn with a steady thermal atmosphere" data-graph-edges=""><img src="/VISUAL-LIBRARY/how-graphene-fir-affects-sleep-architecture-hero.png" alt="A calm bedroom before dawn with a steady thermal atmosphere" loading="lazy" decoding="async"><figcaption>The article starts with the human feeling, not with the technology.</figcaption></figure>'

$content = $content -replace '<figure>\s*<figure data-graph-node="figure_A steady thermal bedroom environment with cool dawn light and a warm sleep zone" data-graph-edges=""><img src="/VISUAL-LIBRARY/how-graphene-fir-affects-sleep-architecture-support.png" alt="A steady thermal bedroom environment with cool dawn light and a warm sleep zone" loading="lazy" decoding="async"><figcaption></figcaption></figure> >\s*<figcaption>A stable thermal environment may be easier for the body to adapt to than an uneven one.</figcaption>\s*</figure>', '<figure data-graph-node="figure_A steady thermal bedroom environment with cool dawn light and a warm sleep zone" data-graph-edges=""><img src="/VISUAL-LIBRARY/how-graphene-fir-affects-sleep-architecture-support.png" alt="A steady thermal bedroom environment with cool dawn light and a warm sleep zone" loading="lazy" decoding="async"><figcaption>A stable thermal environment may be easier for the body to adapt to than an uneven one.</figcaption></figure>'

Set-Content -Path $filePath -Value $content -NoNewline
Write-Host "Fixed: $filePath"

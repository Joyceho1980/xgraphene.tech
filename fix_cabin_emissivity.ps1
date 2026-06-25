$filePath = "d:\CODEX\LAUCH VERSION\WEBSITE\pages\PRODUCTS\CABIN\cabin.html"
$content = Get-Content -Path $filePath -Raw

$content = $content.Replace(
    'at 0.98 emissivity',
    'with NIQS-certified 0.88 normal total emissivity'
)

$content = $content.Replace(
    '0.98 emissivity',
    '0.88 normal total emissivity (NIQS-certified)'
)

$content = $content.Replace(
    'achieves 0.98 normal total emissivity',
    'achieves NIQS-certified 0.88 normal total emissivity'
)

$content = $content.Replace(
    'How is the 0.98 emissivity verified?',
    'What emissivity does the XIHE CABIN achieve?'
)

$content = $content.Replace(
    'The 0.98 emissivity is FT-IR spectroscopy verified by IKKEM (Tan Kah Kee Innovation Laboratory). The graphene module''s far-infrared spectrum concentrates in the 5-15μm range, characteristic emission peak near 9.4μm, with normal total emissivity tested at 0.98 — far exceeding the industry 0.85 average. Full spectral test reports available upon request.',
    'The XIHE CABIN uses the same core graphene film technology as all XIHE products: NIQS-certified 0.88 normal total emissivity (NIQS report (2022)WT-HW-00529). This is the production-verified value measured on bare film, ensuring consistent, repeatable performance across all units. Higher peak values (up to 0.98) have been measured on packaged systems under specific laboratory conditions at IKKEM, but the certified production specification is 0.88 — already industry-leading.'
)

$content = $content.Replace(
    '<strong style="color: var(--accent-gold);">0.98</strong> Emissivity',
    '<strong style="color: var(--accent-gold);">0.88</strong> Emissivity (NIQS)'
)

$content = $content.Replace(
    'at 0.98 emissivity',
    'at NIQS-certified 0.88 emissivity'
)

Set-Content -Path $filePath -Value $content -NoNewline
Write-Host "Completed fixing cabin.html"

$count = (Select-String -Path $filePath -Pattern "0\.98" | Measure-Object).Count
Write-Host "Remaining 0.98 references: $count"

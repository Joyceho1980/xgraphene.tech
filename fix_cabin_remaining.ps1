$filePath = "d:\CODEX\LAUCH VERSION\WEBSITE\pages\PRODUCTS\CABIN\cabin.html"
$content = Get-Content -Path $filePath -Raw

$content = $content.Replace(
    '"text": "The 0.88 normal total emissivity (NIQS-certified) is FT-IR spectroscopy verified by IKKEM (Tan Kah Kee Innovation Laboratory). The graphene module''s far-infrared spectrum concentrates in the 5-15μm range, characteristic emission peak near 9.4μm, with normal total emissivity tested at 0.98 — far exceeding the industry 0.85 average. Full spectral test reports available upon request."',
    '"text": "The XIHE CABIN uses NIQS-certified 0.88 normal total emissivity (NIQS report (2022)WT-HW-00529), verified through independent testing. This production-certified value ensures consistent performance across all units."'
)

$content = $content.Replace(
    '9.4μm &nbsp;·&nbsp; 0.98 Emissivity',
    '9.4μm &nbsp;·&nbsp; 0.88 Emissivity'
)

$content = $content.Replace(
    '<p style="font-size: 32px; font-weight: 200; color: var(--accent-gold); margin-bottom: 8px; letter-spacing: 1px; font-family: ''Urbanist'', sans-serif;">0.97 – 0.98</p>',
    '<p style="font-size: 32px; font-weight: 200; color: var(--accent-gold); margin-bottom: 8px; letter-spacing: 1px; font-family: ''Urbanist'', sans-serif;">0.88 (NIQS)</p>'
)

$content = $content.Replace(
    'XIHE CABIN achieves <strong>0.98 normal total emissivity</strong>, with characteristic emission peak near <strong>9.4μm</strong>',
    'XIHE CABIN achieves <strong>0.88 normal total emissivity (NIQS-certified)</strong>, with characteristic emission peak near <strong>9.4μm</strong>'
)

$content = $content.Replace(
    '0.98 is based on <strong>IKKEM (Tan Kah Kee Innovation Laboratory) FT-IR spectroscopy analysis</strong> — actual test results, not theoretical values. The graphene module''s far-infrared spectrum concentrates in the 5-15μm range, characteristic emission peak near 9.4μm, far exceeding the industry 0.85 average.',
    'Our 0.88 normal total emissivity certification is based on <strong>NIQS (National Infrared Quality Supervision and Inspection Center) testing</strong> (NIQS report (2022)WT-HW-00529). This is the production-verified value for bare graphene film, ensuring consistent, repeatable performance.'
)

Set-Content -Path $filePath -Value $content -NoNewline
Write-Host "Completed fixing remaining 0.98 references"

$count = (Select-String -Path $filePath -Pattern "0\.98" | Measure-Object).Count
Write-Host "Remaining 0.98 references: $count"

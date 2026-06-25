$filePath = "d:\CODEX\LAUCH VERSION\WEBSITE\pages\nodes\emissivity.html"
$content = Get-Content -Path $filePath -Raw

$content = $content.Replace(
    '<div class="fact"><div class="label">XIHE Packaged</div><div class="value">System-level emissivity: 0.98, measured on the packaged configuration.</div></div>',
    '<div class="fact"><div class="label">XIHE Packaged (Lab)</div><div class="value">System-level emissivity up to 0.98, measured on the packaged configuration under laboratory test conditions at IKKEM. This is not the production-certified value.</div></div>'
)

$content = $content.Replace(
    '<p><strong>Packaged system:</strong> 0.98 emissivity.</p>',
    '<p><strong>Packaged system (lab measurement):</strong> up to 0.98 emissivity — measured under specific IKKEM laboratory conditions. Production-certified value: 0.88 (NIQS reported).</p>'
)

$content = $content.Replace(
    'Emissivity is a dimensionless measure of how efficiently a material emits thermal radiation relative to a blackbody. In XIHE graphene far-infrared systems, the bare film is specified at 0.88 normal spectral emissivity, while the packaged system is specified at 0.98 emissivity under the stated measurement conditions. GB/T 30127 is the relevant national infrared testing reference for the measurement context. Emissivity affects radiative heat-transfer efficiency and must be interpreted together with wavelength, surface condition, calibration, and test geometry.',
    'Emissivity is a dimensionless measure of how efficiently a material emits thermal radiation relative to a blackbody. In XIHE graphene far-infrared systems, the bare film is specified at 0.88 normal spectral emissivity, while the packaged system is specified at 0.98 emissivity under the stated measurement conditions. GB/T 30127 is the relevant national infrared testing reference for the measurement context. Emissivity affects radiative heat-transfer efficiency and must be interpreted together with wavelength, surface condition, calibration, and test geometry. The production-certified value for XIHE graphene bare film is 0.88 (NIQS report (2022)WT-HW-00529).'
)

Set-Content -Path $filePath -Value $content -NoNewline
Write-Host "Completed fixing emissivity.html"

$count = (Select-String -Path $filePath -Pattern "0\.98" | Measure-Object).Count
Write-Host "Remaining 0.98 references: $count"


$visualLibraryPath = "d:\CODEX\LAUCH VERSION\VISUAL-LIBRARY"

$renameMappings = @(
    @{ OldName = "sleep-brainwave-alpha.webp"; NewName = "sleep-cellular-health-regulation.webp" },
    @{ OldName = "fir-application-hero.jpg"; NewName = "fir-application-overview.jpg" },
    @{ OldName = "fir-cd-ophthalmology-hospital.jpg"; NewName = "fir-clinical-ophthalmology.jpg" },
    @{ OldName = "fir-medical-forum.jpg"; NewName = "fir-medical-engineering-forum.jpg" },
    @{ OldName = "fir-nobel-reference.jpg"; NewName = "fir-nobel-physics-reference.jpg" },
    @{ OldName = "fir-tertiary-hospital.jpg"; NewName = "fir-tertiary-hospital-partner.jpg" },
    @{ OldName = "fir-xm-tcm-hospital.jpg"; NewName = "fir-tcm-hospital-collab.jpg" },
    @{ OldName = "fir-xm-xianyue-hospital.jpg"; NewName = "fir-mental-health-center.jpg" },
    @{ OldName = "fir-zhongshan-hospital.png"; NewName = "fir-zhongshan-hospital-partner.png" }
)

foreach ($mapping in $renameMappings) {
    $oldPath = Join-Path $visualLibraryPath $mapping.OldName
    $newPath = Join-Path $visualLibraryPath $mapping.NewName
    
    if (Test-Path $oldPath) {
        if (Test-Path $newPath) {
            Write-Warning "Target file exists: $($mapping.NewName), skipping"
        } else {
            Rename-Item -Path $oldPath -NewName $mapping.NewName
            Write-Host "Renamed: $($mapping.OldName) -> $($mapping.NewName)"
        }
    } else {
        Write-Warning "Source file not found: $($mapping.OldName)"
    }
}

Write-Host "`n关键图片重命名完成！"

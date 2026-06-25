
$visualLibraryPath = "d:\CODEX\LAUCH VERSION\VISUAL-LIBRARY"

$renameMappings = @(
    @{ OldName = "Sleep Hero.webp"; NewName = "sleep-brainwave-alpha.webp" },
    @{ OldName = "application hero.jpg"; NewName = "fir-application-hero.jpg" },
    @{ OldName = "Chengdu Xinjin Weishen Ophthalmology Hospital.jpg"; NewName = "fir-cd-ophthalmology-hospital.jpg" },
    @{ OldName = "Medical Engineering Cross-Discipline Forum.jpg"; NewName = "fir-medical-forum.jpg" },
    @{ OldName = "Nobel.jpg"; NewName = "fir-nobel-reference.jpg" },
    @{ OldName = "Tertiary Hospitals.jpg"; NewName = "fir-tertiary-hospital.jpg" },
    @{ OldName = "Xiamen Traditional Chinese Medicine Hospital.jpg"; NewName = "fir-xm-tcm-hospital.jpg" },
    @{ OldName = "Xiamen Xianyue Hospital (Mental Health Center).jpg"; NewName = "fir-xm-xianyue-hospital.jpg" },
    @{ OldName = "Zhongshan Hospital.png"; NewName = "fir-zhongshan-hospital.png" }
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

Write-Host "`nRenaming completed. Now handling hash-named files..."

$hashFiles = Get-ChildItem -Path $visualLibraryPath | Where-Object { 
    $_.Name -match '^[A-Za-z0-9_-]+(?=\.(webp|jpg|jpeg|png)$)' -and 
    $_.Name -notmatch '^(sleep|fir|mito|atp|fatigue|recovery|inflam|microcirc|metab|bioener|oxstress|aging)-'
}

$counter = 1
foreach ($file in $hashFiles) {
    $extension = $file.Extension
    $newName = "fir-asset-$counter$extension"
    $newPath = Join-Path $visualLibraryPath $newName
    
    if (Test-Path $newPath) {
        $counter++
        $newName = "fir-asset-$counter$extension"
        $newPath = Join-Path $visualLibraryPath $newName
    }
    
    Rename-Item -Path $file.FullName -NewName $newName
    Write-Host "Renamed hash file: $($file.Name) -> $newName"
    $counter++
}

Write-Host "`nAll files renamed successfully!"


$visualLibraryPath = "d:\CODEX\LAUCH VERSION\VISUAL-LIBRARY"

Write-Host "根据图片内容命名：线粒体氧化磷酸化途径图"

$renameMappings = @(
    @{ OldName = "fir-asset-1.jpg"; NewName = "mito-oxidative-phosphorylation-pathway.jpg" }
)

foreach ($mapping in $renameMappings) {
    $oldPath = Join-Path $visualLibraryPath $mapping.OldName
    $newPath = Join-Path $visualLibraryPath $mapping.NewName
    
    if (Test-Path $oldPath) {
        if (Test-Path $newPath) {
            Write-Warning "目标文件已存在: $($mapping.NewName)"
        } else {
            Rename-Item -Path $oldPath -NewName $mapping.NewName
            Write-Host "已命名: $($mapping.OldName) -> $($mapping.NewName)"
        }
    } else {
        Write-Warning "源文件未找到: $($mapping.OldName)"
    }
}

Write-Host "`n命名完成！"

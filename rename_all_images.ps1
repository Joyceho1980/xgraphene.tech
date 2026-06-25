
$visualLibraryPath = "d:\CODEX\LAUCH VERSION\VISUAL-LIBRARY"

$renameMappings = @(
    @{ OldName = "SLEEP PROBLEM FRAME.webp"; NewName = "sleep-problem-frame.webp" },
    @{ OldName = "SLEEP SYSTEM CORDINATION.webp"; NewName = "sleep-system-coordination.webp" },
    @{ OldName = "Where sleep becomes cellular recovery.webp"; NewName = "sleep-cellular-recovery.webp" },
    @{ OldName = "CLINICAL RESEARCH.webp"; NewName = "fir-clinical-research.webp" },
    @{ OldName = "EEG  Brainwaves.webp"; NewName = "sleep-eeg-brainwaves.webp" },
    @{ OldName = "FAR-INFRARED GRAPHENE.webp"; NewName = "fir-graphene-spectrum.webp" },
    @{ OldName = "How Far-Infrared Radiation May Influence Brainwaves and Relaxation States.webp"; NewName = "fir-brainwave-relaxation.webp" },
    @{ OldName = "why-do-i-wake-up-tired.webp"; NewName = "sleep-morning-fatigue.webp" },
    @{ OldName = "GRAPHENE HERO.webp"; NewName = "fir-graphene-hero.webp" },
    @{ OldName = "m1-m2-macrophage-polarization-fir.webp"; NewName = "fir-macrophage-polarization.webp" },
    @{ OldName = "beyond-thermal-comfort-card.webp"; NewName = "fir-thermal-comfort.webp" },
    @{ OldName = "are-mitochondria-a-disease-hero-sunrise.webp"; NewName = "mito-disease-sunrise.webp" },
    @{ OldName = "how-graphene-fir-affects-sleep-architecture-hero.png"; NewName = "fir-sleep-architecture-hero.png" },
    @{ OldName = "how-graphene-fir-affects-sleep-architecture-support.png"; NewName = "fir-sleep-architecture-support.png" },
    @{ OldName = "Why cannot i fall into sleep at night hero.webp"; NewName = "sleep-insomnia-night.webp" },
    @{ OldName = "why-do-i-wake-up-at-430am-hero.png"; NewName = "sleep-430am-wake-hero.png" },
    @{ OldName = "Everyone has an advice.webp"; NewName = "sleep-advice.webp" },
    @{ OldName = "Modern Life Disrupts the System.webp"; NewName = "sleep-modern-life-disruption.webp" },
    @{ OldName = "Sleep Is More Than Rest.webp"; NewName = "sleep-beyond-rest.webp" },
    @{ OldName = "Returning to the Basics.webp"; NewName = "sleep-basics.webp" },
    @{ OldName = "why-do-i-wake-up-at-430am-half-awake.png"; NewName = "sleep-430am-half-awake.png" },
    @{ OldName = "why-do-i-wake-up-at-430am-closeup.png"; NewName = "sleep-430am-closeup.png" },
    @{ OldName = "why-do-i-wake-up-at-430am-evening-walk.png"; NewName = "sleep-430am-evening-walk.png" },
    @{ OldName = "why-do-i-wake-up-at-430am-dawn-transition.png"; NewName = "sleep-430am-dawn-transition.png" },
    @{ OldName = "How Graphene Far-Infrared May Support Sleep, Anxiety, and Cognitive Recovery.webp"; NewName = "fir-sleep-anxiety-recovery.webp" },
    @{ OldName = "Xp1gnWd7C935tbWdTcfHIz8ay7EumQjyG3_qmlvuFcugxxS10EP9M1P1oPXTV4MunpYBB4z5M0j8.jpg"; NewName = "fir-asset-32.jpg" }
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

Write-Host "`n图片重命名完成！"

# Priority Pages Hero Asset Map

Date: 2026-06-16

## Status

Actual image generation through the local image API was attempted twice, but the provider returned:

`PermissionDeniedError: Your request was blocked.`

So this map uses existing project-approved assets where possible and defines exact prompts for the missing/new hero images.

## Asset folder

Use this folder for the current priority-page hero assets:

`D:\CODEX\LAUCH VERSION\DRAFTS\priority-pages\hero-assets`

## Available hero assets

| Asset | Role | Notes |
| --- | --- | --- |
| `hero-fatigue-energy.png` | Fatigue / low energy / mitochondrial dysfunction | Emotional human hero. Good for human entry pages. |
| `hero-sleep-recovery.jpg` | Sleep / overnight cellular recovery | Strong dark science hero with sleep and brain/mitochondria cues. |
| `hero-microcirculation-flow.jpg` | Microcirculation / circulation / delivery | Strong process hero. Works best with dark page overlay. |
| `hero-aging-recovery.png` | Aging / recovery / resilience | Emotional recovery landscape. Good for aging/recovery pages. |
| `hero-mitochondria-energy.jpg` | ATP / mitochondria / cellular energy | Existing mitochondria science hero. |

## Page-to-asset mapping

| File | Recommended Hero Asset | Role |
| --- | --- | --- |
| `01-why-always-tired.md` | `hero-fatigue-energy.png` | Primary hero |
| `02-low-cellular-energy.md` | `hero-mitochondria-energy.jpg` | Primary hero |
| `03-mitochondrial-dysfunction.md` | `hero-fatigue-energy.png` | Primary hero |
| `04-aging-and-energy.md` | `hero-aging-recovery.png` | Primary hero |
| `05-what-is-atp.md` | `hero-mitochondria-energy.jpg` | Primary hero |
| `06-wake-up-tired.md` | `hero-sleep-recovery.jpg` | Primary hero |
| `07-sleep-cellular-recovery.md` | `hero-sleep-recovery.jpg` | Primary hero |
| `08-poor-sleep-quality.md` | `hero-sleep-recovery.jpg` | Primary hero |
| `09-chronic-inflammation.md` | new image needed: `hero-inflammation-resolution.png` | Generate |
| `10-inflammation-energy.md` | new image needed: `hero-inflammation-energy.png` | Generate |
| `11-hidden-inflammation-signs.md` | `hero-fatigue-energy.png` | Temporary hero |
| `12-microcirculation.md` | `hero-microcirculation-flow.jpg` | Primary hero |
| `13-cold-hands-feet.md` | `hero-microcirculation-flow.jpg` | Temporary hero |
| `14-circulation-recovery.md` | `hero-microcirculation-flow.jpg` | Primary hero |
| `15-recovery-slows-with-age.md` | `hero-aging-recovery.png` | Primary hero |
| `16-recover-faster-exercise.md` | `hero-aging-recovery.png` | Temporary hero |
| `17-natural-muscle-recovery.md` | `hero-aging-recovery.png` | Temporary hero |
| `18-why-do-we-age.md` | `hero-aging-recovery.png` | Primary hero |
| `19-cellular-resilience.md` | `hero-mitochondria-energy.jpg` | Temporary hero |
| `20-support-healthy-aging.md` | `hero-aging-recovery.png` | Primary hero |

## New hero images still recommended

The current asset set is enough for first website placement, but three images should be generated later for better distinctiveness:

1. `hero-inflammation-resolution.png`
2. `hero-exercise-recovery-system.png`
3. `hero-cellular-resilience.png`

## Prompt 1: Inflammation Resolution Hero

Asset name:

`hero-inflammation-resolution.png`

Prompt:

```text
Generate a premium website hero banner for XIHE Science Knowledge Hub.

Layout:
- ultra-wide website hero banner
- left 55% clean negative space for title overlay
- right 45% scientific visualization
- no text, no labels, no numbers, no typography

Style:
- high-end scientific editorial
- dark navy blue background
- subtle gold and cyan highlights
- calm, credible, regenerative
- no aggressive red inflammation imagery
- no gore, no disease-drama, no hospital scene

Topic:
Chronic inflammation and inflammatory resolution.

Visual concept:
Show an abstract immune microenvironment transitioning from low-grade inflammatory signal activity into a calmer resolution state. Use soft amber particles on the far right gradually organizing into cyan-gold balanced cellular signals. The image should feel like inflammation is resolving, not like the body is under attack. Include subtle macrophage-like cellular forms, but keep them elegant and abstract rather than textbook-like.
```

## Prompt 2: Exercise Recovery System Hero

Asset name:

`hero-exercise-recovery-system.png`

Prompt:

```text
Generate a premium website hero banner for XIHE Science Knowledge Hub.

Layout:
- ultra-wide website hero banner
- left 55% clean negative space for title overlay
- right 45% visual focus
- no text, no labels, no numbers, no typography

Style:
- premium editorial science style
- dark navy and graphite base
- restrained warm gold and cyan highlights
- realistic but slightly cinematic
- no gym-bro aesthetic, no supplement advertising

Topic:
Exercise recovery as a biological system.

Visual concept:
Show a quiet post-exercise recovery moment: one athletic adult resting or walking slowly after training, with subtle abstract overlays of microcirculation flow and cellular repair signals near the body. The mood should feel calm, controlled, and restorative. Keep it high-end and medically credible, not fitness influencer content.
```

## Prompt 3: Cellular Resilience Hero

Asset name:

`hero-cellular-resilience.png`

Prompt:

```text
Generate a premium website hero banner for XIHE Science Knowledge Hub.

Layout:
- ultra-wide website hero banner
- left 55% clean negative space for title overlay
- right 45% scientific visualization
- no text, no labels, no numbers, no typography

Style:
- high-end scientific editorial
- dark navy background
- subtle gold and cyan signal lines
- minimal, premium, calm
- no damage imagery, no cracked cells, no alarm colors

Topic:
Cellular resilience under stress.

Visual concept:
Show a stable field of abstract cells maintaining structure under a gentle external stress signal. The cells should look organized, responsive, and alive. Use soft glowing network lines to suggest mitochondrial reserve, antioxidant response, and recovery stability. The feeling should be quiet robustness, not combat.
```

## Implementation note for DeepSeek

Use the asset map first.

Do not place explanatory text inside the hero image. The page template should provide:

- H1 overlay from the markdown title
- deck/subtitle below H1
- hero image as mood and first impression only

Keep mechanism diagrams, if any, inside the article body.

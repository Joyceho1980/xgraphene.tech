# TASK: Fix 21 Remaining 404s — Page Internal Links

## Priority: P0
## Context: Claude Code fixed Vercel rewrites (70→21). These 21 are page-internal hrefs pointing to wrong paths.

## Problem
These URLs return 404 on xgraphene.tech. They are NOT rewrite issues — they are incorrect href values inside HTML files.

## Fix List

### Type A: Missing .html extension (7 files)
Change href target from `.../article-name` to `.../article-name.html`

| File | Current href | Fix to |
|------|-------------|--------|
| `WEBSITE/pages/SCIENCE/KNOWLEDGE/Fatigue/why-am-i-always-tired.html` | `/SCIENCE/KNOWLEDGE/Fatigue/why-am-i-always-tired` | `/SCIENCE/KNOWLEDGE/Fatigue/why-am-i-always-tired.html` |
| `WEBSITE/pages/SCIENCE/KNOWLEDGE/Inflammation/hidden-signs-your-body-is-inflamed.html` | `/SCIENCE/KNOWLEDGE/Inflammation/hidden-signs-your-body-is-inflamed` | add `.html` |
| `WEBSITE/pages/SCIENCE/KNOWLEDGE/Inflammation/how-does-inflammation-affect-energy.html` | `/SCIENCE/KNOWLEDGE/Inflammation/how-does-inflammation-affect-energy` | add `.html` |
| `WEBSITE/pages/SCIENCE/KNOWLEDGE/Inflammation/what-is-chronic-inflammation` | `/SCIENCE/KNOWLEDGE/Inflammation/what-is-chronic-inflammation` | add `.html` |
| `WEBSITE/pages/SCIENCE/KNOWLEDGE/Microcirculation/how-does-circulation-affect-recovery` | Same pattern — add `.html` |
| `WEBSITE/pages/SCIENCE/KNOWLEDGE/Microcirculation/what-is-microcirculation` | Same — add `.html` |
| `WEBSITE/pages/SCIENCE/KNOWLEDGE/Microcirculation/why-are-my-hands-and-feet-always-cold` | Same — add `.html` |
| `WEBSITE/pages/SCIENCE/KNOWLEDGE/Mitochondria/what-is-mitochondrial-dysfunction` | add `.html` |
| `WEBSITE/pages/SCIENCE/KNOWLEDGE/Recovery/how-can-i-recover-faster-after-exercise` | add `.html` |
| `WEBSITE/pages/SCIENCE/KNOWLEDGE/Recovery/what-helps-muscle-recovery-naturally` | add `.html` |
| `WEBSITE/pages/SCIENCE/KNOWLEDGE/Recovery/why-does-recovery-slow-down-with-age` | add `.html` |
| `WEBSITE/pages/SCIENCE/KNOWLEDGE/cellular-energy/what-causes-low-cellular-energy` | add `.html` |
| `WEBSITE/pages/SCIENCE/KNOWLEDGE/cellular-energy/what-is-atp-and-why-does-it-matter` | add `.html` |
| `WEBSITE/pages/SCIENCE/KNOWLEDGE/cellular-energy/what-is-atp` | add `.html` |
| `WEBSITE/pages/SCIENCE/KNOWLEDGE/cellular-energy/what-is-cellular-resilience` | add `.html` |
| `WEBSITE/pages/SCIENCE/KNOWLEDGE/healthy-aging/how-can-we-support-healthy-aging` | add `.html` |
| `WEBSITE/pages/SCIENCE/KNOWLEDGE/healthy-aging/why-does-aging-drain-your-energy` | add `.html` |

### Type B: Space in URL (1 file)
| File | Current href | Fix to |
|------|-------------|--------|
| `WEBSITE/pages/SCIENCE/KNOWLEDGE/graphene-fir/graphene-fir-sleep-anxiety-cognitive-recovery.html` | `/SCIENCE/KNOWLEDGE/graphene-fir/How Graphene Far-Infrared May Support Sleep, Anxiety, and Cognitive Recovery.html` | `/SCIENCE/KNOWLEDGE/graphene-fir/graphene-fir-sleep-anxiety-cognitive-recovery.html` |

### Type C: Path not existing (3 files)
| File | Current href | Fix to |
|------|-------------|--------|
| `WEBSITE/pages/graphene-fir/what-is-emissivity.html` | `/graphene-fir/what-is-emissivity/` | `/graphene-fir/what-is-emissivity.html` |
| `WEBSITE/pages/CONTACT/index.html` | `/CONTACT/` | `/CONTACT/index.html` |
| `WEBSITE/pages/NEWS/index.html` | `/NEWS/` | `/NEWS/index.html` |

## Design Note
Text-only href changes. Do NOT modify any content, styling, or structure.

## Verification
After changes, verify:
- [ ] `curl -I https://www.xgraphene.tech/SCIENCE/KNOWLEDGE/Fatigue/why-am-i-always-tired.html` → 200
- [ ] `curl -I https://www.xgraphene.tech/graphene-fir/what-is-emissivity.html` → 200
- [ ] All 21 fixed URLs return 200

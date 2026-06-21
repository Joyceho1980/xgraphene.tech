# 5-Layer Review: Batch — Sleep, Recovery & Graphene FIR Knowledge Articles

## Review Time
2026-06-20 14:58 CST

## Files Reviewed (6 HTML files, all modified at 14:56:25)

| # | File | Subdirectory |
|---|------|-------------|
| 1 | `graphene-sleep-brainwaves.html` | graphene-fir/ |
| 2 | `How Graphene Far-Infrared May Support Sleep, Anxiety, and Cognitive Recovery.html` | graphene-fir/ |
| 3 | `how-does-sleep-affect-cellular-recovery.html` | Sleep/ |
| 4 | `index.html` | Sleep/ |
| 5 | `why-cant-i-fall-asleep-at-night.html` | Sleep/ |
| 6 | `why-do-i-wake-up-tired.html` | Sleep/ |

## Layer 1 — Levels Check (Structure Integrity)

✅ All 6 files:
- Correct `<!DOCTYPE html>` declaration
- `<html lang="en" translate="no">` with `notranslate` meta
- Responsive viewport meta
- XIHE icon link (`XIHE_ICON.svg`)
- Canonical URL present
- Google Analytics (`G-C7YSVFRQ6R`) — 2 hits each (head + body script)
- `<nav>` + `<div class="hub-nav">` navigation structure
- `<hero>` section present
- Schema.org JSON-LD (Article, BreadcrumbList, FAQPage where applicable)
- Footer with IKKEM attribution and industry standard reference

⚠ **Minor:** Sleep/index.html uses `footer` tag without a matching `</footer>` wrapper (line 314 `</footer>` closes at line 313, but there's no opening `<footer>` — the body's content ends with `</footer>` at line 314, then script at 318. The footer content is inside `<section>` within body. Structural, not a runtime issue.)

## Layer 2 — Links Check (Internal Link Integrity)

⚠ **Issues identified:**

### A. Root-relative paths (`/` prefix) — FALSE POSITIVES
All 6 files use root-relative paths like:
- `/ABOUT/AboutOrigin.html`, `/CONTACT/index.html`, `/PRODUCTS/ProductPage.html`
- `/SCIENCE/KNOWLEDGE/Sleep/`, `/SCIENCE/Landing.html`, etc.

These resolve correctly on the deployed site (`https://www.xgraphene.tech/ABOUT/...`). The local filesystem check falsely flags them as missing. **Expected behavior — no action needed.**

### B. Relative paths — ✅ All OK
All `../` and `./` relative links resolve to existing files:
- Cross-hub links (Microcirculation, Mitochondria, cellular-energy, Fatigue, Recovery, Inflammation, graphene-fir)
- Same-directory links (sibling articles)
- Subdirectory links (RESONANCE/, elderly-anxiety-cognition-rct-2024.html, how-fir-works.html, wavelength-essay.html)
- Static assets (fonts.css, XIHE_ICON.svg)

### C. Files referenced in `graphene-sleep-brainwaves.html`:
- `RESONANCE/` — ✅ exists as directory
- `RESONANCE/alpha-wave-zhejiang-2022.html` — ✅ exists
- `How Graphene Far-Infrared May Support Sleep, Anxiety, and Cognitive Recovery.html` — ✅ exists (same dir)

**Result: PASS** (root-relative links are deploy-time artifacts)

## Layer 3 — Keywords Check (SEO Metadata)

| File | Meta Description | Meta Keywords | OG Tags | Twitter Cards |
|------|-----------------|---------------|---------|---------------|
| graphene-sleep-brainwaves | ✅ Present | ✅ Present | ✅ Full set | ❌ Missing (`twitter:card` present but no `twitter:image`) |
| How Graphene... Sleep... | ✅ Present | ❌ **MISSING** | ❌ **MISSING** (no og:title, og:description, og:image, og:url, og:type) | ❌ Missing entirely |
| how-does-sleep-affect-cellular-recovery | ✅ Present | ❌ Missing | ✅ Full set | ✅ Present |
| Sleep/index.html (hub) | ✅ Present | ❌ Missing | ✅ Partial (missing og:url) | ✅ Has `twitter:card` |
| why-cant-i-fall-asleep-at-night | ✅ Present | ✅ Present | ✅ Full set | ✅ Present |
| why-do-i-wake-up-tired | ✅ Present | ✅ Present | ✅ Full set | ✅ Present |

**FAIL items:**
1. **CRITICAL:** `How Graphene Far-Infrared May Support Sleep, Anxiety, and Cognitive Recovery.html` — missing ALL OG tags and meta keywords. This will affect social sharing previews and SEO indexing.
2. **MINOR:** `Sleep/index.html` — missing `og:url` tag (though canonical URL is present). Missing meta keywords.
3. **MINOR:** `how-does-sleep-affect-cellular-recovery.html` — missing meta keywords.
4. **MINOR:** `graphene-sleep-brainwaves.html` — missing `twitter:image`.

## Layer 4 — GEO Check (Domain & Location)

✅ All 6 files have:
- Correct canonical URL pointing to `https://www.xgraphene.tech/...`
- xgraphene.tech domain references (at least 1 per file)

⚠ **Issues:**
- `How Graphene Far-Infrared May Support Sleep...` — only 1 xgraphene.tech ref (the canonical URL itself). In contrast, other files have 7-8 refs from OG tags, schema.org, etc. This is a direct consequence of the missing OG tags issue (Layer 3).

**Result: PASS** (issues are OG-tag related, not GEO-location related)

## Layer 5 — Template Check (Visual & Brand Consistency)

✅ All files have:
- CSS variable system (`--gold: #C5A059`, `--nav: #1A3348`, `--bg: #FAF8F5`)
- Font stack (Inter + Urbanist via fonts.css)
- Navigation with gold underline hover effects
- Hub navigation with active state indicator
- Gold border-top on quick-answer boxes
- Drop-cap styling on article lead sections
- Data callout / study reference / boundary box patterns

⚠ **Issues:**
1. `How Graphene Far-Infrared May Support Sleep...` has **no disclaimer/medical notice** — all article pages should carry the scientific disclaimer. The hub page (index.html) has its own disclaimer.
2. `Sleep/index.html` — uses a slightly different hero pattern (no `hero::before` gradient overlay, simpler approach) and uses `header` tag instead of `div.hero`. Also missing the `hub-nav` active state on all hub items (only marks "Sleep" as active).
3. Visual assets referenced in `Sleep/index.html` use root-relative `/VISUAL-LIBRARY/...` and `/PICTURE/...` paths — these resolve at deploy but cannot be verified locally.

**Result: CONDITIONAL PASS** — 2 files need OG tag fixes

---

## Summary

| File | Level 1 | Level 2 | Level 3 | Level 4 | Level 5 | Overall |
|------|---------|---------|---------|---------|---------|---------|
| graphene-sleep-brainwaves | ✅ | ✅ | ⚠ (twitter:image) | ✅ | ✅ | **PASS** |
| How Graphene... Sleep... | ✅ | ✅ | ❌ (OG & kw missing) | ⚠ | ⚠ (no disclaimer) | **FAIL** |
| how-does-sleep-affect-cellular-recovery | ✅ | ✅ | ⚠ (kw missing) | ✅ | ✅ | **PASS** |
| Sleep/index.html | ⚠ (footer) | ✅ | ⚠ (og:url, kw) | ✅ | ⚠ (hero pattern) | **PASS** |
| why-cant-i-fall-asleep-at-night | ✅ | ✅ | ✅ | ✅ | ✅ | **PASS** |
| why-do-i-wake-up-tired | ✅ | ✅ | ✅ | ✅ | ✅ | **PASS** |

## Fix Required

**File:** `How Graphene Far-Infrared May Support Sleep, Anxiety, and Cognitive Recovery.html`

1. Add Open Graph tags (minimal set):
   - `<meta property="og:title" content="...">`
   - `<meta property="og:description" content="...">`
   - `<meta property="og:image" content="https://www.xgraphene.tech/VISUAL-LIBRARY/How Graphene Far-Infrared May Support Sleep, Anxiety, and Cognitive Recovery.webp">`
   - `<meta property="og:url" content="https://www.xgraphene.tech/SCIENCE/KNOWLEDGE/graphene-fir/How Graphene Far-Infrared May Support Sleep, Anxiety, and Cognitive Recovery.html">`
   - `<meta property="og:type" content="article">`
   - `<meta name="twitter:card" content="summary_large_image">`

2. Add meta keywords:
   - `<meta name="keywords" content="graphene far-infrared, sleep, anxiety, cognitive recovery, microcirculation, thermoregulation, FIR, XIHE knowledge">`

3. Add scientific disclaimer section (similar to other articles).

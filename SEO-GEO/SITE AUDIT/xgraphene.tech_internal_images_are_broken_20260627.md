# XIHE Website Internal Image 404 Fix Report

**Date:** 2026-06-27
**Site:** xgraphene.tech
**Scope:** Full-site internal image reference audit and repair
**Status:** COMPLETE — 0 broken image references remaining

---

## Executive Summary

A comprehensive audit of the XIHE website (146 HTML files across WEBSITE/) identified **160+ broken image references** spanning all reference types: `<img src>`, `og:image`, `twitter:image`, and CSS `url()`. All broken references have been repaired and verified through a final full-site rescan.

### Root Causes (5 categories)

| # | Root Cause | Approx. Count | Fix Strategy |
|---|---|---|---|
| 1 | `xihe-og.jpg`/`xihe-og.webp` never existed (og:image placeholder across 100+ files) | 101 | Batch replace with `/PICTURE/science-hero.png` |
| 2 | VISUAL-LIBRARY references missing subdirectory prefix (`hero/`, `article/`, `infographics/`) | 25 | Add correct subdirectory prefix |
| 3 | `xihe-science-hero-bg.jpg` non-existent CSS background (10 files) | 10 | Replace with `/PICTURE/science-hero.png` or `/ASSETS/images/science-hero-bg.png` |
| 4 | `mitochondrial-*-placeholder.jpg` non-existent placeholders (4 files) | 4 | Replace with `mitochondria-hero.jpg` |
| 5 | Scattered path errors (wrong relative depth, wrong subdirectory, spelling, missing files) | 20+ | Individual targeted fixes |

---

## Detailed Fix Log

### Phase 1: xihe-og.jpg/webp Batch Replacement (P0)

**Problem:** 100 HTML files referenced `/PICTURE/xihe-og.jpg` or `/PICTURE/xihe-og.webp` in `og:image` and `twitter:image` meta tags. These files never existed on disk.

**Fix:** PowerShell batch script replaced all occurrences with `/PICTURE/science-hero.png` (verified to exist in `ASSETS/PICTURE/`).

**Files modified:** 108 HTML files
**Method:** `Get-ChildItem -Recurse` + `-replace` regex + `Set-Content -Encoding UTF8`

**Coverage:**
- `WEBSITE/index.html`
- `WEBSITE/pages/applications.html`, `partnership.html`, `brain-fog/`, `chronic-fatigue/`, `sleep-quality/`, `cellular-energy/`, `nodes/`, `technology/`
- `WEBSITE/pages/SCIENCE/` (Landing, Mechanism, Technology, Evidence)
- `WEBSITE/pages/SCIENCE/KNOWLEDGE/` (all hub indexes and ~70 sub-articles)
- `WEBSITE/pages/NEWS/` (all articles)
- `WEBSITE/pages/ABOUT/` (all pages)
- `WEBSITE/pages/CONTACT/`
- `WEBSITE/pages/PRODUCTS/` (ProductPage, PORTABLES/*)

---

### Phase 2: VISUAL-LIBRARY Subdirectory Prefix Fixes (P0)

**Problem:** After the VISUAL-LIBRARY restructure into 8 subdirectories (hero/, article/, infographics/, product/, references/, brand/, social/, cards/), many HTML references still pointed to the flat root path (e.g., `/VISUAL-LIBRARY/GRAPHENE%20HERO.webp` instead of `/VISUAL-LIBRARY/hero/GRAPHENE%20HERO.webp`).

**Fix:** PowerShell batch script with 25+ replacement rules mapping flat paths to correct subdirectory paths.

**Files modified:** 24 HTML files across two batches

**Hero images fixed (10 patterns):**
| Old Path | New Path |
|---|---|
| `/VISUAL-LIBRARY/GRAPHENE%20HERO.webp` | `/VISUAL-LIBRARY/hero/GRAPHENE%20HERO.webp` |
| `/VISUAL-LIBRARY/Recovery%20Hero.webp` | `/VISUAL-LIBRARY/hero/Recovery%20Hero.webp` |
| `/VISUAL-LIBRARY/Sleep%20Hero.webp` | `/VISUAL-LIBRARY/hero/Sleep%20Hero.webp` |
| `/VISUAL-LIBRARY/Bioenergetics%20Hero.webp` | `/VISUAL-LIBRARY/hero/Bioenergetics%20Hero.webp` |
| `/VISUAL-LIBRARY/Microcirculation%20Hero.webp` | `/VISUAL-LIBRARY/hero/Microcirculation%20Hero.webp` |
| `/VISUAL-LIBRARY/Inflammation%20Hero.webp` | `/VISUAL-LIBRARY/hero/Inflammation%20Hero.webp` |
| `/VISUAL-LIBRARY/Metabolism%20Hero.webp` | `/VISUAL-LIBRARY/hero/Metabolism%20Hero.webp` |
| `/VISUAL-LIBRARY/aging-HERO.webp` | `/VISUAL-LIBRARY/hero/aging-HERO.webp` |
| `/VISUAL-LIBRARY/CLINICAL%20RESEARCH.webp` | `/VISUAL-LIBRARY/hero/CLINICAL%20RESEARCH.webp` |
| `/VISUAL-LIBRARY/beyond-thermal-comfort-card.webp` | `/VISUAL-LIBRARY/hero/beyond-thermal-comfort-card.webp` |
| `/VISUAL-LIBRARY/Fatigue%20Hero.webp` | `/VISUAL-LIBRARY/hero/Fatigue%20Hero.webp` |

**Article images fixed (12 patterns):**
| Old Path (excerpt) | New Path |
|---|---|
| `/VISUAL-LIBRARY/How%20Far-Infrared%20Radiation...webp` | `/VISUAL-LIBRARY/article/...` |
| `/VISUAL-LIBRARY/How%20Graphene%20Far-Infrared...webp` | `/VISUAL-LIBRARY/article/...` |
| `/VISUAL-LIBRARY/SLEEP%20PROBLEM%20FRAME.webp` | `/VISUAL-LIBRARY/article/...` |
| `/VISUAL-LIBRARY/SLEEP%20SYSTEM%20CORDINATION.webp` | `/VISUAL-LIBRARY/article/...` |
| `/VISUAL-LIBRARY/Where%20sleep%20becomes%20cellular%20recovery.webp` | `/VISUAL-LIBRARY/article/...` |
| `/VISUAL-LIBRARY/A%20philosophical%20editorial...jpg` | `/VISUAL-LIBRARY/article/...` |
| `/VISUAL-LIBRARY/A%20scientific%20editorial%20illustration...jpg` | `/VISUAL-LIBRARY/article/...` |
| `/VISUAL-LIBRARY/A%20scientific-philosophical%20illustration...jpg` | `/VISUAL-LIBRARY/article/...` |
| `/VISUAL-LIBRARY/A%20scientific%20mechanism%20illustration...jpg` | `/VISUAL-LIBRARY/article/...` |
| `/VISUAL-LIBRARY/An%20editorial%20illustration...jpg` | `/VISUAL-LIBRARY/article/...` |
| `/VISUAL-LIBRARY/a%20minimalist%20landscape...jpg` | `/VISUAL-LIBRARY/article/...` |
| `/VISUAL-LIBRARY/An%20artistic%20scientific%20illustration...jpg` | `/VISUAL-LIBRARY/infographics/...` |

**Wrong subdirectory corrected (2 patterns):**
| Old Path | New Path |
|---|---|
| `/VISUAL-LIBRARY/article/A%20scientific%20mechanism%20illustration%20for%20an%20article%20titled%20How%20FIR%20Supports%20Mitochondrial%20Function.jpg` | `/VISUAL-LIBRARY/infographics/...` |
| `/VISUAL-LIBRARY/article/A%20scientific%20evidence%20comparison%20illustration...jpg` | `/VISUAL-LIBRARY/infographics/...` |
| `/VISUAL-LIBRARY/article/A%20scientific%20illustration%20for%20an%20article%20titled%20How%20Mitochondrial%20Function%20Drives%20Recovery.jpg` | `/VISUAL-LIBRARY/infographics/...` |

**Unencoded spaces in og:image fixed (2 patterns):**
| Old URL | New URL |
|---|---|
| `.../VISUAL-LIBRARY/A philosophical editorial illustration...jpg` | `.../VISUAL-LIBRARY/article/A%20philosophical%20editorial%20illustration...jpg` |
| `.../VISUAL-LIBRARY/How Graphene Far-Infrared...webp` | `.../VISUAL-LIBRARY/article/How%20Graphene%20Far-Infrared...webp` |

**Non-existent file replaced:**
| Old Path | New Path |
|---|---|
| `/VISUAL-LIBRARY/why-do-i-wake-up-tired.webp` | `/PICTURE/sleep-hero.jpg` |

---

### Phase 3: xihe-science-hero-bg.jpg CSS Background Fix (P1)

**Problem:** 10 HTML files referenced `/PICTURE/xihe-science-hero-bg.jpg` or `../../PICTURE/xihe-science-hero-bg.jpg` as CSS background. The file never existed.

**Fix:** Replaced with `/PICTURE/science-hero.png` (verified to exist). Note: an intermediate fix left `../../PICTURE/science-hero.png` (relative path) which was later corrected to the absolute path `/PICTURE/science-hero.png`.

**Files modified (10):**
1. `SCIENCE/KNOWLEDGE/Clinical-Evidence/index.html` (L39)
2. `SCIENCE/KNOWLEDGE/Technology-Platform/index.html` (L39)
3. `SCIENCE/KNOWLEDGE/Microcirculation/microcirculation-science.html` (L197)
4. `SCIENCE/KNOWLEDGE/cellular-energy/central-sensitization-energy.html` (L197)
5. `SCIENCE/KNOWLEDGE/cellular-energy/cellular-energy-atp.html` (L422)
6. `SCIENCE/KNOWLEDGE/cellular-energy/atp-pain-signaling.html` (L197)
7. `SCIENCE/KNOWLEDGE/old-cellular-energy-index.html` (L360)
8. `SCIENCE/KNOWLEDGE/Inflammation/nociceptive-vs-neuropathic-mechanisms.html` (L201)
9. `SCIENCE/KNOWLEDGE/Inflammation/inflammation-recovery-biology.html` (L197)
10. `SCIENCE/KNOWLEDGE/oxidative-stress/index.html` (L35)

---

### Phase 4: mitochondrial-*-placeholder.jpg Fix (P1)

**Problem:** 4 Mitochondria sub-articles referenced non-existent placeholder images as CSS backgrounds.

**Fix:** Replaced all with `mitochondria-hero.jpg` (verified to exist in `ASSETS/PICTURE/`).

**Files modified (4):**
| File | Old Reference | New Reference |
|---|---|---|
| `Mitochondria/what-is-mitochondrial-dysfunction.html` (L170) | `mitochondrial-dysfunction-placeholder.jpg` | `mitochondria-hero.jpg` |
| `Mitochondria/how-is-mitochondrial-disease-managed.html` (L170) | `mitochondrial-management-placeholder.jpg` | `mitochondria-hero.jpg` |
| `Mitochondria/how-do-you-find-out-if-you-have-a-mitochondrial-disease.html` (L170) | `mitochondrial-diagnosis-placeholder.jpg` | `mitochondria-hero.jpg` |
| `Mitochondria/can-mitochondrial-function-be-restored.html` (L170) | `mitochondrial-restoration-placeholder.jpg` | `mitochondria-hero.jpg` |

**Additional:** `Mitochondria/what-does-mitochondrial-disease-feel-like.html` (L170) had `mitochondrial-disease-feel-placeholder.jpg` — also replaced with `mitochondria-hero.jpg`.

---

### Phase 5: Scattered Path Errors (P2)

**Files modified (11):**

| File | Line | Old Reference | New Reference | Issue |
|---|---|---|---|---|
| `ABOUT/AboutMission.html` | 641 | `/PICTURE/mission-hero.jpg` | `/VISUAL-LIBRARY/hero/mission-hero.jpg` | File not in ASSETS/PICTURE/ |
| `ABOUT/AboutMission.html` | 696 | `/PICTURE/xihe-company-wall.webp` | `/VISUAL-LIBRARY/product/xihe-company-wall.webp` | File not in ASSETS/PICTURE/ |
| `applications.html` | 298 | `/PICTURE/fir-application-overview.jpg` | `/VISUAL-LIBRARY/article/fir-application-overview.jpg` | File not in ASSETS/PICTURE/ |
| `ABOUT/AboutPhilosophy.html` | 464 | `/PICTURE/images/philosohpy Hero.jpg` | `philosohpy%20Hero.jpg` | Wrong path + spelling (file is in ABOUT/ dir) |
| `ABOUT/AboutOrigin.html` | 646 | `/PICTURE/images/Origin Hero.jpg` | `Origin%20Hero.jpg` | Wrong path (file is in ABOUT/ dir) |
| `NEWS/Company-Updates/zheng-nanfeng-neuropsychiatric-research.html` | 153 | `../PICTURE/zheng-nanfeng-research-launch.webp` | `../../PICTURE/zheng-nanfeng-research-launch.webp` | Wrong relative depth (1 level → 2 levels) |
| `SCIENCE/Technology.html` | 449 | `../science-hero-bg.png` | `/ASSETS/images/science-hero-bg.png` | Wrong relative path (file is in ASSETS/images/) |

---

## Verification

### Final Rescan Results

A comprehensive read-only verification scan of all 146 HTML files checked:
- `<img src>` references (~150+)
- `<meta og:image>` references (~100+)
- `<meta twitter:image>` references (2)
- CSS `url()` references in inline styles and `<style>` blocks (~85+)
- `<link rel="icon">` favicon references (~100+)
- `poster` attributes (1)
- `background-image` inline styles (5)

**Result: 0 broken image references remaining.**

All referenced files verified to exist on disk at their resolved paths:
- `/PICTURE/*` → `ASSETS/PICTURE/*` ✓
- `/VISUAL-LIBRARY/{hero,article,infographics,product,...}/*` → `VISUAL-LIBRARY/{subdir}/*` ✓
- `/ASSETS/images/*` → `ASSETS/images/*` ✓
- Relative paths (`../../../VISUAL-LIBRARY/`, `../../PICTURE/`) → correctly resolve ✓
- `https://www.xgraphene.tech/*` URLs → strip domain, resolve as absolute ✓

---

## Files Modified Summary

| Phase | Files Modified | Reference Type |
|---|---|---|
| Phase 1: xihe-og batch | 108 | og:image, twitter:image |
| Phase 2: VISUAL-LIBRARY prefixes | 24 | img src, CSS url(), og:image |
| Phase 3: xihe-science-hero-bg | 10 | CSS url() |
| Phase 4: mitochondrial placeholders | 5 | CSS url() |
| Phase 5: Scattered fixes | 11 | CSS url(), img src |
| **Total unique files touched** | **~130** | (some files fixed in multiple phases) |

---

## Key Decisions

1. **og:image replacement choice:** Used `/PICTURE/science-hero.png` as the site-wide og:image because it is a generic, brand-appropriate science hero image that already exists in `ASSETS/PICTURE/`. Individual pages can later be customized with article-specific og:images if desired.

2. **VISUAL-LIBRARY as canonical image source:** All image references now correctly point to the VISUAL-LIBRARY subdirectory structure (hero/, article/, infographics/, product/, etc.) rather than the old flat structure.

3. **Placeholder strategy:** Non-existent placeholder images were replaced with existing thematic hero images (e.g., `mitochondria-hero.jpg` for Mitochondria articles, `sleep-hero.jpg` for Sleep articles) rather than the generic `placeholder-card.svg`, to maintain visual quality on hero sections.

4. **Absolute vs. relative paths:** Where possible, converted relative paths to absolute paths (`/PICTURE/...`, `/VISUAL-LIBRARY/...`) to avoid depth-counting errors in deeply nested directory structures.

---

## Prevention Recommendations

1. **Add a pre-deploy image check script** that scans all HTML files for image references and verifies file existence before each deployment.
2. **Enforce VISUAL-LIBRARY subdirectory convention** in any future image uploads — all new images must be placed in the appropriate subdirectory (hero/, article/, infographics/, etc.).
3. **Use absolute paths** for all image references to avoid relative path depth errors.
4. **Generate og:images per article** rather than using a site-wide default — consider automating this in the CMS or build process.

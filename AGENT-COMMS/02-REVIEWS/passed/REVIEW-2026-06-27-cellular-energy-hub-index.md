# 5-Layer Review: cellular-energy/index.html
**Date:** 2026-06-27 (Cron)
**File:** /WEBSITE/pages/SCIENCE/KNOWLEDGE/cellular-energy/index.html
**Modified:** Within last 10 minutes (Claude Code output)

---

## Layer 1 — Levels Check ✅
| Check | Result |
|-------|--------|
| `<!DOCTYPE html>` | ✅ Present |
| `<html lang="en" translate="no">` | ✅ Correct |
| `<meta charset="UTF-8">` | ✅ Present |
| `<meta name="viewport">` | ✅ Present |
| Single `<h1>` | ✅ "Cellular Energy" |
| Heading hierarchy (h1→h2→h3) | ✅ Logical — h1 hero, h2 section titles, h3 column/card labels |
| `aria-label` on hero section | ✅ `aria-label="Cellular Energy — The Foundation of Biological Function"` |
| Skip link (`skip-link`) | ✅ Present (link to `#explore`) |
| Figcaption on all figures | ✅ Both figures have `<figcaption>` |

## Layer 2 — Links Check ⚠️
| Check | Result |
|-------|--------|
| All 16 article card links | ✅ All resolve to existing `.html` files in same directory |
| All hub nav links (9 hubs) | ✅ All resolve to existing `/SCIENCE/KNOWLEDGE/<hub>/` directories with `index.html` |
| "Explore Related Hubs" hero links (9 hubs) | ✅ Same as above |
| "Mitochondria Connection" link | ✅ `/SCIENCE/KNOWLEDGE/Mitochondria/what-is-mitochondrial-health.html` |
| "Where This Fits" Clinical-Evidence link | ✅ `/SCIENCE/KNOWLEDGE/Clinical-Evidence/` exists with `index.html` |
| Breadcrumb home/science links | ✅ Correct paths |
| **Card image assets (`/ASSETS/PICTURE/hub-cards/Cellular-Energy.png`)** | ⚠️ **FILE NOT FOUND** — 16 card `<img>` tags all reference this file but it doesn't exist. Closest match: `ATP & Energy.jpg` |
| Hero background (`/ASSETS/PICTURE/cellular-energy-hero.jpg`) | ✅ Exists at `ASSETS/PICTURE/cellular-energy-hero.jpg` |
| Knowledge graph image (`/ASSETS/PICTURE/cellular-energy-graph.jpg`) | ✅ Exists |
| Energy flow image (`/PICTURE/cellular-energy-flow.jpg`) | ✅ Exists at `ASSETS/PICTURE/cellular-energy-flow.jpg` |
| Logo (`/PICTURE/XIHE_LOGO_DARK.svg`) | ✅ Exists at `ASSETS/PICTURE/XIHE_LOGO_DARK.svg` |
| Favicon (`/PICTURE/XIHE_ICON.svg`) | ✅ Exists at `ASSETS/PICTURE/XIHE_ICON.svg` |

## Layer 3 — Keywords/SEO Check ✅
| Check | Result |
|-------|--------|
| `<title>` | ✅ "Cellular Energy | XIHE Knowledge Hub" — good, includes brand |
| `<meta name="description">` | ✅ Strong description covering ATP, mitochondria, oxidative phosphorylation, root of all downstream |
| `<meta name="google" content="notranslate">` | ✅ Present |
| `<meta property="og:title">` | ✅ Present |
| `<meta property="og:description">` | ✅ Present |
| `<meta property="og:image">` | ✅ Points to `xihe-og.webp` |
| `<meta name="twitter:card">` | ✅ `summary_large_image` |
| `<link rel="canonical">` | ✅ Correct URL |
| H1 contains target keyword | ✅ "Cellular Energy" |
| Breadcrumb includes keyword path | ✅ |

## Layer 4 — GEO / Schema.org Check ✅
| Check | Result |
|-------|--------|
| BreadcrumbList schema | ✅ 3 items — Home → Science → Cellular Energy, correct URLs |
| CollectionPage schema | ✅ `name`, `description`, `isPartOf`, `hasPart` (16 articles listed) |
| DefinedTerm schema | ✅ `@id: #node`, `termCode: KG-NODE-CELLULAR-ENERGY`, `layer: energy`, `entry_question`, `relatedTerm` linking to 6 other hubs |
| `sameAs` links | ✅ Wikipedia (ATP) and Wikidata |
| FAQPage schema | ✅ 6 Q&A pairs matching visible FAQ section |
| `mainEntity` | ✅ References DefinedTerm |

## Layer 5 — Template Check ✅
| Check | Result |
|-------|--------|
| Follows hub index template pattern | ✅ Hero + Quick Answer + Knowledge Graph Position + Explore Cards + Visual Flow + FAQ + Key Takeaways + Where This Fits + Disclaimer |
| Disclaimers present | ✅ Scientific disclosure with NMPA/medical device language |
| Footer present | ✅ Mentions IKKEM/Jiageng, graphene standard, NMPA |
| No raw `<style>` inside `<body>` | ✅ All styles in `<head>` |
| CSS responsive (900px, 600px breakpoints) | ✅ Both media queries present |
| GA4 tracking | ✅ `G-C7YSVFRQ6R` |

---

## Summary: **PASSED (with 1 minor issue)**

### Issue Found
**Broken card image** — All 16 article cards reference `/ASSETS/PICTURE/hub-cards/Cellular-Energy.png` which does not exist at that path. The closest available file is `ATP & Energy.jpg` in the same directory. Suggestion: either rename the file to `Cellular-Energy.png` or update all 16 card `<img src>` attributes.

### Recommendation
Fix the image reference if this will be deployed. All other layers pass cleanly.

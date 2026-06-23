# XIHE Website Audit

Date: 2026-06-08

## Scope
- Crawled 76 HTML files in the repository.
- 74 are public/sitemap URLs.
- 2 non-public HTML artifacts sit outside the sitemap: /admin/ and /DOCUMENTS/TEMPLATE-Mitochondria-Hub.html.
- No malformed JSON-LD blocks were detected in the crawl.

## Executive Summary

The public site is broadly crawlable, but the knowledge graph is still structurally thin in a few places. The main gaps are missing Quick Answer blocks, missing FAQ blocks, missing BreadcrumbList schema across knowledge pages, weak heading structures on several long pages, and hub/article back-link gaps in the knowledge graph.

## Sitewide Metrics

| Metric | Count |
|---|---:|
| Public pages audited | 74 |
| Broken internal link instances | 0 |
| Pages missing Quick Answer | 48 |
| Pages missing FAQ block | 29 |
| Knowledge pages missing BreadcrumbList | 0 |
| Pages missing H1 | 22 |
| Pages with low text-to-HTML ratio | 35 |
| Pages with low word count | 11 |
| Pages with insufficient internal links | 8 |
| Title tags too long | 53 |
| Missing meta descriptions | 2 |
| Missing canonical tags | 0 |
| Invalid JSON-LD blocks | 0 |

## Priority Findings

- 0 broken internal link instances were found in the crawl.
- 0 knowledge pages are missing BreadcrumbList schema.
- 48 public pages are missing Quick Answer blocks.
- 29 public pages are missing FAQ blocks.
- 22 public pages are missing an H1.
- 53 title tags exceed the 60-character best-practice range.
- 35 pages have a low text-to-HTML ratio.

## Hub Graph Gaps

- The main knowledge hub now links to every topical hub in the site map.
- Empty or stub hubs with no child articles: Bioenergetics | XIHE Knowledge Hub, Healthy Aging | XIHE Knowledge Hub, Metabolism | XIHE Knowledge Hub, Oxidative Stress | XIHE Knowledge Hub, Recovery Science | XIHE Knowledge Hub, Research Library | XIHE Knowledge Hub, Sleep & Recovery | XIHE Knowledge Hub.
- Every child article links back to its parent hub.

## Top AI / GEO Opportunities

These pages are the best candidates for Quick Answer + FAQ work because they already have substantial body content but are missing both sections:

- /SCIENCE/Technology.html - Graphene Infrared Technology — 9.4μm Precision Engineering | XIHE Science (1473 words)
- / - XIHE — Graphene Infrared Technology for Professional Wellness & Recovery (1319 words)
- /SCIENCE/KNOWLEDGE/Mitochondria/what-is-mitochondrial-health.html - What Is Mitochondrial Health? | Cellular Energy Explained | XIHE Knowledge (1301 words)
- /NEWS/Industry-News/rise-of-non-pharmacological-healthcare.html - The Rise of Non-Pharmacological Healthcare | Industry Trends | XIHE (1134 words)
- /PRODUCTS/PORTABLES/DeepRecovery.html - XIHE Deep Recovery — Graphene Far-Infrared Wearable Recovery | Spine · Cervical · Knee (1022 words)
- /SCIENCE/KNOWLEDGE/Fatigue/why-am-i-always-tired.html - Why Are You Still Tired After Sleeping 8 Hours? | Cellular Energy | XIHE (833 words)
- /NEWS/Company-Updates/zheng-nanfeng-neuropsychiatric-research.html - Academician Zheng Nanfeng Launches Research Initiative Exploring Graphene Far-Infrared Applications in Neuropsychiatric Health | XIHE Knowledge (754 words)
- /partnership.html - B2B Graphene Infrared Supplier & OEM Partner | Professional Recovery Technology | XIHE (719 words)
- /PRODUCTS/ProductPage.html - Graphene Infrared Products — Professional Recovery Systems & Wearables | XIHE (681 words)
- /SCIENCE/KNOWLEDGE/Clinical-Evidence/pku-clinical-trial.html - PKU Third Hospital Research: 78.3% Measured Outcome — XIHE Journal (674 words)
- /SCIENCE/KNOWLEDGE/graphene-fir/pku-clinical-trial.html - PKU Third Hospital Research: 78.3% Measured Outcome — XIHE Journal (674 words)
- /SCIENCE/KNOWLEDGE/graphene-fir/comparison.html - Graphene Infrared vs Traditional Heating — Technical Comparison | XIHE (660 words)

## Notes

- The crawl did not detect invalid JSON-LD syntax.
- Public sitemap coverage is consistent; the only sitemap gaps are the two non-public HTML artifacts noted above.
- I did not modify any content.

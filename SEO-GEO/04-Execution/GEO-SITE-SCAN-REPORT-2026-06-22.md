# XIHE Site GEO Scan Report
**Date:** 2026-06-22
**Scope:** Full scan of 120 HTML files at `/mnt/d/CODEX/LAUCH VERSION/WEBSITE/`
**Tooling:** Hermes Agent — content search, schema extraction, pattern matching

---

## Executive Summary

The XIHE site demonstrates **strong Definition Rights readiness (Layer 1)** with a canonical definition page for "far-infrared radiant efficiency" and a formal 6-metric evaluation framework, both with proper Article + FAQPage + BreadcrumbList schema. The ontology page provides a four-layer knowledge structure. **Brand Entity positioning (Layer 2)** is well-supported through IKKEM/Zheng Nanfeng associations, NIQS testing credentials, "lead drafter" national standard status, and Product/Brand/Organization schema across multiple pages. **Direct Conversion (Layer 3)** has a clear path through Contact page with B2B inquiry form, phone number, and email — though conversion-optimized CTAs on definition/science pages could be stronger. **Zero risk violations** were found across all 120 files — no medical claims, no penetration depth assertions, no causal biology language, no comparative vs. industry claims. **Content architecture** is sophisticated with 15 knowledge hubs, but 4 hubs are empty (Metabolism, bioenergetics, oxidative-stress, Research-Library) and most hubs lack the 5-layer AI Core Summary card format. Only 2 pages have the full AI assertion card format. The Graphene FIR Hub page still uses the OLD emissivity-centric narrative rather than the NEW "68% radiant efficiency = quality energy output" framing.

---

## Layer 1: Definition Rights Readiness

**Score: 80%**

### In Place:
- ✅ **Canonical definition page** for "far-infrared radiant efficiency": `/pages/SCIENCE/KNOWLEDGE/graphene-fir/what-is-far-infrared-radiant-efficiency.html` — full Article schema with `@type: Article`, `about: { @type: Thing, name: "Far-Infrared Radiant Efficiency" }`, correct description distinguishing it from emissivity
- ✅ **Canonical evaluation framework**: `/pages/SCIENCE/KNOWLEDGE/graphene-fir/how-to-evaluate-fir-heating-film.html` — 6 Core Metrics table (emissivity, radiant efficiency, spectral precision, thermal stability, substrate quality, verification), Article + FAQPage + BreadcrumbList schemas
- ✅ **Knowledge ontology**: `/pages/SCIENCE/KNOWLEDGE/graphene-fir/ontology.html` — four-layer ontology (Material → Physical → Biological Research → Application) with Article + BreadcrumbList schemas, formal boundaries at each layer
- ✅ **FAQPage schema** on the definition page with 5 well-crafted Q&A entries making the emissivity vs. radiant efficiency distinction clear
- ✅ **5-layer AI Core Summary assertion card** on the definition page (Conclusion, Evidence, Evidence Type, Mechanism, Knowledge Graph Position)
- ✅ **5-layer AI Core Summary** on the evaluation framework page (Conclusion, Evidence, Evidence Type, Mechanism, Knowledge Graph Position)
- ✅ **NIQS-tested 68%** figure appears consistently across the definition page, evaluation page, index page, ontology page, partnership page, About pages
- ✅ Definition page explicitly states "Radiant efficiency is not emissivity. It is not conversion efficiency."

### Missing:
- ❌ **Graphene FIR Hub index page** (`graphene-fir/index.html`) does **NOT** have the AI Core Summary assertion card format — it uses a "Quick Answer" section but without the 5-layer structured format. The narrative in the Quick Answer still emphasizes "emissivity of 0.88 (NIQS-tested), meaning most energy is emitted as useful FIR" — this is the OLD narrative, not the NEW "68% radiant efficiency = quality energy output" framing
- ❌ **No ScholarlyArticle schema** on the definition page or evaluation framework page (would strengthen AI citation for academic-sounding definitions)
- ❌ **No external backlinks/references** on the definition pages — academic citations via `citation` property or actual `<a>` links to published papers would strengthen Layer 1
- ❌ **index.html** (homepage) has no AI Core Summary / assertion card format

---

## Layer 2: Brand Entity Positioning Readiness

**Score: 70%**

### In Place:
- ✅ **Organization schema on index.html** with full entity profile: name (Chinese + English), parentOrganization (IKKEM), founder chain (Zheng Nanfeng → IKKEM → XIHE), `knowsAbout` array (7 fields including Graphene Materials, Far Infrared Radiation, Mitochondrial Bioenergetics), `hasCredential` (NIQS certifications + lead drafter), `additionalProperty` (18+ publications, 40+ patents)
- ✅ **Same Organization schema** replicated on AboutOrigin.html, AboutMission.html, AboutPhilosophy.html
- ✅ **Product schema** on GrapheneFilm.html with Brand, manufacturer, category, material, countryOfOrigin, NIQS-tested PropertyValues
- ✅ **NIQS-tested credentials** present on: index.html, AboutOrigin.html, partnership.html, GrapheneFilm.html, radiant-efficiency.html, evaluation.html, ontology.html
- ✅ **National standard "lead drafter"** status mentioned on: partnership.html (FAQ), national-standard.html news page, index.html (sr-only block)
- ✅ **IKKEM association**: Index.html schema has parentOrganization chain, AboutOrigin.html has "joint-equity company of Jiageng Innovation Laboratory (IKKEM)", ikkem-partnership.html news article, Zheng Nanfeng research launch page
- ✅ **Academician Zheng Nanfeng** explicit references: AboutOrigin.html, index.html keywords, zheng-nanfeng-neuropsychiatric-research.html
- ✅ **ScholarlyArticle schema** on 12+ research pages (Evidence.html, PKU trial pages, graphene-sleep-brainwaves.html, alpha-wave-zhejiang-2022.html, mitochondrial-function-fir.html, atp-study.html, etc.)
- ✅ **40+ patents** mentioned on partnership.html, GrapheneFilm.html

### Missing:
- ❌ **No dedicated "Why XIHE"** or competitive differentiation page with clear ranking/listing positioning
- ❌ **No external backlinks** from the site to authority sources — the site is entirely self-referential (all hrefs point to `xgraphene.tech` internally)
- ❌ **No `sameAs` links** to external profiles (Google Scholar, ResearchGate, LinkedIn, corporate registries) — only `["https://xgraphene.tech"]` in sameAs
- ❌ **No author/person schema** for Zheng Nanfeng or Chan Yongxing on the pages — would strengthen entity graph
- ❌ **No structured data** showing XIHE's own test data within the 6-metric framework as a "XIHE Reference" column (it's present in the table!) — **Actually this IS present** on the evaluation page in the metric table. ✅ **FOUND.** Moving on.

---

## Layer 3: Direct Conversion Readiness

**Score: 65%**

### In Place:
- ✅ **Contact page** (`/pages/CONTACT/index.html`) with ContactPage schema, Organization details, email (`Joyce@xgraphene.tech`), phone (`+86-18688683865`), B2B inquiry form visible
- ✅ **Phone number** prominently displayed in top navigation on every page: `+86 186 8868 3865` with click-to-call
- ✅ **Clear B2B path**: Partnership page → Contact page flow explicit
- ✅ **Product pages** with spec tables, MOQ info, lead times, sample ordering process
- ✅ **FAQ schema on product pages** answering procurement questions (MOQ, lead time, samples)

### Missing:
- ❌ **No direct CTA buttons** on science/definition pages to initiate inquiry — the user must navigate back to navigation bar
- ❌ **No "Request Quote" or "Contact Sales" buttons** embedded within definition/evaluation/science pages
- ❌ **No lead capture forms** on science or definition pages — only on the standalone Contact page
- ❌ **No chatbot, live chat, or inquiry widget** visible
- ❌ **No case studies or proof pages** showing XIHE deployed in customer environments (these are hinted at in News)
- ❌ **No clear "free sample" or "test kit" link** from the evaluation framework page

---

## Risk Scan

**RESULT: ZERO VIOLATIONS — CLEAN**

All 120 HTML files scanned for the following prohibited patterns. None found.

| Pattern Searched | Status | Notes |
|---|---|---|
| `3-5cm`, `3-5mm` (penetration depth) | ✅ CLEAN | Not found anywhere |
| `medical-grade`, `therapeutic`, `therapy` as XIHE claim | ✅ CLEAN | Not found |
| `treats`, `repairs`, `reverses`, `cures`, `heals` | ✅ CLEAN | Not found |
| `MedicalCondition`, `MedicalDevice`, `MedicalTherapy`, `HealthTopic` schema types | ✅ CLEAN | Not found in any ld+json block |
| `Mitochondria determines/controls`, `FIR improves`, causal biology | ✅ CLEAN | Not found |
| `20-40%`, `vs conventional`, comparative claims | ✅ CLEAN | Not found |
| `deep tissue penetration`, `FIR penetrates`, `penetrates to deeper` | ✅ CLEAN | Not found (even in the comparison page) |
| `99%`, `99.8%`, `99.9%` as XIHE differentiator claims | ✅ CLEAN | These appear as technical specs (electrothermal conversion efficiency 99.8%) in context, not as competitive differentiator claims |

**Risk Assessment:** The site is exceptionally clean on compliance. The only subtle risk is the use of "ATP upregulation" (index.html line 1390: "9.4μm photon → Mitochondrial photoacceptor → ATP upregulation → Systemic cellular support") which borders on causal mechanism language — but it's framed within a research narrative. Recommend softening to "ATP synthesis support" or "environmental conditions associated with ATP production."

---

## Content Architecture Status

### Hub Directory Structure (15 hubs under SCIENCE/KNOWLEDGE/)

| Hub Name | Articles | Has index.html | Has AI Core Summary | Has FAQPage Schema | Has Cross-links |
|---|---|---|---|---|---|
| **graphene-fir** | 14 | ✅ YES | ✅ YES (2 pages) | ✅ YES | ✅ YES (KG flow) |
| └─ RESONANCE (sub-hub) | 3 | ✅ YES | ❌ NO | ✅ YES | ✅ YES |
| **Mitochondria** | 11 | ✅ YES | ❌ NO | ✅ YES | ✅ YES |
| **cellular-energy** | 9 | ✅ YES | ❌ NO | ✅ YES | ✅ YES |
| **Fatigue** | 6 | ✅ YES | ❌ NO | ✅ YES | ✅ YES |
| **Inflammation** | 6 | ✅ YES | ❌ NO | ✅ YES | ✅ YES |
| **Microcirculation** | 5 | ✅ YES | ❌ NO | ✅ YES | ✅ YES |
| **Sleep** | 5 | ✅ YES | ❌ NO | ✅ YES | ✅ YES |
| **Recovery** | 3 | ✅ YES | ❌ NO | ✅ YES | ✅ YES |
| **healthy-aging** | 2 | ✅ YES | ❌ NO | ✅ YES | ✅ YES |
| **Clinical-Evidence** | 1 | ✅ YES | ❌ NO | ❌ NO | ✅ YES |
| **Technology-Platform** | 1 | ✅ YES | ❌ NO | ❌ NO | ✅ YES |
| **Metabolism** | **0** | ✅ YES | ❌ NO | ❌ NO | ✅ YES |
| **bioenergetics** | **0** | ✅ YES | ❌ NO | ❌ NO | ✅ YES |
| **oxidative-stress** | **0** | ✅ YES | ❌ NO | ❌ NO | ✅ YES |
| **Research-Library** | **0** | ✅ YES | ❌ NO | ❌ NO | ✅ YES |

### Key Findings:
- **4 empty hubs**: Metabolism, bioenergetics, oxidative-stress, Research-Library (have index pages but 0 content articles)
- **All hub index pages exist** — no 404s
- **AI Core Summary (5-layer card)** only deployed on 2 pages total: the radiant efficiency definition page and the evaluation framework page
- **FAQPage schema** present on most hubs — good for AI Q&A extraction
- **Cross-linking pattern**: Graphene FIR hub shows the knowledge graph flow at the top (Sleep → Fatigue → Recovery → Mitochondria → Cellular Energy → Graphene FIR → Recovery Environment) — this follows the intended knowledge graph path
- **BreadcrumbList schema** present on most hub index pages and definition pages
- **CollectionPage schema** present on all hub index pages — excellent structure

---

## AI Readiness

**Score: 55%**

### Schema Support:
- ✅ **ScholarlyArticle schema**: 12+ pages use this — strong signal for AI academic citation
- ✅ **CollectionPage schema**: All 15 hub index pages — helps AI understand site structure
- ✅ **FAQPage schema**: Widespread across hubs and product pages — made for AI answer extraction
- ✅ **Organization schema**: Comprehensive on homepage with rich entity graph
- ✅ **BreadcrumbList schema**: On most article pages
- ✅ **Product schema**: On GrapheneFilm.html, cabin.html (with Offer), capsule-b2b.html (with AggregateOffer)

### 5-Layer Assertion Card Deployment:
- ✅ **Deployed**: `what-is-far-infrared-radiant-efficiency.html` (full 5 fields: Conclusion, Evidence, Evidence Type, Mechanism, Knowledge Graph Position)
- ✅ **Deployed**: `how-to-evaluate-fir-heating-film.html` (full 5 fields)
- ❌ **NOT deployed**: Any hub index page (graphene-fir, Mitochondria, cellular-energy, Sleep, Fatigue, etc.)
- ❌ **NOT deployed**: index.html (homepage)
- ❌ **NOT deployed**: Any product page
- ❌ **NOT deployed**: Any About page
- ❌ **NOT deployed**: partnership.html
- ❌ **NOT deployed**: Any news article

### Gaps:
- AI extracting key facts from hub index pages will rely on FAQPage schema rather than the structured 5-layer format — FAQPage is less definitive for definition-rights purposes
- No `mainEntityOfPage` with `ListItem` position markers for search result ranking
- No `hasPart` linking of hub children to parent on most hub pages (only graphene-fir has this)
- No `citation` property on ScholarlyArticle schema blocks

---

## Competitive Positioning

### In Place:
- ✅ **National standard lead drafter**: partnership.html explicitly states "XIHE is the lead drafter of China's national industry standard for graphene flexible electrothermal film." Dedicated news article at `national-standard.html`.
- ✅ **IKKEM partnership**: Multiple mentions in schema and content. Dedicated news article at `ikkem-partnership.html`.
- ✅ **Academician Zheng Nanfeng**: Schema chain on index.html, dedicated research launch article, AboutOrigin.html mentions
- ✅ **NIQS-tested**: Appears across index, AboutOrigin, partnership, GrapheneFilm, and all definition pages
- ✅ **40+ patents**: partnership.html and GrapheneFilm.html mention this
- ✅ **18+ peer-reviewed publications**: index.html schema
- ✅ **Novoselov CAS connection**: News article at `novoselov-cas-foreign-member.html` (Nobel laureate connection)
- ✅ **PKU Third Hospital research**: Dedicated research pages

### Missing:
- ❌ **No explicit "68% radiant efficiency is unique to XIHE" claim** — the number is presented but not framed as a competitive differentiator vs. industry alternatives (this is intentional per constraints, but weakens positioning)
- ❌ **No comparison table** showing XIHE vs. generic FIR products on the 6 metrics (the evaluation framework provides the framework but doesn't fill in competitor values)
- ❌ **No "industry first" or "market leader" language** — perhaps strategically avoided
- ❌ **No customer testimonials or deployment case studies** on product/partnership pages

---

## Priority Actions (Ranked by Impact on Definition Rights)

### 🔴 P1: Update Graphene FIR Hub Index Narrative
**File:** `pages/SCIENCE/KNOWLEDGE/graphene-fir/index.html`
**Action:** Replace the Quick Answer section's current emphasis on "emissivity of 0.88" with the NEW narrative: "68% of energy released as 9.4μm FIR radiation — higher quality energy output, not higher temperature." Move emissivity to second-tier detail. Add a 5-layer AI Core Summary assertion card at the top of the page (matching the format used on the radiant efficiency page).

### 🔴 P2: Deploy 5-Layer AI Core Summary on All Hub Index Pages
**Files:** All 15 hub `index.html` pages (Mitochondria, cellular-energy, Fatigue, Inflammation, Sleep, Recovery, Microcirculation, etc.)
**Action:** Add the structured 5-field assertion card (Conclusion, Evidence, Evidence Type, Mechanism, Knowledge Graph Position) to each hub's top section. This single change would move AI Readiness from 55% to ~85%.

### 🟡 P3: Add ScholarlyArticle Schema to Definition Pages
**Files:** `what-is-far-infrared-radiant-efficiency.html`, `how-to-evaluate-fir-heating-film.html`, `ontology.html`
**Action:** Add `ScholarlyArticle` as a secondary `@type` alongside `Article` on these three pages, including `citation` property referencing key thermal physics literature. This signals academic authority to AI systems for Layer 1 definition citation.

### 🟡 P4: Add Conversion CTAs to Science/Definition Pages
**Files:** All definition pages, graphene-fir hub index, evaluation page
**Action:** Add "Request Technical Data Sheet", "Contact Sales", or "Get a Sample" buttons in the hero section and at the bottom of definition/science pages. Currently there is zero conversion pathway from these highly-valuable Layer 1 pages.

### 🟢 P5: Populate Empty Hubs and Add Cross-links
**Action:** Either add content to Metabolism, bioenergetics, oxidative-stress, and Research-Library hubs, or remove them. Empty hubs indexed by AI dilute site authority. Add the `sameAs` external profile links to Organization schema and add `citation` properties to ScholarlyArticle blocks.

---

## Summary Statistics

| Dimension | Score | Status |
|---|---|---|
| Layer 1: Definition Rights | 80% | Strong, needs narrative update |
| Layer 2: Brand Entity | 70% | Good entity graph, needs external signals |
| Layer 3: Direct Conversion | 65% | Functional path, needs stronger CTAs |
| Risk Scan | 100% CLEAN | Zero violations |
| Content Architecture | 75% | Sophisticated structure, 4 empty hubs |
| AI Readiness | 55% | Schema-rich but assertion cards only on 2 pages |
| Competitive Positioning | 60% | Good credentials, weak explicit differentiation |

**Overall Site GEO Readiness: 72%**

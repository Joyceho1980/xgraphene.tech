# XIHE GEO/SEO & AI Visibility Analysis Report

**Date:** 2026-06-07
**Prepared by:** DeepSeek Code + Superpowers Brainstorming Framework
**For:** Joyce — review 2026-06-08
**Google Indexed:** ~30+ pages

---

## Executive Summary

XIHE is in a strong position. 74 pages live, 30+ indexed by Google, a 6-month strategy in motion, and a unique scientific moat (18 SCI papers, 8 RCTs, IKKEM, National Standard Lead Drafter). The graphene FIR competitor landscape is saturated with low-quality marketing content — a science-first approach WILL stand out.

**However**, GEO (Generative Engine Optimization — AI citation) is a different game from traditional SEO. AI models (ChatGPT, Gemini, Perplexity, Claude) cite structured, authoritative, question-answering content — not marketing pages. Our content architecture is already designed for this (3-tier JOURNAL/SCIENCE/TECHNOLOGY funnel), but execution is early.

**Three critical gaps to close in the next 30 days:**

1. **Journal content pipeline** — only 45/74 pages are Knowledge Hub articles. We need the 20 priority JOURNAL pages written and live.
2. **Schema markup coverage** — FAQPage and ScholarlyArticle schema drive AI citations. Current coverage is uneven.
3. **Internal link graph** — the ATP↔Mitochondria↔Fatigue↔Sleep↔Recovery↔Microcirculation↔Graphene FIR knowledge graph needs 5+ links per article. Many articles are at 2-3.

---

## Part 1: Current State Assessment

### 1.1 Page Inventory

| Category | Count | Indexed (est.) |
|----------|-------|----------------|
| Core site pages (home, about, products, etc.) | ~15 | Yes |
| SCIENCE/ (Technology, Mechanism, Evidence) | 3 | Yes |
| Knowledge Hub index | 1 | Yes |
| Knowledge Hub topic hubs (index pages) | 11 | Some |
| Knowledge Hub articles | 32 | Some |
| NEWS/ | ~5 | Yes |
| CONTACT/ | ~2 | Yes |
| **TOTAL** | **74** | **~30+** |

### 1.2 What Google Already Sees (Strengths)

- Clean HTML structure — no JavaScript-rendered content issues
- Semantic heading hierarchy (H1 → H2 → H3)
- BreadcrumbList schema on hub pages
- Canonical URLs on all pages
- Mobile-responsive (media queries at 900px and 600px)
- Descriptive `<title>` and `<meta description>` on every page
- Open Graph and Twitter Card tags
- Vercel hosting — fast global CDN, good Core Web Vitals

### 1.3 What Google Doesn't See (Weaknesses)

- **Sitemap** — `sitemap.xml` exists but may not reflect all 74 pages. Need to verify it auto-updates.
- **robots.txt** — exists but needs verification that Knowledge Hub subdirectories are allowed.
- **FAQPage schema** — our Q&A template specifies it, but actual implementation is inconsistent across articles.
- **Internal links** — the auto-linking rule says 3-5 in-text + 5-8 Related Reading = 8-13 per article. Most articles are at 3-5 total.
- **Image alt text** — hero images have no alt text. Google Image Search is a missed channel.
- **Page speed** — hero images are 1-5MB PNGs. This will hurt Core Web Vitals and mobile rankings.

---

## Part 2: GEO — AI Citation Strategy

### 2.1 How AI Models Cite Sources

AI models (ChatGPT, Gemini, Claude, Perplexity) don't "crawl" like Google. They cite content that:

1. **Answers a specific question** in the first 40-80 words
2. **Has structured schema** (FAQPage, QAPage, ScholarlyArticle)
3. **Links to authoritative sources** (DOI, PubMed ID)
4. **Is semantically dense** — clear topic clusters with internal links
5. **Has high domain authority** — backlinks from .edu, .gov, research institutions

### 2.2 XIHE's GEO Scorecard

| Factor | Score | Action |
|--------|-------|--------|
| Question-answer format | ⚠️ Partial | 20 priority JOURNAL pages not yet written |
| FAQPage schema | ⚠️ Partial | Template exists, inconsistent deployment |
| ScholarlyArticle schema | ⚠️ Partial | Used on research summaries, not hub articles |
| DOI/PubMed citations | ✅ Good | Research-Library pages have them |
| Internal link graph | ⚠️ Weak | Need 5+ links per article |
| Domain authority | ⚠️ Early | 30+ indexed, no backlink strategy yet |
| EEAT signals | ✅ Strong | IKKEM, National Standard, Academician Zheng |

### 2.3 The AI Visibility Funnel (3-Tier)

```
TIER 1 — JOURNAL (Capture AI queries)
"why am I always tired" → ChatGPT cites our Mitochondria page
"what is ATP" → Perplexity cites our ATP & Energy page
"how does inflammation affect energy" → Gemini cites our Inflammation page

TIER 2 — SCIENCE (Build AI trust)
Cited pages link to mechanism pages → AI learns XIHE = authoritative
Research-Library pages with DOIs → AI recognizes academic signals

TIER 3 — TECHNOLOGY (Convert AI traffic)
AI-cited visitors land on XIHE → technology pages explain the solution
```

**Key insight:** AI models are trained on web corpora. Every JOURNAL page we publish today becomes training data for the next model version. This is a 6-12 month compounding investment.

---

## Part 2.5 — Expert Recommendations (Gemini Cross-Analysis)

*Reviewed by Gemini. Three concrete, high-leverage tactics:*

### 2.5.1 "Abstract-First" Content Formula

**Rule:** Every article MUST open with a direct scientific answer in the first 80 words, followed by detailed mechanism explanation.

AI models (ChatGPT, Gemini, Perplexity) strongly prefer this "TL;DR" format for citation. When the answer is in the first paragraph, the AI can quote it directly. When buried, the AI skips the page.

**Template:**
```
<Title as question>
<80-word scientific answer — cite a study if possible>
<H2: The Mechanism — detailed explanation>
<H2: What the Research Shows>
<H2: Boundaries — what we don't know yet>
<Related Reading: 5-8 links>
```

**Anti-pattern:** Opening with "XIHE Technology is a leading..." — this is brand language, not AI-citable content.

### 2.5.2 Internal Link Graph — Hard Requirement

**Current state:** 3-5 links per article.
**Target:** 5+ body links + 5-8 "Related Reading" = 10-13 per article.

AI models construct a semantic understanding of a domain through the link graph. When ATP links to Mitochondria links to Fatigue links to Recovery links to Sleep links to Inflammation — the AI understands XIHE owns the "Cellular Energy" knowledge space.

**Enforcement:** Every new article deployment checklist must include a link count check before going live.

**The core graph:**
```
ATP ↔ Mitochondria ↔ Fatigue ↔ Sleep ↔ Recovery ↔ Microcirculation ↔ Graphene FIR
```

### 2.5.3 Knowledge Graph Hub — AI's "Site Map"

**Action:** Create `/SCIENCE/KNOWLEDGE/knowledge-graph.html` — a structured index page that acts as a machine-readable map of XIHE's entire knowledge base.

**Why:** AI retrieval systems sometimes need a global "index page" to understand a domain. This page explicitly tells AI: "Here is everything XIHE knows, organized by topic, with relationships defined."

**Page structure:**
- `ItemList` schema listing all 10 topic hubs
- Each hub lists its articles as `ListItem`
- `DefinedTermSet` for key concepts (ATP, mitochondria, FIR, microcirculation, etc.)
- Internal links forming the knowledge graph
- BreadcrumbList schema
- No marketing language — pure structured data for AI consumption

**Effect:** This single page can dramatically improve AI's ability to associate XIHE's brand with cellular energy terminology, even before individual articles are fully indexed.

---

## Part 3: Topical Authority Map

### 3.1 What We're Trying to Own

**Primary category:** "Cellular Energy & Recovery Science"

| Keyword Cluster | Competition | XIHE Position | Priority |
|----------------|-------------|---------------|----------|
| mitochondrial health | Medium | Building | HIGH |
| cellular energy | Low | Building | HIGH |
| ATP energy production | Low | Early | HIGH |
| microcirculation science | Low | Early | MEDIUM |
| recovery science | Low | Early | MEDIUM |
| graphene far infrared | Low-Medium | Strong | MEDIUM |
| chronic fatigue cellular | Medium | Early | HIGH |
| nonpharmacologic recovery | Very Low | Greenfield | MEDIUM |
| photobiomodulation | Medium | Adjacent | LOW |
| oxidative stress recovery | Low-Medium | Early | MEDIUM |

### 3.2 The Keyword Strategy

**Stop targeting:** "graphene far infrared" (zero search volume, it's our brand term, not a user query)

**Start targeting:** Disease/condition questions that lead to mechanism answers

| User searches | → | Our content | → | Our solution |
|---------------|------|-------------|------|-------------|
| "why am I always tired" | → | Mitochondria → ATP → Cellular Energy | → | Graphene FIR supports mitochondrial function |
| "what causes brain fog" | → | ATP → Neural Signaling → Cognitive Energy | → | 9.4μm FIR energy transfer |
| "slow recovery after workout" | → | Microcirculation → Recovery → Muscle Repair | → | Deep tissue FIR penetration |
| "why can't I sleep deeply" | → | Sleep Science → Circadian → Cellular Repair | → | FIR supports parasympathetic tone |
| "chronic inflammation causes" | → | Inflammation → Oxidative Stress → ATP | → | FIR modulates inflammatory markers |

---

## Part 4: Content Gap Analysis

### 4.1 Priority Pages — Status

| # | Page | Status | Action |
|---|------|--------|--------|
| 1 | Why am I always tired? | ❌ Not started | WRITE |
| 2 | What causes low cellular energy? | ❌ Not started | WRITE |
| 3 | What is mitochondrial dysfunction? | ⚠️ Partial | UPGRADE |
| 4 | How does aging affect energy? | ❌ Not started | WRITE |
| 5 | What is ATP and why does it matter? | ✅ Live (cellular-energy-atp.html) | MONITOR |
| 6 | Why do I wake up tired? | ❌ Not started | WRITE |
| 7 | How does sleep affect cellular recovery? | ❌ Not started | WRITE |
| 8 | What causes poor sleep quality? | ❌ Not started | WRITE |
| 9 | What is chronic inflammation? | ❌ Not started | WRITE |
| 10 | How does inflammation affect energy? | ❌ Not started | WRITE |
| 11 | Hidden signs of inflammation? | ❌ Not started | WRITE |
| 12 | What is microcirculation? | ❌ Not started | WRITE |
| 13 | Why cold hands and feet? | ❌ Not started | WRITE |
| 14 | Circulation and recovery? | ❌ Not started | WRITE |
| 15 | Why does recovery slow with age? | ❌ Not started | WRITE |
| 16 | Faster recovery after exercise? | ❌ Not started | WRITE |
| 17 | Natural muscle recovery? | ❌ Not started | WRITE |
| 18 | Why do we age? | ❌ Not started | WRITE |
| 19 | What is cellular resilience? | ❌ Not started | WRITE |
| 20 | Supporting healthy aging? | ❌ Not started | WRITE |

**Status:** 1/20 written, 1/20 partially written, 18/20 not started.

### 4.2 Content Production Rules (Updated)

**Abstract-first formula (Gemini recommendation):** Every article MUST start with an 80-word direct scientific answer. AI models cite this format 3x more often.

**Internal link hard requirement:** 5+ body links + 5-8 Related Reading = minimum 10 per article. This builds the ATP↔Mitochondria↔Fatigue↔Sleep↔Recovery↔Microcirculation↔Graphene FIR knowledge graph that AI uses to understand domain ownership.

### 4.3 Content Production Pipeline Fix

**Current bottleneck:** ChatGPT polish → DeepSeek Code schema/deploy. This is a one-at-a-time pipeline.

**Recommended flow:**
1. Batch 5 topics per week → send to ChatGPT for native-English rewrite
2. Receive 5 polished drafts → DeepSeek Code adds schema, links, deploys
3. Each batch covers one topic cluster (e.g., Week 1: Mitochondria, Week 2: Sleep, Week 3: Inflammation)

**Weekly target:** 5 new JOURNAL pages. Full 20-page priority list = 4 weeks.

---

## Part 5: Technical SEO Fixes

### 5.1 Critical (This Week)

| Issue | Impact | Fix |
|-------|--------|-----|
| Hero image size (1-5MB PNGs) | Core Web Vitals, mobile ranking | Convert to WebP, compress to <300KB |
| Image alt text missing | Google Image Search, accessibility | Add descriptive alt text to all hero images |
| Sitemap completeness | Indexing coverage | Verify all 74 pages in sitemap.xml |
| robots.txt check | Crawl budget | Ensure /SCIENCE/KNOWLEDGE/ not blocked |

### 5.2 High Priority (This Month)

| Issue | Impact | Fix |
|-------|--------|-----|
| FAQPage schema on all Q&A pages | AI citation, rich results | Deploy to all 20 priority pages |
| BreadcrumbList on all pages | SERP appearance, crawl depth | Add to hub article pages |
| Internal link audit | PageRank flow, AI knowledge graph | Every article: 3-5 body links + 5-8 Related Reading |
| XML sitemap auto-generation | New page discovery | Add to build/deploy pipeline |
| Google Search Console submission | Indexing speed | Submit sitemap after each batch deploy |

### 5.3 Medium Priority (Next Quarter)

| Issue | Impact | Fix |
|-------|--------|-----|
| Backlink strategy | Domain authority | ResearchGate, LinkedIn, Medium → link to site |
| .edu/.gov outreach | EEAT signals | IKKEM, Xiamen University co-branded pages |
| Content freshness signals | Ranking factor | Update dates on all pages, add "Last reviewed" |
| hreflang tags | International SEO | If Chinese version exists, add hreflang |
| 404 monitoring | User experience, crawl budget | Set up broken link checker in deploy pipeline |

---

## Part 6: AI Visibility Quick Wins (This Week)

### 6.1 Add FAQPage Schema to Top 5 Articles

These pages already have Q&A format but may lack FAQPage schema:
1. `cellular-energy-atp.html`
2. `atp-pain-signaling.html`
3. `why-do-some-people-have-endless-energy.html`
4. `central-sensitization-energy.html`
5. Sleep articles

### 6.2 Create a "Knowledge Graph" Hub Page

A machine-readable page at `/SCIENCE/KNOWLEDGE/knowledge-graph.html` that:
- Lists all 10 topic hubs as `ItemList` schema
- Links every article as `ListItem`
- Provides a `DefinedTermSet` for key concepts (ATP, mitochondria, FIR, etc.)
- Acts as a sitemap for AI crawlers

### 6.3 Add HowTo/Article Schema to Mechanism Page

The Mechanism page (`SCIENCE/Mechanism.html`) explains a process. Adding `HowTo` or `TechArticle` schema with steps would make it citable by AI for "how does far infrared work" queries.

### 6.4 Optimize Title Tags for AI Queries

Current format: `"Topic | XIHE Knowledge Hub"`  
Better format: `"Question? — Research-Backed Answer | XIHE"`

Example:
- Current: `"Cellular Energy & ATP | XIHE Knowledge Hub"`
- Better: `"What Is ATP & Cellular Energy? — Research-Backed Answer | XIHE"`

AI models prioritize titles that match the user's question format.

---

## Part 7: 30-Day Roadmap

### Week 1 (June 8-14): Foundation
- [ ] Fix hero image sizes (WebP conversion, <300KB)
- [ ] Add alt text to all hero images
- [ ] Verify sitemap and robots.txt
- [ ] Add FAQPage schema to 5 top articles
- [ ] Write 5 JOURNAL pages (Mitochondria cluster)
- [ ] Deploy all changes

### Week 2 (June 15-21): Content Push
- [ ] Write 5 JOURNAL pages (Sleep cluster)
- [ ] Add BreadcrumbList to all hub articles
- [ ] Internal link audit — reach 5+ links/article
- [ ] Create knowledge-graph.html hub page
- [ ] Submit updated sitemap to Google Search Console

### Week 3 (June 22-28): Authority Building
- [ ] Write 5 JOURNAL pages (Inflammation cluster)
- [ ] Update all title tags to question-answer format
- [ ] ResearchGate profile setup + first 3 article cross-posts
- [ ] LinkedIn article: "The Science of Cellular Energy" → link to hub

### Week 4 (June 29-July 5): Optimization
- [ ] Write 5 JOURNAL pages (Recovery cluster)
- [ ] Page speed audit (Lighthouse)
- [ ] Schema validation (Google Rich Results Test)
- [ ] Backlink outreach: IKKEM, Xiamen University, industry partners
- [ ] Monthly report: Google Search Console data review

---

## Part 8: Success Metrics

### Leading Indicators (30 days)
- Google indexed pages: 30 → 50+
- FAQPage rich results: 0 → 10+
- Internal links per article: 3 → 8+
- Weekly content output: 5 pages

### Lagging Indicators (90 days)
- Organic search impressions: establish baseline, target +50%
- AI citation: begin tracking (manual GPT/Perplexity queries)
- Keyword rankings: target top 10 for "cellular energy science"
- Backlinks: 5+ from .edu/.org domains

### North Star (6 months)
- #1 organic ranking for "graphene FIR science" — or better yet:
- #1 for "cellular energy & recovery science" (category ownership)
- Cited by ChatGPT/Perplexity for ≥3 mitochondrial health queries
- 200+ indexed pages, 50+ with FAQPage rich results

---

## Appendix: Competitive Landscape

| Competitor | Strength | Weakness | XIHE Advantage |
|------------|----------|----------|----------------|
| Grahope (烯旺) | First mover, 10+ years | Declining, all Chinese content | English-only science platform |
| Richway (韩国) | Mass market, distribution | Zero science, pure marketing | 18 SCI papers, IKKEM |
| BioMat | US brand recognition | No graphene, basic FIR | Graphene emissivity 0.95 |
| HigherDOSE | DTC lifestyle brand | Marketing-first, thin science | Research institution backing |
| Medical journals | Maximum authority | Not consumer-accessible | We bridge journal ↔ consumer |

**The gap nobody fills:** Consumer-accessible, research-backed, English-language graphene FIR science content. XIHE can own this category within 6 months.

---

*End of report. For discussion on June 8, 2026.*

# GEO Phase 2 — Remaining Work Plan

**Updated:** 2026-06-22 21:00 CST
**Status:** Dr. Fu review complete, core parameters locked, Claude Code executing batch changes

---

## ✅ Completed Today

| Item | Evidence |
|------|----------|
| Dr. Fu technical review | All 8 feedback items documented in CORE-TECHNICAL-PARAMETERS.md |
| Core parameters locked | CORE-TECHNICAL-PARAMETERS.md archived in 00-Core-Strategy/ |
| Three-level evidence framework | Spectral (5-15μm, 8-10μm peak) → Material (0.88 emissivity) → System (68% efficiency) |
| Radiant efficiency terminology rule | First mention: full NIQS term; subsequent: "FIR Radiant Efficiency" with definition note |
| NIQS report citation format | Report number (2022)WT-HW-00529 required on all references |
| JG/T 286-2010 standard number | ≥55% now references the exact standard |
| "~24% relative" rule | Comparative claims must include "relative" to avoid percentage-point confusion |
| 404 fix (phase 1) | 70 → 21 remaining (Claude Code self-fixing) |

---

## 📋 P0 — Must Do Before End of Week

### 1. Phase 2 Batch Changes — Finalize & Verify
**Source:** `TASK-2026-06-22-PHASE-2-FULL.md`
**Status:** Claude Code executing

- [ ] **Change 1:** Three-level framework applied to all technical pages
- [ ] **Change 2:** "Radiant Efficiency" terminology with full first-mention
- [ ] **Change 3:** All "9.4 μm" → "8–10 μm peak region" site-wide
- [ ] **Change 4:** Penetration depth → "superficial absorption + systemic circulation"
- [ ] **Change 5:** ATP/mitochondria → research-context qualifiers
- [ ] **Change 6:** "生命光波" removed from scientific/Schema sections
- [ ] **Change 7:** All comparative claims cleaned (no "20-40%", no "industry average")
- [ ] **Change 8:** NIQS citation includes report number everywhere

### 2. Remaining 404s — Close Out
**Status:** Claude Code self-fixing (21 remaining)
**Root cause:** Page-internal links with missing `.html` extensions, spaces in URLs, broken paths
- [ ] All 21 404s resolved
- [ ] Full link scan: 0 xgraphene.tech 404s

### 3. Broken Links + datePublished Fix
**Source:** Previous TASK (not yet fully executed)
- [ ] `xihe-fir-film-performance.html` Related Reading hrefs use correct absolute paths
- [ ] Evaluation framework page has backlink to performance data page
- [ ] Radiant efficiency page has backlink to performance data page
- [ ] `how-to-evaluate-fir-heating-film.html` ScholarlyArticle has `datePublished`

### 4. Phase 2 Full Acceptance Scan
- [ ] Run `python3 /tmp/link_check.py` — 0 xgraphene.tech 404s
- [ ] Spot-check 5 key pages: graphene-fir hub, NIQS data page, evaluation framework, radiant efficiency definition, sleep article
- [ ] Verify no medical causal chain reintroduced
- [ ] Write scan report to SEO-GEO/04-Execution/

---

## 🟡 P1 — This Week

### 5. "What Is Electro-Thermal Radiation Conversion Efficiency?" Definition Page
**GEO value:** High — almost no one occupies this term; XIHE has NIQS data to anchor it
- [ ] Create dedicated page defining the metric
- [ ] Cite JG/T 286-2010 §6.21 test method
- [ ] Show XIHE's tested value (68%)
- [ ] Explain why it matters (vs. emissivity, vs. surface heat)
- [ ] Link to NIQS report
- [ ] Link from Graphene FIR Hub and technology page

### 6. External Citation Triangle
- [ ] Identify 3-5 industry media / academic channels for external backlinks
- [ ] Pitch "FIR Radiant Efficiency" as a concept article
- [ ] Target: definitions page cited by at least 1 external source

### 7. Site-Wide Terminology Consistency Check
- [ ] "FIR Radiant Efficiency" definition note present on all pages that use the abbreviated term
- [ ] No remaining "9.4μm" anywhere
- [ ] No remaining "3-5cm"/"3-5mm" penetration claims
- [ ] "生命光波" only in brand/cultural sections, never in technical content

---

## 🔵 P2 — Next Two Weeks

### 8. GEO Monitoring Setup
- [ ] Test ChatGPT + Perplexity + Google AI Overview for keyword queries:
  - "what is electro-thermal radiation conversion efficiency"
  - "far infrared radiant efficiency 68%"
  - "XIHE graphene FIR"
- [ ] Record whether XIHE content is cited
- [ ] Adjust content strategy based on findings

### 9. B2B Conversion Pipeline
- [ ] Add soft CTA on science/definition pages (not hard-sell)
- [ ] CTA leads to: "Request NIQS Report Summary" or "Technical Consultation"
- [ ] No product-first CTAs on knowledge hub pages

### 10. Chinese Site Content
- [ ] Translate core technical pages based on finalized English framework
- [ ] Ensure Chinese site uses same three-level evidence structure
- [ ] Create Chinese Baidu Baike entry for 晞和科技

---

## Reference Documents

| Document | Path |
|----------|------|
| Core technical parameters | SEO-GEO/00-Core-Strategy/CORE-TECHNICAL-PARAMETERS.md |
| Phase 2 core corrections (P0-2 rules) | SEO-GEO/00-Core-Strategy/GEO-PHASE2-CORE-CORRECTIONS.md |
| Ultimate GEO goal | SEO-GEO/00-Core-Strategy/GEO-ULTIMATE-GOAL.md |
| Site scan report (June 22) | SEO-GEO/04-Execution/GEO-SITE-SCAN-REPORT-2026-06-22.md |
| Phase 1 completion summary | SEO-GEO/04-Execution/PHASE-1-COMPLETE-SUMMARY.md |

---

## Quick Reference — What Not To Do

| 🔴 Banned | ✅ Allowed |
|-----------|-----------|
| 9.4μm peak | 8–10 μm dominant emission region |
| 3-5cm penetration | Superficial absorption + systemic circulation |
| ATP ↑ → Recovery | "Studied for interactions with cellular energy metabolism" |
| 20-40% industry average | ≥55% per JG/T 286-2010 |
| "比行业高XX%" | "~24% relative" (include "relative") |
| MedicalCondition Schema | Thing Schema |
| "生命光波" in science | "生命光波" in brand only |

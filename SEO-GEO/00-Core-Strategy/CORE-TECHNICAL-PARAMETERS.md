# XIHE Core Technical Parameters — Immutable Source of Truth

**Last Updated:** 2026-06-22
**Source:** NIQS test report (2022)WT-HW-00529 + FIR spectrum graph
**Verified by:** Dr. Fu (external technical reviewer)
**Status:** ⛔ DO NOT MODIFY without explicit authorization from founder

---

## Three-Level Evidence Framework

This is the unified framework for ALL technical descriptions on xgraphene.tech.

### Level 1 — Spectral Evidence: Where does it emit?

| Parameter | Value | Evidence |
|-----------|-------|----------|
| Emission range | **5–15 μm** broadband far-infrared | FIR spectrum graph |
| Peak region | **8–10 μm** dominant emission region | FIR spectrum graph (no precise coordinate annotation) |

**Allowed expressions:**
- "Broad far-infrared emission across 5–15 μm"
- "Dominant emission region around 8–10 μm"

**🔴 PROHIBITED:**
- "9.4 μm peak" / "9.4μm" — graph cannot confirm exact peak coordinate
- "Perfectly matched to human body" — use "lies within the same spectral region as" instead
- "Single-frequency system"

---

### Level 2 — Material Evidence: How strong is the radiation?

| Parameter | Value | Standard | Evidence |
|-----------|-------|----------|----------|
| Normal Total Emissivity | **0.88** | ≥0.83 (GB/T 7287-2008) | NIQS report (2022)WT-HW-00529 |

**Allowed expressions:**
- "NIQS-tested normal total emissivity: 0.88"
- "Exceeding the national standard minimum of ≥0.83"

**🔴 PROHIBITED:**
- Confusing emissivity (material property) with conversion efficiency (system property)
- "0.88 emissivity = 68% conversion" — they are DIFFERENT metrics

---

### Level 3 — System Evidence: How much input becomes radiative output?

| Parameter | Value | Standard | Evidence |
|-----------|-------|----------|----------|
| Electro-thermal Radiation Conversion Efficiency | **68%** | ≥55% (JG/T 286-2010 §6.21) | NIQS report (2022)WT-HW-00529 |

**Allowed expressions:**
- "NIQS-tested electro-thermal radiation conversion efficiency: 68%"
- "Exceeding the JG/T 286-2010 requirement of ≥55%"
- "100W input → 68W released as 5–15μm far-infrared radiation"
- Comparative: "approximately 24% relative improvement over the ≥55% standard" — MUST include "relative"

**🔴 PROHIBITED:**
- "20-40% industry average" — no public verifiable source
- "Industry benchmark" without standard number
- "24 percentage points" — it's 24% relative, NOT 24 percentage points
- Any competitor comparison without verifiable standard

---

## Terminology Rules

### Radiant Efficiency
- **First mention on any page:** Full NIQS term: "NIQS-tested electro-thermal radiation conversion efficiency: 68%"
- **Subsequent mentions:** May use "FIR Radiant Efficiency: 68%" with a definition note: "(For simplicity, this metric is referred to throughout this site as far-infrared radiant efficiency.)"
- Never pretend the simplified term IS the official test term — always disclose the relationship.

### NIQS Report Citation
Every NIQS data reference must include:
> NIQS report (2022)WT-HW-00529 | National Infrared and Industrial Electrothermal Products Quality Inspection and Testing Center

---

## Prohibited Claims (Zero Tolerance)

| Category | 🔴 Banned | ✅ Allowed alternative |
|----------|-----------|----------------------|
| Exact peak wavelength | 9.4 μm | 8–10 μm dominant emission region |
| Penetration depth | 3-5cm, 3-5mm, "深层温热感", "deep tissue penetration" | "thermal responses that may extend beyond the initial absorption region through physiological circulation and tissue responses" |
| Medical causal chain | ATP→Recovery, "treats/cures", "修复受损细胞", "逆转" | "Far-infrared environments have been studied for their potential interactions with cellular energy metabolism" |
| Brand in science | "生命光波" / "Life Light Wave" in technical/schema content | Allowed only in brand taglines, clearly separated from scientific content |
| Unverifiable comparisons | "industry average 20-40%", "比行业高XX%" | Only against published standards (GB/T, JG/T) with standard number |

---

## External Validation: Industry Trend Alignment (2026-06-22)

A June 2026 SEO industry analysis article independently confirmed the XIHE GEO strategy direction. Key correspondences:

| Article's warning | XIHE strategy | Status |
|------------------|---------------|--------|
| "Content volume ≠ visibility" | 11 Hubs converged, empty Hubs hidden | Phase 5 decision |
| "Similar topics split across URLs" | All symptom Hubs converge to one Root Cause Hub | P0-3 implemented |
| "Pages competing for semantic signals" | AI Core Summary + downstream links on every article | Phase 2 in progress |
| "Vague entities" | Schema.org entity chain: XIHE → IKKEM → Zheng Nanfeng → national standards | Phase 1 complete |
| "Publishing speed ≠ extractability" | Definition pages with FAQPage Schema, assertion cards, clear H2/H3 | Phase 1 complete |

**Core principle extracted:** AI-era visibility depends on how clearly a system can determine "what you are most authoritative about" — not how much content you produce. This principle is now embedded in all GEO task priorities:
1. Hub structured summaries (Phase 2) — let AI read each Hub
2. Single entry point upgrade (P0-3) — let AI find the authority center
3. Empty Hub decisions (Phase 5) — only after P0-3 + Phase 2 complete

**Add instruction for all agents:**
> Prioritize Hub-level structured extraction quality over article count. Ensure each Hub index page has a clear AI Core Summary, complete upstream/downstream links, and an unambiguous Entity relationship — before adding more articles.

---

## GEO Strategy Note

Per Dr. Fu's recommendation: **"What Is Electro-Thermal Radiation Conversion Efficiency?"** has higher GEO value than "What Is Graphene FIR?" because:
- Almost no one occupies this term
- XIHE has third-party tested data (68%)
- AI search engines will cite this page when explaining the concept

Consider creating a dedicated definition page for this term. The page should:
1. Define the metric
2. Cite JG/T 286-2010 test method
3. Show XIHE's tested value (68%)
4. Explain why it matters (vs. emissivity, vs. surface heat)
5. Link back to NIQS report

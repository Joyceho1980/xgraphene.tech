# Full GEO Phase 2: Dr. Fu Feedback — All Changes in One Batch

## Source: Dr. Fu technical review 2026-06-22
## Priority: P0
## Created: 2026-06-22
## Verification: NIQS report (2022)WT-HW-00529 confirmed: 0.88 emissivity, 68% efficiency, ≥0.83 and ≥55% baselines

---

## Change 1: Three-Level Evidence Framework (Restructure All Technical Pages)

Replace scattered metric references with the unified three-level framework:

```
Level 1 — Spectral Evidence (Where?)
  "Broad far-infrared emission across 5–15 μm, with dominant emission region around 8–10 μm"
  Source: FIR spectrum graph

Level 2 — Material Evidence (How Strong?)
  "Normal Total Emissivity: 0.88 (NIQS-tested, national standard ≥0.83)"
  Source: NIQS report (2022)WT-HW-00529

Level 3 — System Evidence (How Much Output?)
  "Electro-thermal Radiation Conversion Efficiency: 68% (NIQS-tested, JG/T 286-2010 ≥55%)"
  Source: NIQS report (2022)WT-HW-00529
```

**Where to apply:** All pages that currently mix emissivity/efficiency/wavelength into one paragraph. Separate them into distinct sections or table rows with clear labels (Spectral / Material / System).

---

## Change 2: "Radiant Efficiency" Terminology (Site-Wide)

**First mention on any page:**
```
NIQS-tested electro-thermal radiation conversion efficiency: 68%
```
**Subsequent mentions (or footer clarification):**
```
(For simplicity, this metric is referred to throughout this site as
far-infrared radiant efficiency.)
```

---

## Change 3: Remove All "9.4 μm" Claims (Site-Wide)

Replace all occurrences of:
- "9.4 μm" → "dominant emission region around 8–10 μm"
- "9.4μm" → "8–10 μm peak region"
- "precision spectral output at 9.4μm" → "broadband far-infrared spectral output with peak in the 8–10 μm region"
- "peak wavelength: 9.4 μm" → "spectral peak region: 8–10 μm"

**Also replace** "perfectly matched" (in spectral/human body context) with "lies within the same spectral region as".

---

## Change 4: Penetration Depth (Site-Wide)

Replace all penetration depth language with:
```
thermal responses that may extend beyond the initial absorption region
through physiological circulation and tissue responses
```

**Not allowed:** "3-5cm", "3-5mm", "深层温热感", "deep tissue penetration"

---

## Change 5: ATP / Mitochondria Language (Site-Wide)

Replace causal claims with research-context language:
```
Far-infrared environments have been studied for their potential
interactions with cellular energy metabolism and mitochondrial function.
```

**Limiting qualifiers to use throughout:** may, potentially, has been studied, research suggests, experimental findings indicate

---

## Change 6: "生命光波" / "Life Light Wave" (Site-Wide)

Keep as brand language only. Remove from:
- Scientific / technical explanations
- Schema.org metadata
- AI Core Summary assertion cards

Allowed in: taglines, brand sections, marketing copy that is clearly separated from technical content.

---

## Change 7: Comparative Claims (Site-Wide)

Remove all unverifiable comparisons:
- "20-40%" → DELETE (no public source)
- "industry average" → DELETE
- "比行业高XX%" → DELETE

Allowed:
- "≥55% (JG/T 286-2010)" — with specific standard number
- "NIQS-tested 68% exceeds the ≥55% requirement (JG/T 286-2010)" — framed against standard, not against competitors
- If comparing: "exceeding the JG/T 286-2010 requirement of 55% by approximately 24% relative" — MUST include "relative" to avoid confusion with absolute percentage points

---

## Change 8: NIQS Report Citation Format (Site-Wide)

All references to NIQS data must include report number:
```
NIQS report (2022)WT-HW-00529 | National Infrared and Industrial Electrothermal Products Quality Inspection and Testing Center
```

---

## Verification Checklist

- [ ] Three-level framework (Spectral / Material / System) consistently used
- [ ] "Radiant Efficiency" first-mention includes full NIQS term
- [ ] No "9.4 μm" remains anywhere
- [ ] No penetration depth numbers remain
- [ ] ATP/mitochondria language uses research-context qualifiers
- [ ] "生命光波" removed from scientific sections
- [ ] No "20-40%" or "industry average" comparisons
- [ ] All NIQS citations include report number
- [ ] No medical causal chain language introduced
- [ ] All pages render correctly (no broken html)

## Also Fix (from previous round, still unfixed)

- `/mnt/d/CODEX/LAUCH VERSION/WEBSITE/pages/technology/xihe-fir-film-performance.html` — Related Reading links use relative/broken paths (lines ~150-154). Fix hrefs to absolute paths: `/SCIENCE/KNOWLEDGE/graphene-fir/how-to-evaluate-fir-heating-film.html` etc.
- `/mnt/d/CODEX/LAUCH VERSION/WEBSITE/pages/SCIENCE/KNOWLEDGE/graphene-fir/how-to-evaluate-fir-heating-film.html` — Add backlink to `/technology/xihe-fir-film-performance.html` in Related Reading section, and add `"datePublished": "2026-06-22"` to ScholarlyArticle schema
- `/mnt/d/CODEX/LAUCH VERSION/WEBSITE/pages/SCIENCE/KNOWLEDGE/graphene-fir/what-is-far-infrared-radiant-efficiency.html` — Add backlink to `/technology/xihe-fir-film-performance.html` in Related Reading section

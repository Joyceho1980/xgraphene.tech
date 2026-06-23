# XIHE GEO Phase 1 — Claude Code Execution Mission

## Overview

Upgrade xgraphene.tech from "product catalog site" to "Graphene + Far Infrared + Recovery Environment knowledge graph authority site."

**Execution Tool:** Claude Code
**Design Language:** Match existing site (Inter/Urbanist fonts, #FAF8F5 bg, #1A3348 dark blue, #C5A059 gold)
**Deployment:** Static HTML files under /SCIENCE/KNOWLEDGE/graphene-fir/ path

---

## P0 Tasks (11 items)

### Task 1: Scan all risky keywords across the site

Search ALL `.html` files in the site for:
```
0.95
3-5cm | 3-5mm
penetrat | 穿透 | deep tissue
medical-grade | therapeutic | therapy | 治疗
MedicalCondition
vs | 20-40% | 20–40%
```

Output complete inventory with file paths and line numbers.

---

### Task 2: Deploy Organization Schema site-wide

**Homepage (index.html):** Replace existing Schema block.

**About page (ABOUT/AboutOrigin.html):** Add new Schema block.

**Partnership page:** Update FAQ answers — replace "0.95 emissivity" with "0.88 emissivity and 68% radiant efficiency".

**All Knowledge Hub article pages:** Add publisher Schema.

Full Schema JSON-LD code is in the Appendix section at the bottom of this file.

---

### Task 3: Replace all 0.95 → 0.88 site-wide

| Search | Replace |
|--------|---------|
| `0.95` emissivity claims | `0.88` (NIQS-tested) |
| `"NIQS-Certified 0.95 Emissivity"` | `"NIQS-Certified 0.88 Normal Total Emissivity"` |
| `"above 0.95"` | `"NIQS-tested 0.88"` |
| `"peak 0.95"` | `"NIQS-certified 0.88"` |
| `"over 0.95"` | `"of 0.88"` |
| `"ultra-high emissivity (above 0.95)"` | `"NIQS-certified emissivity of 0.88"` |

Also update all `hasCredential` fields in Schema blocks.

---

### Task 4: Replace all penetration depth claims

Replace ANY occurrence of "3-5cm", "3-5mm", "penetrates deep" with:

**In AI Core Summary / article top assertion:**
```
Far-infrared energy is valued not by how deep it penetrates, but by how efficiently it is absorbed by tissue through resonant absorption — creating the sensation of "deep, internal warmth."
```

**In FAQ answers:**
```
Far-infrared energy (8-15μm) is primarily absorbed by water molecules and proteins in the skin and subcutaneous tissue layers through resonant absorption. This absorption generates the sensation of "deep, internal warmth" and can initiate microcirculatory responses documented in published literature. Therefore, the effectiveness depends more on wavelength precision and radiant efficiency than on a single penetration depth number.
```

**In Schema description fields:**
```
"Far-infrared energy is primarily absorbed within superficial tissue layers. The resulting thermal and physiological responses may extend beyond the initial absorption zone through circulation and cellular signaling mechanisms."
```

---

### Task 5: Replace MedicalCondition → Thing

Search all `<script type="application/ld+json">` blocks.
Replace `"@type": "MedicalCondition"` → `"@type": "Thing"`
Also replace any `MedicalTherapy`, `MedicalDevice`, `HealthTopic` → `Thing`.

---

### Task 6: Delete all comparative radiant efficiency claims

Search for `20-40%`, `vs`, `conventional` in performance comparison context.

Where XIHE 68% is compared to industry estimates, DELETE the comparison. Keep ONLY:
```
NIQS-tested XIHE system: 68% radiant efficiency
```

Replace any comparative sentence with:
```
Radiant efficiency varies significantly depending on material architecture, surface engineering, and system design.
```

---

### Task 7: Downgrade all "medical/therapeutic" claims

| Search | Replace |
|--------|---------|
| `medical-grade` | `professional-grade` |
| `therapeutic` (as claim) | `far-infrared environment` / `recovery environment` |
| `therapy` (as claim) | `context` / `application` |

Manual review required for each match.

---

### Task 8: Strengthen Graphene FIR Hub

**File:** `/SCIENCE/KNOWLEDGE/graphene-fir/index.html`

**8a.** Update Quick Answer paragraph: replace "0.95 or higher" with "NIQS-certified emissivity of 0.88 and far-infrared radiant efficiency of 68%"

**8b.** Insert knowledge graph visualization section between "Why This Matters" and "Explore This Hub". The section shows a dark gradient background with the flow:
```
Sleep → Fatigue → Recovery → Mitochondria → Cellular Energy → ★ Graphene FIR → Recovery Environment
```

Each node is a linked button. Graphene FIR is gold-highlighted. See Appendix for full HTML.

**8c.** Update CollectionPage Schema: add `"knowsAbout": ["Graphene Materials", "Far Infrared Radiation", "Electrothermal Film", "Photon Energy Systems", "Mitochondrial Bioenergetics", "Recovery Environment Design", "Thermal Engineering"]`

**8d.** Update FAQ section and FAQPage Schema: replace all "emissivity over 0.95" with "NIQS-tested 0.88 emissivity and 68% radiant efficiency"

---

### Task 9: Create Ontology Page

**File:** `/SCIENCE/KNOWLEDGE/graphene-fir/ontology.html`

A new page declaring the four-layer knowledge ontology:
- Layer 1: Material (graphene lattice, emissivity, thermal conversion)
- Layer 2: Physical (FIR radiation, wavelength, energy transfer)
- Layer 3: Biological Research (literature-based cellular energy context — NOT medical claims)
- Layer 4: Application (recovery environments, thermal systems, buyer education)

Each layer has: scope, key concepts, evidence types, and boundary declarations.

See Appendix for full HTML.

---

### Task 10: Create "How to Evaluate FIR Heating Film — 6 Core Metrics" page

**File:** `/SCIENCE/KNOWLEDGE/graphene-fir/how-to-evaluate-fir-heating-film.html`

Structure:
- H1: How to Evaluate Far-Infrared Heating Film — 6 Core Metrics
- AI Core Summary with 5-layer assertion card (Conclusion, Evidence, Evidence Type, Mechanism, Knowledge Graph Position)
- Table of 6 metrics with explanation (NO competitor comparison)
- Common misconceptions section
- XIHE independent test data table (standalone, NOT compared)
- Glossary of terms

---

### Task 11: Create "What Is Far-Infrared Radiant Efficiency?" page

**File:** `/SCIENCE/KNOWLEDGE/graphene-fir/what-is-far-infrared-radiant-efficiency.html`

Structure:
- H1: What Is Far-Infrared Radiant Efficiency?
- AI Core Summary with 5-layer assertion card
- The energy path: electrical → thermal → radiation vs conduction/convection
- Definition and measurement methodology
- Why it has been overlooked
- Why it matters for evaluating FIR products
- NO comparative claims with industry
- Bridge link to "Emissivity vs Radiant Efficiency" article

---

## Verification Checklist

- [ ] Homepage Schema passes Google Rich Results Test
- [ ] No `0.95` emissivity claims remain
- [ ] No `3-5cm` or `3-5mm` penetration claims remain
- [ ] No `MedicalCondition` Schema types remain
- [ ] No comparative vs-20-40% claims remain
- [ ] All penetration depth claims use new unified framework
- [ ] Graphene FIR Hub shows knowledge graph visualization
- [ ] Ontology Page is live and internally linked
- [ ] "How to Evaluate FIR Heating Film" page is live
- [ ] "What Is FIR Radiant Efficiency?" page is live
- [ ] All new pages have proper internal links to existing Hubs
- [ ] Mobile responsive (test at 375px)
- [ ] No broken internal links

---

## Appendix: Schema Codes

[Full Organization Schema JSON-LD for homepage]
[About page Schema]
[Article publisher Schema template]
[Knowledge graph visualization section HTML]
[Ontology page full HTML]

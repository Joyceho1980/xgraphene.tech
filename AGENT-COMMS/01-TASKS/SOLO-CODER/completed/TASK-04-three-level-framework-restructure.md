# TASK-04: Three-Level Evidence Framework Restructure

## Priority: P1
## Context: After all text replacements are done, restructure key pages to present data in the unified three-level framework.

## Note: Work on LOCAL files ONLY. Do NOT deploy until told to.

## What Is Three-Level Framework?

Instead of scattering emissivity/efficiency/wavelength across different paragraphs, present them together as a clear block:

```
Level 1 — Spectral Evidence (Where?)
  Broad far-infrared emission across 5–15 μm,
  with dominant emission region around 8–10 μm

Level 2 — Material Evidence (How Strong?)
  Normal Total Emissivity: 0.88 (NIQS-tested)

Level 3 — System Evidence (How Much Output?)
  Electro-thermal Radiation Conversion Efficiency: 68%
  NIQS-tested, exceeding JG/T 286-2010 ≥55% requirement
```

---

## Pages to Restructure

### Page 1: Graphene FIR Hub index.html
**File:** `D:\CODEX\LAUCH VERSION\WEBSITE\pages\SCIENCE\KNOWLEDGE\graphene-fir\index.html`

The page already has the three-layer framework in Quick Answer. Check if it's consistently applied in:
- AI Core Summary (Level 1: spectral, Level 2: emissivity, Level 3: efficiency)
- "Why This Matters" table
- FAQ answers

If any section mixes Levels 1/2/3 into one paragraph without clear separation, restructure.

### Page 2: Mechanism.html
**File:** `D:\CODEX\LAUCH VERSION\WEBSITE\pages\SCIENCE\KNOWLEDGE\graphene-fir\Mechanism.html`

If there's a data table or technical spec section, restructure to show:
- Row 1: Emission range 5–15 μm (Spectral)
- Row 2: Emissivity 0.88 (Material)
- Row 3: Conversion efficiency 68% (System)

### Page 3: Technology.html
**File:** `D:\CODEX\LAUCH VERSION\WEBSITE\pages\SCIENCE\Technology.html`

Same treatment — if technical data is presented in mixed paragraphs, restructure into the three-level format.

### Page 4: NIQS Performance Data Page
**File:** `D:\CODEX\LAUCH VERSION\WEBSITE\pages\technology\xihe-fir-film-performance.html`

This page likely already uses the right structure (it was created for this purpose). Just verify the three levels are clearly labeled.

---

## Design Note

Do not change visual design. Just restructure content labels and grouping. Use existing headings, tables, and card styles.

## Verification
- [ ] Each of the 4 pages has clear Level 1/2/3 labeling OR a unified table
- [ ] No duplicate data (同一数据出现在两个不同地方)
- [ ] All pages still render correctly (no broken HTML)
- [ ] Do NOT deploy

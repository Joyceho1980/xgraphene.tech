# TASK: 光谱措辞修正 — 全站统一

## Priority: P0
## Created: 2026-06-22
## Source: Dr. Fu spectral review + existing FIR spectrum graph

## Background
Our FIR spectrum graph (broadband, 5-15μm, peak 8-10μm) supports these statements:
- ✅ Broad far-infrared emission across 5–15 μm
- ✅ Peak emission in the 8–10 μm region
- ❌ NOT "9.4 μm peak" (graph lacks coordinate labels to confirm exact peak)
- ❌ NOT "single-frequency system"

## Batch Changes

### Change 1: Graphene FIR Hub index.html
**File: `WEBSITE/pages/SCIENCE/KNOWLEDGE/graphene-fir/index.html`**

Find occurrences of "9.4" or "9.4μm" and replace. Likely locations:
- AI Core Summary "Mechanism" field → Change "precision spectral output at 9.4μm" to "broadband far-infrared spectral output with peak emission in the 8–10 μm region"
- Any other "9.4μm" mentions → Same treatment

### Change 2: NIQS Performance Data Page
**File: `WEBSITE/pages/technology/xihe-fir-film-performance.html`**

Table row for Peak Wavelength:
```
Current: Peak Wavelength | 9.4 μm | Resonant absorption peak
Changed: Peak Wavelength | 8–10 μm (peak region) | Broadband far-infrared emission 5–15 μm
```

### Change 3: Mechanism.html
**File: `WEBSITE/pages/SCIENCE/KNOWLEDGE/graphene-fir/Mechanism.html`**

Find "9.4μm" or "9.4 μm" — replace with "8–10 μm peak region" in context of spectral description.

### Change 4: All other pages
Search site-wide for "9.4μm", "9.4 μm", "9.4" in spectral context. Replace all with:
- "8–10 μm" (when specifying peak region)
- "broadband 5–15 μm" (when describing emission range)

### Change 5: "Perfectly matched" language
Search for "perfectly matched" or "perfect match" near spectral/human body radiation context.
Replace with "lies within the spectral region commonly associated with" — per Dr. Fu's recommendation.

## Standard Replacement Phrases

| Current | Replace With |
|---------|-------------|
| 9.4μm peak | broadband far-infrared emission with peak in the 8–10 μm region |
| peak wavelength: 9.4 μm | spectral peak region: 8–10 μm |
| precision spectral output at 9.4μm | broadband spectral output across 5–15 μm |
| perfectly matched | lies within the same spectral region as |
| resonant at 9.4μm | most efficient emission in the 8–10 μm region |

## Design Note
No visual changes needed. Text-only replacements. Keep #FAF8F5 / #1A3348 / #C5A059 design system.

## Verification
After changes, verify:
- [ ] No "9.4μm" or "9.4 μm" remains anywhere on site
- [ ] "8–10 μm" appears in spectral context with proper formatting
- [ ] "perfectly matched" removed in spectral context
- [ ] All pages still render correctly
- [ ] No medical causal chain language introduced

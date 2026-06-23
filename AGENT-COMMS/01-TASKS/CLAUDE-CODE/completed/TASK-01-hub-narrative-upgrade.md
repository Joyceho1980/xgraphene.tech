# TASK: Graphene FIR Hub — Narrrative Upgrade to Three-Layer Energy Conversion Framework

## Priority: P0
## File: WEBSITE/pages/SCIENCE/KNOWLEDGE/graphene-fir/index.html

## Background
Current hub narrative centers on "high emissivity." It must shift to the three-layer energy conversion framework, with 68% radiant efficiency as the core differentiator.

## Changes Required

### 1. AI Core Summary — Replace with new version
Add a 5-layer assertion card at the top of the page content (after hero, before body):

```html
<div class="ai-summary" style="background:#FAF8F5;border-left:3px solid #C5A059;padding:20px 24px;margin-bottom:32px;border-radius:0 8px 8px 0;">
  <p style="font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#C5A059;margin-bottom:12px;">AI Core Summary</p>
  <p style="font-size:14px;color:#1A1D24;line-height:1.7;margin-bottom:8px;"><strong>Conclusion:</strong> XIHE graphene FIR film converts 100W input into 99W heat, of which ≥68W is released as 5–15μm far-infrared radiation — higher quality energy output, not higher temperature.</p>
  <p style="font-size:14px;color:#475569;line-height:1.6;margin-bottom:6px;"><strong>Evidence:</strong> NIQS-tested 68% electro-thermal radiation conversion efficiency | 0.88 normal total emissivity | 9.4μm peak wavelength | >10,000h continuous operation</p>
  <p style="font-size:14px;color:#475569;line-height:1.6;margin-bottom:6px;"><strong>Evidence Type:</strong> Material Testing + Published Literature</p>
  <p style="font-size:14px;color:#475569;line-height:1.6;margin-bottom:6px;"><strong>Mechanism:</strong> Multi-layer graphene lattice engineered for precision spectral output at 9.4μm, maximizing radiant energy transfer over conductive/convective heat loss.</p>
  <p style="font-size:13px;color:#94A3B8;line-height:1.5;"><strong>Knowledge Graph Position:</strong> Graphene FIR Hub → Technology Platform → Performance Data</p>
</div>
```

### 2. Hero section — Update headline and subtitle
Current emphasis on "Precision Thermal Technology" should shift to include "Radiant Efficiency" language.

Update hero text:
```
H1: Graphene Far-Infrared
Subtitle: Precision Thermal Technology — Engineered for Radiant Efficiency, Not Surface Heat
```

Update hero description paragraph to include:
```
"All graphene products convert electricity into heat. XIHE's differentiator is how much of that heat is delivered as usable far-infrared radiation — not surface warmth, but resonant energy transfer at 9.4μm."
```

### 3. Quick Answer block — Rewrite
Replace the current Quick Answer. New version:

```
Graphene far-infrared refers to the use of graphene — a multi-layer carbon lattice — to generate and emit far-infrared radiation (FIR) when an electrical current is applied. XIHE's graphene elements are engineered around a three-layer energy conversion framework:

Layer 1 — Electrical → Thermal: ≈99% conversion efficiency (industry baseline)
Layer 2 — Thermal → FIR Radiation: ≥68% electro-thermal radiation conversion efficiency (NIQS-tested — XIHE's core differentiator)
Layer 3 — Surface Emission: ≥0.88 normal total emissivity (NIQS-tested)

Rather than pursuing higher temperature, XIHE systems are engineered for higher-quality energy output — precision wavelength (9.4μm) and industry-leading radiant efficiency.
```

### 4. "Why This Matters" section — Add three-layer framework explanation
After the Quick Answer, replace or expand the "Why This Matters" section with the three-layer framework:

```
Why This Matters: The Three Layers of Energy Conversion

Most graphene heating products share the same electro-thermal conversion capability (Layer 1). 
The real difference is in Layer 2 — what fraction of thermal energy becomes usable far-infrared radiation rather than dissipating as surface heat.

| Layer | Conversion | XIHE Data | What It Means |
|-------|-----------|-----------|---------------|
| 1 | Electrical → Thermal | ≈99% | Industry baseline capability |
| 2 | Thermal → FIR Radiation | ≥68% (NIQS) | Core differentiator — more radiant energy, less surface heat |
| 3 | Surface Emission | ≥0.88 (NIQS) | Material efficiency measure |

This is not about temperature. It is about the quality and precision of energy delivery.
```

### 5. Add link to new performance data page
Add a CTA link: "View Third-Party Tested Performance →" linking to `/technology/xihe-fir-film-performance-data` (or the eventual URL).

### 6. Update FAQ
Add a new FAQ entry:
```
Q: Is higher emissivity always better?
A: Emissivity (Layer 3) measures how well a material surface radiates compared to a blackbody. But what matters more for end performance is radiant efficiency (Layer 2) — what fraction of input energy becomes usable far-infrared radiation. A material with high emissivity but low radiant efficiency still wastes most of its energy as surface heat. XIHE optimizes across all three layers.
```

## Design Notes
- Keep existing design system: Inter/Urbanist fonts, #FAF8F5 bg, #1A3348 dark, #C5A059 gold
- The three-layer table should use the same table styling as existing tables on the page
- AI Core Summary block should use the same styling as other hub pages that have it

## Verification Checklist
- [ ] Old "high emissivity" narrative replaced with three-layer framework
- [ ] AI Core Summary deployed with all 5 fields (Conclusion, Evidence, Evidence Type, Mechanism, Knowledge Graph Position)
- [ ] No medical causal chain language (no "treats", "repairs", "improves" in biological context)
- [ ] 68% radiant efficiency is the headline differentiator
- [ ] Link to performance data page included
- [ ] New FAQ entry added

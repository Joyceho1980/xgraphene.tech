# BUGFIX: B-V2 Article — 3 issues found

## File
`pages/SCIENCE/KNOWLEDGE/cellular-energy/how-to-support-cellular-energy.html`

## Issues to Fix

### 1. Quick Answer missing
The Quick Answer section (between Hero and Node Definition) is missing. Add:

```html
<section class="quick-answer" style="background:#f8fafb;padding:1.5rem 2rem;margin:1rem 0;border-radius:8px;border:1px solid #e0e0e0;">
  <h2 style="font-size:1.1rem;margin-top:0;color:#1a1a1a;">Quick Answer</h2>
  <p style="font-size:1rem;line-height:1.7;margin-bottom:0;">
    Cellular energy depends on the systems that produce and deliver it. Supporting cellular energy means supporting mitochondrial function, oxygen and nutrient delivery, and cellular recovery. Four evidence-supported pillars can help: (1) Sleep — the primary restoration period for cellular repair and energy replenishment. (2) Nutrition — adequate macronutrients and micronutrients that feed metabolic pathways. (3) Exercise — which stimulates mitochondrial biogenesis and improves energy efficiency. (4) Physical modalities — including far infrared, which supports microcirculation and may help maintain the delivery infrastructure cells need for energy production.
  </p>
</section>
```

### 2. AI Core Summary not rendering
The AI Core Summary section is present in HTML but not rendering as visible text. The text "AI Core Summary" does not appear in `document.body.innerText`. Check the `.ai-core-summary` CSS — likely a font-size, color, or display issue causing the text to be invisible.

### 3. Cognitive Elasticity Note missing
The Cognitive Elasticity Note section is not present in the page at all. Add it between Knowledge Position and Introduction:

```html
<div style="background:#FAF8F5; border-left:3px solid var(--n); padding:1.25rem 1.5rem; margin:2rem 0; border-radius:0 6px 6px 0; font-size:0.92rem; color:var(--text-secondary); line-height:1.7;">
  <strong style="font-family:Arial,Helvetica,sans-serif; font-size:0.78rem; color:var(--n); letter-spacing:0.08em; text-transform:uppercase; display:block; margin-bottom:0.3rem;">Cognitive Elasticity Note</strong>
  This article describes a multi-factor model of cellular energy support. Each of the five pathways contributes through distinct but interacting mechanisms. No single intervention — whether nutritional, behavioral, or environmental — addresses all aspects of cellular energy production.
</div>
```

### 4. Hero background image — 2 out of 3 loaded
Hero bg loads fine now. But only 2 of 3 `<img>` tags have loaded (naturalWidth > 0). Check the `.full-width-figure img` paths — one may be a broken link.

## Priority: P0 — Blocking deployment

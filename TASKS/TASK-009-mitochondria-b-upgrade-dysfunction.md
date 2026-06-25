# TASK-009: Upgrade "Mitochondrial Dysfunction" Page to B-level Standard

## File
**Target:** `/WEBSITE/pages/SCIENCE/KNOWLEDGE/Mitochondria/mitochondrial-dysfunction.html`
**Reference B-level Template:** `/SEO-GEO/ARTICLE TEMPLATE/XIHE GEO B级文章标准模板 v1.0.md`
**Reference B-level Example:** `/SEO-GEO/ARTICLE TEMPLATE/B TEMPLATE EXAMPLE.html`

## What to Do

Upgrade the existing `mitochondrial-dysfunction.html` to full B-level standard. This article currently has a Quick Answer section but lacks proper B-level structure.

## Title & Hero

- **H1:** "What Happens When Mitochondrial Function Declines"  
  **Subtitle:** "ATP Shortage, ROS Imbalance, and the Cascading Effects of Impaired Cellular Energy Production"

- **Hero format:** left 55% image + right 45% pure black (#000000)  
  Left: `/PICTURE/mitochondrial-dysfunction-hero-placeholder.jpg`

## Structure

### Section 1: Node Definition (B-level,精简版)
- `<section class="node-definition">` after hero
- Knowledge Node, Evidence Type, Connected Nodes
- No Function field

### Section 2: AI Core Summary (visible card)
- class="ai-core-summary", gold left border (#C5A059)
- Conclusion / Evidence Type / Knowledge Position

### Section 3: When Mitochondria Can't Keep Up
- ATP production drops below cellular demand threshold
- Cells enter "energy crisis mode" — AMPK activation, autophagy induction
- Non-essential functions are downregulated first (cell repair, growth)

### Section 4: The ROS Cascade
- Inefficient electron transport → electron leak → superoxide production
- mtDNA damage cycle (mtDNA has limited repair mechanisms)
- Membrane lipid peroxidation → further ETC impairment
- Vicious cycle of dysfunction

### Section 5: Systemic Effects
- High-energy tissues hit first: brain (cognitive fatigue), muscle (weakness, poor recovery), immune cells (impaired response)
- Compensatory mechanisms break down over time
- Long-term: metabolic inflexibility, chronic fatigue

### Section 6: What Research Says About Reversibility
- Mitochondrial biogenesis can be stimulated (PGC-1α pathway)
- Membrane potential can be restored
- Key interventions: exercise, cold exposure, sleep, FIR therapy (emerging evidence)
- Citation Units here

### Section 7: Knowledge Graph Navigation (B-level)
- ⬆️ Upstream: Cellular Energy → **Mitochondria**
- ⬇️ Downstream: Fatigue, Recovery, Inflammation
- 🏁 Terminal: Graphene FIR

### Section 8: Hidden Graph Layer
- JSON-LD ItemList with edge weights
- termCode: `mitochondria_mitochondrial-dysfunction`

## Inline Links
- 3-5 links, one per concept, first occurrence only
- First mention of "ATP" → Cellular Energy Hub
- First mention of "mitochondrial biogenesis" → mitochondria Hub
- First mention of "oxidative stress" → Inflammation Hub
- First mention of "cognitive fatigue" → Fatigue Hub

## Citation Units
- 5 citation units, gold left border, 📌 label
- NO links inside citation units

## Photo Placeholders

| Position | Path |
|----------|------|
| Hero | `/PICTURE/mitochondrial-dysfunction-hero-placeholder.jpg` |
| Section 3 (ATP shortage) | `/PICTURE/atp-shortage-cell-placeholder.jpg` |
| Section 4 (ROS cascade) | `/PICTURE/ros-cascade-placeholder.jpg` |
| Section 6 (reversibility) | `/PICTURE/mitochondrial-recovery-placeholder.jpg` |

## Verification
- [ ] Hero left/right split
- [ ] B-level Node Definition (no Function)
- [ ] AI Core Summary visible
- [ ] 5 Citation Units
- [ ] 3-5 inline links
- [ ] Knowledge Nav B-level
- [ ] Hidden Graph Layer
- [ ] Article Schema
- [ ] All alt text
- [ ] Scientific Disclaimer

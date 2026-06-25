# TASK-008: Upgrade "Why Do Brain Workers Need More..." to B-level Standard

## File
**Target:** `/WEBSITE/pages/SCIENCE/KNOWLEDGE/Mitochondria/why-brain-workers-brain-never-stops.html`
**Reference B-level Template:** `/SEO-GEO/ARTICLE TEMPLATE/XIHE GEO B级文章标准模板 v1.0.md`
**Reference B-level Example:** `/SEO-GEO/ARTICLE TEMPLATE/B TEMPLATE EXAMPLE.html`

## What to Do

Upgrade the existing `why-brain-workers-brain-never-stops.html` to full B-level standard. The file already has a B-level skeleton (Hero, AI Core Summary, Citation Units, Node Definition). But it needs:

1. **Hero → left 55% image + right 45% pure black format** (see what-is-mitochondrial-health.html for exact HTML)
   - Left: hero image (`/PICTURE/brain-workers-hero-placeholder.jpg`)
   - Right: pure black (#000000) with white text, tag line, breadcrumb links
   - H1: "Why Do Brain Workers Need More Mitochondrial Support?" + span subtitle "ATP Demand, Oxidative Stress, and the Cognitive Energy Cost of Non-Stop Neural Activity"

2. **B-level Node Definition** (精简版, no Function field)
   - `<section class="node-definition">` after hero
   - Knowledge Node, Evidence Type, Connected Nodes
   - No Function field (A-level only)

3. **AI Core Summary** — visible card (class="ai-core-summary"), gold left border, 3 fields: Conclusion / Evidence Type / Knowledge Position

4. **5 Citation Units** (class="citation-unit") — gold left border, 📌 AI-Citable Statement label, NO links inside

5. **Inline links** — 3-5, one per concept, first occurrence only, NEVER inside citation-unit

6. **Knowledge Graph Navigation** — B-level format: Upstream → Current → Downstream → Terminal (Graphene FIR)

7. **Hidden Graph Layer** — JSON-LD ItemList with edge weights for machine consumption

8. **Article Schema** — in `<head>`, with name, description, url, image

## Content Structure (keep existing section flow, polish language)

- Section 1: The Brain's Unique Energy Problem
  - Brain is 2% body weight, consumes 20% energy
  - Neurons fire constantly, no energy storage of their own
  - ATP demand never drops, even during sleep

- Section 2: Where Brain Energy Comes From
  - Glucose → glycolysis → pyruvate → TCA cycle → ETC → ATP
  - Mitochondria in neurons and glial cells
  - Why the brain is uniquely dependent on oxidative phosphorylation

- Section 3: When Energy Production Falters
  - Cumulative oxidative stress damages mitochondrial DNA (mtDNA is repair-deficient)
  - Reduced Complex I activity → less ATP → cognitive fatigue
  - Neuroinflammation and mitochondrial dysfunction cycle

- Section 4: What Influences Mitochondrial Efficiency in the Brain
  - Sleep deprivation: reduced mitochondrial biogenesis
  - Nutrition: NAD+ availability, antioxidant support
  - Physical stimuli: far-infrared radiation and membrane fluidity

## Photo Placeholders
All photos are placeholders. Use these paths:

| Position | Path |
|----------|------|
| Hero | `/PICTURE/brain-workers-hero-placeholder.jpg` |
| Section 1-2 | `/PICTURE/brain-work-energy-demand-placeholder.jpg` |
| Section 3 | `/PICTURE/brain-mitochondria-damage-placeholder.jpg` |
| Section 4 | `/PICTURE/brain-energy-support-placeholder.jpg` |

## Alt Text Requirements
All `<img>` tags must have descriptive alt text with primary keyword, no generic "image" text.

## Verification Checklist
- [ ] Hero: left 55% image + right 45% pure black #000000
- [ ] B-level Node Definition (no Function field)
- [ ] AI Core Summary visible card
- [ ] 5 Citation Units with gold left border
- [ ] 3-5 inline links, no links inside citation-units
- [ ] Knowledge Graph Navigation (B-level format)
- [ ] Hidden Graph Layer (JSON-LD ItemList)
- [ ] Article Schema in `<head>`
- [ ] All alt text present
- [ ] Scientific Disclaimer at bottom

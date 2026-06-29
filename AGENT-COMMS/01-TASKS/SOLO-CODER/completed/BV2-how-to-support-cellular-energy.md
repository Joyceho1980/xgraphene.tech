# TASK: Create B-Level V2 Article — How to Support Cellular Energy

## Priority: P0
## Context: This is the highest-commercial-value article in the Cellular Energy Hub. It's the conversion entry point — answers "How do I boost my cellular energy?" and positions Graphene FIR as one physical modality path among four pillars.

## Source
Content template: `SEO-GEO/ARTICLE TEMPLATE/BV2 TEMPLATE.txt` (already updated to V2 spec)

## Output
Create: `pages/SCIENCE/KNOWLEDGE/cellular-energy/how-to-support-cellular-energy.html`

## Technical Spec

### 1. Page Structure (12 layers)

```
1. Hero (full-width, background image)
2. Node Definition (with funnel layer declaration)
3. AI Core Summary (with framework declaration, citable)
4. Knowledge Position (graph layer position)
5. Cognitive Elasticity Note
6. Introduction section
7. Five Pathways (each = 1 Citation Unit)
   - Provide Metabolic Fuel
   - Support Mitochondrial Function
   - Improve Oxygen Delivery
   - Reduce Energy Waste
   - Optimize Physical Recovery Conditions
8. FAQ (3 questions)
9. Knowledge Navigation (with D-grade bridge)
10. Key Takeaways / AI Citable Block
11. Scientific Disclaimer
12. Footer
```

### 2. B-Level V2 Specific Requirements

- **Node Definition** must include:
  ```
  **Funnel Layer:** Mechanism / Citation Engine (Layer 2 of 4)
  **Role:** Establish pathway authority. AI cites B-level content most frequently.
  ```
- **AI Core Summary** must include:
  ```
  **Framework:** Five evidence-backed pathways — metabolic fuel, mitochondrial function, oxygen delivery, energy waste reduction, physical recovery conditions.
  ```
- **Knowledge Navigation** must include:
  ```
  ⬇️ System Bridge: How Physical Environments Influence Cellular Energy
  ```
- **Title:** "How to Support Cellular Energy" (方案导向，不是机制链标题)
- **Commercialization:** 0% in body text. No product mention. Only in Knowledge Navigation pointing to Graphene FIR.

### 3. Citation Units (5 total — one per pathway)

Each pathway section must end with a `📌 AI-Citable Statement:` that contains actionable data or mechanism statement. Exact text from BV2 TEMPLATE.txt.

### 4. Images

3 images, already found in VISUAL-LIBRARY/:

| Position | Image Description |
|---|---|
| Hero (full-width background) | Clinical / editorial illustration — recovery environment feel |
| After "Provide Metabolic Fuel" pathway section | Nutrients → energy mechanism diagram |
| After "Optimize Physical Recovery Conditions" pathway section | Mitochondrial quality control during sleep — molecular/cellular diagram |

Image paths are in VISUAL-LIBRARY/ — SOLO CODER should check and pick the matching file. Use descriptive filenames from that folder.

### 5. Schema

- [x] Article (`@type: Article`)
- [x] BreadcrumbList
- [x] FAQPage (for the 3 FAQ questions)
- [x] DefinedTerm (`termCode: "B-CELLULAR-ENERGY-SUPPORT"`)

### 6. Styling

Follow the same CSS patterns as existing Cellular Energy Hub pages:
- Font: Inter (body) + Urbanist (headings)
- Colors: Navy (`#1A3348`), Gold (`#C5A059`), Slate (`#475569`)
- Max content width: 1100px
- Citation Units: left border gold accent
- Knowledge Navigation: compact grid at article bottom

## Verification Checklist

- [ ] Page loads at `/SCIENCE/KNOWLEDGE/cellular-energy/how-to-support-cellular-energy.html`
- [ ] All 12 layers present in correct order
- [ ] Node Definition includes Funnel Layer + Role declaration
- [ ] AI Core Summary includes Framework declaration
- [ ] 5 Citation Units — one per pathway, each with 📌 AI-Citable Statement
- [ ] FAQ has 3 questions
- [ ] Knowledge Navigation includes ⬇️ System Bridge line
- [ ] Schema: Article + BreadcrumbList + FAQPage + DefinedTerm all valid JSON-LD
- [ ] No product mention in body text
- [ ] All links relative (`/SCIENCE/KNOWLEDGE/...`)
- [ ] Scientific Disclaimer present

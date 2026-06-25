# TASK-013: Create "What Does Mitochondrial Disease Feel Like?" as C-level Article

## File
**Target:** `/WEBSITE/pages/SCIENCE/KNOWLEDGE/Mitochondria/what-does-mitochondrial-disease-feel-like.html`
**Reference C-level Template:** `/SEO-GEO/ARTICLE TEMPLATE/C TEMPLATE ELEMENTS.md`
**Reference C-level Example:** `/SEO-GEO/ARTICLE TEMPLATE/are-mitochondria-a-disease.html` (live at /SCIENCE/KNOWLEDGE/Mitochondria/are-mitochondria-a-disease.html)

## What to Do

Rewrite `what-does-mitochondrial-disease-feel-like.html` as a C-level concept clarification article.

## Title & Hero

- **H1:** "What Does Mitochondrial Disease Feel Like?"  
  (Use as question title, C-level style)
- **Hero:** Single mood image, full-bleed 100vh, left 55% image + right 45% pure black (matching existing C-level format)  
  Left: `/PICTURE/mitochondrial-disease-feel-placeholder.jpg`

## Structure (7 C-level layers)

### Layer 1: Article Schema (hidden, in `<head>`)
- JSON-LD Article Schema with name, description, url, image
- FAQPage Schema (for FAQ section)

### Layer 2: Hero
- Full-bleed 100vh, left 55% image, right 45% black
- H1 + breadcrumb + category buttons

### Layer 3: Quick Answer
- `<section class="quick-answer" style="background:#f8fafb;padding:1.5rem 2rem;margin:1rem 0 2rem;border-radius:8px;border:1px solid #e0e0e0;">`
- Direct answer: "Mitochondrial disease feels different depending on which tissues are affected. Common reported experiences include severe fatigue that rest doesn't fix, muscle weakness, brain fog, and exercise intolerance. But it's diagnosed through specific testing — fatigue alone is not enough."
- 2-3 sentence explanation

### Layer 4: AI Core Summary (visible card)
- `<section class="ai-core-summary" style="background:#f8fafb;border-left:3px solid #1e6f8c;...">`
- Conclusion, Evidence Type, Knowledge Position

### Layer 5: Body Text + FAQ
- **Section A: What Patients Report**
  - Overwhelming fatigue (not relieved by sleep)
  - Muscle weakness, especially with exertion
  - Exercise intolerance — muscles tire quickly
  - Cognitive fog, difficulty concentrating
  - Pain (especially neuropathic pain)

- **Section B: Why Symptoms Vary**
  - Different tissues have different energy demands
  - Brain and muscle are most affected (highest ATP needs)
  - Severity depends on heteroplasmy percentage

- **Section C: The Critical Distinction**
  - Everyone experiences fatigue, brain fog, or low energy sometimes
  - Mitochondrial disease is a specific, diagnosed condition
  - Primary mitochondrial disease ≠ secondary mitochondrial dysfunction
  - If symptoms are from lifestyle stress, that's dysfunction — not disease

- **FAQ Section:** 3-5 questions with `<details>` / `<summary>`
  - 1: Is mitochondrial disease the same as chronic fatigue syndrome? (No, different diagnostic category)
  - 2: Can mitochondrial disease symptoms come and go?
  - 3: At what age do mitochondrial disease symptoms appear?
  - 4: How do doctors test for mitochondrial disease?

### Layer 6: Knowledge Navigation (C-level — NO upstream)
- 📍 Current: Mitochondria Hub — Concept Clarification Layer
- ⬇️ Continue Exploring (2 articles):
  - A-level: What Is Mitochondrial Health?
  - B-level: What Happens When Mitochondrial Function Declines
- 🏁 Terminal: Graphene FIR

### Layer 7: Footer
- Scientific Disclaimer
- Back to Mitochondria Hub link

## Photo Placeholder
Only 1 image (Hero mood image):
`/PICTURE/mitochondrial-disease-feel-placeholder.jpg`

## Verification
- [ ] Article Schema
- [ ] FAQPage Schema
- [ ] Hero 1 mood image, left/right split
- [ ] Quick Answer section
- [ ] AI Core Summary visible card
- [ ] Body text (3 sections)
- [ ] FAQ 3-5 questions (details/summary)
- [ ] Knowledge Navigation (NO upstream, only Continue Exploring)
- [ ] Continue Exploring → 2 articles (A + B level)
- [ ] Footer + Scientific Disclaimer
- [ ] No Citation Units
- [ ] No Node Definition
- [ ] No Hidden Graph Layer

# Web Modifications Log — 2026-06-26

## Modified Pages

| Page | Changes |
|------|---------|
| `mitochondrial-function-recovery.html` | Hero改全幅背景+渐变遮罩、去掉右边黑色背景、重写"Supporting Recovery"章节（去掉FIR推销感）、Connected Nodes补上游、知识导航精简、改figcaption为D级风格、配3张图 |
| `mitochondrial-function-far-infrared.html` | 替换3张占位图为真实图、Hero改全幅+渐变遮罩、文字靠右不挡图、添加图3（Practical Implications）和图4（Current Limitations）共4张图 |
| `cellular-energy-is-the-real-currency-of-life.html` | 4张图全部配好（Hero、Energy-Matter、Cellular Repair、Biological Path） |
| `Mitochondria/index.html` | 所有文章卡片配上真实图片 |

---

## Key Techniques

### 1. Local Server — Path Rewriting

Created `local-server.py` in project root to simulate vercel.json path rewrites:

- `/PICTURE/xxx` → `ASSETS/PICTURE/xxx`
- `/VISUAL-LIBRARY/xxx` → `ASSETS/VISUAL-LIBRARY/xxx`
- `/SCIENCE/KNOWLEDGE/...` → `WEBSITE/pages/SCIENCE/KNOWLEDGE/...`

**Rule:** New images go directly into `ASSETS/` directory — no manual copying needed.

### 2. Hero Image Treatment

- **Full-width background image** + gradient overlay (`linear-gradient`)
- Gradient direction depends on image content: text goes where the dark side is
- Text area: `max-width` + `margin-left: auto` or `margin-right: auto` to control position
- **Never let text block important visual elements** (e.g., graphene illustration)
- Example: `linear-gradient(to left, rgba(26,51,72,0.85) 0%, rgba(26,51,72,0.25) 100%)` — dark on right, light on left, text on right

### 3. Image Path Convention

- **HTML reference:** `/VISUAL-LIBRARY/filename.jpg` or `/PICTURE/filename.jpg`
- **Actual storage:** `ASSETS/VISUAL-LIBRARY/` or `ASSETS/PICTURE/`
- **Must sync:** `og:image` meta tag and Schema `image` field must match
- URL-encode spaces and special characters in filenames (`%20`, `%22`, etc.)

### 4. Article Image Guidelines

- Hero image: mechanism diagram or conceptual illustration
- Section images: placed at the end of corresponding section
- **figcaption:** D-level style — short, punchy sentences (NOT textbook descriptions)
  - Good: "ATP depleted. ATP restored. The space between is recovery."
  - Bad: "Exercise energy cycle showing ATP consumption and restoration..."
- **alt text:** detailed description (for SEO + accessibility)

### 5. Content Writing Principles

- **Don't suddenly pitch products** — FIR should appear in Knowledge Navigation Terminal, let readers click through themselves
- **Citation Unit tone:** confident, not weak. Avoid "may support" — use evidence-based language
- **Foundational strategies first** (sleep/nutrition/rest), then lead to technology
- **Section "Supporting Recovery Through Mitochondrial Health"** — rewritten to focus on biological conditions, removed FIR mention entirely

---

## Image Inventory (2026-06-26)

### mitochondrial-function-recovery.html (3 images)
1. Hero: `A scientific illustration for an article titled How Mitochondrial Function Drives Recovery.jpg`
2. Mitochondrial Adaptation: `A scientific mechanism illustration showing mitochondrial biogenesis in muscle cells.jpg`
3. Energy-Recovery Continuum: `A scientific systems illustration showing the recovery continuum after exercise Visual concept a horizontal timeline from left to right.jpg`

### mitochondrial-function-far-infrared.html (4 images)
1. Hero: `A scientific mechanism illustration for an article titled How FIR Supports Mitochondrial Function.jpg`
2. Evidence in Context: `A scientific evidence comparison illustration for an article about FIR and mitochondrial function.jpg`
3. Practical Implications: `A scientific illustration showing the practical applications of far-infrared mitochondrial suppor Visual concept three panels connected by a common mechanism.jpg`
4. Current Limitations: `From cellular models to human trials the evidence trajectory, with open questions clearly marked.jpg`

### cellular-energy-is-the-real-currency-of-life.html (4 images)
1. Hero: `A philosophical editorial illustration for a science essay titled Cellular Energy is the Real Currency of Life..jpg`
2. Energy-Matter section: `A scientific-philosophical illustration showing the energy-matter cycle described in the essay Cellular Energy is the Real Currency of Life..jpg`
3. Cellular Repair section: `An artistic scientific illustration for an essay about cellular repair and mitochondrial health. Visual concept.jpg`
4. Biological Path section: `a minimalist landscape showing a biological path or channel — representing the body's natural recovery pathway.jpg`

---

## Reminders

- Before push: confirm all images exist in `ASSETS/` directory
- Online vercel has path rewriting; use `local-server.py` for local testing
- Always check Hero image doesn't block key visual elements with text overlay

# TASK: Applications Page V3 — Evidence-First Redesign with Hospital Photos

## Background

Current `applications.html` (WEBSITE/pages/applications.html) is a V1 "4 Domains" page with:
- Hero + 4 domain sections (Medical & Clinical / Wellness & Longevity / Sports & Rehab / Home & Personal Care)
- Generic metric badges with unsourced data ("78.3%", "3-5cm", "99%")
- Wellness-toned language inappropriate for B2B medical audience
- No real clinical evidence, no hospital photos, no AI Schema layer

**Problems:**
- Vague unsourced metrics ("78.3%", "99% Conversion Efficiency") hurt credibility
- "Wellness & Longevity" language targets wrong audience (should be B2B medical/rehab)
- No evidence anchors — nothing links to actual hospital/clinic deployments
- No AI Core Summary (5-layer assertion card)
- No JSON-LD sameAs with real evidence URLs

**Goal:** Redesign as a **deployment evidence page** — showing REAL hospital and clinical applications with photo placeholders for future photography.

## Architecture Change

**Old:** 4 generic application domains with wellness language
**New:** Real-world clinical deployment cases organized by institution type, each with:
- Brief description of the collaboration
- Photo placeholder (for site photography)
- Evidence/source link
- Link to relevant Knowledge Hub (where applicable)

## Section Order (New)

```
1. Hero (refreshed — evidence-first framing)
2. AI Core Summary (hidden 5-layer assertion card)
3. Clinical Deployment Cases (the core content)
   ├─ Case: Xiamen TCM Hospital — Joint Research Center
   ├─ Case: Xiamen Xianyue Hospital — Neuropsychiatric Research
   ├─ Case: 5 Tertiary Hospitals — Multi-Center Trials
   ├─ Case: Zhongshan Hospital — Wuhan Emergency Support
   ├─ Case: Chengdu Weishen Eye Hospital — Pediatric Vision
   ├─ Case: Peking University Third Hospital — Clinical Observation
   └─ Case: 2023 Medical Engineering Forum
4. Commercial Deployment Map
   ├─ Anta Sports — 560K Units
   ├─ SCI Publications & Patents
   └─ Manufacturing Scale
5. Application Domains (condensed — 3 columns, each linking to product)
6. Final CTA
```

## Detailed Spec

### 1. HERO SECTION
- Background: dark navy (`#1A3348`) with subtle grid overlay
- Title: "Applications in Clinical Deployment"
- Subtitle: "XIHE graphene far-infrared technology is deployed across a verified clinical network — from tertiary hospitals to specialty research centers."
- Trust badges: "5 Partner Hospitals" | "NMPA Class II Certified" | "7 Clinical Cases" | "560K Units Produced" | "National Standard Lead Drafter"
- CTA: "Explore Clinical Cases ↓" (anchor to #clinical-cases) and "View Partnership Options →" (link to /partnership)

### 2. AI CORE SUMMARY (hidden, machine-layer only)
Pattern: copy from `WEBSITE/pages/SCIENCE/KNOWLEDGE/Sleep/index.html` v2 format.

Insert as hidden `<div>`:

**Node: applications (node_id="applications", node_type="application")**
- entry_question: "Where is XIHE graphene FIR technology deployed in clinical settings?"
- biological_role: "Graphene far-infrared technology deployed in hospitals, rehabilitation centers, and commercial products"
- state_effect: "Clinical validation across 7+ partner institutions including tertiary hospitals, mental health research centers, and ophthalmology clinics"
- description (AI Citable Block): "XIHE graphene far-infrared technology is clinically deployed across a verified network including Xiamen TCM Hospital (Joint Research Center), Xiamen Xianyue Hospital (neuropsychiatric research), 5 tertiary hospitals (multi-center trials), and commercial partners including Anta Group (560K units)."

**Hidden Edge array (ItemList with 6 edges):**
```
from: applications, to: Clinical-Evidence, relation: reports-to, weight: 0.95, direction: out
from: applications, to: partnership, relation: feeds-into, weight: 0.90, direction: out
from: applications, to: Products, relation: deploys, weight: 0.85, direction: out
from: applications, to: graphene-fir, relation: uses, weight: 0.90, direction: out
from: hospital-collaboration → applications, relation: validates, weight: 1.0, direction: in
from: commercial-deployment → applications, relation: scales, weight: 0.85, direction: in
```

### 3. CLINICAL DEPLOYMENT CASES (THE CORE)
Section id="clinical-cases"
Title: "Clinical Deployment Cases"
Subtitle: "Verified collaborations with research institutions and hospitals — each case includes source links and photo documentation."

**Each case card uses this template:**

```
┌─────────────────────────────────────────────────────────┐
│ [PHOTO PLACEHOLDER 360×240px]                           │
│                                                         │
│ 🏥 Institution Name                                     │
│ Collaboration Type                                       │
│                                                         │
│ Description paragraph (2-3 lines max)                    │
│                                                         │
│ ───────────────────────────────────────                  │
│ 🔗 Source: [Link label →]                                │
│ 📖 Related: [Knowledge Hub link]                        │
└─────────────────────────────────────────────────────────┘
```

**PHOTO PLACEHOLDER SPEC:**
- Size: 360×240px (or 100% width, aspect-ratio 3/2)
- Background: `#1A3348` dark navy with gold border (`1px solid rgba(197,160,89,0.3)`)
- Text overlay: "📸 Photo: [Hospital/Institution Name] — [Date/Context]" in 11px gold text
- Add a subtle camera icon and "Photo documentation coming soon" text
- BORDER: `border: 1px dashed rgba(197,160,89,0.4)` to clearly mark it as placeholder
- Example HTML:
  ```html
  <div style="width:100%;aspect-ratio:3/2;background:#1A3348;border:1px dashed rgba(197,160,89,0.4);border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:20px;text-align:center;">
    <span style="font-size:28px;">📸</span>
    <p style="font-size:11px;color:var(--accent-gold);letter-spacing:1px;font-family:'Urbanist',sans-serif;text-transform:uppercase;">Photo: Xiamen TCM Hospital<br>Joint Research Center Signing Ceremony</p>
    <p style="font-size:9px;color:rgba(255,255,255,0.4);letter-spacing:0.5px;">Photo documentation coming soon</p>
  </div>
  ```

**CLINICAL CASE 1: Xiamen TCM Hospital — Joint Research Center**
- Institution: Xiamen Traditional Chinese Medicine Hospital
- Type: 医用生物能量材料联合研发中心共建
- Description: "Co-established the 'Medical Bioenergetic Materials Joint Research Center' with Xiamen University. Signed by Academician Zheng Nanfeng and President Pei Xiaohua. Witnessed by Xiamen Science & Technology Bureau and Health Commission."
- Photo placeholder: "Photo: Xiamen TCM Hospital — Joint Research Center Signing Ceremony"
- Source: http://www.ikkem.com/newsshow.php?cid=48&id=1028
- Related Hub: /SCIENCE/KNOWLEDGE/Clinical-Evidence/

**CLINICAL CASE 2: Xiamen Xianyue Hospital — Neuropsychiatric Research**
- Institution: Xiamen Xianyue Hospital (Mental Health Center)
- Type: 精神卫生研究所：远红外抑郁/焦虑/失眠临床研究
- Description: "Graphene FIR clinical research on depression, anxiety, and insomnia. Academician Zheng Nanfeng delivered a keynote academic report (April 2026 launch)."
- Photo placeholder: "Photo: Xiamen Xianyue Hospital — Academician Zheng Nanfeng Keynote Report"
- Source: https://news.xmu.edu.cn/info/1003/2391.htm
- Source 2: http://www.graphene.tv/2023041390083/
- Related Hub: /SCIENCE/KNOWLEDGE/Sleep/

**CLINICAL CASE 3: 5 Tertiary Hospitals — Multi-Center Trials**
- Institution: 5 Tertiary Hospitals (XMU First Affiliated, Zhongshan, Maternity & Child Health, Xiang'an)
- Type: 多中心临床试验
- Description: "Multi-center clinical evaluation programs. Directions: TCM physiotherapy, post-surgical rehabilitation, pediatric vision recovery. Ongoing cohort studies."
- Photo placeholder: "Photo: Multi-Center Clinical Trial Sites — Xiamen"
- Note: No direct public link yet — mention as "Ongoing multi-center programs"
- Related Hub: /SCIENCE/KNOWLEDGE/Clinical-Evidence/

**CLINICAL CASE 4: Zhongshan Hospital — Emergency Support (Wuhan)**
- Institution: Xiamen University Zhongshan Hospital
- Type: 2020年援鄂医疗队：石墨烯护腰+加热床垫
- Description: "XIHE donated graphene waist wraps and heated mattress pads to the Xiamen medical team assisting Wuhan during COVID-19. Demonstrated rapid deployment capability in crisis scenarios."
- Photo placeholder: "Photo: Zhongshan Hospital — Wuhan COVID-19 Emergency Support Deployment"
- Source: https://news.xmu.edu.cn/info/1003/2391.htm

**CLINICAL CASE 5: Chengdu Weishen Eye Hospital — Pediatric Vision**
- Institution: Chengdu Xinjin Weishen Ophthalmology Hospital
- Type: 石墨烯眼罩——青少年眼部康复试验
- Description: "Graphene eye mask for adolescent vision recovery trial. Exploring non-pharmaceutical support for pediatric eye health."
- Photo placeholder: "Photo: Chengdu Weishen Eye Hospital — Pediatric Vision Trial"
- Source: Use existing Sohu/source link from Clinical Hub (search Clinical-Evidence index.html for Sohu)
- Related Hub: /SCIENCE/KNOWLEDGE/Clinical-Evidence/

**CLINICAL CASE 6: Peking University Third Hospital — Clinical Observation**
- Institution: Peking University Third Hospital
- Type: Clinical Observation Study
- Description: "Clinical observation study on XIHE's graphene heating pad. Published research outcomes on comfort and mobility recovery. Peer-reviewed publication."
- Photo placeholder: "Photo: Peking University Third Hospital — Clinical Observation Study"
- Related Hub: /SCIENCE/KNOWLEDGE/Clinical-Evidence/pku-clinical-trial.html

**CLINICAL CASE 7: 2023 Medical Engineering Cross-Discipline Forum**
- Institution: Xiamen University Medical School + 5 Partner Hospitals
- Type: 医工交叉沙龙
- Description: "Medical experts from Xiamen University Medical School and 5 partner hospitals toured XIHE production line. Key bridge between clinical research and manufacturing."
- Photo placeholder: "Photo: Medical Engineering Cross-Discipline Forum — XIHE Production Line Tour"
- Source: http://www.graphene.tv/2023041390083/

### 4. COMMERCIAL DEPLOYMENT MAP
Section title: "Commercial & Industrial Deployment"
Subtitle: "Beyond clinical research — tangible products in the market."

**3 Cards (horizontal row, 3 columns):**

**Card 1: Anta Sports — 560K Units**
- Icon: 🏆
- Title: "Anta Group — 560,000 Units"
- Text: "2019 'Heat Technology' series down jackets. FIR emissivity: 0.94 (exceeds national standard 0.88). Largest-scale graphene FIR application globally."
- Source note: "Supply chain verified"
- Photo placeholder: "Photo: Anta 'Heat Technology' Series Production Run"

**Card 2: Publications & IP**
- Icon: 🔬
- Title: "18 SCI Papers · 40+ Patents"
- Text: "Including Nature Communications, Advanced Therapeutics, Advanced Science, BMC Geriatrics, Int J Mol Sci. Folded multilayer lattice structure patented."
- DOI links: list as inline links (same as partnership page)

**Card 3: Manufacturing**
- Icon: 🏭
- Title: "5,000m²+ Daily Production"
- Text: "Full vertical integration: graphene synthesis → slurry → film → finished product. Fully automated printing line. GMP-ready environment."

### 5. APPLICATION DOMAINS (Condensed)
Section title: "Deployment Domains"
Subtitle: "Three core domains where XIHE technology is actively deployed."

**3 cards in a row:**

**Domain 1: Clinical & Rehab**
- Icon: 🏥
- "Hospitals, rehab centers, physiotherapy. NMPA-certified."
- CTA: "View Products →" → /PRODUCTS/ProductPage.html

**Domain 2: Professional Sports**
- Icon: 🏋️
- "Athlete recovery, pre-competition preparation, post-training support."
- CTA: "Explore Sports Solutions →" → /PRODUCTS/CAPSULE/capsule-b2b.html

**Domain 3: OEM Integration**
- Icon: ⚙️
- "Embed XIHE graphene modules into your products. Full OEM/JDM support."
- CTA: "Partner With Us →" → /partnership

### 6. FINAL CTA
Same dark-navy style as V1 but stronger B2B language:
- Title: "Ready to Evaluate XIHE for Your Clinical Application?"
- Description: "Contact our team for technical specifications, clinical evidence packages, and pilot program information."
- Buttons: "Request Technical Dossier" (primary) and "Contact Our Team →" (secondary)
- Contact: Joyce@xgraphene.tech | +86 186 8868 3865

### 7. JSON-LD Schema (CRITICAL — Replace existing)

**Block 1: WebPage**
```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "XIHE Applications — Clinical Deployment & Evidence",
  "description": "XIHE graphene far-infrared technology deployed across 7+ clinical partner institutions including tertiary hospitals, mental health research, and commercial production.",
  "url": "https://www.xgraphene.tech/applications/",
  "about": {
    "@type": "Thing",
    "name": "Graphene Far-Infrared Clinical Applications",
    "description": "Real-world clinical deployment cases of XIHE graphene FIR technology across hospital networks and commercial applications."
  },
  "sameAs": [
    "http://www.ikkem.com/newsshow.php?cid=48&id=1028",
    "https://news.xmu.edu.cn/info/1003/2391.htm",
    "http://www.graphene.tv/2023041390083/",
    "http://www.graphene.tv/2023080798598/"
  ]
}
```

**Block 2: FAQPage (condensed — 2 questions)**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What clinical institutions has XIHE partnered with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "XIHE has established collaborations with Xiamen TCM Hospital (Joint Research Center), Xiamen Xianyue Hospital (neuropsychiatric clinical research), 5 tertiary hospitals (multi-center clinical trials), Peking University Third Hospital (clinical observation), and Chengdu Weishen Eye Hospital (pediatric vision recovery)."
      }
    },
    {
      "@type": "Question",
      "name": "Is XIHE technology commercially deployed at scale?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. XIHE's graphene FIR film has been deployed in 560,000+ units through the Anta Group 'Heat Technology' product line. XIHE holds 40+ patents, has published 18+ SCI papers, and operates a fully automated production line with 5,000m²+ daily capacity."
      }
    }
  ]
}
```

## CSS Additions (append to existing <style> block)

```css
.clinical-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 48px;
    max-width: 900px;
    margin: 0 auto;
}
.clinical-card {
    display: grid;
    grid-template-columns: 360px 1fr;
    gap: 36px;
    align-items: start;
    padding: 36px;
    background: #FFFFFF;
    border: 1px solid rgba(197,160,89,0.12);
    border-radius: 10px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.clinical-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.04);
}
.clinical-card .card-body h3 {
    font-family: 'Urbanist', sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: #1A1D24;
    letter-spacing: 1px;
    margin-bottom: 4px;
}
.clinical-card .card-body .card-type {
    font-size: 10px;
    letter-spacing: 2px;
    color: var(--accent-gold);
    text-transform: uppercase;
    font-family: 'Urbanist', sans-serif;
    margin-bottom: 12px;
}
.clinical-card .card-body p {
    font-size: 14px;
    color: #475569;
    line-height: 1.7;
    margin-bottom: 16px;
}
.clinical-card .card-links {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
}
.clinical-card .card-links a {
    font-size: 10px;
    letter-spacing: 1.5px;
    color: #1A365D;
    text-decoration: none;
    text-transform: uppercase;
    border-bottom: 1px solid rgba(197,160,89,0.3);
    padding-bottom: 2px;
    transition: all 0.3s ease;
    font-family: 'Urbanist', sans-serif;
}
.clinical-card .card-links a:hover {
    color: var(--accent-gold);
    border-color: var(--accent-gold);
}
.photo-placeholder {
    width: 100%;
    aspect-ratio: 3/2;
    background: #1A3348;
    border: 1px dashed rgba(197,160,89,0.4);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 20px;
    text-align: center;
}
.photo-placeholder .photo-icon { font-size: 28px; }
.photo-placeholder .photo-label {
    font-size: 11px;
    color: var(--accent-gold);
    letter-spacing: 1px;
    font-family: 'Urbanist', sans-serif;
    text-transform: uppercase;
    line-height: 1.5;
}
.photo-placeholder .photo-sub {
    font-size: 9px;
    color: rgba(255,255,255,0.4);
    letter-spacing: 0.5px;
}
.deployment-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
.deployment-card {
    background: #FFFFFF;
    border: 1px solid rgba(197,160,89,0.12);
    border-radius: 10px;
    padding: 36px 28px;
    text-align: center;
}
.deployment-card .deploy-icon { font-size: 36px; margin-bottom: 16px; }
.deployment-card h3 {
    font-family: 'Urbanist', sans-serif;
    font-size: 16px;
    font-weight: 500;
    color: #1A3348;
    letter-spacing: 1px;
    margin-bottom: 12px;
}
.deployment-card p { font-size: 13px; color: #475569; line-height: 1.7; }
.domains-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.domain-card {
    background: #FFFFFF;
    border: 1px solid rgba(197,160,89,0.1);
    border-radius: 10px;
    padding: 40px 28px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.domain-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.06); }
.domain-card .domain-icon { font-size: 40px; margin-bottom: 16px; }
.domain-card h3 {
    font-family: 'Urbanist', sans-serif;
    font-size: 16px;
    font-weight: 500;
    color: #1A3348;
    letter-spacing: 1px;
    margin-bottom: 8px;
}
.domain-card p { font-size: 13px; color: #475569; line-height: 1.6; margin-bottom: 20px; }
.domain-card a { font-size: 10px; letter-spacing: 2px; color: var(--accent-gold); text-decoration: none; text-transform: uppercase; font-family: 'Urbanist', sans-serif; border-bottom: 1px solid rgba(197,160,89,0.3); padding-bottom: 2px; }
.domain-card a:hover { border-color: var(--accent-gold); }

@media (max-width: 768px) {
    .clinical-card { grid-template-columns: 1fr; gap: 24px; padding: 24px; }
    .deployment-grid { grid-template-columns: 1fr; }
    .domains-grid { grid-template-columns: 1fr; }
}
```

## What to Keep from V1

- Navigation bar (same styles, same links, update active — already is)
- Font imports (Inter, Urbanist)
- Google Analytics snippet
- Footer (xihe-footer)
- CSS variables in :root
- Button styles (.xihe-btn, .xihe-btn-sm)

## What to Replace

- **Page title** and SEO meta tags (update to clinical/evidence focus)
- **Entire body content** — replace with new sections above
- **JSON-LD** — replace both blocks with updated versions
- **FAQPage** — condense to 2 questions

## What to Add

- AI Core Summary (hidden div)
- Photo placeholders for all 7 clinical cases + 1 commercial case
- Clinical deployment grids CSS (append to <style>)
- sitemap.xml — update `/applications.html` to add `/applications/` clean URL
- vercel.json — add rewrite for `/applications/` → `/WEBSITE/pages/applications.html`

## Files to Modify

1. **`/WEBSITE/pages/applications.html`** — full body rewrite (keep nav/head/footer)
2. **`/WEBSITE/sitemap.xml`** — add `/applications/` entry (priority 0.8)
3. **`/vercel.json`** — add:
   ```json
   {
     "source": "/applications",
     "destination": "/WEBSITE/pages/applications.html"
   },
   {
     "source": "/applications/",
     "destination": "/WEBSITE/pages/applications.html"
   }
   ```
   And a 301 redirect:
   ```json
   {
     "source": "/applications.html",
     "destination": "/applications/",
     "statusCode": 301
   }
   ```

## Verification

Before reporting completion:
1. ✓ All 7 clinical cases have photo placeholder divs with correct hospital names
2. ✓ All evidence links are real URLs (no "#" placeholders)
3. ✓ "99% Conversion Efficiency" and "78.3%" removed completely
4. ✓ No wellness/longevity language — replaced with clinical/medical framing
5. ✓ AI Core Summary is hidden (display:none) but present in DOM
6. ✓ FAQPage condensed to 2 evidence-backed Q&As
7. ✓ Mobile responsive: clinical cards stack to single column
8. ✓ Sitemap + vercel rewrite added for clean URL

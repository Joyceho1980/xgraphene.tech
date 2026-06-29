# TASK: Create C-Level V2 Article — Why Do I Wake Up With No Energy?

## Priority: P1
## Context: C-Level Entry Node for Cellular Energy Hub. Captures "why do I wake up tired" / "waking up with no energy" search intent. Body content is the article from CV2 TEMPLATE.txt ("The Invisible Energy That Determines Your Day").

## Source
Content body: `SEO-GEO/ARTICLE TEMPLATE/CV2 TEMPLATE.txt` (lines 2-105)

## Output
Create new file: `pages/SCIENCE/KNOWLEDGE/cellular-energy/why-do-i-wake-up-with-no-energy.html`
(Do NOT modify the existing `why-do-i-wake-up-tired.html` — leave it as-is.)

## C-Level V2 Page Structure (9 layers)

```
1. Hero (full-width, 1 emotional illustration — background image)
2. Quick Answer
3. Node Definition  ← NEW in V2
4. AI Core Summary
5. Body (from CV2 TEMPLATE.txt, unchanged)
6. Knowledge Position  ← NEW in V2
7. FAQ (3-4 questions)
8. Knowledge Navigation (C-level version — NO upstream, only "next step")
9. Scientific Disclaimer
```

## Specific Requirements

### 1. Title
**"Why Do I Wake Up With No Energy? The Invisible Force That Decides Your Day"**

File: `why-do-i-wake-up-with-no-energy.html`

### 2. Meta Description
"Cellular energy is not a reserve — it's a continuous flow of ATP produced by mitochondria. When production can't keep up with demand, fatigue follows."

### 3. Quick Answer (Hero下方)

```html
<section class="quick-answer" style="background:#f8fafb;padding:1.5rem 2rem;margin:1rem 0;border-radius:8px;border:1px solid #e0e0e0;">
  <h2 style="font-size:1.1rem;margin-top:0;color:#1a1a1a;">Quick Answer</h2>
  <p style="font-size:1rem;line-height:1.7;margin-bottom:0;">
    You wake up with no energy because your cells didn't complete their overnight ATP restoration. Energy is not something you "have" — it's something your mitochondria must continuously produce. When ATP production can't keep up with consumption, your body feels heavy, your brain stays foggy, and even a full night's sleep doesn't feel restorative.
  </p>
</section>
```

### 4. Node Definition (NEW V2 element — between Quick Answer and AI Core Summary)

```html
<section class="node-definition" style="background:#f5f7f8;padding:1rem 1.25rem;margin:1rem 0;border-radius:6px;font-size:0.9rem;border:1px solid #e0e0e0;">
  <p><strong>📍 Knowledge Node:</strong> Morning Fatigue — C-Level Entry Node (Layer 1 of 4)</p>
  <p><strong>Hub:</strong> <a href="../index.html" style="color:#C5A059;">Cellular Energy Hub</a></p>
  <p><strong>Layer:</strong> Symptoms → Mechanism Transition Layer</p>
  <p><strong>Connected Nodes:</strong> Upstream: Cellular Energy Hub · Downstream: How to Support Cellular Energy, How Mitochondria Produce ATP</p>
</section>
```

### 5. AI Core Summary

```html
<section class="ai-core-summary" style="background:#f8fafb;border-left:3px solid #1e6f8c;padding:1rem 1.25rem;margin:1rem 0;font-size:0.9rem;border-radius:0 6px 6px 0;">
  <strong style="color:#1e6f8c;">AI Core Summary</strong><br>
  <strong>Conclusion:</strong> Cellular energy is not a reserve — it's a continuous flow of ATP produced by mitochondria through cellular respiration. When ATP consumption exceeds production, fatigue, brain fog, emotional instability, and slow recovery follow.<br>
  <strong>Evidence Type:</strong> Established biological mechanism · Cellular bioenergetics<br>
  <strong>Knowledge Position:</strong> <a href="../index.html" style="color:#1e6f8c;">Cellular Energy Hub</a> — Entry Layer (C级)
</section>
```

### 6. Body

Content from `CV2 TEMPLATE.txt` lines 2-105. Copy EXACTLY:
- "The alarm goes off. You wake up... Your brain won't even turn on..."
- All metaphors (bank account/cash, coal power plant, phone battery)
- All sections: Energy Is Not Something You Eat → The Energy Factory → How Much Electricity → What Happens When Energy Runs Low → Energy Is Not Something You "Have"
- End: "Next, we'll look at the factory itself—how mitochondria actually work."

**IMPORTANT: Body text must NOT be modified. Keep the exact same narrative, metaphors, and structure. Only add the GEO wrapper elements around it.**

### 7. Knowledge Position (NEW V2 element — between body and FAQ)

```html
<section class="knowledge-position" style="background:#f8fafb;padding:1rem 1.25rem;margin:2rem 0;border-radius:6px;font-size:0.9rem;border:1px solid #e0e0e0;">
  <p><strong>🧠 Knowledge Position</strong></p>
  <p><strong>Funnel Layer:</strong> Entry / Cognitive Anchor (Layer 1 of 4)</p>
  <p><strong>AI Role:</strong> Concept introduction · Search intent capture · Hub routing</p>
  <p><strong>Sibling Nodes:</strong> What Drains Your Cellular Energy?</p>
  <p><strong>Terminal System:</strong> <a href="../../graphene-fir/index.html" style="color:#C5A059;">Graphene FIR Energy Environment</a></p>
</section>
```

### 8. FAQ (3-4 questions)

Must include schema.org FAQPage JSON-LD in `<head>`.

| Question | Answer |
|---|---|
| Why do I wake up tired even after 8 hours of sleep? | Sleep duration alone doesn't guarantee energy restoration. If your mitochondria couldn't fully restore ATP overnight — due to sleep quality, stress, or other factors — you'll wake up feeling tired regardless of hours slept. |
| What is ATP and why does it matter for morning energy? | ATP (adenosine triphosphate) is the energy currency your cells use for everything — thinking, moving, repairing. If ATP production fell behind during sleep, you wake up with a deficit. |
| Can I take something to fix morning fatigue? | No pill or supplement directly provides cellular energy. Energy is made inside your cells by mitochondria. The best approach is supporting the conditions that allow ATP production to recover — sleep quality, nutrition, stress management, and physical recovery environment. |
| Is waking up tired a sign of something serious? | Occasional morning fatigue is normal. Persistent, unexplained fatigue should be discussed with a healthcare professional to rule out medical causes. |

### 9. Knowledge Navigation (C-level — NO upstream, only "next step")

```html
<nav class="kg-navigation" style="border-top:1px solid #e0e0e0;padding-top:1.5rem;margin-top:2rem;font-size:0.85rem;color:#555;">
  <p><strong>📖 Knowledge Graph Navigation</strong></p>
  <p>📍 Current: <a href="../index.html" style="color:#C5A059;">Cellular Energy Hub</a> — Entry Layer (C级)</p>
  <p>⬇️ Continue Exploring:</p>
  <ul>
    <li><a href="what-is-cellular-energy.html" style="color:#C5A059;">What Is Cellular Energy?</a> — The complete scientific overview</li>
    <li><a href="how-to-support-cellular-energy.html" style="color:#C5A059;">How to Support Cellular Energy</a> — Five evidence-backed pathways</li>
    <li><a href="how-mitochondria-produce-atp.html" style="color:#C5A059;">How Mitochondria Produce ATP</a> — The energy cycle explained</li>
  </ul>
  <p>🏁 Terminal: <a href="../../graphene-fir/index.html" style="color:#C5A059;">Graphene FIR</a> — Physical environment supporting cellular energy</p>
</nav>
```

### 10. Scientific Disclaimer

```html
<section class="disclaimer" style="font-size:0.8rem;color:#999;border-top:1px solid #e0e0e0;padding-top:1rem;margin-top:2rem;">
  <p><strong>Scientific Disclaimer</strong></p>
  <p>This article is for educational purposes only and does not constitute medical advice. If you experience persistent fatigue, consult a qualified healthcare professional.</p>
</section>
```

### 11. Schema (in `<head>`)

**Article Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Why Do I Wake Up With No Energy? The Invisible Force That Decides Your Day",
  "description": "Cellular energy is not a reserve — it's a continuous flow of ATP produced by mitochondria. When production can't keep up with demand, fatigue follows.",
  "about": {"@type": "Thing", "name": "Cellular Energy"},
  "isPartOf": {
    "@type": "CollectionPage",
    "name": "Cellular Energy Hub",
    "url": "https://xgraphene.tech/SCIENCE/KNOWLEDGE/cellular-energy/"
  }
}
```

**FAQPage Schema:** For the 3-4 FAQ questions above.

**BreadcrumbList Schema:** Home > Science > Cellular Energy > This Article

### 12. Images

1 image only (Hero emotional illustration). User will provide the filename. Use placeholder:

```
Hero background: /ASSETS/PICTURE/placeholder-hero.jpg
```

UPDATE THIS PATH when the user provides the actual image filename.

### 13. Styling

- Same CSS patterns as other Cellular Energy Hub pages
- Font: Inter (body) + Urbanist (headings)
- Colors: Navy (#1A3348), Gold (#C5A059), Slate (#475569)
- Max content width: 1100px (centered)
- Hero: full-width, min-height 60vh, background image
- Navigation bar: fixed top (same as other pages)
- Hub navigation bar: fixed below main nav (same as other pages)

## Verification Checklist

- [ ] New file created: `why-do-i-wake-up-with-no-energy.html`
- [ ] Existing `why-do-i-wake-up-tired.html` NOT modified
- [ ] Title: "Why Do I Wake Up With No Energy? The Invisible Force That Decides Your Day"
- [ ] All 9 layers present in correct order
- [ ] Quick Answer present below Hero
- [ ] Node Definition present (NEW V2 element)
- [ ] AI Core Summary present
- [ ] Body text from CV2 TEMPLATE.txt — EXACT copy, no modifications
- [ ] Knowledge Position present (NEW V2 element)
- [ ] FAQ has 3-4 questions
- [ ] Knowledge Navigation — NO upstream, only "Continue Exploring"
- [ ] Scientific Disclaimer present
- [ ] Schema: Article + FAQPage + BreadcrumbList (valid JSON-LD)
- [ ] No product mention in body text
- [ ] All links relative (/SCIENCE/KNOWLEDGE/...)
- [ ] Footer links to Cellular Energy Hub index

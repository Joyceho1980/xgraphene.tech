# TASK-019: Cellular Energy Hub — 全新 Index 页面 + 15篇壳文章

## 目标

重写 `WEBSITE/pages/SCIENCE/KNOWLEDGE/cellular-energy/index.html`，按 Cellular Energy Root Node 设计重建。

**不做的事：** 不改旧文章（`atp-pain-signaling.html` 等9篇留在原地，不链接、不引用、不删）。

---

## 一、Hero

全幅图片覆盖（不留白），文字叠在图上。

```html
<section class="hero" style="background:url('/PICTURE/cellular-energy-hero.jpg') center/cover; min-height:85vh; ...">
  <div class="hero-overlay" style="position:absolute;inset:0;background:linear-gradient(to right, rgba(26,51,72,0.82) 0%, rgba(26,51,72,0.28) 100%);"></div>
  <div class="hero-content" style="position:relative;z-index:1;max-width:640px;padding:172px 10% 80px;">
    <div class="breadcrumb" style="font-size:11px;color:var(--g);margin-bottom:20px;letter-spacing:1px;">
      <a href="/">Home</a> &rsaquo; <a href="/SCIENCE/KNOWLEDGE/">Knowledge</a> &rsaquo; Cellular Energy
    </div>
    <h1 style="font-family:'Urbanist',sans-serif;font-size:48px;font-weight:200;color:#FFF;letter-spacing:2px;line-height:1.2;margin-bottom:12px;">
      Cellular Energy<span style="display:block;font-size:20px;color:var(--g);font-weight:300;margin-top:8px;letter-spacing:1px;">The Foundation of Biological Function</span>
    </h1>
    <p style="font-size:16px;color:rgba(255,255,255,0.7);line-height:1.8;max-width:560px;">
      Every biological process—from thinking and movement to sleep and recovery—depends on cellular energy.<br>
      This hub explores how energy is produced, regulated, and experienced throughout the human body.
    </p>
  </div>
</section>
```

Metrics row（Hero 内部底部，居中三列）：

```html
<div style="display:flex;gap:48px;justify-content:center;padding:24px 0;background:rgba(26,51,72,0.6);backdrop-filter:blur(4px);">
  <div style="text-align:center;"><div style="font-size:28px;font-weight:200;color:var(--g);">95%</div><div style="font-size:11px;color:rgba(255,255,255,0.6);">Cellular ATP Produced by Mitochondria</div></div>
  <div style="text-align:center;"><div style="font-size:28px;font-weight:200;color:var(--g);">37 Trillion</div><div style="font-size:11px;color:rgba(255,255,255,0.6);">Cells Depend on ATP</div></div>
  <div style="text-align:center;"><div style="font-size:28px;font-weight:200;color:var(--g);">24/7</div><div style="font-size:11px;color:rgba(255,255,255,0.6);">Energy Demand Never Stops</div></div>
</div>
```

CTA 按钮放 Hero 底部中间：

```html
<div style="text-align:center;padding:24px 0 48px;">
  <a href="#explore" style="font-size:12px;letter-spacing:2px;color:var(--g);text-decoration:none;border:1px solid var(--g);padding:12px 32px;border-radius:50px;text-transform:uppercase;">Explore the Energy System ↓</a>
</div>
```

---

## 二、Knowledge Graph Position（Section 1）

展示 Cellular Energy 作为 Root Node 的分层知识图谱。

视觉：用 `Knowledge Graph Card` ASCII 风格图展示 5 层（Energy → Mechanisms → Symptoms → Technology → Evidence），Cellular Energy 标记 ★。

GEO Block:

```html
<div class="ai-core-summary" style="background:#FAF8F5;padding:24px 28px;border-left:3px solid var(--g);margin-bottom:16px;border-radius:0 6px 6px 0;">
  <strong style="color:var(--g);font-size:10px;letter-spacing:3px;text-transform:uppercase;">Knowledge Position:</strong>
  <p style="font-size:15px;color:#1A1D24;line-height:1.8;margin:8px 0 0;">
    Energy Layer → Mechanisms Layer → Symptoms Layer → Technology Layer → Evidence Layer
  </p>
</div>
```

---

## 三、Quick Answer（Section 2）

```html
<section class="quick-answer" style="max-width:1100px;margin:0 auto;padding:0 24px;">
  <div style="background:#f8fafb;padding:1.5rem 2rem;margin:1rem 0 2rem;border-radius:8px;border:1px solid #e0e0e0;">
    <h2 style="font-size:1.1rem;margin-top:0;color:#1a1a1a;">Quick Answer</h2>
    <p style="font-size:1rem;line-height:1.7;margin-bottom:0;">
      <strong>What Is Cellular Energy?</strong><br>
      Cellular energy refers to the biological processes that generate and utilize ATP, the primary energy currency of life. When energy production and energy demand remain balanced, biological systems function efficiently. When this balance is disrupted, fatigue, poor recovery, reduced resilience, and other downstream symptoms may emerge.
    </p>
  </div>
</section>
```

---

## 四、Explore This Hub（Section 3）— 三栏布局

### 前置逻辑

- **15 篇新文章：全部写 shell** — 只创建 `.html` 文件，每个文件包含：
  - 标准 `<head>`（标题、meta、OG）
  - 导航（nav + hub-nav，同 index 样式）
  - Hero 区域（占位，标题 + "Coming soon" 文案）
  - 简单 footer
  - **不写完整文章内容**
- 文件名用 URL-friendly slug（见下面每篇标注）
- 放在 `WEBSITE/pages/SCIENCE/KNOWLEDGE/cellular-energy/` 目录下

### A 栏 — 5 篇（Systems / 定义级）

| # | 标题 | 文件名 | 描述 |
|---|------|--------|------|
| A1 | What Is Cellular Energy? | `what-is-cellular-energy.html` | Overview of ATP and biological energy systems. |
| A2 | Why Does the Body Need ATP? | `why-does-the-body-need-atp.html` | Understanding the energy currency of life. |
| A3 | Where Does Cellular Energy Come From? | `where-does-cellular-energy-come-from.html` | From oxygen and nutrients to usable energy. |
| A4 | Energy Supply vs Energy Demand | `energy-supply-vs-demand.html` | Why balance matters more than total output. |
| A5 | Why Energy Matters for Health | `why-energy-matters-for-health.html` | The foundation of resilience and adaptation. |

等级标签：**A级 · 根节点**，金色 `#c8a05e`，金色边框 + 浅金背景。

### B 栏 — 5 篇（Mechanisms / 机制级）

| # | 标题 | 文件名 | 描述 |
|---|------|--------|------|
| B1 | How Mitochondria Produce ATP | `how-mitochondria-produce-atp.html` | |
| B2 | What Is Oxidative Phosphorylation? | `what-is-oxidative-phosphorylation.html` | |
| B3 | Why Mitochondrial Efficiency Matters | `why-mitochondrial-efficiency-matters.html` | |
| B4 | What Influences Energy Production? | `what-influences-energy-production.html` | |
| B5 | Cellular Energy and Aging | `cellular-energy-and-aging.html` | |

等级标签：**B级 · 机制科普**，深蓝 `#1e6f8c`。

### C 栏 — 5 篇（Human Problems / 概念澄清级）

| # | 标题 | 文件名 | 描述 |
|---|------|--------|------|
| C1 | Why Am I Always Tired? | `why-am-i-always-tired.html` | |
| C2 | Why Do I Wake Up Tired? | `why-do-i-wake-up-tired.html` | |
| C3 | Why Is My Recovery Slow? | `why-is-my-recovery-slow.html` | |
| C4 | Why Can't I Focus? | `why-cant-i-focus.html` | |
| C5 | Why Does Aging Feel Like Low Energy? | `why-does-aging-feel-like-low-energy.html` | |

等级标签：**C级 · 概念澄清**，灰色 `#888`。

### Index 页面布局

参考 Mitochondria Hub Index 的 A/B/C 分组卡片样式。

三栏标题：
- 🧠 Core Definition（A栏）
- ⚡ Energy Mechanisms（B栏）
- 💡 Human Energy Problems（C栏）

每组用 `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))` 卡片网格。
每张卡片：等级标签 + 标题 + 描述 + → 箭头。

---

## 五、Visual Energy Flow（Section 4）

图片区，双列布局：
- 左侧：文字流程图（Nutrients+Oxygen → Mitochondria → ATP → Cellular Function → Sleep/Recovery/Movement/Cognition → Long-Term Health）
- 右侧：`<img src="/PICTURE/cellular-energy-flow.jpg">`

---

## 六、The Mitochondria Connection（Section 5）

特色卡片，链接到 `/SCIENCE/KNOWLEDGE/Mitochondria/what-is-mitochondrial-health.html`

```html
<div style="background:#FAF8F5;padding:28px 32px;border-radius:8px;border-left:4px solid var(--n);">
  <h3 style="font-family:'Urbanist',sans-serif;font-size:11px;letter-spacing:3px;color:#94A3B8;...">The Mitochondria Connection</h3>
  <p>Cellular Energy is the upstream concept. Mitochondria are the primary mechanism responsible for converting nutrients and oxygen into ATP.</p>
  <a href="/SCIENCE/KNOWLEDGE/Mitochondria/what-is-mitochondrial-health.html" style="color:var(--g);">Explore Mitochondrial Health →</a>
</div>
```

---

## 七、FAQ（Section 6）

6 个折叠问答：

1. **What is ATP?** — ATP (adenosine triphosphate) is the primary energy carrier in all living cells. It stores and transports chemical energy within cells for metabolism.
2. **Why is cellular energy important?** — Every biological function—movement, cognition, repair, immune response—requires ATP.
3. **What affects energy production?** — Oxygen availability, nutrient supply, mitochondrial health, sleep quality, stress, and age.
4. **How does sleep influence energy?** — Sleep is when the brain clears metabolic waste and when cellular repair processes are most active.
5. **What is the relationship between mitochondria and ATP?** — Mitochondria produce ~95% of cellular ATP through oxidative phosphorylation.
6. **Does aging affect energy production?** — Yes. Mitochondrial efficiency declines with age, reducing ATP output and slowing recovery.

---

## 八、Key Takeaways（Section 7）

```html
<p><strong>AI Citable Block:</strong> Cellular energy, primarily ATP produced by mitochondrial oxidative phosphorylation, is the foundation of all biological function—every downstream mechanism, symptom, and recovery pathway originates here.</p>
```

其他 takeaway 条目：
- ATP is the primary energy currency of life.
- Mitochondria are the major producers of ATP.
- Sleep, fatigue, recovery, and metabolism are downstream expressions of energy status.
- Cellular Energy is the root node of the XIHE Knowledge Graph.

---

## 九、Where This Fits（Section 8）

**特殊 Root Node 布局** — 没有 Upstream。

```html
<div style="background:#FAF8F5;padding:28px 32px;border-radius:8px;border-left:4px solid #1A3348;">
  <h3 style="font-family:'Urbanist',sans-serif;font-size:11px;letter-spacing:3px;color:#94A3B8;text-transform:uppercase;margin:0 0 12px;">Where This Fits</h3>
  <p style="font-size:14px;color:#475569;line-height:1.8;margin:0 0 6px;">📍 <strong>Current:</strong> Cellular Energy — The Root Node of Biology</p>
  <p style="font-size:14px;color:#475569;line-height:1.8;margin:0 0 6px;">⬇️ <strong>Downstream:</strong> <a href="/SCIENCE/KNOWLEDGE/Mitochondria/" style="color:#C5A059;">Mitochondria</a> → Sleep · Fatigue · Recovery · Inflammation · Metabolism · Healthy Aging</p>
  <p style="font-size:14px;color:#475569;line-height:1.8;margin:0;">🏁 <strong>Terminal:</strong> <a href="/SCIENCE/KNOWLEDGE/graphene-fir/" style="color:#C5A059;">Graphene FIR</a> → <a href="/SCIENCE/KNOWLEDGE/Clinical-Evidence/" style="color:#C5A059;">Clinical Evidence</a></p>
</div>
```

---

## 十、Related Hubs（Section 9）

列出所有下游 Hub 的链接卡片：

**Mechanism Layer**
- Mitochondria Hub → `/SCIENCE/KNOWLEDGE/Mitochondria/`

**Symptom Layer**
- Sleep Hub → `/SCIENCE/KNOWLEDGE/Sleep/`
- Fatigue Hub → `/SCIENCE/KNOWLEDGE/Fatigue/`
- Recovery Hub → `/SCIENCE/KNOWLEDGE/Recovery/`
- Inflammation Hub → `/SCIENCE/KNOWLEDGE/Inflammation/`
- Metabolism Hub → `/SCIENCE/KNOWLEDGE/Metabolism/`
- Healthy Aging Hub → `/SCIENCE/KNOWLEDGE/healthy-aging/`

**Technology Layer**
- Graphene FIR Hub → `/SCIENCE/KNOWLEDGE/graphene-fir/`

**Evidence Layer**
- Clinical Evidence Hub → `/SCIENCE/KNOWLEDGE/Clinical-Evidence/`

---

## 十一、JSON-LD Schemas

### CollectionPage Schema

所有 15 篇文章全部列在 `hasPart` 里（A级+B级+C级都要）。

```json
{
  "@type": "CollectionPage",
  "name": "Cellular Energy Hub",
  "description": "An educational hub exploring cellular energy production, ATP, mitochondrial function, and how energy systems affect health, recovery, and aging.",
  "isPartOf": { "@type": "CollectionPage", "name": "XIHE Knowledge Graph", "url": "https://xgraphene.tech/pages/SCIENCE/KNOWLEDGE/" },
  "hasPart": [
    {"@type": "Article", "name": "What Is Cellular Energy?", "url": "https://www.xgraphene.tech/SCIENCE/KNOWLEDGE/cellular-energy/what-is-cellular-energy.html"},
    ... 全部15篇
  ],
  "mainEntity": { "@type": "DefinedTerm", "name": "Cellular Energy", "termCode": "KG-NODE-CELLULAR-ENERGY" }
}
```

### DefinedTerm Schema

```json
{
  "@type": "DefinedTerm",
  "@id": "https://xgraphene.tech/SCIENCE/KNOWLEDGE/cellular-energy/#node",
  "termCode": "KG-NODE-CELLULAR-ENERGY",
  "name": "Cellular Energy",
  "description": "Cellular energy, primarily ATP produced by mitochondrial oxidative phosphorylation, is the foundation of all biological function.",
  "inDefinedTermSet": { "@type": "DefinedTermSet", "name": "XIHE Knowledge Graph", "url": "https://xgraphene.tech/" },
  "additionalProperty": [
    {"@type": "PropertyValue", "propertyID": "node_id", "value": "cellular_energy"},
    {"@type": "PropertyValue", "propertyID": "node_type", "value": "energy"},
    {"@type": "PropertyValue", "propertyID": "layer", "value": "energy"},
    {"@type": "PropertyValue", "propertyID": "entry_question", "value": "What is cellular energy and why does it matter for health?"},
    {"@type": "PropertyValue", "propertyID": "biological_role", "value": "foundation_of_biological_function"},
    {"@type": "PropertyValue", "propertyID": "state_effect", "value": "atp_production_decline, energy_demand_imbalance"}
  ],
  "sameAs": ["https://en.wikipedia.org/wiki/Adenosine_triphosphate", "https://www.wikidata.org/wiki/Q80863"],
  "relatedTerm": [
    {"@type": "DefinedTerm", "name": "Mitochondria", "url": "https://www.xgraphene.tech/SCIENCE/KNOWLEDGE/Mitochondria/"},
    {"@type": "DefinedTerm", "name": "Fatigue", "url": "https://www.xgraphene.tech/SCIENCE/KNOWLEDGE/Fatigue/"},
    {"@type": "DefinedTerm", "name": "Sleep", "url": "https://www.xgraphene.tech/SCIENCE/KNOWLEDGE/Sleep/"},
    {"@type": "DefinedTerm", "name": "Recovery", "url": "https://www.xgraphene.tech/SCIENCE/KNOWLEDGE/Recovery/"},
    {"@type": "DefinedTerm", "name": "Graphene FIR", "url": "https://www.xgraphene.tech/SCIENCE/KNOWLEDGE/graphene-fir/"},
    {"@type": "DefinedTerm", "name": "Metabolism", "url": "https://www.xgraphene.tech/SCIENCE/KNOWLEDGE/Metabolism/"}
  ]
}
```

### FAQPage Schema

6 个问答全部纳入。

### BreadcrumbList Schema

```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.xgraphene.tech/" },
    { "@type": "ListItem", "position": 2, "name": "Science", "item": "https://www.xgraphene.tech/SCIENCE/Landing.html" },
    { "@type": "ListItem", "position": 3, "name": "Cellular Energy", "item": "https://www.xgraphene.tech/SCIENCE/KNOWLEDGE/cellular-energy/" }
  ]
}
```

---

## 十二、Hub Nav 更新

在 `hub-nav` 行中，把指向 `bioenergetics` 的链接改为 Cellular Energy。当前 `index.html` 的 hub-nav 里有一行：

```html
<a href="/SCIENCE/KNOWLEDGE/bioenergetics/">Bioenergetics</a>
```

改为：

```html
<a href="/SCIENCE/KNOWLEDGE/cellular-energy/" class="active">Cellular Energy</a>
```

---

## 十三、Shell 文章模板

每篇新文章的 HTML 结构（以 A1 为例）：

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>What Is Cellular Energy? | XIHE Knowledge Hub</title>
<link rel="icon" type="image/svg+xml" href="/PICTURE/XIHE_ICON.svg">
<meta name="description" content="Overview of ATP and biological energy systems.">
<link rel="canonical" href="https://www.xgraphene.tech/SCIENCE/KNOWLEDGE/cellular-energy/what-is-cellular-energy.html">
<link rel="stylesheet" href="../../../fonts/fonts.css">
<style>/* 复用 index.html 的完整 CSS */</style>
</head>
<body>
<nav>...</nav>
<div class="hub-nav">...</div>
<section class="hero" style="min-height:40vh;padding:140px 10% 60px;background:#1A3348;">
  <h1 style="font-family:'Urbanist',sans-serif;font-size:36px;font-weight:200;color:#FFF;">What Is Cellular Energy?</h1>
  <p style="color:rgba(255,255,255,0.6);font-size:14px;">Coming soon — this article is being prepared.</p>
</section>
<footer>...</footer>
</body>
</html>
```

**注意：** 所有 15 篇 shell 的 `<style>` 复用 index.html 的完整 CSS（nav, hub-nav, footer 样式）。导航（nav + hub-nav）和 index 完全一致，hub-nav 中 cellular-energy 不加 `class="active"`（只有 index 加）。

---

## 十四、图片

已复制到 `ASSETS/PICTURE/`：

| 用途 | 文件名 | URL |
|------|--------|-----|
| Hero | cellular-energy-hero.jpg | /PICTURE/cellular-energy-hero.jpg |
| Energy Flow | cellular-energy-flow.jpg | /PICTURE/cellular-energy-flow.jpg |
| Knowledge Graph | cellular-energy-graph.jpg | /PICTURE/cellular-energy-graph.jpg |
| Mitochondria Detail | cellular-energy-mitochondria.jpg | /PICTURE/cellular-energy-mitochondria.jpg |

---

## 十五、验证清单

- [ ] Index Hero 全幅图 + 叠文字 + Metrics row + CTA
- [ ] Knowledge Graph Position（5层图谱 + GEO Block）
- [ ] Quick Answer
- [ ] Explore This Hub — 三栏 A/B/C（15张卡片，每篇带等级标签 + 描述 + 箭头）
- [ ] Visual Energy Flow（文字流程图 + 图片）
- [ ] The Mitochondria Connection（featured card 链接到 Mitochondria Hub）
- [ ] FAQ（6个折叠，默认展开第一个）
- [ ] Key Takeaways + AI Citable Block
- [ ] Scientific Disclaimer
- [ ] Where This Fits（Root Node 布局，无 Upstream）
- [ ] Related Hubs（所有下游 Hub 卡片）
- [ ] JSON-LD（CollectionPage + DefinedTerm + FAQPage + BreadcrumbList）
- [ ] hub-nav bioenergetics → Cellular Energy 改链接
- [ ] 15 篇 shell 文章全部创建，导航一致
- [ ] 旧 9 篇文章不链接、不引用、不删
- [ ] HTTP 200

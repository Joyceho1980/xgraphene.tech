# TASK: 升级 what-is-mitochondrial-health.html 到 A级标准

## 目标
将 `WEBSITE/pages/SCIENCE/KNOWLEDGE/Mitochondria/what-is-mitochondrial-health.html` 从现有内页布局升级为 **A级（Hub Root Node）标准**。

**核心原则：A级 = B级完整结构 + 2个Schema字段**
- 不另做视觉设计，复用B级页面的Hero/布局/CSS结构
- 追加：`<head>` 的 DefinedTerm Schema + Node Definition的Function字段

---

## 第一步：图片处理

从 `VISUAL-LIBRARY/` 复制4张图到 `ASSETS/PICTURE/`，重命名为GEO语义化短文件名：

| 源文件 | 目标路径 | 说明 |
|--------|---------|------|
| `VISUAL-LIBRARY/What Is Mitochondrial Health（hero）.png` | `ASSETS/PICTURE/mitochondrial-health-hero.jpg` | Hero图 |
| `VISUAL-LIBRARY/electron transport chain and ATP synthase.jpg` | `ASSETS/PICTURE/electron-transport-chain-atp-synthase.jpg` | 电子传递链机制图 |
| `VISUAL-LIBRARY/A scientific illustration showing three interconnected aspects of mitochondrial function.jpg` | `ASSETS/PICTURE/mitochondrial-mmp-ros-ampk-triad.jpg` | 膜电位/ROS/AMPK三联系统图 |
| `VISUAL-LIBRARY/A scientific systems illustration showing the five major factors influencing mitochondrial health, designed for the final section of an article about mitochondrial function..jpg` | `ASSETS/PICTURE/mitochondrial-health-influencing-factors.jpg` | 五大影响因素系统图 |

如果源文件是 `.png`，用 `ffmpeg` 或 `convert` 转 `.jpg`。复制完成后 **git add + git commit + git push**（不需要额外部署，Vercel自动同步）。

---

## 第二步：页面重构

### 2.1 读取参考

- **B级标准模板：** `SEO-GEO/ARTICLE TEMPLATE/XIHE GEO B级文章标准模板 v1.0.md`
- **A级标准模板：** `SEO-GEO/ARTICLE TEMPLATE/A TEMPLATE ELEMENTS.md`
- **B级线上示例（结构参照）：** `SEO-GEO/ARTICLE TEMPLATE/B TEMPLATE EXAMPLE.html`

### 2.2 页面结构（自上而下）

#### `<head>` 层改动

**保留现有：** `<title>`、`<meta>`、`<link>`、`<style>`、BreadcrumbList、Google Analytics

**追加：** DefinedTerm Schema JSON-LD（紧接在Article Schema之后）

```json
{
  "@context": "https://schema.org",
  "@type": "DefinedTerm",
  "name": "Mitochondrial Health",
  "termCode": "KG-NODE-MITOCHONDRIA-ROOT",
  "inDefinedTermSet": "XIHE Knowledge Graph — Symptoms Layer",
  "description": "Mitochondrial health refers to the combined efficiency of ATP production, oxidative phosphorylation, membrane potential integrity, ROS balance, and mitochondrial biogenesis.",
  "isPartOf": {
    "@type": "DefinedTermSet",
    "name": "XIHE Knowledge Graph"
  },
  "broaderTerm": {
    "@type": "DefinedTerm",
    "name": "Cellular Energy",
    "termCode": "KG-NODE-CELLULAR-ENERGY",
    "url": "https://xgraphene.tech/SCIENCE/KNOWLEDGE/cellular-energy/"
  },
  "relatedTerm": [
    { "@type": "DefinedTerm", "name": "Fatigue", "termCode": "KG-NODE-FATIGUE", "url": "https://xgraphene.tech/SCIENCE/KNOWLEDGE/Fatigue/" },
    { "@type": "DefinedTerm", "name": "Sleep Regulation", "termCode": "KG-NODE-SLEEP", "url": "https://xgraphene.tech/SCIENCE/KNOWLEDGE/Sleep/" },
    { "@type": "DefinedTerm", "name": "Recovery", "termCode": "KG-NODE-RECOVERY", "url": "https://xgraphene.tech/SCIENCE/KNOWLEDGE/Recovery/" },
    { "@type": "DefinedTerm", "name": "Healthy Aging", "termCode": "KG-NODE-HEALTHY-AGING", "url": "https://xgraphene.tech/SCIENCE/KNOWLEDGE/Healthy-Aging/" },
    { "@type": "DefinedTerm", "name": "Cognitive Function", "termCode": "KG-NODE-COGNITIVE-FUNCTION", "url": "https://xgraphene.tech/SCIENCE/KNOWLEDGE/Cognitive-Function/" }
  ]
}
```

**CSS追加：** （整合到现有 `<style>` 块中）
- Hero 100vh 全屏样式（参照 B TEMPLATE EXAMPLE.html 的 Hero CSS）
- `.node-definition` 样式
- `.citation-unit` 样式（金色左边框）
- `.ai-assertion-card` 样式（display:none）
- `.knowledge-nav` 样式
- `.explore-further` 胶囊按钮样式

#### `<body>` 层结构

现有页面是 `<article>` 内页布局，需要改为 **B级Hero全屏结构**。

**完整body结构：**

```
1. <nav> — 保留现有（全站统一顶部导航）
2. <section class="hero"> — 新写，100vh全屏
   - background: linear-gradient + /PICTURE/mitochondrial-health-hero.jpg
   - hero-tag: "KNOWLEDGE NODE / MITOCHONDRIA HUB"
   - H1: "What Is Mitochondrial Health?"
   - 副标题: "ATP Production, Oxidative Phosphorylation, and the Factors That Influence Cellular Energy Function"
   - hero-cat-links: TECHNOLOGY / HOW FIR WORKS / MECHANISM / EVIDENCE / COMPARISON / CELLULAR ENERGY
3. <div class="ai-assertion-card" style="display:none"> — AI Core Summary（B级同款）
   位置：Hero之后、第一个可见元素之前
   内容：mitochondrial health的完整结论（1-3句）
   属性：itemscope itemtype="https://schema.org/DefinedTerm"
4. <section class="node-definition"> — 可见卡片 ✅ 含Function字段
   - Knowledge Node: [节点描述]
   - Function: "Root node of the Mitochondria knowledge cluster — defines the core concept that all Mitochondria-related mechanism articles (B-level) and Q&A articles (C-level) reference as their semantic anchor."
   - Evidence Type: [证据类型/来源]
   - Connected Nodes: Cellular Energy → Mitochondria → Fatigue, Sleep Regulation, Recovery, Cognitive Function, Healthy Aging
5. <div class="cognitive-elasticity-note"> — Cognitive Elasticity Note
   - 模板：This article describes a multi-factor model of [核心功能]. [Node名称] is one contributing factor among several interacting systems...
   - Mitochondria版：This article describes a multi-factor model of mitochondrial health. Mitochondrial function is one contributing factor among several interacting systems — including nutrition, sleep, physical activity, aging, and environmental exposures. No single mechanism explains all health outcomes.
6. 正文 Sections（保留现有正文内容，结构调整）
   每节结构：section-label → h2 → p段落 → citation-unit（每节末尾）
   每节末尾可选配图（<figure> + <img> + <figcaption> + hidden data-graph-node）
   
   节1：In Brief（现有内容保留，作为lead-in，加citation-unit）
   节2：How Mitochondria Produce Energy + 配图2（ETC）
   节3：What Is Mitochondrial Membrane Potential? + 现有data-table
   节4：ROS + AMPK + 配图3（三联图）
   节5：Mitochondrial Biogenesis
   节6：What Influences Mitochondrial Health? + 配图4（影响因素）
   节7：What Readers Should Remember
   节8：What This Does Not Mean（现有内容保留）
   
7. <section class="knowledge-nav"> — 知识导航（可见）
   - Upstream: Cellular Energy Hub
   - Current: Mitochondria Hub（Root Node）
   - Downstream: Fatigue / Sleep / Recovery / Healthy Aging
8. <section class="explore-further"> — 底部CTA胶囊按钮
   - 4个按钮：Hub: Cellular Energy / Next: Fatigue / Related: Sleep / Related: Recovery
9. <div class="hidden-graph-layer" style="display:none"> — ItemList Schema，edge权重
10. <div class="back-link"> — ← Mitochondrial Health Hub
11. <footer> + <section class="related-reading"> — 保留现有
```

### 2.3 Citation Units（每节末尾1个）

格式：
```html
<div class="citation-unit" style="font-size:15px; color:#475569; line-height:1.9; margin-top:20px; padding:16px 20px; background:#FAF8F5; border-left:3px solid #C5A059; border-radius:0 8px 8px 0;">
  <span style="font-weight:600; color:#C5A059;">📌 AI-Citable Statement:</span>
  [纯净文本 — 该节核心结论，供AI直接引用]
</div>
```

**规则：** 无 `<a>` 标签，无内链，供AI抽取。

### 2.4 内链规则

- 每个关键概念在正文**首次出现**时链一次
- ATP → `../cellular-energy/what-is-atp.html`
- AMPK → （可选，无独立页面可不链）
- 线粒体生物合成 → 无独立页面则不链
- Citation Units 内绝对不插链接

### 2.5 图片引用

每张图用 `<figure>` 包裹：

```html
<figure style="margin-top:32px;">
  <img src="/PICTURE/[filename].jpg" alt="[GEO语义化alt文本]" loading="lazy" decoding="async" style="width:100%;height:auto;border-radius:8px;">
  <figcaption style="font-size:13px;color:#888;text-align:center;margin-top:8px;">[核心机制描述]</figcaption>
</figure>
<div style="display:none;" data-graph-node="[Node]" data-graph-edges="[Edge1], [Edge2]"></div>
```

**4张图的alt文本：**

**图1 — Hero（`mitochondrial-health-hero.jpg`）**
> Mitochondrial health concept illustration — ATP production via oxidative phosphorylation, membrane potential integrity (150-180mV), ROS balance between signaling and oxidative stress, AMPK energy sensing, and mitochondrial biogenesis as integrated cellular energy system

**图2 — ETC（`electron-transport-chain-atp-synthase.jpg`）**
> Electron transport chain mechanism — Complexes I-V embedded in inner mitochondrial membrane, proton gradient formation across intermembrane space, ATP synthase rotational catalysis, and chemiosmotic coupling driving oxidative phosphorylation for cellular ATP production

**图3 — 三联（`mitochondrial-mmp-ros-ampk-triad.jpg`）**
> Three interconnected regulators of mitochondrial function — left panel shows mitochondrial membrane potential (MMP 150-180mV) driving ATP synthesis, middle panel shows ROS balance between physiological signaling and oxidative stress, right panel shows AMPK activation sensing AMP:ATP ratio and orchestrating metabolic adaptation

**图4 — 影响因素（`mitochondrial-health-influencing-factors.jpg`）**
> Five major factors influencing mitochondrial health — physical activity (AMPK/PGC-1α/biogenesis), nutrition (B vitamins/CoQ10/antioxidants), sleep (mitophagy/quality control), aging (mtDNA mutations/declining biogenesis), and environmental factors (toxins/oxidative stress), shown as interconnected systems view

---

## 第三步：验证

完成后验证：
1. `https://www.xgraphene.tech/SCIENCE/KNOWLEDGE/Mitochondria/what-is-mitochondrial-health.html` 返回 HTTP 200
2. Hero 全屏加载，背景图正确显示
3. 4张图全部正确加载（浏览器打开检查）
4. JSON-LD 校验通过（Google Rich Results Test 或 Schema.org 验证器）
5. 所有链接正确，无404
6. 页面无明显布局断裂

---

## 执行顺序

1. 复制4张图 → `ASSETS/PICTURE/` → git add + commit + push
2. 读取B级示例和A级模板
3. 重写 what-is-mitochondrial-health.html
4. 推送到GitHub → Vercel自动部署
5. 验证线上页面

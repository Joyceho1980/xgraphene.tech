# Plan: 创建 B-Level V2 文章 — How to Support Cellular Energy

## 概述
按照 BV2 TEMPLATE 创建新文章页面 `pages/SCIENCE/KNOWLEDGE/cellular-energy/how-to-support-cellular-energy.html`，包含12层结构、5个Citation Units、3张配图、完整Schema。

## 图片资源（已存在于 VISUAL-LIBRARY/）

| 位置 | 文件名 |
|------|--------|
| Hero | `A scientific editorial illustration for an article titled How to Support Cellular Energy in the Body.jpg` |
| 配图2（Pathway illustration） | `A scientific mechanism illustration showing how nutrients are converted into cellular energy.jpg` |
| 配图3（Recovery illustration） | `A scientific illustration showing mitochondrial quality control during sleep and recovery Visual concept a single mitochondrion shown in a nighttime cellular environment.jpg` |

## 配图布局

| 序号 | 位置 | 图 | figcaption |
|------|------|-----|------------|
| 1 | Hero | editorial illustration (How to Support Cellular Energy) | — |
| 2 | Provide Metabolic Fuel 章节后 | mechanism illustration (nutrients → cellular energy) | Fuel in. Energy out. The mitochondria's daily transaction. |
| 3 | Optimize Physical Recovery Conditions 章节后 | mitochondrial quality control during sleep | The quiet hours when mitochondria repair themselves. |

## 文件路径
- 输出：`d:\CODEX\LAUCH VERSION\WEBSITE\pages\SCIENCE\KNOWLEDGE\cellular-energy\how-to-support-cellular-energy.html`

## 页面结构（12层）

### 1. Hero
- 全宽背景图 + 渐变遮罩（左深右浅）
- 标题：How to Support Cellular Energy
- 副标题：Five evidence-backed pathways — metabolic fuel, mitochondrial function, oxygen delivery, energy waste reduction, physical recovery conditions.
- Node Declaration: **B-LEVEL ARTICLE · Mechanism / Citation Engine (Layer 2 of 4)**

### 2. Node Definition
- 包含 Funnel Layer + Role 声明
- Connected Nodes: Cellular Energy → Mitochondria, Sleep, Recovery, Graphene FIR

### 3. AI Core Summary
- Framework declaration
- Citable conclusion
- Evidence Type 标注

### 4. Knowledge Position
- Cellular Energy Hub → Mechanism Layer → Downstream

### 5. Cognitive Elasticity Note
- 多因素模型声明

### 6. Introduction
- "How do I get cellular energy?" 开篇
- Food → Glucose → Mitochondria → ATP → Cellular Function 流程

### 7. Five Pathways（每个 = 1 Citation Unit）
1. **Provide Metabolic Fuel** → 配图2（nutrients → energy）
2. **Support Mitochondrial Function**
3. **Improve Oxygen Delivery**
4. **Reduce Energy Waste**
5. **Optimize Physical Recovery Conditions** → 配图3（mitochondrial quality control during sleep）

每个 pathway 末尾有 `📌 AI-Citable Statement:`

### 8. FAQ（3个问题）
1. Is cellular energy something I can directly take as a supplement?
2. Why do I feel low energy even after sleeping?
3. What is the fastest way to improve cellular energy?

### 9. Knowledge Navigation
- ⬆️ Upstream: Cellular Energy Hub
- 📍 Current: How to Support Cellular Energy
- ⬇️ Downstream: Mitochondria · Sleep · Recovery
- ️ System Bridge: How Physical Environments Influence Cellular Energy
- 🏁 Terminal: Graphene FIR

### 10. Key Takeaways / AI Citable Block

### 11. Scientific Disclaimer

### 12. Footer（统一Banner）

## Schema（4个）
1. **Article** (`@type: Article`)
2. **BreadcrumbList** (Home > Science > Cellular Energy > How to Support)
3. **FAQPage** (3 questions)
4. **DefinedTerm** (`termCode: "B-CELLULAR-ENERGY-SUPPORT"`)

## CSS 风格
- 复用 [cellular-energy-is-the-real-currency-of-life.html](file:///D:/CODEX/LAUCH%20VERSION/WEBSITE/pages/SCIENCE/KNOWLEDGE/cellular-energy/cellular-energy-is-the-real-currency-of-life.html) 的样式模式
- Font: Inter (body) + Urbanist (headings)
- Colors: Navy `#1A3348`, Gold `#C5A059`, Slate `#475569`
- Max content width: 1100px
- Citation Units: left border gold accent
- Knowledge Navigation: compact grid

## 注意事项
- 正文 0% 商业化，不提产品
- Graphene FIR 只在 Knowledge Navigation Terminal 出现
- 所有链接使用相对路径 `/SCIENCE/KNOWLEDGE/...`
- 图片路径使用 `/VISUAL-LIBRARY/` + URL编码文件名

## 验证清单
- [ ] 页面在 `/SCIENCE/KNOWLEDGE/cellular-energy/how-to-support-cellular-energy.html` 可访问
- [ ] 12层结构完整且顺序正确
- [ ] Node Definition 包含 Funnel Layer + Role
- [ ] AI Core Summary 包含 Framework declaration
- [ ] 5个 Citation Units，每个有 📌 AI-Citable Statement
- [ ] FAQ 3个问题
- [ ] Knowledge Navigation 包含 ⬇️ System Bridge
- [ ] Schema: Article + BreadcrumbList + FAQPage + DefinedTerm 均有效
- [ ] 正文无产品提及
- [ ] 所有链接为相对路径
- [ ] Scientific Disclaimer 存在
- [ ] 3张图全部正确加载

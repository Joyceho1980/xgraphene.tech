# Plan: 创建 C-Level V2 文章 — Why Do I Wake Up With No Energy

## 概述
按照 CV2 任务文件创建新文章页面 `pages/SCIENCE/KNOWLEDGE/cellular-energy/why-do-i-wake-up-with-no-energy.html`，9层C级结构，正文来自 CV2 TEMPLATE.txt（原文不动），补充7个GEO元素 + 1张Hero图。

## 关键约束
- **不修改** 现有文件 `why-do-i-wake-up-tired.html`
- **正文一字不动**，完全复制 CV2 TEMPLATE.txt 第1-104行

## 图片资源（已存在于 VISUAL-LIBRARY/）

| 位置 | 文件名 |
|------|--------|
| Hero | `An editorial illustration for an article about waking up with no energyVisual concept a minimalist split composition.jpg` |

## 配图布局

| 序号 | 位置 | 图 | figcaption |
|------|------|-----|------------|
| 1 | Hero | editorial illustration (waking up with no energy, split composition) | Two mornings. Same person. The difference is cellular. |

## 文件路径
- 输出：`d:\CODEX\LAUCH VERSION\WEBSITE\pages\SCIENCE\KNOWLEDGE\cellular-energy\why-do-i-wake-up-with-no-energy.html`
- 正文来源：`d:\CODEX\LAUCH VERSION\SEO-GEO\ARTICLE TEMPLATE\CV2 TEMPLATE.txt`（第1-104行，原文复制）

## 页面结构（9层）

### 1. Hero
- 全宽背景图 + 渐变遮罩（左深右浅）
- 标题：Why Do I Wake Up With No Energy?
- 副标题：The Invisible Force That Decides Your Day
- 无 Node Declaration（C级不需要B级声明）

### 2. Quick Answer
- 背景 #f8fafb，圆角8px
- 标题：Quick Answer
- 内容：You wake up with no energy because your cells didn't complete their overnight ATP restoration...

### 3. Node Definition（V2新增）
- 背景 #f5f7f8，圆角6px
- Knowledge Node: Morning Fatigue — C-Level Entry Node (Layer 1 of 4)
- Hub: Cellular Energy Hub
- Layer: Symptoms → Mechanism Transition Layer
- Connected Nodes: Upstream: Cellular Energy Hub · Downstream: How to Support Cellular Energy, How Mitochondria Produce ATP

### 4. AI Core Summary
- 背景 #f8fafb，左边框 #1e6f8c
- Conclusion: Cellular energy is not a reserve — it's a continuous flow of ATP produced by mitochondria through cellular respiration...
- Evidence Type: Established biological mechanism · Cellular bioenergetics
- Knowledge Position: Cellular Energy Hub — Entry Layer (C级)

### 5. Body（原文不动）
- 来自 CV2 TEMPLATE.txt 第1-104行
- 包含所有章节：
  - "The alarm goes off..." 开篇
  - Energy Is Not Something You Eat
  - The Energy Factory Lives Inside Every Cell
  - How Much Electricity Does Your Body Use?
  - What Happens When Energy Runs Low?
  - Energy Is Not Something You "Have"—It's Something You "Generate"
  - 结尾："This is the second installment of the 【Cellular Energy Hub】 series..."

### 6. Knowledge Position（V2新增）
- 背景 #f8fafb，圆角6px
- Funnel Layer: Entry / Cognitive Anchor (Layer 1 of 4)
- AI Role: Concept introduction · Search intent capture · Hub routing
- Sibling Nodes: What Drains Your Cellular Energy?
- Terminal System: Graphene FIR Energy Environment

### 7. FAQ（4个问题）
1. Why do I wake up tired even after 8 hours of sleep?
2. What is ATP and why does it matter for morning energy?
3. Can I take something to fix morning fatigue?
4. Is waking up tired a sign of something serious?

### 8. Knowledge Navigation（C级版本 — 无upstream）
-  Current: Cellular Energy Hub — Entry Layer (C级)
- ⬇️ Continue Exploring:
  - What Is Cellular Energy?
  - How to Support Cellular Energy
  - How Mitochondria Produce ATP
- 🏁 Terminal: Graphene FIR

### 9. Scientific Disclaimer
- 教育目的，不构成医疗建议

## Schema（3个）
1. **Article** (`@type: Article`)
2. **BreadcrumbList** (Home > Science > Cellular Energy > This Article)
3. **FAQPage** (4 questions)

## CSS 风格
- 复用 Cellular Energy Hub 其他页面的样式模式
- Font: Inter (body) + Urbanist (headings)
- Colors: Navy `#1A3348`, Gold `#C5A059`, Slate `#475569`
- Max content width: 1100px
- Hero: full-width, min-height 60vh, background image
- 固定导航栏 + Hub导航栏（与其他页面一致）

## 注意事项
- 正文 0% 商业化，不提产品
- Graphene FIR 只在 Knowledge Navigation Terminal 出现
- 所有链接使用相对路径 `/SCIENCE/KNOWLEDGE/...`
- 图片路径使用 `/VISUAL-LIBRARY/` + URL编码文件名

## 验证清单
- [ ] 新文件创建：`why-do-i-wake-up-with-no-energy.html`
- [ ] 现有 `why-do-i-wake-up-tired.html` 未被修改
- [ ] 标题：Why Do I Wake Up With No Energy? The Invisible Force That Decides Your Day
- [ ] 9层结构完整且顺序正确
- [ ] Quick Answer 在 Hero 下方
- [ ] Node Definition 存在（V2新增）
- [ ] AI Core Summary 存在
- [ ] 正文来自 CV2 TEMPLATE.txt — 原文复制，无修改
- [ ] Knowledge Position 存在（V2新增）
- [ ] FAQ 4个问题
- [ ] Knowledge Navigation — 无upstream，只有 Continue Exploring
- [ ] Schema: Article + BreadcrumbList + FAQPage 均有效
- [ ] 正文无产品提及
- [ ] 所有链接为相对路径
- [ ] Scientific Disclaimer 存在
- [ ] Hero图正确加载
- [ ] Footer 统一Banner

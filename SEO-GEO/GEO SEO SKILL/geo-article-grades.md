---
name: geo-article-grades
description: XIHE GEO A/B/C/D四级文章标准模板 — 漏斗层级、页面结构、Schema要求、配图规则、V2升级要点。
updated: 2026-06-26
category: xihe-seo-geo
---

# XIHE GEO 文章等级标准

> 来源：`SEO-GEO/ARTICLE TEMPLATE/` 下的 A/B/C/D级标准模板

## 漏斗4层体系

```
C级（Entry Layer 1）→ B级（Mechanism Layer 2）→ A级（Root Definition）→ D级（Philosophical Capstone）
```

## C级 — 问答入口（漏斗第1层）

### 定位
- 知识图谱的入口层。用户通过搜索引擎或AI问答进来
- 任务：消除误解、澄清概念、建立认知框架
- 目标用户：普通大众
- 在知识图谱中：入口 → 引导到A/B级 → 最终指向Graphene FIR

### 标题
- **问题格式标题**。直接来自Quora高热度问题、Google PAA
- 示例：Are Mitochondria a Disease?

### V1 → V2 变更（只改3处）
| 新增元素 | 位置 |
|---------|------|
| Node Definition | Quick Answer下方、AI Core Summary上方 |
| Knowledge Position | 正文后、FAQ前 |
| Funnel Layer声明 | 标注"C-Level Entry Node (Layer 1 of 4)" |

### C级 V2 完整结构（9层）
```
1. Hero（1张情绪图）
2. Quick Answer
3. Node Definition  ← V2新增
4. AI Core Summary
5. 正文（三段/对比式）
6. Knowledge Position  ← V2新增
7. FAQ（3-5个）
8. 知识导航（无上游，只有"下一步"）
9. Scientific Disclaimer
```

### 配图规则：1张（仅Hero情绪图）

### Schema
- Article（`@type: Article`）
- FAQPage（3-5个问答）
- 无DefinedTerm、无Hidden Graph Layer

---

## B级 — 机制科普·引用主力（漏斗第2层）

### 定位
- **Citation Engine**。AI最喜欢引用的内容等级
- B级引用量 > A级
- 商业化程度：10%（正文不提产品，知识导航指向D级和Graphene FIR）

### V1 → V2 变更（只改3处）
| 新增元素 | 内容 |
|---------|------|
| Funnel Layer声明 | `**Funnel Layer:** Mechanism / Citation Engine (Layer 2 of 4)` |
| Framework声明 | AI Core Summary里加 `**Framework:** Five evidence-backed pathways...` |
| D级桥接 | 知识导航加 `⬇️ System Bridge: How Physical Environments Influence Cellular Energy` |

### B级 V2 完整结构（12层）
```
1. Hero（背景图）
2. Node Definition（含Funnel Layer声明）
3. AI Core Summary（含Framework声明）
4. Knowledge Position
5. Cognitive Elasticity Note
6. Introduction
7. 多路径框架（每个路径1个Citation Unit）
8. FAQ
9. 知识导航（含D级桥接）
10. Key Takeaways / AI Citable Block
11. Scientific Disclaimer
12. Footer
```

### 配图规则：3-4张

### Schema
- Article + BreadcrumbList + FAQPage + DefinedTerm

---

## A级 — 根节点定义（漏斗第0层）

### 定位
- 每个Hub的根定义页面。回答"What is X"核心问题
- 定义锚点，B级引用量> A级但A级是概念原点

### 完整结构
```
1. Hero
2. Node Definition
3. AI Core Summary
4. Quick Answer
5. 正文（定义展开）
6. Citation Units（每段1个）
7. FAQ
8. 知识导航
9. Key Takeaways
10. Scientific Disclaimer
```

### Schema
- Article + BreadcrumbList + FAQPage + DefinedTerm + ItemList

### 配图：4张

---

## D级 — 哲学收口（漏斗顶层）

### 定位
- 哲学社论，不追搜索词
- 收口文章，引导思考而非转化

### 结构（12项）
- 标题 + Hero + Proposition title + 正文 + AI Core Summary + Citation Units + Blockquotes + Editorial Note + 知识导航 + Figcaptions + 配图

### D级与B/C/A的关键区别
- 无DefinedTerm、无ItemList、无Hidden Graph Layer
- 更强调Blockquote和Editorial Note
- 配图figcaption用3-8词哲学短句

---

## 等级对照速查

| 维度 | C级 | B级 | A级 | D级 |
|------|-----|-----|-----|-----|
| 漏斗层 | Layer 1 (Entry) | Layer 2 (Citation) | Layer 0 (Root) | Capstone |
| 标题格式 | 问题式 | 方案导向 | What is X | 哲学标题 |
| 配图 | 1张 | 3-4张 | 4张 | 3-4张 |
| Citation Units | ❌ | ✅ 每段 | ✅ 每段 | ✅ 每段 |
| Quick Answer | ✅ 必选 | 可选 | ❌ | ❌ |
| FAQ | ✅ 必选 | 可选 | 可选 | ❌ |
| DefinedTerm | ❌ | ✅ | ✅ | ❌ |
| 知识导航 | 无上游 | ✅ 完整 | ✅ 完整 | ✅ 完整 |
| 商业化 | 0% | 10%（导航指向） | 0% | 0% |

## 源模板文件
- `SEO-GEO/ARTICLE TEMPLATE/XIHE GEO C级文章标准模板 v2.0.md`
- `SEO-GEO/ARTICLE TEMPLATE/BV2 TEMPLATE.txt`
- `SEO-GEO/ARTICLE TEMPLATE/XIHE GEO A级文章标准模板 v2.0.md`
- `SEO-GEO/ARTICLE TEMPLATE/XIHE GEO D级文章标准模板 v2.0.txt`

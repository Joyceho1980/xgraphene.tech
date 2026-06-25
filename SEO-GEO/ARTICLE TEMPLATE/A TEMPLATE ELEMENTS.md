# XIHE GEO A级文章标准模板 v1.0

## 一、核心定位

**A级 = B级完整结构 + 2个额外Schema字段**

A级不是独立的新设计，是在B级模板基础上追加：
1. **DefinedTerm Schema**（JSON-LD head层）
2. **Node Definition 的 Function字段**（可见层）

除此之外，Hero布局、AI Core Summary、Citation Units、知识导航、配图数量全部和B级一致。

---

## 二、文章元信息

### H1标题规范
- **格式：** What Is [概念]? — [定位描述]
- **长度：** 不超过15个英文单词
- **示例：** What Is Mitochondrial Health? A Research-Informed Overview of Cellular Energy Function

### 副标题规范
- **格式：** [核心定义] + [范围描述]
- **示例：** ATP Production, Oxidative Phosphorylation, and the Factors That Influence Cellular Energy Function

### Node/Layer/Connected Nodes 决策表

| 字段 | 决策规则 | 示例 |
|------|---------|------|
| Primary Node | 文章定义的Hub核心概念 | Mitochondria |
| Layer | 该Hub在知识图谱中的层级 | Symptoms Layer → Mechanisms Layer |
| Connected Nodes | 文章覆盖哪些上下游？上游→当前→下游 | Cellular Energy → Mitochondria → Fatigue, Cognitive Function, Sleep Regulation |

---

## 三、A级 vs B级对照表

**A级 = B级结构 + 以下两项：**

| 维度 | B级 | A级追加 |
|------|-----|---------|
| Hero 100vh | ✅ 相同结构 | 无变化 |
| Visible Node Definition | ✅ 精简版（无Function字段） | ✅ **+ Function字段** |
| AI Core Summary | ✅ 同结构 | 无变化 |
| Cognitive Elasticity Note | 可选 | ✅ **必选** |
| Citation Units | ✅ 每段1个 | 无变化 |
| 配图3-4张 | ✅ 相同 | 无变化 |
| Article Schema | ✅ | 无变化 |
| **DefinedTerm Schema** | ❌ | ✅ **追加** |

**A级独有追加项（仅2项）：**

1. **`<head>` 层追加 JSON-LD DefinedTerm** — `termCode: KG-NODE-[HUB]-ROOT` + `relatedLink` 数组
2. **Visible Node Definition 追加 Function字段** — 描述该Node在知识图谱中的核心功能

---

## 四、A级追加字段规格

### 追加1 — DefinedTerm Schema（`<head>` 层）

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
    { "@type": "DefinedTerm", "name": "Recovery", "termCode": "KG-NODE-RECOVERY", "url": "https://xgraphene.tech/SCIENCE/KNOWLEDGE/Recovery/" }
  ]
}
```

### 追加2 — Visible Node Definition 追加 Function字段

```html
<section class="node-definition" style="padding:20px 24px; background:#FAF8F5; border-radius:8px; margin-bottom:32px; border:1px solid #E5E5E7;">
  <p><strong>📍 Knowledge Node:</strong> [节点描述 — 文章核心主张的完整陈述]</p>
  <p><strong>Function:</strong> Root node of the [Hub Name] knowledge cluster — defines the core concept that all [Hub Name]-related mechanism articles (B-level) and Q&A articles (C-level) reference as their semantic anchor.</p>
  <p><strong>Evidence Type:</strong> [证据类型 · 证据来源 · 文献类型]</p>
  <p><strong>Connected Nodes:</strong> [上游] → <strong>[当前]</strong> → [下游1], [下游2], [下游3]</p>
</section>
```

Function字段通用模板：
> `Root node of the [Hub Name] knowledge cluster — defines the core concept that all [Hub Name]-related mechanism articles (B-level) and Q&A articles (C-level) reference as their semantic anchor.`

---

## 五、B级已有的结构（A级继承，规格一致）

### Hero布局

同B级。100vh全屏，`linear-gradient` 叠加，Hero图片 `/PICTURE/` 路径。

**Hero内容差异：**
- A级：`What Is Mitochondrial Health？ — A Research-Informed Overview...`
- B级：`Why Brain Workers Feel Like Their Brain Never Stops`

### AI Core Summary（同B级结构）

`display:none` 隐藏版，位置在 `<body>` 首个子元素。非可见卡片。

**注意：** A级没有独立的可见版 AI Core Summary。Visible Node Definition 已经承担了用户可见的摘要角色。

### Cognitive Elasticity Note

通用模板（每个Hub微调最后一句）：

```html
<div class="disclaimer-box" style="background:#FFF8F0; border-left:3px solid #C5A059; padding:20px 24px; margin:24px 0;">
  <p><strong>🧠 Cognitive Elasticity Note:</strong> This article describes a multi-factor model of [该Node的核心功能]. [Node名称] is one contributing factor among several interacting systems. No single mechanism explains all outcomes.</p>
</div>
```

**Mitochondria Hub 示例：**
> This article describes a multi-factor model of mitochondrial health. Mitochondrial function is one contributing factor among several interacting systems — including nutrition, sleep, physical activity, aging, and environmental exposures. No single mechanism explains all health outcomes.

### Citation Units（同B级）

每段末尾1个，金色 📌 标签，无链接。

### 配图（同B级）

3-4张，16:9，Navy/Amber/Teal，每张图必备 data-graph-node、data-graph-edges、figcaption、alt。

### 内链规则（同B级）

每个关键概念首次出现链一次，Citation Units 不链。

### 知识导航（同B级）

正文下方 Knowledge Graph Navigation + Explore Further CTA。

---

## 六、与C级的区别

| 要素 | A级（根节点 \= B级 + 2字段） | B级（机制科普） | C级（问答型） |
|------|------------------------|----------------|--------------|
| 用途 | 定义Hub核心概念 | 解释因果机制链 | 回答单一问题 |
| H1格式 | What Is X... | 问题/机制陈述 | Why/How/What 问句 |
| Hero 100vh | ✅ | ✅ | ❌ |
| Visible Node Definition | ✅ + Function字段 | ✅ 精简版 | ❌ |
| AI Core Summary | ✅ display:none | ✅ display:none | ✅ display:none |
| Cognitive Elasticity Note | ✅ 必选 | 可选 | ❌ |
| Citation Units | ✅ 每段 | ✅ 每段 | ❌ (Quick Answer替代) |
| 配图 | 3-4张 | 3-4张 | 0-1张 |
| Schema | **Article + DefinedTerm** | Article | Article |

---

## 七、发布后Hub Index更新

A级文章发布后，须更新所属Hub的Root Node Index：

1. **JSON-LD hasPart** — 新增子文章URL
2. **文章列表区按A/B/C三级分类展示**（待总体改版时统一执行）

---

**模板版本：** v1.0
**最后更新：** 2026-06-25
**适用文章类型：** A级（Hub Root Node / 定义页）

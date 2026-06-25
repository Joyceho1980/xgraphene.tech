# GEO Writing + Image V1 执行技能卡

**生成日期:** 2026-06-24
**执行页面:** `what-is-mitochondrial-health.html` (Mitochondria Hub Root Node)
**执行轮次:** TASK-MITO-GEO-WRITING-V1-3LAYERS + GEO全面对齐

---

## 一、执行内容总览

本文件汇总了一轮完整的 GEO Writing V1 + Image V1 + Cognitive GEO 页面升级的改动清单和核心原理。可直接作为后续 Hub 页面批量升级的技能参考。

---

## 二、7项改动清单（按执行顺序）

### 改动0：技术基线修复（GEO前置条件）

**编码修复：** 全文件 Unicode 字符修复（`—` em dash、`–` en dash、`←`、`·`、`α`、`H⁺`等）。文件 UTF-8 编码，30+处损坏。

**HTML修复：** `<img>` 标签闭合错误（`>` 在 `style=` 前），重复日期行删除。

> **原则：** GEO 层注入之前，基本 HTML 必须清洁。编码损坏会导致 schema JSON-LD 解析失败，直接破坏 AI 可读性。

---

### 改动1：Knowledge Navigation 边类型修正（Cognitive GEO Layer）

**隐藏层 `knowledge-nav`（ItemList schema）：**
```
❌ 旧：Upstream: Graphene FIR Hub
✅ 新：Energy Platform: Graphene FIR Hub (parallel energy delivery system)

❌ 旧：Downstream: Clinical-Evidence Hub
✅ 新：Reference Node: Clinical-Evidence Hub (evidence validation layer, not hierarchical downstream)
```

**可见层 `graph-position`（用户可读）：**
```
❌ 旧：Terminal: Graphene FIR — Physical support for mitochondrial function
✅ 新：Energy Platform: Graphene FIR — Physical energy delivery platform supporting mitochondrial function (parallel system, not hierarchical downstream)
```

**AI Core Summary KNOWLEDGE POSITION 行：**
```
❌ 旧：Terminal: Graphene FIR
✅ 新：Energy Platform: Graphene FIR (parallel system)
```

> **GEO原理：** 错误的关系类型（hierarchical downstream）会污染 AI 知识图谱——AI 会把 Clinical-Evidence 理解为"线粒体研究的产物"而非"独立证据验证层"，把 Graphene FIR 理解为"线粒体的下游结果"而非"并行能量供给平台"。Cognitive GEO 的核心：修正的是关系类型，不是节点本身。

---

### 改动2：Node Definition 区块（GEO Writing V1 Layer）

插入位置：H1 之后、"In Brief" 之前。

```html
<section class="node-definition">
  <p><strong>Node:</strong> Mitochondria</p>
  <p><strong>Layer:</strong> Cellular Energy System (Core Node)</p>
  <p><strong>Function:</strong> ATP production via oxidative phosphorylation, 
     maintenance of mitochondrial membrane potential (150-180mV), 
     regulation of cellular energy metabolism through electron transport chain activity</p>
  <p><strong>Connected Nodes:</strong> Cellular Energy (upstream) → 
     Sleep · Fatigue · Recovery · Healthy Aging (downstream) · 
     Graphene FIR (energy support platform, parallel system)</p>
</section>
```

> **GEO原理：** Perplexity/Gemini/SGE 需要一个明确的实体卡片来理解"这个节点是什么"。无 Node Definition 时，AI 可能把页面当作泛健康科普文。4行说清楚：Node / Layer / Function / Connected Nodes —— 给 AI 读的实体身份证。

---

### 改动3：Citation Units（GEO Writing V1 Layer）

每段末尾追加 `<p class="citation-unit">`，格式统一：

```html
<p class="citation-unit">
<strong>AI Citable Statement:</strong> [一句精确断言，不含模糊词]
</p>
```

**7个 Citation Unit 位置：**

| # | 所在段落 | 可引用结论 |
|---|---------|-----------|
| 1 | How Mitochondria Produce Energy | ETC (Complexes I–V) converts nutrient-derived electrons into proton gradient → ATP synthase → 30-32 ATP/glucose via oxidative phosphorylation |
| 2 | Mitochondrial Membrane Potential | MMP (150-180mV) is the direct electrochemical driving force for ATP synthesis; sustained depolarization → reduced energy output + apoptotic susceptibility |
| 3 | Why People Notice Mitochondria | When mitochondrial energy output declines, neurons/cardiac cells/skeletal muscle affected first → slowed recovery, reduced exercise tolerance, diminished sleep quality |
| 4 | Reactive Oxygen Species | ROS function as signaling molecules at physiological levels; when production exceeds antioxidant capacity → oxidative stress damages mtDNA, proteins, lipids |
| 5 | AMPK: Cellular Energy Sensor | AMPK activation shifts metabolism toward ATP production (fatty acid oxidation, glucose uptake, mitochondrial biogenesis) while suppressing anabolic ATP consumption |
| 6 | Mitochondrial Biogenesis | PGC-1α activation → NRF-1/NRF-2 → increased mitochondrial mass/copy number; exercise is most established physiological trigger |
| 7 | What Influences Mitochondrial Health | Five interacting factors — physical activity, nutrition, sleep, aging, environmental exposure — each via distinct mechanisms (AMPK, substrate availability, mitophagy, mtDNA integrity, ETC efficiency) |

**不需要 Citation Unit 的段落：**
- What This Does Not Mean（免责声明，禁止AI引用）
- Related Research（导航性内容，不是知识声明）
- What Readers Should Remember（已是总结性内容）

> **GEO原理：** AI 回答问题时从网页抽取摘要引用。不给它预制可引用结论，AI 就自己抽取——可能抽错、断章取义、或抽到不具代表性的句子。每个 Citation Unit 是一个精心措辞的断言，标记 `AI Citable Statement`，控制 AI 引用 XIHE 时说的话。

---

### 改动4：AI Core Summary 位置修正（Cognitive GEO Layer）

```
❌ 旧位置：<body> 和 <nav> 之间（AI读到页面时先遇到导航，不是知识声明）
✅ 新位置：<article> 内部第一元素（embedding anchor 在内容语义区内）
```

> **GEO原理：** AI 的 embedding 按 DOM 顺序构建语义向量。AI Core Summary 在导航区 = embedding 权重被稀释。移入 article 顶部 = 它是 AI 读到的第一个内容块，成为整个页面的语义锚点。

---

### 改动5："In Brief" 段首节点声明（GEO Writing V1 Layer）

```
❌ 旧开头：
"Most people never think about mitochondria. They think about energy..."

✅ 新开头：
"Mitochondrial health refers to the combined efficiency of ATP production 
through oxidative phosphorylation, maintenance of mitochondrial membrane 
potential (150-180mV), regulation of reactive oxygen species balance, 
and capacity for mitochondrial biogenesis — the cellular energy foundation 
determining recovery capacity, sleep quality, fatigue resistance, and 
healthy aging. Most people never think about mitochondria..."
```

> **GEO原理：** GEO Writing V1 要求段首必须是"节点型陈述"——直接定义结构关系。"人话开头"是 SEO 时代的写法，AI 做 chunking 时抽取不到结构定义。正确做法：硬断言在前，人类叙事在后，两者不矛盾。

---

### 改动6：Image V1 GEO 升级（Image V1 Layer）

**4张图全部升级，每张图新增3项：**

#### 6.1 唯一节点ID
```
新增属性：data-graph-node-id="mito-<type>-<seq>"
  - mito-hero-system-01    (系统总览图)
  - mito-etc-mechanism-01  (ETC机制图)
  - mito-metabolism-pathway-01 (代谢通路图)
  - mito-sleep-causal-chain-01 (睡眠因果链图)
```

#### 6.2 隐藏图谱绑定
```
新增：<meta name="graph-node" content="Mitochondria|<子节点>|<边>|...">
  - Hero:     Mitochondria|ATP Production|Cellular Energy|System Overview
  - ETC:      Mitochondria|ETC|ATP Synthase|Oxidative Phosphorylation|Graphene FIR
  - Metab:    Mitochondria|TCA Cycle|ETC|ATP Synthesis|Metabolic Flexibility
  - Sleep:    Mitochondria|Sleep|Mitophagy|Fatigue|Recovery|Healthy Aging
```

#### 6.3 Alt 文本增强
每张图的 alt 从泛化描述升级为"核心关键词 + 机制描述"的完整句。
```
❌ 旧：Mitochondrial health illustration
✅ 新：Mitochondrial health system overview — ATP production via oxidative 
       phosphorylation, mitochondrial membrane potential (150-180mV), and 
       cellular energy metabolism as foundation for recovery, sleep, and 
       fatigue resistance
```

#### 6.4 Figcaption 证据类型标注
```
新增：<span>Type: [图表类型] · Evidence: [证据来源]</span>
  - Hero:     Type: System overview diagram · Evidence: Established biological mechanism
  - ETC:      Type: Mechanism diagram · Evidence: Established biochemical pathway · 
              Preclinical: Graphene FIR observed to support MMP (yeast model, 2022)
  - Metab:    Type: Mechanism diagram · Evidence: Established metabolic pathway
  - Sleep:    Type: Cross-hub causal chain diagram · Evidence: Sleep deprivation 
              studies + mitochondrial gene expression data
```

> **GEO原理：** 图片从"装饰"升级为"多模态知识图谱节点"。每张图 = 一个 Graph Node，有自己的 ID、绑定的节点、证据类型。AI 读图时不是在读"插图"，而是在读"节点关系证据"。`data-graph-node-id` 让图片在整个站点的图谱系统中可追踪，`meta name="graph-node"` 给 AI 提供图→节点的直接映射。

---

### 改动7：AI Core Summary 内部术语对齐

```
❌ 旧：Terminal: Graphene FIR
✅ 新：Energy Platform: Graphene FIR (parallel system)
```

确保 AI Core Summary（可见层）、graph-position（可见层）、knowledge-nav（隐藏层）三层的边类型描述一致。不一致会让 AI 在不同层读到冲突的关系定义。

---

## 三、GEO 层级判断速查表

执行任何页面改动前，用此表判断"改什么、不改什么"：

| 判断维度 | 必须改（P0） | 建议改（P1） | 不改（P2/免改） |
|---------|------------|------------|---------------|
| **Cognitive GEO** | 图谱关系方向错误（downstream/upstream 错配） | 隐藏层与可见层断言力度不一致 | 不同文章语气不同（风格差异，非认知问题） |
| **GEO Writing V1** | 缺 Node Definition 区块 | 段首不是节点声明 | 长段落不拆分（叙事性内容可以保留） |
| **GEO Writing V1** | 缺 Citation Units（在机制/定义段落尾部） | 段落过长需chunk化（机制段） | 人声叙事段强制chunk化 |
| **Image V1** | data-graph-node + data-graph-edges 缺失 | alt 文本不够精准 | 必须有3层图（不强求，按文章类型决定） |
| **Image V1** | figcaption 无AI可读描述 | 缺证据类型标注 | 每张图必须严格对应3层 |
| **技术基线** | 编码损坏、HTML语法错误 | — | — |

---

## 四、Cognitive GEO 核心原则

```
不是"文章有没有写对"
而是"AI读完后世界模型有没有被正确构建"

不是"结构对不对"
而是"AI会不会误解关系"

不是"优化内容"
而是"设计AI世界观"
```

**三类绝对不能做的事：**
1. 关系类型污染：把并行关系写成层级关系（如 FIR ≠ 线粒体下游）
2. 证据越级：在机制解释段声称临床效果
3. 断言力度冲突：隐藏层弱断言 + 可见层强断言 → AI抽取不稳定

---

## 五、执行检查清单

页面完成整改后，运行以下验证：

```bash
# 1. Citation Units ≥ 机制段落数（不含免责声明/导航/总结）
grep -c 'citation-unit' page.html

# 2. Node Definition 存在
grep -c 'node-definition' page.html

# 3. 每张图有 data-graph-node-id
grep -c 'data-graph-node-id' page.html

# 4. 每张图有 meta name="graph-node"
grep -c 'meta name="graph-node"' page.html

# 5. AI Core Summary 在 article 内
# (手动检查：<article> 后第一个主要 div 应为 .ai-core-summary)

# 6. 无编码损坏
grep -c '�' page.html  # 应为 0

# 7. 无旧边类型残留
grep 'Upstream: Graphene FIR Hub\|Downstream: Clinical-Evidence' page.html  # 应无输出

# 8. 边类型一致性（3层统一）
grep -c 'Energy Platform' page.html  # 应 ≥ 2（可见层 + 隐藏层）
```

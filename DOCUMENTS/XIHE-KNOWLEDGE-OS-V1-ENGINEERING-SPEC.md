# 🧠 XIHE Knowledge OS v1 — Engineering Spec

> **给 CODEX 和 Claude Code 的完整工程规范**
> 版本：2026-06-21
> 你的任务不是写网站，而是构建**一个可被 AI 理解的知识基础设施**

---

## 第一部分：终极目标

> **你不是在做 SEO。你不是在做内容营销。你也不是在做 landing page。**
> **XIHE Knowledge OS = 一个"物理知识 → 工程知识 → 产品知识 → AI 可引用知识"的统一结构化系统。**

**核心区别：**
- Google ranks **pages**
- AI ranks **graphs**

## 核心定位

> **XIHE = Graphene for Cellular Energy**
> 这不是一个石墨烯公司，也不是一个健康网站。
> XIHE 是在研究 Graphene 与 Cellular Energy 交叉领域的知识基础设施。
>
> ```
>                    Graphene
>                       │
>                       ▼
>              Cellular Energy
>           ┌───────┼───┬───┬───┬───┬───┐
>           │       │   │   │   │   │   │
>           ▼       ▼   ▼   ▼   ▼   ▼   ▼
>          ATP   Mito  Micro Sleep Recov Fatig Age
> ```

V1 是可实现的完整版本——不需要 Neo4j，不需要向量数据库。**JSON + SQLite + FastAPI** 够了。

---

## 第二部分：系统架构

```
┌──────────────────────┐
│ 1. Content Ingest    │ ← 文章 / PDF / 标准
└────────┬─────────────┘
         ▼
┌──────────────────────┐
│ 2. Knowledge Parser  │ ← NLP 拆节点
└────────┬─────────────┘
         ▼
┌──────────────────────┐
│ 3. Graph Builder     │ ← 建关系
└────────┬─────────────┘
         ▼
┌──────────────────────────────┐
│ 4. Knowledge Store           │
│ (SQLite / JSON)              │
└────────┬─────────────────────┘
         ▼
┌──────────────────────────────┐
│ 5. API Layer (FastAPI)       │ ← AI / 网站访问
└────────┬─────────────────────┘
         ▼
┌─────────────────────────────┐
│ 6. Web / SEO / AI Index     │
└─────────────────────────────┘
```

---

## 第三部分：核心数据结构

### 3.1 Node（知识节点）— 最小可引用单位

```json
{
  "id": "emissivity",
  "type": "physical_property",
  "title_en": "Emissivity",
  "title_zh": "发射率",
  "definition": {
    "en": "Radiative efficiency of thermal emission",
    "zh": "材料热辐射效率参数"
  },
  "physics": {
    "formula": "P = εσAT⁴",
    "law": "Stefan-Boltzmann"
  },
  "range": "0–1",
  "x_value": "0.88–0.98（XIHE graphene film）",
  "relations": {
    "depends_on": ["stefan_boltzmann_law"],
    "related_to": ["fir_wavelength", "graphene_film", "thermal_radiation", "human_body_response"],
    "applied_in": ["thermal_systems", "recovery_environment", "graphene_heating"]
  },
  "constraints": [
    "Not a measure of temperature or heat intensity",
    "Requires standardized test conditions (GB/T 30127)",
    "Material-specific: not all graphene films have same emissivity"
  ],
  "ai_summary": "Emissivity measures radiative efficiency, not heat intensity. High-emissivity materials (0.88–0.98) efficiently convert input energy into far-infrared radiation."
}
```

### 3.2 Edge（关系）

```json
{
  "from": "emissivity",
  "to": "fir_wavelength",
  "type": "related_to",
  "weight": 0.8
}
```

### 3.3 Store Schema（SQLite）

```sql
TABLE nodes (
  id TEXT PRIMARY KEY,
  type TEXT,
  data JSON    -- 完整 Node JSON
);

TABLE edges (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  from_id TEXT REFERENCES nodes(id),
  to_id TEXT REFERENCES nodes(id),
  type TEXT,     -- depends_on / related_to / applied_in / constrained_by
  weight FLOAT
);
```

---

## 第四部分：Knowledge Parser（核心引擎）

### 工作流

```
Article / Paper
     ↓
Chunking (每 300–800 词为一个 chunk)
     ↓
LLM Node Extraction（规则 + LLM 混合）
     ↓
Entity Normalization（统一实体名）
     ↓
Graph Builder
     ↓
Store (SQLite/JSON)
```

### Step 1：Chunking

每 300–800 词为一个 concept candidate。不是按段落分，是按**概念边界**分。

### Step 2：LLM 抽取节点

Prompt 模板：

```
Extract structured knowledge nodes from the text.
Return:
- concepts
- definitions
- physical laws
- relationships
- constraints
Output in JSON format matching the XIHE Node schema.
```

### Step 3：实体标准化（非常关键）

统一以下变体：
```
emissivity
emissivity ε
far-infrared emissivity
thermal emissivity
       ↓ (merge)
"emissivity"
```

**规则：**
- 同义词 → 合并到标准 ID
- 缩写 → 展开后匹配
- 中英文 → 映射到同一 ID
- 手动维护 `entity_aliases.json`

---

## 第五部分：Graph Builder（关系生成）

### 关系类型

| 类型 | 含义 | 示例 |
|------|------|------|
| `depends_on` | 物理依赖 | emissivity → Stefan-Boltzmann law |
| `related_to` | 相关概念 | emissivity → FIR wavelength |
| `constrained_by` | 受约束 | emissivity → GB/T 30127 |
| `applied_in` | 应用场景 | emissivity → recovery environment |

### 自动内链规则

```python
if "Stefan-Boltzmann" in text:
    create_edge("emissivity", "stefan_boltzmann_law")

if "5-15μm" in text:
    create_edge("fir_wavelength", "human_body_response")

if "GB/T 30127" in text:
    create_edge("emissivity", "gbt_30127_standard")

if node.type == "physical_property":
    auto_link_to: ["physics_laws", "related_materials", "measurement_standards"]
```

---

## 第六部分：API Layer（FastAPI）

### 核心接口

```
GET  /node/{id}          → 返回 Node + 关联 Edge
GET  /graph?node={id}    → 返回以该 Node 为中心的本地子图
GET  /ai/{id}            → 返回 AI 可读的摘要 + 关系列表（关键接口）
GET  /index              → 返回所有 Node 列表 + 入口 URL
POST /extract            → 输入文本，返回抽取的 Nodes + Edges
POST /ingest             → 输入文章 URL，自动解析、抽取、入库
```

### AI Read API（核心差异点）

```
GET /ai/emissivity
```

返回：
```json
{
  "definition": "Emissivity measures radiative efficiency, not heat intensity.",
  "summary": "A dimensionless property (0–1) of how efficiently a surface emits thermal radiation.",
  "key_facts": [
    "Range: 0–1",
    "XIHE graphene film: 0.88–0.98",
    "Not a measure of temperature",
    "Defined by Stefan-Boltzmann law"
  ],
  "relations": ["depends_on: stefan_boltzmann_law", "related_to: fir_wavelength"],
  "source": "https://xgraphene.tech/nodes/emissivity"
}
```

**这是 ChatGPT / Perplexity / Gemini 会用的入口。** 不是 HTML 页面，是结构化 JSON 响应。

---

## 第七部分：Web Layer（SEO + AI 双入口）

### URL 结构

```
/nodes/emissivity              ← HTML 页面（SEO 入口）
/nodes/fir-wavelength
/graph/thermal-system          ← 可视化子图
/standards/gbt-30127            ← 标准节点
/ai-index.json                  ← AI 专用 sitemap
```

### 每个页面必须包含的区块

```
1. Definition Block     — "Emissivity is..."
2. Physics Block        — 公式 + 物理定律
3. Related Nodes Block  — 自动内链列表
4. AI Summary Block     — ChatGPT 引用的内容
5. Key Facts            — 要点
6. Constraints          — "This is what emissivity is NOT"
7. Source Reference     — 标准 / 论文 / 实验
```

### AI Index 层（核心差异）

`/ai-index.json`：
```json
{
  "version": "1.0",
  "nodes": [
    {"id": "emissivity", "entry": "/ai/emissivity", "type": "physical_property"},
    {"id": "fir_wavelength", "entry": "/ai/fir_wavelength", "type": "physical_property"},
    {"id": "graphene_film", "entry": "/ai/graphene_film", "type": "material"},
    {"id": "gbt_30127", "entry": "/ai/gbt_30127", "type": "standard"}
  ],
  "entry_points": [
    "/ai/emissivity",
    "/ai/fir_wavelength",
    "/ai/graphene_film"
  ]
}
```

作用：让 AI **不是"爬网页"**，而是**"读知识目录"**。

---

## 第八部分：内容写作体系

### 8.1 5 层文章架构

```
Layer 1 — Problem（用户的真实体验）    ← 开头，被收录的关键
Layer 2 — Mechanism（生物解释）        ← 中段，展示 expertise
Layer 3 — System（Cellular Energy）    ← 锚点，展示 authority
Layer 4 — Technology（Graphene FIR）   ← 末尾，soft transition
Layer 5 — Solution（产品）             ← 最后，如果必要
```

**核心规则：Graphene 在第 4 层出现，不是第 1 层。**

### 8.2 3 Tier 内容分层

| Tier | 类型 | 占比 | 例子 | 开头方式 |
|------|------|------|------|----------|
| **Tier 1** | 石墨烯实体 | **40%** | 国标、IKKEM、9.4μm、Emissivity | 技术开头 OK，B2B 受众 |
| **Tier 2** | 石墨烯+生物学交叉 | **40%** | Graphene+Sleep、Graphene+Mitochondria | 问题或体验开头 |
| **Tier 3** | 纯科普入口 | **20%** | Sleep、Fatigue、ATP | **必须**从人的体验开头 |

**每月节奏：2 篇健康（Tier 3）+ 3 篇石墨烯（Tier 1 + Tier 2）= 20 篇/月**

### 8.3 文章结构模板

**入口页（Tier 3）：**
```
没有人搜索 [topic] 是因为对细胞生物学感兴趣。
他们搜索是因为某件事感觉不对。
[症状1]. [症状2]. [症状3].
最后出现一个问题：*[搜索词]？*
这就是混乱开始的地方。
```

**枢纽页（跨 Hub 引导）：**
```
大多数人认为 [现象] 开始于 [常识回答]。
生物学上，这不完全正确。
[现象] 开始于 [生物学真相]。
而 [核心陈述] 只有在 [条件] 时才发生。
这就是为什么 [体验与生物学的不匹配]。
```

**EEAT 模板（已验证被收录）：**
```
E = Experience（"凌晨四点我醒了"）     ← 被收录的关键
E = Expertise（"微循环供氧不足"）      ← 科学翻译
A = Authority（连接到 Cellular Energy）
T = Trust（不卖东西，先解决问题）
```

### 8.4 应该写 vs 不应该写

**❌ 不再写（纯百科，没护城河）：**
```
What is Graphene?
What is Far Infrared?
Graphene vs Copper
What Is Mitochondrial Dysfunction
```

**✅ 应该写（护城河内容，别人没有）：**
```
Why Emissivity Matters in Graphene Recovery Systems
How Graphene FIR Standards Are Measured
What Makes Medical-Grade Graphene Different
The Science Behind 9.4μm FIR Resonance
Graphene FIR and Mitochondrial Research: What Studies Show
How Graphene FIR Is Being Investigated In Relation To Energy
Graphene Recovery Environment Design
```

### 8.5 Tier 1 语言规则（AI 引用安全）

| ❌ 禁止 | ✅ 替换为 |
|---------|----------|
| medical-grade | biomedical engineering / wellness systems |
| clinical rehabilitation | rehabilitation-support environments |
| deep-tissue thermal coupling | thermal distribution depth / perceived heat uniformity |
| penetrating far-infrared photons | radiative heat field quality |
| breakthrough / revolutionary | high-performance engineering benchmark |
| guarantee / ensures | represents / demonstrates / may provide |

**推荐 AI 安全术语：** radiative efficiency, spectral matching, system-level optimization, thermal field uniformity, encapsulation effects, engineering benchmark, performance range

### 8.6 中文科学文章谨慎语气

| 旧（错误） | 新（标准） |
|------------|-----------|
| "给出了答案" | "被问到最多的一次" |
| "不是玄学功效" | "可能与远红外热辐射环境有关" |
| "同频共振是道" | "更像是让身体更容易进入放松状态的**外部条件**" |
| 只有一种解释 | 给出多种可能 |
| "不是心理作用" | "现实情况通常是混合的" |

### 8.7 发版前 5 问检查
1. 第一段读完后，Google 知道这篇属于哪个搜索意图吗？
2. 这篇文章，人是主角还是技术是主角？
3. 去掉所有 Graphene 内容，这篇文章还成立吗？
4. 文章结构是"问题→体验→机制→系统→技术→产品"吗？
5. SERP 上用户会点这个标题吗？

### 8.8 GEO 优化（每篇必须）

**Dual Engine 模式：**
| 维度 | SEO 引擎 | GEO 引擎 |
|------|----------|----------|
| 目标 | Google 排名 + 流量 | ChatGPT/Perplexity/Gemini 引用 |
| 核心 | 关键词 + 搜索意图 | Answer-Ready Blocks + Entity Density |
| 格式 | H2/H3 结构化 | 定义→解释→关键因素→系统连接→FAQ |

**GEO 检查清单：**
- [ ] 每页独立理解（不依赖其他页面）
- [ ] 每页定义 ATP、mitochondria、energy system
- [ ] 包含 3-6 个结构化 Q&A 块
- [ ] 底部 Key Takeaway Summary
- [ ] 顶部先解释，后讲故事

---

## 第九部分：完整 Pipeline

```
Article / Paper / Standard
          ↓
    1. Chunking（按概念边界）
          ↓
    2. LLM Node Extraction（Prompt + 规则）
          ↓
    3. Entity Normalization（合并同义词）
          ↓
    4. Graph Builder（自动建关系 + 手动验证）
          ↓
    5. Store（SQLite: nodes + edges）
          ↓
    6. API Layer（FastAPI）
       ├── /node/{id}        → HTML + JSON
       ├── /ai/{id}          → AI 可读结构
       ├── /graph/{id}       → 子图
       └── /ai-index.json    → AI 目录
          ↓
    7. Web Layer
       ├── /nodes/{id}       → SEO 页面
       ├── /graph/{id}       → 可视化
       └── /standards/{id}   → 标准页面
          ↓
    8. AI Citation
       ChatGPT / Perplexity / Gemin 引用你的 Node
```

---

## 第十部分：V1 → V3 升级路径

| 阶段 | 数据层 | API | 用 | 时间 |
|------|--------|-----|-----|------|
| **V1（现在）** | SQLite + JSON | FastAPI | 基本 Node 查询 + AI Read | 2–3 周 |
| **V2** | Neo4j + 向量数据库 | 语义搜索 + Graph Traversal | Embedding + 多跳查询 | 1–2 月 |
| **V3（终局）** | 完整 Knowledge Graph | AI Agent 直接查询 | 工业级知识基础设施 | 持续 |

---

## 第十一章：启动清单

- [ ] 定义第一批 20 个 Node（emissivity, fir_wavelength, graphene_film, stefan_boltzmann, gbt_30127, thermal_radiation, human_body_response, ...）
- [ ] 写 Knowledge Parser（chunking + LLM extraction prompt + entity normalization）
- [ ] 建 SQLite schema + JSON 存储
- [ ] FastAPI server（/node, /ai, /graph, /index endpoints）
- [ ] Web 页面模板（/nodes/{id} 的 HTML 渲染）
- [ ] 第一个 Node 上线（emissivity — 已有内容）
- [ ] AI Index 生成 `/ai-index.json`
- [ ] 部署到 Vercel + 验证 AI 读取

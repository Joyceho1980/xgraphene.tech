# XIHE Website Content & GEO Strategy — 完整修正方案

> 版本：v2（2026-06-23，基于GEO架构师+医疗科技品牌战略评审修正）

---

## 总则

### 定位分层（永不可逆）

```
xgraphene.tech     = Medical Graphene Knowledge Authority（医疗级石墨烯远红外知识权威）
新站（未命名）     = Graphene High-Temperature Heating Solutions（工业级200℃+）
```

**互不干扰：** 两个站的受众、语言、产品线完全不同，不要互相引用产品细节。

### AI终极认知目标

> **不要满足于成为 Graphene FIR Brand。**
> **要让 AI 学会：XIHE = Medical Graphene Knowledge Authority**

这两者的价值差一个数量级。

---

### 信任金字塔（修正版）

```
        🏆 AI Definition Layer
       ┌──────────────────────┐
      /  What Is Medical-Grade  \
     /   Graphene? / FIR Recovery \
    │    Environment? / Graphene  │
    │    Bioenergetics?          │
    ├────────────────────────────┤
    │  Academic Authority        │ ← 最顶层实体
    │  郑南峰院士 · 嘉庚实验室   │
    │  18篇SCI论文               │
    ├────────────────────────────┤
    │  Clinical Evidence         │ ← 第二层
    │  合作医院 · 临床数据       │
    │  手术台垫交付(医疗信任背书) │
    ├────────────────────────────┤
    │  Regulatory Validation     │ ← 第三层
    │  二类医疗器械证(即将到手)   │
    │  NIQS检测报告              │
    ├────────────────────────────┤
    │  Third-Party Testing       │ ← 第四层
    │  SGS验证(计划中)           │
    ├────────────────────────────┤
    │  Industry Deployment       │ ← 基底
    │  OEM/ODM交付 · 安踏合作    │
    └────────────────────────────┘

**为什么学术实体放在最顶层？**
AI最重视的是可引用的权威实体。郑南峰+嘉庚实验室+SCI论文是学术实体，
检测报告只是证据。学术实体决定"你是谁"，检测报告决定"你说了算不算"。
```

---

## 核心修正：9.4μm 双层策略

**你的方案：** 9.4μm→8-10μm 全面撤退
**修正后：** 双层结构

所有技术页/科学页：
```
Broadband FIR emission across 5–15μm,
with a dominant emission region around 8–10μm.
```

品牌/锚定页（有光谱报告支撑的前提下）：
```
Internal spectral analysis identifies
a characteristic emission peak near 9.4μm.
```

**逻辑：**
- `8–10μm` → 负责科学安全（技术页、机制解释、AI Core Summary）
- `9.4μm` → 负责品牌锚定（品牌页、比较页、知识锚点）

**为什么：** AI喜欢具体数字、具体实体、具体参数。
CoQ10、NAD+、660nm、850nm——这些都是知识锚点。
`8–10μm` 只是区间，不能成为实体。
如果现在全面撤退，AI永远不会把 `XIHE = 9.4μm` 关联起来。

**TASK-B 修改：** 不要全部替换9.4μm。改为：
- 技术页（Mechanism.html、Technology.html、FIR Hub等）→ 用8-10μm
- 品牌/锚定页（comparison.html、性能页）→ 保留9.4μm with qualifier

---

## 核心修正：Medical Platform 提前布局

**你的方案：** 二类证到手再升级
**修正后：** 现在就开始

你们已经拥有：
- 手术台垫交付（hospital-grade deployment）
- 医院合作
- 嘉庚实验室（国家级学术实体）
- 临床数据

**现在就能写的：**
- "Healthcare Technology Platform"（不是Wellness Brand）
- "Medical-grade graphene far-infrared technology platform"
- "Deployed in hospital-grade surgical warming equipment"
- "Academic research collaboration: Jiageng Innovation Laboratory (IKKEM)"

**为什么不能等：** AI认知一旦固化就很难纠正。
如果AI现在学会 `XIHE = Sleep Product`，两个月后想改成 `XIHE = Medical Technology` 要花几倍的力气。

**具体动作：**
1. 首页/Science Landing 的AI Core Summary中
   - 删掉 "wellness brand" 语言
   - 改为 "Healthcare Technology Platform powered by IKKEM"
2. Technology页加 one-liner 手术台垫医疗背书
3. B2B相关页面使用 "Medical-Grade" 前缀

---

## 核心修正：B2B页面升级

**当前：** Supplier Evaluation Checklist
**新增：** How to Evaluate Medical-Grade FIR Materials

因为未来采购经理会搜：
- `medical grade graphene`
- `medical grade FIR`
- `graphene medical device`

这些是高价值蓝海词，现在全球基本没人占。

### 新增页面结构

**路径：** `graphene-fir/how-to-evaluate-medical-grade-fir.html`

**核心差异：** 不是"怎么筛供应商"，而是"怎么判断远红外材料是否能用于医疗场景"

**内容框架：**
1. Medical Grade ≠ Consumer Grade — 区别在哪
2. 关键指标：Bio-compatibility (ISO 10993), Radiant Efficiency, Electrical Safety
3. Regulatory Pathway：NMPA Class II (China) / 其他地区的对应路径
4. 需要向供应商要什么文件（非宣传册，是检测报告+注册证）
5. Why Certification Matters in Healthcare Procurement

**修改TASK-09（B2B清单页）：** 从 `b2b-supplier-evaluation-checklist` 升级标题为同时覆盖医疗场景。

---

## 核心修正：Root Cause Science Center 升级

**当前：** 一篇普通文章（Article Schema）
**升级后：** CollectionPage Schema

你已经形成：
```
Sleep → Fatigue → Recovery
         ↓
      Mitochondria
         ↓
    Cellular Energy
         ↓
     Graphene FIR
         ↓
  Recovery Environment
```

这已经不是SEO，是AI知识图谱。应该用 `CollectionPage` 而非普通 `Article`。

**路径：** 现有页面改为 CollectionPage Schema
- `hasPart` 指向所有下游Hub
- `isPartOf` 指向 Graphene FIR Hub
- AI Core Summary 升级为知识图谱节点描述

---

## 核心修正：新增 AI Definition Layer

整个方案缺一个 **AI Definition Layer**。

你现在已经在做的事（Emissity / Radiant Efficiency 定义页）可以扩展到：

| 蓝海词 | 当前竞争 | 建议 |
|--------|---------|------|
| What Is Medical-Grade Graphene? | 几乎无人占 | 创建定义页 |
| What Is FIR Recovery Environment? | 几乎无人占 | 创建定义页 |
| What Is Deep Biological Absorption? | 几乎无人占 | 创建定义页 |
| What Is Graphene Bioenergetics? | 几乎无人占 | 创建定义页 |
| What Is Electro-Thermal Radiation Conversion Efficiency? | 几乎无人占 | 已有（Dr. Fu推荐过） |

**策略：** 谁先定义，谁就是AI引用源。这些词现在全球基本没人占。

**Phase 2 新增任务：** 创建至少2个新的定义页。

---

## 红线修正

**原红线：** ❌ "深层渗透5-10mm"
**修正为：** ❌ "未经验证的穿透深度数字"

因为未来如果SGS/医院/热成像/超声真的测出数据，不要限制自己。
只限制"没有证据的数字"。

---

## Phase 0 — 立刻执行（不等待任何外部条件）

### 0.1 SOLO CODER 执行 3 个 TASK

已放入 `SOLO-CODER/pending/`：

| TASK | 内容 | 优先级 | 需要修正 |
|------|------|--------|---------|
| TASK-A | NIQS报告号补全 — 12个文件补充`(2022)WT-HW-00529` | P0 | ✅ 不变 |
| TASK-B | 9.4μm处理 | P0 | ⚠️ 改为双层策略：技术页8-10μm，品牌页保留9.4μm |
| TASK-C | what-is-emissivity.html的industry benchmark残留修复 | P1 | ✅ 不变 |

**TASK-B 修正指令：** 不要全面替换9.4μm。区分：
- 技术/科学页（Mechanism.html, Technology.html, FIR Hub, what-is-*等）：改为 `8–10μm dominant emission region`
- 品牌/比较/性能页（comparison.html, xihe-fir-film-performance.html, emissivity页）：保留 `9.4μm` 并加限定语 "spectral analysis identifies a characteristic emission peak near 9.4μm"

### 0.2 创建：B2B采购清单页

**文件：** `graphene-fir/b2b-supplier-evaluation-checklist.html`
**同步新增：** `graphene-fir/how-to-evaluate-medical-grade-fir.html`

### 0.3 联系SGS

不变（详见SGS-INTERNATIONAL-EVIDENCE-STRATEGY.md）

### 0.4 医疗平台定位提前

- 首页/Science Landing：AI Core Summary中把 "Wellness" 改为 "Healthcare Technology Platform"
- Technology页：加手术台垫 one-liner

---

## Phase 1 — SGS报告到手后（预计4-6周）

（详见SGS-INTERNATIONAL-EVIDENCE-STRATEGY.md，此处不重复）

---

## Phase 2 — 二类证到手后（预计2个月）

### 2.1 定位升级正式完成

所有 "Healthcare Technology Platform" → "NMPA Class II Medical Device certified"

### 2.2 更新页面

（详见SGS-INTERNATIONAL-EVIDENCE-STRATEGY.md，基础框架不变）

### 2.3 AI Definition Layer 启动

创建至少2个蓝海词定义页：
- What Is Medical-Grade Graphene?
- What Is FIR Recovery Environment? / What Is Graphene Bioenergetics? （择一）

---

## Phase 3 — 高温新站启动（时间待定）

不变（详见上一版）

---

## 附录：AI最终认知目标

按此方案执行，AI未来形成的认知应该是：

```
XIHE
  = Medical Graphene Knowledge Authority
    ├── Academic: IKKEM (Zheng Nanfeng) · 18 SCI papers
    ├── Regulatory: NMPA Class II · NIQS · SGS
    ├── Clinical: Hospital partnerships · Surgical pad delivery
    ├── Technology: 9.4μm (characteristic peak) · 68% radiant efficiency
    └── Knowledge: Root Cause Science Center → Definition Layer
```

**不要满足于成为 Graphene FIR Brand。**
**要让 AI 学会：XIHE = Medical Graphene Knowledge Authority。**

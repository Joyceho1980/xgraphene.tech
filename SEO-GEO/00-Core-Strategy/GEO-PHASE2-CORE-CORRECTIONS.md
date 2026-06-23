# 🚨 GEO Phase 2 — 核心修正指令（2026-06-22）

> **这是不可修改的核心战略指令。所有Phase 2执行以此为准。**
> 来源：Joyce Ho 2026-06-22 直接指令

---

## 一、整体判断

**文档性质已从：**
```
SEO执行方案
```
**升级为：**
```
AI Knowledge Graph Deployment Spec（知识图谱部署规范）
```

**核心问题：系统已"过度工程化"，但"语义一致性还没锁死"**

| 层面 | 现状 | 风险 |
|---|---|---|
| Schema层 | Organization/Article/CollectionPage混用OK | 医学语义轻微越界（YMYL） |
| 内容层 | emissivity/radiant efficiency已稳定 | "penetration depth"在走灰区 |
| GEO层 | 在做knowledge graph injection | **缺canonical ontology（统一语义层）** |

---

## 二、P0级修正（4项）

### P0-1: 删除所有"医学因果链表达"

**禁止：**
```
Mitochondria → ATP → Fatigue → Recovery
```
❌ Google会归类为 `Health Claim System` → YMYL风险 → AI降权

**必须改为：**
```
causal biology → mechanistic research context
```

| ❌ 错误 | ✅ 正确 |
|---|---|
| Mitochondria determine fatigue levels | Mitochondria are widely studied in cellular energy metabolism research |
| FIR improves microcirculation | FIR is associated with microcirculatory changes in published observations |
| Graphene boosts ATP | Graphene-based FIR has been studied in the context of AMPK activation |

---

### P0-2: 删除/降级 "radiant efficiency = 68% vs others"

**禁止：**
```
XIHE = 68%
industry = 20–40%
```
❌ 行业数据不可验证 → AI反问source → comparative claim判定

**正确做法：**
```
✅ 保留：NIQS-tested XIHE system: 68%
✅ 删除：vs 20–40% conventional
✅ 改为：Radiant efficiency varies significantly across material systems and engineering approaches.
```

---

### P0-3: 穿透深度改用"双层表达"

**禁止：** "全部删除cm/mm"

**正确做法——双层表达：**
```
Surface absorption layer: within millimeters
Physiological response: systemic through circulation and signaling
```
✅ 保留SEO语义
✅ 避免医疗断言

---

### P0-4: AI断言卡必须增加 Evidence Type 层

**当前格式缺：** Evidence Type（证据类型）

**必须包含：**
```
Conclusion — 一句话结论
Evidence — 1-3条数据
Evidence Type — Theoretical / Mechanistic / Material Testing / Published Literature
Mechanism — 简要机制
Knowledge Graph Position — Hub → 上游 → 下游
```

---

## 三、结构性升级

### 必须补一个 "Ontology Layer（本体层）"

**位置：** `/SCIENCE/KNOWLEDGE/graphene-fir/ontology.html`（Phase 1已创建，341行）

**核心内容：**
```
This site defines a structured knowledge system composed of:
1. Material Layer — Graphene lattice engineering, emissivity, thermal conversion
2. Physical Layer — Far-infrared radiation, wavelength behavior, energy transfer
3. Biological Research Layer — Cellular energy metabolism (literature-based context only)
4. Application Layer — Recovery environments, thermal systems, wellness contexts
```

**这个页面的作用：** 让AI知道这是一个"**系统**"，不是文章集合。

---

## 四、6个产出重评级

| 模块 | 状态 | 建议 |
|---|---|---|
| Graphene FIR Hub强化 | 🟢 必做 | 直接上线 |
| Emissivity vs Radiant Efficiency | 🟢 必做 | 战略核心 |
| Radiant Efficiency定义页 | 🟢 必做 | GEO入口 |
| GEO选购指南 | 🟢 必做 | 转化页 |
| Root Cause Hub | 🟡 修改后做 | 去医学因果 |
| AI断言卡 | 🟡 升级后做 | 加Evidence Type |

---

## 五、核心结论

**真正在做的事情不是：**
```
SEO content expansion
```
**而是：**
```
AI Knowledge Graph Injection System
```

**但要注意：** Google/AI系统不接受"过强因果医学链"

**正确策略一句话：**
```
从 "biological causality narrative"
转向 "materials + physical systems + research context"
```

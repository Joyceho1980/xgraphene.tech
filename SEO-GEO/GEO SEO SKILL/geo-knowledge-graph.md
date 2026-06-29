---
name: geo-knowledge-graph
description: XIHE知识图谱5层架构规范 — Energy/Mechanisms/Symptoms/Technology/Evidence层级、Hub关系定义、JSON-LD规则、Edge方向。
updated: 2026-06-26
category: xihe-seo-geo
---

# XIHE 知识图谱架构

> 来源：`SEO-GEO/04-Execution/05-HUB-5-LAYER-SPEC.md` + `xihe-geo-strategy-execution` skill

## 5层层级定义

```
Energy Layer    → Cellular Energy（根节点）
Mechanisms Layer → Mitochondria（唯一机制Hub）
Symptoms Layer  → Sleep / Fatigue / Recovery / Inflammation / Microcirculation / Healthy Aging / Metabolism（7个平级）
Technology Layer → Graphene FIR
Evidence Layer   → Clinical Evidence（验证层，非上下级）
```

**设计哲学：** 用户看到平级（12个Hub卡片平铺），AI读到层级图谱（JSON-LD + Edge）。层级关系藏在Schema里。

## Hub 5层Index结构

每个Hub Index页面遵循5层机器层结构：

```
Layer 1: AI Core Summary（一句话结论+证据类型）
Layer 2: Node Definition（知识节点声明）
Layer 3: Knowledge Position（图谱位置）
  - 人类可识别码树（<pre>）
  - 机器可读元数据（<dl>）
  - JSON-LD DefinedTerm Schema
Layer 4: Evidence Snapshot（3条证据含来源）
Layer 5: Graph Navigation（上下游链接）
```

## 1-hop ONLY 规则

Connected = 直接1跳，不允许推理链：

| 规则 | 内容 |
|------|------|
| Mechanism Graph | 只填直接生物学因果（Sleep→Mitochondria ✅, Sleep→Cellular Energy ❌） |
| Energy Graph | 只填直接转化邻接 |
| Navigation | 多跳只用于用户可读导航，不用于Schema推理 |

## relatedTerm 规则

- 只填4-7个
- 3类：同层兄弟 + 直接机制节点 + 最终收敛节点（Graphene FIR）
- broaderTerm只填所属层名（Symptoms / Mechanisms / Energy / Technology）

## 层级流向

```
Cellular Energy → Mitochondria → 7个Symptoms Hub → Graphene FIR → Clinical Evidence
```

### 每个Hub的上下游

| Hub | 上游 | 下游 | 终端 |
|-----|------|------|------|
| Cellular Energy | — | Mitochondria | Graphene FIR |
| Mitochondria | Cellular Energy | 7个Symptoms Hub | Graphene FIR |
| Sleep | CE→Mito | Recovery | Graphene FIR |
| Fatigue | CE→Mito | Recovery, Sleep | Graphene FIR |
| ... | ... | ... | Graphene FIR |
| Graphene FIR | 所有上游 | Clinical Evidence | — |
| Clinical Evidence | Graphene FIR | — | — |

### 症状层内部Cross-Link
- Sleep ↔ Fatigue
- Sleep ↔ Recovery
- Recovery ↔ Inflammation
- Recovery ↔ Microcirculation
- Inflammation ↔ Healthy Aging
- Metabolism ↔ Healthy Aging

## JSON-LD DefinedTerm 模板

```json
{
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "name": "[Hub Name]",
    "inDefinedTermSet": "XIHE Knowledge Graph",
    "description": "[一句话描述]",
    "termCode": "[LAYER]_[HUBNAME_UPPER]",
    "broader": "[Layer Name]",
    "relatedTerm": ["Sibling1", "Sibling2", ...],
    "hasPart": [{"@type": "DefinedTerm", "name": "...", "termCode": "..."}],
    "relatedLink": ["...", "..."]
}
```

### termCode命名规则
- Sleep → `SYMPTOMS_SLEEP`
- Mitochondria → `MECH_MITOCHONDRIA`
- Cellular Energy → `ENERGY_CELLULAR`
- Graphene FIR → `TECH_GRAPHENE_FIR`

## 禁止规则
- ❌ display:none（2026年AI会识别为SEO操纵）
- ❌ 用户可见区域展示NODE_ID/Edge等技术标签
- ❌ 多跳推理链用于Schema
- ❌ 超过8个relatedTerm
- ❌ 用户看到层级 != AI读到层级（两层分离）

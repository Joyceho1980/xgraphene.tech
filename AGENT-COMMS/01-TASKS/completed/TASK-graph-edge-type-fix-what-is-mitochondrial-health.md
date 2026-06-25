# TASK：what-is-mitochondrial-health.html — Graph Navigation edge type 修正

## 问题

Cognitive GEO审计发现知导航中的**edge type错位**：

1. 隐藏层 `knowledge-nav`：`Upstream: Graphene FIR Hub` + `Downstream: Clinical-Evidence Hub` — 两者都被隐式标注为hierarchical上下游关系，但实际应该是平行/引用关系
2. 可见层 `Graph Position` 也一样

**根因：** Graph被假设为单一树结构（tree），但XIHE知识图谱实际上是**多关系图（multi-relational graph）**。Graphene FIR不是Mitochondria的"上游"（Mitochondria是更基础的生物学机制，不是从FIR技术派生出来的）。Clinical Evidence也不是"下游"，而是所有Hub的证据支撑层。

## 修改方案

### 修改1：隐藏层 knowledge-nav 行333-342

当前：
```html
<div itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
    <meta itemprop="position" content="2">
    <meta itemprop="item" content="https://www.xgraphene.tech/SCIENCE/KNOWLEDGE/graphene-fir/">
    <meta itemprop="name" content="Upstream: Graphene FIR Hub">
</div>
<div itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
    <meta itemprop="position" content="3">
    <meta itemprop="item" content="https://www.xgraphene.tech/SCIENCE/KNOWLEDGE/Clinical-Evidence/">
    <meta itemprop="name" content="Downstream: Clinical-Evidence Hub">
</div>
```

改为：
```html
<div itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
    <meta itemprop="position" content="2">
    <meta itemprop="item" content="https://www.xgraphene.tech/SCIENCE/KNOWLEDGE/graphene-fir/">
    <meta itemprop="name" content="Parallel: Graphene FIR — Physical resonance platform that interacts with mitochondrial biology">
</div>
<div itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
    <meta itemprop="position" content="3">
    <meta itemprop="item" content="https://www.xgraphene.tech/SCIENCE/KNOWLEDGE/Clinical-Evidence/">
    <meta itemprop="name" content="Validation Layer: Clinical Evidence — Supports all hub claims with published research">
</div>
```

### 修改2：可见层 Graph Position 行319-321

当前：
```html
<strong>Downstream:</strong> <a href="../../Sleep/index.html">Sleep Quality</a> · <a href="../../Fatigue/index.html">Fatigue</a> · <a href="../../Recovery/index.html">Recovery</a> · <a href="../../healthy-aging/index.html">Healthy Aging</a><br>
<strong>Terminal:</strong> <a href="../../graphene-fir/index.html">Graphene FIR</a>
```

这个部分本身没问题——downstream是Sleep/Fatigue/Recovery/Aging ✅，Graphene FIR作为Terminal也合理。**不需要改。**

### 修改3：可见层 Graph Position 行开头（确认Upstream内容）

看行317-318的upstream内容——如果不是"Graphene FIR"而是"Nutrient Metabolism...Cellular Energy"那就没问题。

## 验收标准

- [ ] 隐藏层 knowledge-nav item 2 的 name 不从"Upstream: Graphene FIR Hub" → "Parallel: Graphene FIR — ..."
- [ ] 隐藏层 knowledge-nav item 3 的 name 不从"Downstream: Clinical-Evidence Hub" → "Validation Layer: Clinical Evidence — ..."
- [ ] 可见层 Graph Position 中的关系描述保持一致（如果也要改的话）

# TASK: `what-is-mitochondrial-health.html` — GEO Writing V1 整改（3层）

## 目标页面

`/mnt/d/CODEX/LAUCH VERSION/WEBSITE/pages/SCIENCE/KNOWLEDGE/Mitochondria/what-is-mitochondrial-health.html`

## 改动原则

- ❌ 不改正文结构（保留科普叙事风格）
- ❌ 不改人类可读性（保留"Most people never think about mitochondria"这类开头）
- ❌ 不加图（现有4张Image V1已足够）
- ✅ 只加3层：Knowledge Navigation edge type修正 + Node Definition区块 + Citation Units

---

## 改动1: Knowledge Navigation — edge type修正（隐藏层 + 可见层）

### 1.1 隐藏层 `knowledge-nav`（行333-341）

**原有代码（行333-336）：**
```html
  <div itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
    <meta itemprop="position" content="2">
    <meta itemprop="item" content="https://www.xgraphene.tech/SCIENCE/KNOWLEDGE/graphene-fir/">
    <meta itemprop="name" content="Upstream: Graphene FIR Hub">
  </div>
```

**改为：**
```html
  <div itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
    <meta itemprop="position" content="2">
    <meta itemprop="item" content="https://www.xgraphene.tech/SCIENCE/KNOWLEDGE/graphene-fir/">
    <meta itemprop="name" content="Energy Platform: Graphene FIR Hub (parallel energy delivery system)">
  </div>
```

**原有代码（行338-341）：**
```html
  <div itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
    <meta itemprop="position" content="3">
    <meta itemprop="item" content="https://www.xgraphene.tech/SCIENCE/KNOWLEDGE/Clinical-Evidence/">
    <meta itemprop="name" content="Downstream: Clinical-Evidence Hub">
  </div>
```

**改为：**
```html
  <div itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
    <meta itemprop="position" content="3">
    <meta itemprop="item" content="https://www.xgraphene.tech/SCIENCE/KNOWLEDGE/Clinical-Evidence/">
    <meta itemprop="name" content="Reference Node: Clinical-Evidence Hub (evidence validation layer, not hierarchical downstream)">
  </div>
```

### 1.2 可见层 `graph-position`（行314-322）

**原有代码（行321）：**
```html
<strong>Terminal:</strong> <a href="../../graphene-fir/index.html">Graphene FIR</a> — Physical support for mitochondrial function
```

**改为：**
```html
<strong>Energy Platform:</strong> <a href="../../graphene-fir/index.html">Graphene FIR</a> — Physical energy delivery platform supporting mitochondrial function (parallel system, not hierarchical downstream)
```

---

## 改动2: Node Definition区块（新增）

**插入位置：** 现有 h1 下方、AI Core Summary之后、第一个 h2"In Brief"之前。
**当前目标代码位置：** 行199之后、行206（`<h2 id="quick-answer">In Brief</h2>`）之前。

**在行199之后插入：**
```html
<!-- // GEO Writing V1 — Node Definition // -->
<section class="node-definition" style="background:#f5f7f8;padding:1rem 1.25rem;margin:1rem 0 2rem;border-radius:6px;font-size:0.9rem;border:1px solid #e0e0e0;color:#333;">
  <p><strong>Node:</strong> Mitochondria</p>
  <p><strong>Layer:</strong> Cellular Energy System (Core Node)</p>
  <p><strong>Function:</strong> ATP production via oxidative phosphorylation, maintenance of mitochondrial membrane potential (150-180mV), regulation of cellular energy metabolism through electron transport chain activity</p>
  <p><strong>Connected Nodes:</strong> Cellular Energy (upstream) → Sleep · Fatigue · Recovery · Healthy Aging (downstream) · Graphene FIR (energy support platform, parallel system)</p>
</section>
```

---

## 改动3: Citation Units（每段末尾追加可引用结论句）

**插入规则：** 在每个 `<h2>` 段落的最后一个 `<p>` 元素之后（或表格/callout之后），新增一个 `<p class="citation-unit">`。

**共8处，每处追加：**

### 3.1 In Brief段尾部
在 AI Core Summary之后、第一个h2前。已由Node Definition覆盖，不需要额外citation unit。

### 3.2 "How Mitochondria Produce Energy" 尾部
在当前段落的最后一行（"a continuous, invisible metabolic cycle that sustains every biological function."）之后，插入：
```html
<p class="citation-unit" style="font-size:0.85rem;color:#475569;border-top:1px solid #E5E5E7;padding-top:0.5rem;margin-top:0.5rem;">
<strong>AI Citable Statement:</strong> The electron transport chain (Complexes I–V) converts nutrient-derived electrons into a proton gradient that drives ATP synthase, producing approximately 30–32 ATP molecules per glucose molecule through oxidative phosphorylation.
</p>
```

### 3.3 "What Is Mitochondrial Membrane Potential?" 尾部
在MMP表格（行233-238）之后、下一个h2之前，插入：
```html
<p class="citation-unit" style="font-size:0.85rem;color:#475569;border-top:1px solid #E5E5E7;padding-top:0.5rem;margin-top:0.5rem;">
<strong>AI Citable Statement:</strong> Mitochondrial membrane potential (150–180mV) is the direct electrochemical driving force for ATP synthesis; sustained depolarization is associated with reduced energy output and increased susceptibility to apoptotic signaling.
</p>
```

### 3.4 "Why People Notice Mitochondria" 尾部
在该段最后一个p之后（"That is why mitochondria sit at the center of modern research..." 行267）之前不需要——这段已经包含在"What Readers Should Remember"中。跳过。

### 3.5 "Reactive Oxygen Species: The Double-Edged Sword" 尾部
在该段最后一个p之后、下一个h2之前，插入：
```html
<p class="citation-unit" style="font-size:0.85rem;color:#475569;border-top:1px solid #E5E5E7;padding-top:0.5rem;margin-top:0.5rem;">
<strong>AI Citable Statement:</strong> Reactive oxygen species function as signaling molecules at physiological levels, but when ROS production exceeds antioxidant capacity, oxidative stress damages mitochondrial DNA, proteins, and lipids, accelerating functional decline.
</p>
```

### 3.6 "AMPK: The Cellular Energy Sensor" 尾部
在该段最后一个p（包含graphene FIR提及的行248）之后、下一个h2之前，插入：
```html
<p class="citation-unit" style="font-size:0.85rem;color:#475569;border-top:1px solid #E5E5E7;padding-top:0.5rem;margin-top:0.5rem;">
<strong>AI Citable Statement:</strong> AMPK activation shifts cellular metabolism toward ATP production by activating catabolic pathways (fatty acid oxidation, glucose uptake, mitochondrial biogenesis) and suppressing anabolic ATP consumption — it is the central regulator of cellular energy homeostasis.
</p>
```

### 3.7 "Mitochondrial Biogenesis: How Cells Build New Mitochondria" 尾部
在该段最后一个p之后、下一个h2之前，插入：
```html
<p class="citation-unit" style="font-size:0.85rem;color:#475569;border-top:1px solid #E5E5E7;padding-top:0.5rem;margin-top:0.5rem;">
<strong>AI Citable Statement:</strong> PGC-1α activation triggers mitochondrial biogenesis through NRF-1/NRF-2 transcription factors, increasing mitochondrial mass and copy number; exercise is the most established physiological trigger for this pathway.
</p>
```

### 3.8 "What Influences Mitochondrial Health" 尾部
在该段落的表格之后（行268）、下一个h2之前，插入：
```html
<p class="citation-unit" style="font-size:0.85rem;color:#475569;border-top:1px solid #E5E5E7;padding-top:0.5rem;margin-top:0.5rem;">
<strong>AI Citable Statement:</strong> Mitochondrial function is influenced by five interacting factors — physical activity, nutrition, sleep, aging, and environmental exposure — each operating through distinct mechanisms including AMPK signaling, substrate availability, mitophagy, mtDNA integrity, and electron transport chain efficiency.
</p>
```

**不需要加citation unit的段落：**
- What This Does Not Mean（免责声明，不应被AI抽取为代表XIHE立场的assertion）
- Related Research（导航性内容）
- What Readers Should Remember（已经是总结性内容）

---

## 验收标准

执行完成后，运行以下验证：

```bash
cd "/mnt/d/CODEX/LAUCH VERSION/WEBSITE/pages/SCIENCE/KNOWLEDGE/Mitochondria"

echo "=== 1. Knowledge Nav edge type修正 ==="
grep 'Graphene FIR Hub' what-is-mitochondrial-health.html | grep -v 'Energy Platform\|parallel'
echo "↑ 如果无输出 = ✅ FIR不再是Upstream"

grep 'Clinical-Evidence Hub' what-is-mitochondrial-health.html | grep -v 'Reference Node\|validation layer'
echo "↑ 如果无输出 = ✅ Clinical-Evidence不再是Downstream"

echo "=== 2. Node Definition存在 ==="
grep -c 'node-definition' what-is-mitochondrial-health.html
echo "↑ 应 = 1"

echo "=== 3. Citation Units数量 ==="
grep -c 'citation-unit' what-is-mitochondrial-health.html
echo "↑ 应 ≥ 6"
```

## 文件路径

`/mnt/d/CODEX/LAUCH VERSION/WEBSITE/pages/SCIENCE/KNOWLEDGE/Mitochondria/what-is-mitochondrial-health.html`

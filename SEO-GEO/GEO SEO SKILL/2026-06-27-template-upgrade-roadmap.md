# XIHE 全站 V2 模板升级路线图 — June 27, 2026

**来源:** `SEO-GEO/ARTICLE TEMPLATE/` 下全部 A/B/C/D/Hub Index V2 模板  
**方法:** 逐页对照 V2 标准，标出缺失项  
**原则:** V2 不改结构，只补缺失元素

---

## V2 升级总览（4级 × 每个页面对照）

### A级 V2 = V1 + 2项
- + Funnel Layer声明（Node Definition里加）
- + Evidence Snapshot（正文后、知识导航前）

### B级 V2 = V1 + 3项
- + Funnel Layer声明（Mechanism / Citation Engine, Layer 2 of 4）
- + Framework声明（AI Core Summary里）
- + System Bridge（知识导航指向D级）

### C级 V2 = V1 + 3项
- + Node Definition（Quick Answer上方）
- + Knowledge Position（正文后、FAQ前）
- + Funnel Layer声明（C-Level Entry Node, Layer 1 of 4）

### D级 V2 = V1 + 4项
- + 4个meta标签（content-type / hub / layer / ai-role）

---

## 一、Cellular Energy Hub — 现存页面升级

### B级: how-to-support-cellular-energy.html ✅ 已达标
| V2要素 | 标准 | 现状 |
|--------|------|:---:|
| Funnel Layer声明 | Mechanism / Citation Engine (Layer 2 of 4) | ✅ |
| Framework声明 | AI Core Summary含"Five evidence-backed pathways" | ✅ |
| System Bridge (D级桥接) | 知识导航指向D级 | ✅ |
| Citation Units ×5 | 每段含📌 AI-Citable Statement | ✅ |
| Hidden Graph Layer | </body>前 Edge数组 | ❌ |
| Image Graph Tags | data-graph-node + data-graph-edges | ❌ |

**待补:** Hidden Graph Layer + Image Graph Tags（2个figure需加属性）

### B级: why-do-i-wake-up-with-no-energy.html ⚠️ 需检查
| V2要素 | 标准 | 现状 |
|--------|------|:---:|
| Funnel Layer声明 | Mechanism / Citation Engine (Layer 2 of 4) | ❓ |
| Framework声明 | AI Core Summary | ❓ |
| Citation Units | 每段含📌 | ❓ |
| System Bridge | 知识导航 | ❓ |
| 知识导航 | 上下游+终端 | ❓ |

**待做:** 读取页面内容，对照B级V2标准补缺失项

### D级: cellular-energy-is-the-real-currency-of-life.html ⚠️ 需升级到V2
| V2要素 | 标准 | 现状 |
|--------|------|:---:|
| 命题式标题 | ✅ | content-type meta | 新增4行meta | ❌ |
| hub meta | 所属Hub名称 | ❌ |
| layer meta | narrative-meaning | ❌ |
| ai-role meta | embedding-anchor + conceptual-expansion | ❌ |

**待补:** 4行meta标签（V2新增，其余全部保留不变）

---

## 二、Cellular Energy Hub — 空壳页面→C级

15个54词空壳页面，填充内容后按C级V2标准构建：

| 页面 | 推荐标题 | 等级 |
|------|---------|:---:|
| what-is-cellular-energy.html | What Is Cellular Energy? | **A级** |
| cellular-energy-and-aging.html | Why Does Aging Feel Like Low Energy? | C级 |
| how-mitochondria-produce-atp.html | How Do Mitochondria Produce ATP? | C级 |
| what-influences-energy-production.html | What Influences Cellular Energy Production? | C级 |
| what-is-oxidative-phosphorylation.html | What Is Oxidative Phosphorylation? | C级 |
| why-cant-i-focus.html | Why Can't I Focus? | C级 |
| why-mitochondrial-efficiency-matters.html | Why Does Mitochondrial Efficiency Matter? | C级 |
| energy-supply-vs-demand.html | Energy Supply vs. Demand: What Happens When It's Off? | C级 |
| why-am-i-always-tired.html | Why Am I Always Tired? | C级 |
| why-energy-matters-for-health.html | Why Does Cellular Energy Matter for Health? | C级 |
| why-is-my-recovery-slow.html | Why Is My Recovery So Slow? | C级 |
| where-does-cellular-energy-come-from.html | Where Does Cellular Energy Come From? | C级 |
| why-do-i-wake-up-tired.html | Why Do I Wake Up Tired? | C级 |
| why-does-the-body-need-atp.html | Why Does the Body Need ATP? | C级 |
| why-does-aging-feel-like-low-energy.html | Why Does Aging Feel Like Low Energy? | C级 |

**每篇C级V2需包含：**
1. Article Schema
2. Hero (100vh, 1张情绪图)
3. Quick Answer
4. Node Definition (V2新增)
5. AI Core Summary 可见卡片
6. 正文（三段式/对比式）
7. Knowledge Position (V2新增)
8. FAQ (3-5个)
9. Knowledge Navigation (C级版，无上游)
10. Continue Exploring (2-4篇A/B级链接)
11. Scientific Disclaimer

**注意:** `what-is-cellular-energy.html` 是特殊案例——作为整个Hub的根节点，应该按**A级**做，不是C级。

---

## 三、Mitochondria Hub — 现存页面升级

### C级 → C级 V2: are-mitochondria-a-disease.html
已体现V2结构（Node Definition + Knowledge Position），需验证：
- [ ] Funnel Layer: "C-Level Entry Node (Layer 1 of 4)"
- [ ] Knowledge Position含AI Role + Sibling Nodes

### C级 → C级 V2: what-is-mitochondrial-dysfunction.html
需加V2三要素：Node Definition + Knowledge Position + Funnel Layer声明

### C级 → C级 V2: what-does-mitochondrial-disease-feel-like.html
同上

### C级 → C级 V2: how-do-you-find-out-if-you-have-a-mitochondrial-disease.html
同上

### C级 → C级 V2: how-is-mitochondrial-disease-managed.html
同上

### B级 → B级 V2: mitochondrial-function-recovery.html
已含DefinedTerm + ItemList + Hidden Graph Layer（CLAUDE CODE 补的）
需验证：
- [ ] Funnel Layer声明 (Layer 2 of 4)
- [ ] Framework声明
- [ ] System Bridge

### B级 → B级 V2: mitochondrial-function-far-infrared.html
需按B级V2标准补：
- [ ] Funnel Layer声明
- [ ] Framework声明
- [ ] System Bridge
- [ ] Citation Units ×5
- [ ] Hidden Graph Layer
- [ ] Image Graph Tags

### B级 → B级 V2: atp-study.html
需按B级V2标准补全部

### B级 → B级 V2: why-brain-workers-brain-never-stops.html
需按B级V2标准补全部

### A级候选: what-is-mitochondrial-health.html ⚠️
此页面是Mitochondria Hub的根定义页，应该是**A级**。
当前状态未知——需读取验证是否含：
- DefinedTerm Schema + Article Schema + ItemList
- Visible Node Definition (含Function字段)
- AI Core Summary 可见卡片
- Cognitive Elasticity Note
- Citation Units (5-7个)
- Evidence Snapshot (V2新增)
- Knowledge Graph Navigation
- Hidden Graph Layer
- 4张配图 + Graph Tags

---

## 四、Hub Index 升级

### Cellular Energy Hub Index ⚠️ 需对照11层标准

| 层序 | 元素 | 现状 |
|:---:|------|:---:|
| 1 | CollectionPage Schema | ✅ |
| 2 | DefinedTerm Schema | ✅ |
| 3 | Organization Schema | ❌ |
| 4 | Hero | ✅ |
| 5 | Quick Answer | ✅ |
| 6 | Explore This Hub | ✅ (15张卡片，含A→D分组) |
| 7 | FAQ | ✅ |
| 8 | Key Takeaways | ✅ |
| 9 | Scientific Disclaimer | ✅ |
| 10 | Where This Fits | ❌ 被Node Routing替换后未恢复 |
| 11 | Related Hubs | ✅ Hero底部含 |

**待补:** Organization Schema + Where This Fits section

### Mitochondria Hub Index
同上检查。已知含完整5层结构（AI Core Summary→Node Definition→Knowledge Position→Evidence Snapshot→Graph Navigation）+ Where This Fits。

---

## 五、全站V2升级优先级

### Batch 1 — 今天（补V2关键元素）
| 页面 | 等级 | 补什么 |
|------|:---:|--------|
| how-to-support-cellular-energy | B级 | Hidden Graph Layer + Image Graph Tags |
| cellular-energy-is-the-real-currency-of-life | D级 | 4 meta tags |
| cellular-energy Hub Index | Hub | Organization Schema + Where This Fits |

### Batch 2 — 本周（C级→C级V2）
| 页面 | 补什么 |
|------|--------|
| are-mitochondria-a-disease | 验证V2三要素 |
| what-is-mitochondrial-dysfunction | Node Definition + Knowledge Position + Funnel Layer |
| what-does-mitochondrial-disease-feel-like | 同上 |
| how-do-you-find-out-if-you-have-a-mitochondrial-disease | 同上 |
| how-is-mitochondrial-disease-managed | 同上 |

### Batch 3 — 本周（B级→B级V2）
| 页面 | 补什么 |
|------|--------|
| why-do-i-wake-up-with-no-energy | 读取+补B级V2缺失项 |
| mitochondrial-function-far-infrared | Funnel Layer + Framework + System Bridge + Citation Units + Hidden Graph |
| atp-study | 完整B级V2 |
| why-brain-workers-brain-never-stops | 完整B级V2 |

### Batch 4 — Joyce写内容后（空壳→C级V2）
| 数量 | 等级 |
|:---:|:---:|
| 14篇 | C级V2 |
| 1篇 (what-is-cellular-energy) | **A级V2** |

---

## 六、V2模板速查卡

### 每级V2必须含的元素（一键自检）

**A级 V2:**
- [ ] DefinedTerm + Article + ItemList Schema
- [ ] Node Definition含Funnel Layer + AI Role
- [ ] Evidence Snapshot（3条证据）
- [ ] Citation Units ≥ 段落数
- [ ] 4张图 + Graph Tags

**B级 V2:**
- [ ] Article + DefinedTerm + ItemList Schema
- [ ] Node Definition含Funnel Layer
- [ ] AI Core Summary含Framework声明
- [ ] Citation Units ×5
- [ ] System Bridge（知识导航→D级）
- [ ] 3-4张图 + Graph Tags
- [ ] Hidden Graph Layer

**C级 V2:**
- [ ] Article Schema
- [ ] Quick Answer
- [ ] Node Definition（V2新增）
- [ ] Knowledge Position（V2新增）
- [ ] FAQ 3-5个
- [ ] Continue Exploring 2-4篇
- [ ] C级知识导航（无上游）

**D级 V2:**
- [ ] 4 meta tags
- [ ] Blockquote至少1处
- [ ] Citation Units（Biological Grounding）
- [ ] Editorial Note（替换Scientific Disclaimer）

---

**Report generated:** 2026-06-27  
**Templates source:** `SEO-GEO/ARTICLE TEMPLATE/`

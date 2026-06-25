# TASK: P1 — 3个空壳Hub补文章 + 激活

## 问题

报告检测到 Metabolism、bioenergetics、oxidative-stress 三个Hub有 index.html 入口但零篇文章。其中 bioenergetics 和 oxidative-stress 还被 `<meta name="robots" content="noindex">` 标记为不索引。

## 修改内容

### 1. Metabolism Hub（需要3篇文章）

**文章建议方向（参考现有Fatigue/Inflammation结构）：**
- 在 `/mnt/d/CODEX/LAUCH VERSION/WEBSITE/pages/SCIENCE/KNOWLEDGE/Metabolism/` 创建

**文章1: `how-fir-affects-metabolism.html`**
标题：How Far-Infrared Radiation Affects Metabolic Rate
断言卡：FIR exposure at 9.4μm wavelength creates a thermal environment that can transiently increase metabolic rate through enhanced mitochondrial ATP demand.
证据类型：mechanism_review

**文章2: `glucose-metabolism-fir.html`**
标题：Graphene Far-Infrared and Glucose Metabolism: Cellular Energy Balance
断言卡：Graphene FIR supports glucose metabolism pathways by improving mitochondrial efficiency and reducing oxidative stress in metabolically active tissues.
证据类型：preclinical_review

**文章3: `metabolic-recovery-athletes.html`**
标题：Metabolic Recovery in Athletes: The Role of Far-Infrared Therapy
断言卡：Post-exercise FIR exposure supports metabolic recovery by enhancing microcirculation and reducing markers of metabolic stress.
证据类型：clinical_observation

### 2. bioenergetics Hub（需要2-3篇文章）
**关键：移除 `<meta name="robots" content="noindex">`**

**文章1: `bioenergetics-fir-basics.html`**
标题：Bioenergetics and Far-Infrared: How Cells Convert Light to Energy
断言卡：FIR photons in the 5-15μm range interact with water molecules in tissue, creating a thermal energy gradient that supports ATP synthesis pathways.
证据类型：mechanism_review

**文章2: `electron-transport-chain-fir.html`**
标题：The Electron Transport Chain and Far-Infrared: Does Heat Influence Complex Activity?
断言卡：Mild thermal elevation from FIR exposure can increase electron transport chain complex activity by 12-18% in vitro, supporting oxidative phosphorylation efficiency.
证据类型：preclinical_review

### 3. oxidative-stress Hub（需要2-3篇文章）
**关键：移除 `<meta name="robots" content="noindex">`**

**文章1: `oxidative-stress-fir-mechanism.html`**
标题：Does Far-Infrared Radiation Reduce Oxidative Stress? A Mechanistic Review
断言卡：FIR exposure has been shown to upregulate antioxidant enzyme activity (SOD, GPx) and reduce ROS levels in multiple preclinical models.
证据类型：preclinical_review

**文章2: `fir-nrf2-pathway.html`**
标题：Far-Infrared and the Nrf2 Pathway: Activation of Endogenous Antioxidant Defense
断言卡：Thermal FIR stimulation activates the Nrf2/ARE signaling pathway, upregulating phase II antioxidant enzymes and enhancing cellular redox balance.
证据类型：mechanism_review

## 模板参考

每篇文章必须严格遵循已有文章模板（参考 `/mnt/d/CODEX/LAUCH VERSION/WEBSITE/pages/SCIENCE/KNOWLEDGE/Fatigue/why-always-tired.html`）：
- 页眉：完整的 nav + hub-nav + BreadcrumbList Schema
- GEO隐藏层：`ai-assertion-card`（display:none）+ `knowledge-nav`（ItemList）
- Article Schema：headline + isPartOf + mentions
- visible content: hero → 正文 section → 底部导航
- 底部 footer
- DefinedTerm在Hub index.html中已有relatedTerm指向（不需要再改hub index.）

## 验收标准

- [ ] Metabolism/ 有至少3篇 .html 文章
- [ ] bioenergetics/ 有至少2篇 .html 文章，已移除noindex
- [ ] oxidative-stress/ 有至少2篇 .html 文章，已移除noindex
- [ ] 每篇文章有 ai-assertion-card + knowledge-nav + Article Schema
- [ ] 每篇文章的 isPartOf 指向正确的 Hub URL
- [ ] sitemap.xml 需要更新（添加新文章URL）

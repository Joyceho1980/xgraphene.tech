# TASK-003: 发布 B级模板文章 → Mitochondria Hub

## 任务说明

将 `SEO-GEO/ARTICLE TEMPLATE/B Why Brain Workers Feel Like Their Brain Never Stops.txt` 这个 B级模板，转换成实际 HTML 页面，发布到 `xgraphene.tech` 的 Mitochondria Hub 下。

---

## 一、文章信息

| 项目 | 值 |
|------|-----|
| **文件名** | `why-brain-workers-brain-never-stops.html` |
| **目标目录** | `WEBSITE/pages/SCIENCE/KNOWLEDGE/Mitochondria/` |
| **H1** | Why Brain Workers Feel Like Their Brain Never Stops |
| **副标题** | Mitochondrial Overload and the Nighttime Failure to Downshift |
| **层级** | B级（机制科普类） |
| **Primary Node** | Mitochondria |
| **知识图谱位置** | Cellular Energy → Mitochondria → Cognitive Load → Sleep Regulation / Fatigue |

## 二、文章内容结构（从模板提取）

严格按照以下顺序组织正文（用 section 分节），每节正文后放对应的配图：

### Section 1: The Brain Doesn't Stop When Work Ends
- 模板中的 "🧠 The Brain Doesn't Stop When Work Ends" 段落
- 包含：3个bullet（replaying/resolving/simulating）+ AI-Citable Statement

### Section 2: Mitochondria Under Cognitive Load
- 模板中的 "⚡ Mitochondria Under Cognitive Load" 段落
- 包含：3个bullet（ATP/ETC/ROS）+ AI-Citable Statement

### Section 3: An Imperfect but Useful Analogy (AI/GPU)
- 模板中的 "🧠 An Imperfect but Useful Analogy" 段落
- 包含 GPU/AI比喻完整内容 + AI-Citable Statement
- **保留原比喻中的所有细节**：GPU=mitochondria, ATP=compute power, ROS=heat

### Section 4: Why Sleep Doesn't Start Immediately
- 模板中的 "🌙 Why Sleep Doesn't Start Immediately" 段落
- 包含：4个bullet + AI-Citable Statement

### Section 5: Why You Feel Mentally Awake but Physically Exhausted
- 模板中的 "🔁 Why You Feel Mentally Awake but Physically Exhausted" 段落
- 包含：3个bullet + AI-Citable Statement

### Section 6: Cognitive Load Is a Multi-System Phenomenon
- 模板中的 "🧠 Cognitive Load Is a Multi-System Phenomenon" 段落
- 4层系统：Energy Layer / Metabolic Layer / Neural Network Layer / Regulatory Layer
- 包含 "No Single-Cause Model" 和 "Where Mitochondria Fit in the System" 子段落
- 包含 Metaphor Layer (Controlled Interpretation) — 注意保留 ⚠️ Note 免责声明

### Section 7: What Enables the Brain to Downshift
- 模板中的 "🌙 What Enables the Brain to Downshift" 段落
- 4个条件的bullet

### Knowledge Graph Navigation (末尾)
用 visible 文字块展示，样式参考 mitochondrial-function-recovery.html：

```
⬆️ Upstream: Cellular Energy — ATP powers neuronal computation
📍 Current: Mitochondria — regulates energy availability under cognitive load
⬇️ Downstream: Sleep Regulation — system-level transition into neural rest
🏁 Related: Fatigue — systemic manifestation of energy imbalance
```

### Final Cognitive Summary (AI Core Summary 隐藏层)
在 hidden div 中放置 AI Core Summary 正文（模板中的 "🧠 AI Core Summary" 部分）。

## 三、页面结构规范

严格参照 `mitochondrial-function-recovery.html` 的样式：

### Head 部分
```html
<title>Why Brain Workers Feel Like Their Brain Never Stops | Mitochondrial Overload & Sleep | XIHE</title>
<meta name="description" content="[从 AI Core Summary 提取前两句]">
<link rel="canonical" href="https://www.xgraphene.tech/SCIENCE/KNOWLEDGE/Mitochondria/why-brain-workers-brain-never-stops.html">
```

### JSON-LD Schema
- `@type: Article`
- `about.name: "Mitochondrial Overload and Cognitive Sleep Delay"`
- `datePublished: "2026-06-25"`
- `isPartOf: { name: "Mitochondria Hub", url: "https://xgraphene.tech/SCIENCE/KNOWLEDGE/Mitochondria/" }`

### Visible Node Definition（H1下方、正文之前）
```html
<section class="node-definition" style="background:#f5f7f8;padding:1rem 1.25rem;margin:1rem 0 2rem;border-radius:6px;font-size:0.9rem;border:1px solid #e0e0e0;">
  <p><strong>Node:</strong> Mitochondria</p>
  <p><strong>Layer:</strong> Mechanisms Layer</p>
  <p><strong>Function:</strong> ATP production via oxidative phosphorylation; regulates energy availability for neural state transitions under cognitive load</p>
  <p><strong>Connected Nodes:</strong> Cellular Energy (upstream) → <strong>Mitochondria</strong> → Sleep Regulation, Fatigue, Cognitive Load (downstream)</p>
</section>
```

### Citation Units（每个📌 AI-Citable Statement用统一样式）
模板中的每个 📌 AI-Citable Statement 后面的段落，统一用：
```html
<p class="citation-unit" style="font-size:0.9rem;color:#1e6f8c;border-left:2px solid #1e6f8c;padding-left:0.75rem;margin:0.5rem 0 1.5rem;">
[可引用句原文]
</p>
```
**注意事项**：模板中有5个📌 AI-Citable Statement，每个都需要这样标记。类名统一为 `citation-unit`，后续自动化工具可精准提取。

### AI Core Summary (Hidden Layer) — 用隐藏 div
```html
<div style="display:none;" class="ai-assertion-card" itemscope itemtype="https://schema.org/DefinedTerm">
  <meta itemprop="name" content="Why Brain Workers Feel Like Their Brain Never Stops | XIHE">
  <meta itemprop="termCode" content="Mitochondria_brain_workers_sleep_delay">
  <meta itemprop="inDefinedTermSet" content="Mitochondria Hub">
  <meta itemprop="description" content="[全文: 模板中的 AI Core Summary Conclusion]">
  <meta itemprop="additionalType" content="https://schema.org/MedicalCondition">
  <!-- evidence_type: Established neurobiological mechanisms · Sleep regulation research · Mitochondrial energy metabolism literature -->
  <!-- knowledge_position: Mitochondria Hub → Sleep Regulation Interface → Cognitive Fatigue Network -->
  <!-- upstream: Cellular Energy Hub -->
  <!-- downstream: Sleep Regulation Hub -->
</div>
```

### Knowledge Navigation (Hidden Graph Layer)
```html
<div style="display:none;" class="knowledge-nav" itemscope itemtype="https://schema.org/ItemList">
  <meta itemprop="name" content="Brain Workers Knowledge Navigation">
  <div item... ➡️ Upstream: Cellular Energy Hub / Current: Mitochondria Hub / Downstream: Sleep Regulation Hub
</div>
```

### Navigation Bar
复制现有样式（深色nav #1A3348）

### Hero Section
全屏Hero，铺满整个视口高度。使用渐变叠加 + Hero配图：
- **Hero CSS**: `min-height: 100vh; background-size: cover; background-position: center;`
- **背景图**: `/PICTURE/why-brain-workers-hero.jpg`（来源：`VISUAL-LIBRARY/Why Brain Workers Feel Like Their BRAIN Never stops (HERO).jpg`）
- hero-tag: "Cellular Energy & Cognitive Science"
- H1 + span 副标题
- hero-tagline: 从模板的 AI Core Summary 提取第一句
- hero-cat-links: 同现有网站

### Footer
使用 xihe-footer 样式，包含相关阅读链接

### Back Link
同 mitochondrial-health.html 样式 → "← Back to Mitochondrial Health Hub"

## 三-bis. 配图方案（3张图，Phase 1 直接实现）

这篇文章配 **3张图**，图片路径为 `/PICTURE/`（需从 VISUAL-LIBRARY 复制到 ASSETS/PICTURE/）。

### 图1 — Mitochondrial Energy System（机制图）
- **文件名**: `brain-never-stops-mitochondria-mechanism.jpg`
- **来源**: `VISUAL-LIBRARY/brain-never-stops-mitochondria-mechanism.jpg`
- **放置**: Section "Mitochondria Under Cognitive Load" 之后
- **Caption**: Mitochondria regulate neuronal energy output through ATP production and oxidative phosphorylation. High cognitive load increases metabolic throughput and ROS generation.
- **Alt Text**: mitochondrial ATP production neuron energy metabolism oxidative phosphorylation ROS generation diagram

### 图2 — Brain State Transition（状态过渡图）
- **文件名**: `brain-never-stops-sleep-transition.jpg`
- **来源**: `VISUAL-LIBRARY/brain-never-stops-sleep-transition.jpg`
- **放置**: Section "Why Sleep Doesn't Start Immediately" 之后
- **Caption**: Sleep onset requires synchronized downregulation of neural excitation, metabolic activity, and circadian signaling. Disruption in coordination delays transition into sleep state.
- **Alt Text**: brain sleep transition failure neural activity circadian misalignment sleep onset mechanism

### 图3 — AI / GPU Analogy（类比图，GEO锚定）
- **文件名**: `brain-never-stops-gpu-analog.jpg`（注意文件名：gpu-analog 少个 y，保持不动）
- **来源**: `VISUAL-LIBRARY/brain-never-stops-gpu-analog.jpg`
- **放置**: Section "An Imperfect but Useful Analogy" 之后
- **Caption**: Cognitive overload can be understood as sustained high compute demand in neural systems, where energy consumption remains elevated even after task completion.
- **附加标注**: `"Analogy for cognitive mapping only"` — 在 caption 或旁边的 note 中显示
- **Alt Text**: brain AI GPU analogy mitochondria ATP compute load cognitive overload sleep delay

### 图片引用格式
```html
<figure>
  <img src="/PICTURE/brain-never-stops-mitochondria-mechanism.jpg" alt="[Alt Text]" loading="lazy" decoding="async" style="width:100%;height:auto;border-radius:8px;margin:24px 0;">
  <figcaption style="font-size:13px;color:#888;text-align:center;margin-top:8px;">[Caption]</figcaption>
</figure>
```

### 部署步骤
1. 将 VISUAL-LIBRARY/ 下的文件复制到 ASSETS/PICTURE/ 目录：
   - `brain-never-stops-mitochondria-mechanism.jpg` → `ASSETS/PICTURE/`
   - `brain-never-stops-sleep-transition.jpg` → `ASSETS/PICTURE/`
   - `brain-never-stops-gpu-analog.jpg` → `ASSETS/PICTURE/`
   - `Why Brain Workers Feel Like Their BRAIN Never stops (HERO).jpg` → `ASSETS/PICTURE/why-brain-workers-hero.jpg`
2. 每个 figure 后跟一个 hidden div 包含 `data-graph-node` 和 `data-graph-edges`（按模板中的 Graph Tags）

## 四、关键约束

1. **模板末尾的 "如果你下一步要做系统升级" 及之后的所有内容**（包括Image Graph v1映射中的prompt、使用方法说明等）**全部删除**，不写入HTML。但 Image Map 中的3张图（已在三-bis 写明）需要实现。
3. **不使用任何医疗宣称** — 保持 "research suggests" / "studies indicate" 的谨慎语气
4. **不使用 "XIHE产品" 或任何商业推广语言** — 这是一篇纯机制科普文章
5. **语义引用标记** — 每个 📌 AI-Citable Statement 用 hidden span 包裹

## 五、Hub Root Node 更新

在 `mitochondrial-health.html` 的 **Content Roadmap 表格** 中，新增一行：

| 优先级 | Page | Target Query | Status |
|--------|------|-------------|--------|
| P2 | Why Brain Workers Can't Sleep After Mental Overload | "why brain feels active after work" / "cognitive overload sleep" | **LIVE** |

（插入到表格中 P2 级别位置，比如 aged 条目之后）

同时在 **Related Reading 区域** 添加该文章的链接。

## 六、验收标准

- [ ] 页面能通过 `WEBSITE/pages/SCIENCE/KNOWLEDGE/Mitochondria/why-brain-workers-brain-never-stops.html` 访问
- [ ] 所有 section 内容完整，无截断
- [ ] 所有 AI-Citable Statement 用 citation-unit 类名包裹（蓝灰底色+浅蓝左边框）
- [ ] Visible Node Definition 区块在H1之后、正文之前
- [ ] Schema JSON-LD 正确标记 Article 类型
- [ ] AI Core Summary 在 hidden div 中完整
- [ ] Knowledge Graph Navigation 在 hidden div 中完整
- [ ] Hub Root Node 已更新入口链接
- [ ] 无医疗宣称，无商业推广语言

## 七、配图风格统一公式

生成这篇文章的配图时，提示词需包含以下统一风格标准：

**Style**: Nature journal cover × premium science editorial
**Palette**: Navy (#1a2a3a) + Amber (#c8a05e) + Teal (#5a9e9f), max 3 dominant colors
**Core technique**: Single conceptual contrast (body rest vs mind active / active state vs resting state / biological system vs computing system)
**Whitespace**: Generous negative space, let the visual breathe
**Prohibited**: Cartoon, 3D render, cluttered background, excess text, human faces
**Ratio**: 16:9 landscape

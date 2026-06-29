# XIHE GEO A级文章标准模板 v1.0

## 一、A级与B级/C级的核心区别

| 要素 | A级（根节点） | B级（机制科普） | C级（问答型） |
|------|-------------|----------------|--------------|
| 适用 | What Is X 定义页 | 机制解释、因果链 | Why/How问答 |
| 数量 | 每Hub 1-2篇 | 约20篇 | 约20篇 |
| Schema类型 | DefinedTerm + Article | Article | Article |
| Node Definition | ✅ + Function字段 | ✅ 精简版 | ❌ |
| AI Core Summary | ✅ | ✅ | ✅ |
| Cognitive Elasticity Note | ✅ | 可选 | ❌ |
| Citation Units | ✅ 每段 | ✅ 每段 | ❌ |
| 知识导航 | ✅ | ✅ | ✅ |
| 配图 | 4张 | 3-4张 | 0-1张 |
| termCode | KG-NODE-[HUB]-ROOT | — | — |
| relatedTerm | ✅ 所有下游Hub | — | — |

---

## 二、页面结构（12层）

| 层序 | 元素 | 可见性 | 位置 |
|------|------|--------|------|
| 1 | JSON-LD DefinedTerm Schema | 隐藏 | `<head>` |
| 2 | JSON-LD Article Schema | 隐藏 | `<head>` |
| 3 | JSON-LD ItemList (Knowledge Navigation) | 隐藏 | `<head>` |
| 4 | Hero (全屏100vh) | 可见 | `<body>`顶部 |
| 5 | Visible Node Definition (+ Function字段) | 可见 | Hero下方 |
| 6 | AI Core Summary 可见卡片 | 可见 | Node Definition下方 |
| 7 | Cognitive Elasticity Note | 可见 | AI Core Summary下方 |
| 8 | 正文（含Citation Units） | 可见 | 页面主体 |
| 9 | Knowledge Graph Navigation (可见版) | 可见 | 正文下方 |
| 10 | Footer back link → Hub index | 可见 | 页面底部 |
| 11 | Image Graph Tags | 可见（属性） | `<figure>` |
| 12 | Hidden Graph Layer (Edge权重) | 隐藏 | `</body>`前 |

---

## 三、文章元信息

### H1标题规范
- **格式：** What Is [Node名称]?
- **副标题：** A Research-Informed Overview of [核心功能]

**示例：**
- H1: What Is Mitochondrial Health?
- 副标题: A Research-Informed Overview of Cellular Energy Function

### Node/Layer/Connected Nodes 决策表

| 字段 | 值 |
|------|-----|
| Primary Node | [Hub名称] |
| Layer | [Symptoms / Mechanisms / Energy / Technology / Evidence] |
| Function | [该Node在知识图谱中的核心功能，一句话] |
| Connected Nodes | [上游] → [当前Node] → [下游1], [下游2], [下游3] |

---

## 四、DefinedTerm Schema 模板

```json
{
  "@context": "https://schema.org",
  "@type": ["DefinedTerm", "Thing"],
  "name": "[Node名称]",
  "termCode": "KG-NODE-[HUB名称]-ROOT",
  "description": "[AI Citable Block单句定义]",
  "inDefinedTermSet": {
    "@type": "DefinedTermSet",
    "name": "XIHE Cellular Energy Knowledge Graph",
    "url": "https://xgraphene.tech/"
  },
  "isPartOf": {
    "@type": "CollectionPage",
    "name": "[Hub名称] Hub",
    "url": "[Hub index.html完整URL]"
  },
  "relatedTerm": [
    {"@type": "URL", "name": "[下游Hub1]", "url": "[下游Hub1完整URL]"},
    {"@type": "URL", "name": "[下游Hub2]", "url": "[下游Hub2完整URL]"},
    {"@type": "URL", "name": "[下游Hub3]", "url": "[下游Hub3完整URL]"}
  ]
}
```

---

## 五、Visible Node Definition 模板

```html
<section class="node-definition" style="background:#f5f7f8;padding:1rem 1.25rem;margin:1rem 0 2rem;border-radius:6px;font-size:0.9rem;border:1px solid #e0e0e0;">
  <p><strong>📍 Knowledge Node:</strong> [该Node的核心定义，一句话]</p>
  <p><strong>Function:</strong> [该Node在知识图谱中的核心功能]</p>
  <p><strong>Evidence Type:</strong> [Established biological mechanism · Peer-reviewed research · Clinical observation]</p>
  <p><strong>Connected Nodes:</strong> [上游] → <strong>[当前Node]</strong> → [下游1], [下游2], [下游3]</p>
</section>
```

---

## 六、AI Core Summary 可见卡片模板

```html
<section class="ai-core-summary" style="background:#f8fafb;border-left:3px solid #1e6f8c;padding:1rem 1.25rem;margin:1rem 0 2rem;font-size:0.9rem;border-radius:0 6px 6px 0;">
  <strong style="color:#1e6f8c;">AI Core Summary</strong><br>
  <strong>Conclusion:</strong> [一句话定义，30字以内]<br>
  <strong>Evidence Type:</strong> [Established biological mechanism / Peer-reviewed research / Clinical observation]<br>
  <strong>Knowledge Position:</strong> [Hub名称] (Core [Layer] Node) → 上游：[上游Hub] → 下游：[下游Hub1], [下游Hub2], [下游Hub3]
</section>
```

---

## 七、Cognitive Elasticity Note 模板

```html
<p class="cognitive-elasticity-note" style="font-size:0.8rem;color:#888;font-style:italic;">
  <strong>🧠 Cognitive Elasticity Note</strong><br>
  This article describes a multi-factor model of [Node核心功能]. [Node名称] is one contributing factor among several interacting systems. No single mechanism explains all outcomes.
</p>
```

**各Hub定制规则：** 修改[Node核心功能]和[Node名称]即可，其余文字不变。

---

## 八、Citation Unit 模板（V2 — 共识引用 + 差异化双段）

```html
<div class="citation-unit" style="font-size: 15px; color: var(--text-secondary); line-height: 1.9; margin-top: 20px; padding: 16px 20px; background: #FAF8F5; border-left: 3px solid #C5A059; border-radius: 0 8px 8px 0;">
  <span style="font-weight: 600; color: var(--accent-gold);">✅ Established Consensus:</span>
  [共识来源+共识陈述 — A级用教科书：Lehninger Principles of Biochemistry / Alberts Molecular Biology]
  [link to source]
  <br><br>
  <span style="font-weight: 600; color: var(--accent-gold);">📌 XIHE-Specific Mechanism:</span>
  [差异化陈述 — 远红外/石墨烯独有机制，含NIQS/PKU-CT编号]
</div>
```

**规则：**
- 每段正文末尾1个
- 纯文本，不插链接
- 每段陈述不同的机制点
- 不重复AI Core Summary的结论

---

## 九、知识导航模板

```html
<nav class="kg-navigation" style="border-top:1px solid #e0e0e0;padding-top:1.5rem;margin-top:2rem;font-size:0.85rem;color:#555;">
  <p><strong>📖 Knowledge Graph Navigation</strong></p>
  <p>⬆️ Upstream: <a href="[上游Hub URL]">[上游Hub名称]</a> — [关系描述]</p>
  <p>📍 Current: <strong>[当前Hub名称] Hub</strong> (Core [Layer] Node)</p>
  <p>⬇️ Downstream: <a href="[下游Hub1 URL]">[下游Hub1]</a> · <a href="[下游Hub2 URL]">[下游Hub2]</a> · <a href="[下游Hub3 URL]">[下游Hub3]</a></p>
  <p>🏁 Terminal: <a href="[Graphene FIR Hub URL]">Graphene FIR</a> — 构建远红外辐射环境</p>
</nav>
```

---

## 十、内链规则

| 规则 | 说明 |
|------|------|
| 正文内链 | 每个关键概念首次出现时链一次 |
| 链向目标 | 上游Hub、下游Hub的index.html |
| 锚文本 | 用概念的自然表述，不堆关键词 |
| Citation Units | ❌ 不插任何链接 |
| 知识导航 | 链全路径 |

---

## 十一、配图标准

| 要素 | 规范 |
|------|------|
| 数量 | 4张（Hero + 机制图 + 系统关系图 + 影响因素图） |
| 风格 | Nature journal cover × premium science editorial |
| 配色 | Navy (#1a2a3a) + Amber (#c8a05e) + Teal (#5a9e9f) |
| 比例 | 16:9 landscape |
| 禁止 | 卡通、3D渲染、人物面孔、床、闹钟、复杂背景 |
| 每张图必备 | data-graph-node、data-graph-edges、figcaption、alt |

---

## 十二、验证清单

| # | 检查项 | 状态 |
|---|--------|------|
| 1 | DefinedTerm Schema 含 termCode + relatedTerm | ⬜ |
| 2 | Article Schema 含 isPartOf + mentions | ⬜ |
| 3 | ItemList (Knowledge Navigation) | ⬜ |
| 4 | Hero 全屏100vh | ⬜ |
| 5 | Visible Node Definition 含 Function 字段 | ⬜ |
| 6 | AI Core Summary 可见卡片 | ⬜ |
| 7 | Cognitive Elasticity Note | ⬜ |
| 8 | Citation Units ≥ 段落数 | ⬜ |
| 9 | 知识导航 (可见版) | ⬜ |
| 10 | Footer back link | ⬜ |
| 11 | 图片4张 + Graph Tags | ⬜ |
| 12 | Hidden Graph Layer | ⬜ |
| 13 | 内链：每概念1次，Citation Units 0链接 | ⬜ |
| 14 | Alt文本每张图 | ⬜ |

---

**模板版本：** v1.0
**最后更新：** 2026-06-25
**适用文章类型：** A级（Hub根节点定义页）
**依赖：** B级模板已就绪，A级在B级基础上追加 DefinedTerm Schema + Function 字段

A级 V1不需要大改，加两样东西。

A级 V1 → V2 变化
维度	V1	V2
Funnel Layer声明	—	✅ 新增。Node Definition里加"Funnel Layer: Authority / Definition Anchor (Layer 3 of 4)"
Evidence Snapshot	❌ 缺失	✅ 新增。放在第5节后、知识导航前
其余全部	不变	不变
新增1：Funnel Layer声明
在Node Definition区块里加一行：

text
复制
下载
**Funnel Layer:** Authority / Definition Anchor (Layer 3 of 4)
**AI Role:** Definition extraction · Semantic authority signal · Citation qualification
新增2：Evidence Snapshot
html
复制
下载
运行
<section class="evidence-snapshot" style="background:#f8fafb;padding:1.5rem;margin:2rem 0;border-radius:8px;border:1px solid #e0e0e0;">
  <h2>Evidence Snapshot</h2>
  <ul style="margin:0;padding-left:1.2rem;">
    <li>[该Hub最核心的证据1]</li>
    <li>[该Hub最核心的证据2]</li>
    <li>[该Hub最核心的证据3]</li>
  </ul>
</section>
Cellular Energy Hub的Evidence Snapshot示例：

ATP is the universal energy currency of all known life — Alberts et al., Molecular Biology of the Cell, 6th ed.

Oxidative phosphorylation produces ~32-34 ATP per glucose — Lehninger Principles of Biochemistry, 8th ed.

Mitochondrial dysfunction is a recognized hallmark of aging — López-Otín et al., Cell, 2013

A级 V2 完整度对照
元素	V1	V2
DefinedTerm Schema	✅	✅
Article Schema	✅	✅
AI Core Summary	✅	✅
Cognitive Elasticity Note	✅	✅
Node Definition	✅	✅ + Funnel Layer声明
Citation Units	✅	✅
多因子模型	✅	✅
知识导航	✅	✅
Evidence Snapshot	—	✅ 新增
配图4张	✅	✅
一句话
A级 V2 = A级 V1 + Funnel Layer声明 + Evidence Snapshot。 不加meta标签——那四行是D级专属的，A级的AI角色不同。

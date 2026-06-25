# XIHE GEO B级文章标准模板 v1.0

## 一、文章元信息

### H1标题规范
- **格式：** [核心问题/机制陈述]
- **长度：** 不超过12个英文单词
- **示例：** Why Brain Workers Feel Like Their Brain Never Stops

### 副标题规范
- **格式：** [机制定位] + [核心因果链]
- **示例：** Mitochondrial Overload and the Nighttime Failure to Downshift

### Node/Layer/Connected Nodes 决策表

| 字段 | 决策规则 | 示例 |
|------|---------|------|
| Primary Node | 文章解释的机制属于哪个Hub？ | Mitochondria |
| Layer | 该Hub在知识图谱中的层级 | Mechanisms Layer |
| Connected Nodes | 文章因果链经过哪些Hub？按上游→当前→下游排列 | Cellular Energy → Mitochondria → Sleep Regulation, Fatigue, Cognitive Load |

---

## 二、页面结构（12层）

| 层序 | 元素 | 可见性 | 位置 |
|------|------|--------|------|
| 1 | JSON-LD Article Schema | 隐藏 | `<head>` |
| 2 | JSON-LD DefinedTerm (AI Core Summary) | 隐藏 | `<body>`首子元素 |
| 3 | JSON-LD ItemList (Knowledge Navigation) | 隐藏 | `<head>` |
| 4 | H1 + 副标题 | 可见 | `<body>`顶部 |
| 5 | Visible Node Definition | 可见 | H1下方 |
| 6 | AI Core Summary (可见版) | — | 不做（那是A级） |
| 7 | Cognitive Elasticity Note | — | 可选 |
| 8 | 正文（含Citation Units ×5） | 可见 | 页面主体 |
| 9 | Knowledge Graph Navigation (可见版) | 可见 | 正文下方 |
| 10 | Footer back link → Hub index | 可见 | 页面底部 |
| 11 | Image Graph Tags (data-graph-node) | 可见（属性） | `<figure>`标签 |
| 12 | Hidden Graph Layer (Edge权重) | 隐藏 | `</body>`前 |

---

## 三、内链规则

| 规则 | 说明 |
|------|------|
| 正文内链 | 每个关键概念首次出现时链一次，锚文本用该概念的自然表述 |
| 链向目标 | 上游Hub、下游Hub的index.html |
| Citation Units | 绝对不插链接，保持纯净文本供AI抓取 |
| 知识导航 | 链全路径：上游 + 当前Hub + 下游 + 终端 |

**示例：**
- ✅ 正文首次提到 "ATP" → 链接到 Cellular Energy Hub
- ✅ 正文首次提到 "sleep regulation" → 链接到 Sleep Hub
- ❌ 每个 "mitochondria" 都加链接
- ❌ Citation Unit里出现 `<a>` 标签

---

## 四、配图标准

| 要素 | 规范 |
|------|------|
| 风格锚点 | Nature journal cover × premium science editorial |
| 配色 | Navy (#1a2a3a) + Amber (#c8a05e) + Teal (#5a9e9f) |
| 比例 | 16:9 landscape |
| 禁止项 | 卡通、3D渲染、复杂背景、多余文字、人物面孔 |
| 图片数量 | 3-4张（Hero + 2-3张机制图） |
| 每张图必备 | data-graph-node、data-graph-edges、figcaption、alt |

---

## 五、GEO元素完整清单（13项）

| # | 元素 | 可见性 | 位置 |
|---|------|--------|------|
| 1 | Article Schema (JSON-LD) | 隐藏 | `<head>` |
| 2 | DefinedTerm Schema (AI Core Summary) | 隐藏 | `<body>`首子元素 |
| 3 | ItemList (Knowledge Navigation) | 隐藏 | `<head>` |
| 4 | Hidden Graph Layer | 隐藏 | `</body>`前 |
| 5 | H1 + 副标题 | 可见 | `<body>`顶部 |
| 6 | Visible Node Definition（精简版） | 可见 | H1下方 |
| 7 | Citation Units (每段1个，×5) | 可见 | 每段末尾 |
| 8 | Knowledge Navigation (可见版) | 可见 | 正文下方 |
| 9 | Image Graph Tags | 可见（属性） | `<figure>` |
| 10 | 正文内链（每概念1次，×3-5） | 可见 | 正文中 |
| 11 | Footer back link | 可见 | 页面底部 |
| 12 | Alt文本（每张图） | 可见（属性） | `<img>` |
| 13 | Explore Further CTA | 可见 | 底部 |

---

## 六、与A级/C级的区别

| 要素 | A级（根节点） | B级（机制科普） | C级（问答型） |
|------|--------------|----------------|--------------|
| 用途 | 定义Hub核心概念 | 解释因果机制链 | 回答单一问题 |
| H1格式 | What Is X... | 问题/机制陈述 | Why/How/What 问句 |
| 篇幅 | 长（10+节） | 中（5-7节） | 短（3-4节） |
| Visible Node Definition | ✅ 完整版（+Function字段） | ✅ 精简版 | ❌ |
| AI Core Summary | ✅ 可见卡片 | display:none | display:none |
| Cognitive Elasticity Note | ✅ 必有 | 可选 | ❌ |
| 多因子模型 | ✅ 必有 | ❌ | ❌ |
| Citation Units | ✅ 每段（5-7个） | ✅ 每段（5个） | ❌ (Quick Answer替代) |
| 配图 | 4张 | 3-4张 | 0-1张 |
| Schema类型 | DefinedTerm + Article | Article | Article |
| Hidden Graph Layer | ✅ | ✅ | 可选 |

---

## 七、Hub Root Node更新规范

每发布一篇B级文章，须更新所属Hub的Root Node：
1. **JSON-LD hasPart** — 新增子文章URL
2. **Content Roadmap 表格** — 新增一行（优先级/页面名/目标查询词/状态=LIVE）
3. **Related Reading** — 底部相关阅读区域添加链接

当一篇文章被指定为某个Hub的Root Node时，额外追加DefinedTerm Schema、Function字段、配图至少4张。

---

**模板版本：** v1.0
**最后更新：** 2026-06-25
**适用文章类型：** B级（机制科普）

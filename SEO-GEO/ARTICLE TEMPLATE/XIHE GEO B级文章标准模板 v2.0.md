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
| 7 | Consensus Citations (每段1个) + Citation Units (每段1个) | 可见 | 每段末尾 |
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

一、B级定位（V2更新）
B级是GEO漏斗的第二层·引用主力。AI在回答"How to""Why"类问题时，最常引用B级文章的Citation Units。

维度	B级 V2
漏斗层级	Layer 2 of 4 — Mechanism / Citation Engine
角色	建立路径权重。让AI"知道你解释得更好"
AI引用频率	最高。B级是AI Overview的引用主力
标题来源	Google People Also Ask · "How to""Why"类问题
标题格式	方案导向：How to [动词] [目标] 或 Why [现象] [机制]
商业化程度	10%。正文不提产品，知识导航指向D级和Graphene FIR
二、与A/C/D级的关系（V2更新）
text
复制
下载
C级（入口）— 建立认知锚点
    ↓
B级（机制）— 建立路径权重 ← 你在这里
    ↓
A级（定义）— 建立引用资格
    ↓
D-S（桥接）— 连接科学到物理环境
    ↓
D-P（收口）— 哲学反思
    ↓
Graphene FIR Hub（收敛点）
三、页面结构（12层 + V2新增）
| 层序 | 元素 | 可见性 | V2更新
||------|------|--------|---------|
| 7 | Consensus Citation + Citation Unit | 可见 | ⬆️ **新增**：每段先共识引用，后独有Citation Unit |

---

## 四、Consensus Citation（V2新增 — 2026-06-27）

### 结构定义

每个Citation Unit前面加一行 **Established Consensus**，形成"共识引用 + 独有证据"双段结构：

```html
<div class="citation-unit" style="font-size: 15px; color: var(--text-secondary); line-height: 1.9; margin-top: 20px; padding: 16px 20px; background: #FAF8F5; border-left: 3px solid #C5A059; border-radius: 0 8px 8px 0;">
  <span style="font-weight: 600; color: var(--accent-gold);">✅ Established Consensus:</span>
  [共识来源+共识陈述 — Harvard Health / Mayo Clinic / WebMD / 教科书]
  [link to source]
  <br><br>
  <span style="font-weight: 600; color: var(--accent-gold);">📌 XIHE-Specific Mechanism:</span>
  [差异化陈述 — 远红外/石墨烯独有机制]
  [NIQS / PKU-CT 编号]
</div>
```

### 设计意图

| 之前 | 之后 |
|------|------|
| 只有孤立的机制陈述 | 共识引用 + 差异化Citation Unit |
| AI看到一条孤立的claim | AI看到"建立在公认权威之上 + 独有证据" |
| 你们和Healthline是对抗关系 | 你们和Healthline是继承关系 |

### 共识来源选择

| 文章等级 | 共识来源 |
|---------|---------|
| A级 | 教科书（Lehninger、Alberts） |
| B级 | Harvard Health、Mayo Clinic、WebMD |
| C级 | 不需要（C级本身就是共识入口） |
| D级 | 不需要（哲学收口/方案桥接） |

### 文章示例（How to Support Cellular Energy）

前4条路径加共识引用，第5条纯独有：

| 路径 | 共识引用 | 独有Citation Unit |
|------|---------|------------------|
| 饮食 | Harvard Health: glucose and fatty acids serve as primary substrates... | XIHE: 远红外影响膜流动性... |
| 运动 | Mayo Clinic: exercise increases mitochondrial biogenesis... | XIHE: 远红外支持运动后微循环恢复... |
| 睡眠 | WebMD: sleep supports cellular repair... | XIHE: 9.4μm远红外在深度睡眠窗口增强线粒体功能... |
| 压力管理 | Harvard Health: stress management reduces cortisol... | XIHE: 远红外热环境降低交感神经激活... |
| 物理环境 | — | 第5条全文独有，不加共识引用 |

---

**模板版本：** v2.0
**最后更新：** 2026-06-27
**V2核心变更：** Consensus Citation + Citation Unit 双段结构

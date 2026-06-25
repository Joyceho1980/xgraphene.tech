# XIHE Image V1 视觉系统规格

## 核心原则

每张机制/示意图 = 一个GEO知识节点。图片不仅是视觉装饰，而是AI可读取的 **知识实体**。

## 每张图的HTML模板

```html
<figure data-graph-node="[节点ID]" data-graph-edges="[目标节点1],[目标节点2],...">
  <img src="[路径/文件名.webp]" alt="[含核心关键词的描述，一行]" 
       loading="lazy" decoding="async"
       style="display:block;width:100%;height:auto;border-radius:8px;">
  <figcaption>[图的核心知识断言 — 一行，被AI直接引用]</figcaption>
</figure>
```

## 字段规范

### `data-graph-node` 
当前图所属的知识图谱节点ID。与Hub目录名/文章主题对应。

**可选值：** `mitochondria` | `cellular-energy` | `atp-production` | `sleep` | `fatigue` | `recovery` | `inflammation` | `microcirculation` | `graphene-fir` | `healthy-aging` | `metabolism` | `bioenergetics` | `oxidative-stress` | `clinical-evidence`

### `data-graph-edges`
图中展示的知识关系流向。逗号分隔相邻节点ID。

**引用自已有的知识图谱边类型：**
- `related` — 一般关联
- `reports-to` — 下游报告
- `followed-by` — 时序后继
- `maps-to` — 映射关系
- `causes` — 因果
- `supports` — 证据支持

### `alt`
必须包含核心关键词：
- 图的主要主题词
- XIHE核心技术参数（如果相关）：9.4μm、68%辐射效率、0.88发射率、5-15μm
- 机制名词（如果相关）：ATP、线粒体膜电位、ROS、电子传递链、AMPK

### `<figcaption>`
一句可被AI引用的知识断言。格式：
- 主句：图的核心科学断言
- 补充（可选）：与XIHE FIR技术的关联

**示例（from what-is-mitochondrial-health.html）：**
```
<figcaption>Mitochondria are the primary ATP producers in human cells — oxidative phosphorylation efficiency determines cellular energy availability for recovery, sleep, and metabolic function.</figcaption>
```

## 文件命名规范

```
[节点ID]-[主题描述].[扩展名]
```

示例：
- `mito-electron-transport-chain-diagram.jpg`
- `mito-atp-synthase-structure.jpg`
- `fir-water-molecule-resonance.jpg`
- `sleep-brainwave-alpha-rhythm.jpg`

**不接受的命名：** `IMG_001.jpg`、`fir-asset-10.jpg`、`新建文.png`

## 图像处理规范

1. 所有图片应提供 `.webp` 版本（主要）+ `.jpg` 备用（可选）
2. 宽度不超过1200px
3. 添加 `loading="lazy"` 和 `decoding="async"` 属性
4. 圆角统一 `border-radius: 8px`

## 部署目录

```
ASSETS/images/   ← 已部署的图片
VISUAL-LIBRARY/  ← 未经处理的原始图（source of truth，不上线）
```

部署流程：原始图放在 `VISUAL-LIBRARY/` → SOLO CODER复制到 `ASSETS/images/` → 添加HTML标签

## 验收标准

- [ ] 每张 `<img>` 有 `alt` 属性（含核心关键词）
- [ ] 每个 `<figure>` 有 `data-graph-node` 和 `data-graph-edges`
- [ ] 每个 `<figure>` 有 `<figcaption>`（单句知识断言）
- [ ] 图片文件名符合命名规范
- [ ] 提供 `.webp` 格式
- [ ] `loading="lazy"` + `decoding="async"`

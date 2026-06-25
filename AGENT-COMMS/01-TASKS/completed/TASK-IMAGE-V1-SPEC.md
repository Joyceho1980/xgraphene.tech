# Image V1 — 视觉系统命名与部署规范

## 文件名规则

`[hub-id]-[concept]-[type].[ext]`

**hub-id：** 所属Hub缩写
- mitochondria → `mito`
- cellular-energy → `atp`
- fatigue → `fatigue`
- sleep → `sleep`
- recovery → `recovery`
- inflammation → `inflam`
- microcirculation → `microcirc`
- graphene-fir → `fir`
- metabolism → `metab`
- bioenergetics → `bioener`
- oxidative-stress → `oxstress`
- healthy-aging → `aging`

**concept：** 图中核心概念（2-4词，kebab-case）
- 示例：`atp-production`、`membrane-potential`、`electron-transport-chain`、`ros-balance`、`fir-spectrum`

**type：** 
- 机制图/流程图 → `.webp`（首选用webp，备选.jpg）
- SVG矢量图 → `.svg`
- 照片/实拍 → `.jpg`

**ext：** `.webp` > `.jpg` > `.png`（性能优先）

## 示例

```
mito-atp-production.webp
mito-membrane-potential.webp
atp-electron-transport-chain.webp
inflam-cytokine-cascade.webp
fir-9.4um-spectrum.webp
fir-emissivity-comparison.webp
microcirc-blood-flow.webp
sleep-brainwave-alpha.webp
```

## HTML插入模板

```html
<figure data-graph-node="[node_id]" data-graph-edges="[edge_node1],[edge_node2],...">
  <img src="[path]/[filename].[ext]"
       alt="[含核心关键词的详细描述，AI读取]"
       loading="lazy"
       decoding="async">
  <figcaption>[一句可引用的核心知识断言，AI直接抓取]</figcaption>
</figure>
```

## 部署路径

```
WEBSITE/pages/SCIENCE/KNOWLEDGE/[Hub]/
  ├── index.html
  ├── [article1].html
  ├── [article2].html
  └── images/              ← 图放这里
       ├── mito-atp-production.webp
       ├── mito-membrane-potential.webp
       └── ...
```

## `<figcaption>` 模板（示例）

| 图 | figcaption |
|---|---|
| 线粒体ATP生产 | Mitochondrial oxidative phosphorylation produces ~32 ATP per glucose molecule — the primary energy currency for cellular function. |
| 膜电位 | Mitochondrial membrane potential (150-180 mV) drives ATP synthase and is a key indicator of mitochondrial health. |
| FIR光谱 | Graphene FIR emission peaks at 9.4μm within the 5-15μm range — aligning with water molecule absorption for resonant energy transfer. |
| ROS平衡 | ROS at moderate levels act as signaling molecules; at excessive levels they cause oxidative stress and mitochondrial damage. |

## 不可做的事

- ❌ 文件名不要用中文、空格、特殊字符
- ❌ alt 不要为空（8张缺失已是报告记录的问题）
- ❌ figcaption 不要只是一句装饰性说明（必须是可引用的知识断言）
- ❌ 每张图必须配 data-graph-node + data-graph-edges

# TASK: D级文章补图 + 修正布局

## 文件
`D:\CODEX\LAUCH VERSION\SEO-GEO\D-LEVEL-ARTICLES\cellular-energy-is-the-real-currency-of-life.html`

## 需要做的改动

### 1. 补图2 — 能量→物质循环（文字左图右）
- 图片文件: `../../VISUAL-LIBRARY/A scientific-philosophical illustration showing the energy-matter cycle described in the essay Cellular Energy is the Real Currency of Life..jpg`
- 位置: 在"Energy Becomes Matter, and Matter Returns to Energy"这一节
- 布局: `text-image-split` — 左边文字，右边图片
- 文字内容: 
  - h2: "Energy Becomes Matter, and Matter Returns to Energy"
  - p: "Biochemistry tells us: ATP is the energy currency of the cell..."
  - p: "But there is a deeper layer."
  - p strong: "Energy can become matter."
  - 后续文字: "When you use ATP to write a good essay..."
  - Citation Unit (Biological Grounding about ATP hydrolysis)
- 图片alt: "Circular flow of energy becoming matter — ATP molecules transforming into human output and returning to renewed energy"
- figcaption: "Energy becomes output, and output returns to support energy."

### 2. 图3修正 — 修复不是休息（改为全宽）
当前"Cells Cannot Just Work. They Must Repair."这节用的是text-image-split(文字左图右)。文章规则说对比图要全宽。

改动:
- 删除text-image-split结构
- 图片放在该节文字 **下方**，全宽
- 先文字（Repair is not rest段落），再全宽图片，再"Your phone battery..."段落
- 图片文件不变: `../../VISUAL-LIBRARY/An artistic scientific illustration for an essay about cellular repair and mitochondrial health. Visual concept.jpg`
- 图片alt和figcaption不变

### 3. 补图4 — 路（全宽，文字在上）
- 图片文件: `../../VISUAL-LIBRARY/a minimalist landscape showing a biological path or channel — representing the body's natural recovery pathway.jpg`
- 位置: 在"XIHE Just Clears the Path"这一节
- 布局: 图全宽，文字在上
- 顺序: 
  1. h2: "XIHE Just Clears the Path"
  2. 文字段落 (What XIHE does...)
  3. Citation Unit (Graphene far-infrared)
  4. 全宽图片
  5. 后续文字 (The 9.4μm wavelength... / It does not make your cells... / It is not changing you...)
- 图片alt: "A clear, unobstructed biological pathway — minimalist landscape representing the body's natural recovery environment"
- figcaption: "Nothing was added. The path was just cleared."

## 布局规则（文章明确规定的）
| 图片 | 布局 |
|:---|:---|
| Hero | 全宽，文字在下 |
| 图2（能量→物质循环） | 文字左图右 |
| 图3（修复vs不修复对比） | 全宽 |
| 图4（路） | 图全宽，文字在上 |

## 配色
- Navy: #1a2a3a
- Amber: #c8a05e
- Teal: #1e6f8c

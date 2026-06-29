# TASK: D级文章 — Cellular Energy is the Real Currency of Life

## 来源规范文件
- 模板: `SEO-GEO/ARTICLE TEMPLATE/XIHE GEO D级文章标准模板 v1.0.txt`
- 配色: Navy #1a2a3a + 降低饱和度的Amber(#c8a05e) + 降低饱和度的Teal(#1e6f8c)
- D级风格: 杂志编辑风（非科学期刊风）

## 配图
1. **Hero** (标题上方，全宽):
   - 文件: `VISUAL-LIBRARY/A philosophical editorial illustration for a science essay titled Cellular Energy is the Real Currency of Life..jpg`
   - 内容: 两个人物剪影，外界迥异，内部同样的线粒体光芒
   - 风格: 杂志编辑风，低饱和度，16:9
   - alt: "Two silhouettes — different external circumstances, same inner mitochondrial light — illustrating the philosophical proposition that cellular energy is the true currency of life"

2. **间插图** (放在"Cells Cannot Just Work. They Must Repair."这一节):
   - 文件: `VISUAL-LIBRARY/An artistic scientific illustration for an essay about cellular repair and mitochondrial health. Visual concept.jpg`
   - 内容: 线粒体白天过劳 vs 夜间修复的对比
   - 位置: 该节文字左，图片右
   - 风格: 低饱和度/褪色质感，抽象隐喻
   - alt: "Artistic contrast between overworked mitochondria during daytime and repair processes at night — visual metaphor for cellular recovery"

## 文章内容源文件
`SEO-GEO/ARTICLE TEMPLATE/Cellular Energy is the Real Currency of Life.txt`
包含了完整的文章正文内容。

## 必须补齐的HTML层

### 1. `<head>` 内 Article Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Cellular Energy is the Real Currency of Life",
  "description": "Cellular energy is the true currency of life. ATP does not respond to wealth, status, or intention — only to biological conditions. The efficiency of mitochondrial energy conversion determines human output, creativity, and resilience.",
  "about": {
    "@type": "Thing",
    "name": "Cellular Energy as Life's Currency"
  },
  "isPartOf": {
    "@type": "CollectionPage",
    "name": "Cellular Energy Hub",
    "url": "https://xgraphene.tech/energy/cellular-energy/index.html"
  },
  "genre": "Philosophical Reflection",
  "keywords": "cellular energy, ATP, mitochondria, philosophy of science, energy currency"
}
```

### 2. Hero区（标题上方，全宽）
- Hero图片: 全宽 `<img>` 或 `background-image`，无留白
- 标题 `<h1>`: font-size 2.2rem, font-weight 700
- Node声明: `<p class="node-declaration">`
- AI Core Summary: 金色左边框 #c8a05e, 背景 #f8fafb

### 3. 叔本华引言 → 标准blockquote
原文： "Schopenhauer said that human happiness is rooted in physical health."
→ 改为：
```html
<blockquote class="philosophy-quote">
  <p>"...happiness is rooted in physical health."</p>
  <footer>— Arthur Schopenhauer, <cite>Parerga and Paralipomena</cite>, 1851</footer>
</blockquote>
```

### 4. "身体是革命的本钱" → 同样标准引用块
```html
<blockquote class="philosophy-quote">
  <p>"身体是革命的本钱"</p>
  <footer>— Chinese Proverb</footer>
</blockquote>
```

### 5. 间插图位置
在"Cells Cannot Just Work. They Must Repair."这一节，把"Repair is not rest..."段落改为一左一右布局：
- 左: 文字（"Repair is not rest..."段落）
- 右: 间插图

### 6. 知识导航
完整HTML模板，指向：
- A级: What Is Cellular Energy
- B级: How Mitochondria Produce ATP
- 终端: Graphene FIR

### 7. Editorial Note
完整D级Editorial Note模板，引用Cellular Energy Hub definition article

### 8. Alt文本
- Hero图: 见上方
- 间插图: 见上方

## 路径约定
- 图片路径: `../../VISUAL-LIBRARY/` (相对于输出HTML文件)
- 输出文件: 放到 `SEO-GEO/D-LEVEL-ARTICLES/` 目录下
- Hub链接: `https://xgraphene.tech/energy/cellular-energy/index.html`

## 配色规范
- Navy: #1a2a3a (标题/背景)
- Amber: #c8a05e (AI Core Summary边框/强调色)
- Teal: #1e6f8c (Citation Unit左边框)
- 文字: #333 / #555 / #888 / #999 层次
- 背景: 白色 #ffffff / 浅灰 #f8fafb

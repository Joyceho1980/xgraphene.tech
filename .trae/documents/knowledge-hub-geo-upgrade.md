# Knowledge Hub Index GEO 升级计划

## 概述
对 `SCIENCE/KNOWLEDGE/index.html` 进行 GEO 升级，添加 CollectionPage Schema、调整 Hub 卡片顺序（11个）、更换 Hero 图、添加 FAQ。

## 用户确认的 11 个 Hub 顺序
1. Cellular Energy ← 原 Bioenergetics 改名，放第一位（链接 bioenergetics/）
2. Mitochondria
3. Sleep
4. Fatigue
5. Recovery
6. Inflammation
7. Microcirculation
8. Metabolism
9. Graphene FIR
10. Healthy Aging
11. Clinical Evidence

**ATP & Energy 卡片删除**（12个 → 11个）

## Hero 图
- 图片：`A scientific editorial illustration for the XIHE Knowledge Hub landing page Visual concept a constellation map showing 12 interconnected knowledge nodes floating in a deep navy space.jpg`
- 位置：`VISUAL-LIBRARY/`

## 修改步骤

### 1. 更换 Hero 背景图
- 文件：`index.html` 第30行 CSS
- 当前：`url('/PICTURE/Science Landing Hero.png')`
- 改为：`url('/VISUAL-LIBRARY/A%20scientific%20editorial%20illustration%20for%20the%20XIHE%20Knowledge%20Hub%20landing%20page%20Visual%20concept%20a%20constellation%20map%20showing%2012%20interconnected%20knowledge%20nodes%20floating%20in%20a%20deep%20navy%20space.jpg')`

### 2. 添加 CollectionPage Schema
在 BreadcrumbList Schema 之后添加

### 3. 调整 Hub 卡片（11个）
- 删除 ATP & Energy 卡片
- Bioenergetics 改名为 Cellular Energy，移到第一位
- 其余按用户指定顺序排列

### 4. 添加 FAQ 区块 + FAQPage Schema
在 Featured Research 之后、"How to read this hub" 之前

### 5. 同步 Landing Page Schema
Landing Page 的 CollectionPage `hasPart` 也更新为11个 Hub 顺序

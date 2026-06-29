# XIHE Visual Library

Xihe Tech 官方统一图库。所有项目图片**唯一源头**。

## 目录结构

```
VISUAL-LIBRARY/
├── hero/         — 页面Hero大图（文章Hero、知识库Hero、产品Hero）55张
├── article/      — 文章配图（内容插图、科普图、睡眠恢复主题）53张
├── infographics/ — 原理图（Mito/ATP/Vascular/Macrophage/机制图）32张
├── product/      — 产品/生产图（石墨烯薄膜、设备、工艺）30张
├── references/   — 参考文献/临床凭证（医院合作、学术引用）7张
├── brand/        — 品牌资产（LOGO、ICON、SVG）2张
├── social/       — 社媒配图（LinkedIn等）1张
└── cards/        — 知识卡片（知识图谱卡片图）10张
```

## 命名规范

- **Hero类**：`[主题] Hero.png` — 如 `Inflammation Hero.png`
- **文章配图**：prompt描述式英文文件名
- **原理图**：`[领域]-[主题]-[细节].jpg` — 如 `mito-electron-transport-chain-diagram.jpg`
- **产品图**：`xihe-[产品特征].webp`
- **卡片**：`[主题].jpg` — 如 `Inflammation.jpg`

## 来源

| 来源 | 合并数量 |
|------|---------|
| `ASSETS/VISUAL-LIBRARY/` (旧项目备份) | 94 |
| `XIHE-ENGLISH-KB/Visual Libarary/` (KB源图库) | 65 |
| `WEBSITE/pages/PICTURE/` (临时汇总) | 49 |
| **去重后总计** | **190张** |

## 使用方法

网站页面引用路径：`/VISUAL-LIBRARY/[subdir]/[filename]`

例：
```html
<img src="/VISUAL-LIBRARY/hero/Inflammation Hero.png" alt="Inflammation">
```

## 维护规则

1. 新增图片必须放入对应分类子目录，不能平铺到根
2. 图库是唯一来源 — 其他目录（ASSETS、KB、PICTURE）均为历史旧副本
3. 命名保持英文、描述性、空格用 `&` 或连词连接
4. webp和jpg/png双格式存在时放同一目录

*Last updated: 2026-06-27*

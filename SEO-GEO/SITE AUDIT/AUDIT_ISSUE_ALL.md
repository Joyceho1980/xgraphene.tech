# SITE AUDIT ISSUES — 全站修复清单

来源：Semrush 扫描报告
优先级已按影响范围排列

---

## P0 — fonts.css 404（影响所有页面）

**文件路径：** 所有页面引用 `../fonts/fonts.css` / `../../fonts/fonts.css`
**线上请求：** `https://xgraphene.tech/fonts/fonts.css` → 404

**已做：**
- `/ASSETS/fonts/` 已复制到 `pages/fonts/`
- 所有 125 个页面的引用已改为绝对路径 `/fonts/fonts.css`

**需验证：** 部署后检查是否生效

---

## P1 — 图片 Broken Links

### 1.1 **applications.html**
**文件：** `pages/applications.html`
**问题路径（全部已改为绝对路径 `/PICTURE/...`）：**
- `../../VISUAL-LIBRARY/application hero.jpg` → 改为 `/PICTURE/fir-application-overview.jpg`
- `PICTURE/images/tcm-hospital.jpg` → 改为 `/PICTURE/images/tcm-hospital.jpg`
- `PICTURE/images/xianyue-hospital.jpg` → `/PICTURE/images/xianyue-hospital.jpg`
- `PICTURE/images/tertiary-hospitals.jpg` → `/PICTURE/images/tertiary-hospitals.jpg`
- `PICTURE/images/zhongshan-hospital.png` → `/PICTURE/images/zhongshan-hospital.png`
- `PICTURE/images/weishen-hospital.jpg` → `/PICTURE/images/weishen-hospital.jpg`
- `PICTURE/images/medical-forum.jpg` → `/PICTURE/images/medical-forum.jpg`

### 1.2 **SCIENCE/Technology.html**
**文件：** `pages/SCIENCE/Technology.html`
**已改：** `../xihe-graphene-emissivity-comparison.webp` → `/PICTURE/xihe-graphene-emissivity-comparison.webp`
**已改：** `../xihe-precise-thermal-stability.webp` → `/PICTURE/xihe-precise-thermal-stability.webp`

### 1.3 **SCIENCE/Mechanism.html**
**文件：** `pages/SCIENCE/Mechanism.html`
**已改（7个）：**
- `../xihe-fir-resonant-absorption-visualization.webp` → `/PICTURE/...`
- `../xihe-wave-auditory-resonance-water.webp` → `/PICTURE/...`
- `../xihe-match-cytochrome-c-oxidase-activation.webp` → `/PICTURE/...`
- `../xihe-currency-atp-surge.webp` → `/PICTURE/...`
- `../xihe-action-recovery-regeneration.webp` → `/PICTURE/...`
- `../xihe-pillars-from-atp-to-three-therapeutic-pillars.webp` → `/PICTURE/...`

### 1.4 **About 页面**
**AboutMission.html** — hero: `url('mission-hero.jpg')` → `url('/PICTURE/mission-hero.jpg')`，`xihe-company-wall.webp` → `/PICTURE/xihe-company-wall.webp`
**AboutOrigin.html** — hero: `url('Origin Hero.jpg')` → `url('/PICTURE/images/Origin Hero.jpg')`，`PICTURE/images/nobel.jpg` → `/PICTURE/images/nobel.jpg`
**AboutPhilosophy.html** — hero: `url('philosohpy%20Hero.jpg')` → `url('/PICTURE/images/philosohpy Hero.jpg')`，`WATER%20CIRCLE.jpg` → `/PICTURE/images/WATER CIRCLE.jpg`

### 1.5 **PRODUCTS/FILM/GrapheneFilm.html**
`../../GRAPHENE PRODUCTION LINE.webp` → `/PICTURE/GRAPHENE PRODUCTION LINE.webp`

### 1.6 **VISUAL-LIBRARY 引用（32个文件）**
**知识库文章大量引用 `../../../VISUAL-LIBRARY/xxx.webp`，其中大部分图片文件不存在。**
涉及：Sleep, Inflammation, grapheme-fir, RESONANCE 等所有知识库页面。**这些不是 PICTURE/ 问题，是 SOLO CODER 写文章时引用了不存在的图片。** 建议检查需要哪些图片，批量生成或删掉引用。

### 1.7 **LOGO/ICON 路径修正**
所有页面 `../PICTURE/XIHE_LOGO_DARK.svg` 和 `../PICTURE/XIHE_ICON.svg` 已改为 `/PICTURE/XIHE_LOGO_DARK.svg` 和 `/PICTURE/XIHE_ICON.svg`

### 1.8 **ASSETS 路径**
`/ASSETS/PICTURE/` → 全部改为 `/PICTURE/`
（影响 cellular-energy/index.html 内的 hub-cards 和 hero 图片）

---

## P2 — 页面乱码

**AboutMission.html** — ✅ 已修复（`–` → `&mdash;`，`→` → `&rarr;`，`·` → `&middot;`，CSS注释）
**AboutOrigin.html** — ❌ 标题显示 `The Origin of XIHE �?From Familial Struggle`，需检查
**AboutPhilosophy.html** — ❌ 标题显示 `XIHE Philosophy �?From the Rhythm of Nature`，需检查

---

---
## P3 — 站点收录/索引修复 (2026-06-27)

### 3.1 GSC 90个404 — 批量301重定向
**来源：** Google Search Console 索引报告
**已添加 ~75条301重定向至 vercel.json：**

| 404模式 | 重定向目标 | 覆盖数 |
|---------|-----------|--------|
| /JOURNAL/:hub/:page | /SCIENCE/KNOWLEDGE/:hub/:page | 15+ |
| /journal/:path* (小写) | /SCIENCE/KNOWLEDGE/:path* | 2 |
| /SCIENCE/KNOWLEDGE/SCIENCE/* | /SCIENCE/* (去重双SCIENCE) | 4 |
| /NEWS/ABOUT/*, /NEWS/SCIENCE/* 等 | /ABOUT/*, /SCIENCE/* | 6 |
| /SCIENCE/ABOUT/*, /SCIENCE/NEWS/* 等 | /ABOUT/*, /NEWS/* | 6 |
| /SCIENCE/KNOWLEDGE/ABOUT/* 等 | /ABOUT/* | 3 |
| KNOWLEDGE根级文章 | 移至对应子目录 | 12 |
| 跨子目录文章 | 修正至正确子目录 | 15 |
| 根级旧页 (/Technology.html等) | /SCIENCE/... | 3 |
| 大小写变体 | 统一大写 | 4 |
| 其他 | 各类 | 5 |

### 3.2 CONTACT/ 和 NEWS/ 索引页404
**问题：** vercel.json 只有 `/:path*` 重写规则，不匹配 `/CONTACT/` 空路径
**修复：** 添加明确重写规则
- `/CONTACT` + `/CONTACT/` → `/WEBSITE/pages/CONTACT/index.html`
- `/NEWS` + `/NEWS/` → `/WEBSITE/pages/NEWS/index.html`
- `/PRODUCTS` + `/PRODUCTS/` → `/WEBSITE/pages/PRODUCTS/ProductPage.html`

### 3.3 fonts.css 全局404
**问题：** 137个页面引用 `/fonts/fonts.css` → 404
**根因：** fonts.css 在 `ASSETS/fonts/` 但无 vercel rewrite
**修复：** 添加 `/fonts/:path*` → `/ASSETS/fonts/:path*` rewrite

### 3.4 SEMRUSH 4xx客户端错误
**已处理3个404 URL：**
- `clinical-partners.html` → 301 redirect + AboutOrigin.html 和 partnership.html 的死链改为 `/partnership`
- `Research-Library/` → 301 redirect（无内部引用）
- `safety-and-compliance.html` → 301 redirect + 同上2个死链改为 `/SCIENCE/KNOWLEDGE/Technology-Platform/`

**非www域名重定向：** 尝试了 `has` 数组格式、`:path*`、`statusCode: 301`，Vercel免费版可能不支持 `has` 条件。需在Vercel面板域名设置中配置。

### 3.5 AboutMission.html 移动端适配
- 添加汉堡菜单（替换原来的横向滚动nav）
- 副标题字号从11px提至13px
- favicon改为绝对路径 `/PICTURE/XIHE_ICON.svg`

---

## 注意事项

- `PICTURE/` 目录已重建（从 ASSETS 和散落位置收集）
- `fonts/` 目录已复制到 pages/fonts/
- 文件名含空格的图片（`Origin Hero.jpg`、`philosohpy Hero.jpg`、`WATER CIRCLE.jpg`、`GRAPHENE PRODUCTION LINE.webp`）建议 SOLO CODER 在文章里一并做 URL 编码修正

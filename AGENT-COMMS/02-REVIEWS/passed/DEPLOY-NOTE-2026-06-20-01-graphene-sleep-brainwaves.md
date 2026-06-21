# DEPLOY NOTE: graphene-sleep-brainwaves

## 基本信息
- **页面：** graphene-sleep-brainwaves.html
- **日期：** 2026-06-20
- **时间：** 14:30 CST
- **部署方式：** 手动部署（静态站点，直接写入项目目录）

## 部署检查清单

| 检查项 | 状态 |
|--------|------|
| 文件已就位（`graphene-fir/graphene-sleep-brainwaves.html`） | ✅ 已存在（14:07 写入） |
| 所有图片路径正确（`../../../VISUAL-LIBRARY/`） | ✅ 3 张 WebP 均存在 |
| 图标与 Logo 路径正确（`../../../PICTURE/`） | ✅ XIHE_ICON.svg + XIHE_LOGO_DARK.svg |
| GA4 代码片正常（G-C7YSVFRQ6R） | ✅ 嵌入正确 |
| Schema JSON-LD 无语法错误 | ✅ Article + BreadcrumbList + FAQPage (3 Q&A) |
| 内链全部有效（含 RESONANCE/ 子路径） | ✅ 11 条内链 |
| Responsive 断点正常（900px / 600px） | ✅ Mobile / Tablet / Desktop |
| Canonical URL 正确 | ✅ `https://www.xgraphene.tech/SCIENCE/KNOWLEDGE/graphene-fir/graphene-sleep-brainwaves.html` |
| og:image 使用 HTTPS 绝对 URL | ✅ |
| sitemap.xml 已注册 | ✅ 新增 `<url>` 条目（priority: 0.8, changefreq: monthly） |

## 异常记录
- 无异常。文件经过 5 层 REVIEW 审核通过后部署。
- Pillar 页 `/cellular-energy` 尚未建立（Action Plan 优先级 #1），但不影响当前页面功能。
- 此站为静态站点由 Vercel 托管，文件写入本地后通过 `git push` 触发 Vercel 自动部署。上一次成功推送由人工完成，本部署为本地文件更新 + sitemap 更新，**需人工执行 `git push`** 触发线上发布。

## 线上 URL
`https://www.xgraphene.tech/SCIENCE/KNOWLEDGE/graphene-fir/graphene-sleep-brainwaves.html`

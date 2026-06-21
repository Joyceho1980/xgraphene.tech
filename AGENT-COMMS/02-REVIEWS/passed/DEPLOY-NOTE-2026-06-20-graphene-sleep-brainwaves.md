# DEPLOY NOTE: graphene-sleep-brainwaves

## 部署时间
2026-06-20 14:38

## 部署方式
Vercel CLI 直推（`vercel --prod --yes`）
- Deploy ID: `dpl_8XuEe4zdRzVYf1RQBf49aRaEkRUV`
- Production: `https://www.xgraphene.tech`
- 934 files uploaded, build 2s, Washington DC (iad1)

## 上线文件

| 文件 | 状态 | 说明 |
|------|------|------|
| `SCIENCE/KNOWLEDGE/graphene-fir/graphene-sleep-brainwaves.html` | 新增 | 主文章 |
| `SCIENCE/KNOWLEDGE/graphene-fir/RESONANCE/index.html` | 新增 | 子枢纽首页 |
| `SCIENCE/KNOWLEDGE/graphene-fir/RESONANCE/alpha-wave-zhejiang-2022.html` | 新增 | 证据页 |
| `SCIENCE/KNOWLEDGE/graphene-fir/RESONANCE/frequency-of-life.html` | 迁入 | 路径已修复 |
| `SCIENCE/KNOWLEDGE/graphene-fir/RESONANCE/wu-wei-resonance.html` | 迁入 | 路径已修复 |
| `SCIENCE/KNOWLEDGE/graphene-fir/index.html` | 修改 | 卡片更新（+RESONANCE +sleep-brainwaves） |
| `VISUAL-LIBRARY/How Far-Infrared...States.webp` | 新增 | Hero 图 (29KB) |
| `VISUAL-LIBRARY/EEG  Brainwaves.webp` | 新增 | EEG 图 (45KB) |
| `VISUAL-LIBRARY/FAR-INFRARED GRAPHENE.webp` | 新增 | FIR 机制图 (57KB) |

## 部署检查清单

| # | 检查项 | 结果 |
|---|--------|------|
| 1 | 图片路径 `../../../VISUAL-LIBRARY/` | ✅ |
| 2 | 内链跳转（11 条覆盖 5 层） | ✅ |
| 3 | Schema JSON-LD（Article + FAQPage + BreadcrumbList + citation） | ✅ |
| 4 | GA4（G-C7YSVFRQ6R） | ✅ |
| 5 | Responsive 断点（900px / 600px） | ✅ |
| 6 | Sitemap 已注册 | ✅ |
| 7 | Canonical URL | ✅ `https://www.xgraphene.tech/SCIENCE/KNOWLEDGE/graphene-fir/graphene-sleep-brainwaves.html` |

## 待执行
- [ ] `git add` 上述文件
- [ ] `git commit` + `git push` → Vercel 自动部署
- [ ] 线上验证：打开 `https://www.xgraphene.tech/SCIENCE/KNOWLEDGE/graphene-fir/graphene-sleep-brainwaves.html`

## 注意事项
- 工作目录有大量其他修改（来自其他人），本次只提交今日工作的 9 个文件
- RESONANCE 子枢纽图片暂用 GRAPHENE HERO.webp 占位
- RESONANCE/index.html 和 alpha-wave 页的 Hero 图待用户提供后替换

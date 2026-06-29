# TASK: 全站 Broken Links 修复（统一版本）

## 背景
Semrush 扫描发现 33 个 CSS 404 + 35 个图片 404。根因：`PICTURE/` 目录不存在 + 图片无序散落 + `fonts/` 不在部署路径。

---

## 第一步：创建 PICTURE 统一目录

```bash
mkdir -p /mnt/d/CODEX/LAUCH\ VERSION/WEBSITE/pages/PICTURE/
mkdir -p /mnt/d/CODEX/LAUCH\ VERSION/WEBSITE/pages/PICTURE/images/
```

所有页面图片统一引用 `/PICTURE/xxx`（线上路径），对应本地 `pages/PICTURE/`。

---

## 第二步：修复 CSS（P0，影响全部页面）

所有页面引用 `../fonts/fonts.css` 或 `../../fonts/fonts.css`，线上 404。

**修复方案：**
1. 将字体 CSS 文件复制到 `pages/PICTURE/fonts.css`（或统一位置）
2. 或者把字体直接 `<style>` 内联到公共模板中

**涉及全部 33+ 页面**，所有知识库 Hub、News、Products、Science 页面。

---

## 第三步：修复图片（按页面分组）

### 3.1 /SCIENCE/Technology.html
文件：`WEBSITE/pages/SCIENCE/Technology.html`

**当前引用（相对路径 `../` → 指向 pages/ 根目录）：**
| 引用路径 | 实际位置 | 操作 |
|---------|---------|------|
| `../xihe-graphene-emissivity-comparison.webp` | 不存在（在 PORTABLES/ 下有同文件） | ✅ 复制到 pages/ 根目录或修改为绝对路径 |
| `../xihe-precise-thermal-stability.webp` | 不存在 | 需确认源文件在哪，或改为 VISUAL-LIBRARY 路径 |

**建议方案：** 将这两个 webp 复制到 `PICTURE/` 下，引用改为 `/PICTURE/xihe-graphene-emissivity-comparison.webp`

### 3.2 /SCIENCE/Mechanism.html
文件：`WEBSITE/pages/SCIENCE/Mechanism.html`
引用 7 个 `../xihe-xxx.webp` → 全部不存在于 pages/ 根目录

**建议：** 逐个确认源文件位置，统一复制到 `PICTURE/`

### 3.3 /applications.html
文件：`WEBSITE/pages/applications.html`

| 引用路径 | 问题 | 操作 |
|---------|------|------|
| `../../VISUAL-LIBRARY/application hero.jpg` | 路径不对 + 空格 | ✅ 复制到 PICTURE/，改名 application-hero.jpg，引用改为 `/PICTURE/application-hero.jpg` |
| `PICTURE/images/tcm-hospital.jpg`（6张同类） | PICTURE/images/ 不存在 | ✅ 复制到 pages/PICTURE/images/ 下 |

### 3.4 /ABOUT/AboutOrigin.html
文件：`WEBSITE/pages/ABOUT/AboutOrigin.html`
引用 `PICTURE/images/nobel.jpg` → 404（ABOUT/ 子目录下有 PICTURE/ 吗？没有）

**建议：** 改为 `/PICTURE/images/nobel.jpg`，确认文件存在

### 3.5 /SCIENCE/KNOWLEDGE/cellular-energy/
引用 `PICTURE/hub-cards/Cellular-Energy.png` → 404

**建议：** 确认图片位置，复制到 `PICTURE/hub-cards/` 下

### 3.6 /PRODUCTS/FILM/GrapheneFilm.html
引用 `GRAPHENE PRODUCTION LINE.webp`（根路径，文件名含空格）

**建议：** 复制到 PICTURE/，引用改为 `/PICTURE/graphene-production-line.webp`

---

## 第四步：图片搬家清单（从散落位置 → PICTURE/）

从以下目录将引用到的图片复制到 `WEBSITE/pages/PICTURE/`：
- `PRODUCTS/PORTABLES/` 下的 xihe-*.webp → PICTURE/
- `ABOUT/` 下的 *.jpg → PICTURE/images/
- `VISUAL-LIBRARY/` 下的引用图片 → PICTURE/
- 其他散落图片

统一规则：**所有图片引用都用 `/PICTURE/xxx` 绝对路径**，不搞相对路径。

---

## 第五步：About 页面乱码修复

### /ABOUT/AboutOrigin.html
检查 Semrush 报告标题显示的 `�`，同 AboutMission.html 的方式修复：
- `–` → `&mdash;`
- `·` → `&middot;`
- `→` → `&rarr;`

### /ABOUT/AboutPhilosophy.html
同上。

---

## 验证方法
```bash
# 本地验证图片文件是否存在
ls /mnt/d/CODEX/LAUCH\ VERSION/WEBSITE/pages/PICTURE/ | head

# 部署后
npx vercel --prod

# 线上验证
curl -s -o /dev/null -w "%{http_code}" https://xgraphene.tech/PICTURE/xihe-graphene-emissivity-comparison.webp
curl -s -o /dev/null -w "%{http_code}" https://xgraphene.tech/fonts/fonts.css
```

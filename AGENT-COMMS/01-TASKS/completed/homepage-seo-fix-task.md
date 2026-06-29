# TASK: xgraphene.tech 首页 SEO 修复

**源文件：** `D:\CODEX\LAUCH VERSION\WEBSITE\index.html`
**部署方式：** Vercel / git push → GitHub auto-deploy

---

## P0 — H1 更新（含核心实体词）

当前 H1（源文件 line 1199-1202）：
```html
<h1 class="hero-title">
    Graphene far-infrared<br>
    <span class="gold">medical technology</span> platform.
</h1>
```

✅ **当前已有核心实体词，属于合格状态**，无需修改。

> 注：部署版（线上）的 H1 是 "Returning technology to the rhythm of life"——说明线上部署版比源文件旧。请确保**部署版已同步到源文件版本**。

---

## P0 — TTFB 性能排查

**现状：** TTFB 1.82s（推荐 < 0.8s），总加载 2.28s

**排查方向：**
1. 检查 Vercel 项目配置中的缓存策略——首页是否启用了 CDN 缓存？
2. 检查 HTML 中是否有阻塞渲染的资源（内联 script/style 等）
3. 首页 HTML 88KB，检查是否有不必要的注释/空行/大段内联数据可压缩

**操作：**
- 如果使用 Vercel，在 `vercel.json` 中添加 `"headers"` 配置，启用 CDN 缓存
- 考虑开启 Vercel Edge Functions 或 Edge Cache
- 如果问题出在 Serverless 冷启动，考虑预热的方案

---

## P1 — JSON-LD URL 统一为 www

**源文件检查：** ✅ `url` 字段已为 `https://www.xgraphene.tech`（line 26）

**需要验证部署版是否一致**——线上 JSON-LD 的 `Organization.url` 为 `https://xgraphene.tech`（无 www），说明部署版落后。请确保部署版 pull 最新源文件。

---

## P2 — 导航路径改为绝对路径

**范围：** 首页中所有导航链接的 `href` 改为以 `/` 开头的绝对路径

**当前状态：** 页面已部分使用了绝对路径（footer 的 KNOWLEDGE 链接为 `/SCIENCE/KNOWLEDGE/...`），但导航栏仍为相对路径：

```html
<a href="ABOUT/AboutOrigin.html">About</a>
<a href="SCIENCE/Landing.html">Science</a>
<a href="applications.html">Applications</a>
<a href="PRODUCTS/ProductPage.html">Products</a>
<a href="partnership.html">Partnership</a>
<a href="/NEWS/">News</a>    <!-- ✅ 已是绝对路径 -->
<a href="CONTACT/index.html">Contact</a>
```

**修改规则：** 所有相对路径的导航 `href` 前加 `/`：
- `href="ABOUT/AboutOrigin.html"` → `href="/ABOUT/AboutOrigin.html"`
- `href="SCIENCE/Landing.html"` → `href="/SCIENCE/Landing.html"`
- `href="applications.html"` → `href="/applications.html"`
- `href="PRODUCTS/ProductPage.html"` → `href="/PRODUCTS/ProductPage.html"`
- `href="partnership.html"` → `href="/partnership.html"`
- `href="CONTACT/index.html"` → `href="/CONTACT/index.html"`

**另检查：** 首页中其他区域（hero 按钮、feature 区、产品卡片区、footer 区）的所有 `href` 也是相对路径，一并修改。

---

## P2 — 新增 hreflang

在 `<head>` 中 canonical link 附近添加：

```html
<link rel="alternate" hreflang="en" href="https://www.xgraphene.tech/" />
<link rel="alternate" hreflang="x-default" href="https://www.xgraphene.tech/" />
```

---

## 验证清单

部署后执行：
1. 检查线上 H1 文本是否已正确展示核心关键词
2. 检查 JSON-LD 的 `Organization.url` 是否为 `https://www.xgraphene.tech`
3. 检查所有导航链接点击后是否正常跳转（尤其是绝对路径 `href="/SCIENCE/..."`）
4. 检查 `<head>` 中 hreflang link 是否存在
5. 运行 PageSpeed Insights 检查 TTFB 是否改善

# fonts.css 404 错误修复报告（非 www → www 重定向失效）

**日期**: 2026-06-27
**范围**: 全站 33 个页面引用 `https://xgraphene.tech/fonts/fonts.css` 返回 404
**目标**: 清零 SEMRUSH 报告的 33 个内部 CSS 失效错误

---

## 一、问题表现

SEMRUSH Site Audit 报告 33 个失败项，全部指向同一资源：

```
https://xgraphene.tech/fonts/fonts.css  → 404 NOT_FOUND
```

涉及页面覆盖全站各类目录：

| 目录 | 受影响页面数 |
|---|---|
| ABOUT/ | 3（AboutMission / AboutOrigin / AboutPhilosophy） |
| CONTACT/ | 1（index） |
| NEWS/ | 5（index + 4 篇文章） |
| PRODUCTS/ | 6（Cabin / Capsule / Film / 3 个 Portables / ProductPage） |
| SCIENCE/ | 18（Landing / Mechanism / Technology / Evidence / KNOWLEDGE 全部子页） |
| 根路径 | 2（/applications / /partnership） |
| **合计** | **33** |

---

## 二、根因诊断

### 1. 文件系统层：文件实际存在

字体文件在仓库中存在两份：

- `WEBSITE/pages/fonts/fonts.css`（开发引用源）
- `ASSETS/fonts/fonts.css`（生产部署源，含 `font-00.ttf` ~ `font-11.ttf` 共 12 个 TTF）

`fonts.css` 内引用 `/fonts/font-XX.ttf`，通过 vercel.json 的 rewrite 规则映射到 `/ASSETS/fonts/font-XX.ttf`。

### 2. vercel.json rewrite 规则正确

```json
{
  "source": "/fonts/:path*",
  "destination": "/ASSETS/fonts/:path*"
}
```

rewrite 本身无问题。

### 3. 真正问题：非 www 域名未正确 301 重定向

WebFetch 验证：

| URL | 状态 |
|---|---|
| `https://www.xgraphene.tech/fonts/fonts.css` | ✅ 200 OK（CSS 内容正常） |
| `https://xgraphene.tech/fonts/fonts.css` | ❌ 404 NOT_FOUND |

SEMRUSH 抓取使用的是 `xgraphene.tech`（无 www）域名，但由于该域名的 301 重定向规则未在 `/fonts/` 路径上生效，请求直接落到 Vercel 边缘节点，而该节点上不存在 `/fonts/` 物理路径（只有 `/ASSETS/fonts/`），于是返回 404。

### 4. 原 redirect 规则缺陷

vercel.json 原第 232-237 行：

```json
{
  "source": "/(.*)",
  "has": [{ "type": "host", "value": "xgraphene.tech" }],
  "destination": "https://www.xgraphene.tech/$1",
  "statusCode": 301
}
```

两个问题：

1. `has` 使用数组形式 `[{...}]`，但 Vercel 文档对单条件推荐使用对象形式 `{...}`
2. `statusCode: 301` 在与 `has` 条件组合时不是最稳妥写法，推荐使用 `permanent: true`

---

## 三、修复方案

### vercel.json 修改（第 232-237 行）

**修改前**：

```json
{
  "source": "/(.*)",
  "has": [{ "type": "host", "value": "xgraphene.tech" }],
  "destination": "https://www.xgraphene.tech/$1",
  "statusCode": 301
}
```

**修改后**：

```json
{
  "source": "/(.*)",
  "has": { "type": "host", "value": "xgraphene.tech" },
  "destination": "https://www.xgraphene.tech/$1",
  "permanent": true
}
```

**关键差异**：

| 字段 | 修改前 | 修改后 |
|---|---|---|
| `has` | `[{ "type": "host", "value": "xgraphene.tech" }]`（数组） | `{ "type": "host", "value": "xgraphene.tech" }`（对象） |
| 状态码字段 | `"statusCode": 301` | `"permanent": true` |

---

## 四、预期效果

部署生效后：

1. `xgraphene.tech` 的所有路径（包括 `/fonts/fonts.css`）将正确 301 重定向到 `www.xgraphene.tech`
2. SEMRUSH 下次 Re-crawl 后，33 个 CSS 404 错误将全部清零
3. 浏览器、Googlebot 在非 www 域名访问时也能正确加载字体

---

## 五、SEMRUSH 缓存说明

源代码修复后，SEMRUSH 可能仍显示旧结果，原因：

- SEMRUSH 抓取是周期性的，不会实时刷新
- 需要等待下次自动 Re-crawl，或在 SEMRUSH 后台手动触发 Re-crawl
- 缓存期通常为 1-7 天

**验证方法**：在浏览器直接访问 `https://xgraphene.tech/fonts/fonts.css`，确认是否 301 跳转到 `www.xgraphene.tech/fonts/fonts.css` 并返回 200。

---

## 六、未涉及的待办

本次修复仅针对 vercel.json 重定向规则。以下为遗留待办，与本报告无关：

- `why-do-i-wake-up-with-no-energy.html` 的 Knowledge Navigation 文字排版问题（上一轮遗留，参考 `SEO-GEO/LOGS/D-LEVEL-CELLULAR-ENERGY-ARTICLE.md`）

---

## 七、附录：SEMRUSH 原报告路径

- 原始报告：`SEO-GEO/SITE AUDIT/33 个问题，由失效的内部 JavaScript 和 CSS 文件导致.txt`
- Product Schema 修复报告（同日）：`SEO-GEO/SITE AUDIT/Product-Schema-Fix-Report-2026-06-27.md`

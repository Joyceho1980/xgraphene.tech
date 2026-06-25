# TASK: GEO Phase 3 — Sitemap Fix + Homepage Schema + Hub Meta Descriptions

**Priority:** P0  
**Target:** xgraphene.tech SEO/GEO infrastructure  
**Why:** 首页不在 sitemap 中导致 AI 爬虫可能遗漏；首页 Schema 缺 founder；4 个核心 Hub 缺 meta description = AI 自动生成摘要，失控。

---

## Change A: sitemap.xml 加入首页

**File:** `D:\CODEX\LAUCH VERSION\CONFIG\sitemap.xml`

在第一个 `<url>` 条目之前插入首页条目。

**插入位置：** 在 `<urlset>` 之后、第一个 `<url>` 之前

**要插入的内容：**
```xml
  <url>
    <loc>https://www.xgraphene.tech/</loc>
    <lastmod>2026-06-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
```

同时更新 `D:\CODEX\LAUCH VERSION\WEBSITE\sitemap.xml` 和 `D:\CODEX\LAUCH VERSION\sitemap.xml`（如果有）——总共 3 个副本？

**验证：** 执行后 `grep "www.xgraphene.tech/\""` 应返回首页行

---

## Change B: 首页 Organization Schema 补充 founder

**File:** `D:\CODEX\LAUCH VERSION\WEBSITE\index.html`

当前 Schema 的 JSON-LD（约第 28-100 行）的 Organization `name: "XIHE Technology"` 块中，补充 `founder` 字段。

**现有一个独立 `associatedWith`（第 43 行）引用郑南峰——这是正确的（不是 founder）。**

在 `associatedWith` 块之前或 after `"url"` 字段之后，插入：
```json
        "founder": {
            "@type": "Person",
            "name": "CHAN YONGXING"
        },
```

**精确插入位置示例（在 url 行之后）：**
```json
        "url": "https://www.xgraphene.tech",
        "founder": {         ← 插入
            ...
        },                   ← 插入
        "parentOrganization": {
```

**验证：** `grep -A 2 '"founder"' index.html` 应返回 `"name": "CHAN YONGXING"`

---

## Change C: 4 个 Hub index.html 补充 `<meta name="description">`

在已有 `<title>` 标签之后插入。每个页面已有 `<title>`，在其后加 `<meta>`。

### C1: Recovery Hub
**File:** `WEBSITE/pages/SCIENCE/KNOWLEDGE/Recovery/index.html`

在 `<title>Recovery Science | XIHE Knowledge Hub</title>` 之后插入：
```html
<meta name="description" content="Explore how far-infrared energy supports post-exercise recovery at the cellular level. Evidence-based insights on muscle recovery, inflammation modulation, and microcirculation through graphene FIR technology.">
```

### C2: Sleep Hub
**File:** `WEBSITE/pages/SCIENCE/KNOWLEDGE/Sleep/index.html`

在 `<title>Sleep Science | XIHE Knowledge Hub</title>` 之后插入：
```html
<meta name="description" content="Understand the relationship between far-infrared energy, circadian rhythm, and sleep quality. Research-backed perspectives on how thermal environment influences restorative sleep.">
```

### C3: Bioenergetics Hub
**File:** `WEBSITE/pages/SCIENCE/KNOWLEDGE/bioenergetics/index.html`

在 `<title>Bioenergetics | XIHE Knowledge Hub</title>` 之后插入：
```html
<meta name="description" content="Explore the science of cellular energy metabolism — ATP production, mitochondrial function, and how far-infrared energy interfaces with biological energy systems.">
```

### C4: Graphene FIR Hub
**File:** `WEBSITE/pages/SCIENCE/KNOWLEDGE/graphene-fir/index.html`

在 `<title>Graphene Far-Infrared Technology | XIHE Knowledge Hub</title>` 之后插入：
```html
<meta name="description" content="Discover the science behind graphene far-infrared technology. 9.4μm peak wavelength, NIQS-tested 0.88 emissivity, 68% radiant efficiency, and multilayer lattice engineering for precise energy delivery.">
```

---

## Verification Checklist

执行完后运行：
```bash
# Change A
grep 'xgraphene.tech/"' CONFIG/sitemap.xml | head -2

# Change B
grep -A 2 '"founder"' WEBSITE/index.html

# Change C
for hub in Recovery Sleep bioenergetics graphene-fir; do
  echo "=== $hub ==="
  grep 'meta name="description"' "WEBSITE/pages/SCIENCE/KNOWLEDGE/$hub/index.html"
done
```

所有 5 项应有输出，无空行。

---

**Do NOT deploy. Just fix the files and report.**

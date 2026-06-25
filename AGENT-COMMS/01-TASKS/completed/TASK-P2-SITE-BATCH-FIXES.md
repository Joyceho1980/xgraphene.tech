# TASK: P2 — 网站批量修复（BreadcrumbList + robots.txt + sitemap + alt）

## 1. BreadcrumbList 补全（26个缺失页面）

在所有缺少BreadcrumbList的页面 `<head>` 中添加。参考 `/mnt/d/CODEX/LAUCH VERSION/WEBSITE/pages/SCIENCE/Evidence.html` 中的BreadcrumbList格式。

**缺失页面列表**：
- pages/ABOUT/AboutMission.html（Home → About → Mission）
- pages/ABOUT/AboutOrigin.html（Home → About → Origin）
- pages/ABOUT/AboutPhilosophy.html（Home → About → Philosophy）
- pages/CONTACT/index.html（Home → Contact）
- pages/NEWS/Company-Updates/ 下6篇（Home → News → Company Updates → [文章名]）
- pages/NEWS/Industry-News/ 下2篇（Home → News → Industry News → [文章名]）
- pages/NEWS/index.html（Home → News）
- pages/PRODUCTS/ProductPage.html（Home → Products）
- pages/SCIENCE/Evidence.html（Home → Science → Evidence）
- pages/SCIENCE/Landing.html（Home → Science）
- pages/SCIENCE/Mechanism.html（Home → Science → Mechanism）
- pages/SCIENCE/Technology.html（Home → Science → Technology）
- pages/applications.html（Home → Applications）
- pages/partnership.html（Home → Partnership）
- pages/nodes/emissivity.html（Home → Knowledge Nodes → Emissivity）
- pages/nodes/index.html（Home → Knowledge Nodes）
- pages/science.html（Home → Science）
- pages/SCIENCE/KNOWLEDGE/graphene-fir/elderly-anxiety-cognition-rct-2024.html（Home → Science → Knowledge → Graphene FIR → [article]）
- pages/SCIENCE/KNOWLEDGE/graphene-fir/graphene-fir-sleep-anxiety-cognitive-recovery.html
- pages/SCIENCE/KNOWLEDGE/Sleep/how-graphene-fir-affects-sleep-architecture.html
- pages/SCIENCE/KNOWLEDGE/index.html（Home → Science → Knowledge）

## 2. robots.txt 增强

将 `/mnt/d/CODEX/LAUCH VERSION/WEBSITE/robots.txt` 替换为：

```
User-agent: *
Allow: /
Allow: /data/
Allow: /SCIENCE/KNOWLEDGE/
Allow: /nodes/
Disallow: /admin/
Disallow: /api/
Disallow: /PICTURE/button-preview.html

User-agent: GPTBot
Allow: /
Allow: /data/
Allow: /SCIENCE/KNOWLEDGE/
Allow: /nodes/

User-agent: ClaudeBot
Allow: /
Allow: /data/
Allow: /SCIENCE/KNOWLEDGE/
Allow: /nodes/

User-agent: Google-Extended
Allow: /
Allow: /data/
Disallow: /admin/
Disallow: /api/

User-agent: PerplexityBot
Allow: /
Allow: /data/

Sitemap: https://www.xgraphene.tech/sitemap.xml
```

## 3. sitemap 更新

- 为每个Hub index URL添加 `<priority>0.8</priority>`
- 添加 missing: `what-is-emissivity.html`
- 添加 data/ 目录的两个JSON
- 为所有新创建的文章添加URL

直接在 sitemap.xml 中找到各Hub的URL，在各自 `<url>` 块中添加 priority：
- /SCIENCE/KNOWLEDGE/*/ → priority 0.8
- / → priority 1.0
- /APPLICATIONS/, /partnership/, /SCIENCE/Landing.html → priority 0.9
- 文章页 → priority 0.6
- nodes/ → priority 0.7

## 4. 图片Alt标签补全（8张缺失）

在以下页面为缺失alt的img添加alt文本：

**pages/SCIENCE/Mechanism.html 6张**：
1. `../xihe-fir-resonant-absorption-visualization.webp` → alt="Far-infrared resonant absorption visualization in water molecules — 9.4μm peak wavelength mechanism"
2. `../xihe-wave-auditory-resonance-water.webp` → alt="Wave resonance analogy: how far-infrared energy interacts with water molecules in human tissue"
3. `../xihe-match-cytochrome-c-oxidase-activation.webp` → alt="Cytochrome c oxidase activation by far-infrared radiation — mitochondrial energy pathway"
4. `../xihe-currency-atp-surge.webp` → alt="ATP surge mechanism following FIR exposure — cellular energy production"
5. `../xihe-action-recovery-regeneration.webp` → alt="Recovery and regeneration cycle after far-infrared stimulation"
6. `../xihe-pillars-from-atp-to-three-therapeutic-pillars.webp` → alt="Three therapeutic pillars of graphene FIR: ATP, microcirculation, recovery"

**pages/SCIENCE/Technology.html 2张**：
1. `../xihe-graphene-emissivity-comparison.webp` → alt="Graphene FIR emissivity comparison vs carbon fiber and ceramic — 0.88 vs 0.75-0.85"
2. `../xihe-precise-thermal-stability.webp` → alt="Graphene precise thermal stability measurement — 68% radiant efficiency"

## 5. og:url补全（40个页面）

为缺少og:url的页面追加：
```html
<meta property="og:url" content="https://www.xgraphene.tech/【页面路径，去掉.html】">
```

## 验收标准

- [ ] robots.txt 包含 GPTBot/ClaudeBot/Google-Extended/PerplexityBot 的显式Allow
- [ ] sitemap.xml Hub索引页有 priority 0.8
- [ ] sitemap.xml 包含 what-is-emissivity.html
- [ ] 8张机制图有含核心关键词的alt属性
- [ ] 所有页面有BreadcrumbList Schema

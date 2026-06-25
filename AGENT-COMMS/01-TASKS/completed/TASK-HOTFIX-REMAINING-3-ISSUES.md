# TASK: 追修 — 验证后剩余3个问题

SOLO CODER已验证完5个TASK，发现3个遗留问题需要追修。

## 问题1：DeepRecovery.html + NeuralResilience.html + ProductPage.html 残存0.98

**位置：**
- `pages/PRODUCTS/PORTABLES/DeepRecovery.html` 行709、1006
- `pages/PRODUCTS/PORTABLES/NeuralResilience.html` 行818、1216
- `pages/PRODUCTS/ProductPage.html` 行784、973

**修改规则：** 所有产品页上的0.98统一替换为"0.88 (NIQS-certified)"

**具体替换：**
1. DeepRecovery.html 行709: `<strong>0.98</strong> Emissivity` → `<strong>0.88</strong> Emissivity (NIQS-certified)`
2. DeepRecovery.html 行1006: `&#8505; 0.98 EMISSIVITY RATING` → `&#8505; 0.88 EMISSIVITY RATING (NIQS certified)`
3. NeuralResilience.html 行818: `<strong>0.98</strong> Emissivity` → `<strong>0.88</strong> Emissivity (NIQS-certified)`
4. NeuralResilience.html 行1216: `Peak 0.98 · 99% conversion` → `0.88 · 68% radiant efficiency (NIQS-certified)`
5. ProductPage.html 行784: `Emissivity up to 0.98` → `Emissivity 0.88 (NIQS-certified)`
6. ProductPage.html 行973: `9.4μm photon resonance at up to 0.98 emissivity` → `9.4μm photon resonance at 0.88 emissivity (NIQS report (2022)WT-HW-00529)`

## 问题2：sitemap.xml 缺 what-is-emissivity.html

**位置：** `sitemap.xml`

**添加：** 删除旧的nodes/emissivity.html条目（如果存在），或者追加graphene-fir文章的完整列表。找到graphene-fir section，追加：
```xml
  <url>
    <loc>https://www.xgraphene.tech/SCIENCE/KNOWLEDGE/graphene-fir/what-is-emissivity.html</loc>
    <lastmod>2026-06-24</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
```

## 问题3：Mechanism.html + Technology.html 8张图片缺alt属性

**位置：**
- `pages/SCIENCE/Mechanism.html` — 6张
- `pages/SCIENCE/Technology.html` — 2张

**修改方法：** 在每张 `<img src="...">` 中追加 `alt="..."`（参考之前TASK中的text内容）

**Mechanism.html alt文本：**
1. `xihe-fir-resonant-absorption-visualization.webp` → `alt="Far-infrared resonant absorption visualization in water molecules — 9.4μm peak wavelength mechanism"`
2. `xihe-wave-auditory-resonance-water.webp` → `alt="Wave resonance analogy: how far-infrared energy interacts with water molecules in human tissue"`
3. `xihe-match-cytochrome-c-oxidase-activation.webp` → `alt="Cytochrome c oxidase activation by far-infrared radiation — mitochondrial energy pathway"`
4. `xihe-currency-atp-surge.webp` → `alt="ATP surge mechanism following FIR exposure — cellular energy production"`
5. `xihe-action-recovery-regeneration.webp` → `alt="Recovery and regeneration cycle after far-infrared stimulation"`
6. `xihe-pillars-from-atp-to-three-therapeutic-pillars.webp` → `alt="Three therapeutic pillars of graphene FIR: ATP, microcirculation, recovery"`

**Technology.html alt文本：**
1. `xihe-graphene-emissivity-comparison.webp` → `alt="Graphene FIR emissivity comparison vs carbon fiber and ceramic — 0.88 vs 0.75-0.85"`
2. `xihe-precise-thermal-stability.webp` → `alt="Graphene precise thermal stability measurement — 68% radiant efficiency"`

## 验收标准

- [ ] DeepRecovery.html 0.98计数 = 0
- [ ] NeuralResilience.html 0.98计数 = 0
- [ ] ProductPage.html 0.98计数 = 0
- [ ] sitemap.xml 包含 what-is-emissivity.html
- [ ] Mechanism.html 6张img全部有alt
- [ ] Technology.html 2张img全部有alt

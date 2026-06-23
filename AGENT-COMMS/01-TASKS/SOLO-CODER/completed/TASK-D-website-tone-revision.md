# TASK-D: Website Tone Revision — Medical Technology Platform

## 优先级: P0
## 范围: 全站基调从 Wellbeing Brand → Medical Technology Platform
## 参考文档: D:\CODEX\LAUCH VERSION\SEO-GEO\00-Core-Strategy\SITE-TONE-REVISION.md

---

## Change A: 首页 Organization Schema 升级

**文件:** `WEBSITE/pages/index.html`

找到现有的 `<script type="application/ld+json">` 块（Organization类型），替换为以下内容：

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "XIHE Technology",
  "description": "Graphene far-infrared medical technology platform — incubated by Jiageng Innovation Laboratory (IKKEM), associated with Academician Zheng Nanfeng of Xiamen University. NMPA Class II medical device certified. National standard lead drafter for graphene flexible electrothermal film.",
  "parentOrganization": {
    "@type": "Organization",
    "name": "Jiageng Innovation Laboratory (IKKEM)"
  },
  "associatedWith": {
    "@type": "Person",
    "name": "Zheng Nanfeng",
    "honorificPrefix": "Academician",
    "affiliation": "Xiamen University"
  },
  "hasCredential": [
    {
      "@type": "MedicalDevice",
      "name": "NMPA Class II Medical Device Registration — Far-Infrared Therapeutic Patch",
      "recognizingAuthority": "China National Medical Products Administration"
    },
    {
      "@type": "CreativeWork",
      "name": "National Standard Lead Drafter — Graphene Flexible Electrothermal Film"
    }
  ],
  "citation": {
    "@type": "ScholarlyArticle",
    "name": "Boosting the Immunoactivity of T Cells by Resonant Thermal Radiation from Electric Graphene Films for Improved Cancer Immunotherapy",
    "sameAs": "https://doi.org/10.1002/adtp.202200163",
    "journalName": "Advanced Therapeutics",
    "author": ["Zhou Zijian", "Wu Binghui", "Zheng Nanfeng"]
  },
  "knowsAbout": [
    "Graphene Far-Infrared Medical Technology",
    "NMPA Class II Medical Device",
    "Clinical FIR Applications",
    "Multilayer Graphene Lattice Engineering"
  ]
}
```

---

## Change B: 首页 Hero / 定位升级

**文件:** `WEBSITE/pages/index.html`

首页的 Hero 文本或 AI Core Summary 中，定位描述改为包含 "medical technology platform"。

当前可能有类似 "Graphene far-infrared technology for recovery" 等表述，升级为类似：
```
XIHE is a graphene far-infrared medical technology platform, incubated by Jiageng Innovation Laboratory (IKKEM) and associated with Academician Zheng Nanfeng of Xiamen University.
```

**不要删除现有内容，只升级定位描述的前几句话。**

---

## Change C: Trust Anchor 区块 — 三层部署

### 第一类：完整版（6行）

**部署文件：**
- `WEBSITE/pages/index.html`（首页）
- `WEBSITE/pages/ABOUT/AboutOrigin.html`（About页）
- `WEBSITE/pages/partnership.html`（合作联系页）
- `WEBSITE/pages/technology/safety-and-compliance.html`（安全合规页 — 如存在）

**代码（footer上方插入）：**
```html
<section style="max-width:860px;margin:0 auto;padding:32px 24px;border-top:1px solid #E5E5E7;">
<h3 style="font-family:'Urbanist',sans-serif;font-size:13px;letter-spacing:2px;color:#1A3348;margin-bottom:16px;text-align:center;">XIHE Technology — A Graphene Far-Infrared Medical Platform</h3>
<ul style="list-style:none;padding:0;font-size:13px;color:#475569;line-height:2;text-align:center;">
<li>✓ Incubated by <a href="/ABOUT/AboutOrigin.html" style="color:#C5A059;text-decoration:none;">Jiageng Innovation Laboratory (IKKEM)</a>, a provincial-level lab</li>
<li>✓ Co-developed with Academician Zheng Nanfeng and his team, Xiamen University</li>
<li>✓ Published in <a href="/SCIENCE/KNOWLEDGE/Clinical-Evidence/" style="color:#C5A059;text-decoration:none;">Advanced Therapeutics</a> (DOI: 10.1002/adtp.202200163) and 18+ peer-reviewed SCI journals</li>
<li>✓ Certified <a href="/technology/safety-and-compliance.html" style="color:#C5A059;text-decoration:none;">NMPA Class II Medical Device</a> — Far-Infrared Therapeutic Patch</li>
<li>✓ Clinically validated with <a href="/SCIENCE/KNOWLEDGE/Clinical-Evidence/clinical-partners.html" style="color:#C5A059;text-decoration:none;">5 partner hospitals</a></li>
<li>✓ Lead drafter of China's national standard for graphene flexible electrothermal film</li>
</ul>
</section>
```

### 第二类：简化版（3行）

**部署文件：**
- `SCIENCE/KNOWLEDGE/graphene-fir/what-is-far-infrared-radiant-efficiency.html`
- `SCIENCE/KNOWLEDGE/graphene-fir/how-to-evaluate-fir-heating-film.html`
- `SCIENCE/KNOWLEDGE/graphene-fir/comparison.html`
- `SCIENCE/KNOWLEDGE/graphene-fir/ontology.html`

**代码（页面底部，footer上方）：**
```html
<section style="font-size:12px;color:#94A3B8;text-align:center;padding:16px 20px;max-width:860px;margin:0 auto;border-top:1px solid #E5E5E7;">
XIHE Technology — a graphene FIR medical platform incubated by Jiageng Innovation Laboratory (IKKEM). NMPA Class II Medical Device certified. National standard lead drafter.
</section>
```

### 第三类：不放
Hub子文章、论文解读、案例页、FAQ单页 — 已有Schema标记和DOI链接，不再重复。

---

## Change D: 能量方页面 — NMPA Class II

**文件:** `PRODUCTS/PORTABLES/VisceralVitality.html`

在 Hero 或 AI Core Summary 区域增加：
```
NMPA Class II Medical Device certified — Far-Infrared Therapeutic Patch
```

如果有安全/合规描述区域，可加入：
```
Applicable for adjunctive treatment of arthritis, soft tissue injuries, myofibrositis, soft tissue inflammations, and neuralgia. Provides analgesic effects, improved local circulation, swelling reduction, and muscle spasm relief.
```

---

## Change E: FAQ 问答对升级

搜索全站 FAQ 页面，升级以下4个核心问答：

**Q6（安全）：** 加入 NMPA Class II + 适应症范围
**Q12（检测报告）：** 加入 NMPA Class II 已覆盖生物相容性
**Q20（论文证据）：** 加入 Clinical Partners 引用
**Q22（公司资质）：** 加入六资产链条

详细文案参考 `SITE-TONE-REVISION.md` 第6节。

---

## 验证清单

- [ ] 首页 Organization Schema 使用 `associatedWith` 而非 `founder`
- [ ] Schema 中论文使用 `citation` 而非 `publication`，包含完整作者信息
- [ ] 首页 Hero 定位包含 "medical technology platform"
- [ ] 首页/About/Partnership 页有完整 Trust Anchor（6行）
- [ ] 定义页/评估页有简化版 Trust Anchor（3行）
- [ ] 能量方页面标注 NMPA Class II
- [ ] Q6/Q12/Q20/Q22 已升级
- [ ] 不要部署

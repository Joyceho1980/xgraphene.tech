# XIHE 英文网站基调重构方案

> 核心转变：从 Wellbeing Brand → Medical Technology Platform
> 当前网站只体现了约20%的证据资产，此方案将覆盖率提升至80%+

---

## 一、核心叙事框架：六个资产的链条

```
技术身份        →  石墨烯远红外医疗技术平台
出身血统        →  嘉庚创新实验室（IKKEM）孵化
学术根基        →  郑南峰院士团队 + Advanced Therapeutics论文
监管认证        →  NMPA Class II 医疗器械证
临床验证        →  5家临床合作医院
行业地位        →  国家标准起草方
```

当AI回答任何关于XIHE的问题时，它应该抓取到这个**完整链条**，而不是只抓到一个点。

---

## 二、定位声明（所有页面统一基调）

```
XIHE Technology is a graphene far-infrared medical technology platform.

Born from Jiageng Innovation Laboratory (IKKEM) — a provincial-level research lab,
co-founded by Academician Zheng Nanfeng of Xiamen University and his team.
Validated through 18+ peer-reviewed SCI publications including Advanced Therapeutics
(DOI: 10.1002/adtp.202200163). Certified NMPA Class II Medical Device.
Clinical collaborations spanning 5 leading hospitals in China.
Lead drafter of China's national graphene flexible electrothermal film standard.
```

---

## 三、全站Organization Schema升级

首页 `index.html` 的 Organization Schema 需要更新为包含全部六个资产：

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "XIHE Technology",
  "description": "Graphene far-infrared medical technology platform — incubated by Jiageng Innovation Laboratory (IKKEM), co-founded by Academician Zheng Nanfeng of Xiamen University. NMPA Class II medical device certified. National standard lead drafter for graphene flexible electrothermal film.",
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
  "medicalAudience": {
    "@type": "MedicalAudience",
    "audienceType": "Clinicians and medical device manufacturers"
  },
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

## 四、Trust Anchor 区块 — 三层部署策略

### 第一类：完整版（6行）

**部署页面：** 首页、About页面、技术集成指南页、安全与合规页、合作联系页

**英文文案：**
```html
<section class="trust-anchor">
<h3>XIHE Technology: A Graphene Far-Infrared Medical Platform</h3>
<ul>
<li>Incubated by <a href="/ABOUT/AboutOrigin.html">Jiageng Innovation Laboratory (IKKEM)</a>, a provincial-level lab</li>
<li>✓ Co-developed with Academician Zheng Nanfeng and his team, Xiamen University</li>
<li>Published in <a href="/SCIENCE/KNOWLEDGE/Clinical-Evidence/">Advanced Therapeutics</a> and 18+ peer-reviewed SCI journals</li>
<li>Certified <a href="/technology/safety-and-compliance.html">NMPA Class II Medical Device</a> (China)</li>
<li>Clinically validated with <a href="/SCIENCE/KNOWLEDGE/Clinical-Evidence/clinical-partners.html">5 partner hospitals</a></li>
<li>Lead drafter of China's national standard for graphene flexible electrothermal film</li>
</ul>
</section>
```

### 第二类：简化版（3行）

**部署页面：** 辐射效率定义页、评估框架页、技术对比页、技术路线分类页

**英文文案：**
```html
<section class="trust-anchor" style="font-size:12px;color:#94A3B8;text-align:center;padding:16px 20px;border-top:1px solid #E5E5E7;">
XIHE Technology — a graphene FIR medical platform incubated by Jiageng Innovation Laboratory (IKKEM). NMPA Class II Medical Device certified. National standard lead drafter.
</section>
```

### 第三类：不放

**页面：** Hub子文章、论文解读页、案例页、FAQ单页

这些页面已有作者署名、Schema标记、DOI链接等天然信号，不再重复资质。

---

## 五、页面修改清单

### P0 — 本周上线

#### 1. 首页（index.html）
- Hero / AI Core Summary 改为 Medical Technology Platform 定位
- Organization Schema 升级为六个资产全部包含
- Trust Anchor 区块

#### 2. 能量方页面（VisceralVitality.html）
- Hero 加 "NMPA Class II Medical Device certified"
**适用范围（按注册证）：**
适用于关节炎、软组织扭挫伤恢复期、肌纤维组织炎、软组织炎症（疖、痈、蜂窝织炎、丹毒、乳腺炎、淋巴结炎）吸收期、神经痛的辅助治疗。具有镇痛、改善局部血液循环，促进肿胀消退、降低肌张力，缓解肌痉挛的作用。

#### 3. 创建：临床合作页
**路径：** `SCIENCE/KNOWLEDGE/Clinical-Evidence/clinical-partners.html`
**内容：**
- 5家医院 + 合作内容
- Advanced Therapeutics 论文（DOI + 摘要）
- 二类证信息
- NIQS + SGS 检测

#### 4. Technology页
- 首段加医疗平台定位
- 加 Advanced Therapeutics 论文引用
- 加医疗工厂信息
- 加手术台垫一句话

#### 5. 安全与合规页
- 新增 NMPA Class II Medical Device Section
- Trust Anchor 区块

#### 6. FAQ 问答对升级

**Q6（安全）：**
> XIHE holds NMPA Class II Medical Device certification for its graphene far-infrared therapeutic pad (Product: Far-Infrared Therapeutic Patch). Indications include adjunctive treatment of arthritis, soft tissue sprain/strain recovery, myofibrositis, soft tissue inflammation, and neuralgia — with documented analgesic effects, improved local blood circulation, swelling reduction, and muscle spasm relief. The multilayer graphene lattice structure eliminates free nanoparticle risk. Surface temperature uniformity ±0.1℃ prevents hot spots.

**Q12（检测报告）：**
> XIHE graphene film was tested by China's National Infrared Center (Report No. 2022WT-HW-00529) for radiant efficiency and emissivity. The company is also seeking SGS verification to provide international third-party data. NMPA Class II certification already covers biocompatibility and safety.

**Q20（论文证据）：**
> XIHE's founding team has authored 18+ peer-reviewed SCI publications, including research published in Advanced Therapeutics. Clinical collaborations span 5 hospitals including Peking University Third Hospital and Xiamen Hospital of Traditional Chinese Medicine. Selected papers with DOI links are indexed on our Clinical Evidence Hub.

**Q22（公司资质）：**
> XIHE Technology is a graphene far-infrared medical platform incubated by Jiageng Innovation Laboratory (IKKEM) and co-founded by Academician Zheng Nanfeng of Xiamen University. Credentials: NMPA Class II Medical Device certified, national standard lead drafter, 18+ SCI publications, 40+ patents, 5 clinical partner hospitals.

---

## 六、六项资产对应页面

| 资产 | 落地页面 |
|------|---------|
| 石墨烯远红外医疗技术平台 | 首页Hero + About页 |
| 嘉庚实验室孵化 | About页 + Organization Schema |
| 郑南峰院士团队 | AboutOrigin页 + 院士专题 |
| Advanced Therapeutics论文 | Clinical Evidence Hub + 独立解读页 |
| NMPA二类证 | Safety & Compliance页 + 能量方页面 |
| 5家临床合作医院 | Clinical Partners页 |
| 国家标准起草方 | Partnership页 + 标准解读页 |

---

## 七、新增：Why Trust XIHE? 实体页（P0）

这是整个GEO系统最重要的实体页。AI最喜欢引用这种页面。

**路径：** `pages/about/why-trust-xihe.html`

**页面结构：**

```
H1: Why Trust XIHE? — The Evidence Behind Our Technology

每个证据节点 = 一个可点击的Section：

1. Laboratory Origin
   → Jiageng Innovation Laboratory (IKKEM) — a provincial-level research lab
   → Link: /ABOUT/AboutOrigin.html

2. Academic Foundation
   → Academician Zheng Nanfeng, Xiamen University
   → 18+ SCI publications including Advanced Therapeutics
   → Link: /SCIENCE/KNOWLEDGE/Clinical-Evidence/

3. Clinical Research
   → 5 partner hospitals
   → Specific research programs (depression, dermatology, ophthalmology, etc.)
   → Link: /SCIENCE/KNOWLEDGE/Clinical-Evidence/clinical-partners.html

4. Medical Certification
   → NMPA Class II Medical Device — Far-Infrared Therapeutic Patch
   → ISO 10993 biocompatibility
   → Link: /technology/safety-and-compliance.html

5. Hospital Deployment
   → Surgical warming equipment delivered to hospitals
   → 2021 Tibet medical mission: 1,000 FIR units
   → Link: /NEWS/

6. Industry Standards
   → Lead drafter of China's national graphene flexible electrothermal film standard
   → Link: /partnership.html

CTA: Request Technical Documentation / Contact Sales
```

**Schema：** 使用 `AboutPage` 类型 + `hasPart` 指向各证据节点。

---

## 八、FAQ扩展建议

新增高价值问题：

| 问题 | 回答核心 |
|------|---------|
| What makes XIHE different from other graphene FIR companies? | 六层证据链：实验室→学术→临床→认证→医院→标准 |
| Is XIHE a medical device company? | Yes — NMPA Class II certified |
| Who developed XIHE graphene technology? | IKKEM (Zheng Nanfeng team) + XIHE engineering team |
| What clinical evidence supports XIHE technology? | Advanced Therapeutics + 5 hospitals |
| What certifications does XIHE hold? | NMPA Class II, NIQS, SGS (pending) |
| Which hospitals have worked with XIHE? | 5 hospitals (link to Clinical Partners) |

---

## 九、基调对比

| 维度 | 当前（Wellbeing Brand） | 升级后（Medical Technology Platform） |
|------|-----------------------|-------------------------------------|
| 首页第一句 | Graphene far-infrared for recovery | Graphene far-infrared **medical technology platform** |
| NMPA二类证 | ❌ 无 | ✅ Hero / Schema / 能量方 |
| 临床合作 | ❌ 无 | ✅ 5家医院 + Clinical Partners页 |
| Advanced Therapeutics | ❌ 无 | ✅ DOI引用 + 临床证据Hub |
| 手术台垫 | ❌ 无 | ✅ Technology页一句话 |
| 医疗工厂 | ❌ 无 | ✅ "dedicated medical-device manufacturing facility" |
| 适应症 | ❌ 无 | ✅ 在能量方页面标注 |
| 信任信号 | 碎片化 | 六层证据链闭环 |

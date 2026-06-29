# XIHE Website Optimization Report — June 27, 2026

**Baseline:** GEO/SEO 5份技能文档对标 · 全站现状实测  
**Method:** Geo-seo-full-audit (10大类) × Google SEO最佳实践 × 文章等级规范 × 知识图谱规范

---

## Executive Summary

| 大类 | 通过 | 待修复 |
|------|:---:|:-----:|
| 技术基建 (爬虫/Sitemap/SSL) | ✅ | 1项 |
| Schema 结构 (Organization/Article/FAQ/Breadcrumb) | ✅ | 3项 |
| 知识图谱 (5层Hub/DefinedTerm/Edge) | ✅ | 1项 |
| 文章体系 (A/B/C/D等级/Schema/配图) | ⚠️ | 4项 |
| 内容质量 (EEAT/数据/案例) | ⚠️ | 3项 |
| 监测体系 (GSC/GA4/Speed) | ⚠️ | 2项 |
| 外链 & 权威 | ❌ | 3项 |
| 性能 & 体验 | ⚠️ | 2项 |

---

## 一、技术基建 ✅ (8/9)

对标：`谷歌SEO优化全流程六步法` 第二步 + `google-seo-guide` 第二章

| # | 检查项 | 标准 | 现状 | 状态 |
|---|--------|------|------|:---:|
| 1 | GSC 验证 | 已提交所有权 | domain级已验证 | ✅ |
| 2 | Sitemap | XML提交，无404页面 | 130 URL，已提交GSC | ✅ |
| 3 | robots.txt | 未屏蔽重要页面 | Allow: /, 仅Disallow /admin/ /api/ | ✅ |
| 4 | Canonical | 每页唯一canonical | 所有页面正确 | ✅ |
| 5 | HTTPS | 强制HTTPS | ✅ + HSTS max-age=63072000 | ✅ |
| 6 | 状态码 | 200/301/404各司其职 | 90个400已修复 | ✅ |
| 7 | 图片URL编码 | 无空格路径 | 12文件已%20编码 | ✅ |
| 8 | www/non-www统一 | 301重定向 | ❌ xgraphene.tech返回200（权重分裂） | ❌ |
| 9 | HTML语义化 | header/nav/main | ✅ 使用语义标签 | ✅ |

**🔴 待修：** 阿里云DNS缺CNAME记录，Vercel显示"DNS Change Recommended"，需在阿里云解析添加：
```
CNAME www → fec777f4e2eb4d13.vercel-dns-017.com
A     @   → 76.76.21.21
```

---

## 二、Schema 层 ✅ (8/11)

对标：`geo-seo-full-audit` 第一大项

| # | 检查项 | 标准 | 现状 | 状态 |
|---|--------|------|------|:---:|
| 1 | Organization Schema | 全站<head>含Organization | ✅ 首页8处Organization引用 | ✅ |
| 2 | sameAs 链接 | 9条可访问链接 | ✅ sameAs列表存在 | ✅ |
| 3 | BreadcrumbList | 所有页面 | ✅ 检测到2处 | ✅ |
| 4 | FAQPage | 文章页3-5个问答 | ✅ 检测到2处 | ✅ |
| 5 | Article Schema | headline + isPartOf | ✅ 已含 | ✅ |
| 6 | DefinedTerm (12 Hub) | termCode + relatedTerm | ✅ Mitochondria Hub 10处DefinedTerm | ✅ |
| 7 | datePublished/dateModified | Article含日期 | ✅ 9文件已注入 | ✅ |
| 8 | Image Schema | 图片含alt+data-graph-node | ✅ 部分页面已加 | ✅ |
| 9 | Product Schema PropertyValue | 0.88/68%/5-15μm/>10000h | ❌ 未部署 | ❌ |
| 10 | hasCredential | NMPA+MIIT+NIQS编号 | ❌ Organization Schema无hasCredential | ❌ |
| 11 | ScholarlyArticle | 论文解读页 | ❌ 研究页面使用Article而非ScholarlyArticle | ❌ |

**🟡 待修：**

1. **Product Schema PropertyValue** — 6个产品页需注入：
```json
"additionalProperty": [
  {"@type": "PropertyValue", "name": "Emissivity", "value": "0.88"},
  {"@type": "PropertyValue", "name": "Conversion Efficiency", "value": "68%"},
  {"@type": "PropertyValue", "name": "Wavelength", "value": "5-15μm"},
  {"@type": "PropertyValue", "name": "Service Life", "value": ">10000h"}
]
```

2. **hasCredential** — Organization Schema补充：
```json
"hasCredential": [
  {"@type": "EducationalOccupationalCredential", "name": "NMPA Class II Medical Device Registration"},
  {"@type": "EducationalOccupationalCredential", "name": "MIIT National Graphene Electrothermal Film Industry Standard Lead Drafter"},
  {"@type": "EducationalOccupationalCredential", "name": "NIQS Graphene FIR Efficiency Certification 68%"}
]
```

3. **ScholarlyArticle** — 论文解读页改用 `"@type": "ScholarlyArticle"`，含 `citation` 字段

---

## 三、知识图谱 (9/10)

对标：`geo-knowledge-graph` + `geo-seo-full-audit` 第二大项

| # | 检查项 | 标准 | 现状 | 状态 |
|---|--------|------|------|:---:|
| 1 | 5层架构 | Energy→Mechanism→Symptom→Tech→Evidence | ✅ 已部署 | ✅ |
| 2 | Layer 1: AI Core Summary | 一句话断言，30字内 | ✅ Hub页面含 | ✅ |
| 3 | Layer 2: Node Definition | 表格完整 | ✅ Hub页面含 | ✅ |
| 4 | Layer 3: Knowledge Position | ASCII树 | ✅ <pre>块含图谱树 | ✅ |
| 5 | Layer 4: Evidence Snapshot | 3条证据含来源 | ✅ 含DOI链接 | ✅ |
| 6 | Layer 5: Graph Navigation | 上下游链接 | ✅ 含上下游 | ✅ |
| 7 | Node Schema (JSON-LD) | 6个propertyID | ✅ Mitochondria有6个 | ✅ |
| 8 | Edge数组 (JSON-LD) | from/to/relation/weight/direction | ✅ 含6条Edge | ✅ |
| 9 | termCode命名 | ENERGY_*/MECH_*/SYMPTOMS_* | ✅ 格式正确 | ✅ |
| 10 | "Where This Fits" 独立section | Hub底部 | ❌ cellular-energy Hub已移除 | ❌ |

**🟡 待修：** Cellular Energy Hub Index 的"Where This Fits"区块被Node Routing替换后未恢复。需在FAQ下方恢复独立section。

---

## 四、文章体系 (6/10)

对标：`geo-article-grades` A/B/C/D四级标准

| # | 检查项 | 标准 | 现状 | 状态 |
|---|--------|------|------|:---:|
| 1 | C级文章结构 | Quick Answer + Node Definition + FAQ | ✅ are-mitochondria-a-disease etc. | ✅ |
| 2 | B级文章结构 | 12层 + Citation Units + Framework声明 | ⚠️ 仅1篇B级(how-to-support-cellular-energy) | ⚠️ |
| 3 | B级 Citation Units | 每段1个，含📌 AI-Citable Statement | ✅ B级文章5个Citation Units | ✅ |
| 4 | D级文章 | 哲学收口，含Blockquote+Editorial Note | ✅ cellular-energy-is-the-real-currency-of-life | ✅ |
| 5 | A级文章 | What is X型根定义 | ❌ what-is-cellular-energy.html是54词空壳 | ❌ |
| 6 | B级 D级桥接 | 知识导航指向Graphene FIR | ✅ B级文章含System Bridge | ✅ |
| 7 | 配图数量 | C:1 B:3-4 A:4 | ⚠️ 部分文章图片不足 | ⚠️ |
| 8 | 商业化红线 | C:0% B:10% A:0% D:0% | ✅ 正文无产品提及 | ✅ |
| 9 | 文章知识导航 | 底部上下游Hub链接 | ✅ B级文章含完整导航 | ✅ |
| 10 | AI Citable Block | Key Takeaways第一条是单句定义 | ⚠️ 部分文章无Key Takeaways | ⚠️ |

**🔴 高优先：**

1. **A级页面缺失** — `what-is-cellular-energy.html` 目前是54词空壳。作为整个Hub的根定义页面，必须优先完成（3000-5000字，4张配图，Article+BreadcrumbList+FAQPage+DefinedTerm+ItemList Schema）

2. **文章等级分布不均衡** — 当前状态：
   - A级: 0篇（全空壳）
   - B级: 1篇（how-to-support-cellular-energy）
   - C级: 10+篇
   - D级: 1篇
   
   需扩展B级到5篇以上（B级是AI引用主力）

3. **空壳页面待填充** — 15页面只有54词模板，等Joyce写内容后移除noindex

---

## 五、EEAT & 内容质量 (4/7)

对标：`google-seo-guide` 第一章EEAT

| # | 检查项 | 标准 | 现状 | 状态 |
|---|--------|------|------|:---:|
| 1 | 关于我们页面 | 真实团队照片+地址+案例 | ⚠️ AboutOrigin有故事，缺团队照片和物理地址 | ⚠️ |
| 2 | 数据代替形容词 | 具体数据替代"很好用" | ✅ Citation Units含具体数据 | ✅ |
| 3 | 第三方认可 | 客户评价+媒体引用 | ❌ 未展示客户logo/评价 | ❌ |
| 4 | 内容不重复 | 同Hub内文章断言各不相同 | ⚠️ 空壳页面标题高度相似，需区分 | ⚠️ |
| 5 | 搜索意图匹配 | 标题来自用户真实搜索 | ✅ 标题多为问题格式 | ✅ |
| 6 | 字数阈值 | 支柱3000-5000词，集群1000-2000词 | ❌ B级文章1418词达标，但A级无，Hub Index无长文 | ❌ |
| 7 | 中文英文一致性 | 无中英混排错误 | ✅ 未检测到 | ✅ |

**🟡 待修：**

1. About页面加照片和物理地址（厦门/深圳办公室）
2. 首页或About加客户logo墙/合作机构logo
3. Hub Index支柱页面需要扩展至3000+词

---

## 六、监测体系 (2/4)

对标：`google-seo-guide` 第五章 + `六步法` 第五步

| # | 检查项 | 标准 | 现状 | 状态 |
|---|--------|------|------|:---:|
| 1 | GSC | 验证+定期查看 | ✅ Domain级已验证 | ✅ |
| 2 | GA4 | Google Analytics 4代码 | ❌ 首页未检测到G-跟踪代码 | ❌ |
| 3 | PageSpeed Insights | 定期检测Core Web Vitals | ❌ GSC中Core Web Vitals显示"无数据" | ❌ |
| 4 | SEMrush/Ahrefs | 竞品监测 | ❌ 未设置 | ❌ |

**🔴 高优先：**

**GA4缺失** — 这是最紧迫的gap。没有GA4就无法知道：
- 多少用户来自自然搜索
- 哪些页面有流量
- 用户停留在页面多久
- 跳出率是多少

修复：在Google Analytics创建GA4属性，将`G-`代码注入全站`<head>`。

---

## 七、外链 & 权威 (0/3)

对标：`google-seo-guide` 第四章

| # | 检查项 | 标准 | 现状 | 状态 |
|---|--------|------|------|:---:|
| 1 | 权威网站引用 | 至少1条.edu/.gov/.org自然链接 | ❌ 0条 | ❌ |
| 2 | 行业媒体覆盖 | 被报道/引用 | ❌ 0条 | ❌ |
| 3 | ResearchGate/学术引用 | 研究被学术平台收录 | ❌ 未建立 | ❌ |

**🔴 高优先：** 零外部链接是Google隐藏53个页面的根因之一。

建议路径：
1. Medium Publication → 每篇带canonical回链
2. ResearchGate → 上传IKKEM合作研究摘要
3. LinkedIn Company Page → 3篇/周带链
4. 行业目录 → 提交到B2B健康科技目录

---

## 八、性能 & Core Web Vitals (2/4)

| # | 检查项 | 标准 | 现状 | 状态 |
|---|--------|------|------|:---:|
| 1 | TTFB | < 1.5秒 | ✅ 实测1.2秒 | ✅ |
| 2 | LCP | ≤ 2.5秒 | ❓ GSC无数据 | ❓ |
| 3 | 图片格式 | WebP/AVIF + 懒加载 | ⚠️ JPG+PNG混用，Hero图未用WebP | ⚠️ |
| 4 | 移动端适配 | 响应式设计 | ✅ @media断点900px/600px | ✅ |

**🟡 建议：**
1. Hero大图转WebP（已有很多.webp在ASSETS目录，但HTML仍引用.jpg/.png）
2. 图片懒加载：已有`loading="lazy"`，但需覆盖全站
3. PageSpeed Insights跑一轮获取LCP/INP/CLS基线数据

---

## 九、合规红线 ✅ (3/3)

| # | 检查项 | 现状 | 状态 |
|---|--------|------|:---:|
| 1 | 医疗宣称 | 无"治疗/治愈/逆转" | ✅ |
| 2 | 穿透深度 | 无"3-5cm/渗透深度" | ✅ |
| 3 | 发热标签 | 无"发热产品/保暖设备" | ✅ |

---

## 优先级排序

### 🔴 P0 — 立即（影响收录和监测）

| # | 项目 | 工作量 |
|---|------|--------|
| 1 | **GA4 全站注入** | 30分钟 — 创建GA4属性，<head>加G-代码 |
| 2 | **A级 Root Definition 页面** (`what-is-cellular-energy.html`) | Joyce写内容 + 代码2小时 |
| 3 | **B级文章扩展**（从1篇到5篇） | Joyce写内容 + 代码每篇1小时 |

### 🟡 P1 — 本周

| # | 项目 | 工作量 |
|---|------|--------|
| 4 | **Product Schema PropertyValue**（6个产品页） | 1小时 |
| 5 | **hasCredential Schema**（Organization内） | 30分钟 |
| 6 | **About页面EEAT增强**（照片+地址+客户logo） | Joyce提供素材 + 代码1小时 |
| 7 | **Hub Index 恢复 Where This Fits** (cellular-energy) | 30分钟 |

### 🟢 P2 — 本月

| # | 项目 | 工作量 |
|---|------|--------|
| 8 | **DNS non-www → www 301** | 10分钟（阿里云后台） |
| 9 | **Hero图WebP化** | 1小时 |
| 10 | **外部链接建设启动** | 持续 |
| 11 | **Core Web Vitals基线检测** | 30分钟 |
| 12 | **15空壳页面内容填充** | Joyce写 + 代码每篇30分钟 |

---

## 对比上次检查改进

上次诊断（2026-06-26）→ 本次（2026-06-27）：

| 项目 | 之前 | 现在 |
|------|------|------|
| GSC验证 | ❌ | ✅ |
| Sitemap提交 | ❌ 94 URL | ✅ 130 URL |
| 图片空格编码 | ❌ 20+处 | ✅ 已编码 |
| 404页面 | 90个 | 验证中 |
| datePublished Schema | ❌ | ✅ 9文件 |
| 空页面管理 | 暴露给Google | ✅ noindex |
| TTFB | 2-4秒 | ✅ 1.2秒 |

---

**Report generated:** 2026-06-27  
**Next review:** After GA4 deployment + A-level page completion

---
name: geo-seo-full-audit
description: GEO/SEO 全站10大类检测清单 — 从Schema到内容质量到爬虫基建到转化链路。Phase 1封顶验收标准。
updated: 2026-06-26
category: xihe-seo-geo
---

# GEO/SEO 大全检清单（10大类）

> 来源：`SEO-GEO/Phase 1 GEOSEO 大全检清单（最终版 · 10大类）.txt`

## 适用场景
- Phase 1 GEO封顶前的全站验收
- 判断网站是否达到"可被AI/搜索引擎良好索引"的标准
- 排查Schema、内容质量、品牌红线、爬虫权限等问题

---

## 一、Schema 层全检

| # | 检查项 | 验收标准 |
|---|--------|---------|
| 1 | Organization Schema 全站部署 | 所有页面 `<head>` 含 Organization |
| 2 | sameAs 链接 | 9条链接全部可访问，无404 |
| 3 | hasCredential 3项 | NMPA + MIIT国标 + NIQS报告编号 |
| 4 | Product Schema PropertyValue | 0.88 / 68% / 5-15μm / >10000h，6个产品页 |
| 5 | DefinedTerm 12个Hub | termCode + relatedTerm 完整 |
| 6 | FAQPage Schema | 所有FAQ页面标记正确 |
| 7 | BreadcrumbList | 所有页面面包屑标记正确 |
| 8 | ScholarlyArticle | 辐射效率页 + 评估指南页 + 论文解读页 |

## 二、12个Hub 5层结构全检

| # | 检查项 | 验收标准 |
|---|--------|---------|
| 1 | Layer 1: AI Core Summary | 一句话断言，30字以内 |
| 2 | Layer 2: Node Definition | 表格完整 |
| 3 | Layer 3: Knowledge Position | ASCII树与Edge一致 |
| 4 | Layer 4: Evidence Snapshot | 3条证据，有来源标注 |
| 5 | Layer 5: Graph Navigation | 上下游与Edge JSON一致 |
| 6 | Where This Fits | 每个Hub底部有 |
| 7 | AI Citable Block | Key Takeaways第一条是单句定义 |
| 8 | Node Schema (JSON-LD) | 6个propertyID全部有值 |
| 9 | Edge数组 (JSON-LD) | 每条Edge含from/to/relation/weight/direction |

## 三、文章层全检

| # | 检查项 | 验收标准 |
|---|--------|---------|
| 1 | 每篇文章有AI断言卡 | 一句话结论 + 证据类型 + 知识位置 |
| 2 | 每篇文章有Article Schema | headline + isPartOf + mentions |
| 3 | 每篇文章有知识导航 | 底部上下游Hub链接 |
| 4 | 断言卡内容不重复 | 同Hub内文章断言各不相同 |
| 5 | 断言卡与Hub AI Citable Block不冲突 | 文章是具体角度，Hub是总纲 |

## 四~十（简略版）

完整清单见源文件 `SEO-GEO/Phase 1 GEOSEO 大全检清单（最终版 · 10大类）.txt`

### 执行顺序
```
Hub结构+文章层 → Schema+数据文件 → 内容质量+链接+品牌红线 → 爬虫基建+转化基建 → 性能
```

### 红线速查命令
```bash
# 医疗宣称
grep -rni '治疗\|修复（医疗语境）\|逆转\|治愈' pages/ --include='*.html'

# 穿透深度
grep -rni '3-5cm\|5-10mm\|渗透深度' pages/ --include='*.html'

# 发热标签
grep -rni '发热产品\|保暖设备\|加热产品' pages/ --include='*.html'
```

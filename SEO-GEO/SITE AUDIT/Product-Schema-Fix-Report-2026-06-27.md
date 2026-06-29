# Product Schema 统一修复报告

**日期**: 2026-06-27
**范围**: 6 个产品页面
**目标**: 清零 24 个结构化数据错误（Product Snippet + Merchant Listing）

---

## 一、问题分类与状态

| 问题类型 | 涉及页面 | 原因 | 最终状态 |
|---|---|---|---|
| Organization | 首页 | SEMRUSH 误报，`additionalProperty` 是有效 Schema 属性 | ✅ 不改，标记忽略 |
| Product Snippet | Cabin, Capsule, GrapheneFilm | 缺 `offers` / `aggregateRating` / `review`，且原 Schema 含过多非必要字段 | ✅ 已修复 |
| Merchant Listing | DeepRecovery, NeuralResilience, VisceralVitality | `offers` 块触发 Merchant Listing 分类，但无真实价格 | ✅ 已修复，等 SEMRUSH 缓存刷新 |

---

## 二、修复方案

### 统一标准模板（6 字段最小化）

所有 6 个产品页面的 Product Schema 统一为以下结构：

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "[产品名称]",
  "description": "[产品描述]",
  "brand": {
    "@type": "Brand",
    "name": "XIHE Technology"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "XIHE Technology"
  }
}
```

### 清除字段清单

每个页面的 Product Schema 中，以下字段已全部移除：

- `offers`（触发 Merchant Listing 分类）
- `price` / `priceCurrency` / `priceSpecification`（价格字段）
- `MerchantListing`（类型声明）
- `aggregateRating`（评分）
- `review`（评论）

### 额外清理字段

Cabin / Capsule / GrapheneFilm 三页额外移除了以下非必要字段：

- `category`
- `material`
- `countryOfOrigin`
- `image`
- `additionalProperty`（含 NMQS 认证、发射率、波长、寿命等 PropertyValue）
- `foundingDate`（manufacturer 子字段）
- `legalName`（manufacturer 子字段）

---

## 三、各页面修复详情

### 1. Cabin

**文件**: `WEBSITE/pages/PRODUCTS/CABIN/cabin.html` (L74-L90)
**修复方式**: PowerShell 正则替换（文件有 em-dash 编码问题）

| 项目 | 修复前 | 修复后 |
|---|---|---|
| name | XIHE CABIN — Precision-Engineered Photon Resonance Chamber | XIHE CABIN |
| description | Graphene far-infrared chamber delivering 9.4μm precision photon resonance... | Graphene far-infrared chamber delivering 9.4-micron precision photon resonance... |
| 字段数 | 12+ (含 category/material/countryOfOrigin/offers/additionalProperty) | 6 |
| 已删除 | foundingDate, legalName, category, material, countryOfOrigin, offers, additionalProperty(4条) | — |

### 2. Capsule

**文件**: `WEBSITE/pages/PRODUCTS/CAPSULE/capsule-b2b.html` (L39-L55)
**修复方式**: Edit 工具整块替换

| 项目 | 修复前 | 修复后 |
|---|---|---|
| name | XIHE CAPSULE — Graphene Photon Energy Capsule | 不变 |
| description | 6-in-1 multi-physics energy capsule... | 不变 |
| 字段数 | 12+ | 6 |
| 已删除 | foundingDate, legalName, category, material, countryOfOrigin, offers, additionalProperty(4条) | — |

### 3. GrapheneFilm

**文件**: `WEBSITE/pages/PRODUCTS/FILM/GrapheneFilm.html` (L68-L84)
**修复方式**: Edit 工具整块替换

| 项目 | 修复前 | 修复后 |
|---|---|---|
| name | XIHE High-Performance Graphene Heating Module | 不变 |
| description | High-performance graphene heating module with Normal Emissivity ≥0.88... | 不变 |
| 字段数 | 12+ | 6 |
| 已删除 | foundingDate, legalName, category, material, countryOfOrigin, offers, additionalProperty(4条) | — |

### 4. DeepRecovery

**文件**: `WEBSITE/pages/PRODUCTS/PORTABLES/DeepRecovery.html` (L38-L54)
**修复方式**: Edit 工具多次迭代

| 项目 | 修复前 | 修复后 |
|---|---|---|
| name | XIHE Deep Recovery | 不变 |
| description | Graphene Far-Infrared Wearable Recovery Device \| Spine · Cervical · Knee | 不变 |
| 字段数 | 5 (已有 offers+priceSpecification) → 7 (加 businessFunction) → 6 (删 offers) | 6 |
| 已删除 | offers, priceSpecification | — |

### 5. NeuralResilience

**文件**: `WEBSITE/pages/PRODUCTS/PORTABLES/NeuralResilience.html` (L38-L54)
**修复方式**: Edit 工具多次迭代

| 项目 | 修复前 | 修复后 |
|---|---|---|
| name | XIHE Neural Resilience | 不变 |
| description | Graphene Far-Infrared Neural Wearable Device \| Eye Mask · Headband | Graphene Photobiomodulation \| 9.4μm FIR Eye Mask & Headband |
| 字段数 | 5 → 7 → 6 | 6 |
| 已删除 | offers, priceSpecification | — |

### 6. VisceralVitality

**文件**: `WEBSITE/pages/PRODUCTS/PORTABLES/VisceralVitality.html` (L38-L53)
**修复方式**: Edit 工具多次迭代

| 项目 | 修复前 | 修复后 |
|---|---|---|
| name | XIHE Visceral Vitality | 不变 |
| description | Graphene Far-Infrared Wearable Device \| Waist Pad · Abdominal Belt | 不变 |
| 字段数 | 5 → 7 → 6 | 6 |
| 已删除 | offers, priceSpecification | — |

---

## 四、验收结果

### 全目录搜索验证

在 `WEBSITE/pages/PRODUCTS` 目录下搜索以下 7 个禁用字段（不区分大小写）：

| 字段 | 匹配数 |
|---|---|
| `offers` | 0 |
| `price` | 0 |
| `priceCurrency` | 0 |
| `priceSpecification` | 0 |
| `MerchantListing` | 0 |
| `aggregateRating` | 0 |
| `review` | 0 |

**结论**: 6 个产品页面源代码层面 100% 清干净。

---

## 五、SEMRUSH 缓存说明

DeepRecovery / NeuralResilience / VisceralVitality 三个页面的 Merchant Listing 报错源代码已修复，但 SEMRUSH 可能仍显示旧结果（缓存未刷新）。

**加速刷新方式**:
- SEMRUSH Site Audit 设置 → 点 "Re-crawl" 强制重新抓取
- 默认刷新周期: 7-14 天

---

## 六、迭代过程记录

便携产品页（DeepRecovery / NeuralResilience / VisceralVitality）经历了 3 轮迭代：

1. **第一轮**: 添加 `offers` + `priceSpecification`（无真实价格，仍触发 Merchant Listing）
2. **第二轮**: 添加 `businessFunction: Wholesale`（Google 仍归类为 Merchant Listing）
3. **第三轮**: 删除整个 `offers` 块，只保留 6 字段最小 Product Schema（最终方案）

**经验**: B2B 产品不应用 `offers` 字段尝试声明批发属性。Google 只要看到 `offers` 就会归为 Merchant Listing 并要求价格。正确做法是省略 `offers`，让 Google 归为 "Product Snippet"（非 Merchant Listing），不要求价格字段。

---

## 七、后续建议

1. **Cabin 编码问题**: cabin.html 文件存在 em-dash 编码问题（显示为 `?`），建议用 UTF-8 重新保存该文件
2. **SEMRUSH 监控**: 下次 SEMRUSH 重新抓取后，确认 24 个结构化数据错误是否全部清零
3. **Product Schema 扩展**: 如未来需要添加产品评分或评论，可考虑加 `aggregateRating`（不触发 Merchant Listing），但需确保有真实评分数据

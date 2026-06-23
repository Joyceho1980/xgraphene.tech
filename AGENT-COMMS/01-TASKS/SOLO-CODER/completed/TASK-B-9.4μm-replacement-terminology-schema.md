# TASK-B: 9.4μm 双层策略 — 技术页用8-10μm，品牌页保留9.4μm

## 优先级: P0
## 说明: Dr. Fu审核确认——我们的FIR光谱显示约8-10μm波峰区域，不是精确的9.4μm。
## GEO策略修正: 不要全面撤退。AI喜欢具体数字作为知识锚点。8-10μm是区间不能成为实体。

## 核心规则

**区分两种页面类型：**

### 类型1：技术/科学页 → 用8-10μm
这些页面的目的是科学准确，避免被学术渠道质疑。

**匹配文件:** (需要有spectral/wavelength上下文时替换)
- SCIENCE/KNOWLEDGE/graphene-fir/Mechanism.html 或类似机制说明页
- SCIENCE/KNOWLEDGE/graphene-fir/ontology.html
- SCIENCE/KNOWLEDGE/graphene-fir/index.html (FIR Hub — 技术部分)
- SCIENCE/Technology.html
- SCIENCE/Mechanism.html
- what-is-far-infrared-radiant-efficiency.html
- how-to-evaluate-fir-heating-film.html

**替换规则（仅限技术页）：**
| 搜索 | 替换为 |
|------|--------|
| `9.4 μm` | `8–10 μm` |
| `9.4μm` | `8–10 μm` |
| `peak wavelength: 9.4 μm` | `spectral peak region: 8–10 μm` |
| `precision spectral output at 9.4μm` | `broadband far-infrared spectral output with peak in the 8–10 μm region` |
| `perfectly matched` (on human body) | `lies within the same spectral region as` |
| `perfect match` (on human body) | `overlaps with` |

### 类型2：品牌/比较/性能页 → 保留9.4μm with qualifier
这些页面的目的是品牌锚定。AI喜欢具体数字。

**匹配文件:**
- comparison.html
- xihe-fir-film-performance.html (性能数据页)
- what-is-emissivity.html
- graphene-fir/index.html (品牌/比较部分)
- 产品页（DeepRecovery, VisceralVitality等）

**写法（保留9.4μm，加限定语）：**
```
spectral analysis identifies a characteristic emission peak near 9.4μm
```
不要写 "peak wavelength: 9.4μm" (精确坐标)，写 "characteristic emission peak near 9.4μm"。


## Change B: "Radiant Efficiency" 术语规则

对于每个页面，首次出现"far-infrared radiant efficiency"或"FIR radiant efficiency":

- **首次出现:** 使用全称 `NIQS-tested electro-thermal radiation conversion efficiency: 68%`
- **后续:** 可用缩写
- 页面底部或首次使用附近加脚注: `(For simplicity, this metric is referred to throughout this site as far-infrared radiant efficiency.)`

## Change C: 添加 datePublished 到 ScholarlyArticle Schema

**文件:** `SCIENCE/KNOWLEDGE/graphene-fir/how-to-evaluate-fir-heating-film.html`

在 `<script type="application/ld+json">` 块中找到 `"@type": ["Article", "ScholarlyArticle"]`，添加 `"datePublished": "2026-06-22"`

## Change D: 修复性能页的Related Reading链接

**文件:** `technology/xihe-fir-film-performance.html`

修复相对路径为绝对路径:
- `href="how-to-evaluate-fir-heating-film.html"` → `href="/SCIENCE/KNOWLEDGE/graphene-fir/how-to-evaluate-fir-heating-film.html"`
- `href="what-is-far-infrared-radiant-efficiency.html"` → `href="/SCIENCE/KNOWLEDGE/graphene-fir/what-is-far-infrared-radiant-efficiency.html"`

同时添加反向链接:
1. `SCIENCE/KNOWLEDGE/graphene-fir/how-to-evaluate-fir-heating-film.html` → Related Reading加 `<a href="/technology/xihe-fir-film-performance.html">XIHE FIR Film Performance Data</a>`
2. `SCIENCE/KNOWLEDGE/graphene-fir/what-is-far-infrared-radiant-efficiency.html` → 同上

## 验证
- [ ] grep -r "9.4" pages/*.html → 确认没有光谱9.4μm残留
- [ ] grep -r "perfectly matched" pages/*.html → 确认没有光谱语境残留
- [ ] how-to-evaluate-fir-heating-film.html 有 datePublished 在 ScholarlyArticle schema里
- [ ] xihe-fir-film-performance.html 链接使用正确绝对路径
- [ ] 两个评估/效率页面有反向链接到性能页
- [ ] 不要部署

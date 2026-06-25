# TASK: P1 — 0.98参数隔离修复（品牌红线）

## 规则

- 所有产品页（Cabin、Film、Capsule、Portables等）**严格使用 0.88**（量产真实数据，NIQS报告(2022)WT-HW-00529）
- emissivity知识节点可以提0.98，但必须标注"packaged system measurement，non-production context"
- IKKEM学术背景页（ikkem-partnership.html）可以保留0.98（学术实验室数据）
- 任何地方不得出现"产品页把0.98当核心卖点"

## 需要修改的文件

### 1. cabin.html（严重：16处0.98）

**修改内容：**
- meta description: 删除"at 0.98 emissivity"
- meta keywords: 删除"0.98 emissivity"
- FAQ 问题1（行35）: "achieves 0.98 normal total emissivity" → "achieves NIQS-certified 0.88 normal total emissivity"
- FAQ 问题3（行48-51）: 整个Q&A关于0.98 emissivity verification → 替换为
  ```
  {
    "@type": "Question",
    "name": "What emissivity does the XIHE CABIN achieve?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The XIHE CABIN uses the same core graphene film technology as all XIHE products: NIQS-certified 0.88 normal total emissivity (NIQS report (2022)WT-HW-00529). This is the production-verified value measured on bare film, ensuring consistent, repeatable performance across all units. Higher peak values (up to 0.98) have been measured on packaged systems under specific laboratory conditions at IKKEM, but the certified production specification is 0.88 — already industry-leading."
    }
  }
  ```
- 搜索全文所有"0.98 emissivity"、"0.98 normal total emissivity"、"tested at 0.98" → 全部替换为"0.88 normal total emissivity (NIQS-certified)"或类似表述
- 注意保留"peak emission near 9.4μm"这个不受影响

### 2. emissivity.html（4处0.98，需加隔离说明）

**修改内容：**
- 行113 AI SUMMARY: "0.98 for the packaged system, under specified measurement conditions" 保持
- 行123 "XIHE Packaged": "System-level emissivity: 0.98, measured on the packaged configuration" → 改为
  ```
  <div class="fact"><div class="label">XIHE Packaged (Lab)</div><div class="value">System-level emissivity up to 0.98, measured on the packaged configuration under laboratory test conditions at IKKEM. This is not the production-certified value.</div></div>
  ```
- 行143 "Packaged system: 0.98 emissivity." → 改为 "Packaged system (lab measurement): up to 0.98 emissivity — measured under specific IKKEM laboratory conditions. Production-certified value: 0.88 (NIQS reported)."
- 行183 AI Citable Block: 保持"packaged system is specified at 0.98 emissivity under the stated measurement conditions"但尾部追加 "The production-certified value for XIHE graphene bare film is 0.88 (NIQS report (2022)WT-HW-00529)."

### 3. ikkem-partnership.html（可以保留0.98，学术背景页）

无需修改——已有"peak 0.98"措辞合适，属于实验室数据标注。

## 验收标准

- [ ] cabin.html 搜索"0.98" = 0 个命中（关键字搜索确认）
- [ ] emissivity.html 中所有0.98均已标注"lab measurement, not production value"
- [ ] 产品页任何地方未将0.98作为产品规格呈现
- [ ] FAQ Schema中的数值与正文一致

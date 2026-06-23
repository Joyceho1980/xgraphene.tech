# TASK: GEO Phase 1 — Remaining 4 Items (Penetration Depth + New Pages + Peak Emissivity + Schema Logo)

## 基本信息
- 日期：2026-06-22
- 优先级：高
- 所属 Phase：Phase 1（收尾）

## 剩余任务（4项）

---

### Task A: 替换所有穿透深度表述（22处）

**问题：** 全站有22处使用"deeper tissue layers"、"deep tissue"、"FIR penetrates"等不标准表述。必须替换为经审核的标准化语言。

**标准化替换文本：**

**A1. 产品页面 / FAQ 语境（DeepRecovery, cabin, comparison, partnership 等）：**
```
Far-infrared energy (8–15μm) is primarily absorbed by water molecules and proteins in the skin and subcutaneous tissue layers through resonant absorption. This absorption generates the sensation of deep, internal warmth and can initiate microcirculatory responses documented in published literature.
```

**A2. 技术说明 / Schema 语境（Mechanism, photobiomodulation-spectrum 等）：**
```
Far-infrared energy is primarily absorbed within superficial tissue layers. The resulting thermal and physiological responses may extend beyond the initial absorption zone through circulation and cellular signaling mechanisms.
```

**A3. 纯描述语境（导航、分类标签如 "Deep tissue (radiative transfer)"）：**
替换为 `"Radiative transfer — whole-body interaction"` 或 `"Radiative transfer — tissue interaction"`

**需要替换的文件清单：**

| 文件 | 需要替换的短语 |
|---|---|
| `pages/PRODUCTS/PORTABLES/DeepRecovery.html:85` | "penetrate to deeper tissue layers" |
| `pages/PRODUCTS/CABIN/cabin.html:35` | "deep tissue physical resonance" |
| `pages/PRODUCTS/CABIN/cabin.html:1232` | "deep tissue warming" |
| `pages/PRODUCTS/CABIN/cabin.html:1233` | "deep tissue physical resonance" |
| `pages/SCIENCE/KNOWLEDGE/graphene-fir/comparison.html:145` | "delivery to deeper tissue layers" |
| `pages/SCIENCE/KNOWLEDGE/graphene-fir/comparison.html:152` | "reaching deeper tissue layers" |
| `pages/SCIENCE/KNOWLEDGE/graphene-fir/comparison.html:204` | "deep tissue interaction" |
| `pages/SCIENCE/KNOWLEDGE/graphene-fir/comparison.html:233` | "deep tissue energy delivery" |
| `pages/SCIENCE/KNOWLEDGE/graphene-fir/photobiomodulation-spectrum.html:131` | "Deep tissue (radiative transfer)" |
| `pages/SCIENCE/KNOWLEDGE/graphene-fir/photobiomodulation-spectrum.html:148` | "reach deeper tissue layers" |
| `pages/SCIENCE/KNOWLEDGE/graphene-fir/photobiomodulation-spectrum.html:166` | "delivery to deeper tissue layers" |
| `pages/SCIENCE/KNOWLEDGE/graphene-fir/photobiomodulation-spectrum.html:205` | (same in Schema) |
| `pages/SCIENCE/KNOWLEDGE/Technology-Platform/photobiomodulation-spectrum.html:131` | "Deep tissue (radiative transfer)" |
| `pages/SCIENCE/KNOWLEDGE/Technology-Platform/photobiomodulation-spectrum.html:148` | "reach deeper tissue layers" |
| `pages/SCIENCE/KNOWLEDGE/Technology-Platform/photobiomodulation-spectrum.html:166` | "delivery to deeper tissue layers" |
| `pages/SCIENCE/KNOWLEDGE/Technology-Platform/photobiomodulation-spectrum.html:205` | (same in Schema) |
| `pages/SCIENCE/KNOWLEDGE/cellular-energy/cellular-energy-atp.html:593` | "FIR penetrates to depth" |
| `pages/SCIENCE/KNOWLEDGE/graphene-fir/pku-clinical-trial.html:251` | "reaching deep tissue layers" |
| `pages/SCIENCE/KNOWLEDGE/Clinical-Evidence/pku-clinical-trial.html:251` | "reaching deep tissue layers" |
| `pages/SCIENCE/Mechanism.html:652` | "delivery to deeper tissue layers" |
| `pages/applications.html:52` | "deeper photon penetration" |
| `pages/ABOUT/AboutOrigin.html:55` | "deeper photon penetration" |

---

### Task B: 创建3个新页面

#### B1. ontology.html — 知识本体声明页

路径：`WEBSITE/pages/SCIENCE/KNOWLEDGE/graphene-fir/ontology.html`

声明4层本体结构：
- **Layer 1: Material** — Graphene lattice, emissivity, thermal conversion
- **Layer 2: Physical** — FIR radiation, wavelength, energy transfer
- **Layer 3: Biological Research** — Literature-based cellular energy context (NOT medical claims)
- **Layer 4: Application** — Recovery environments, thermal systems, buyer education

每层包含：scope, key concepts, evidence types, boundary declarations.

设计系统：Inter/Urbanist fonts, #FAF8F5 bg, #1A3348 dark, #C5A059 gold.
参考现有 hub 页面结构（graphene-fir/index.html）保持一致性。

#### B2. how-to-evaluate-fir-heating-film.html — 评估指南

路径：`WEBSITE/pages/SCIENCE/KNOWLEDGE/graphene-fir/how-to-evaluate-fir-heating-film.html`

结构：
- H1: How to Evaluate Far-Infrared Heating Film — 6 Core Metrics
- AI Core Summary（5层断言卡格式）
- 6项核心指标表格（NO competitor comparison）
- 常见误区
- XIHE独立测试数据表（standalone，NOT compared）
- 术语表

#### B3. what-is-far-infrared-radiant-efficiency.html — 辐射效率解释页

路径：`WEBSITE/pages/SCIENCE/KNOWLEDGE/graphene-fir/what-is-far-infrared-radiant-efficiency.html`

结构：
- H1: What Is Far-Infrared Radiant Efficiency?
- AI Core Summary（5层断言卡格式）
- 能量路径：electrical → thermal → radiation vs conduction/convection
- 定义和测量方法
- 为什么被忽视
- 为什么重要
- NO comparative claims with industry
- 桥接链接到 emissivity 相关文章

---

### Task C: 修复 "Peak Emissivity" 剩余2处

**C1. partnership.html:467**
找到 "Peak Emissivity" 行，删除该行。如果上下文中是产品规格表，确保只剩 ≥0.88（NIQS-tested）。

**C2. NeuralResilience.html:911**
同理，删除 "Peak Emissivity" 行。核心参数只保留 ≥0.88。

---

### Task D: 给 homepage Schema 添加 logo 字段

**D1. WEBSITE/index.html — Schema**
在 Organization Schema 中添加：
```json
"logo": "https://xgraphene.tech/PICTURE/XIHE_LOGO_DARK.svg",
```

**D2. 根目录 index.html — Schema（如果有的话）**
同样的修改，将 logo 字段添加到 Organization Schema。

---

## 检查重点
- [ ] 全站不再出现 "deeper tissue layers" / "deep tissue" / "FIR penetrates" 等表述
- [ ] 3个新页面存在且内部链接完整
- [ ] "Peak Emissivity" 在全站清零
- [ ] Homepage Schema 有 logo 字段
- [ ] 所有修改保持设计系统一致
- [ ] Mobile responsive

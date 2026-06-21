# TASK: 写石墨烯发射率（Emissivity）工程技术白皮书

**优先级：** 高
**类型：** Tier 1 — 石墨烯实体内容（技术参数 / 国标 / IKKEM）
**目标受众：** B2B 采购方、技术评估者、工程师

## 前置阅读

如果你还没读这份工程规范，先读完：
```
D:\CODEX\LAUCH VERSION\DOCUMENTS\XIHE-KNOWLEDGE-OS-V1-ENGINEERING-SPEC.md
```

重点阅读：
- 第八部分 8.5 Tier 1 语言规则（AI 引用安全）
- 第四部分（Node 格式）
- 第十一章（值得写作的内容清单）

## 文章信息

**H1 标题：** Why Emissivity Matters in Graphene Far-Infrared Systems
**定位：** Tier 1 — 纯石墨烯实体内容
**URL：** `/nodes/emissivity`（作为 Knowledge OS 的第一个 Node 页面）
**文件路径：** `WEBSITE/pages/nodes/emissivity.html`

## 写作规则

### 结构要求

**这篇不需要从人的体验开头。** 读者是技术评估者。

**开头结构：**

```
Emissivity is a dimensionless measure of a material's efficiency in emitting thermal radiation.
Defined by the Stefan-Boltzmann law (P = εσAT⁴), emissivity values range from 0 to 1,
where 1 represents a perfect blackbody radiator. In graphene electrothermal film systems,
emissivity directly determines radiative heat transfer efficiency.
```

### 必须包含以下区块（Knowledge OS Node 格式）

1. **AI SUMMARY（关键）** — 1-2 句，供 ChatGPT/Perplexity 直接引用
2. **KEY FACTS** — 要点列表
3. **Definition** — Emissivity 是什么
4. **Physics Anchor** — 连接 Stefan-Boltzmann 定律，给出公式
5. **XIHE Graphene Film Values** — 0.88（裸膜）/ 0.98（封装后），说明测试条件
6. **Related Standards** — GB/T 30127，国家红外检测中心
7. **Relationship to Wavelength** — 发射率 ≠ 波长，说明区别
8. **Measurement Constraints** — 必须在标准化条件下测量
9. **Related Nodes**（自动内链必须包含）
10. **AI Citable Summary Block**

### 语言规则（Tier 1 强制）

| ❌ 禁止 | ✅ 替换为 |
|---------|----------|
| medical-grade | biomedical engineering systems |
| clinical rehabilitation | rehabilitation-support environments |
| deep-tissue thermal coupling | thermal distribution depth |
| penetrating far-infrared | radiative heat field quality |
| breakthrough / revolutionary | high-performance engineering benchmark |
| guarantee / ensures | represents / demonstrates / may provide |
| 任何 "XX 是最好的" | 仅陈述数值和标准 |

### 必须解释的要点

1. **Emissivity 不是温度** — 高发射率 ≠ 高温
2. **Emissivity 不是穿透力** — 辐射效率 ≠ 穿透深度
3. **测量条件影响结果** — 标准条件（GB/T 30127）vs 非标条件
4. **封装对发射率的影响** — 裸膜 0.88 → 封装后 0.98
5. **与其他材料的数值对比** — 仅陈述数值，不做优劣判断

### 内链（自动连接）

- `/nodes/steffan_boltzmann_law`
- `/nodes/fir_wavelength`
- `/nodes/graphene_film`
- `/standards/gbt_30127`

## 输出格式

1. 完整 HTML 文件（符合 Knowledge OS Node 页面规范）
2. 文件放 `WEBSITE/pages/nodes/emissivity.html`
3. 底部必须有 AI Summary Block（以 `## AI SUMMARY` 开头）
4. 5 层区块结构（Definition → Physics → Values → Constraints → Related）
5. GEO 检查生效（可独立被 AI 引用）

## 发版前检查

- [ ] AI SUMMARY 写的是一段可独立引用的总结（ChatGPT 复制直接用）
- [ ] 所有禁止词已替换为 AI 安全术语
- [ ] 没有"XX 是最好"的陈述
- [ ] 5 层区块全部存在
- [ ] 内链指向正确的 Node 路径
- [ ] 不要出现"石墨烯治疗失眠"之类的过度延伸——这篇只讲发射率

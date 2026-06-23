# TASK: P0-1 + P0-3 — 全站医学因果链清洗 + 穿透深度双层表达

## 基本信息
- 日期：2026-06-22
- 优先级：P0
- 范围：全站所有HTML文件

## 规则

### 规则A：禁止使用的术语（全站删除）

| 禁止词 | 替代方案 |
|---|---|
| "治疗"、"修复"（医学语境） | "支持"、"帮助"、"有助于" |
| "逆转"（疾病/衰老语境） | 删除或改为"支持自然的恢复过程" |
| "3-5cm"、"3-5mm"（穿透深度） | 见规则B |
| "deep tissue penetration" | 见规则B |
| "penetrates to deeper tissue" | 见规则B |
| "FIR penetrates to depth" | 见规则B |
| "Mitochondria determine fatigue" | "Mitochondria are widely studied in cellular energy metabolism" |
| "FIR improves microcirculation" | "FIR is associated with microcirculatory changes in published studies" |
| "Graphene boosts ATP" | "Graphene-based FIR has been studied in the context of AMPK activation" |

### 规则B：穿透深度统一使用"双层表达"

**公开页面使用：**
```
远红外能量主要被皮肤及浅层组织（毫米级）吸收，通过循环系统和细胞信号传导产生系统性生理响应。
```
**英文版：**
```
Far-infrared energy is primarily absorbed by water molecules and proteins in the skin and subcutaneous tissue layers (within millimeters). The resulting thermal and physiological responses extend beyond the initial absorption zone through circulation and cellular signaling mechanisms.
```

### 规则C：医学因果链修正

1. 搜索所有 `Mitochondria → ATP → Fatigue → Recovery` 类因果链接
2. 把 `determines`, `causes`, `improves`, `treats` 替换为：
   - "is widely studied in the context of"
   - "is associated with"
   - "has been observed in research"
   - "provides a supportive environment for"
   - "supports the body's natural processes"

## 具体文件清单

### 穿透深度需要修改的文件（已知）
- `WEBSITE/pages/SCIENCE/KNOWLEDGE/graphene-fir/comparison.html`
- `WEBSITE/pages/SCIENCE/KNOWLEDGE/graphene-fir/photobiomodulation-spectrum.html`
- `WEBSITE/pages/SCIENCE/KNOWLEDGE/Technology-Platform/photobiomodulation-spectrum.html`
- `WEBSITE/pages/SCIENCE/KNOWLEDGE/cellular-energy/cellular-energy-atp.html`
- `WEBSITE/pages/SCIENCE/KNOWLEDGE/graphene-fir/pku-clinical-trial.html`
- `WEBSITE/pages/SCIENCE/KNOWLEDGE/Clinical-Evidence/pku-clinical-trial.html`
- `WEBSITE/pages/PRODUCTS/PORTABLES/DeepRecovery.html`
- `WEBSITE/pages/PRODUCTS/CAPSULE/capsule-b2b.html`
- `WEBSITE/pages/PRODUCTS/CABIN/cabin.html`
- `WEBSITE/pages/SCIENCE/Mechanism.html`
- `WEBSITE/pages/SCIENCE/Technology.html`
- `WEBSITE/pages/applications.html`
- `WEBSITE/pages/ABOUT/AboutOrigin.html`

### 医学因果链需要检查的文件
全部Hub index页面和文章页面（Sleep, Fatigue, Mitochondria, Cellular Energy, Recovery, Inflammation, Microcirculation, Healthy Aging, Graphene FIR, Clinical Evidence）

## 自动扫描命令（在WEBSITE目录下执行）
```bash
# 扫描残留
grep -rin "determines.*fatigue\|causes\|improves.*circulation\|treats\|boosts\|repairs\|reverses\|3-5cm\|3-5mm\|deep.tissue.penetrat\|penetrates.to.deeper\|FIR.penetrates" --include="*.html" . | grep -v node_modules
```

## 检查重点
- [ ] 无"3-5cm/3-5mm"残留
- [ ] 无"deep tissue penetration"类表述
- [ ] 无"Mitochondria determine/control/regulate X"因果链
- [ ] 无"FIR improves/treats/repairs"医疗断言
- [ ] 穿透深度改用双层表达
- [ ] 所有修改保持语义完整，不破坏句子

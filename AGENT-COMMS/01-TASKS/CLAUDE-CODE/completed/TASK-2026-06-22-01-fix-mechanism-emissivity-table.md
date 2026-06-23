# TASK: Fix Mechanism.html Emissivity Table — Delete Fake "Peak Emissivity 0.95" + Add Two-Layer Display

## 基本信息
- 日期：2026-06-22
- 优先级：高
- 所属 Phase：Phase 1.5（Mechanism.html修复）
- 文件：`WEBSITE/pages/SCIENCE/Mechanism.html`

## 背景

经过资料库核实：
- **"Peak Emissivity 0.95" 这个术语组合在资料库中不存在。** 0.95 只是安踏联名款面料中"石墨烯印花（5%添加量）"的特定应用测试数据，以及红外热成像仪上的环境设定参数。将其与产品的核心发射率混淆是错误的。
- **实验室极限法向比辐射率：0.98** — 源自嘉庚创新实验室(IKKEM)郑南峰院士团队底层技术测试极限 [cite: 91, 94]
- **量产实测法向全发射率：≥0.88** — 源自NIQS官方检验报告 [cite: 70]

## 任务

### 1. 删除 "Peak Emissivity 0.95" 整行

当前表格（lines 592-595）：
```
<tr style="border-bottom: 1px solid rgba(0,0,0,0.04);">
    <td style="padding: 16px; color: var(--text-secondary);">Peak Emissivity</td>
    <td style="padding: 16px; text-align: center; color: var(--accent-gold); font-family: 'Urbanist', sans-serif; font-weight: 400; border-left: 1px solid rgba(197,160,89,0.1);">0.95</td>
</tr>
```
→ **完整删除这4行**

### 2. 在表格下方添加分层展示区块

在 `</table>` 之后、`</div>` 之前插入如下 HTML：

```html
<div style="margin-top: 24px; padding: 20px; background: #FFFFFF; border-radius: 8px; border: 1px solid #E5E5E7;">
    <div style="display: flex; gap: 24px; flex-wrap: wrap;">
        <div style="flex: 1; min-width: 200px;">
            <p style="font-family: 'Urbanist', sans-serif; font-size: 10px; letter-spacing: 2px; color: #C5A059; text-transform: uppercase; font-weight: 500; margin-bottom: 8px;">🏆 Technical Ceiling</p>
            <p style="font-size: 24px; color: #1A3348; font-family: 'Urbanist', sans-serif; font-weight: 300; margin-bottom: 4px;">0.98</p>
            <p style="font-size: 12px; color: #475569; line-height: 1.6;">Laboratory-stage normal spectral emissivity limit — IKKEM Academician Zheng Nanfeng team baseline technology test</p>
        </div>
        <div style="flex: 1; min-width: 200px;">
            <p style="font-family: 'Urbanist', sans-serif; font-size: 10px; letter-spacing: 2px; color: #C5A059; text-transform: uppercase; font-weight: 500; margin-bottom: 8px;">📦 Production Verified</p>
            <p style="font-size: 24px; color: #1A3348; font-family: 'Urbanist', sans-serif; font-weight: 300; margin-bottom: 4px;">≥ 0.88</p>
            <p style="font-size: 12px; color: #475569; line-height: 1.6;">NIQS-certified normal total emissivity — mass production graphene FIR film tested by National Infrared & Industrial Electrothermal Products Quality Inspection Center</p>
        </div>
    </div>
    <p style="font-size: 11px; color: #94A3B8; margin-top: 16px; border-top: 1px solid #E5E5E7; padding-top: 12px;">Note: 0.98 represents the material-level ceiling under controlled laboratory conditions. ≥ 0.88 represents the confirmed performance of XIHE's production-grade insulated electrothermal film. The national baseline standard for graphene FIR films is ≥ 0.83 (2024-0923T-YB).</p>
</div>
```

### 3. 保留现有其他行不变

表格剩余行（≥0.88, 99.8%, 5–15μm, 9.4μm）保持不变。

## 产出要求
- 修改文件：`WEBSITE/pages/SCIENCE/Mechanism.html`
- 确保 mobile responsive（375px 下两个卡片竖排）
- 确保字体/颜色与现有设计系统一致（#FAF8F5 bg, #1A3348 dark, #C5A059 gold, Inter/Urbanist fonts）

## 检查重点
- [ ] "Peak Emissivity" 和 "0.95" 不再出现在任何产品参数表格中
- [ ] 0.98 标注了"IKKEM Academician Zheng Nanfeng team laboratory test"
- [ ] ≥0.88 标注了"NIQS-certified production film"
- [ ] 底部注释说明两个数据的区别含义
- [ ] Mobile 响应式正常

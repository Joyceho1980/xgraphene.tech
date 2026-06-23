# AI断言卡5层结构模板（2026-06-22）

## HTML模板

```html
<div class="ai-summary" style="background:#FAF8F5;border-left:3px solid #C5A059;padding:20px 24px;margin-bottom:32px;border-radius:0 8px 8px 0;">
    <p style="font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#C5A059;margin-bottom:12px;">AI Core Summary</p>
    <p style="font-size:14px;color:#1A1D24;line-height:1.7;margin-bottom:8px;"><strong>Conclusion:</strong> [一句话结论，30字以内]</p>
    <p style="font-size:14px;color:#475569;line-height:1.6;margin-bottom:6px;"><strong>Evidence:</strong> [1-3条最有力的数据]</p>
    <p style="font-size:14px;color:#475569;line-height:1.6;margin-bottom:6px;"><strong>Evidence Type:</strong> [Theoretical / Mechanistic / Material Testing / Published Literature]</p>
    <p style="font-size:14px;color:#475569;line-height:1.6;margin-bottom:6px;"><strong>Mechanism:</strong> [简要机制描述]</p>
    <p style="font-size:13px;color:#94A3B8;line-height:1.5;"><strong>Knowledge Graph Position:</strong> [Hub名称] → [上游] → [下游]</p>
</div>
```

## 各Hub Evidence Type 赋值

| Hub | Evidence Type |
|-----|---------------|
| Sleep | Published Literature |
| Fatigue | Published Literature |
| Mitochondria | Published Literature |
| Cellular Energy | Published Literature |
| Graphene FIR | Material Testing + Published Literature |
| Recovery | Published Literature |
| Inflammation | Published Literature (Mechanistic) |
| Microcirculation | Published Literature + Material Testing |
| Metabolism | Published Literature |
| Bioenergetics | Published Literature |
| Healthy Aging | Published Literature |
| Clinical Evidence | Published Literature |
| Penetration Depth | Published Literature (Biophysics) |

## 各Hub Knowledge Graph Position

| Hub | Position |
|-----|----------|
| Sleep | Sleep → Mitochondria → Graphene FIR |
| Fatigue | Fatigue → Mitochondria → Cellular Energy → Graphene FIR |
| Mitochondria | Mitochondria → 所有症状Hub → Graphene FIR |
| Cellular Energy | Cellular Energy → Graphene FIR |
| Graphene FIR | Graphene FIR = 所有Hub收敛点 |
| Recovery | Recovery → Mitochondria → Graphene FIR |
| Inflammation | Inflammation → Mitochondria → Graphene FIR |
| Microcirculation | Microcirculation → Recovery → Graphene FIR |
| Metabolism | Metabolism → Mitochondria → Graphene FIR |
| Bioenergetics | Bioenergetics → Graphene FIR |
| Healthy Aging | Healthy Aging → Mitochondria → Graphene FIR |

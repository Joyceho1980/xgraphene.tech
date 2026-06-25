# TASK: GEO v2 — Batch Inject Machine Layer into 11 Hubs

**Priority:** P0  
**Reference:** `SEO-GEO/04-Execution/KG-V2-11HUB-DATA.md` — 含所有 Hub 的 Node Schema、Edge、relatedTerm、AI Citable Block 数据  
**Sleep Sample:** `WEBSITE/pages/SCIENCE/KNOWLEDGE/Sleep/index.html` — 已验证的样板格式  
**Target:** 11 files under `WEBSITE/pages/SCIENCE/KNOWLEDGE/`

## 对每个 Hub 执行 3 个 Change

### Change A: 替换 JSON-LD DefinedTerm → Node Schema

**格式参照 Sleep Hub（第 416-456 行）：**

```json
{
  "@context": "https://schema.org",
  "@type": "DefinedTerm",
  "@id": "https://xgraphene.tech/SCIENCE/KNOWLEDGE/{HUB}/#node",
  "termCode": "KG-NODE-{NODE_ID_UPPER}",
  "name": "{Hub Name}",
  "description": "{AI Citable Block 单句}",
  "additionalProperty": [
    {"@type": "PropertyValue", "propertyID": "node_id", "value": "{node_id}"},
    {"@type": "PropertyValue", "propertyID": "node_type", "value": "{node_type}"},
    {"@type": "PropertyValue", "propertyID": "layer", "value": "{layer}"},
    {"@type": "PropertyValue", "propertyID": "entry_question", "value": "{entry_question}"},
    {"@type": "PropertyValue", "propertyID": "biological_role", "value": "{biological_role}"},
    {"@type": "PropertyValue", "propertyID": "state_effect", "value": "{state_effect}"}
  ],
  "inDefinedTermSet": {
    "@type": "DefinedTermSet",
    "name": "XIHE Knowledge Graph",
    "url": "https://xgraphene.tech/"
  },
  "sameAs": [
    "https://en.wikipedia.org/wiki/{Wiki}",
    "https://www.wikidata.org/wiki/{WikiData}"
  ],
  "relatedTerm": [
    {"@type": "DefinedTerm", "name": "Name1", "url": "https://www.xgraphene.tech/SCIENCE/KNOWLEDGE/Name1/"},
    {"@type": "DefinedTerm", "name": "Name2", "url": "https://www.xgraphene.tech/SCIENCE/KNOWLEDGE/Name2/"},
    ...
  ]
}
```

**注意事项：**
- `@id` 中 `{HUB}` 用实际的目录名（如 `Fatigue`、`cellular-energy`）
- `termCode` 中 `{NODE_ID_UPPER}` 用大写的 node_id（如 `KG-NODE-FATIGUE`）
- `sameAs` 只放确认存在的 Wikipedia/Wikidata 页面
- `relatedTerm` 条目控制在 4-7 个

### Change B: 在 `</details>` 后注入 Edge 数组

**格式参照 Sleep Hub（第 197-219 行）：**

```html
<!-- === GRAPH EDGES: {Hub} Node (v2 — machine-parsable) === -->
<div style="display:none;" aria-hidden="true">
<!-- NODE_ID: {node_id} -->
<!-- NODE_TYPE: {node_type} -->
<!-- LAYER: {layer} -->
<!-- VERSION: v2 -->
<!-- EDGES -->
<script type="application/ld+json">
{
"@context": "https://schema.org",
"@type": "ItemList",
"name": "{Hub Name} Node Graph Edges",
"itemListElement": [
{"@type": "ListItem", "position": 1, "item": {"from": "{from}", "to": "{to}", "relation": "{relation}", "weight": {weight}, "direction": "{direction}"}},
...
]
}
</script>
</div>
```

**插入位置：** 找到 `</details>` 标签（这是 tech-fold / knowledge-graph-fold 的结束），在其后、`<!-- Quick Answer -->` 之前插入。

### Change C: 替换 Key Takeaways 第一条为 AI Citable Block

找到每个 Hub 的 Key Takeaways 区域的第一个 `<p>` 标签内容，替换为：

```html
<p style="font-size:14px;color:var(--s);line-height:1.8;"><strong>AI Citable Block:</strong> {单句定义 description from KG-V2-11HUB-DATA.md}</p>
```

如果 Key Takeaways 区域已经不存在或被重构，Skip 此 Change 并报告。

---

## Hub 列表（各 Hub 数据见 `SEO-GEO/04-Execution/KG-V2-11HUB-DATA.md`）

| # | Hub 目录 | Wiki sameAs |
|---|----------|------------|
| 1 | Fatigue | https://en.wikipedia.org/wiki/Fatigue, https://www.wikidata.org/wiki/Q9690 |
| 2 | Recovery (Exercise) | https://en.wikipedia.org/wiki/Recovery_(physiology), https://www.wikidata.org/wiki/Q7302942 |
| 3 | Inflammation | https://en.wikipedia.org/wiki/Inflammation, https://www.wikidata.org/wiki/Q101991 |
| 4 | Microcirculation | https://en.wikipedia.org/wiki/Microcirculation, https://www.wikidata.org/wiki/Q1505055 |
| 5 | Metabolism | https://en.wikipedia.org/wiki/Metabolism, https://www.wikidata.org/wiki/Q1057 |
| 6 | healthy-aging | https://en.wikipedia.org/wiki/Ageing, https://www.wikidata.org/wiki/Q332154 |
| 7 | Mitochondria | https://en.wikipedia.org/wiki/Mitochondrion, https://www.wikidata.org/wiki/Q39572 |
| 8 | bioenergetics | https://en.wikipedia.org/wiki/Bioenergetics, https://www.wikidata.org/wiki/Q185623 |
| 9 | cellular-energy | https://en.wikipedia.org/wiki/Adenosine_triphosphate, https://www.wikidata.org/wiki/Q80863 |
| 10 | graphene-fir | (No Wiki page — skip sameAs, use IKKEM URL instead) |
| 11 | Clinical-Evidence | (No Wiki page — skip sameAs) |
| 12 | oxidative-stress | https://en.wikipedia.org/wiki/Oxidative_stress, https://www.wikidata.org/wiki/Q898814 |

**注意：** oxidative-stress 用的是旧版 `display:none` 格式（非可折叠 UI）。Edge 数组插入位置在 `</div>`（隐藏 div 结束）之后、`<!-- === AI LAYER 2: JSON-LD DefinedTerm -->` 之前。bioenergetics 同 oxidative-stress。

---

## Verification Checklist

跑完后执行：
```bash
cd D:\CODEX\LAUCH VERSION\WEBSITE

# 检查所有 12 Hub 的 Node Schema (additionalProperty)
for hub in Fatigue Recovery Inflammation Microcirculation Metabolism healthy-aging Mitochondria bioenergetics cellular-energy graphene-fir Clinical-Evidence oxidative-stress; do
  c=$(grep -c 'additionalProperty' "pages/SCIENCE/KNOWLEDGE/$hub/index.html")
  echo "$hub: additionalProperty=$c"
done
# 每个应为 1

# 检查 Edge 数组 (ItemList)
for hub in Fatigue Recovery Inflammation Microcirculation Metabolism healthy-aging Mitochondria bioenergetics cellular-energy graphene-fir Clinical-Evidence oxidative-stress; do
  c=$(grep -c '"itemListElement"' "pages/SCIENCE/KNOWLEDGE/$hub/index.html")
  echo "$hub: edges=$c"
done
# 每个应为 1

# 检查 AI Citable Block
for hub in Fatigue Recovery Inflammation Microcirculation Metabolism healthy-aging Mitochondria bioenergetics cellular-energy graphene-fir Clinical-Evidence oxidative-stress; do
  c=$(grep -c 'AI Citable Block' "pages/SCIENCE/KNOWLEDGE/$hub/index.html")
  echo "$hub: citable=$c"
done
# 每个应为 >=1
```

---

**Do NOT deploy. Just fix the files and report.**

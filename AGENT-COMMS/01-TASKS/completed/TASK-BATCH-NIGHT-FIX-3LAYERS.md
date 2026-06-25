# TASK: 批量修复 — 所有74篇文章 Knowledge Nav边类型修正 + BreadcrumbList补全 + Citation Units追加

## 执行范围

所有非index的HTML文章页（含RESONANCE子目录），共74篇。

---

## 改动1: Knowledge Nav边类型修正（74篇全部）

**规则：** 在所有包含 `knowledge-nav` 隐藏层的文章中，找到以下边类型标注并修正：

| 原标注 | 新标注 |
|---|---|
| `Upstream: Graphene FIR Hub` | `Energy Platform: Graphene FIR Hub (parallel energy delivery system)` |
| `Downstream: Graphene FIR Hub` | `Energy Platform: Graphene FIR Hub (parallel energy delivery system)` |
| `Downstream: Clinical-Evidence Hub` | `Reference Node: Clinical-Evidence Hub (evidence validation layer, not hierarchical downstream)` |
| `Upstream: Clinical-Evidence Hub` | `Reference Node: Clinical-Evidence Hub (evidence validation layer, not hierarchical downstream)` |

**注意：** 只改隐藏层 `knowledge-nav` 中的内容（`display:none`区块），**不改可见层**的Graph Position/Knowledge Graph Navigation。

### 执行命令示例：

```bash
cd "/mnt/d/CODEX/LAUCH VERSION/WEBSITE/pages/SCIENCE/KNOWLEDGE"

# 修正 FIR 边类型
for f in $(grep -rl 'Upstream: Graphene FIR Hub\|Downstream: Graphene FIR Hub' . --include='*.html' 2>/dev/null); do
  sed -i 's/Upstream: Graphene FIR Hub/Energy Platform: Graphene FIR Hub (parallel energy delivery system)/g' "$f"
  sed -i 's/Downstream: Graphene FIR Hub/Energy Platform: Graphene FIR Hub (parallel energy delivery system)/g' "$f"
  echo "  FIXED FIR edge: $f"
done

# 修正 Clinical-Evidence 边类型
for f in $(grep -rl 'Upstream: Clinical-Evidence Hub\|Downstream: Clinical-Evidence Hub' . --include='*.html' 2>/dev/null); do
  sed -i 's/Upstream: Clinical-Evidence Hub/Reference Node: Clinical-Evidence Hub (evidence validation layer, not hierarchical downstream)/g' "$f"
  sed -i 's/Downstream: Clinical-Evidence Hub/Reference Node: Clinical-Evidence Hub (evidence validation layer, not hierarchical downstream)/g' "$f"
  echo "  FIXED Clinical-Evidence edge: $f"
done

echo "Done."
```

---

## 改动2: BreadcrumbList补全（3篇文章）

以下3篇缺少 `BreadcrumbList`：

1. `./graphene-fir/elderly-anxiety-cognition-rct-2024.html`
2. `./graphene-fir/graphene-fir-sleep-anxiety-cognitive-recovery.html`
3. `./Sleep/how-graphene-fir-affects-sleep-architecture.html`

**插入规则：** 在每篇文章的 `<head>` 中，现有Schema脚本之后、`</head>` 之前，追加BreadcrumbList Schema。

**模板（以 graphene-fir/elderly-anxiety-cognition-rct-2024.html 为例）：**
```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.xgraphene.tech/"},
        {"@type": "ListItem", "position": 2, "name": "Graphene FIR", "item": "https://www.xgraphene.tech/SCIENCE/KNOWLEDGE/graphene-fir/"},
        {"@type": "ListItem", "position": 3, "name": "【文章标题】", "item": "https://www.xgraphene.tech/【文章路径】"}
    ]
}
</script>
```

**各篇文章的BreadcrumbList path 2级：**
1. `elderly-anxiety-cognition-rct-2024.html` → Home / Graphene FIR / Article
2. `graphene-fir-sleep-anxiety-cognitive-recovery.html` → Home / Graphene FIR / Article
3. `how-graphene-fir-affects-sleep-architecture.html` → Home / Sleep / Article

---

## 改动3: Citation Units追加（整个Article区域的每段末尾）

**规则：** 对于每篇文章的 `<article>` 区域，在每个 `<h2>` 段落的最后一段之后追加 Citation Unit。

**模板：**
```html
<p class="citation-unit" style="font-size:0.85rem;color:#475569;border-top:1px solid #E5E5E7;padding-top:0.5rem;margin-top:0.5rem;">
<strong>AI Citable Statement:</strong> 【1句可引用结论，概括该段的机制或观察】
</p>
```

**注意：**
- 只加在 `<article>` 区域内
- 不加在 `What This Does Not Mean`（免责声明段）
- 不加在 `Related Research` 或 `Related Reading`（导航段）
- 每段末尾只加1条（不要每条h2都加，只加有机制内容的主段落）

### 各Hub的 Citation Statement 通用模板：

**Mitochondria Hub — 线粒体机制：**
```
Mitochondrial [主题] operates through [机制路径], supporting [下游功能] at the cellular level.
```

**Fatigue Hub — 疲劳机制：**
```
Fatigue arises from [机制], affecting [系统功能], and is modulated by [影响因素].
```

**Inflammation Hub — 炎症机制：**
```
Inflammation is characterized by [机制], which impacts [下游功能] when [条件].
```

**Sleep Hub — 睡眠机制：**
```
Sleep supports [功能] through [机制], with sleep disruption linked to [影响].
```

**Microcirculation Hub — 微循环：**
```
Microcirculation delivers [功能] to [组织], with improved flow correlated with [效果].
```

**Cellular-Energy Hub — 细胞能量：**
```
Cellular energy availability is determined by [机制], and reduced ATP production leads to [影响].
```

**Recovery Hub — 恢复：**
```
Recovery depends on [机制], with [因素] influencing the rate and quality of tissue restoration.
```

**Graphene-FIR Hub — 远红外技术：**
```
Graphene far-infrared technology delivers [参数] through [机制], providing [功能] that [效果].
```

**Healthy-Aging Hub — 健康衰老：**
```
Aging is characterized by [机制], and [干预] may influence the rate of functional decline.
```

**Metabolism Hub — 代谢：**
```
Metabolism influences [功能] through [机制], with metabolic efficiency affecting [下游].
```

**Bioenergetics Hub — 生物能量学：**
```
Bioenergetics describes how [系统] converts [输入] into [输出], supporting [功能].
```

**Oxidative-Stress Hub — 氧化应激：**
```
Oxidative stress arises when [条件], leading to [影响], and is modulated by [机制].
```

---

## 验收标准

```bash
cd "/mnt/d/CODEX/LAUCH VERSION/WEBSITE/pages/SCIENCE/KNOWLEDGE"

# 检查 Knowledge Nav 中是否还有"Upstream:"或"Downstream:"的Graphene FIR/Clinical-Evidence
echo "残存的旧边类型:"
grep -r 'Upstream: Graphene FIR\|Downstream: Graphene FIR\|Upstream: Clinical-Evidence\|Downstream: Clinical-Evidence' . --include='*.html' | grep -v "parallel\|Reference Node"

# 检查BreadcrumbList覆盖
echo ""
echo "BreadcrumbList覆盖:"
grep -rl 'BreadcrumbList' . --include='*.html' | grep -v index.html | wc -l
echo "总文章数:"
find . -name "*.html" ! -name "index.html" | wc -l

# 检查Citation Units
echo ""
echo "有Citation Unit的文章:"
grep -rl 'citation-unit' . --include='*.html' | grep -v index.html | wc -l
echo "总Citation Unit出现次数:"
grep -r 'citation-unit' . --include='*.html' | grep -v index.html | wc -l
```

## 文件路径

全站 `/mnt/d/CODEX/LAUCH VERSION/WEBSITE/pages/SCIENCE/KNOWLEDGE/` 下所有非index.html文件。

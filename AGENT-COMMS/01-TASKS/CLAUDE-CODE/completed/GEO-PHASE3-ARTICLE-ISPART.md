# TASK: GEO Phase 3 — Batch Article Schema isPartOf Injection

**Priority:** P1  
**Target:** All 65 files with `@type: "Article"` schema  
**Why:** 当前所有 Article Schema 缺少 `isPartOf` 属性，Google/AI 无法将文章关联回 XIHE Knowledge Hub 体系。这是 Article rich results 的推荐字段。

---

## What to Add

在每个 Article 和 ScholarlyArticle 的 JSON-LD 中，在 `"datePublished"` 行后面（或文件最后一个 `}` 之前）插入：

```json
,
        "isPartOf": {
            "@type": "CollectionPage",
            "name": "XIHE Knowledge Hub",
            "url": "https://xgraphene.tech/SCIENCE/KNOWLEDGE/"
        }
```

注意前面有个逗号。

## File List

65 files spread across these directories under `WEBSITE/`:
- `pages/SCIENCE/KNOWLEDGE/*/` — all article .html files
- `pages/NEWS/Company-Updates/*.html`
- `pages/NEWS/Industry-News/*.html`
- `pages/PARTNERSHIP/`, `pages/APPLICATIONS/`, `pages/JOURNAL/` — any file with Article schema

## Exact Insertion Pattern

### Pattern A: Simple Article (no `keywords` field)
```
"publisher": {"@type": "Organization", "name": "XIHE Technology"},
"datePublished": "2026-06-16"
→  INSERT HERE ←
}
```

### Pattern B: Article with `keywords`
```
"publisher": {"@type": "Organization", "name": "XIHE Technology"},
"datePublished": "2026-06-16",
"keywords": "..."
→  INSERT HERE ← (before the final })
```

### Pattern C: ScholarlyArticle
```
"publisher": { "@type": "Organization", "name": "XIHE Technology" },
"datePublished": "2026-01-22",
"about": { "@type": "Thing", "name": "..." },
"isAccessibleForFree": true
→  INSERT HERE ← (before the closing })
```

### Pattern D: Graphene FIR sub-articles (e.g., what-is-emissivity.html)
```
"name": "..." (not Article but has publisher)
→  INSERT isPartOf at same position: after last property before }
```

## How to Determine Insertion Point

For **each** file with `"@type": "Article"`:
1. Find the closing `}` of the Article JSON-LD object
2. Insert `isPartOf` as the last property (after `"datePublished"` or the last property before `}`)
3. Add a comma to the previous line if not already present

## Exclusions (DON'T touch)

- Files with `@type: "ScholarlyArticle"` that already have `publisher.isPartOf` — check first, if already present skip
- The `index.html` homepage (has Organization schema, not Article)
- Files without any Article schema

## Self-Verification Steps

After completing, run:

```bash
cd D:\CODEX\LAUCH VERSION\WEBSITE
# Count files with isPartOf in Article schema
grep -r '"isPartOf"' --include="*.html" | grep -v "index.html" | wc -l
# Should be 65 (same as total Article files)

# Spot-check examples
grep -A 3 '"isPartOf"' "pages/SCIENCE/KNOWLEDGE/Fatigue/why-am-i-always-tired.html" | head -6
grep -A 3 '"isPartOf"' "pages/NEWS/Company-Updates/ikkem-partnership.html" | head -6
```

---

**Do NOT deploy. Just fix the files and report.**

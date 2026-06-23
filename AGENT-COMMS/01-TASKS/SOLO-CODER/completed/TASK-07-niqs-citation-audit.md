# TASK-07: NIQS Citation Audit — Verify Report Number Across All Pages

## Priority: P1
## Context: All NIQS data references must include the report number for traceability.

## Check ALL `.html` files under `D:\CODEX\LAUCH VERSION\WEBSITE\pages\`

---

## Find every page that mentions NIQS

Search for these patterns:
- `NIQS`
- `国家红外`
- `National Infrared`
- `电热辐射转换效率`
- `法向全发射率`
- `0.88`
- `68%`

For each match, check:

### If the page mentions NIQS data (emissivity 0.88 or efficiency 68%), verify:

**Required format (exact):**
```
NIQS report (2022)WT-HW-00529
```

**Not accepted:**
- "NIQS-tested" without report number ← ADD the number
- "According to NIQS" without report number ← ADD the number
- "国家红外中心检测" without report number ← ADD "(2022)WT-HW-00529"

---

## Special Cases

### Schema.org metadata
If NIQS data appears in `<script type="application/ld+json">` blocks, also include the report number in the `identifier` or `citation` field.

### Comparison tables
If a table has "NIQS" in its source column, add the report number next to it.

### AI Core Summary
If the "Evidence" field mentions NIQS, append the report number.

---

## Verification
- [ ] Every page with NIQS-tested data includes `(2022)WT-HW-00529`
- [ ] No page says "NIQS-tested" without the report number
- [ ] No page says "国家红外中心" without the report number
- [ ] Schema blocks also include the report number

# TASK-06: Comparative Claims Cleanup

## Priority: P1
## Context: Dr. Fu confirmed — only reference published standards, never unverifiable "industry averages".

## Search ALL `.html` files under `D:\CODEX\LAUCH VERSION\WEBSITE\pages\`

---

## DELETE these patterns (full removal or replacement):

| Search phrase | Action |
|--------------|--------|
| `20-40%` | DELETE entire sentence/claim (no verifiable source) |
| `industry average` | DELETE — replace with nothing or "≥55% (JG/T 286-2010)" |
| `industry benchmark` | DELETE |
| `industry baseline` | DELETE |
| `比行业高` | DELETE entire sentence |
| `远超同行` | DELETE |
| `领跑行业` | DELETE |

## REPLACE these patterns:

| Search | Replace with |
|--------|-------------|
| `exceeding industry standard` | `exceeding the JG/T 286-2010 requirement of 55% by approximately 24% relative` |
| `行业标准` (without standard number) | `行业标准 JG/T 286-2010` (add the number) |
| `24% higher` | `approximately 24% relative improvement over the JG/T 286-2010 ≥55% standard` |
| `高于行业` | `` (DELETE or rewrite around standard) |

---

## NIQS citation format (verify all are consistent):

**Current bad:** "According to NIQS testing..." or "NIQS-tested..."
**Required format:** "NIQS report (2022)WT-HW-00529 | National Infrared and Industrial Electrothermal Products Quality Inspection and Testing Center"

---

## Verification
- [ ] `grep -r "20-40%" D:\CODEX\LAUCH VERSION\WEBSITE\pages\` → 0 matches
- [ ] `grep -ri "industry average\|industry benchmark\|industry baseline" D:\CODEX\LAUCH VERSION\WEBSITE\pages\` → 0 matches
- [ ] `grep -r "行业标准" D:\CODEX\LAUCH VERSION\WEBSITE\pages\` → all occurrences have JG/T 286-2010 number
- [ ] All NIQS citations include (2022)WT-HW-00529

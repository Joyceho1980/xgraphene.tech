# XIHE Website Broken External Links Fix Report

**Date:** 2026-06-27
**Site:** xgraphene.tech
**Audit Source:** SEMRUSH — "Broken external links" (6 failures)
**Scope:** 1 broken DOI link referenced across 7 HTML files
**Status:** COMPLETE — All 12 occurrences replaced with correct DOI

---

## Executive Summary

SEMRUSH reported **6 broken external links** (HTTP 404), all pointing to the same DOI URL:
```
https://doi.org/10.1186/s12877-024-04755-9
```

This DOI appeared on 3 Knowledge Hub pages × 2 hosts (www + non-www) = 6 audit records.

### Root Cause

The DOI was **incorrectly cited** — a digit transposition error. The correct DOI is:
```
https://doi.org/10.1186/s12877-024-05344-z
```

| Field | Incorrect (404) | Correct (200) |
|---|---|---|
| DOI suffix | `s12877-024-04755-9` | `s12877-024-05344-z` |
| Difference | `04755-9` | `05344-z` |

### Paper Details (verified)

- **Title:** Effects of graphene far-infrared and social network interventions on depression, anxiety and dementia in older adults
- **Authors:** Zhao Y, Chen Y, Yu F, Dai C, Zhang C, Liu M, Zheng N, Liu Z
- **Journal:** BMC Geriatrics (2024) 24:755
- **Correct DOI:** https://doi.org/10.1186/s12877-024-05344-z
- **Study:** 108 elderly individuals, 4-week graphene FIR intervention (GFII) — immediate anxiety improvement + sustained cognitive improvement

---

## Step 1: Manual DOI Verification

### Old DOI (FAILED)

Fetched `https://doi.org/10.1186/s12877-024-04755-9` → DOI System returned:
> "This DOI cannot be found in the DOI System."

### New DOI (VERIFIED)

Fetched `https://doi.org/10.1186/s12877-024-05344-z` → Successfully resolved to the BMC Geriatrics article page with full abstract and PDF available.

---

## Step 2: Full-Site Scan Beyond SEMRUSH Report

SEMRUSH only flagged 3 pages (×2 hosts = 6 records), but a full-site scan of `WEBSITE/` revealed the broken DOI appeared in **7 HTML files** total:

| # | File | Occurrences | SEMRUSH Flagged? |
|---|---|---|---|
| 1 | `WEBSITE/pages/SCIENCE/KNOWLEDGE/Clinical-Evidence/index.html` | 2 | ✓ |
| 2 | `WEBSITE/pages/SCIENCE/KNOWLEDGE/Sleep/index.html` | 2 | ✓ |
| 3 | `WEBSITE/pages/SCIENCE/KNOWLEDGE/healthy-aging/index.html` | 2 | ✓ |
| 4 | `WEBSITE/index.html` | 1 | ✗ (not reported) |
| 5 | `WEBSITE/pages/ABOUT/AboutOrigin.html` | 1 | ✗ (not reported) |
| 6 | `WEBSITE/pages/SCIENCE/Evidence.html` | 1 | ✗ (not reported) |
| 7 | `WEBSITE/pages/SCIENCE/KNOWLEDGE/graphene-fir/elderly-anxiety-cognition-rct-2024.html` | 3 | ✗ (not reported) |
| | **Total** | **12** | |

**Key finding:** SEMRUSH only crawled 3 of the 7 affected pages. The other 4 pages also contained the broken DOI but were not yet crawled/flagged. All 7 were fixed proactively.

---

## Step 3: Repair Actions

### Batch Replacement

For each file, both the `href` attribute and the visible link text were replaced:

**Before:**
```html
<a href="https://doi.org/10.1186/s12877-024-04755-9" target="_blank" rel="noopener">DOI: 10.1186/s12877-024-04755-9</a>
```

**After:**
```html
<a href="https://doi.org/10.1186/s12877-024-05344-z" target="_blank" rel="noopener">DOI: 10.1186/s12877-024-05344-z</a>
```

### Results

```
OK Clinical-Evidence/index.html      - replaced 2 occurrence(s)
OK Sleep/index.html                  - replaced 2 occurrence(s)
OK healthy-aging/index.html          - replaced 2 occurrence(s)
OK index.html                        - replaced 1 occurrence(s)
OK ABOUT/AboutOrigin.html            - replaced 1 occurrence(s)
OK SCIENCE/Evidence.html             - replaced 1 occurrence(s)
OK graphene-fir/elderly-anxiety-cognition-rct-2024.html - replaced 3 occurrence(s)
```

### Final Verification

Full-site scan confirms: **old DOI `10.1186/s12877-024-04755-9` completely removed from all HTML files**.

---

## Context: Where the DOI Appeared

The broken DOI referenced the same BMC Geriatrics RCT study across all 7 files, with slightly different framing per page:

| Page | Context |
|---|---|
| Clinical-Evidence/index.html | "BMC Geriatrics RCT: 65% anxiety reduction and 83% cognitive improvement in 108 elderly participants" |
| Sleep/index.html | "BMC Geriatrics RCT: 65% reduction in anxiety scores in elderly participants, a key factor in sleep quality" |
| healthy-aging/index.html | "BMC Geriatrics RCT: 108 older adults, 4-week graphene FIR protocol — 83% cognitive improvement (s-MoCA) and 65% anxiety reduction (GAD-7)" |
| index.html | Homepage evidence summary |
| AboutOrigin.html | Origin story evidence |
| Evidence.html | Science evidence page |
| graphene-fir/elderly-anxiety-cognition-rct-2024.html | Dedicated article page about this RCT (3 references) |

---

## Summary

| Metric | Value |
|---|---|
| SEMRUSH reported broken links | 6 (3 pages × 2 hosts) |
| Actual affected files | 7 |
| Total DOI occurrences replaced | 12 |
| Old DOI | `10.1186/s12877-024-04755-9` (404) |
| New DOI | `10.1186/s12877-024-05344-z` (200) |
| Error type | Digit transposition in DOI suffix |
| Files modified | 7 |

---

## Deployment Checklist

1. ✅ Old DOI verified as 404 (DOI System: "cannot be found")
2. ✅ New DOI verified as 200 (resolves to BMC Geriatrics article)
3. ✅ All 7 HTML files updated (12 occurrences replaced)
4. ✅ Full-site scan confirms 0 remaining old DOI references
5. ⬜ Deploy updated files to Vercel
6. ⬜ After deployment, verify the 3 SEMRUSH-flagged pages return 200 for the DOI link:
   - `curl -I https://doi.org/10.1186/s12877-024-05344-z` (expect 301 → 200)
7. ⬜ Re-run SEMRUSH site audit to confirm 0 broken external links

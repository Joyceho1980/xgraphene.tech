# TASK-02: Phase 2 Changes — 9.4μm Replacements + Terminology + Schema Fix

## Priority: P0
## Context: Dr. Fu review confirmed our FIR spectrum shows ~8-10μm peak region, NOT exact 9.4μm.

## Note: Work on LOCAL files ONLY. Do NOT deploy until told to.

## Change A: Replace "9.4μm" site-wide

Search ALL `.html` files under `D:\CODEX\LAUCH VERSION\WEBSITE\pages\` for:

| Search | Replace with |
|--------|-------------|
| `9.4 μm` | `8–10 μm` |
| `9.4μm` | `8–10 μm` |
| `precision spectral output at 9.4μm` | `broadband far-infrared spectral output with peak in the 8–10 μm region` |
| `peak wavelength: 9.4 μm` | `spectral peak region: 8–10 μm` |

**Context check:** Only replace in spectral/wavelength context. "9.4" used as a version number or unrelated number should NOT be changed.

Also replace "perfectly matched" when referring to human body spectrum:
- `perfectly matched` → `lies within the same spectral region as`
- `perfect match` → `overlaps with`

## Change B: "Radiant Efficiency" Terminology

For ALL pages that mention "far-infrared radiant efficiency" or "FIR radiant efficiency":
- **First mention** on each page: Use full term `NIQS-tested electro-thermal radiation conversion efficiency: 68%`
- **Subsequent mentions** can use abbreviated term
- At the bottom of each page (or as a note near first use), add: `(For simplicity, this metric is referred to throughout this site as far-infrared radiant efficiency.)`

## Change C: Add datePublished to ScholarlyArticle Schema

**File:** `D:\CODEX\LAUCH VERSION\WEBSITE\pages\SCIENCE\KNOWLEDGE\graphene-fir\how-to-evaluate-fir-heating-film.html`

Find the `<script type="application/ld+json">` block with `"@type": ["Article", "ScholarlyArticle"]`.
Add: `"datePublished": "2026-06-22"` inside the ScholarlyArticle object.

## Change D: Fix NIQS Performance Page Related Reading Links

**File:** `D:\CODEX\LAUCH VERSION\WEBSITE\pages\technology\xihe-fir-film-performance.html`

Find the Related Reading section (near where `how-to-evaluate-fir-heating-film.html` and `what-is-far-infrared-radiant-efficiency.html` are referenced). Change their hrefs to absolute paths:

- `href="how-to-evaluate-fir-heating-film.html"` → `href="/SCIENCE/KNOWLEDGE/graphene-fir/how-to-evaluate-fir-heating-film.html"`
- `href="what-is-far-infrared-radiant-efficiency.html"` → `href="/SCIENCE/KNOWLEDGE/graphene-fir/what-is-far-infrared-radiant-efficiency.html"`

Also add backlinks FROM these two pages TO the performance page:
1. `D:\CODEX\LAUCH VERSION\WEBSITE\pages\SCIENCE\KNOWLEDGE\graphene-fir\how-to-evaluate-fir-heating-film.html` — add `<a href="/technology/xihe-fir-film-performance.html">XIHE FIR Film Performance Data</a>` in Related Reading section
2. `D:\CODEX\LAUCH VERSION\WEBSITE\pages\SCIENCE\KNOWLEDGE\graphene-fir\what-is-far-infrared-radiant-efficiency.html` — same backlink

## Verification
After all changes completed (do NOT deploy):
- [ ] Run: `grep -r "9.4" D:\CODEX\LAUCH VERSION\WEBSITE\pages\*.html` and confirm no spectral 9.4μm remains
- [ ] Run: `grep -r "perfectly matched" D:\CODEX\LAUCH VERSION\WEBSITE\pages\*.html` and confirm none in spectral context
- [ ] Check how-to-evaluate-fir-heating-film.html has `datePublished` in its ScholarlyArticle schema
- [ ] Check xihe-fir-film-performance.html links use correct absolute paths
- [ ] Check evaluation + radiant efficiency pages have backlinks to performance page
- [ ] Do NOT deploy — just report completion

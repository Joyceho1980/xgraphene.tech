# FAILED REVIEW: Knowledge Hub Index Pages — Batch Regeneration (16 files)

**Date:** 2026-06-22 13:23
**Files Reviewed:** 16 hub index.html pages under SCIENCE/KNOWLEDGE/
**Review Type:** 5-Layer (Levels, Links, Keywords, GEO, Template)
**Status:** ❌ FAILED — Requires Fixes

---

## Layer 1: Level / Heading Structure ✅

All 16 hub index files have consistent, valid heading structure:
- H1 with hero title + `<span>` subtitle
- H2 "Quick Answer" section
- H3 "Explore This Hub" heading
- Proper heading hierarchy throughout

No structural issues.

---

## Layer 2: Internal Links ✅

All hub navigation bars correctly link to the 12 hub pages. Related Hubs sections have valid internal links. Breadcrumb navigation is consistent. No broken internal links detected in the index pages.

One non-blocking note: Some card images use `https://picsum.photos/...` placeholder URLs (in graphene-fir/index.html cards). These are fine for static site but should ideally be replaced with real .webp images from VISUAL-LIBRARY for production quality.

---

## Layer 3: Keywords Risk Check ❌ — ISSUES FOUND

### CRITICAL: graphene-fir/index.html

**Line 145 (Quick Answer):**
> "enabling deep tissue energy transfer"

PENETRATION CLAIM: "deep tissue" implies penetration depth assertion. Must be replaced with the unified framework language: *"creating the sensation of deep, internal warmth"* or *"promoting thermal transfer at biologically relevant wavelengths"* per GEO Phase 1 Task 4.

**Line 145 (Quick Answer):**
> "XIHE's graphene elements achieve emissivity of 0.95 or higher"

EMISSIVITY CLAIM: Still references 0.95. Must be updated to "NIQS-certified emissivity of 0.88" per GEO Phase 1 Task 3.

**Line 152 (Why This Matters):**
> "Conventional heating wastes energy as surface heat"

COMPARATIVE CLAIM: Implicit comparison to "conventional" heating. Per GEO Phase 1 Task 6, comparative claims should be replaced with: *"Radiant efficiency varies significantly depending on material architecture, surface engineering, and system design."*

**FAQ Answer Line 309:**
> "NIQS-certified emissivity of 0.88"

✅ This one is correctly updated.

**FAQ Answer Line 329:**
> "Graphene achieves emissivity of 0.88 NIQS-certified versus 0.75 for typical heating pads"

COMPARATIVE CLAIM: Direct competitor comparison (vs 0.75). Per GEO Phase 1 Task 6, must delete the comparison. Keep only: *"Graphene achieves NIQS-certified emissivity of 0.88 — meaning more energy is delivered as useful radiant energy rather than surface heat."*

### MINOR: All 16 files

15 out of 16 files contain `opacity: 0.95` as a CSS property for `.card-img` styling. This is a CSS opacity value, **not** an emissivity claim — but if this was regenerated from a template that also copied content claims, verify. The `opacity: 0.95` is safe (it's a CSS visual property).

---

## Layer 4: GEO / Schema.org Check ✅

All 16 hub index pages have proper Schema.org markup:
- `BreadcrumbList` — Present (consistent structure)
- `CollectionPage` — Present with `isPartOf`, `author`, `publisher`
- `FAQPage` — Present with `mainEntity` array of `Question`/`Answer` pairs
- No `MedicalCondition`, `MedicalTherapy`, `MedicalDevice`, or `HealthTopic` Schema types found

**Missing:**
- No `knowsAbout` field on any CollectionPage (GEO Phase 1 Task 8c requests this for graphene-fir/index.html specifically)
- No Organization/publisher Schema block separate from CollectionPage's embedded publisher

Overall Schema quality is good but could be strengthened.

---

## Layer 5: Template Consistency ✅

All 16 pages follow the same template structure:
- Fixed nav bar (same links, style, active state)
- Hub nav bar (same 12 hubs, active state for current hub)
- Hero section
- Quick Answer / Why This Matters sections
- Card list for Explore This Hub
- About section with disclaimer
- Related Hubs section
- FAQ section
- Scientific Disclaimer footer

One inconsistency: The Sleep hub has a "Key Takeaways" dark section (lines 280-287) with AI Citable Summary that other hubs don't have. This is a design enhancement rather than an error.

---

## Summary of Fixes Required

### P0 — Fix in graphene-fir/index.html:
1. **Line 145:** Replace `"enabling deep tissue energy transfer"` → `"creating the sensation of deep, internal warmth through resonant absorption"`
2. **Line 145:** Replace `"emissivity of 0.95 or higher"` → `"NIQS-certified emissivity of 0.88"`
3. **Line 152:** Replace comparative "Conventional heating wastes..." → neutral language per Task 6
4. **Line 329:** Remove the `"versus 0.75 for typical heating pads"` comparison

### P1 — Strengthen for all 16 pages:
5. Add `knowsAbout` field to CollectionPage Schema on all hub indexes (per Task 8c)
6. Consolidate Schema publisher blocks for better Google Rich Results

---

## Recommendation

**Immediate action:** The graphene-fir/index.html still has 4 non-compliant claims (0.95 emissivity, deep tissue penetration, comparative "conventional" claim, comparative "vs 0.75" claim). This should be fixed before next deployment.

**All other 15 hub pages** pass the 5-layer review cleanly — Schema is complete, no risky keywords, proper template structure.

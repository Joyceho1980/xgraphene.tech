# TASK-03: Penetration Depth Standardization + ATP/生命光波 Cleanup

## Priority: P0
## Context: Dr. Fu review — penetration depth numbers (3-5cm, 3-5mm) are NOT supported by mainstream biophysics. ATP causal chain is the biggest compliance risk.

## Note: Work on LOCAL files ONLY. Do NOT deploy until told to.

---

## Change A: Penetration Depth — Site-Wide Replace

Search ALL `.html` files under `D:\CODEX\LAUCH VERSION\WEBSITE\pages\` for:

| Search | Replace with |
|--------|-------------|
| `deep tissue penetration` | `absorption in superficial tissue layers` |
| `深层温热感` | `` (DELETE — remove this phrase entirely) |
| `3-5cm` | `` (DELETE) |
| `3-5 mm` | `` (DELETE) |
| `3-5mm` | `` (DELETE) |
| `penetrates deep into tissue` | `is absorbed primarily in superficial layers, with effects extending through circulation` |
| `reaches deep tissues` | `influences physiological responses that extend beyond the initial absorption zone` |

---

## Change B: ATP / Mitochondria Language — Add Research Qualifiers

Search for causal-sounding ATP/mitochondria statements. These patterns need qualifiers:

| Search | Replace with |
|--------|-------------|
| `ATP production` (when stated as fact about FIR) | `ATP production (as studied in cellular models)` |
| `enhances mitochondrial function` | `has been studied for its potential effects on mitochondrial function` |
| `boosts cellular energy` | `may support cellular energy metabolism` |
| `stimulates ATP` | `has been associated with ATP modulation in experimental models` |
| `increases energy production` (in cellular context) | `may influence energy production pathways` |
| `activates cytochrome c oxidase` | `cytochrome c oxidase is a known target in photobiomodulation research` |

**Context check:** These should ONLY be replaced in the context of FIR/graphene claims about human biology. If "ATP production" appears in a general biochemistry explanation (not claiming FIR does it), leave it.

**Add qualifier words near FIR/health claims throughout the site:**
- Add `may` or `potentially` before verbs like "support", "improve", "enhance", "promote"
- Replace `Studies prove` with `Published studies have explored`
- Replace `Research shows` with `Research suggests` or `Experimental findings indicate`

---

## Change C: "生命光波" / "Life Light Wave" — Move Out of Scientific Context

Search ALL files for `生命光波` and `Life Light Wave`:

If found in:
- **Scientific/technical sections** (mechanism explanations, AI Core Summary, Schema metadata, scientific articles) → **DELETE** or move to brand section
- **Brand/marketing sections** (tagline, hero subtitle, about page philosophy) → **ALLOWED** — leave as is

Look for patterns like `生命光波` in:
- `<script type="application/ld+json">` blocks → DELETE
- AI Core Summary / Quick Answer sections → DELETE
- Scientific mechanism explanations → DELETE
- FAQ scientific answers → DELETE

Allowed locations:
- Brand taglines
- About/Philosophy pages
- Marketing copy clearly separated from technical content
- Hero subtitles (if not making scientific claims)

---

## Verification

After all changes:
- [ ] `grep -r "3-5cm\|3-5mm\|深层温热感\|deep tissue penetration" D:\CODEX\LAUCH VERSION\WEBSITE\pages\` → 0 matches
- [ ] Spot-check 3 FIR-related pages for ATP causal claims: graphene-fir/index.html, Mechanism.html, Technology.html
- [ ] `grep -r "生命光波\|Life Light Wave" D:\CODEX\LAUCH VERSION\WEBSITE\pages\` → check all matches are in brand context only
- [ ] Do NOT deploy
- [ ] Report completion with summary of changes made

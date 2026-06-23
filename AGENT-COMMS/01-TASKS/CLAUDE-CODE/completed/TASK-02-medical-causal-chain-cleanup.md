# TASK: Site-wide Medical Causal Chain Cleanup + Penetration Depth Standardized Language

## Priority: P0
## Scope: All HTML files in WEBSITE/

## Background
The site must shift from "biological causality narrative" to "materials + physical systems + research context." All causal claims must be replaced with associative/supportive language. Penetration depth must use the approved "double-layer" expression.

## Rule A: Prohibited Terms — Replace Site-wide

| Prohibited | Replace With |
|---|---|
| "treats", "repairs", "reverses", "cures", "heals" (in XIHE product context) | "supports", "helps", "provides an environment for", "is associated with" |
| "Mitochondria determine/control/regulate X" | "Mitochondria are widely studied in the context of X" |
| "FIR improves microcirculation" | "FIR has been studied in association with microcirculatory changes" |
| "Graphene boosts ATP" | "Graphene-based FIR has been studied in the context of cellular energy metabolism" |
| "ATP upregulation" | "conditions associated with ATP production" |
| "3-5cm", "3-5mm" (penetration depth numbers) | See Rule B |
| "deep tissue penetration" | See Rule B |
| "FIR penetrates to depth" | See Rule B |
| "penetrates to deeper tissue" | See Rule B |

## Rule B: Penetration Depth — Unified Double-Layer Expression

Replace ANY penetration depth claim with:

**Public-facing version:**
```
Far-infrared energy is primarily absorbed by water molecules and proteins in the skin and subcutaneous tissue layers (within millimeters). The resulting thermal and physiological responses extend beyond the initial absorption zone through circulation and cellular signaling mechanisms.
```

**For FAQ / comparison contexts:**
```
Far-infrared energy (8-15μm) is primarily absorbed by water molecules and proteins in the skin and subcutaneous tissue layers through resonant absorption. This absorption generates the sensation of deep, internal warmth and can initiate microcirculatory responses documented in published literature.
```

## Rule C: Medical Causal Chain — Language Softening

Replace the following patterns:
- "X improves Y" → "X is studied in the context of Y"
- "X treats Y" → "X has been observed in Y research" or delete the claim entirely
- "X repairs Y" → "X supports Y's natural processes"
- "X reverses Y" → "X is associated with changes in Y"

## Known Files Requiring Attention

Based on prior scans:
- All hub index pages (check for causal language in descriptions)
- All hub article pages (check for "improves", "treats" in biological context)
- Product pages (check for penetration depth claims in FAQ answers)
- Science/Technology.html (check for "deep tissue" language)
- Science/Mechanism.html (check for causal mechanism chains)

## Verification Command
After making changes, run this scan:
```bash
grep -rin "determines.*fatigue\|causes\|improves.*circulation\|treats\|boosts.*ATP\|repairs\|reverses\|cures\|heals\|3-5cm\|3-5mm\|deep.tissue.penetrat\|FIR.penetrates\|penetrates.to.deeper\|penetrat.*depth" --include="*.html" /mnt/d/CODEX/LAUCH\ VERSION/WEBSITE/pages/ 2>/dev/null | grep -v node_modules
```

Expected: ZERO matches.

## Checklist
- [ ] No "treatment/therapy" claimed for any XIHE product
- [ ] No penetration depth numbers (3-5cm, 3-5mm)
- [ ] No "FIR penetrates" or "deep tissue" language
- [ ] No causal biology chains ("Mitochondria → ATP → Fatigue")
- [ ] All penetration claims use the standardized double-layer expression
- [ ] Run verification scan — zero matches

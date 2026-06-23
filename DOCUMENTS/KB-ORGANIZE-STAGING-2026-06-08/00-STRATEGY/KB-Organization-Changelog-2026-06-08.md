# KB Organization Changelog - 2026-06-08

Date: 2026-06-08
Action type: Safe organization layer
Operator: Codex, XIHE website operations agent

## What Changed

Created a non-destructive control layer for the XIHE English KB.

No existing research files were moved.

No existing evidence records were overwritten.

No website content was changed.

## New Control Files

| File | Purpose |
|---|---|
| `00-STRATEGY/00-READ-ME-FIRST-XIHE-KB-Control-Center.md` | Entry point for the KB operating system |
| `00-STRATEGY/Evidence-Taxonomy-Bridge-EC-System.md` | Resolves conflicting evidence-level numbering |
| `00-STRATEGY/KB-to-Website-Publishing-Workflow.md` | Defines article workflow from KB to website |
| `04-SEO-KEYWORDS/Approved-Claims-Expansion-Template.md` | Template for expanding claim governance |
| `STORIES/Story-to-Science-Bridge-Template.md` | Protects human story while keeping claims compliant |
| `02-SCIENCE-HUBS/Hub-README-Standard.md` | Standard hub planning template |
| `06-PUBLISHING-MAPS/README.md` | Publishing map control folder |
| `06-PUBLISHING-MAPS/Article-Publishing-Record-Template.md` | Template for article records |
| `06-PUBLISHING-MAPS/KB-to-Website-Map.csv` | Initial article/hub mapping table |

## Main Governance Decision

Future work should use EC evidence classes:

| EC Code | Meaning |
|---|---|
| EC1 | Human randomized controlled trial |
| EC2 | Human observational or human experimental study |
| EC3 | Preclinical animal study |
| EC4 | Cellular, in vitro, organoid, or basic biology |
| EC5 | Material or engineering characterization |
| EC6 | Review, theoretical, computational, or context source |

This avoids confusion between older "Level 1" systems.

## Next Recommended Task

Normalize `02-SCIENCE/PAPER-DATABASE.md` by adding EC code, relationship tier, citation risk, allowed language, and forbidden extrapolation for every paper.


# READ ME FIRST - XIHE KB Control Center

Date created: 2026-06-08
Status: Current operating guide
Purpose: Make the XIHE English KB easier to use as the source of truth for website, journal, social, and B2B content.

## Core Rule

The KB is the source of truth. The website is the published layer.

Do not write website content directly from memory. Every public page should trace back to:

1. A concept source.
2. An evidence source.
3. An approved claim.
4. A publishing record.
5. A compliance boundary.

## Current Source-of-Truth Stack

| Layer | Main Location | Use For |
|---|---|---|
| Governance | `00-STRATEGY` | Evidence taxonomy, operating rules, workflows |
| Claims and queries | `04-SEO-KEYWORDS` | Approved claims, keywords, forbidden terms |
| Evidence vault | `02-SCIENCE/PAPER-DATABASE.md` | Master paper inventory |
| Research assets | `02-SCIENCE/01-Research-Assets` | Individual study notes and evidence files |
| Clinical documents | `03-CLINICAL-DOCS` | Technical documentation, RCT docs, test reports |
| Concept library | `02-SCIENCE/02-Concepts`, `02-SCIENCE/03-Mechanisms` | Definitions and mechanism explanations |
| Hub planning | `02-SCIENCE-HUBS` | Website hub architecture and internal link graph |
| Story layer | `STORIES`, `01-BRAND`, `02-JOURNAL` | Human openings, founder voice, philosophy |
| Publishing maps | `06-PUBLISHING-MAPS` | Article-to-hub, evidence, FAQ, and internal link records |

## Most Important Governance Fix

Do not use bare labels such as "Level 1" or "L1" in new content without explanation.

The KB currently contains two older evidence numbering systems. To avoid confusion, use the new EC system for all new planning and publishing:

| New Code | Meaning |
|---|---|
| EC1 | Human randomized controlled trial |
| EC2 | Human observational or human experimental study |
| EC3 | Preclinical animal study |
| EC4 | Cellular, in vitro, organoid, or basic biology |
| EC5 | Material or engineering characterization |
| EC6 | Review, theoretical, computational, or context source |

See: `Evidence-Taxonomy-Bridge-EC-System.md`

## Master Paper Database Rule

Use `02-SCIENCE/PAPER-DATABASE.md` as the active master paper database until a future database file replaces it.

Treat these as secondary or legacy references:

| File | Status |
|---|---|
| `02-SCIENCE/Paper-Database-Index.md` | Legacy quick index with only 7 papers |
| `02-SCIENCE/01-Research-Assets/README.md` | Useful energy-axis map, not the master paper inventory |
| `00-STRATEGY/Paper-Classification-Master.md` | Earlier planning table |

## Article Production Rule

Every article should have a publishing record before website publication.

Publishing records live in:

`06-PUBLISHING-MAPS`

Each record should identify:

1. Parent hub.
2. Website target URL.
3. Concept source.
4. Evidence IDs.
5. EC evidence class.
6. Citation risk.
7. Approved claim wording.
8. Story hook, if used.
9. Quick Answer.
10. FAQ items.
11. Internal links.
12. What not to claim.

## Story Layer Rule

Story is allowed. Story is valuable. Story should not be used as evidence.

Use this structure:

1. Story opens the door.
2. Science explains the mechanism.
3. Evidence supports the claim.
4. The website publishes a neutral, educational version.

See: `STORIES/Story-to-Science-Bridge-Template.md`

## Do Not Do Yet

Do not mass-move existing files until:

1. Evidence taxonomy is normalized.
2. Duplicate paper entries have canonical IDs.
3. Approved claims are expanded.
4. Publishing map is created for priority hubs.

## Recommended Working Order

1. Normalize evidence taxonomy using EC1-EC6.
2. Make `PAPER-DATABASE.md` the active master source.
3. Expand approved claims from the 25-paper database.
4. Build hub publishing maps.
5. Process stories into story-to-science bridges.
6. Update website in controlled batches.

## XIHE Editorial Standard

The goal is not to sound bigger than the evidence.

The goal is to become the most trusted educational resource in graphene FIR, cellular energy, mitochondrial health, microcirculation, recovery science, and bioenergetics.


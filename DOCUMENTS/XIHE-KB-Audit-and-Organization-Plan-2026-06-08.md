# XIHE English KB Audit and Organization Plan

Date: 2026-06-08
Scope: `D:\XIHE-ENGLISH-KB`
Prepared for: XIHE Science Knowledge Hub operations

## Executive Summary

The XIHE English KB is already a valuable knowledge system, not just a file dump. It contains strategy, brand philosophy, research assets, evidence notes, story drafts, keyword governance, outreach drafts, and visual material.

The next step should be to organize the KB before updating more website content. The website should become the published layer. The KB should become the source-of-truth layer.

Most important conclusion:

Do not flatten the KB into sterile SEO pages. Preserve the human story layer. The stronger structure is:

1. Evidence proves what can be said.
2. Concepts explain why it matters.
3. Stories help people care.
4. Website pages publish the clean, compliant version.

## Inventory Snapshot

| Area | Observed Count / Status |
|---|---:|
| Markdown files | 280 |
| JPG files | 33 |
| PNG files | 23 |
| TXT files | 3 |
| Total top-level folders | 14 |
| Largest content area | `02-SCIENCE` with 178 files |
| Story files | 9 |
| Journal articles | 11 |
| Science hub README files | 11 total, including the hub index |
| Clinical docs | 4 |
| Keyword / claim docs | 4 |

## Current Top-Level Folder Roles

| Folder | Current Role | Recommended Role |
|---|---|---|
| `00-STRATEGY` | Governance, architecture, evidence standards | Keep as the command center |
| `01-BRAND` | Brand story, language, positioning | Keep as story and voice source |
| `01-WEBSITE` | Website draft pages | Treat as draft/publishing staging, not source of truth |
| `02-JOURNAL` | Essays and science-facing articles | Keep as long-form editorial layer |
| `02-SCIENCE` | Evidence, concepts, mechanisms, applications | Make this the scientific source of truth |
| `02-SCIENCE-HUBS` | Hub planning and Q&A architecture | Use as website knowledge graph planning layer |
| `03-CLINICAL-DOCS` | RCT, spectral, hospital, patent docs | Technical evidence archive |
| `04-SEO-KEYWORDS` | Keywords and approved claims | Rename mentally as claim and query governance |
| `05-ASSETS` | Intended asset folder | Currently empty |
| `LINKEDIN-CONTENT` | Social content drafts | Outreach derivative layer |
| `OBSIDIAN` | Chinese/source notes and paper notes | Back-office research vault |
| `OUTREACH` | Quora/outbound educational drafts | Derivative distribution layer |
| `STORIES` | Human story bank | Preserve as a formal Story Layer |
| `Visual Libarary` | Image assets | Rename later to `Visual Library` if safe |

## High-Priority Findings

### 1. Evidence Level Numbering Conflict

Severity: High

There are conflicting evidence taxonomies:

`00-STRATEGY/XIHE-Evidence-Classification-Standard.md` defines:

| Level | Meaning |
|---|---|
| Level 1 | Mechanistic / cellular |
| Level 2 | Preclinical / animal |
| Level 3 | Human clinical |
| Level 4 | Real-world evidence |

But `02-SCIENCE/Paper-Database-Index.md` and `02-SCIENCE/02-Concepts/Terminology/Evidence-Level-Classification.md` use:

| Level | Meaning |
|---|---|
| L1 | Human RCT |
| L2 | Human observational |
| L3 | Animal |
| L4 | In vitro |
| L5 | Material characterization |
| L6 | Theoretical / computational |

Why this matters:

If one writer sees "Level 1" as cellular evidence and another sees "L1" as human RCT, XIHE can accidentally overstate claims. This is the biggest governance risk in the KB right now.

Recommended fix:

Stop using bare `Level 1`, `Level 2`, etc. for future writing. Use a new unambiguous code:

| New Code | Meaning | External Claim Strength |
|---|---|---|
| EC1 | Human randomized controlled trial | Highest, still cautious |
| EC2 | Human observational / experimental | Human-relevant, limited |
| EC3 | Preclinical animal study | Mechanism only, no human outcome claim |
| EC4 | Cellular / in vitro / organoid / basic biology | Plausibility only |
| EC5 | Material / engineering characterization | Safe for technical claims |
| EC6 | Review / theoretical / computational | Context only |

Also keep two separate tags:

| Tag | Meaning |
|---|---|
| Relationship Tier | Whether XIHE, IKKEM, partner, independent, or competitor/Grahope-related |
| Citation Risk | Green, Yellow, Red |

### 2. Multiple Paper Databases Compete With Each Other

Severity: High

Observed paper inventory files:

| File | Stated Scope |
|---|---|
| `02-SCIENCE/Paper-Database-Index.md` | 7 papers |
| `02-SCIENCE/PAPER-DATABASE.md` | 25 papers |
| `02-SCIENCE/01-Research-Assets/README.md` | 22 papers / assets |
| `00-STRATEGY/Paper-Classification-Master.md` | Earlier 50-paper planning table |

Recommendation:

Make `02-SCIENCE/PAPER-DATABASE.md` the current master paper database after evidence-class normalization. Mark the smaller `Paper-Database-Index.md` as legacy or quick index only.

Minimum fields every paper needs:

| Field | Required |
|---|---|
| Paper ID | Yes |
| Full title | Yes |
| DOI / PMID / URL | Yes, or mark missing |
| Journal | Yes |
| Year | Yes |
| Authors | Yes, or mark missing |
| Evidence Class | EC1-EC6 |
| Relationship Tier | XIHE / IKKEM / partner / independent / competitor field context |
| Citation Risk | Green / Yellow / Red |
| Approved claim language | Yes |
| Forbidden extrapolation | Yes |
| Website hub targets | Yes |

### 3. Research Assets Are Duplicated Across Old and New Structures

Severity: Medium-High

Examples:

| Pattern | Risk |
|---|---|
| `01-Evidence` and `01-Research-Assets` both exist | Writers may not know which is canonical |
| CAS anxiety/cognition paper appears in multiple locations | Updates may diverge |
| GraMOS, Alpha Wave, Gut-Brain Axis appear in multiple structures | Evidence metadata can become inconsistent |

Recommendation:

Keep duplicate source files for now, but create a master source map before moving anything. Each evidence asset should have one canonical metadata card and any duplicate pages should point back to it.

### 4. Hub Planning Exists, But Many Hubs Are Stubs

Severity: Medium

`02-SCIENCE-HUBS` contains strong architecture, but most hub README files are short stubs.

Observed line counts:

| Hub | Approx. Lines |
|---|---:|
| mitochondrial-health | 44 |
| graphene-fir | 20 |
| cellular-energy | 18 |
| microcirculation | 18 |
| fatigue | 17 |
| inflammation | 17 |
| recovery | 17 |
| sleep | 17 |
| metabolism | 16 |
| healthy-aging | 16 |

Website roadmap includes additional hub concepts such as ATP, bioenergetics, technology platform, clinical evidence, and research library. These are not fully represented as mature KB hub folders yet.

Recommendation:

Use `02-SCIENCE-HUBS` as the knowledge graph planning area. Every hub should eventually contain:

1. Hub thesis.
2. Human-first question list.
3. Evidence IDs.
4. Approved claims.
5. Story hooks.
6. Internal links to related hubs.
7. Website target URLs.
8. Publish priority.

### 5. Story Layer Is Valuable and Should Be Preserved

Severity: Strategic Opportunity

The KB contains a meaningful human voice in:

| Location | Role |
|---|---|
| `STORIES` | Short human story bank |
| `01-BRAND/Brand-Story` | Founder / brand origin narratives |
| `01-BRAND/Brand-Philosophy` | Philosophy essays and analogies |
| `02-JOURNAL` | Long-form resonance essays |

This is an asset, not a problem.

Recommended Story Layer rules:

1. One story should express one human truth.
2. A story should not prove a scientific claim.
3. A story should not mention product unless the page is explicitly brand-level and compliant.
4. A story can link to one science article that explains the mechanism.
5. Story opens the door; evidence carries the claim.

Suggested Story-to-Science format:

```markdown
Story:
What happened in real life?

Human insight:
What did this moment reveal about energy, fatigue, recovery, care, aging, or rhythm?

Science bridge:
What scientific concept helps explain this without reducing the story?

Target article:
Which website page should this story support?

Compliance boundary:
What must this story NOT claim?
```

### 6. Approved Claims Database Is Too Small For the Evidence Library

Severity: High

`04-SEO-KEYWORDS/Approved-Claims.md` currently lists only a small number of approved claims, while the paper database contains 25 papers plus non-paper evidence assets.

Recommendation:

Create a stronger claim table with one row per approved claim:

| Claim | Evidence ID | Evidence Class | Relationship Tier | Citation Risk | Public Version | Science Version | Technical Version | Forbidden Version |
|---|---|---|---|---|---|---|---|---|

This will protect XIHE from accidental overclaiming while helping writers move faster.

### 7. Some Drafts Contain High-Risk Language That Needs Context

Severity: Medium

The KB correctly documents forbidden words such as cure, treat, heal, therapy, pain relief, and medical device. These appear often inside compliance documents, keyword maps, and some science drafts.

This is not automatically a problem. Some usage is educational or warning-based.

Risky pattern to avoid:

Using terms such as "therapy", "treatment", "healing", "pain relief", or disease names in public-facing article claims without the correct evidence boundary.

Recommended handling:

1. Keep forbidden terms inside compliance and research notes.
2. Add a publish check that flags these words in website drafts.
3. Do not delete the words from research notes where they are part of paper titles or scientific context.

### 8. README and Path Metadata Need Cleanup

Severity: Low-Medium

Observed issues:

| Issue | Example |
|---|---|
| Legacy location path | README says `E:\XIHE-ENGLISH-KB\`, current path is `D:\XIHE-ENGLISH-KB` |
| Mojibake / encoding artifacts | README directory tree renders with broken characters |
| Old path references | Some docs mention `Research-Library` or `Technology-Platform` paths that may not exist exactly |
| File URL references | A file link points to `file:///e:\...` |

Recommendation:

Clean these after governance is stable. They are annoying but not as urgent as evidence taxonomy.

## Recommended Source-of-Truth Model

### Layer A: Governance

Location:

- `00-STRATEGY`
- `04-SEO-KEYWORDS`

Purpose:

- Evidence classification
- Claim strength
- Compliance rules
- Publishing rules

### Layer B: Evidence Vault

Location:

- `02-SCIENCE/PAPER-DATABASE.md`
- `02-SCIENCE/01-Research-Assets`
- `03-CLINICAL-DOCS`
- `OBSIDIAN` for source notes

Purpose:

- Paper metadata
- DOI / PubMed / journal references
- Evidence classification
- What can and cannot be said

### Layer C: Concept and Mechanism Library

Location:

- `02-SCIENCE/02-Concepts`
- `02-SCIENCE/03-Mechanisms`
- `02-SCIENCE/03-Evidence-Clusters`
- `02-SCIENCE/07-Scientific-Platform`

Purpose:

- Cellular energy
- ATP
- Mitochondria
- Microcirculation
- Inflammation
- Recovery
- Graphene FIR
- Resonance

### Layer D: Human Story Layer

Location:

- `STORIES`
- `01-BRAND/Brand-Story`
- `01-BRAND/Brand-Philosophy`
- selected `02-JOURNAL` essays

Purpose:

- Human openings
- Founder voice
- LinkedIn narrative
- Philosophy essays
- Analogies that make science memorable

### Layer E: Publishing Layer

Location:

- `01-WEBSITE`
- `02-SCIENCE-HUBS`
- website repo: `D:\CODEX\LAUCH VERSION`

Purpose:

- Quick Answer
- FAQ
- schema
- internal links
- H1 / title / meta
- final website content

## KB-to-Website Publishing Map

Every future article should have this record before publication:

| Field | Purpose |
|---|---|
| Article title | User-facing topic |
| Target website URL | Publishing destination |
| Parent hub | Knowledge graph location |
| KB concept source | Concept/mechanism source file |
| Evidence IDs | Paper or evidence assets used |
| Evidence Class | EC1-EC6 |
| Relationship Tier | XIHE / IKKEM / partner / independent / competitor field context |
| Citation Risk | Green / Yellow / Red |
| Approved claim language | Exact allowed wording |
| Story hook | Optional human intro source |
| Quick Answer | 40-120 words |
| FAQ status | 3-5 schema-ready questions |
| Internal links | 3-5 contextual links |
| Related reading | 5-8 hub/article links |
| Compliance notes | What not to claim |
| Publish priority | P0, P1, P2 |

## Priority Repair Sequence

### P0: Governance Before Publication

1. Choose one evidence taxonomy.
2. Convert old level labels to EC1-EC6.
3. Choose one master paper database.
4. Add canonical paper IDs to duplicates.
5. Expand Approved Claims to cover the 25-paper database.

### P1: Knowledge Graph Alignment

1. Map all current website hubs to KB hub folders.
2. Add missing KB hub planning pages for ATP, Bioenergetics, Technology Platform, Clinical Evidence, and Research Library.
3. Add parent-child article maps for each hub.
4. Add "TO and FROM" internal-link recommendations.

### P2: Story and Editorial System

1. Build a Story Index with target article and compliance boundary.
2. Classify each story as founder story, user reflection, philosophy, or article intro.
3. Keep story writing human, but attach evidence only in the science section.
4. Create a repeatable article template with both Quick Answer and human story opening.

### P3: Website Execution

1. Pick one hub.
2. Build all Quick Answers and FAQs.
3. Add schema.
4. Add internal links.
5. Publish in controlled batches.

## Recommended First Content Batch

Start with the highest-authority, lowest-risk foundation:

| Batch | Pages / Hubs | Why First |
|---|---|---|
| 1 | Mitochondrial Health, Cellular Energy, ATP | Central knowledge graph, broadly educational |
| 2 | Microcirculation, Recovery, Fatigue | High human relevance, strong internal linking |
| 3 | Graphene FIR, Technology Platform, Research Library | B2B authority and evidence transparency |
| 4 | Sleep, Inflammation, Metabolism, Healthy Aging | Strong GEO potential |
| 5 | Story-led editorial essays | Human voice after evidence rules are stable |

## What Not To Do Yet

Do not move large numbers of files yet.

Do not publish the chronic pain drafts directly until the claim language is checked.

Do not use old `Level 1` / `L1` labels in new website content.

Do not turn stories into product claims.

Do not let SEO keywords override evidence boundaries.

## Working Principle For XIHE Writing

The most influential graphene website will not sound like a sales page.

It should sound like a serious scientific library with a human heart:

- Clear enough for AI to cite.
- Careful enough for scientists to respect.
- Human enough for real people to remember.


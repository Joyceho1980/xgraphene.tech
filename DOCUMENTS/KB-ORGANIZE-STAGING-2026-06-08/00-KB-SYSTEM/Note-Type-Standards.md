# XIHE KB Note Type Standards

Status: Active
Created: 2026-06-08

## Note Types

| Type | Purpose | Location |
|---|---|---|
| Source Note | Objective extraction from a paper, report, article, or document | `02-SCIENCE/01-Research-Assets`, `03-CLINICAL-DOCS`, `OBSIDIAN` |
| Concept Note | One scientific concept explained clearly | `02-SCIENCE/02-Concepts` |
| Mechanism Note | How a biological or physical process works | `02-SCIENCE/03-Mechanisms` |
| Evidence Cluster | Evidence grouped by question or topic | `02-SCIENCE/03-Evidence-Clusters` |
| Claim Card | Public-safe claim tied to evidence | `04-SEO-KEYWORDS` |
| Story Bridge | Human story connected to a science topic | `STORIES` |
| Hub Plan | Parent hub, child articles, links, evidence map | `02-SCIENCE-HUBS` |
| Publishing Record | One target website page and its evidence/FAQ/link plan | `06-PUBLISHING-MAPS` |
| MOC | Map of content, index, navigation page | `00-KB-SYSTEM/Indexes` or local folder |

## Metadata Standard

Use this front matter when practical:

```markdown
---
id:
type:
status: draft
created:
updated:
parent_hub:
evidence_class:
relationship_tier:
citation_risk:
tags: []
---
```

## Status Values

| Status | Meaning |
|---|---|
| inbox | Raw material, not processed |
| draft | Processed but not reviewed |
| review | Needs evidence or claim review |
| approved | Safe for planned use |
| published | Published on website or channel |
| archive | Kept for record, not active |

## Source Note Rules

Source notes should contain:

1. Original title.
2. DOI / PMID / URL.
3. Authors.
4. Journal / institution.
5. Year.
6. Study design.
7. Model or population.
8. Key data.
9. Limitations.
10. EC class.
11. Citation risk.
12. Safe language.
13. Forbidden extrapolation.

Source notes should not contain:

1. Marketing copy.
2. Unsupported interpretation.
3. Stronger claims than the paper supports.

## Concept Note Rules

One concept note should answer one question.

Good concept note:

```text
What is mitochondrial membrane potential?
```

Weak concept note:

```text
Everything about mitochondria and health and recovery and fatigue
```

## Publishing Record Rules

Publishing records are allowed to combine:

1. Science.
2. Story.
3. SEO/GEO.
4. Internal links.

But the record must keep them labeled separately.


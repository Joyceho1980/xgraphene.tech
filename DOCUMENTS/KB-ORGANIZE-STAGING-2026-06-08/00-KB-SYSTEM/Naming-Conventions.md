# XIHE KB Naming Conventions

Status: Active
Created: 2026-06-08

## General Rule

Use names that are readable to both humans and AI agents.

Prefer:

```text
Mitochondrial-Membrane-Potential.md
```

Avoid:

```text
new note final 2.md
```

## File Naming By Type

| Type | Pattern | Example |
|---|---|---|
| Strategy | `Title-Case-Name.md` | `Evidence-Taxonomy-Bridge-EC-System.md` |
| Source note | `YYYY-Author-Topic.md` or existing paper ID | `2024-Zhao-Elderly-Anxiety-Cognition-RCT.md` |
| Concept note | `Concept-Name.md` | `Mitochondrial-Membrane-Potential.md` |
| Mechanism note | `Mechanism-Name.md` | `AMPK-Gut-Muscle-Axis.md` |
| Claim card | `CLAIM-###-Short-Name.md` | `CLAIM-001-Emissivity-088.md` |
| Story bridge | `story-##-short-title-bridge.md` | `story-01-energy-boundaries-bridge.md` |
| Publishing record | `PAGE-ParentHub-ArticleSlug.md` | `PAGE-Mitochondria-what-is-mitochondrial-health.md` |
| CSV map | `Descriptive-Map-YYYY-MM-DD.csv` | `Paper-Governance-Normalization-Queue-2026-06-08.csv` |

## ID Standards

| ID Prefix | Meaning |
|---|---|
| `SRC` | Source note |
| `CONCEPT` | Concept note |
| `MECH` | Mechanism note |
| `CLAIM` | Approved claim card |
| `STORY` | Story asset |
| `PAGE` | Website publishing record |
| `HUB` | Hub plan |
| `EVIDENCE` | Evidence asset |

## Date Format

Use ISO style:

```text
YYYY-MM-DD
```

## Language Rule

English KB files should use English filenames unless a Chinese name is part of the source identity.

Chinese source files may remain Chinese in `OBSIDIAN` or source vault folders.

## Slug Rule For Website Targets

Website slugs should be lowercase kebab-case:

```text
what-is-mitochondrial-health.html
```

KB notes can use readable Title-Case filenames.


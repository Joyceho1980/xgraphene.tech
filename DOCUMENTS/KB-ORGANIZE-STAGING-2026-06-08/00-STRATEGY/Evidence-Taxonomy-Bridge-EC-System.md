# XIHE Evidence Taxonomy Bridge - EC System

Date created: 2026-06-08
Status: Current transition standard
Purpose: Resolve conflicting evidence level labels in the KB.

## Why This File Exists

The KB currently contains two evidence numbering systems.

Older 4-level system:

| Old Label | Meaning |
|---|---|
| Level 1 | Mechanistic / cellular |
| Level 2 | Preclinical / animal |
| Level 3 | Human clinical |
| Level 4 | Real-world evidence |

Older 6-level system:

| Old Label | Meaning |
|---|---|
| L1 | Human RCT |
| L2 | Human observational |
| L3 | Animal |
| L4 | In vitro |
| L5 | Material characterization |
| L6 | Theoretical / computational |

This is a serious governance risk because "Level 1" can mean either basic cellular evidence or the highest clinical evidence depending on which file a writer reads.

## New Standard For New Work

Use EC codes for all new planning and publishing.

| EC Code | Evidence Type | What It Can Support | Safe Language |
|---|---|---|---|
| EC1 | Human randomized controlled trial | Human outcomes in the studied population, with limitations | "A randomized controlled study reported..." |
| EC2 | Human observational or human experimental study | Human-relevant observations, not definitive efficacy | "A human study observed..." |
| EC3 | Preclinical animal study | Biological mechanisms and translational hypotheses | "Animal research suggests..." |
| EC4 | Cellular, in vitro, organoid, or basic biology | Plausibility and mechanism only | "Laboratory research suggests..." |
| EC5 | Material or engineering characterization | Technical specifications and material performance | "Material testing shows..." |
| EC6 | Review, theoretical, computational, or contextual source | Background and explanatory context | "A review describes..." |

## Separate Tags That Must Not Be Mixed With Evidence Class

Evidence class answers: "What type of evidence is this?"

Relationship tier answers: "How close is this evidence to XIHE?"

Citation risk answers: "How safely can we cite this externally?"

## Relationship Tier

| Tier | Meaning |
|---|---|
| RT1 | XIHE-owned or XIHE material supplied |
| RT2 | IKKEM / Xiamen University / direct partner ecosystem |
| RT3 | Independent third-party graphene FIR research |
| RT4 | Competitor or broader field context, such as Grahope-related evidence |
| RT5 | General biology or general photobiomodulation background |

## Citation Risk

| Risk | Meaning | Use |
|---|---|---|
| Green | Low risk | Technical claims or well-bounded educational claims |
| Yellow | Use carefully | Research pages, with limitations stated |
| Red | Internal only or heavy disclaimer required | Do not use for public claims without review |

## Required Evidence Label Format

Use this format in new metadata and publishing records:

```markdown
Evidence Class: EC3 - Preclinical animal study
Relationship Tier: RT3 - Independent third-party graphene FIR research
Citation Risk: Yellow
Approved Public Language: "Animal research suggests..."
Forbidden Extrapolation: Do not claim human treatment, cure, or clinical efficacy.
```

## Transition Map From Old Labels

| Existing Label Pattern | Convert To | Notes |
|---|---|---|
| Level 1 Mechanistic | EC4 | Cellular or basic biology |
| Level 2 Preclinical / Animal | EC3 | Animal study |
| Level 3 Human Clinical | EC1 or EC2 | Use EC1 only for RCTs |
| Level 4 Real-World | EC2 or special real-world tag | Depends on design and data quality |
| L1 Human RCT | EC1 | Highest evidence class, still not a medical claim |
| L2 Human Observational | EC2 | Human, non-RCT |
| L3 Animal | EC3 | Mechanism only |
| L4 In Vitro | EC4 | Plausibility only |
| L5 Material Characterization | EC5 | Technical claims |
| L6 Theoretical / Computational | EC6 | Background only |

## Examples

### Example: Elderly Anxiety and Cognition RCT

```markdown
Evidence Class: EC1 - Human randomized controlled trial
Relationship Tier: RT1 or RT2, depending on confirmed XIHE material relationship
Citation Risk: Yellow
Allowed: "A 2024 randomized study in older adults reported changes in anxiety and cognitive scores after graphene FIR exposure."
Not allowed: "XIHE treats anxiety, depression, or dementia."
```

### Example: Graphene FIR and Gut-Brain Axis in Obese Mice

```markdown
Evidence Class: EC3 - Preclinical animal study
Relationship Tier: RT3 or RT4, depending on supplier relationship
Citation Risk: Yellow
Allowed: "Animal research suggests graphene FIR may influence gut-brain-axis pathways."
Not allowed: "Graphene FIR treats anxiety in humans."
```

### Example: NIQS Emissivity Report

```markdown
Evidence Class: EC5 - Material or engineering characterization
Relationship Tier: RT1 - XIHE technical report
Citation Risk: Green
Allowed: "NIQS testing reported normal total emissivity of 0.88."
Not allowed: "This emissivity proves a health outcome."
```

## Publishing Rule

No new website article should use a study unless the publishing record includes:

1. EC code.
2. Relationship tier.
3. Citation risk.
4. Allowed language.
5. Forbidden extrapolation.


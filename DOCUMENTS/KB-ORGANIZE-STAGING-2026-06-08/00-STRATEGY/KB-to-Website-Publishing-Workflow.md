# KB to Website Publishing Workflow

Date created: 2026-06-08
Status: Active workflow
Purpose: Turn KB material into website content without losing scientific restraint or human voice.

## Publishing Philosophy

The website should feel like a trusted educational library with a human heart.

Each page should be:

1. Clear enough for AI systems to cite.
2. Careful enough for scientists to respect.
3. Human enough for readers to remember.

## Standard Workflow

### Step 1: Choose the Page Type

| Page Type | Purpose |
|---|---|
| Hub page | Pillar page for a major topic |
| Q&A article | Answers one specific user question |
| Evidence page | Summarizes a study or evidence group |
| Technology page | Explains XIHE engineering without medical claims |
| Story-led editorial | Human entry point connected to science |

### Step 2: Identify the Parent Hub

Every article must belong to one parent hub.

Priority hubs:

1. Cellular Energy
2. Mitochondria
3. ATP
4. Fatigue
5. Inflammation
6. Recovery
7. Metabolism
8. Microcirculation
9. Bioenergetics
10. Healthy Aging
11. Graphene FIR
12. Technology Platform
13. Clinical Evidence
14. Research Library

### Step 3: Pull Concept Source

Use:

| Source | Use |
|---|---|
| `02-SCIENCE/02-Concepts` | Definitions |
| `02-SCIENCE/03-Mechanisms` | Mechanism explanations |
| `02-SCIENCE/03-Evidence-Clusters` | Topic evidence clusters |
| `02-SCIENCE/07-Scientific-Platform` | XIHE platform thinking |

### Step 4: Pull Evidence Source

Use:

1. `02-SCIENCE/PAPER-DATABASE.md` for master paper lookup.
2. `02-SCIENCE/01-Research-Assets` for individual study notes.
3. `03-CLINICAL-DOCS` for clinical and technical documents.
4. `OBSIDIAN` only as source vault or internal reference.

### Step 5: Assign Evidence Governance

Every evidence item needs:

```markdown
Evidence Class: EC1-EC6
Relationship Tier: RT1-RT5
Citation Risk: Green / Yellow / Red
Allowed Language:
Forbidden Extrapolation:
```

### Step 6: Choose the Story Hook, If Useful

Story is optional, but valuable.

Use story for:

1. Fatigue.
2. Recovery.
3. Aging.
4. Boundaries and energy.
5. Caregiving.
6. Sleep.
7. Founder philosophy.

Do not use story as evidence.

### Step 7: Build the AI-Ready Page

Each website article should include:

1. H1 matching the page topic.
2. Quick Answer near the top, 40-120 words.
3. Clear H2/H3 heading structure.
4. 3-5 FAQ items.
5. 3-5 contextual internal links.
6. Parent hub backlink.
7. Related reading links.
8. Evidence references with limitations.
9. Scientific disclaimer.

### Step 8: Create a Publishing Record

Create or update a record in `06-PUBLISHING-MAPS`.

Use:

`Article-Publishing-Record-Template.md`

### Step 9: Publish to Website

Only after the publishing record is complete:

1. Add or update website HTML.
2. Add schema.
3. Add internal links.
4. Update sitemap if needed.
5. Run website audit.

## Do Not Publish If

Do not publish if:

1. Evidence class is unclear.
2. DOI / source is missing for a scientific claim.
3. Claim language is not approved.
4. Story implies a health outcome.
5. Page uses "cure", "treat", "therapy", "pain relief", "heals", or "medical device" as a product claim.
6. Child article has no parent hub link.
7. Page has no Quick Answer or FAQ.

## Minimum Article Record

```markdown
# Publishing Record: [Article Title]

Status: Draft / Review / Approved / Published
Parent Hub:
Target URL:
Page Type:
Priority:

## User Question

## Quick Answer Draft

## Concept Sources

## Evidence Sources

## Evidence Governance

## Approved Claims

## Forbidden Claims

## Story Hook

## Internal Links

## FAQ

## Schema Needed

## Review Notes
```


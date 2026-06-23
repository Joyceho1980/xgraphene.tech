# XIHE KB Growth Protocol

Status: Active
Created: 2026-06-08

## When New Material Arrives

Use this protocol when the user shares:

- A paper
- An article
- A story
- A clinical document
- A product note
- A keyword idea
- A website draft
- A screenshot or visual asset
- A Quora question

## Step 1: Save Raw Input

Save raw or summarized input into:

`99-INBOX`

Use:

```text
YYYY-MM-DD-short-description.md
```

## Step 2: Classify The Input

Choose one primary type:

| Input Type | Destination After Processing |
|---|---|
| Scientific paper | `02-SCIENCE/01-Research-Assets` |
| Clinical or test report | `03-CLINICAL-DOCS` |
| Scientific concept | `02-SCIENCE/02-Concepts` |
| Mechanism explanation | `02-SCIENCE/03-Mechanisms` |
| Approved claim | `04-SEO-KEYWORDS` |
| Human story | `STORIES` |
| Website page plan | `06-PUBLISHING-MAPS` |
| Visual asset | `05-ASSETS` or `Visual Libarary` |
| Quora question | `OUTREACH/QUORA-QUESTION-BANK` |

## Step 3: Extract Source Facts

For scientific sources, extract:

1. Title.
2. Authors.
3. Journal / institution.
4. Year.
5. DOI / PubMed / URL.
6. Study design.
7. Model / population.
8. Key findings.
9. Limitations.
10. EC class.
11. Relationship tier.
12. Citation risk.

## Step 4: Create Or Update Concepts

Ask:

1. Which concept does this support?
2. Which hub does it belong to?
3. Does it strengthen an existing page?
4. Does it create a new article opportunity?

## Step 5: Create Claim Card Only If Safe

No claim card without evidence.

Claim cards need:

1. Safe public version.
2. Science version.
3. Technical version.
4. Evidence ID.
5. EC class.
6. Citation risk.
7. Forbidden version.

## Step 6: Add To Publishing Map

If it should become a website page, update:

`06-PUBLISHING-MAPS/KB-to-Website-Map.csv`

Or create an individual publishing record from:

`06-PUBLISHING-MAPS/Article-Publishing-Record-Template.md`

## Step 7: Update MOCs

Update the relevant map of content:

1. `00-KB-SYSTEM/Indexes/Master-MOC.md`
2. Evidence MOC if it is research.
3. Story MOC if it is narrative.
4. Website MOC if it is publishable.

## Step 8: Only Then Publish

Website work begins after the publishing record exists.

This prevents the website from becoming disconnected from the KB.

## Quora Question Rule

Quora provides question language, not evidence.

When a Quora question is useful:

1. Save the exact question in `OUTREACH/QUORA-QUESTION-BANK`.
2. Map it to a KB hub and concept note.
3. Draft the answer from KB sources only.
4. Score whether it should become a website article title or FAQ.
5. Promote strong questions into `06-PUBLISHING-MAPS` later.

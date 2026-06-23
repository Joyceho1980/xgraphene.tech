# Quora Question Bank

Status: Active
Created: 2026-06-08
Purpose: Capture real human questions from Quora and answer them using the XIHE KB.

## Core Rule

Quora supplies the question.

The KB supplies the answer.

Do not let Quora comments, popular opinions, or unverified claims become the source of truth.

## Workflow

```text
Quora question
  -> Question record
  -> Hub mapping
  -> KB concept sources
  -> Evidence / claim boundary
  -> Quora answer draft
  -> Article title candidate
  -> Website publishing record if strong
```

## Why Quora Matters

Quora is valuable because it shows natural human wording:

- "Why am I tired after sleeping?"
- "What do mitochondria actually do?"
- "Can cells run out of energy?"
- "What is ATP in simple terms?"
- "Why does recovery take longer as we age?"

These are often better article titles than keyword-tool phrases.

## What Quora Is Not

Quora is not evidence.

Quora is not a scientific source.

Quora is not where claims are approved.

## Folder Files

| File | Purpose |
|---|---|
| `Quora-Workflow.md` | Step-by-step workflow |
| `Quora-Question-Record-Template.md` | Template for each captured question |
| `Quora-Answer-Template.md` | Answer format using KB sources |
| `Quora-Article-Title-Scoring.md` | How to decide whether a Quora question should become a website article |
| `Quora-Daily-Authority-System.md` | Daily Quora answering strategy |
| `Quora-Question-Bank.csv` | Master question index |
| `Quora-to-KB-Hub-Map.csv` | Hub and concept mapping |
| `Quora-40-Question-Cluster-Template.csv` | Template for organizing related Quora questions into a campaign |

## Status Labels

| Status | Meaning |
|---|---|
| Captured | Question saved, not mapped |
| Mapped | Hub and concept sources identified |
| Answered | Quora answer drafted |
| Posted | Answer posted to Quora |
| Promote | Good candidate for website article |
| Published | Website article created |
| Archive | Not useful for current strategy |

## Minimum Rule For Posting

Before posting a Quora answer:

1. Map the question to a KB concept.
2. Check claim boundary.
3. Avoid medical claims.
4. Avoid product promotion.
5. Use educational tone.
6. Link only when genuinely useful.

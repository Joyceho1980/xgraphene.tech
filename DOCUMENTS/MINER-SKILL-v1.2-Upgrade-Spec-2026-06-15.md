# MINER SKILL v1.2 Upgrade Spec

Date: 2026-06-15
Target: `topic-miner-skill.md`
Purpose: improve question selection quality so the miner finds questions that are not only relevant, but worth answering now.

## Upgrade Goal

The current miner can already find and rank questions.

The next step is to make it better at identifying:

- questions that are answerable
- questions that are reusable across Quora and LinkedIn
- questions that are not duplicates of work already done
- questions that are worth writing now, not just interesting in general

## Priority Upgrades

## 1. Add `Answerability Score`

### Why

Some questions have:

- decent traffic
- decent relevance

but are still bad writing targets because they are:

- too broad
- too vague
- too solution-seeking
- too hard to explain cleanly in one Quora answer

### New dimension

`answerability: 0-5`

### Scoring logic

| Score | Meaning |
|---|---|
| 5 | Can be answered clearly in one concise biological explanation |
| 4 | Clear mechanism path, minor scope control needed |
| 3 | Answerable, but may need careful narrowing |
| 2 | Too broad or too messy |
| 1 | Poor target for current system |

### Operational rule

Questions with high traffic but low answerability should not automatically become A-tier.

## 2. Add `LinkedIn Seed Value`

### Why

Quora is also a question radar for LinkedIn.

So each mined question should be judged not only as a Quora answer target, but also as a possible LinkedIn content seed.

### New dimension

`linkedin_seed_value: 0-5`

### Scoring logic

| Score | Meaning |
|---|---|
| 5 | Strong conversion into founder insight or company science framing |
| 4 | Good systems or mechanism seed |
| 3 | Limited but usable topic seed |
| 2 | Weak LinkedIn value |
| 1 | Quora-only value |

### Examples

High seed value:

- Why do I still feel tired after sleeping?
- Why does inflammation slow healing?
- How does mitochondrial dysfunction affect fatigue?

Low seed value:

- highly personal symptom-specific edge cases
- one-off practical questions with little system insight

## 3. Add `Why Now` Output Field

### Why

The current queue explains priority with score, but not with decision clarity.

The writer should immediately understand:

- why this question is in A-tier today

### Output change

Every A and B question should include:

- `why_now`

### Example

`why_now: high traffic + strong XIHE fit + strong LinkedIn seed`

Or:

`why_now: repeated sleep question + easy to answer clearly + useful for LinkedIn founder post`

### Benefit

This makes daily selection faster and reduces re-evaluation work.

## 4. Add `Already Covered` Filter

### Why

Without memory, the miner will keep surfacing near-duplicates such as:

- Why am I tired after sleeping?
- Why do I wake up tired?
- Why am I still tired after 8 hours?

These may be valid questions, but they do not always justify new output.

### New check

Before final A/B/C ranking, compare each candidate against:

- already answered Quora questions
- already used LinkedIn topic seeds

### Rule

If semantic overlap is high:

- either demote the question
- or mark it as `covered_variant`

### Suggested output field

- `coverage_status: new | related | covered_variant`

## Secondary Upgrades

## 5. Add `Source Quality`

### Why

Not all sources are equally valuable.

Some questions are:

- badly phrased
- rage-bait
- engagement bait
- too low quality to justify explanation work

### New dimension

`source_quality: 0-5`

### Use

This should be a soft filter, not the main ranking driver.

## 6. Improve Quora Extraction Depth

### Why

The current Quora extraction can be too shallow if it only reads the first visible screen.

### Improvement

Add:

- one or two controlled scroll passes
- then extract again
- then deduplicate

### Benefit

Better sample depth, less front-page bias.

## Revised Scoring Model

Current dimensions:

- traffic
- biological depth
- XIHE fit
- upvote potential
- SEO value

Recommended v1.2 dimensions:

- traffic
- biological depth
- XIHE fit
- upvote potential
- SEO value
- answerability
- linkedin_seed_value

Optional:

- source_quality

## Recommended Weighting

Keep total simple.

Suggested relative importance:

- traffic: high
- answerability: high
- XIHE fit: high
- linkedin_seed_value: medium-high
- biological depth: medium
- upvote potential: medium
- SEO value: medium-low
- source_quality: low-medium

## Tiering Rule Adjustment

A-tier should no longer mean:

- highest raw score only

A-tier should mean:

- worth writing now
- answerable now
- useful beyond Quora

## Suggested Output Format v1.2

```text
[A] Why do I still feel tired after sleeping?
Score: 22
Intent: sleep_fatigue
Why now: repeated high-traffic question + strong XIHE fit + strong LinkedIn seed
Answerability: 5
LinkedIn seed value: 5
Coverage status: new
```

## Implementation Order

Do these first:

1. answerability
2. linkedin_seed_value
3. why_now
4. already_covered filter

Do these second:

5. source_quality
6. deeper Quora extraction

## One-Sentence Summary

`MINER SKILL v1.2` should evolve from finding relevant questions to finding the best questions to answer now across Quora, LinkedIn, and the existing content system.

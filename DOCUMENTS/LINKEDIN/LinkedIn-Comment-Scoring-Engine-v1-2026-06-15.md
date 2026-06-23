## XIHE LinkedIn Comment Scoring Engine v1

Date: 2026-06-15

## Purpose

This file is the missing prioritization layer for the XIHE LinkedIn comment system.

The target matrix tells us what kind of posts are usually worth attention.

This scoring engine tells us:

- which post is more important right now
- whether Joyce should comment, follow, or ignore
- why a specific comment opportunity is valuable

## Core idea

The system should not rely only on classification.

It should rank comment opportunities before action.

That means every candidate post gets a score first.

## Score formula

`Score = A + B + C + D`

## Relationship Potential overlay

The score above decides whether Joyce should comment on a post.

Some posts should also be tagged for longer-term relationship building.

Add a second layer:

`Relationship Potential = E`

### E. Relationship Potential (0-5)

This measures whether the person is worth repeated attention beyond the current thread.

- `5` = founder, technical authority, or strategic validator in a closely adjacent recovery field
- `4` = strong operator or clinician with ongoing relevance to XIHE's themes
- `3` = good signal, but relationship value depends on future posts
- `2` = weak adjacency or low interaction potential
- `1` = occasional signal only
- `0` = no realistic long-term relationship value

### Relationship Potential interpretation

| E Score | Queue |
| --- | --- |
| 5 | High Value Relationship Queue |
| 4 | Priority Relationship Queue |
| 3 | Monitor Queue |
| 0-2 | Ignore after current action |

### A. Actor Quality (0-3)

- `3` = founder, researcher, clinician, or authority figure
- `2` = operator, senior practitioner, workflow owner
- `1` = company page
- `0` = marketing account or low-value broadcaster

### B. Thinking Depth (0-3)

- `3` = mechanism, systems framing, explanation, or real interpretation
- `2` = useful insight or partial reasoning
- `1` = simple observation or announcement
- `0` = pure PR or empty broadcast

### C. Comment Surface Area (0-2)

This is the key variable.

It measures whether Joyce can insert one real layer into the thread.

- `2` = Joyce can add a system-level or meaningfully better layer
- `1` = Joyce can lightly validate or extend
- `0` = no meaningful contribution possible

If `C = 0`, comment should usually stop here.

### D. Strategic Relevance (0-2)

- `2` = recovery, sleep, inflammation, mitochondria, energy, regulation, rehab
- `1` = adjacent healthcare, biotech, workflow, longevity, performance
- `0` = unrelated

## Score interpretation

| Score | Action |
| --- | --- |
| 8-10 | Must Comment |
| 6-7 | Can Comment |
| 4-5 | Follow Only |
| 0-3 | Ignore |

## Relationship rule

Use `Relationship Potential` after the main score.

If a post scores `8-10` and `E >= 4`, treat the author as a long-term relationship candidate.

That means:

- follow
- monitor future posts
- prefer thoughtful comments over frequent comments
- log the person in the high-value relationship queue

## Hard stop rule

Even if the total score is high, do not comment when:

- `C = 0`
- the comment would sound like a vendor
- the post is not a real fit for Joyce's voice

In those cases:

- follow
- monitor
- or ignore

## Why Comment Surface Area matters

LinkedIn comments are not mainly self-expression.

They are cognitive placement.

The question is not:

`Do I have something to say?`

The better question is:

`Is there a clean place to insert one intelligent layer?`

That is what Surface Area measures.

## Example 1

### Post

A rehab leader explains why patient adherence often depends on how clearly the first session sets expectations.

### Score

- A = 3
- B = 2
- C = 2
- D = 2

Total = `9`

### Action

`Must Comment`

Why:

- strong actor
- real workflow insight
- high XIHE relevance
- Joyce can add a recovery-systems layer

## Example 2

### Post

A company page celebrates an anniversary with team photos and a thank-you message.

### Score

- A = 1
- B = 0
- C = 0
- D = 1

Total = `2`

### Action

`Ignore`

## Example 3

### Post

A medtech founder writes about how clinical adoption is less about technology alone and more about how it fits workflow timing.

### Score

- A = 3
- B = 3
- C = 2
- D = 1

Total = `9`

### Action

`Must Comment`

## Practical sequence

Use this order:

1. detect actor type
2. assess thinking depth
3. assess comment surface area
4. assess strategic relevance
5. total the score
6. decide action

## Relationship to the target matrix

The target matrix is the first-pass classifier.

This scoring engine is the second-pass prioritizer.

Use them together:

`Matrix -> Score -> Action`

## One-sentence summary

The scoring engine turns XIHE's comment system from a rule list into a decision engine, and the relationship overlay tells us who is worth building with over time.

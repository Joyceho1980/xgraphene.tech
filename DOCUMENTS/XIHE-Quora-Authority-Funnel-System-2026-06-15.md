# XIHE Quora Authority Funnel System

Date: 2026-06-15
Owner: XIHE Content Operations
Applies to: Quora answer writing, link decisions, and final pre-publish checks

## Core Principle

Win the right to explain first.

Then earn reading completion.

Only after that, allow light conversion.

## Funnel Structure

All Quora answers should pass through three layers:

1. Authority Layer
2. Retention Layer
3. Conversion Layer

## 1. Authority Layer

This is the most important layer.

Goal:

Make the reader feel that the answer is genuinely explaining the problem.

Rules:

- do not mention the website
- do not mention products
- avoid mentioning XIHE unless there is a very strong reason
- focus on mechanism and explanation only

Content traits:

- sleep -> biology
- inflammation -> system state
- mitochondria -> energy regulation

Success test:

- the reader does not feel they are being pitched
- the reader feels the explanation is reasonable

## 2. Retention Layer

This layer determines whether the answer gets read to the end.

Goal:

Increase reading completion and dwell time.

Structure rules:

- each paragraph stays within 3 to 4 lines
- each paragraph explains one point only
- move from human question -> biological mechanism -> system explanation

Important note:

Quora ranking depends far more on:

- reading time
- engagement
- upvotes

It does not depend on stuffing links into the answer.

## 3. Conversion Layer

This layer is optional and comes last.

A link is only allowed if all three conditions are met:

### Condition A

The answer is already clear and complete enough on its own.

Target:

- at least 70 percent clarity without the link

### Condition B

The question belongs to:

- research
- mechanism
- system-level explanation

### Condition C

The reader has already completed the core understanding inside Quora.

## Approved Link Placement

If a link is allowed, it should appear only in the final line.

Approved formats:

- For additional research context, relevant materials can be found here: [link]
- Further scientific references are available in our research hub: [link]

Rule:

Do not place the link early.

Do not make the answer depend on the link.

## Link Permission Levels

### Level 1: No Link

Examples:

- sleep fatigue
- tired after sleep
- basic inflammation

Rule:

No link at all.

### Level 2: Weak Permission

Examples:

- mitochondrial function
- chronic inflammation
- energy metabolism

Rule:

Optional light link only in the last line.

### Level 3: Allowed

Examples:

- systems biology
- experimental FIR research
- immune modulation studies

Rule:

A natural research-hub link is acceptable.

## Decision Logic

```text
IF question_type == "sleep/fatigue":
    no_link()

ELIF question_type == "mechanism":
    optional_light_link()

ELIF question_type == "research/system":
    allow_link()
```

## Final Quora Production Flow

The final operating sequence should be:

Question
-> Score (traffic + depth + relevance)
-> Module A/B/C/D
-> Generate Answer
-> Tone Engine (Quora style)
-> Authority Check
-> Link Permission Check
-> Final Output
-> Publish

## Key Mental Shift

Do not treat Quora as a traffic channel first.

Treat Quora as:

a biological explanation authority system that occasionally produces traffic

This is the correct order:

- explain first
- retain attention second
- allow light referral last

## One Sentence Summary

The link is not the goal.

It is a small byproduct the system permits only after explanation authority has already been established.

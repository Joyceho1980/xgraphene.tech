# Quora Skill Revision Spec

Date: 2026-06-15
Target: `D:\XIHE-ENGLISH-KB\skills\quora-skill.md`
Purpose: turn the current Quora skill from a structured drafting engine into a Quora-native daily operating system.

## Core Decision

Do not discard the current skill.

Keep it as the internal reasoning engine.

What needs to change is the final rendering layer and the daily operating rules.

## Correct Role Of The Skill

The current skill should not behave like:

- a final-answer formatter
- a visible template system
- a light marketing engine

It should behave like:

- a question classifier
- a biological reasoning engine
- a Quora-native answer drafter

## Revised System Architecture

Use this 4-layer flow:

1. Question Capture Layer
2. Biological Reasoning Draft Layer
3. Quora Native Render Layer
4. Authority Funnel Check

In plain form:

`Question -> Intent -> Template -> Draft Logic -> Native Render -> Link Check -> Final Answer`

## Non-Negotiable Quora Tone Rules

These rules override older style instructions:

- prioritize clarity over style
- explain step by step
- no metaphors
- avoid abstraction
- neutral scientific tone
- no brand mention

## What To Keep

- 4 intent classes
- T1-T10 template library
- variable extraction
- depth assignment
- anti-marketing filter
- validation gate

## What To Change

### 1. Remove Visible Scaffolding From Final Output

Current problem:

- final output shows numbered sections
- internal template logic is visible
- the answer reads like a worksheet

Required change:

- keep structure internally
- remove numbered final output
- render as natural Quora paragraphs

### 2. Change Metaphor Rule To Default Off

Current problem:

- skill still allows one metaphor

Required change:

- default: no metaphors
- only allow analogy if explicitly requested later

### 3. Separate Drafting From Link Logic

Current problem:

- draft and referral logic are too close together

Required change:

- default answer contains no link
- link decision happens only after Authority Funnel review
- most answers should publish without any link

### 4. Add Human Opening Rule

Current problem:

- openings are correct but generic

Required change:

- first paragraph must answer the lived confusion directly
- separate the visible symptom from the hidden biological question

Example:

`Feeling tired after sleep does not always mean you slept too few hours.`

### 5. Add Signature Insight Rule

Current problem:

- answers explain correctly but do not always leave a memorable shift

Required change:

- each answer must contain one short insight line
- the line should reframe the issue, not market anything

Example:

`Sleep quality is not a single variable. It is the outcome of multiple biological systems synchronizing over time.`

### 6. Add Quora Native Render Layer

New step required after draft generation:

`Draft Engine -> Quora Native Render`

The render layer must enforce:

- no numbering
- no internal labels
- no template language
- no essay-like over-polish
- no philosophical drift
- no brand or product mention

### 7. Relax Mechanical Symmetry

Current problem:

- output is too evenly shaped
- paragraph rhythm feels generated

Required change:

- logical order stays fixed
- paragraph length can vary
- one short transition paragraph is allowed

## Revised Output Standard

Each final Quora answer should contain:

1. Human opening
2. Key distinction or misconception correction
3. Biological mechanism explanation
4. System interpretation
5. One signature insight

The difference is that this structure must be invisible in the final answer.

## Revised Link Policy

Default rule:

- no link

Allow a light link only when all conditions are true:

- answer is already complete on its own
- question is mechanism or research oriented
- final tone remains neutral
- link appears only in the last line

Suggested final-line format if ever used:

`For additional research context, relevant references can be found here: [link]`

## Revised Daily Workflow

Daily output target:

- 2 answers per day

Default mix:

- 1 Tier 1 traffic question
- 1 Tier 2 or Tier 3 authority question

Question selection priority:

1. Quora most viewed
2. Google People Also Ask
3. Reddit phrasing for human wording
4. XIHE relevance filter

## Recommended Skill Rewrite Order

1. Update tone rules to remove metaphor allowance
2. Replace strict numbered final output with native rendering step
3. Move link logic after authority check
4. Add signature insight requirement
5. Add human-opening requirement
6. Add final Quora-native validation checks

## Suggested Validation Gate v2

- opening starts from the user's lived confusion
- no numbering in final answer
- no brand mention
- no product mention
- no link unless explicitly permitted by funnel rules
- no metaphors
- one signature insight present
- mechanism explained step by step
- tone remains neutral scientific
- answer reads like a native Quora reply

## One-Sentence Summary

The current Quora skill should remain the reasoning engine, but the final answer must be rendered through a stricter Quora-native filter before publishing.

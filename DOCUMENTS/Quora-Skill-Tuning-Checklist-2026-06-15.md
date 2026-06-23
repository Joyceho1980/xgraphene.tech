# Quora Skill Tuning Checklist

Date: 2026-06-15
Target: `D:\XIHE-ENGLISH-KB\skills\quora-skill.md`
Status: review and tuning guidance

## Purpose

The current Quora skill is structurally strong.

It is already useful as an internal drafting engine.

The problem is not logic quality.

The problem is that the output still feels too templated for native Quora publishing.

This checklist defines what should change before the skill is treated as a final-answer engine.

## Core Judgment

Keep:

- pipeline structure
- intent detection
- template routing
- anti-marketing filter
- validation gate

Adjust:

- output naturalness
- paragraph rhythm
- metaphor policy
- link generation policy
- Quora-native tone

## Tuning Items

### 1. Remove Visible Template Scaffolding

Current issue:

- output is locked into numbered sections
- section boundaries are too visible
- the answer reads like an internal worksheet

Adjustment:

- keep the 5-part reasoning structure internally
- remove numbered output in the final answer
- allow natural paragraph flow

Target effect:

The answer should read like a strong Quora reply, not a generated framework.

### 2. Tighten Metaphor Policy

Current issue:

The skill allows one metaphor or analogy per answer.

Conflict:

The newer Quora tone rule is:

- prioritize clarity over style
- explain step by step
- no metaphors
- avoid abstraction
- neutral scientific tone
- no brand mention

Adjustment:

- default rule: no metaphors
- only allow a simple analogy if explicitly approved for clarity

Target effect:

Answers become more stable, neutral, and less stylized.

### 3. Move Link Logic Out Of Draft Layer

Current issue:

The current skill is still too close to allowing links during draft formation.

Adjustment:

- default output should contain no brand, no product, no website, and no link
- link permission should be determined only after Authority Funnel review
- links should be inserted only in the final rendering step

Target effect:

Draft generation and referral logic stay fully separated.

### 4. Reduce Over-Engineering In Final Output

Current issue:

- exact sentence-count behavior
- exact section formatting
- highly symmetrical structure

Adjustment:

- preserve logical order
- allow paragraph lengths to vary naturally
- allow one or two shorter transition paragraphs

Target effect:

The answer feels written for a human conversation thread, not a template engine.

### 5. Strengthen Human Opening

Current issue:

The current human-framing step is useful, but still slightly generic.

Adjustment:

- first paragraph should sound like a direct reply to the person's lived concern
- open with the confusion the user actually has
- answer the hidden question early

Target effect:

Better Quora retention and better platform-native feel.

### 6. Add Signature Insight Rule

Current issue:

The current structure explains well but does not always leave a memory point.

Adjustment:

- after the mechanism layer, add one cognitively memorable line
- the line should reframe the problem, not market anything

Good example:

Sleep quality is not a single variable.
It is the outcome of multiple biological systems synchronizing over time.

Target effect:

Scientifically correct answers become cognitively memorable.

### 7. Add Quora-Native Output Filter

Current issue:

The current skill is a good drafting engine, but not yet a final-publish engine.

Adjustment:

Add a final filter layer:

`Draft Engine -> Quora Native Filter -> Authority Funnel Check -> Final Answer`

Quora Native Filter should check:

- no numbering
- no internal labels
- no rigid section language
- no brand mention
- no philosophical drift
- no essay-like over-polish

Target effect:

The answer becomes publishable without sounding mechanical.

## Example A

Question:

Why do I still feel tired after sleeping?

### Internal structured draft style

1. People often feel tired even after sleeping enough hours.

2. The assumption is that sleep duration equals recovery.

3. In biology, sleep is an active recovery process involving mitochondrial ATP restoration.

4. If sleep is fragmented or disrupted, recovery cycles may remain incomplete.

5. Sleep quality is not defined by duration, but by whether biological recovery cycles are completed.

### Quora-native final style

Feeling tired after sleep does not always mean you slept too few hours.

The first thing to separate is sleep duration from sleep quality.

A person can spend enough time in bed and still wake up tired because the body did not complete recovery efficiently. This can happen with fragmented sleep, stress activation, breathing problems, or circadian disruption.

Biologically, sleep is an active recovery phase. During sleep, the body shifts toward repair, regulation, and energy restoration. Mitochondria are part of that process because they help restore ATP, which cells use for energy.

If that recovery process is disrupted, fatigue can persist even when the total number of sleep hours looks adequate.

The deeper point is that sleep quality is not a single variable. It is the outcome of multiple biological systems synchronizing over time.

## Example B

Question:

Why does inflammation slow healing?

### Internal structured draft style

1. Inflammation is often seen as something harmful.

2. In reality, it is a necessary biological response.

3. Inflammation is a dynamic regulatory state involving immune signaling and M1/M2 shifts.

4. Problems occur when the transition from inflammatory to repair-associated states fails or becomes prolonged.

5. Inflammation is not the problem. Failed resolution is.

### Quora-native final style

Inflammation slows healing when it stays active longer than it should.

At the beginning of healing, inflammation is useful. It helps the body protect damaged tissue, clear debris, and start the repair process.

The problem is not the existence of inflammation. The problem is when the body has difficulty moving out of that early defensive phase and into a later repair phase.

This is why healing depends not only on tissue repair itself, but also on whether the inflammatory response resolves on time.

So the key issue is not simply inflammation.

It is whether the system can transition from defense into resolution.

## Recommended Next Revision Order

1. Change metaphor policy to default no metaphor
2. Remove numbered final output
3. Separate link permission from draft generation
4. Add signature insight rule
5. Add Quora-native final filter

## One Sentence Summary

The current skill is good at generating structured biological explanations.

It now needs to become better at sounding like a real Quora answer.

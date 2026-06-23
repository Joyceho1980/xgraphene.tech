# XIHE Knowledge to Content Architecture

Date: 2026-06-15
Owner: XIHE Content Operations
Applies to: XIHE KB, founder LinkedIn workflow, future content automation

## Purpose

The KB should not be treated as a content library.

It should be treated as the raw-material layer of a thinking system.

The output layer is not "write a post."

The output layer is a repeatable content engine that turns structured scientific understanding into founder-level communication.

## Core Architecture

The system should operate as five layers:

1. Raw Knowledge Layer
2. Insight Card Layer
3. Prompt Object Layer
4. Content Engine Layer
5. Publishing Queue

This is the working model:

`KB -> Insight Card -> Prompt Object -> Content Engine -> Queue -> Publish`

## Layer 1: Raw Knowledge Layer

This is the source-of-truth layer.

Typical contents:

- papers
- experiments
- mechanism notes
- product data
- clinical findings
- preclinical findings

Characteristics:

- original
- not yet structured for publishing
- high-value, high-noise
- useful as evidence, not yet usable as communication

Rule:

Do not confuse raw notes with publish-ready content.

## Layer 2: Insight Card Layer

This is the interpretation layer.

The purpose of this layer is to convert raw material into reusable knowledge units.

Example uses:

- M1/M2 interpretation card
- FIR mechanism summary card
- cytokine pathway card
- inflammatory window concept card

Insight cards are the bridge from information to understanding.

They should capture:

- core idea
- observed signals
- mechanism hypothesis
- limitation
- confidence

Example:

Title: M1/M2 polarization under physical modulation

Core idea:
- M1 to M2 transition observed under FIR exposure

Observed signals:
- TNF-alpha downregulation
- IL-1beta suppression

Status:
- preclinical
- mechanism not fully causal

## Layer 3: Prompt Object Layer

This is the conversion layer between structured understanding and content generation.

This layer turns insight cards into content fuel.

Prompt objects should be structured and concise.

Example:

```json
{
  "topic": "macrophage polarization",
  "mechanism": "M1 to M2 shift",
  "modality": "graphene far-infrared 9.4um",
  "context": "preclinical STZ rat model",
  "signals": ["TNF-alpha downregulation", "IL-1beta suppression"],
  "uncertainty": "causality not fully established"
}
```

Working rule:

The prompt object is not a post.

It is the fuel for the content engine.

## Layer 4: Content Engine Layer

This layer takes a prompt object and produces three founder-facing LinkedIn outputs:

1. System Thinker
2. Science Observer
3. Founder Philosopher

Input:

- topic
- system angle
- mechanism
- context
- tension
- claim constraint

Example prompt object:

```json
{
  "topic": "macrophage polarization",
  "system_angle": "inflammation vs regeneration",
  "mechanism": "M1/M2 transition",
  "context": "preclinical FIR studies",
  "tension": "speed vs biological time",
  "constraint": "avoid clinical claims"
}
```

Expected outputs:

- a macro framing post
- a careful science post
- a minimal philosophical post

## Layer 5: Publishing Queue

This is the scheduling and execution layer.

The purpose is to prevent content from being created ad hoc.

Queue entries should include:

- status: ready / scheduled / posted
- type: system / science / philosophy
- date
- platform

Example:

```yaml
post_1:
  type: system_thinker
  status: ready
  publish_day: Tuesday
  platform: linkedin

post_2:
  type: science_observer
  status: ready
  publish_day: Thursday
  platform: linkedin

post_3:
  type: founder_philosopher
  status: ready
  publish_day: Sunday
  platform: linkedin
```

## Bridge Layer Principle

The most important design insight is this:

The KB is a storage system.

It is not yet a generation system.

The missing bridge is the transformation of raw KB material into structured prompt objects.

That bridge layer is what makes automation possible.

## Recommended KB Note Types

The content system should use three note types:

### 1. Raw Note

Purpose:

- preserve source material
- preserve paper summaries
- preserve experiment records
- preserve technical notes

Rule:

No heavy interpretation required at this layer.

### 2. Insight Card

Purpose:

- convert evidence into reusable understanding
- extract concept-level meaning
- preserve limits and uncertainty

Key fields:

- title
- core idea
- evidence
- limitation
- status
- confidence

### 3. Prompt Card

Purpose:

- feed the content engine directly
- frame the angle, tension, and claim boundary

Suggested fields:

- topic
- angle
- tone
- key tension
- core insight
- constraint

## Recommended Folder Structure

Suggested structure for a future Obsidian or structured KB flow:

```text
/KB
  /00_raw_papers
  /01_mechanisms
  /02_experiments
  /03_insight_cards
  /04_prompt_cards
  /05_content_outputs
  /06_published
  /07_content_queue
```

## Working Flow

Daily or weekly operation should look like this:

1. Select a topic from the KB
2. Build or refine an insight card
3. Convert the insight into a prompt object
4. Route it through the content engine
5. Produce three post variants
6. Place approved outputs into the publishing queue

This changes the mental model from:

"I need to write a post"

to:

"I am running a thinking system"

## Trigger Mechanism For Semi-Automation

In a future Obsidian or automation workflow, a note can trigger content generation with fields like:

```yaml
generate: true
topic: macrophage polarization
```

This indicates:

Send this note into the content engine.

## Default Generator Rules

When the content engine receives a prompt object, it should:

- generate one System Thinker post
- generate one Science Observer post
- generate one Founder Philosopher post
- keep sentences short
- preserve uncertainty
- avoid medical claims
- keep one idea per line

Example fixed system prompt:

```text
You are XIHE Content Engine.

Input: structured scientific or conceptual note.

Task:
Generate 3 LinkedIn posts:

SYSTEM THINKER
SCIENCE OBSERVER
FOUNDER PHILOSOPHER

Rules:
- No medical claims
- Use cautious scientific language
- Keep sentences short
- One idea per line
- Preserve uncertainty where needed
```

## Long-Term Value

If this system is applied consistently, the result is not just more posts.

The result is:

- stronger content consistency
- less dependence on inspiration
- a reusable insight library
- a durable narrative system
- a recognizable thought architecture

## One Sentence Summary

The XIHE KB should not function as a knowledge dump.

It should function as the raw-material layer of a reproducible thinking system.

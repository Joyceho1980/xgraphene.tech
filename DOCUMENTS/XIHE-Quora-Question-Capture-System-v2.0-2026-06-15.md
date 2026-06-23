# XIHE Quora Question Capture System (v2.0)

Date: 2026-06-15
Owner: XIHE Content Operations
Applies to: Quora question discovery, upstream traffic capture, and answer queue generation

## Goal

Generate a daily pool of high-value biological questions and route them into a writing queue by priority.

This is not simple question collection.

This is a biological uncertainty mapping system.

## Core Architecture

The upstream capture flow should operate as:

1. Source Ingestion
2. Keyword Expansion
3. Question Harvesting
4. Filtering
5. Scoring
6. Output Queue

Working model:

`sources -> expanded keywords -> harvested questions -> filtered questions -> scored questions -> writing queue`

## Step 1-A: Source Ingestion

Maintain four seed keyword pools only.

### Pool A: Sleep / Energy

- sleep quality
- fatigue
- tired after sleep
- circadian rhythm

### Pool B: Inflammation

- chronic inflammation
- immune system
- recovery inflammation

### Pool C: Mitochondria

- mitochondrial dysfunction
- ATP production
- cellular energy

### Pool D: Recovery System

- healing time
- tissue recovery
- why recovery is slow

Rule:

Do not over-expand the seed pools too early.

Keep the entry system focused.

## Step 1-B: Keyword Expansion

Each seed term should be expanded into human question patterns.

Default expansion forms:

- why
- how
- what causes
- relationship between
- effect of

Example:

`sleep fatigue` becomes:

- why am I tired after sleep
- what causes fatigue after sleeping
- how sleep affects energy levels

## Step 1-C: Question Harvesting

Use three fixed source classes:

1. Quora search
2. Google People Also Ask
3. Reddit phrasing

### Quora Search

Search with the expanded keywords and prioritize:

- most viewed questions
- related questions
- repeated phrasing patterns

### Google People Also Ask

Search natural language phrases such as:

- why am I tired after sleeping
- what is chronic inflammation
- mitochondria energy production

Treat the expanded question chain as SEO gold.

### Reddit Phrasing

Use Reddit to capture natural human language, especially:

- why do I feel...
- anyone else experience...
- always tired after...

Rule:

Reddit is useful for wording patterns, not for evidence.

## Step 1-D: Filtering

Discard questions that are:

- purely lifestyle advice
- non-biological
- too subjective to build a useful explanation around
- unrelated to physiology

Keep questions that are:

- biology-related
- connected to energy, immune function, inflammation, or recovery
- explainable through mechanism

Rule:

The question must be translatable into biology.

## Step 1-E: Scoring System

Each question should be scored across four dimensions:

- Traffic
- Biological depth
- XIHE relevance
- Explainability

Each dimension scores from 0 to 5.

Maximum total:

- 20

Interpretation:

- 16 to 20 = Tier 1, must write
- 12 to 15 = Tier 2, can write
- below 12 = discard or defer

## Scoring Logic

### Traffic

High:

- sleep
- fatigue

Medium:

- mitochondria

Lower but still useful:

- inflammation

### Biological Depth

Higher when the question can open into:

- mitochondria
- immune signaling
- inflammation
- energy metabolism

### XIHE Relevance

Higher when the question naturally connects to:

- biological systems
- energy regulation
- inflammation
- recovery timing

### Explainability

Higher when the question can be answered clearly without oversimplifying.

## Step 1-F: Output Queue

The daily output should produce a queue such as:

Tier 1:

- Why am I still tired after sleeping?
- What causes chronic inflammation?

Tier 2:

- How do mitochondria affect aging?
- Why does recovery slow down with age?

Rule:

The queue exists to prioritize writing, not to store everything forever.

## Most Important Upgrade

Do not think of this as question collection.

Think of it as biological uncertainty mapping.

The purpose is to identify where human confusion is strongest and where XIHE can explain it best.

## Question Types

Train the system to recognize three classes of questions.

### Type 1: Experience Questions

Examples:

- Why am I tired after sleeping?
- Why do I feel exhausted all the time?

These are highest-value traffic questions.

### Type 2: Mechanism Questions

Examples:

- What is mitochondrial dysfunction?
- What causes chronic inflammation?

These establish authority.

### Type 3: System Questions

Examples:

- How are sleep and inflammation connected?
- What controls recovery speed in the body?

These create differentiation.

## Question Upgrade Rule

The raw Quora question is often not the internal working question.

The system should upgrade it into a biological framing.

Example:

Raw question:

- Why am I tired after sleeping?

Internal biological version:

- Why does sleep not always restore cellular energy levels effectively?

This does not replace the public answer wording.

It improves the internal reasoning layer.

## Output Format

The capture system should maintain an organized question bank such as:

Sleep:

- Why am I still tired after sleeping?
- Why is sleep quality more important than duration?

Inflammation:

- Why does inflammation slow recovery?
- What is chronic inflammation?

Mitochondria:

- Why does cellular energy decline with age?

## Realistic Build Path

Do not begin with full automation.

The practical path is:

1. semi-automatic
2. rule-based
3. automated

Otherwise the system will become unstable because:

- Quora scraping is inconsistent
- Reddit structure is messy
- LLM scoring can drift

## Recommended Phases

### Phase 1: Manual Seed Operation

- manual question capture
- LLM scoring
- manual answer drafting
- manual Quora posting

Goal:

Validate the model.

### Phase 2: Semi-Automatic Intake

- Apify or feed-based intake for Reddit and Quora
- automated scoring
- automated tagging
- human selection of what to write

### Phase 3: Automated Drafting

- auto-generate answer drafts
- human review before posting

### Phase 4: Full Pipeline

- full scheduled question intake
- auto scoring
- auto module assignment
- auto drafting
- scheduled publishing pipeline

## Recommended Stack

Suggested practical stack:

### Data

- Apify
- RSS
- SerpAPI

### Logic

- Python
- Node.js

### AI

- OpenAI API

### Orchestration

- n8n

### Storage

- Notion
- Airtable

### Scheduling

- Buffer
- Hypefury

## System Essence

This is not a scraping pipeline.

It is not just content automation.

It is a search-driven scientific narrative engine.

## One Sentence Summary

The question capture layer turns human confusion into structured biological inquiry data.

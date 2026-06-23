# XIHE Keyword Section Visual Architecture

Date: 2026-06-11

## Purpose

This document defines the future visual `Keyword Section` for XIHE's prospecting system.

The goal is to turn keyword research into a reusable workspace that supports:

- sales prospecting
- contact discovery
- pain-point analysis
- outreach writing
- SEO and GEO planning

## Core Product Idea

The `Keyword Section` should behave like a visual intelligence board.

A user should be able to:

1. enter raw keywords
2. run Gemini-assisted clustering
3. see grouped keyword families
4. convert groups into search formulas
5. convert groups into CRM tags
6. convert groups into outreach angles
7. convert groups into SEO topics

## Recommended Visual Sections

### 1. Raw Input Panel

Purpose:

- collect rough keywords from the user, Google, competitor sites, or AI outputs

Fields:

- raw keyword
- source
- segment guess
- country
- notes

Examples:

- PEMF
- sports rehab
- recovery suite
- post-op recovery
- practice administrator

### 2. Gemini Cluster Panel

Purpose:

- let Gemini normalize and cluster the raw list

Expected outputs:

- segment keywords
- modality keywords
- role keywords
- pain-point keywords
- route keywords
- topic keywords

Gemini tasks:

- deduplicate
- normalize spelling variants
- group semantic neighbors
- assign intent labels

### 3. Search Formula Builder

Purpose:

- turn clustered keywords into ready-to-run search formulas

Formula families:

- company discovery
- LinkedIn role discovery
- Google dorking
- file search
- public route discovery

Examples:

- `"PEMF" "physical therapy"`
- `"Company Name" "director of operations"`
- `site:companydomain.com "@companydomain.com"`
- `filetype:pdf "Company Name" email`

### 4. CRM Tag Generator

Purpose:

- turn keyword clusters into reusable CRM tags

Tag families:

- segment
- modality
- buyer role
- pain point
- business model
- geography

Examples:

- `#PT`
- `#PEMF`
- `#PremiumRecovery`
- `#ReturnToPlay`
- `#CashPay`

### 5. Outreach Angle Panel

Purpose:

- convert keyword clusters into messaging direction

Output examples:

- recovery workflow
- premium recovery add-on
- athlete return-to-play support
- differentiated recovery environment
- evidence-aware wellness support

### 6. SEO / GEO Topic Panel

Purpose:

- convert keyword clusters into content opportunities

Content types:

- knowledge article
- segment page
- comparison page
- FAQ page
- glossary page

Examples:

- `PEMF vs far-infrared recovery`
- `What is a recovery environment`
- `How PT clinics add premium recovery services`
- `Recovery suite vs energy cabin`
- `What is a recovery platform`

### 7. Export And Reuse Panel

Purpose:

- move results into execution systems

Export targets:

- CRM tags
- prospecting lists
- outreach prompts
- website content queue
- CSV
- JSON

## Gemini's Best Role In The Keyword Section

Gemini is best used for:

- expansion
- clustering
- semantic cleanup
- intent grouping
- topic ideation
- phrase rewriting

## Gemini Prompt Outputs Should Be Structured

Do not ask Gemini for vague brainstorming only.

Prefer structured output such as:

- keyword
- cluster
- intent
- recommended use
- related search formula
- suggested CRM tag
- suggested SEO topic

## UI State Recommendation

Each keyword should have a state such as:

- `new`
- `clustered`
- `approved`
- `used in search`
- `used in CRM`
- `used in outreach`
- `used in SEO`

This makes keyword research operational rather than disposable.

## Recommended Filters

The visual system should filter by:

- country
- segment
- modality
- buyer role
- pain point
- content use
- outreach use
- status

## Recommended First Version

The first usable version does not need full automation.

It only needs:

1. manual keyword entry
2. Gemini clustering output
3. visible grouped buckets
4. copyable search formulas
5. export to CRM tags and SEO notes

## XIHE Conclusion

The `Keyword Section` should become the upstream brain for:

- prospecting
- CRM tagging
- messaging
- website content strategy

This is a high-leverage module and should be built visually.

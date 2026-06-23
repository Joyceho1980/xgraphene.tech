# XIHE Account Intelligence Engine

Date: 2026-06-12

## Purpose

Turn keywords into sales actions.

This engine is not a SEO helper only.
It is the front end of XIHE's outbound account intelligence system.

## Core Flow

1. Keyword
2. Business Model
3. Buyer Type
4. Facility Stage
5. Decision Maker
6. Outreach Angle
7. CRM Tag

## What It Does

- identifies what kind of business the keyword implies
- identifies which buyer is most likely to care
- identifies which business pain point is being signaled
- generates search formulas to find real accounts
- suggests CRM tags for segmentation
- suggests the best first outreach angle

## Input Types

- single keyword
- keyword set
- keyword set plus company context
- keyword set plus website text

## Output Fields

- keyword_interpretation
- likely_buyer_types
- business_context
- pain_points
- adjacent_keywords
- search_formulas
- crm_tags
- next_action

## Tag Layers

Use consistent tag families:

- `SEG_*` for segment
- `MODEL_*` for business model
- `STAGE_*` for facility stage
- `ROLE_*` for decision maker
- `FIT_*` for XIHE fit
- `ANGLE_*` for outreach angle

## Recommended Operating Rules

- facility buildout signals take priority over generic wellness terms
- business model signals take priority over broad clinical language
- return-to-play and membership signals are high-value intent markers
- pet recovery should be treated as a separate expansion lane
- do not move a keyword into CRM until the prompt output is stable across multiple runs

## Example Logic

- `recovery suite` -> facility buildout, premium recovery space, high-CapEx buyer
- `cash-pay wellness` -> revenue model, margin expansion, owner-level buyer
- `sports rehab` -> clinical segment, performance workflow, rehab decision maker
- `pet recovery` -> niche expansion, veterinary/pet wellness buyer

## CRM Writeback

The engine should write back:

- primary cluster
- secondary cluster
- buyer role
- intent level
- search formula
- recommended product line
- recommended outreach angle

## Next Step

After keyword output stabilizes, connect this engine to:

- Gemini API
- n8n workflows
- CRM customer records
- email drafting

# XIHE Revenue Intelligence System

Date: 2026-06-12

## Purpose

This system connects XIHE's knowledge base, market intelligence, CRM, and outbound execution into one revenue workflow.

It is designed for B2B account development, not for generic CRM storage.

## System Layers

### 1. XIHE Knowledge Engine

Purpose:

- hold research, science, and positioning logic
- support SEO, GEO, and authority building
- translate research into product and outreach language

Typical outputs:

- research summaries
- claim boundaries
- science-backed language
- content angles

### 2. XIHE Market Intelligence Engine

Purpose:

- discover market language and buyer intent
- identify facility stage, business model, and buying triggers
- convert keywords into account discovery logic

Typical outputs:

- keyword clusters
- buyer types
- pain points
- search formulas
- adjacent keywords
- outreach angles

### 3. XIHE CRM / Revenue Intelligence Engine

Purpose:

- score accounts
- track buying triggers
- segment by fit and intent
- write back sales actions

Typical outputs:

- account score
- buying trigger
- product fit
- outreach stage
- follow-up status

## Core Flow

Keyword
-> Intent
-> Account Type
-> Pain Point
-> Knowledge Base
-> Economic Justification
-> Product Mapping
-> Outreach
-> CRM Writeback

## Buying Trigger Field

The CRM should include a dedicated `Buying Trigger` field.

Recommended values:

- New Facility
- Expansion
- Renovation
- Membership Launch
- Cash-Pay Pivot
- Insurance Pressure
- Pet Wellness Launch
- Veterinary Expansion
- Return-to-Play Demand
- Premium Experience Upgrade

## Required CRM Fields

- keyword_cluster
- buyer_type
- business_model
- facility_stage
- buying_trigger
- pain_point
- economic_justification
- product_fit
- outreach_angle
- fit_score
- next_action

## Fit Score Logic

Suggested scoring buckets:

- 85-100: Hot Lead
- 60-84: Warm Lead
- below 60: Cold or nurture lead

Suggested positive signals:

- Cash Pay
- New Facility
- Recovery Suite
- PEMF already present
- Premium Membership
- Return-to-Play focus
- Pet Wellness expansion

Suggested negative signals:

- purely generic wellness language
- low-intent consumer terms
- no facility signal
- no business model signal

## Knowledge Mapping

The system should map pain points to knowledge layers before product mapping.

Example:

- Pain Point: athletes recover slowly
- Biology Layer: ATP demand, mitochondrial stress, microcirculation load
- Research Layer: FIR, graphene, recovery support, circulation support
- Application Layer: recovery environment, passive recovery session, post-training support
- Product Layer: XIHE Recovery Suite, XIHE Capsule, XIHE FIR system

## Economic Justification Layer

This layer is required because B2B buyers buy ROI, not only technology.

The CRM should generate or store:

- clinical benefit
- business benefit
- economic outcome

Example for Recovery Suite:

- Clinical Benefit: passive recovery environment
- Business Benefit: premium member experience
- Economic Outcome: higher revenue per square foot

## Tag Architecture

Recommended tag families:

- `SEG_*` for segment
- `MODEL_*` for business model
- `STAGE_*` for facility stage
- `ROLE_*` for decision maker
- `TRIGGER_*` for buying trigger
- `FIT_*` for XIHE fit
- `ANGLE_*` for outreach angle

## Example Account Logic

### Example 1: Apto PT

- Segment: PT / sports rehab
- Model: cash-pay or hybrid
- Stage: operating
- Trigger: revenue diversification
- Fit: high
- Angle: premium recovery environment that increases revenue per visit

### Example 2: New Recovery Suite Buildout

- Segment: facility buildout
- Model: membership or premium recovery
- Stage: pre-opening
- Trigger: new facility
- Fit: very high
- Angle: planning audit for recovery suite layout and ROI

### Example 3: Pet Recovery Expansion

- Segment: veterinary / pet wellness
- Model: premium pet services
- Stage: concept or pilot
- Trigger: pet wellness launch
- Fit: exploratory
- Angle: recovery environment for pets positioned as comfort-first

## Operating Rule

Do not let the CRM stay as a contact list.
It must become a decision system that tells the sales team:

- who to contact
- why to contact them now
- what to say
- what product line fits best

## Next Step

Connect this system to:

- Gemini API for analysis
- n8n for workflow orchestration
- CRM pages for account records
- outbound email drafting


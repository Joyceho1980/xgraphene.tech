# XIHE Keyword Section UI Blueprint

Date: 2026-06-11

## Purpose

This document defines the user-facing visual design logic for XIHE's `Keyword Section`.

The module should help the sales team see:

- where keyword density is forming
- where XIHE has the strongest commercial fit
- how keywords move from discovery to outreach to feedback

## Module Identity

Working module name:

- `Keyword Section`

Alternative product-facing names:

- `Keyword Intelligence`
- `Keyword Command Center`
- `Prospecting Intelligence`

## Visual Components

### 1. Keyword Heatmap

Purpose:

- visualize where lead clusters concentrate by keyword family

Recommended axes:

- X-axis: segment or modality
- Y-axis: pain-point family or buyer-role family

Examples:

- PT
- sports rehab
- PEMF
- recovery suite
- return to play
- patient experience
- premium recovery

What this should answer:

- which themes dominate the current pipeline
- where XIHE already has enough account density to build a campaign
- whether one segment is too narrow or too generic

## 2. Strategy Matrix

Purpose:

- show where a lead, keyword cluster, or product narrative sits in strategic space

Recommended axes:

- X-axis: technology relevance
- Y-axis: business pain intensity

Suggested labels:

- low to high `technology relevance`
- low to high `pain intensity`

What this should answer:

- which accounts are in XIHE's strike zone
- which keyword clusters are commercially weak
- whether the account is more product-fit driven or pain-driven

Recommended plotting items:

- lead
- account
- keyword cluster
- XIHE kit
- outreach angle

## 3. Keyword Flow

Purpose:

- visualize how keywords move through the pipeline

Recommended stages:

1. discovered
2. clustered
3. approved
4. used in search
5. used in CRM tagging
6. used in outreach
7. replied or converted

What this should answer:

- which keywords produce real leads
- which keywords only look good on paper
- which keywords are tied to replies or meetings

## 4. Keyword Detail Drawer

Purpose:

- open a specific keyword and show its full business value

Recommended fields:

- keyword
- normalized form
- cluster
- intent
- segment
- related modalities
- recommended search formulas
- recommended CRM tags
- recommended outreach angles
- recommended SEO topics
- status

## 5. Gemini Analysis Panel

Purpose:

- run Gemini-assisted clustering and interpretation inside the module

Recommended outputs:

- cluster suggestions
- duplicate cleanup
- search formula suggestions
- outreach-angle suggestions
- SEO topic suggestions

Important rule:

Gemini should assist interpretation, not replace route verification.

## 6. Campaign Trigger Panel

Purpose:

- turn keyword clusters into actual campaign actions

Actions:

- create target list
- create CRM tag bundle
- create outreach angle package
- create SEO topic batch
- export CSV or JSON

## Data Relationships

Each keyword should be able to connect to:

- lead
- account
- segment
- modality
- buyer role
- pain point
- outreach angle
- SEO topic
- campaign

## Success Criteria

The module is successful when a user can:

1. identify a meaningful keyword cluster
2. understand why it matters
3. find the related accounts
4. trigger outreach or content work from the same place

## XIHE Conclusion

The `Keyword Section` should behave like an operating dashboard, not a static reference page.

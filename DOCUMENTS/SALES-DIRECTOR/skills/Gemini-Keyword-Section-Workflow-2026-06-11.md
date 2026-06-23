# Gemini Keyword Section Workflow

Date: 2026-06-11

## Objective

Use Gemini to turn raw keyword lists into structured keyword intelligence for XIHE.

The output should support:

- search
- CRM tagging
- outreach
- SEO and GEO

## Input Types

Gemini can accept:

- raw keyword lists
- competitor terms
- website page headings
- modality names
- buyer-role phrases
- country or segment constraints

## Required Output Buckets

Every run should classify keywords into:

1. segment
2. modality
3. buyer role
4. pain point
5. route discovery
6. content topic

## Prompt Pattern

```text
You are helping XIHE build a keyword intelligence system for outbound sales and SEO.

I will provide a raw keyword list.

Your tasks:
- normalize duplicate or similar phrases
- group the keywords into clusters
- label each cluster by function
- identify whether each cluster is best used for prospecting, buyer discovery, email route discovery, outreach messaging, or SEO content
- suggest 3 to 5 Google search formulas per major cluster
- suggest CRM tags
- suggest 2 to 3 content topics where relevant

Output as a structured table with these columns:
- keyword
- normalized_keyword
- cluster
- function
- best_use
- search_formula
- crm_tag
- seo_topic
- notes
```

## Operating Rules

### Good Gemini tasks

- finding semantic neighbors
- grouping variants
- identifying intent
- rewriting into cleaner clusters
- turning clusters into reusable search formulas

### Tasks Gemini should not own alone

- verifying official facts
- confirming exact email addresses
- deciding if a contact route is truly launch-ready

## Review Rule

Before keyword outputs are marked approved:

- review the clusters
- remove weak or generic phrases
- keep only commercially useful terms
- separate internal jargon from market language

## Suggested Workflow

1. gather raw keywords
2. run Gemini clustering
3. review cluster quality
4. approve useful clusters
5. export to search formulas
6. export to CRM tags
7. export to SEO queue

## XIHE Conclusion

Gemini is one of the best tools in the workflow for turning rough keyword chaos into a usable keyword operating system.

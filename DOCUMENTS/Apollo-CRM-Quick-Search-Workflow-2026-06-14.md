# Apollo CRM Quick Search Workflow

Date: 2026-06-14

## Goal

Let the XIHE CRM act as the control surface for Apollo lookups.

When a user opens a customer record, they should be able to:

1. search the contact in Apollo
2. inspect basic identity and company data
3. copy the result back into CRM
4. update recon brief and watch fields without leaving the workflow

## Primary Use Case

Example:

- CRM customer record contains `Mike Slemons`
- user clicks the Apollo entry point
- Apollo search opens with name + company context
- user confirms the right match
- key fields are written back to CRM

## Recommended Search Inputs

Use the following priority order:

1. `decision_maker + company_name`
2. `decision_maker + website domain`
3. `decision_maker + city + company_name`
4. `decision_maker only` as fallback

## Fields to Pull Back Into CRM

Core fields:

- full name
- job title
- company name
- company website
- email
- LinkedIn URL
- city
- country
- company description
- company size
- department or functional role

Optional fields:

- work history
- seniority
- verified status
- alternate email
- phone

## CRM Writeback Fields

Store Apollo results into:

- `decision_maker`
- `position`
- `email`
- `linkedin`
- `website`
- `country`
- `city`
- `notes`
- `recon_brief`
- `linkedin_watch_status`

## User Experience Rule

The Apollo entry point should feel like a single-click lookup from inside the customer record.

Preferred behavior:

- open Apollo search with prefilled query
- return to CRM after confirming match
- write back only confirmed values
- keep the recon brief structured

## Matching Rule

Do not overwrite existing CRM values unless the Apollo result is better supported.

Write back only when:

- the name match is strong
- the company match is strong
- the title match is consistent

If Apollo returns multiple candidates, store the ambiguity in notes instead of overwriting.

## LinkedIn Relationship

Apollo should be used as the contact discovery and enrichment layer.

LinkedIn watch should remain the signal layer.

That means:

- Apollo finds the person and basic profile
- LinkedIn watch tracks the public activity
- CRM stores both and triggers follow-up logic

## Implementation Suggestion

Add a CRM-side Apollo button that:

- constructs a search query from current customer data
- opens Apollo in a browser or embedded workflow
- lets the user copy results back into CRM

If API access is available later, the same flow can be upgraded to:

- search Apollo automatically
- suggest the best match
- write back to CRM with a confirm button


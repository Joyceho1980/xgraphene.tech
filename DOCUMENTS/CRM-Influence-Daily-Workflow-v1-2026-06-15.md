## XIHE CRM + Influence Daily Workflow v1

Date: 2026-06-15

## Purpose

This is the daily operating layer for XIHE content and outreach work.

It combines:

- CRM account priority
- LinkedIn signal monitoring
- Quora question capture
- a fixed daily action limit

This is not a full automation system.

It is a decision system that tells Codex what to do each day.

## Core rule

External signals do not set priority by themselves.

Priority is determined by:

`CRM importance x signal freshness x action value`

## Daily sequence

### 1. Start from CRM, not from the feed

Open the CRM focus queue first.

Pick:

- 1 Priority A account
- 1 Priority B account
- 1 industry thinker or validator

Do not start by browsing random LinkedIn posts.

### 2. Capture signals into one sheet

For each account or person checked that day, log one row in the signal sheet.

Required fields:

- Date
- Account
- Person
- Source
- Actor Type
- CRM Priority
- Role Track
- Intent
- Topic
- Signal
- Value
- Action
- Status
- Notes

### 3. Apply the fixed filter

Use this filter exactly:

- `person + high thinking depth -> COMMENT or FOLLOW`
- `company + relevant update -> FOLLOW or MONITOR`
- `scientific question -> SAVE to Quora queue`
- `generic marketing or noise -> IGNORE`

### 4. Respect the daily action cap

Default daily cap:

- 3 LinkedIn comments
- 3 LinkedIn follows
- 2 Quora answers
- unlimited ignore

Do not exceed this unless the user explicitly asks.

### 5. Push output back into system memory

After actions are done, record:

- what was followed
- what was commented
- what was saved for Quora
- what was ignored
- what changed in account priority

## Action definitions

### COMMENT

Use only when all three are true:

- the actor is a real person
- the post contains a viewpoint, judgment, or systems thinking
- the comment can add one useful layer without sounding like a vendor

### FOLLOW

Use when:

- the person is a workflow owner, budget owner, or validator
- the company is a target account
- the page gives useful ongoing signal even without immediate interaction

### SAVE

Use when:

- the item is a mechanism question
- the item can become a Quora answer
- the item reveals repeated audience confusion worth explaining

### IGNORE

Use when:

- the content is generic
- the poster is not strategically relevant
- the post creates no route into CRM, Quora, or thought leadership

## CRM integration rule

Every LinkedIn action must map back to one of these CRM tracks:

- Budget Owner
- Workflow Owner
- Clinical Validator
- Research Validator
- Industry Thinker

If the role is unclear, log it as `Unknown` and do not over-engage.

## Quora integration rule

Quora is not a promotion layer.

Quora is used to:

- capture repeated biological questions
- build explanation authority
- produce reusable insight seeds for LinkedIn comments and posts

Flow:

`Quora question -> answer -> extract one insight sentence -> reuse in LinkedIn when relevant`

## Recognition loop

The desired output is not likes.

The desired output is:

- profile visits from relevant people
- follow-backs from thoughtful operators or clinicians
- future DM or collaboration openings

## Working default

If there is uncertainty, use this order:

1. follow first
2. monitor next
3. comment only when the post deserves it

This keeps the system disciplined and avoids low-value activity.

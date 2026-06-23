# Decision: Agentic Prospecting Architecture For XIHE

Date: 2026-06-11

## Decision

XIHE should not think about AI as a single API call.

XIHE should build an agentic prospecting workflow with clear layers:

1. source collection
2. analysis
3. contact mapping
4. route verification
5. CRM writeback
6. outreach generation
7. follow-up execution

## Current XIHE System Of Record

The current CRM is XIHE's own custom system:

- `D:\CODEX\XIHE-CRM`

This means XIHE does not need to wait for HubSpot or Salesforce integration before testing the workflow.

The custom CRM can be used as:

- the execution layer
- the persistence layer
- the review layer

## Architecture Principle

The goal is not to fully automate judgment.

The goal is to automate repeatable structure while keeping high-value commercial decisions human-reviewed.

## Layer Responsibilities

### 1. Source collection

Collect from:

- official websites
- public contact pages
- public file searches
- LinkedIn or LinkedIn-supported manual research
- optional AI-assisted summary inputs

This layer is for facts and raw signals, not for commercial conclusions.

### 2. Analysis layer

Use an AI model to analyze:

- business model
- pain-point hypotheses
- likely service gaps
- likely buyer roles
- likely best-fit XIHE kit

This layer should produce structured outputs, not only prose.

### 3. Contact mapping layer

Use LinkedIn and public evidence to map:

- budget owner
- workflow owner
- clinical validator
- research validator
- routing contact

This is the buying-committee layer.

### 4. Route verification layer

Use XIHE's own skill and Google workflow to verify:

- official domain
- visible email samples
- naming pattern
- route quality
- whether the account is actually launch-ready

This layer should remain conservative.

### 5. CRM writeback layer

Write into CRM:

- account summary
- pain-point summary
- buyer-role map
- route status
- best-fit kit
- next action
- follow-up schedule

### 6. Outreach generation layer

Generate:

- first-touch draft
- follow-up draft
- role-specific variations
- collaboration-first variants for higher-trust institutions

All outbound copy must follow XIHE's compression rules.

### 7. Follow-up execution layer

The system should track:

- sent
- no reply
- replied
- routed
- follow-up due
- paused

## Model Role Decision

### AI model role

The model is best used for:

- classification
- summarization
- pain analysis
- draft generation
- structured tagging

### Human role

Humans should keep control over:

- final send approval
- evidence-risk calibration
- strong claims
- strategic account entry choice
- whether to lead with product, workflow, or collaboration

## Gemini vs GPT Rule

XIHE should stay model-flexible.

### Gemini can be useful for:

- pain-point analysis
- classification
- structured role scoring
- optional large-context review

### GPT can be useful for:

- more natural outreach writing
- commercial language calibration
- better founder-style drafts
- iterative positioning work

### Working rule

Do not hardwire the whole workflow to Gemini alone.

Use:

- any strong model for analysis
- XIHE workflow for verification
- CRM for persistence

## Important Practical Constraint

LinkedIn automation is not the first thing XIHE should optimize.

The first useful version should be:

- manual or semi-manual input
- AI-assisted analysis
- structured CRM writeback

This is faster to deploy and easier to trust.

## Recommended First PoC

Use 5 to 10 target accounts and test:

1. collect official website facts
2. identify 2 to 4 likely contacts
3. run AI pain analysis
4. assign buyer-role labels
5. assign best-fit kit
6. guess or confirm email pattern
7. write back into CRM
8. generate first-touch email

Success means:

- output is structured
- output is commercially useful
- output is safe enough for review
- the workflow is fast enough to repeat

## Recommended CRM Schema For The PoC

The CRM should store at minimum:

- `Account Name`
- `Official Website`
- `Country`
- `Segment`
- `Modality Stack`
- `Pain Hypothesis`
- `Best-Fit Kit`
- `Buying Committee Role`
- `Primary Contact`
- `Secondary Contact`
- `Email Pattern`
- `Route Quality`
- `Outreach Draft Status`
- `Next Follow-Up Date`
- `Notes`

## Automation Rule

Only automate what is already stable manually.

The sequence is:

1. manual workflow
2. repeatable template
3. CRM writeback standard
4. assisted automation
5. full workflow automation

Do not automate unstable judgment too early.

## XIHE Conclusion

The correct architecture is:

- model-assisted
- CRM-centered
- verification-first
- human-reviewed at the send stage

This is how XIHE can move from one-off outreach to a repeatable outbound operating system.

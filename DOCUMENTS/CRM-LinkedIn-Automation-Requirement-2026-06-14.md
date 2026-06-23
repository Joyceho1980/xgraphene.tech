# CRM LinkedIn Automation Requirement

Date: 2026-06-14

## Goal

Add a LinkedIn watch layer to XIHE CRM so that:

- company pages can be tracked
- personal profiles can be tracked
- new visible activity can trigger a CRM reminder
- Sales Agent can act on commercial signals without manually re-checking every account

This is for the CRM system, not for posting automation.

## Business Need

We already use LinkedIn as a monitoring surface for target accounts.

Current manual workflow:

1. Save the LinkedIn URL in CRM
2. Check the page manually
3. Copy useful observations into notes
4. Create a follow-up later if the post looks commercially relevant

Problem:

- this is too manual
- important updates can be missed
- there is no consistent alert path
- company pages, personal profiles, and multiple contacts on the same account are not modeled cleanly

## Required Outcome

When a watched LinkedIn target changes in a meaningful way, CRM should:

- store the new observation
- create a follow-up/reminder record
- surface it on the dashboard or in a watch queue
- notify Sales Agent that the account needs attention

## Scope

### In scope

- LinkedIn company page watch
- LinkedIn personal profile watch
- multiple watched people per company
- last checked time
- last seen activity fingerprint
- alert/reminder generation when activity changes
- CRM UI display of watched LinkedIn targets

### Out of scope for MVP

- full LinkedIn posting automation
- auto-commenting
- auto-messaging
- scraping private or restricted content
- bypassing login, CAPTCHA, or LinkedIn protections

## Recommended Data Model

The current `customers` table is too narrow for multiple watched LinkedIn targets.

Add a separate table, for example:

### `linkedin_watches`

Suggested fields:

- `id`
- `customer_id`
- `target_type` (`company`, `person`)
- `target_name`
- `target_url`
- `target_role`
- `watch_status` (`Active`, `Paused`, `Disabled`)
- `last_checked_at`
- `last_seen_activity`
- `last_seen_fingerprint`
- `last_alert_at`
- `alert_reason`
- `commercial_signal_tags`
- `sales_agent_notes`
- `created_at`
- `updated_at`

### Why a separate table

- one company can have many watched people
- one account may have both a company page and multiple personal pages
- watch history should not overwrite the main customer record
- it is easier to extend later for other platforms

## CRM Behavior

### 1. Save LinkedIn target

Users should be able to add:

- company page URL
- person profile URL
- optional role or title

### 2. Check target

The system should store:

- date/time of the last check
- what was visible on the page
- a normalized fingerprint of the visible activity

Fingerprint can be based on:

- latest post URL
- latest post timestamp
- latest visible text snippet
- follower count if needed
- activity summary text

### 3. Detect change

If the current fingerprint differs from the previous fingerprint:

- write a new watch event
- create a follow-up/reminder entry
- mark the target as needing review

### 4. Trigger alert

When a change is detected, create an alert if the new content contains one of these commercial-value themes:

- hiring
- new location
- patient-experience improvement
- return-to-play
- sports medicine expansion
- outreach program
- clinical workflow improvement
- partnership
- technology upgrade
- facility upgrade
- leadership change

### 5. Sales handoff

Alert should tell Sales Agent:

- which account changed
- which LinkedIn target changed
- what the visible update was
- why it may matter commercially
- what next action is recommended

## Reminder Logic

Create a CRM follow-up record whenever:

- a watched LinkedIn page changes
- the change is commercially relevant
- the page has not been checked in a while
- a manual note is added by the user

Suggested follow-up record fields:

- `action`: `LinkedIn activity detected`
- `result`: `New signal` / `Needs review`
- `next_step`: short sales instruction
- `channel`: `LinkedIn`
- `follow_up_stage`: `Watch`

## UI Requirements

### Customer detail page

Show a new section:

- watched LinkedIn targets
- target type
- URL
- watch status
- last checked
- last seen activity
- alert reason
- quick action to mark reviewed

### Dashboard

Add a small watch queue:

- overdue LinkedIn checks
- new LinkedIn signals
- accounts with high-value changes

### Account intelligence page

Show:

- watched company pages
- watched people
- signal tags
- suggested next action

## Commercial Signal Classification

When a LinkedIn update is detected, classify it into:

- `Low signal` - ordinary engagement, no action needed
- `Watch` - useful context, no immediate sales action
- `Commercial signal` - Sales Agent should review
- `High priority signal` - immediate follow-up recommended

Examples of `Commercial signal`:

- post about expansion
- hiring for patient experience or operations
- launch of a new service line
- leadership commentary about growth
- mention of recovery workflow, return-to-play, or patient journey improvement

## Safety / Compliance Notes

- Do not automate anything that violates LinkedIn terms in a risky way
- Do not bypass login or bot protections
- Do not collect private data
- Do not message prospects automatically
- Keep the system to monitoring, logging, and reminder generation

## Implementation Suggestion

### Phase 1 - Minimal useful version

- add `linkedin_watches` table
- add CRUD helpers in `utils/database.py`
- allow multiple watch targets per customer
- add watch queue view on dashboard
- create follow-up rows when an alert is generated
- keep manual check entry as fallback

### Phase 2 - Automated watcher

- add a scheduled script or background job
- for each active LinkedIn watch target:
  - open page
  - capture visible activity summary
  - compare with previous fingerprint
  - write alert if changed
- store results in CRM

### Phase 3 - Sales workflow integration

- show alerts in Sales Agent queue
- support one-click assignment
- support follow-up note creation
- support tagging commercial opportunities

## Acceptance Criteria

The task is complete when:

- a company can have multiple LinkedIn watch targets
- a personal profile can be saved as a watch target
- the system stores last checked time and last seen activity
- a new visible update creates a CRM follow-up record
- the dashboard shows a watch/reminder queue
- Sales Agent can see which account needs review
- Beacon-style accounts can be monitored at both company and person level

## Suggested First Accounts To Test

- Beacon Orthopaedics & Sports Medicine
- Andy Blankemeyer
- Mike Slemons

These should be used as seed records to validate the flow end to end.

## Notes For Claude Code

Keep the first implementation simple and robust.

Do not overbuild:

- do not build a generic social media platform
- do not depend on expensive APIs first
- do not break existing CRM follow-up logic

Prefer:

- small schema changes
- explicit reminder records
- simple dashboard visibility
- clear manual override buttons

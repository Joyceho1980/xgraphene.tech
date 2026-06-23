# CRM LinkedIn Automation Task List

## Objective

Add LinkedIn watch support to XIHE CRM so watched company pages and personal profiles can trigger CRM reminders when visible activity changes.

## Current Status

- CRM already stores a basic LinkedIn URL field on customer records.
- CRM already supports watch status, last checked time, recent activity, and notes on customer records.
- Claude Code is developing the next step: a dedicated LinkedIn watch layer that can detect changes and trigger reminders automatically.
- The new implementation should extend, not replace, the existing customer-level LinkedIn fields.
- The current collector design uses `HttpCollector` with `httpx + lxml` for public page collection.
- `linkedin.com/in/ameliadepaola` was reported as returning `200` with fingerprint and activity summary working correctly.
- If more heavily JS-rendered pages are needed later, a `PlaywrightCollector` can be added behind the same `BaseCollector` interface.
- A Windows Task Scheduler job is intended to run the collector every 4 hours.

## Build Tasks

### 1. Add schema

- create a new `linkedin_watches` table
- support multiple watch targets per customer
- store:
  - `customer_id`
  - `target_type` (`company` / `person`)
  - `target_name`
  - `target_url`
  - `target_role`
  - `watch_status`
  - `last_checked_at`
  - `last_seen_activity`
  - `last_seen_fingerprint`
  - `last_alert_at`
  - `alert_reason`
  - `commercial_signal_tags`
  - `sales_agent_notes`
  - timestamps

### 2. Add database helpers

- CRUD helpers for watch targets
- helper to create a follow-up record from a LinkedIn signal
- helper to mark a watch target as checked
- helper to update the last seen fingerprint and activity summary

### 3. Add signal detection logic

- compare the latest fingerprint with the previous fingerprint
- if changed, create a watch event
- if the new content contains a commercial signal, create a CRM reminder

Commercial signal examples:

- hiring
- expansion
- partnership
- leadership change
- patient experience improvement
- return-to-play
- technology upgrade
- facility upgrade
- workflow improvement

### 4. Add UI to customer detail page

- show watched LinkedIn targets
- show last checked time
- show last seen activity
- show alert reason
- add a manual mark-reviewed action

### 5. Add dashboard visibility

- show pending LinkedIn watch items
- show overdue checks
- show new commercial signals

### 6. Keep workflow safe

- do not automate posting or messaging
- do not bypass login or CAPTCHA
- do not collect private data
- keep this as monitoring + reminder generation only

## Acceptance Criteria

- a company can have more than one watched LinkedIn target
- personal profiles can be saved and tracked
- a change in visible activity creates a CRM reminder
- Sales Agent can see what changed and why it matters
- Beacon-style accounts work end to end

## Test Accounts

- Beacon Orthopaedics & Sports Medicine
- Andy Blankemeyer
- Mike Slemons

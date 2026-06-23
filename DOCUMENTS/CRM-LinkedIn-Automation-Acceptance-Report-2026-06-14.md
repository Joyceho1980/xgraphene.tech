# CRM LinkedIn Automation Acceptance Report

Date: 2026-06-14

## Scope

Verify that the XIHE CRM LinkedIn watch layer can:

- store watch targets
- record LinkedIn activity checks
- detect a signal change
- generate a CRM follow-up reminder
- surface alerts in the dashboard

## Verification Result

Status: Passed

## What Was Verified

### 1. Database Layer

- `linkedin_watches` table exists in `D:\CODEX\XIHE-CRM\utils\database.py`
- helper functions exist for:
  - adding watch targets
  - fetching watch targets
  - updating watch targets
  - marking a watch as checked
  - updating fingerprints
  - creating follow-ups from LinkedIn signals
  - getting alert items for the dashboard

### 2. CRM UI Layer

- Customer detail page includes:
  - LinkedIn watch status
  - LinkedIn last checked
  - LinkedIn watch notes
  - LinkedIn watch targets
  - add / edit / delete watch controls
  - manual check recording
  - signal detection and reminder creation
- Dashboard includes:
  - LinkedIn watch alerts section
  - overdue / due soon / recent alert buckets

### 3. End-to-End Test

A real CRM writeback test was executed on HSS record `id = 24`.

Observed result:

- A LinkedIn watch target was created for `Amelia De Paola`
- A simulated LinkedIn signal was processed
- A follow-up reminder was created in CRM
- The watch target was updated with alert metadata
- The dashboard alert queue included the new alert

## Evidence

### Created Follow-Up

- Action: `LinkedIn signal: Amelia De Paola`
- Result: `Signal detected`
- Next step: review LinkedIn change
- Channel: `linkedin`

### Alert State

- Alert reason was stored on the watch target
- CRM customer record `linkedin_watch_status` moved to `Watch closely`
- CRM customer record `linkedin_last_checked` was updated

## Residual Risk

The current implementation proves the CRM-side trigger and reminder flow.
It does not yet prove a live external LinkedIn polling pipeline.

That means:

- CRM-side reminder automation is working
- external LinkedIn data acquisition still needs a dedicated fetch/monitor component if full auto-refresh is required

## Recommendation

Proceed with the next build step:

1. wire a live LinkedIn fetch source or agent input
2. compute and store fingerprints from public activity
3. run the reminder trigger automatically when the fingerprint changes

## Implementation Note

The current collector plan is:

- use `HttpCollector` with `httpx + lxml` for public page collection
- keep the collector behind a shared `BaseCollector` interface
- add `PlaywrightCollector` later only if JavaScript-rendered pages require it
- schedule execution every 4 hours through Windows Task Scheduler

# LinkedIn CRM Watch Workflow

## Goal
Let a LinkedIn Agent monitor strategic CRM customers and keep their records current.

## What to watch
- Company page updates
- Contact profile updates
- New posts
- Comments
- Reposts
- Announcements, expansions, partnerships, and hiring signals

## CRM fields used
- `linkedin_watch_status`
- `linkedin_last_checked`
- `linkedin_recent_activity`
- `linkedin_notes`
- `recon_brief`

## Workflow
1. Mark the account as `Watch` or `Watch closely`.
2. Add the company and contact to the LinkedIn Agent watch list.
3. When a new public signal appears, write it into `linkedin_recent_activity`.
4. Add interpretation in `linkedin_notes`.
5. If the signal is strong, update the `recon_brief` and revisit the email angle.

## Practical rule
- Strategic accounts should stay under watch until the first meaningful reply or meeting.
- Do not let a key account go stale in CRM.


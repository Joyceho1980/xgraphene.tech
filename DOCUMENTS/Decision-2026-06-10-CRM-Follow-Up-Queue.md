# Decision: CRM Follow-Up Queue

Date: 2026-06-10

## What Was Added

- A dedicated follow-up queue helper was added in the CRM data layer.
- The dashboard now groups due follow-ups into:
  - Overdue
  - Today
  - Next 3 Days
  - Next 7 Days
- Each queue row now supports direct actions:
  - Open customer detail
  - Open customer email workflow
- `客户管理` can now sort by `next_follow_up`.

## Why It Matters

This turns the CRM from a passive customer list into a daily action board.

The practical benefit is simple:

- the sales team can see who must be touched now
- overdue accounts become visible immediately
- follow-up timing is no longer buried inside individual records

## Files Updated

- `D:\CODEX\XIHE-CRM\utils\database.py`
- `D:\CODEX\XIHE-CRM\pages\01_仪表盘.py`
- `D:\CODEX\XIHE-CRM\pages\02_客户管理.py`

## Verification

- Python compile check passed for:
  - dashboard page
  - customer management page
  - database helper
- CRM service remained available at `http://127.0.0.1:8501`.
- Data-layer verification returned real queue output, including multiple `Today` follow-ups.

## Next Useful Polish

1. add one-click status actions such as `Mark replied`, `Push 3 days`, `Pause`
2. add overdue follow-up export for daily outreach planning
3. add a separate reply-tracking state in email history

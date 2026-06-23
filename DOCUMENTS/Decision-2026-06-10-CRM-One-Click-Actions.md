# Decision: CRM One-Click Actions

Date: 2026-06-10

## What Was Added

- Dashboard follow-up queue now supports one-click actions:
  - `Push 3d`
  - `Pause`
- Email history now supports one-click response classification:
  - `Mark replied`
  - `Mark no reply`

## Behavior

### Dashboard Queue

- `Push 3d`
  - moves `next_follow_up` forward by 3 days
  - appends a dashboard note into the customer record
- `Pause`
  - updates customer status to `Paused`
  - appends a dashboard note into the customer record

### Email History

- `Mark replied`
  - updates email status to `Replied`
  - promotes customer status to `Negotiating`
  - schedules next follow-up in 3 days
  - writes a follow-up record linked to that email
- `Mark no reply`
  - updates email status to `No Reply`
  - keeps customer in active contact state
  - schedules next follow-up in 3 days
  - writes a follow-up record linked to that email

## Files Updated

- `D:\CODEX\XIHE-CRM\utils\database.py`
- `D:\CODEX\XIHE-CRM\pages\01_仪表盘.py`
- `D:\CODEX\XIHE-CRM\pages\05_邮件中心.py`

## Verification

- Python compile check passed for the updated files.
- CRM service remained available at `http://127.0.0.1:8501`.

## Next Useful Polish

1. add a daily export for overdue follow-ups
2. add a dedicated `Reply Received` / `No Reply` filter in customer list
3. add optional cadence presets by segment such as PT, wellness, OEM

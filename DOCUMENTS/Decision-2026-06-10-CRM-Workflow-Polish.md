# Decision: CRM Workflow Polish - Follow-Up and Email Linkage

Date: 2026-06-10

## What Was Improved

- `客户详情` now includes a `Pipeline Controls` block for direct updates to:
  - status
  - priority
  - next follow-up date
  - pipeline note
- `Follow Records` now do more than log activity. They also:
  - capture channel
  - capture follow stage
  - suggest a status based on the follow result
  - optionally update customer priority
  - append an internal note into the customer record
  - update the customer's `next_follow_up`
- `邮件中心` now links sent-email actions back into follow management:
  - saving a sent record also creates a follow-up record
  - the user sets the next follow-up date at send time
  - the user sets the follow stage at send time
  - a `To Contact` customer is promoted to `Contacted` after the first sent email

## Why This Matters

The CRM is now closer to a real outbound operating system instead of a static database.

Before this pass:
- follow records were mostly passive history
- email history and follow workflow were partly disconnected

After this pass:
- each touch can move pipeline state
- each sent email can automatically create the next follow-up anchor
- next actions become more visible and easier to maintain

## Files Updated

- `D:\CODEX\XIHE-CRM\pages\03_客户详情.py`
- `D:\CODEX\XIHE-CRM\pages\05_邮件中心.py`

## Verification

- Python compile check passed for the updated CRM page files.
- Local CRM service remained available at `http://127.0.0.1:8501`.

## Natural Next Step

The next useful polish pass should focus on:

1. follow-up queue view by due date and overdue priority
2. reply/no-reply handling in email history
3. a clearer sales cadence model such as:
   - Email 1
   - Follow-up 1
   - Follow-up 2
   - Breakup / Pause

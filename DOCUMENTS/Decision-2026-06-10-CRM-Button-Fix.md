# CRM Button Flow Fix - 2026-06-10

## Problem
- On `http://localhost:8501/客户管理`, the `Edit`, `Email`, and bottom quick action buttons appeared to do nothing.
- On `客户详情`, clicking `Generate email from customer data` looked like it did nothing.

## Root Cause
- `D:\CODEX\XIHE-CRM\pages\02_客户管理.py` used a mojibake page path in `st.switch_page(...)`, so button clicks targeted the wrong page identifier.
- `D:\CODEX\XIHE-CRM\pages\03_客户详情.py` used tabs without persisting the active email section. After clicking `Generate email`, Streamlit reran and dropped the view back to `Basic Info`, making generation appear broken.

## Fix Applied
- Rewrote `D:\CODEX\XIHE-CRM\pages\02_客户管理.py`
  - correct detail-page route: `pages/03_客户详情.py`
  - stable `Edit` / `Email` / quick action navigation
  - `Email` now opens the detail page in email mode
- Rewrote `D:\CODEX\XIHE-CRM\pages\03_客户详情.py`
  - replaced passive tab flow with a persisted `Section` radio
  - `detail_open_email_tab` now forces `Email Records` on entry
  - email generation remains visible after rerun
  - reset generated email state per customer

## Verification
- Verified in browser on June 10, 2026:
  - list `Edit` button opens customer detail
  - list `Email` button opens customer detail directly in email section
  - bottom `Open` button works
  - bottom `Open Email` button works
  - `Generate email from customer data` produces subject/body and keeps the user in the email section

## Remaining Cleanup
- Some imported CRM labels and source values still show mojibake like `???` because `utils/config.py` and older helper mappings contain corrupted legacy strings.
- Functional flow is fixed; data-label cleanup can be handled as a separate pass.

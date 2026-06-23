# Decision: CRM Launcher Stability Pass

Date: 2026-06-10

## What Was Confirmed

- `D:\CODEX\XIHE-CRM\app.py` now runs cleanly in foreground with Streamlit.
- A controlled launch test returned `HTTP 200` from `http://127.0.0.1:8501`.
- The previous syntax crash in `app.py` is resolved.
- `客户管理`, `客户详情`, `邮件中心`, and `数据统计` were already repaired in the earlier cleanup pass.
- Streamlit `use_container_width` deprecation calls were replaced with `width="stretch"` across the CRM pages to keep logs cleaner during future debugging.

## Launcher Changes

- Desktop shortcut chain was simplified away from the scheduled-task route.
- `launch_xihe_crm_hidden.vbs` now calls:
  - `launch_xihe_crm_hidden.ps1`
- `launch_xihe_crm_hidden.ps1` now launches:
  - `launch_xihe_crm_detached.py`
- `launch_xihe_crm_detached.py` is responsible for:
  - checking whether port `8501` is already open
  - attempting to spawn Streamlit in a detached mode
  - writing the Streamlit PID to:
    - `DOCUMENTS/SALES-DIRECTOR/logs/xihe-crm-streamlit.pid`

## Current Technical Read

- The CRM app itself appears stable.
- The remaining instability is specific to background persistence when launched from the Codex execution environment.
- Evidence:
  - foreground run stays healthy and serves `8501`
  - detached/background attempts still disappear after the parent tool process ends
  - no new Python traceback from the CRM app was produced during these background failures

## Working Assumption

The most likely cause is parent-session/job cleanup in the Codex tool environment rather than an application crash inside Streamlit.

## Next Practical Verification

- Test the desktop shortcut `XIHE CRM` directly from the Windows desktop session.
- If the shortcut stays up there, treat the launcher as acceptable for daily use and ignore Codex-side background reaping.
- If it still dies from the desktop session, move to a Windows-native persistence layer outside Codex, such as a user-owned scheduled task or service wrapper.

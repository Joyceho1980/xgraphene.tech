# LAUCH VERSION Script Cleanup

Date: 2026-06-14

## What Changed

Moved root-level utility scripts into:

- `D:\CODEX\LAUCH VERSION\tools\maintenance`

## Scripts Moved

- `add_quick_answer.py`
- `create_logo_versions.py`
- `fix_all_issues.py`
- `fix_titles.py`
- `rebuild_hub_sections.py`
- `remove_bg.py`
- `replace_logo.py`
- `restore_explore.py`
- `step1-check-creds.js`
- `step2-test-api.js`
- `submit-index.js`
- `upgrade_articles.py`

## What Was Left in Place

- `codex.bat`
- `codex-cli.bat`
- `RUN-SUBMIT.bat`
- `RUN-SUBMIT.ps1`
- `STEP2.bat`
- `TEST-PROXY.bat`
- site config files
- site runtime files

## Reason

The moved files are utility scripts, not website page content.
The launchers were left in the root so the current operational entry points do not break.


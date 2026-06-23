# Decision: Gemini Config Location

Date: 2026-06-11

## Decision

Gemini configuration for XIHE sales work should live with the CRM and sales system, not with the website project.

Approved local config path:

- `D:\CODEX\XIHE-CRM\config\gemini.local.json`

## Reason

- `D:\CODEX\LAUCH VERSION` is the website project
- Gemini prospecting and CRM analysis belong to the sales execution layer
- the key should remain local-only and stay out of version control

## Supporting Files Added

- `D:\CODEX\XIHE-CRM\.gitignore`
- `D:\CODEX\XIHE-CRM\config\gemini.local.json`
- `D:\CODEX\XIHE-CRM\utils\gemini_config.py`

## Notes

- `gemini.local.json` is intended for local machine use only
- it should never be committed
- the config loader currently validates presence, JSON validity, and placeholder replacement

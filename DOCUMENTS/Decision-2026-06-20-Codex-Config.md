# Decision: Codex Configuration Lives in Workspace Root

Date: 2026-06-20

## Decision
Move Codex-facing configuration into the project workspace root so it is visible during normal Codex work on `D:\CODEX\LAUCH VERSION`.

## New Files
- `CODEX_AGENTS.md` - Codex collaboration protocol
- `CODEX_SOUL.md` - Codex role and tone profile

## Separation of Responsibilities
- Codex: page-level implementation, structure, readability, visual hierarchy
- Claude Code: SEO / GEO
- HERMES AGENT: approval gate for Codex work

## Notes
- Keep Claude-related configuration separate in `D:\CODEX\.claude\`
- Preserve a clear boundary between page work and search-optimization work

# TASK 2026-06-21-03: Fix Sleep Article Routing and Images

**Source:** HERMES Agent → Codex
**Status:** Completed
**Date:** 2026-06-21

## Completed Work
- Fixed production routing for `/SCIENCE/KNOWLEDGE/Sleep/why-cant-i-fall-asleep-at-night.html`.
- Restored production deployment after `vercel.json` BOM parsing failure.
- Added rewrites for `/VISUAL-LIBRARY/:path*` and `/PICTURE/:path*` so article images load again.
- Re-deployed production and verified the page opens successfully.

## Verification
- Confirmed the page no longer returns `404: NOT_FOUND`.
- Confirmed the article hero and inline images are visible online.

## Notes
- The production site is routed from the repository root, with content under `WEBSITE/pages/` and assets under `ASSETS/`.
- The Sleep article uses `VISUAL-LIBRARY` image URLs, so that route must remain mapped.
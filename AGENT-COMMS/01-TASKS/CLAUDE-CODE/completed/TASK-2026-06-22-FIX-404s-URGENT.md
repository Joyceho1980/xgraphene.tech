# TASK: Urgent — Fix 404s on xgraphene.tech

## Priority: P0 🔴
## Created: 2026-06-22
## Source: Full site link scan found 40+ pages returning 404 on xgraphene.tech

## Problem
A full link scan of all 120 HTML pages found that 40+ pages return 404 when accessed via https://www.xgraphene.tech. The local files exist in `WEBSITE/pages/` but are not reachable online. Example pages returning 404:

- `/SCIENCE/KNOWLEDGE/graphene-fir/how-to-evaluate-fir-heating-film.html`
- `/SCIENCE/KNOWLEDGE/graphene-fir/what-is-far-infrared-radiant-efficiency.html`
- `/SCIENCE/KNOWLEDGE/graphene-fir/ontology.html`
- `/SCIENCE/KNOWLEDGE/graphene-fir/comparison.html`
- `/SCIENCE/KNOWLEDGE/Sleep/why-do-i-wake-up-at-430am.html`
- `/SCIENCE/KNOWLEDGE/Sleep/why-cant-i-fall-asleep-at-night.html`
- `/SCIENCE/KNOWLEDGE/Fatigue/*` (all 6 articles)
- `/SCIENCE/KNOWLEDGE/Inflammation/*` (all articles)
- `/SCIENCE/KNOWLEDGE/Mitochondria/*` (all articles)
- `/SCIENCE/KNOWLEDGE/cellular-energy/*` (all articles)
- `/technology/xihe-fir-film-performance.html`
- `/graphene-fir/what-is-emissivity/`

And many more.

## Hypothesis
Likely causes (check in this order):
1. **Vercel rewrites are missing** — `vercel.json` doesn't have catch-all rules for `/SCIENCE/KNOWLEDGE/*` → `WEBSITE/pages/SCIENCE/KNOWLEDGE/*`
2. **Deployment incomplete** — Files exist locally but weren't deployed to Vercel (maybe build step skipped `WEBSITE/pages/`)
3. **Path mismatch** — The actual deployed paths differ from what HTML pages reference

## Investigation Steps

### Step 1: Check vercel.json
Look at `/mnt/d/CODEX/LAUCH VERSION/xgraphene-website-vite/vercel.json` or wherever Vercel config lives. Check if there are rewrite rules for the static HTML paths.

### Step 2: Check deployment source
Run `vercel list` or check `.vercel/project.json` to see what the deployment source directory is. Then verify that ALL files under `WEBSITE/pages/` are included in the deploy.

### Step 3: Test a specific page
Run `curl -I https://www.xgraphene.tech/SCIENCE/KNOWLEDGE/graphene-fir/how-to-evaluate-fir-heating-film.html` to confirm the 404 and see what Vercel returns (could be a SPA fallback issue).

## Fix Options

### Option A: Add missing rewrite rules to vercel.json
Add:
```json
{
  "rewrites": [
    { "source": "/:path*", "destination": "/:path*" },
    { "source": "/SCIENCE/KNOWLEDGE/:path*", "destination": "/SCIENCE/KNOWLEDGE/:path*" },
    { "source": "/technology/:path*", "destination": "/technology/:path*" }
  ]
}
```

### Option B: Build step copies static HTML to output directory
Make sure the build script copies `WEBSITE/pages/` into the Vercel output directory (usually `dist/` or `.vercel/output/static/`).

## Verification
After fixing:
- [ ] `curl -I https://www.xgraphene.tech/SCIENCE/KNOWLEDGE/graphene-fir/how-to-evaluate-fir-heating-film.html` returns 200
- [ ] `curl -I https://www.xgraphene.tech/Science/KNOWLEDGE/Sleep/why-do-i-wake-up-at-430am.html` returns 200
- [ ] `curl -I https://www.xgraphene.tech/technology/xihe-fir-film-performance.html` returns 200
- [ ] Run the full link check script: `python3 /tmp/link_check.py` and confirm 0 external 404s for xgraphene.tech links

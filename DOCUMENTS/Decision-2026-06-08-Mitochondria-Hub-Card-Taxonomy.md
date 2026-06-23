# Decision - 2026-06-08

## Mitochondria Hub Card Taxonomy Update

### What changed
- Reworked `SCIENCE/KNOWLEDGE/Mitochondria/index.html` into a richer hub presentation with visible article-type labels:
  - `Beginner`
  - `Advanced`
  - `Research Summary`
  - `Overview`
  - `Research Data`
- Added clearer summaries written in question-answer style.
- Added `Links to:` hints on each card to make the knowledge graph explicit.
- Added action buttons:
  - `Quick Read`
  - `Full Article`
  - `Quick Answer` / `Open FAQ` for the hub overview card
- Added a structured-data `ItemList` block so the article type and educational level are machine-readable.

### Anchor targets added
- `SCIENCE/KNOWLEDGE/Mitochondria/what-is-mitochondrial-health.html`
- `SCIENCE/KNOWLEDGE/Mitochondria/mitochondrial-function-recovery.html`
- `SCIENCE/KNOWLEDGE/Mitochondria/mitochondrial-function-far-infrared.html`
- `SCIENCE/KNOWLEDGE/Mitochondria/atp-study.html`

Each page now exposes a `#quick-answer` anchor at the first summary section.

### Notes
- The original compressed hub block was left in the file but hidden with CSS to avoid breaking the existing markup while the new hub grid renders above it.
- The hub page still keeps its existing FAQ and breadcrumb schema.

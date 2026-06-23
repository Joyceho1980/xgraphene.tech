# Decision: Trend Intelligence inside XIHE CRM

Date: 2026-06-13

## What we decided
- Google Trends will be treated as an in-CRM research source, not a separate system.
- The CRM should expose deep links into Google Trends for each analyzed keyword.
- Trend signals should flow into keyword clustering, CRM tags, and account discovery.

## Why
- A direct iframe-style embed of Google Trends is fragile.
- Deep links are stable and keep the CRM as the working surface.
- The most valuable workflow is:
  keyword -> trend signal -> search formula -> account discovery -> CRM tag -> outreach

## Implemented so far
- Keyword Intelligence page now exposes Google Trends links for the current input.
- Trend Intelligence page now exposes Google Trends links for matched trend terms.
- A standalone Trend Intelligence engine was added to turn notes into CRM-ready signals.

## Next build step
- Add a Trend-to-Account panel that outputs:
  - trend cluster
  - recommended search formula
  - CRM tags
  - next account pool
  - outreach angle


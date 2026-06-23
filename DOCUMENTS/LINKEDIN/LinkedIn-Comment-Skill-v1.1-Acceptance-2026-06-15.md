## XIHE LinkedIn Comment Skill v1.1 Acceptance

Date: 2026-06-15

Skill reviewed:

- `D:\XIHE-ENGLISH-KB\skills\linkedin-comment-skill.md`

## Acceptance summary

### Passed

1. `/li-watch` is now correctly positioned as the primary mode
2. `/li-scan` now has an early-stop rule for feed contamination
3. scoring is much closer to the XIHE local comment engine
4. age gate is now explicit
5. input resolution is clearer: URL -> CRM -> name
6. formatting is cleaner than v1.0

## Real-world test verdict

### `/li-scan`

Result:

- early-stop logic is justified by the real feed
- the actual feed is still heavily contaminated by old jewelry/luxury graph signals

Operational conclusion:

- `/li-scan` should stay secondary
- do not use it as the main work surface yet

### `/li-watch` on Beacon company page

Result:

- good extraction target
- recent posts are readable and actionable
- suitable for company monitoring and occasional company-post comments

Operational conclusion:

- company watch works

### `/li-watch` on Mike Slemons

Result:

- posts view is empty
- comments view contains meaningful intelligence
- most visible activity is older than 14 days

Operational conclusion:

- age gate works conceptually
- comment generation should be suppressed here
- monitor-signal output is the right behavior

## Remaining gaps

### Gap 1: 3-layer fallback is not fully implemented in the execution section

The top-level person procedure says:

- Posts
- Comments
- All activity

But the execution rules later still say:

- `If person: scan Posts -> Comments`

Missing:

- explicit `All activity` fallback in execution steps

Fix:

- add `Comments -> All activity` as the full fallback chain everywhere

### Gap 2: encoding artifacts are still present

Examples still visible in the file:

- `鈥?`

This means the ASCII cleanup is not fully complete.

Fix:

- normalize remaining broken punctuation and arrows

### Gap 3: Actor Quality definitions became less explicit for company pages

The scoring section now says:

- `3` authority
- `2` clinical/research background
- `1` general practitioner in relevant field
- `0` pure sales / unrelated

But company pages are still a main `/li-watch` input.

Missing:

- explicit statement that company pages are usually `Actor Quality = 1`

Fix:

- make company-page scoring explicit to avoid inconsistent human interpretation

### Gap 4: no explicit Phase 1 identity-recalibration mode inside the skill

The local XIHE LinkedIn system now knows:

- the account is still in identity recalibration
- target watch is primary
- only tightly anchored topics should be acted on

The skill does not yet encode this as an operating mode.

Fix:

- add a short `Phase 1` rule block:
  - prefer `MUST` only
  - strict topic anchoring
  - treat `/li-scan` as correction check, not main source

### Gap 5: company post comments still need one more practical guardrail

Right now the system can still produce comment opportunities from some company posts.

That is acceptable, but it should be constrained.

Fix:

- add rule:
  - company-page posts require either workflow philosophy, patient experience logic, or strategic direction
  - otherwise downgrade to watch

### Gap 6: monitor-signal output should say what to do with the signal

Current output says:

- save as intelligence

Missing:

- how that intelligence changes the next step

Fix:

- add a small field:
  - `Use:` outreach angle / role hypothesis / monitoring theme / ignore later

## Best next optimization list

1. add `All activity` fallback everywhere
2. finish ASCII cleanup
3. add explicit company-page actor scoring
4. add `Phase 1 identity recalibration` mode
5. tighten company-post comment guardrails
6. enrich monitor-signal output with next-step use

## Final judgment

v1.1 is usable now.

It is no longer a generic comment toy.

It is a real target-watch skill.

But it still needs one more tightening pass before I would call it fully aligned with the XIHE LinkedIn operating system.

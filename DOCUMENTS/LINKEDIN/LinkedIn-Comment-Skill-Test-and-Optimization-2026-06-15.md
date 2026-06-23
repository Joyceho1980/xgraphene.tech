## XIHE LinkedIn Comment Skill - Test And Optimization

Date: 2026-06-15

Target skill reviewed:

- `D:\XIHE-ENGLISH-KB\skills\linkedin-comment-skill.md`

## Test scope

This test checked:

- feed scan viability
- targeted watch viability
- skill logic fit against the real Joyce LinkedIn account
- current feedback log state

## Real test results

### 1. `/li-scan` feed scan

Status: `works technically, weak strategically`

Observed feed sample included:

- Adrian Cheng
- Vacheron Constantin
- Nanis
- jewelry and luxury brand content
- one relevant health/performance post from Anthony Vennare

Conclusion:

- the browser extraction works
- the feed is still contaminated by the account's old luxury/jewelry graph
- this confirms the skill's own edge-case note is correct

Decision:

- `/li-scan` should remain secondary
- it should not be the main source of comment opportunities

### 2. `/li-watch` company page test: Beacon

Status: `works well`

Observed:

- recent posts were extractable
- post text and engagement numbers were readable
- company positioning and PT workflow themes were visible

Conclusion:

- company-target watch is usable
- good for monitoring and occasional company-post comments

### 3. `/li-watch` person profile test: Mike Slemons

Status: `partially works, current design is too narrow`

Observed:

- `recent-activity/posts` returned: `Nothing to see for now`
- `recent-activity/comments` returned rich signal
- Mike's comments revealed useful themes:
  - athletic trainer shortage
  - ROI at high school sports level
  - growth and work-environment concerns

Conclusion:

- people with low posting frequency may still be high-value watch targets
- scanning `posts only` misses real signal
- comments and reposted discussions are often more revealing than original posts

### 4. Feedback log

Status: `initialized only`

Current state:

- only a test row exists
- no real performance memory yet

Conclusion:

- self-evolution logic is fine in principle
- but it has no real signal yet

## What is already good in the skill

### Strong points

1. hard boundaries are good
2. no-product and no-vendor rule is correct
3. the warning about algorithm mismatch is correct
4. comment types are useful and practical
5. the feedback-log idea is worth keeping

## Main problems to fix

### Problem 1: `/li-watch` is defined too narrowly

Current problem:

- the skill assumes a person should be scanned through `Posts`
- real targets like Mike may have little or no recent posting

Fix:

For people, `/li-watch` should scan in this order:

1. `Posts`
2. `Comments`
3. `Reposts / all activity`

If `Posts` is empty, the skill should automatically fall back to `Comments`.

### Problem 2: feed mode is too expensive for too little value

Current problem:

- `/li-scan` can technically extract posts
- but most extracted posts are irrelevant due to old graph contamination

Fix:

Add an early-stop rule:

- if more than `70%` of the first 10 extracted posts are outside health / recovery / science / operator relevance
- stop scoring the feed
- return:
  - `Feed still off-target`
  - `Use /li-watch on CRM targets instead`

### Problem 3: skill scoring does not match the current XIHE comment engine

Current problem:

- the skill uses a 5-dimension, 15-point model
- the local LinkedIn system now uses:
  - actor quality
  - thinking depth
  - comment surface area
  - strategic relevance

This creates two competing systems.

Fix:

Unify terminology.

Recommended mapping:

- `Domain Match` -> `Strategic Relevance`
- `Entry Space` -> `Comment Surface Area`
- `Author Value` -> `Actor Quality`
- `Content Quality` -> fold into `Thinking Depth`
- `Engagement Heat` -> keep as a secondary tie-breaker, not a core scoring pillar

Best direction:

- move from `5 x 0-3 = 15`
- to a core `4-factor decision engine`
- keep engagement as an overlay, not as a main driver

### Problem 4: the skill does not distinguish fresh opportunity from old signal

Current problem:

- Mike comments page had useful signals, but many were months old
- old activity can help CRM understanding, but is usually not commentable

Fix:

Split output into:

- `Comment Opportunity`
- `Monitor Signal`

Rule:

- if activity is older than `14 days`, do not generate a comment draft by default
- instead save it as:
  - topic intelligence
  - target-mapping insight

### Problem 5: person watch should accept direct URL

Current problem:

- `/li-watch <company/person name>` is ambiguous
- LinkedIn names are often duplicated

Fix:

Allow:

- `/li-watch <linkedin-url>`
- `/li-watch crm:<account/person>`

Best order of resolution:

1. direct URL
2. CRM match
3. manual name search

### Problem 6: the decision router table is malformed

Current problem:

- the markdown ranges display incorrectly
- `12–15`, `8–11`, `5–7`, `0–4` are partially broken

Fix:

Normalize to plain ASCII:

- `12-15`
- `8-11`
- `5-7`
- `0-4`

Also normalize all arrows to `->`.

## Recommended v1.1 changes

### Keep

- hard boundaries
- comment types
- feedback log
- human approval requirement

### Change immediately

1. make `/li-watch` the default operating mode
2. for people, scan `Posts -> Comments -> All activity`
3. early-stop `/li-scan` when feed contamination is high
4. separate `fresh commentable signal` from `old intelligence signal`
5. unify scoring vocabulary with the current XIHE LinkedIn comment system
6. support direct LinkedIn URL input
7. clean formatting and encoding artifacts

## Suggested operating rule right now

Until the skill is updated:

### Use

- `/li-watch` for CRM accounts
- targeted company pages
- targeted person profiles

### Avoid relying on

- `/li-scan` as the main discovery source

## One-sentence summary

The skill is usable, but it becomes much stronger once it stops treating LinkedIn as a generic feed problem and starts treating it as a target-watch problem.

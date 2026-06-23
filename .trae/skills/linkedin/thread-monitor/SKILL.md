---
name: "linkedin-thread-monitor"
description: "Monitors LinkedIn activity for company page, founder profile, and target accounts. Detects commercial signals and routes them to CRM. Invoke when user wants to track LinkedIn engagement, monitor competitors, or watch for prospect signals."
---

# LinkedIn Thread Monitor — Signal Detection & Tracking

## Purpose
Continuously monitor LinkedIn for:
1. **Own post performance** — Track engagement on founder/company posts
2. **Target account activity** — Watch key prospects/companies for trigger events
3. **Competitor intelligence** — Monitor competitor content performance
4. **Industry signals** — Trending topics, news, regulatory changes

## What Counts As a Signal

### Tier 1 Signals (Immediate Action Required)
| Signal | Description | Route To |
|--------|-------------|---------|
| Direct inquiry on post | Comment asking about product/pricing/demo | CRM Router → Sales follow-up |
| Competitor mention | Someone mentions competitor in context of your space | CRM Router → Competitive intel |
| Job posting change | Target company posts new role in relevant department | CRM Router → Outreach opportunity |
| Funding announcement | Target company raises round | CRM Router → Upsell opportunity |

### Tier 2 Signals (Log & Review)
| Signal | Description | Action |
|--------|-------------|--------|
| Post engagement spike | Own post getting unusual reach/virality | Amplify with replies, note what worked |
| Influencer engagement | Industry thought leader engages with your content | Follow up relationship |
| Comment question unanswered | Someone asked a question >4h ago with no reply | Alert for reply-handler |

### Tier 3 Signals (Background Intelligence)
| Signal | Description | Action |
|--------|-------------|--------|
| Competitor new post | Competitor published, check performance | Log for competitive analysis |
| Industry trending topic | Keywords spiking in your space | Consider content response |
| Personnel change | Target company hire/fire/key departure | Update CRM record |

## Monitoring Configuration

### Accounts to Watch
Define in config file: `D:\CODEX\LAUCH VERSION\.trae\skills\linkedin\thread-monitor\watchlist.json`

```json
{
  "own_accounts": {
    "founder_profile": "[LinkedIn URL]",
    "company_page": "[LinkedIn URL]"
  },
  "target_accounts": [
    {"name": "[Company Name]", "url": "[URL]", "tier": "A/B/C"},
    {"name": "[Person Name]", "url": "[URL]", "tier": "A/B/C"}
  ],
  "competitors": [
    {"name": "[Competitor]", "url": "[URL]"}
  ],
  "keywords": ["graphene FIR therapy", "far infrared recovery", "mitochondrial health"]
}
```

### Check Frequency
| Account Type | Check Interval | Method |
|--------------|---------------|--------|
| Own posts (active) | Every 2 hours for first 24h, then daily | API / Manual scrape |
| Target accounts | Daily | API / Manual scrape |
| Competitors | Weekly | API / Manual scrape |
| Keyword alerts | Real-time (via Google Alerts or similar) | Webhook |

## Engagement Metrics to Track

For each own post, log:
- Impressions (reach)
- Unique views
- Likes
- Comments (count + sentiment)
- Reposts
- Click-through rate (if link included)
- Follower change (net gain/loss)

Calculate **Engagement Rate** = (Likes + Comments + Reposts) / Impressions

Benchmark rates (B2B tech founder):
- Good: > 4%
- Average: 2-4%
- Below average: < 2%

## Output: Daily Digest

```markdown
# LinkedIn Monitor Digest
Date: [date]

## Own Post Activity
### Post: "[title]" ([link])
- Age: [hours since publish]
- Impressions: [n]
- Engagement rate: [x%]
- Status: [active/cooling down/archived]
- Pending actions: [replies needed? signals detected?]

## New Signals Detected
### [Tier] - [Signal Type]
- Source: [who/where]
- Detail: [what happened]
- Suggested action: [what to do]
- Routed to: [CRM Router / Reply Handler / None]

## Background Intel
- Competitor post: [summary]
- Trending topic: [summary]
- Keyword alert: [summary]
```

## Tools & Methods
- **Manual**: User shares screenshots/links → Agent parses and logs
- **API**: LinkedIn Marketing API (requires business account)
- **Scraping**: Playwright-based (like NEXUS system) — use carefully per LinkedIn ToS
- **Google Alerts**: Set up for keyword monitoring
- **RSS feeds**: For public LinkedIn activity where available

## Integration
- Receives post URLs from `post-writer` after publishing
- Sends signals to `crm-router` for commercial opportunities
- Sends reply needs to `reply-handler`
- Feeds performance data to `hook-extractor` (top performers)
- Feeds pillar performance to `content-planner` (adjustment input)

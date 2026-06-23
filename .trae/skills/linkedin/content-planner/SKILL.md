---
name: "linkedin-content-planner"
description: "Builds weekly/monthly LinkedIn content calendar for XIHE founder profile. Balances content pillars, timing, and topic variety. Invoke when user wants to plan content schedule, create posting cadence, or organize LinkedIn strategy."
---

# LinkedIn Content Planner — Editorial Calendar Builder

## Purpose
Create structured content plans for the founder's LinkedIn. Ensures consistent posting while maintaining quality and pillar balance.

## Posting Cadence Recommendation

| Level | Frequency | Posts/Month | Best For |
|-------|-----------|-------------|----------|
| Minimum | 2x/week | 8-9 | Maintaining presence |
| Active | 3x/week | 12-13 | Building audience |
| Aggressive | 4-5x/week | 18-20 | Rapid growth phase |

**Recommendation for XIHE founder**: Start at **3x/week** (Mon/Wed/Fri or Tue/Thu/Sat).

## Content Pillar Distribution

For every 10-post cycle, distribute as follows:

| Pillar | Posts | Rationale |
|--------|-------|-----------|
| **Recovery / Sports Medicine** | 3 | Core product fit, largest addressable pain point |
| **Aging / Energy / Longevity** | 2 | Broad appeal, wellness trend alignment |
| **Sleep / Stress** | 2 | Universal pain point, high emotional resonance |
| **Technology Truth / Science** | 2 | Credibility builder, founder expertise |
| **Company Update / Milestone** | 1 | Shows progress, builds trust (not promotional) |

**Never exceed 20% promotional content** (company updates should be story-driven, not feature-listing).

## Timing Strategy

### Best Times to Post (North America focused)
- **Tuesday & Thursday**: 8:00-10:00 AM EST (decision makers morning routine)
- **Wednesday**: 12:00-1:00 PM EST (lunch scroll)
- **Saturday**: 9:00-11:00 AM EST (weekend reflection mode)

### Worst Times
- Monday morning (inbox overload)
- Friday after 4 PM (checked out)
- Major US holidays

## Planning Output Format

```markdown
# XIHE LinkedIn Content Plan
Period: [Week of X / Month of X]

## Calendar View

| Day | Date | Pillar | Topic/Hook Idea | Status |
|-----|------|--------|-----------------|--------|
| Mon | MM/DD | Recovery | Athlete ice bath frustration | Draft |
| Wed | MM/DD | Technology Truth | Graphene purity problem | Idea |
| Fri | MM/DD | Aging | 47yo planning retirement around energy | Research |

## Topic Queue (for future weeks)
1. [Topic idea - pillar]
2. [Topic idea - pillar]
3. ...

## Key Dates This Period
- [Industry events to reference/tie into]
- [XIHE milestones or announcements]
- [Awareness days / observances relevant to pillars]

## Performance Review (from last period)
- Top performing post: [link] - [why it worked]
- Underperformer: [link] - [hypothesis for why]
- Adjustment for this period: [what to change]
```

## Workflow

### Phase 1: Audit (First Run Only)
1. Review last 30 days of posts (if any exist)
2. Categorize each by pillar
3. Note top/bottom performers
4. Identify gaps (over-represented or missing pillars)

### Phase 2: Generate
1. Check key dates (XIHE milestones, industry events, awareness days)
2. Pull from topic queue (user-provided + AI-suggested)
3. Assign pillars to maintain distribution
4. Generate hook ideas for each slot
5. Assign draft/research/publish status

### Phase 3: Handoff
- Draft items → `post-writer`
- Published items → `thread-monitor` (for tracking)
- Lead signals → `crm-router`

## Topic Generation Sources
- XIHE science knowledge base (`SCIENCE/` directory)
- Industry news (graphene, FIR therapy, wellness tech)
- Customer stories / case studies (anonymized)
- Competitor content (what's getting engagement)
- Personal founder experiences
- Questions from comments on previous posts
- `hook-library.md` patterns

## Recurrence Rules
- Same pillar should not appear in consecutive posts
- Technology Truth posts should alternate between accessible and deep-dive
- Every 4th week should include one "personal/story" post (founder journey)
- Company updates should be spaced minimum 2 weeks apart

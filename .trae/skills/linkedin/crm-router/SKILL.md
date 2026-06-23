---
name: "linkedin-crm-router"
description: "Converts LinkedIn signals into actionable CRM tasks: reminders, notes, sales handoffs, follow-ups. Invoke when a LinkedIn interaction needs to become a tracked business action."
---

# LinkedIn CRM Router — Signal-to-Action Router

## Purpose
Take useful signals from LinkedIn (from thread-monitor, reply-handler, or manual observation) and convert them into structured CRM records. This is the bridge between social activity and sales pipeline.

## Signal Classification Matrix

### Classify Every Signal Into One of These Routes

| Route | Trigger Condition | Output | SLA |
|-------|-----------------|--------|-----|
| **HOT LEAD** | Direct product interest, pricing question, demo request | Salesforce/CRM lead + immediate alert | < 1 hour |
| **WARM PROSPECT** | Engaged with science content, asked technical question, works in target industry | CRM contact + nurture sequence | < 24 hours |
| **PARTNERSHIP SIGNAL** | From potential distributor, reseller, clinic owner, hotel wellness director | Partnership pipeline record | < 48 hours |
| **INFLUENCER / MEDIA** | Journalist, researcher, or industry thought leader engaged | Media relations tracker | < 1 week |
| **COMPETITOR INTEL** | Mention of competitor, someone working with competitor | Competitive intel log | < 72 hours |
| **GENERAL CONTACT** | Positive engagement but no clear commercial signal yet | Contact database entry | < 1 week |
| **NOISE** | Generic like, spam, off-topic, low-quality | Discard (log only) | N/A |

## CRM Record Structure

### For HOT LEAD
```json
{
  "record_type": "hot_lead",
  "source": "linkedin",
  "source_detail": "comment on post [post_url] by [person]",
  "person": {
    "name": "",
    "title": "",
    "company": "",
    "linkedin_url": "",
    "email": null,
    "phone": null
  },
  "signal": {
    "type": "product_inquiry",
    "original_text": "",
    "detected_intent": "interested in cabin/capsule for clinic",
    "confidence": "high/medium/low",
    "urgency": "high/medium/low"
  },
  "action_required": {
    "type": "sales_handoff",
    "assigned_to": "",
    "due_date": "",
    "priority": "P1/P2/P3",
    "notes": ""
  },
  "xihe_product_fit": {
    "likely_products": ["cabin", "capsule"],
    "use_case": "sports recovery / wellness center",
    "budget_indicator": "mentioned budget / no info / appears limited",
    "timeline": "immediate / researching / exploratory"
  }
}
```

### For WARM PROSPECT
```json
{
  "record_type": "warm_prospect",
  "source": "linkedin",
  "nurture_sequence": "science_education",
  "next_touchpoint": "share relevant research paper / invite to webinar / DM with case study",
  "status": "new_engaged / nurturing / qualified / converted / dormant"
}
```

## Routing Decision Tree

```
SIGNAL RECEIVED
    │
    ├── Is it a direct buying signal?
    │   ├── YES → HOT LEAD → Immediate sales notification
    │   └── NO ↓
    │
    ├── Does the person work in target industry?
    │   ├── YES (clinic/hotel/sports/team/wellness) → WARM PROSPECT
    │   └── NO ↓
    │
    ├── Is this a journalist / researcher / influencer?
    │   ├── YES → MEDIA / INFLUENCER TRACKER
    │   └── NO ↓
    │
    ├── Is this about a competitor?
    │   ├── YES → COMPETITIVE INTEL LOG
    │   └── NO ↓
    │
    └── GENERAL CONTACT (log for future reference)
```

## Output Files

All CRM records saved to: `D:\CODEX\LAUCH VERSION\DOCUMENTS\CRM\`

File naming: `crm-[YYYY-MM-DD].jsonl` (JSON Lines format, append-only)

Daily summary: `crm-summary-[YYYY-MM-DD].md`

```markdown
# CRM Summary [Date]

## New Records Today
- Hot Leads: [n]
- Warm Prospects: [n]
- Partnership Signals: [n]
- Media/Influencer: [n]
- Competitive Intel: [n]
- General Contacts: [n]

## Priority Actions (Do These First)
1. [Action item]
2. [Action item]

## Pipeline Movement
- [Any contacts that changed status/tier today]
```

## Integration Points
- **Input from**: `thread-monitor` (signals), `reply-handler` (inquiries in comments), `comment-drafter` (prospect engagement)
- **Output to**: Human-readable CRM files, email notifications for hot leads, weekly reports for `content-planner` (which topics generate most leads)
- **Feedback loop**: Which content generates most hot leads? → Tell `post-writer` to produce more of that pillar/type

## XIHE-Specific Product Fit Mapping

When classifying leads, map their industry/role to XIHE products:

| Prospect Profile | Primary Product | Secondary | Key Message |
|----------------|---------------|-----------|-------------|
| Sports medicine clinic | CABIN | PORTABLES (half-body mat, knee thermal) | Athlete recovery protocol |
| Luxury hotel/resort | CABIN | CAPSULE | Wellness amenity differentiation |
| Physical therapy practice | PORTABLES (belt, cervical band, eye mask) | CABIN | In-clinic modality addition |
| Senior living facility | CAPSULE | PORTABLES (mat) | Non-pharmacological sleep aid |
| Chiropractic office | PORTABLES (lumbar belt, spinal pad) | CABIN | Adjunct to adjustments |
| Pro sports team | CABIN | All portables | Recovery room upgrade |
| Corporate wellness program | CABIN + mix | — | Employee benefit pilot |
| Integrative medicine doctor | All products | — | Multi-modality approach |

## Privacy & Compliance Notes
- Only log publicly visible LinkedIn information
- Never store private message content without consent
- GDPR/CCPA awareness: if prospect is in regulated region, note data handling requirements
- Respect LinkedIn's ToS regarding scraping and automated interactions

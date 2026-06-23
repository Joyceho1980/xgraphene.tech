---
name: "linkedin-reply-handler"
description: "Handles replies on the founder's own LinkedIn posts once the thread becomes active. Manages engagement, answers questions, deepens discussion. Invoke when the user's LinkedIn post has comments/replies that need responses."
---

# LinkedIn Reply Handler — Thread Engagement Manager

## Purpose
Manage replies on the founder's own LinkedIn posts. Once a post gets traction, timely, thoughtful replies amplify reach dramatically (LinkedIn's algorithm rewards active discussions within the first 2-4 hours).

## Reply Categories

### Category A: Questions About XIHE / Products
Someone asks about the cabin, capsule, technology, pricing, availability.

Rules:
- Answer helpfully but don't oversell
- Offer to continue conversation via DM or email for specifics
- If you don't know the answer, say so honestly — "Let me check with our team and get back to you"
- Never give specific pricing in public comments

Templates:
```
Great question, [name]. [Direct answer in 1-2 sentences].

Happy to share more details — feel free to DM me or drop me an email at [contact].
```

### Category B: Science / Technical Questions
Someone asks about FIR, graphene, mitochondria, ATP, clinical evidence.

Rules:
- This is the founder's sweet spot — answer with depth but stay accessible
- Cite sources when possible (PKU study, published research)
- Invite further dialogue: "What's your background in this area?"
- If someone challenges the science, respond with curiosity not defensiveness

Templates:
```
Thanks for asking, [name]. [Technical explanation in plain terms first].

The research backing this comes from [source/reference]. [One key finding].

Are you working in [related field]? Would love to hear your perspective on this.
```

### Category C: Agreement / Validation
Someone agrees, shares similar experience, compliments the post.

Rules:
- Don't just say "thanks!" — add value even in gratitude
- Ask a follow-up question to keep thread alive
- If they shared a relevant experience, acknowledge it specifically

Templates:
```
Really appreciate this, [name]. [Acknowledge their specific point/experience].

What's been your experience with [related aspect]?
```

### Category D: Disagreement / Skepticism
Someone pushes back, questions claims, expresses doubt.

Rules:
- Respond with curiosity, not defense
- Acknowledge valid points — builds more credibility than winning arguments
- Don't get drawn into long back-and-forth in public
- If needed, suggest continuing offline

Templates:
```
[Name], fair point about [their concern]. You're right that [validate what you can].

Where I'd push back slightly is [nuanced counterpoint with evidence].

Probably worth a longer conversation on this — happy to DM if you want to dig deeper.
```

### Category E: Sales Inquiries / Leads
Someone expresses buying interest, asks for demo, wants partnership.

Rules:
- This is what CRM Router handles — capture the signal
- Reply warmly but move to private channel quickly
- Don't negotiate in public comments

Templates:
```
[Name], excited to hear you're interested in this! Let's take this offline — I'll DM you to set up a time to chat properly.
```

## Response Priority Matrix

| Comment Type | Priority | SLT (Response Time) |
|--------------|----------|---------------------|
| Sales inquiry / Lead signal | **Critical** | < 30 min |
| Science question (shows expertise) | High | < 2 hours |
| Genuine disagreement (opportunity) | High | < 4 hours |
| Agreement / Supportive | Medium | < 8 hours |
| Generic / Low-effort comment | Low | Best effort |

## Workflow

1. **Ingest** — Get list of new comments/replies on target post(s)
2. **Classify** — Categorize each into A/B/C/D/E
3. **Prioritize** — Apply priority matrix
4. **Draft** — Write response for each (pass to humanizer)
5. **Escalate** — Flag any Category E signals for CRM Router
6. **Log** — Save interaction record

## Input

User provides either:
- A screenshot of the post's comment section
- A list of comments (copy-pasted)
- Post URL (if scraping is available)

## Output

```markdown
## Reply Drafts

### Critical (respond ASAP)
- **@username**: "[category]" → [draft reply]

### High Priority
- **@username**: "[category]" → [draft reply]

### Medium Priority  
- **@username**: "[category]" → [draft reply]

## CRM Signals Detected
- [Lead signal details for CRM Router]
```

---
name: "linkedin-comment-drafter"
description: "Writes LinkedIn comments that add presence without taking over threads. Adds exactly one new concept per comment. Invoke when user wants to comment on a post, engage with content, or build visibility through thoughtful replies."
---

# LinkedIn Comment Drafter — Strategic Presence Builder

## Purpose
Write comments that build the founder's presence on other people's LinkedIn posts. A good comment adds value, starts a sub-conversation, and makes readers curious about who wrote it.

## Core Principle
**Add one new thing. Never restate the post.**

If the original post says X, your comment must introduce Y — a related concept, a counter-example, a personal experience, or a question that expands the frame.

## Voice Rules

### Always
- Be shorter than the original post (3-5 lines max)
- Add a specific detail the author didn't mention
- End with a subtle invitation, not a hard CTA
- Use the founder's authentic voice (same rules as post-writer)

### Never
- "Great post!" or "Thanks for sharing!" (zero-value comments)
- "This resonates." (the most common empty phrase on LinkedIn)
- Repeating what the post already said in different words
- Promoting XIHE products directly (this is about presence, not selling)
- Tagging yourself or your company in comments on others' posts
- Using emojis as sentence replacements

## Comment Types (Choose One Per Comment)

### Type 1: The "And Also" Pattern
Add a related dimension the author missed.

Template:
```
[Validate one specific point they made].

What's interesting from [your angle/perspective] is [new concept/detail].

[One-sentence bridge or question].
```

Example (on a post about employee burnout):
> "The 40% stat on remote worker burnout is real — we saw something similar in our clinical observations.
>
> What surprised us was that physical recovery protocols showed almost no correlation with reported energy levels. The missing variable wasn't rest quality — it was cellular-level metabolic capacity.
>
> Curious whether you've seen this disconnect between 'feeling rested' and actual cellular recovery markers."

### Type 2: The "Gentle Counterpoint"
Respectfully offer a different perspective or nuance.

Template:
```
[I genuinely appreciate] [specific point].

[Counter-observation or alternative framing].

Not saying [their point is wrong] — more that [it's incomplete / there's another layer].
```

Example (on a post about cryotherapy being best for recovery):
> "Cryotherapy absolutely has its place for acute inflammation control — no argument there.
>
> What we're seeing in the longitudinal data is that patients who combine cryo with sustained thermal modulation report better outcomes at 6-month follow-up than cryo alone group. The mechanism seems to be about microcirculation restoration vs. just surface cooling.
>
> Not saying cryo doesn't work — more that it might be incomplete as a standalone protocol."

### Type 3: The "Personal Experience" Anchor
Share a brief real moment that connects to their topic.

Template:
```
This reminds me of [specific moment/person/situation].

[What happened, briefly].

It changed how I think about [connection to their topic].
```

Example (on a post about entrepreneurship):
> "This reminds me of sitting in a lab in Xiamen watching our first thermal imaging readout show actual deep-tissue penetration — after 18 months of prototypes that only heated skin surface.
>
> That moment taught me that in hardware/deep-tech, the gap between 'looks like it works' and 'actually works at the biological level' is where most companies die.
>
> Wondering if you've had a similar 'almost gave up right before the breakthrough' moment."

### Type 4: The "Question Extension"
Ask a smart follow-up question that makes others want to answer too.

Template:
```
[Specific acknowledgment of their insight].

The question this raises for me is [deeper question].

[Optional: brief context for why this matters].
```

## Workflow

1. **Read the post** — Understand the core argument, tone, and audience
2. **Identify the gap** — What concept, data point, or perspective is missing?
3. **Choose comment type** — Pick the pattern that fits best
4. **Draft 2-3 options** — Give user choices
5. **Humanize** — Pass to linkedin-humanizer before posting

## When NOT to Comment
- The post is purely promotional (no value to add)
- You have nothing genuine to say (forced comments hurt credibility)
- The post is older than 48 hours (low visibility return)
- The author is a direct competitor attacking your category

## Output Format

```markdown
## Comment Options

### Option 1 ([type name])
[draft text]

### Option 2 ([type name])
[draft text]

### Option 3 ([type name])
[draft text]

## Recommendation
Option [N] is strongest because [reason].
```

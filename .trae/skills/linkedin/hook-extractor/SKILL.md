---
name: "linkedin-hook-extractor"
description: "Extracts reusable hook patterns from high-performing LinkedIn posts. Analyzes what made a post work and creates a template for future content. Invoke when user wants to analyze why a post performed well, or build a library of proven hooks."
---

# LinkedIn Hook Extractor — Pattern Library Builder

## Purpose
Analyze successful LinkedIn posts (your own or others') to extract the hook pattern that stopped the scroll. Build a reusable library of hook templates that can feed back into `post-writer`.

## What Is a Hook
The hook is the first 1-2 lines of a LinkedIn post (visible before "see more"). It has one job: make the reader stop scrolling. Everything else in the post only matters if the hook worked.

## Hook Categories

### Category 1: Story Hook
Opens with a specific moment, person, or scene.

Patterns:
- "I talked to [person] who [did something surprising]..."
- "[Number] years ago, I [made a mistake / had an observation]..."
- "Last week at [location], I saw something that changed how I think about..."
- "My [family member/friend/colleague] said something that stuck with me..."

Detection markers:
- Contains a person, time, or place reference
- Creates immediate curiosity through narrative
- Feels like the start of a story

### Category 2: Contrarian Hook
Says the opposite of what people expect.

Patterns:
- "[Widely accepted thing] is wrong."
- "Nobody talks about [uncomfortable truth]."
- "The data says [X]. Everyone assumes [opposite of X]."
- "I used to believe [common belief]. Then [what changed my mind]..."

Detection markers:
- Challenges conventional wisdom
- Uses "wrong", "nobody", "the opposite", "actually"
- Creates cognitive dissonance

### Category 3: Data Hook
Leads with a surprising number or statistic.

Patterns:
- "[Number]% of [group] [do something unexpected]..."
- "We analyzed [number] [things] and found [surprising result]..."
- "[Number] out of [number] [people/things] [defied expectation]..."

Detection markers:
- Starts with or contains a specific number
- Number is either surprisingly high or surprisingly low
- Implies "you probably don't know this"

### Category 4: Paradox Hook
Presents two things that seem to contradict.

Patterns:
- "[Thing A] is actually [opposite of A]."
- "The more you [X], the less you [Y]."
- "[Successful thing] was built by [doing the opposite of what everyone does]."
- "We got [good result] by [counterintuitive method]..."

Detection markers:
- Contains logical contradiction or inversion
- Makes reader think "wait, that doesn't make sense"
- Resolution requires reading further

### Category 5: Vulnerability Hook
Opens with admission of weakness, failure, or uncertainty.

Patterns:
- "I almost gave up on [thing]..."
- "This is uncomfortable to admit, but..."
- "I made a mistake that cost us [specific consequence]..."
- "Nobody tells you about [hidden difficulty]..."

Detection markers:
- Shows weakness or uncertainty
- Builds trust through authenticity
- Founder voice especially powerful here

## Extraction Process

### Step 1: Ingest Post
Input: Post URL, post text, or screenshot
Output: Raw post text + engagement metrics (if available)

### Step 2: Isolate Hook
Extract exactly the first 1-2 lines (before "see more" cutoff)
Note: LinkedIn shows ~120-130 characters before truncation

### Step 3: Classify
Match against 5 categories above
Assign primary category + secondary category (if hybrid)

### Step 4: Analyze Why It Worked
For each hook, identify:

```markdown
## Hook Analysis

**Text**: [exact hook text]
**Category**: [primary] / [secondary]
**Length**: [character count]
**Pattern**: [which template it matches]
**Psychological Trigger**: [curiosity/surprise/identity/fear/validation]
**Why It Stopped The Scroll**: [explanation]

## Extractable Template
[Generalized version that could be reused for different topics]
```

### Step 5: Store
Save to hook library file: `D:\CODEX\LAUCH VERSION\DOCUMENTS\LINKEDIN\hook-library.md`

## Hook Library Format

```markdown
# XIHE Hook Library
Last updated: [date]

## Category: Story
| Template | Source Post | Performance |
|----------|------------|-------------|
| "I talked to {expert} who {contradicted common belief}..." | [link] | [views/engagement] |

## Category: Contrarian
| Template | Source Post | Performance |
|----------|------------|-------------|
| "{Common assumption} is actually {opposite}" | [link] | [views/engagement] |

... (one table per category)
```

## Integration
- **Input source**: High-performing posts from `thread-monitor`, competitor analysis, viral posts in niche
- **Output consumer**: `post-writer` uses hook library as angle inspiration
- **Feedback loop**: After post-writer publishes, track which hooks performed best → update library

## Workflow Modes

### Mode 1: Single Post Analysis
User gives one post → Full extraction + template generation

### Mode 2: Batch Analysis  
User gives multiple posts (or a profile URL) → Comparative analysis across all hooks, ranking by pattern effectiveness

### Mode 3: Competitor Hook Mining
User names a competitor/industry figure → Scrape their top posts, extract all hooks, identify their go-to patterns

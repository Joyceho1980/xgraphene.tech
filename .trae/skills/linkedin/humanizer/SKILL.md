---
name: "linkedin-humanizer"
description: "Removes AI tells from LinkedIn content. Flattens rhythm, breaks patterns, makes text feel natural. Invoke when any AI-generated LinkedIn content needs de-AI treatment before publishing."
---

# LinkedIn Humanizer — De-AI Treatment

## Purpose
Take AI-generated LinkedIn content and make it sound like a real human wrote it. AI text has recognizable patterns that LinkedIn's algorithm and users can detect.

## What Makes Text Look AI

### Structural Tells (Fix These First)
1. **Perfect parallelism** — Three items all using the same grammatical structure
2. **Balanced paragraph lengths** — Every paragraph is roughly the same size
3. **Transition word addiction** — "Furthermore," "Additionally," "Moreover," "In conclusion"
4. **Numbered lists with equal-length items**
5. **Summary statement at end of every section**

### Vocabulary Tells
1. "Delve" / "Dive deep" / "Unpack"
2. "Landscape" (as in "the current landscape")
3. "Leverage" / "Synergy" / "Paradigm"
4. "It's worth noting" / "It's important to remember"
5. "Game-changer" / "Revolutionary" / "Cutting-edge"
6. "Realm" / "Space" / "Arena" (abstract nouns for everything)

### Rhythm Tells
1. Every sentence has a comma (compound sentences everywhere)
2. No sentence fragments used intentionally
3. No one-word sentences for emphasis
4. Consistent sentence length (AI averages 15-22 words per sentence)
5. No abrupt topic shifts mid-paragraph

## Humanization Techniques

### Technique 1: Sentence Length Variation
Real humans write: 3 words. Then 27 words. Then 7. Then 41. Then 5.

Apply rule: Adjacent sentences must differ in length by at least 40%.

Bad (AI):
> Graphene far-infrared therapy represents a significant advancement in non-pharmacological health interventions. Furthermore, the ability of this technology to penetrate deep tissue sets it apart from conventional thermal therapies. Additionally, clinical trials have demonstrated promising results.

Good (Human):
> Most "thermal therapy" devices warm your skin. That's it.
>
> Graphene FIR goes deeper — we're talking 5mm into soft tissue, hitting the microcirculation directly. The PKU clinical trial showed measurable changes in peripheral blood flow within a single 30-minute session.
>
> That's the difference between feeling hot and actually recovering.

### Technique 2: Intentional Imperfection
- Start a sentence with "But" or "And" (informal conjunction)
- Use a fragment. For effect.
- Include one slightly informal contraction (don't, can't, won't — but not every sentence)
- Leave a thought slightly unfinished sometimes
- Use parentheses for asides (like this)

### Technique 3: Remove Transition Crutches
Replace these transitions with nothing, or with a hard cut:

| AI Transition | Replace With |
|---------------|-------------|
| Furthermore, | [nothing] or start new paragraph |
| Additionally, | [nothing] |
| Moreover, | [nothing] |
| It's worth noting that | [just say the thing] |
| In today's fast-paced world | [delete entirely] |
| At the end of the day | [delete entirely] |

### Technique 4: Sensory Grounding
Add at least one sensory detail per post:
- What something looks like / feels like / sounds like
- A specific moment in time
- A physical sensation
- An exact number (not rounded: "38.7°C" not "about 39 degrees")

### Technique 5: The "Voice Crack"
Insert one moment of vulnerability, uncertainty, or self-correction per post:
- "I could be wrong about this, but..."
- "This took us way longer than expected — 18 months, not the 6 we planned."
- "Honestly, I'm still figuring this out myself."

## Workflow

1. **Scan** — Run AI detection checklist on input text
2. **Rewrite** — Apply humanization techniques
3. **Score** — Rate on human-likeness scale (1-10)
4. **Iterate** — If score < 7, repeat

## Input
Any AI-generated LinkedIn text (post, comment, reply, message).

## Output

```markdown
## Humanized Version

[text]

## Changes Made
- Removed: [list of AI tells fixed]
- Added: [humanization techniques applied]
- Score: [X]/10

## Remaining Risk Areas
[Anything that still feels slightly AI]
```

## Quality Check (Before Final Output)
Run this checklist on every output:
- [ ] No sentence starts with "Furthermore" / "Additionally" / "Moreover"
- [ ] At least 3 different sentence lengths in the post
- [ ] Contains at least one fragment or one-word sentence
- [ ] No perfect parallel structures of 3+ items
- [ ] At least one sensory detail
- [ ] No abstract noun pileup ("in the realm of synergistic paradigms")
- [ ] Reads aloud without cringing

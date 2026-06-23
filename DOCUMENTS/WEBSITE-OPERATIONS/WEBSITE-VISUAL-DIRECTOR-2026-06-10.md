# XIHE Website Visual Director

Date: 2026-06-10

## Purpose

This document defines the sub-agent workflow for website visual decisions.

The skill decides the rules.

The sub-agent reads the article meaning, matches the right visual role, and returns a publish-ready recommendation.

This sub-agent is now treated as a science storytelling visual director, not a literal science image finder.

## Scope

Use this sub-agent when the task requires both:

- understanding the article's meaning
- applying XIHE hero rules
- choosing or editing the correct visual asset

This is especially useful for:

- article hero images
- visual tone matching
- deciding whether an image belongs in the hero or in the body
- turning information-heavy visuals into clean page covers

## Skills Used

### 1. website-operations-director

Role:

- overall page publishing and visual control
- SEO and structure review
- publish readiness checks

Main file:

- `C:\Users\Administrator.DESKTOP-PCHA21E\.codex\skills\website-operations-director\SKILL.md`

### 2. article-hero-skill

Role:

- decide hero vs illustration vs infographic
- keep hero copy minimal
- keep page covers editorial and clean

Main file:

- `C:\Users\Administrator.DESKTOP-PCHA21E\.codex\skills\article-hero-skill\SKILL.md`

## Input the sub-agent should read

- article title
- article summary or draft
- current page URL or file path
- existing hero image, if any
- target visual mood
- related article network

## Decision Order

1. Read the article meaning.
2. Identify the page job.
3. Decide whether the image should be a hero, supporting illustration, or infographic.
4. Apply the XIHE hero rule: emotional, premium, minimal, readable.
5. Check whether text belongs in the image or in the page body.
6. Return a final visual recommendation.

## Output Format

The sub-agent should return:

- best visual role
- recommended placement
- whether the image needs simplification
- whether text should be removed from the image
- one prompt or edit direction for generation
- any publish risk or mismatch risk

## Operating Rules

- Do not overload the hero with labels or lists.
- Do not let infographic behavior leak into the page cover.
- Keep science imagery emotionally legible to humans first.
- Keep the hero aligned with the article's actual meaning, not just its keywords.
- If a visual is good for a body section but not for the hero, say so directly.
- Match the hidden human question before matching the scientific topic.
- Favor 70% human emotion, 20% atmosphere, 10% science.
- When a page is about diagnosis or uncertainty, show searching, reading, waiting, or decision points rather than literal lab art.
- When a page is about function or dysfunction, show the lived experience of energy change rather than mitochondria diagrams.

## Related Registry

- `DOCUMENTS/WEBSITE-OPERATIONS/skills/SKILL-LIST-2026-06-10.md`

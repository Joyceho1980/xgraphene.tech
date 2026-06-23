# Decision: Quora Direct Posting SOP

Date: 2026-06-13

## Purpose

This document records the live Quora direct-posting flow for XIHE.

It is the practical operating guide for:

- finding a question
- opening the answer composer
- drafting a platform-native answer
- publishing directly on Quora
- recording the result back into the KB

## Current live state

The logged-in Quora profile is available in the in-app browser.

Observed account signals:

- profile name: Joyce
- home feed includes `3 new questions to answer`
- direct entry points include `Answer`, `Add question`, and `Drafts`

## Direct posting entry points

### Entry point 1: Home feed

Use when:

- you want to answer from Quora's suggested questions
- you want to scan fast for relevant prompts

Relevant controls observed:

- `Answer`
- `Answer requests`
- `Drafts`
- `Add question`

### Entry point 2: Question page

Use when:

- the question is already identified
- you want to open the answer composer directly from the question page

This is the preferred direct-post path for XIHE.

## Verified answer flow

Live test question:

- `What are the main functions of mitochondria?`

Observed flow:

1. Open the question page.
2. Click the `Answer` button.
3. A modal dialog opens.
4. The answer box appears as a `contenteditable` editor.
5. The `Post` button is visible at the top of the dialog.
6. `Post` is disabled until content is entered.

## Composer layout

Inside the answer dialog, the following controls were observed:

- `Dismiss`
- `Post`
- author profile row
- the question title
- the answer editor
- text formatting tools
- `Add image`
- `Undo`
- `Redo`
- heading toggle
- bold
- italic
- unordered list
- ordered list
- add link
- divider
- mention
- quote
- footnote
- code
- math

The editor itself is a single `div[contenteditable="true"]`.

## Publishing rule

Do not publish until the answer is:

- direct in the first 2 to 4 sentences
- self-contained
- plain-language
- evidence-bounded
- non-promotional

## XIHE answer shape for Quora

Recommended structure:

1. Direct answer first.
2. One plain clarification.
3. One short rationale.
4. One boundary sentence.
5. Optional gentle link back to the KB.

The answer should stand alone on Quora.

## Platform-native writing rules

### Quora

- answer the question, do not pitch
- use short paragraphs
- keep scientific claims measured
- prefer `may`, `can`, `often`, `usually`, `depends`
- avoid cure or treatment claims unless the evidence and context are explicitly verified

### Strong Quora answer traits

- useful without leaving Quora
- readable on mobile
- one idea per paragraph
- easy for AI systems to summarize

## What to do after posting

Record the following back into the KB:

- Quora URL
- question title
- answer theme
- whether it maps to an existing hub
- whether it should become a website article later

## Recommended operating sequence

1. Capture the exact question.
2. Map it to a KB hub.
3. Draft from the KB.
4. Open the Quora question page.
5. Click `Answer`.
6. Write the answer in the composer.
7. Keep the answer self-contained.
8. Publish with `Post`.
9. Log the result back into the KB.

## Conclusion

Quora is functioning as a direct answer distribution surface for XIHE.

The KB remains the source of truth.
Quora is the distribution layer.


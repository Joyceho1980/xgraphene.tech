# Quora to KB Workflow

Status: Active
Created: 2026-06-08

## Principle

Quora is a question discovery engine.

The XIHE KB is the answer engine.

## Step 1: Capture The Question

Save the exact Quora question.

Do not rewrite it yet.

Record:

1. Exact question.
2. Quora URL.
3. Date captured.
4. Topic tags.
5. Why it matters.

Use:

`Quora-Question-Record-Template.md`

## Step 2: Map To KB

Map the question to:

1. Parent hub.
2. Concept note.
3. Evidence source, if needed.
4. Approved claim, if any.
5. Forbidden claims.

Example:

| Quora Question | Parent Hub | KB Concept |
|---|---|---|
| What is ATP in simple terms? | ATP / Cellular Energy | `CONCEPT-002-ATP.md` |

## Step 3: Decide The Answer Type

| Answer Type | Use When |
|---|---|
| Short factual answer | Question asks for definition |
| Explainer answer | Question asks why/how |
| Story-led answer | Question is human/emotional |
| Evidence answer | Question asks for research |
| Caution answer | Question touches disease or treatment |

## Step 4: Draft From KB

Use the answer template.

Every answer should include:

1. Direct first answer.
2. Simple explanation.
3. Nuance or limitation.
4. Optional related concept.
5. Soft further-reading line.

## Step 5: Check Compliance

Do not use:

- cures
- treats
- heals
- pain relief as product claim
- medical device claim unless context is regulatory and verified
- guaranteed outcomes

If the question asks for medical advice, answer generally and suggest professional consultation.

## Step 6: Score Article Potential

After drafting, score the question:

1. Human language clarity.
2. Evergreen value.
3. Hub fit.
4. Search/GEO potential.
5. Evidence availability.
6. Internal-link value.

Use:

`Quora-Article-Title-Scoring.md`

## Step 7: Promote Strong Questions

If the question is strong:

1. Add it to `Quora-Question-Bank.csv`.
2. Mark status `Promote`.
3. Create website publishing record later.

## Step 8: Build Website Article Later

Website article must still follow the normal KB publishing workflow:

`KB concept -> evidence boundary -> Quick Answer -> FAQ -> internal links -> schema -> website`


# Google Dorking Email Hunting Playbook

Date: 2026-06-10

## Purpose

Use Google as a public-record discovery layer to:

- find company email patterns
- locate public inboxes and role mailboxes
- identify decision-maker names
- discover hidden contact routes in PDFs, bios, and team pages

This is for public B2B prospecting only.

It is not a mass-scraping or spam workflow.

## XIHE Operating Principle

The goal is not to collect random emails.

The goal is to:

1. identify a strong-fit account
2. find the right person or routing path
3. infer the most likely email format
4. verify before sending
5. write a pain-point-led email

## Important Reality Check

Some Google operators are very useful.

Some are only heuristic and may not reliably return results.

For example:

- `site:domain.com "@domain.com"` is useful
- `filetype:pdf` searches are useful
- role-based searches are useful
- quoted wildcard patterns like `"*@domain.com"` are not consistently reliable in Google and should not be treated as a core method

## Layer 1: Official-Site Pattern Discovery

### Goal

Find whether the company publicly exposes any email and infer naming logic.

### Strong searches

- `site:companydomain.com "@companydomain.com"`
- `site:companydomain.com intext:"@companydomain.com"`
- `site:companydomain.com (contact OR team OR leadership OR about) "@companydomain.com"`

### What to look for

- one visible email sample
- multiple visible staff emails
- role mailbox vs named person mailbox
- contact page domain mismatch

### Pattern examples

If you find:

- `john.smith@company.com`
- `anna.lee@company.com`

then likely pattern is:

- `first.last`

If you find:

- `j.smith@company.com`
- `m.brown@company.com`

then likely pattern is:

- `f.last`

## Layer 2: Public Inbox and Gatekeeper Discovery

### Goal

Find the best general route when no direct decision-maker email is public.

### Useful searches

- `"@companydomain.com" (contact OR info OR office OR admin OR hello OR procurement)`
- `site:companydomain.com intext:"@companydomain.com" intext:"contact"`
- `site:companydomain.com (contact OR locations OR support OR team)`

### What counts as usable

- `info@`
- `office@`
- `hello@`
- `support@`
- `procurement@`
- contact forms with a clear business inquiry path

### Rule

These are acceptable fallback routes.

They are not the same as a true decision-maker route.

## Layer 3: Third-Party Side-Angle Searches

### Goal

Find names, titles, or public traces of staff outside the company website.

### Useful searches

- `site:linkedin.com/in "Company Name" founder`
- `site:linkedin.com/in "Company Name" "operations"`
- `site:linkedin.com/in "Company Name" "director"`
- `site:linkedin.com/company "Company Name"`
- `site:facebook.com "Company Name" email`
- `site:instagram.com "Company Name" email`

### Rule

Use these to discover:

- names
- titles
- routing clues

Do not treat third-party pages alone as final proof that an email is valid.

## Layer 4: File Search

### Goal

Find buried contact details in PDFs, staff bios, conference materials, brochures, and public forms.

### Useful searches

- `filetype:pdf "Company Name" email`
- `filetype:pdf "companydomain.com" contact`
- `filetype:pdf "Company Name" "@"`
- `filetype:xlsx "clinic" "email"`
- `filetype:docx "Company Name" contact`

### Best surprises often come from

- conference speaker bios
- physician CVs
- staff resumes
- procurement or vendor documents
- brochures
- investor decks
- membership handbooks

## Layer 5: Decision-Maker Name Hunting

### Goal

Find the right person before guessing the email.

### Useful searches

- `site:companydomain.com CEO`
- `site:companydomain.com founder`
- `site:companydomain.com "director of operations"`
- `site:companydomain.com "practice administrator"`
- `site:companydomain.com "partnerships"`
- `site:companydomain.com "business development"`
- `"Company Name" CEO email`
- `"Company Name" founder email`

### XIHE role priority by segment

For PT / sports medicine:

- founder
- owner
- clinic director
- practice administrator
- operations director

For recovery centers:

- founder
- owner
- general manager
- operations director
- partnerships or business development

For wellness / hospitality:

- spa director
- wellness director
- experience director
- general manager

## Layer 6: Pattern Inference

### Rule

Only infer an email if:

- the domain is confirmed
- at least one company email sample exists, or
- the pattern is strongly supported by public evidence

### Common patterns

- `firstname@domain.com`
- `firstname.lastname@domain.com`
- `f.lastname@domain.com`
- `firstinitiallastname@domain.com`

### Example logic

If the public examples are:

- `a.barker@company.com`
- `m.stride@company.com`

then the likely pattern is:

- `f.last`

If the target person is:

- Andrew Barker

then likely guess is:

- `a.barker@company.com`

## Layer 7: Verification

### Rule

Do not send to guessed emails without a verification pass.

### Low-cost verification order

1. website source check
2. pattern check
3. MX/domain check
4. free verification credits
5. paid verification when scaling

### Recommended tools already discussed for XIHE

- Hunter
- Apollo
- ZeroBounce
- MillionVerifier

## XIHE Execution Workflow

1. choose a strong-fit account
2. search official site for visible email samples
3. search for decision-maker names
4. search PDFs and external traces
5. infer domain pattern only if supported
6. verify the email
7. save to CRM
8. write a pain-point-led first-touch note

## CRM Capture Fields

For each account, store:

- company name
- website
- segment
- decision maker
- title
- public email
- guessed email
- domain pattern
- source links
- confidence level
- pain hypothesis
- XIHE angle
- next action

## What We Should Not Do

- blindly trust one scraped source
- mass guess emails and send immediately
- confuse `info@` with a real buyer
- use identical copy at scale
- use Google dorking as a substitute for account fit analysis

## Example Search Set For One Account

For `isokinetic.com`:

- `site:isokinetic.com "@isokinetic.com"`
- `site:isokinetic.com (contact OR team OR about) "@isokinetic.com"`
- `site:isokinetic.com "director"`
- `filetype:pdf "isokinetic.com" email`
- `site:linkedin.com/in "Isokinetic" operations`

## Best Use Inside XIHE

This method is most valuable when:

- the account is already strong-fit
- we need the right route
- public contact info is thin
- we want to avoid paying for data too early

## Bottom Line

Google dorking is not the sales strategy.

It is the contact-discovery tool inside the sales strategy.

The actual advantage still comes from:

- choosing the right account
- understanding the pain
- positioning XIHE as complementary
- writing a human first-touch email

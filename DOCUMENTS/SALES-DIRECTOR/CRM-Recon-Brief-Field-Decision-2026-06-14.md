# CRM Recon Brief Field Decision

## Decision
XIHE CRM now includes a dedicated `recon_brief` field for every customer.

This field is the required home for the lead recon brief template:
- company and website
- account size and core business
- target contact and LinkedIn
- recent activity
- public signals
- personal background clues
- existing technology stack
- other observations

## Why this matters
- Gemini is well suited to structure this type of reconnaissance.
- The recon brief becomes the input to pain analysis and email generation.
- The CRM should not treat recon as free-form notes.

## Workflow
1. Find the account.
2. Fill the recon brief.
3. Run pain analysis.
4. Draft the email.
5. Send and follow up.

## CRM implementation
- Added a dedicated `recon_brief` column in the customer table.
- Added recon brief input on the Add Customer page.
- Added a recon brief editor on the Customer Detail page.

## Operational rule
- Every strategic account should have a recon brief before first-touch outreach.
- If the brief is empty, the account is not ready for sniper-style outreach.


# Gemini Prospect Research Prompt Templates

Date: 2026-06-11

## Prompt 1: Company And Pain-Point Analysis

```text
You are helping with B2B prospect research for XIHE.

I will give you:
1. company website notes
2. public leadership notes
3. service and modality notes
4. public contact-route notes

Your task:
- identify the company segment
- summarize the business model
- summarize the current modality stack
- identify likely commercial or clinical pain points
- identify how XIHE could fit without replacing existing modalities
- recommend one primary XIHE angle only

Output format:
1. Segment
2. Business model
3. Current modality stack
4. Likely pain points
5. Recommended XIHE angle
6. Why this angle fits
7. Risks / uncertainty
```

## Prompt 2: Decision-Maker Prioritization

```text
You are helping prioritize contact targets for a B2B outbound workflow.

I will give you:
1. company notes
2. public leadership names
3. title information
4. website and LinkedIn clues

Your task:
- rank the likely best contacts for a first outreach
- explain who likely influences technology adoption
- identify fallback routes if the primary target is not reachable

Output format:
1. Primary contact
2. Secondary contact
3. Backup route
4. Why this routing order makes sense
5. Confidence level
```

## Prompt 3: Email Pattern Interpretation

```text
You are helping interpret public email evidence for a B2B prospect.

I will give you:
1. domain
2. visible email samples
3. public route notes
4. file or page evidence

Your task:
- determine whether the domain is confirmed
- infer the naming pattern only if evidence is strong
- classify the route as direct, role-based, generic, form, or unknown
- state clearly when evidence is insufficient

Important:
- do not guess a direct email unless the pattern is supported by evidence
- do not overstate confidence

Output format:
1. Confirmed domain
2. Visible evidence
3. Email naming pattern
4. Best route type
5. Confidence level
6. Verification still needed
```

## Prompt 4: CRM-Ready Structured Output

```text
You are preparing CRM-ready prospect research for XIHE.

I will give you:
1. company notes
2. role notes
3. email route notes
4. pain-point notes

Convert the information into the following fields:
- company_name
- website
- country
- city
- segment
- decision_maker
- position
- route_type
- email
- domain_pattern
- modality_stack
- pain_points
- xihe_angle
- route_confidence
- next_action
- notes

If a field is uncertain, mark it clearly as uncertain rather than inventing a value.
```

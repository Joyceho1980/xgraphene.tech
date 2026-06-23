# TASK-08: Hero + Landing Page Consistency Check

## Priority: P1
## Context: Make sure the most visible pages use the finalized Dr. Fu-approved messaging.

---

## Pages to Check

1. `D:\CODEX\LAUCH VERSION\WEBSITE\pages\index.html` (homepage)
2. `D:\CODEX\LAUCH VERSION\WEBSITE\pages\SCIENCE\Landing.html` (science landing)
3. `D:\CODEX\LAUCH VERSION\WEBSITE\pages\SCIENCE\KNOWLEDGE\index.html` (knowledge hub index)
4. `D:\CODEX\LAUCH VERSION\WEBSITE\pages\SCIENCE\KNOWLEDGE\graphene-fir\index.html` (FIR hub)

---

## Check Each Page For

### Hero section
- Does it reference the three-level framework (spectral/material/system)?
- Does it use "Radiant Efficiency" as differentiator?
- Does it mention "9.4 μm"? → Change to "8–10 μm peak region"
- Does it claim "perfect match"? → Change to "lies within the same spectral region"
- Does it include unverifiable comparisons? → Remove
- Does it contain "生命光波" in a scientific claim? → Move to brand context

### Meta description
- Does it align with the current messaging?
- SEO/GEO-friendly?
- Contains any prohibited claims?

### Schema.org / LD+JSON
- Does Organization schema reference correct data?
- Does ScholarlyArticle schema have all required fields?
- Any "MedicalCondition" Schema? → Should be "Thing"

---

## Fix Rules
| Problem | Fix |
|---------|-----|
| "9.4 μm" | "8–10 μm peak region" |
| "perfect match" | "lies within the same spectral region" |
| "industry leading" | DELETE or rephrase |
| "3-5cm penetration" | DELETE |
| "生命光波" in science | Move to brand/tagline |
| MedicalCondition Schema | Change to Thing |
| Missing report number | Add "(2022)WT-HW-00529" |
| "FIR radiant efficiency" first mention | Add full NIQS term first |

# TASK: Add ScholarlyArticle Schema to 3 Definition Pages

## Priority: P1
## Files:
- WEBSITE/pages/SCIENCE/KNOWLEDGE/graphene-fir/what-is-far-infrared-radiant-efficiency.html
- WEBSITE/pages/SCIENCE/KNOWLEDGE/graphene-fir/how-to-evaluate-fir-heating-film.html
- WEBSITE/pages/SCIENCE/KNOWLEDGE/graphene-fir/ontology.html

## Background
These three pages serve as XIHE's "definition right" assets. Adding ScholarlyArticle as a secondary @type signals academic authority to AI systems and improves citation probability in AI search results.

## Change Required

For each of the 3 pages, locate the existing `<script type="application/ld+json">` block that contains the `@type: "Article"` schema. Add `ScholarlyArticle` as an additional `@type`.

### Before:
```json
"@type": "Article",
```

### After:
```json
"@type": ["Article", "ScholarlyArticle"],
```

### Also add these fields if not already present:
```json
"author": {
  "@type": "Organization",
  "name": "XIHE Technology",
  "parentOrganization": {
    "@type": "Organization",
    "name": "Jiageng Innovation Laboratory (IKKEM)"
  }
},
"about": {
  "@type": "Thing",
  "name": "Far-Infrared Radiant Efficiency",
  "description": "The proportion of input electrical energy converted to usable far-infrared radiation"
},
"audience": {
  "@type": "Audience",
  "audienceType": "B2B procurement, materials engineers, wellness industry professionals"
}
```

### Page-specific values for `about.name`:
- For radiant efficiency page: "Far-Infrared Radiant Efficiency"
- For evaluation framework page: "How to Evaluate Far-Infrared Heating Film"
- For ontology page: "Graphene FIR Knowledge Ontology"

## Verification
After changes, run:
```bash
grep -c "ScholarlyArticle" /mnt/d/CODEX/LAUCH\ VERSION/WEBSITE/pages/SCIENCE/KNOWLEDGE/graphene-fir/what-is-far-infrared-radiant-efficiency.html
grep -c "ScholarlyArticle" /mnt/d/CODEX/LAUCH\ VERSION/WEBSITE/pages/SCIENCE/KNOWLEDGE/graphene-fir/how-to-evaluate-fir-heating-film.html
grep -c "ScholarlyArticle" /mnt/d/CODEX/LAUCH\ VERSION/WEBSITE/pages/SCIENCE/KNOWLEDGE/graphene-fir/ontology.html
```
Each should return ≥1.

## Checklist
- [ ] All 3 pages have `@type: ["Article", "ScholarlyArticle"]`
- [ ] Each has `author` pointing to XIHE + IKKEM
- [ ] Each has `about` with correct page-specific name
- [ ] Each has `audience` with B2B audience type
- [ ] No existing schema fields broken

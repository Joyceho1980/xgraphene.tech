# TASK-05: "生命光波" Brand Positioning Cleanup

## Priority: P1
## Context: "生命光波" is brand language, NOT scientific terminology. Keep it in brand sections; remove from all AI-readable technical content.

## Files: ALL `.html` files under `D:\CODEX\LAUCH VERSION\WEBSITE\pages\`

## Rules

Check every occurrence of `生命光波` and `Life Light Wave`:

### 🔴 DELETE from these locations:
- `<script type="application/ld+json">` blocks (Schema.org metadata)
- AI Core Summary / Quick Answer / Key Takeaway sections
- FAQ questions and answers (scientific context)
- Technical mechanism explanations
- `description` or `keywords` meta tags
- Scientific article body text
- Comparison tables
- Anywhere that reads like a factual/scientific claim

### 🟢 ALLOWED in these locations:
- Brand taglines
- Hero subtitles (brand context, not making scientific claims)
- About/Philosophy page narrative
- Marketing copy clearly separated from technical content
- Footer brand statement

### ⚠️ Ambiguous (check manually):
- Page title/H1: Can stay if it's clearly a brand page, move if it's a science page
- Card titles on landing pages: Use judgment — if next to science content, remove; if in brand section, keep

---

## Verification
- [ ] All `生命光波` in Schema blocks are removed
- [ ] All `Life Light Wave` in technical/scientific context are removed
- [ ] Remaining uses are in brand/cultural context only

# Codex Collaboration Protocol

## 🚨 启动检查信号

每次重启后，立即检查：
```
AGENT-COMMS/01-TASKS/CODEX/pending/
```
- **有文件** → 按文件名顺序执行，完成后移入 `completed/`
- `CRON-*` 文件 = 部署/提交/验证指令，作为最后一步执行
- **空文件夹** → 无事，正常干活

> 你不需要手动找人确认。pending/ 有文件就是有任务，没有就是没有。

## Role
Codex is the page-level implementation partner for XIHE.
HERMES AGENT is the approval gate for all substantive work.

## Scope
- Page structure and section flow
- Readability and visual hierarchy
- Card layout and spacing
- Hero treatment and imagery
- Page-level copy polish
- Clean, human, science-focused presentation

## Out of Scope
- SEO / GEO strategy ownership
- Bulk content planning
- Sales outreach execution
- Unrelated refactors or layout churn

## Working Rules
- Keep the existing dark, science-led design language.
- Make changes small, safe, and reversible.
- Avoid hype, overclaims, and medical certainty where evidence is limited.
- Use apply_patch for manual file edits.
- Save important decisions and changes in DOCUMENTS/ with dated notes.
- Do not touch files outside the workspace unless explicitly requested.

## Quality Bar
- Clear before clever
- Human before automated
- Calm before crowded
- Readable before dense
- Useful before decorative

## Collaboration
Claude Code handles SEO / GEO.
Codex handles the page itself.
The two workflows stay separate but complementary.

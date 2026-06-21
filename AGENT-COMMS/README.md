# AGENT-COMMS 通信协议

**系统：** HERMES（监督/质检） ↔ CLAUDE CODE（执行）
**位置：** `D:\CODEX\LAUCH VERSION\AGENT-COMMS\`

---

## 目录结构

```
AGENT-COMMS/
├── 01-TASKS/           ← HERMES 写指令，CLAUDE CODE 读取执行
│   ├── pending/        ← 待执行的任务文件
│   └── completed/      ← 已完成的任务（HERMES 移动过来）
│
├── 02-REVIEWS/         ← HERMES 写检测报告，CLAUDE CODE 读取修改
│   ├── failed/         ← 未通过检测，需要修改
│   └── passed/         ← 已通过检测
│
└── README.md           ← 本文件
```

---

## 文件命名规则

- `TASK-{日期}-{序号}-{简短描述}.md`
- `REVIEW-{日期}-{序号}-{文章名}.md`

例：
```
TASK-2026-06-20-01-write-sleep-quality.md
REVIEW-2026-06-20-01-graphene-sleep-brainwaves.md
```

---

## 任务文件格式（HERMES → CLAUDE CODE）

HERMES 写入 `01-TASKS/pending/`：

```markdown
# TASK: [任务标题]

## 基本信息
- 日期：
- 优先级：高/中/低
- 所属 Phase：Phase 1/2/3/4/5
- 对应文章：# 见 WEBSITE-MANAGING-README 第九章

## 任务描述
[具体要做什么]

## 参考文档
- WEBSITE-MANAGING-README.md — 第X章
- INTERNAL-LINKING-BLUEPRINT.md — 第X节
- SEO-PACKS/ARTICLE-XX-xxx.md — 风格参考

## 产出要求
- 文件路径：[具体路径]
- 文件格式：.html / .md
- 需要包含：[具体要求]

## 检查重点
- [ ] 层级语气合规（见 README 第四章）
- [ ] 内链完整（见 INTERNAL-LINKING-BLUEPRINT）
- [ ] GEO 实体（ATP/mitochondria/circadian）
- [ ] Q&A 区块 3-6 个
- [ ] Key Takeaway Summary
- [ ] No medical claims
```

---

## 检测报告格式（HERMES → CLAUDE CODE）

HERMES 写入 `02-REVIEWS/failed/` 或 `passed/`：

```markdown
# REVIEW: [文章名]

## 总体结果：✅ 通过 / ⚠️ 需修复 / ❌ 不通过

## 🟣 层级合规：[通过/需修复]
[具体问题和位置]

## 🟢 内链检查：[通过/需修复]
[具体问题和位置]

## 🔵 关键词检查：[通过/需修复]
[具体问题和位置]

## 🟠 GEO 检查：[通过/需修复]
[具体问题和位置]

## 🟡 模板检查：[通过/需修复]
[具体问题和位置]

## 修复优先级
🔴 必须修复：
🟡 建议修复：
🟢 可选优化：
```

---

## 工作流程

```
1. 用户发出指令
2. HERMES 写 TASK 文件到 pending/
3. 用户通知 CLAUDE CODE 去读取
4. CLAUDE CODE 读取 → 执行 → 产出文件
5. 用户通知 HERMES 去检测
6. HERMES 读取产出 → 检测 → 写 REVIEW 到 failed/ 或 passed/
7. 如果 failed → 用户通知 CLAUDE CODE 读取 review 修改
8. 回到步骤 5
9. 如果 passed → HERMES 移动 TASK 到 completed/
```

---

## 核心参考文档

- `D:\CODEX\LAUCH VERSION\WEBSITE-MANAGING-README.md` — 19章完整系统（必读）
- `D:\CODEX\LAUCH VERSION\INTERNAL-LINKING-BLUEPRINT.md` — 内链执行图
- `D:\CODEX\LAUCH VERSION\SEO-PACKS\` — 已完成的 SEO 文章（风格参考）

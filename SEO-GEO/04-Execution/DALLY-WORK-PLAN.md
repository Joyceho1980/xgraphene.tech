# 🌐 XIHE GEO 每日工作计划表

> **原则：** 每一天只做一件事。每件事有明确的验收标准。
> **执行对象：** SOLO CODER 或 Claude Code，按规格文档填空。
> **我的工作：** 每天确认执行结果，不让你重复解释。

---

## 当前状态（2026-06-23）

### ✅ 已完成
| 项 | 备注 |
|---|------|
| Phase 1 全部 | Schema部署、404修复、发射率清理、三层架构 |
| Graphene FIR Hub 结构调整 | Quick Answer + Why This Matters + Explore |
| 首页 Hero Knowledge Path | 左下角导航条 |
| 首页 Hero + Footer 品牌声明 | "XIHE Technology — A Graphene Far-Infrared Medical Technology Platform..." |
| 旧路径 /graphene-fir/ 清理 | 已删除，全站链接统一 |
| 全站 Footer 统一 | 已修改 |

### ❌ 待执行
| 优先级 | 项 | 状态 |
|--------|---|------|
| **P0** | 11个Hub 5层结构部署（Node Definition → Knowledge Position → Evidence Snapshot → Graph Navigation） | ❌ |
| **P0** | Graphene FIR Hub 最终确认样板 | ❌ |
| **P1** | 4个空Hub处理（noindex或骨架填空） | ❌ |
| **P1** | 《XIHE NIQS实测数据》页面创建 | ❌ |
| **P2** | 内容生产（每周 2 健康 + 3 石墨烯） | ❌ |

---

## 📅 每日执行表

### Day 1 — 11个Hub 5层结构部署

**任务：** 为所有11个Hub的 `index.html` 增加4个机器可读层：
1. Node Definition（顶部，Hero下方）
2. Knowledge Position Card（Node Definition下方）
3. Evidence Snapshot（Quick Answer下方，正文前）
4. Graph Navigation（底部，FAQ/Disclaimer与footer之间）

**执行规格：** 见 `05-HUB-5-LAYER-SPEC.md`

**验收标准：**
- [ ] 所有11个Hub的 index.html 结构一致
- [ ] Node Definition 包含：Hub名称、Knowledge Layer、Primary Question、Core Mechanism、Upstream Drivers、Downstream Outcomes
- [ ] Knowledge Position 显示该Hub在4层知识图谱中的位置
- [ ] Evidence Snapshot 包含3条Evidence要点
- [ ] Graph Navigation 底部有上游/下游链接
- [ ] 内联style，不依赖外部CSS class（防样式污染）

---

### Day 2 — 验收 + 修复

**任务：** 人工审阅 Day 1 输出，修复叙事/链接/层级错误。

**验收标准：**
- [ ] 每个Hub的上游/下游链接正确
- [ ] Knowledge Layer 分类与 4 层图谱一致
- [ ] Evidence Snapshot 内容准确
- [ ] 无 HTML 结构错误（缺标签/闭合）

---

### Day 3 — Graphene FIR Hub 样板定稿

**任务：** 确认 Graphene FIR Hub 的 5 层结构叙事正确。作为其他Hub的样板。

**核心需确认：**
- Graphene FIR Hub 属于 Technology Layer 还是 Energy Science Layer？
- Upstream Drives 是什么？Downstream Outcomes 是什么？

**验收标准：**
- [ ] Graphene FIR Hub 5 层结构完整
- [ ] 叙事与当前全站定位一致（Medical Technology Platform）
- [ ] 可作为其他 Hub 的格式参考

---

### Day 4 — 4个空Hub处理

**任务：**
- Metabolism Hub
- Bioenergetics Hub
- Oxidative Stress Hub
- Research-Library Hub

**处理方式：** 加上5层结构骨架（填空），加 `<meta name="robots" content="noindex">` 直到内容完整。

**验收标准：**
- [ ] 4个空Hub有5层结构骨架
- [ ] 有 noindex 标记
- [ ] 不暴露空内容给用户/AI

---

### Day 5 — 《XIHE NIQS实测数据》页面创建

**任务：** 用 NIQS 检测报告数据创建独立的实测数据页面。

**验收标准：**
- [ ] 数据表格（发射率、辐射效率、波长）
- [ ] NIQS报告编号 (2022)WT-HW-00529
- [ ] 与 CORE-TECHNICAL-PARAMETERS.md 一致

---

### Week 2+ — 内容生产

**每周产出：** 2 健康 + 3 石墨烯 = 5 篇

按 `WEEKLY-CONTENT-RHYTHM.md` 和 `CONTENT-MIX-RATIO.md` 执行。

---

## 知识图谱 4 层分类

```
SYMPTOMS（症状层）
├── Sleep Hub
├── Fatigue Hub
├── Recovery Hub
├── Inflammation Hub
├── Metabolism Hub

MECHANISMS（机制层）
├── Mitochondria Hub
├── Bioenergetics Hub
├── Microcirculation Hub

ENERGY SCIENCE（能量科学层）
├── Cellular Energy Hub
├── Oxidative Stress Hub

TECHNOLOGY / APPLICATION（技术应用层）
├── Graphene FIR Hub
├── Technology Platform Hub
├── Clinical Evidence Hub
├── Research Library Hub
```

---

## 文件索引

| 文件 | 用途 |
|------|------|
| `05-HUB-5-LAYER-SPEC.md` | Day 1 执行：11个Hub每层的精确HTML模板 + 填空数据 |
| `WEEKLY-CONTENT-RHYTHM.md` | Week 2+ 内容生产节奏 |
| `CONTENT-MIX-RATIO.md` | 内容类型配比 |
| `00-Core-Strategy/CORE-TECHNICAL-PARAMETERS.md` | Day 5 实测数据页数据源 |
| `PERSONA-QUESTION-CHAIN-MAP.md` | 问题树来源 |

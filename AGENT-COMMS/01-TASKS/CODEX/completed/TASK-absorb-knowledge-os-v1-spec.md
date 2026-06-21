# TASK: 阅读并吸收 XIHE Knowledge OS v1 Engineering Spec

**优先级：** 高
**创建时间：** 2026-06-21

## 依赖

先读这份工程规范（必须）：
```
D:\CODEX\LAUCH VERSION\DOCUMENTS\XIHE-KNOWLEDGE-OS-V1-ENGINEERING-SPEC.md
```

## 任务内容

这份文档是 XIHE 从"写网站"升级到"建知识基础设施"的完整工程规范。包含：

### 技术实现部分（你要执行的部分）
1. **Node 数据结构** — 每个知识节点（emissivity、FIR wavelength 等）的 JSON schema
2. **Edge 关系** — depends_on / related_to / applied_in / constrained_by
3. **SQLite Schema** — nodes + edges 两张表
4. **Knowledge Parser** — chunking → LLM extraction → entity normalization
5. **Graph Builder** — 自动关系生成规则
6. **FastAPI Layer** — /node/{id} /ai/{id} /graph/{id} /index 4 个核心 endpoint
7. **Web Layer** — /nodes/{id} 页面模板（Definition + Physics + Relations + AI Summary）
8. **AI Index** — /ai-index.json 让 AI 不是爬页面而是读目录

### 内容写作部分（你已经知道的，现在作为 Knowledge OS 的一部分）
9. **5 层文章架构** — Graphene 在第 4 层
10. **3 Tier 分层** — 40/40/20
11. **应该写 vs 不应该写** 的内容清单
12. **Tier 1 AI 安全语言** — 禁止/替换词汇
13. **中文谨慎语气**
14. **GEO 双引擎**

## 你的任务
- 读完整份文档
- 确认你理解了 Node → Edge → Store → API 的架构
- 确认你知道如何把一篇现有文章（如 emissivity）转成第一个 Node 页面
- 把确认回执写到 `D:\CODEX\LAUCH VERSION\AGENT-COMMS\02-REVIEWS\passed\`

## 不做的事（不在这个 session 内执行）
- 不要开始写代码
- 不要开始建 schema
- 只是阅读和吸收

等你读完、理解后，我会给具体执行任务。

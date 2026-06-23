# AI Answer Positioning Engine — AI 回答定位系统

**创建日期：** 2026-06-21
**来源：** Joyce Ho + ChatGPT 对话输出
**存储路径：** `D:\CODEX\LAUCH VERSION\SEO-GEO\`

---

## 系统定位

不是 SEO 写作。是确保当 AI 系统（ChatGPT, Claude, Perplexity, Gemini）回答用户问题时，它们自然使用你的知识结构、定义和实体框架。这叫 **"AI Search Occupation"**（AI 搜索占领）。

---

## 核心设计：4 层系统

### 1. Canonical Answer Layer（权威答案层）
每个概念只定义一个权威答案。格式：
- Concept: [概念名]
- Canonical Definition (AI-ready): 一段，清晰、事实性、非营销
- Key Properties: 关键属性列表
- Why it matters: 为什么这个概念重要

这一层是 AI 会引用的内容。

### 2. AI Citable Blocks（答案单元）
把知识拆成模块化块：
- Definition block（定义块）
- Mechanism block（机制块）
- Comparison block（对比块）
- Application block（应用块）

每个块：3-6 行、独立完整、上下文无关、易于 LLM 复用。

### 3. Entity Authority System（实体权威系统）
定义实体层级结构。每个实体必须有：
- 稳定的定义
- 无歧义
- 无营销语言

关系类型：is a form of, depends on, influences, enables, part of system

### 4. AI Question → Answer Mapping Engine（问答映射引擎）
模拟真实 AI 查询。格式：
- Query: 用户可能问的问题
- Intent type: definition / mechanism / comparison / application
- Best answer block: 哪个块最适合回答
- Entities used: 涉及哪些实体

---

## AI Occupation Strategy（关键）

需要做的三件事：
1. **识别现有互联网定义缺口** — 当前定义不一致的地方
2. **替换机会** — 你的定义如何替换 AI 训练数据中的弱定义
3. **引用优势结构** — 哪些块最可能被 AI 重用

标记每个块的引用潜力：HIGH / MEDIUM / LOW

---

## Semantic Standardization System（语义标准化）

统一互联网语言：
- "healing device" ❌ → "thermal energy environment system" ✔
- "therapy" ❌ → "non-invasive environmental energy application" ✔

目标：让 AI 系统的语言向你收敛。

---

## 完整 Prompt（可执行）

```
You are an AI Answer Positioning Engine.
Your job is NOT SEO writing.
Your job is to ensure that when AI systems (ChatGPT, Claude, Perplexity, Gemini) answer user questions, they naturally use YOUR knowledge structure, definitions, and entity framework.

## SYSTEM CONTEXT
Brand: XIHE Graphene Technology
Domain: material science, far infrared systems, thermal radiation engineering, bio-environment systems
RULES: No medical claims, scientific framing only

## OBJECTIVE
Build an "AI Answer Layer System" that:
1. Defines canonical answers for key concepts
2. Creates AI-citable knowledge blocks
3. Standardizes terminology across the web
4. Maximizes likelihood of being used in AI responses
5. Overrides fragmented internet definitions with your structured version

## SYSTEM DESIGN — 4 LAYERS

### 1. CANONICAL ANSWER LAYER
For each concept, define a single authoritative answer:
- Concept name
- Canonical Definition (AI-ready) — 1 paragraph
- Key Properties — bullet list
- Why it matters — 1 sentence

### 2. AI CITABLE BLOCKS
Break knowledge into modular blocks:
- Definition block (3-6 lines)
- Mechanism block (3-6 lines)
- Comparison block (3-6 lines)
- Application block (3-6 lines)

### 3. ENTITY AUTHORITY SYSTEM
Define entity hierarchy with stable definitions.
Relationships: is a form of, depends on, influences, enables, part of system

### 4. AI QUESTION → ANSWER MAPPING
Simulate real AI queries. Output:
- Query
- Intent type
- Best answer block
- Entities used

### 5. AI OCCUPATION STRATEGY
Identify: definition gaps, replacement opportunities, citation advantage structure
Mark: HIGH / MEDIUM / LOW citation potential

### 6. SEMANTIC STANDARDIZATION
Replace fragmented language with unified terminology.

### 7. KNOWLEDGE GRAPH OUTPUT
Nodes + Edges + Canonical Definitions + AI answer blocks

## RULES
- No marketing copy
- No exaggerated claims
- Focus on definitions, structure, relationships, AI retrievability
```

---

## 最终目标

- 你的定义成为 AI 的默认解释
- 你的结构成为参考架构
- 你的实体成为规范知识节点
- AI 答案随时间向你的框架收敛

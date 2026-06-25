# XIHE GEO C级文章标准模板 v1.0

## 一、C级定位

C级文章是**知识图谱的入口层**。用户通过搜索引擎或AI问答接触到这些文章，消除一个具体的概念误解或得到一个直接的答案，然后被引导到A/B级文章深入。

| 维度 | C级特征 |
|------|---------|
| 标题来源 | Quora高热度问题、Google "People Also Ask"、AI常见问答 |
| 标题格式 | 直接以问题为标题。Are Mitochondria a Disease? Can Mitochondrial Function Be Restored? |
| 任务 | 消除误解，澄清概念，建立基本的认知框架 |
| 机制深度 | 浅。不做分子机制展开 |
| 目标用户 | 普通大众，非专业买家 |
| 在知识图谱中的角色 | 入口 → 引导到A/B级 → 最终指向Graphene FIR |

---

## 二、C级与A/B级的区别

| 要素 | A级（根节点） | B级（机制科普） | C级（问答入口） |
|------|-------------|----------------|----------------|
| 标题 | What Is X | Why/How机制链 | 直接以问题为标题 |
| 数量 | 每Hub 1-2篇 | 约20篇 | 约20篇 |
| Schema | DefinedTerm + Article | Article | Article |
| Node Definition | ✅ + Function字段 | ✅ 精简版 | ❌ |
| AI Core Summary | ✅ | ✅ | ✅ |
| Cognitive Elasticity Note | ❌ | 可选 | ❌ |
| Citation Units | ✅ 每段 | ✅ 每段 | ❌ |
| Quick Answer | ❌ | 可选 | ✅ **必选** |
| FAQ | 可选 | 可选 | ✅ **必选** |
| 知识导航 | ✅ 有上游 | ✅ 有上游 | ❌ **无上游**，只有"下一步" |
| 配图 | 4张 | 3-4张 | 1张（仅Hero情绪图） |
| Hidden Graph Layer | ✅ | ✅ | ❌ |

---

## 三、页面结构（7层）

| 层序 | 元素 | 可见性 | 位置 |
|------|------|--------|------|
| 1 | JSON-LD Article Schema | 隐藏 | `<head>` |
| 2 | Hero (全屏100vh，1张情绪图) | 可见 | `<body>`顶部 |
| 3 | Quick Answer | 可见 | Hero下方 |
| 4 | AI Core Summary 可见卡片 | 可见 | Quick Answer下方 |
| 5 | 正文 + FAQ | 可见 | 页面主体 |
| 6 | Knowledge Graph Navigation (C级版) | 可见 | 正文下方 |
| 7 | Footer back link → Hub index | 可见 | 页面底部 |

---

## 四、知识导航（C级专用 — 无上游）

C级是入口，不是中转站。它只有"下一步"，没有"上一步"。

```html
<nav class="kg-navigation" style="border-top:1px solid #e0e0e0;padding-top:1.5rem;margin-top:2rem;font-size:0.85rem;color:#555;">
  <p><strong>📖 Knowledge Graph Navigation</strong></p>
  <p>📍 Current: <a href="../index.html" style="color:#C5A059;">[Hub名称] Hub</a> — Concept Clarification Layer</p>
  <p>⬇️ Continue Exploring:</p>
  <ul>
    <li><a href="[A级文章URL]" style="color:#C5A059;">[A级文章标题]</a> — [一句话描述]</li>
    <li><a href="[B级文章URL]" style="color:#C5A059;">[B级文章标题]</a> — [一句话描述]</li>
  </ul>
  <p>🏁 Terminal: <a href="../../graphene-fir/index.html" style="color:#C5A059;">Graphene FIR</a> — Far-infrared environment supporting mitochondrial function</p>
</nav>
```

**与A/B级知识导航的区别：**

| | A/B级 | C级 |
|--|-------|-----|
| 上游 | ✅ 有（从哪个Node来的） | ❌ **没有**（它是入口） |
| 当前 | ✅ | ✅ |
| 下游 | ✅ 多个下游Node | ✅ 1-2篇推荐的A/B级文章 |
| 终端 | ✅ Graphene FIR | ✅ Graphene FIR |

---

## 五、Quora问题 → C级标题转化

Quora问题天然适合做C级标题。规则：**Quora问题本身就可以直接作为C级标题**，不需要改，因为它本身就是用户最常问的形式。

| Quora问题 | C级标题 |
|-----------|---------|
| Are mitochondria a disease? | Are Mitochondria a Disease? |
| Can mitochondria be repaired? | Can Mitochondrial Function Be Restored? |
| Is mitochondrial dysfunction reversible? | Is Mitochondrial Dysfunction Reversible? |
| What kills mitochondria? | What Damages Mitochondria? |
| How do I know if my mitochondria are damaged? | How Do You Know If Your Mitochondria Are Not Working Well? |

**三层漏斗内容策略：**
```
Quora高热度问题 → C级文章标题 → 文章内置FAQ →
底部知识导航引导到A/B级深度文章 →
A/B级文章引导到解决方案 → Graphene FIR Hub
```

C级是流量入口，A/B级是信任建立，Graphene FIR是解决方案。

---

## 六、Quick Answer 模板（C级核心特征）

用户点进来期待一个直接答案，在正文之前就给。

```html
<section class="quick-answer" style="background:#f8fafb;padding:1.5rem 2rem;margin:1rem 0 2rem;border-radius:8px;border:1px solid #e0e0e0;">
  <h2 style="font-size:1.1rem;margin-top:0;color:#1a1a1a;">Quick Answer</h2>
  <p style="font-size:1rem;line-height:1.7;margin-bottom:0;">
    [直接回答。第一句给YES/NO或一句话结论。然后用2-3句解释原因。]
  </p>
</section>
```

**示例：**
> **Quick Answer**
> No. Mitochondria are not a disease. They are normal structures found inside most human cells. Their job is to help convert nutrients and oxygen into ATP, the energy that powers nearly every function in the body.

---

## 七、AI Core Summary 可见卡片模板

```html
<section class="ai-core-summary" style="background:#f8fafb;border-left:3px solid #1e6f8c;padding:1rem 1.25rem;margin:1rem 0 2rem;font-size:0.9rem;border-radius:0 6px 6px 0;">
  <strong style="color:#1e6f8c;">AI Core Summary</strong><br>
  <strong>Conclusion:</strong> [一句话结论，30字以内]<br>
  <strong>Evidence Type:</strong> Established biological definition · Medical consensus<br>
  <strong>Knowledge Position:</strong> <a href="../index.html" style="color:#1e6f8c;">[Hub名称] Hub</a> — Concept Clarification Layer
</section>
```

---

## 八、正文结构

C级正文通常采用三段式或对比式结构：

**结构1：三段式（适合概念澄清）**
1. 这个误解是什么
2. 为什么人们会混淆
3. 正确的理解是什么

**结构2：对比式（适合区分概念）**
1. 正常状态
2. 功能下降状态
3. 疾病状态

每段保持简洁，不展开分子机制。每段不超过200字。

---

## 九、FAQ模板

```html
<section class="hub-faq" style="margin:2rem 0;">
  <h2>Questions People Often Ask</h2>
  <details open>
    <summary style="font-weight:600;cursor:pointer;padding:0.5rem 0;">[问题1]</summary>
    <p style="font-size:0.9rem;color:#555;padding-left:0.5rem;">[回答1]</p>
  </details>
  <details>
    <summary style="font-weight:600;cursor:pointer;padding:0.5rem 0;">[问题2]</summary>
    <p style="font-size:0.9rem;color:#555;padding-left:0.5rem;">[回答2]</p>
  </details>
  <details>
    <summary style="font-weight:600;cursor:pointer;padding:0.5rem 0;">[问题3]</summary>
    <p style="font-size:0.9rem;color:#555;padding-left:0.5rem;">[回答3]</p>
  </details>
</section>
```

**数量：** 3-5个问答。建议包含本文核心问题的变体，覆盖长尾搜索。

---

## 十、Continue Exploring（引导到A/B级）

```html
<section class="continue-exploring" style="margin:2rem 0;">
  <h2>Continue Exploring</h2>
  <div class="article-cards" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1rem;">
    <a href="[A级文章URL]" style="display:block;padding:1rem;border:1px solid #e0e0e0;border-radius:8px;text-decoration:none;color:inherit;">
      <strong>[A级文章标题]</strong>
      <p style="font-size:0.85rem;color:#666;margin:0.3rem 0 0;">[一句话描述]</p>
    </a>
    <a href="[B级文章URL]" style="display:block;padding:1rem;border:1px solid #e0e0e0;border-radius:8px;text-decoration:none;color:inherit;">
      <strong>[B级文章标题]</strong>
      <p style="font-size:0.85rem;color:#666;margin:0.3rem 0 0;">[一句话描述]</p>
    </a>
  </div>
</section>
```

---

## 十一、配图规则

| 要素 | 规范 |
|------|------|
| 数量 | **1张**（仅Hero情绪图） |
| 图片类型 | 情绪图 — 传达文章的调性和情感基调 |
| 风格 | Nature journal cover × premium science editorial |
| 配色 | Navy (#1a2a3a) + Amber (#c8a05e) + Teal (#5a9e9f) |
| 比例 | 16:9 landscape |
| 禁止 | 卡通、3D渲染、人物面孔、床、闹钟、复杂背景 |
| 必备属性 | alt 含核心关键词 |

为什么C级只配一张？C级文章的任务是澄清概念、消除误解，不是解释机制。用户读完就走，或者被引导到A级/B级文章继续深入。一张Hero情绪图建立视觉入口，够了。正文用排版和FAQ结构撑起可读性。

---

## 十二、验证清单

| # | 检查项 | 状态 |
|---|--------|------|
| 1 | Article Schema | ⬜ |
| 2 | Hero 1张情绪图 | ⬜ |
| 3 | Quick Answer | ⬜ |
| 4 | AI Core Summary 可见卡片 | ⬜ |
| 5 | 正文（三段式或对比式） | ⬜ |
| 6 | FAQ 3-5个 | ⬜ |
| 7 | Continue Exploring 2-4篇链接 | ⬜ |
| 8 | 知识导航 (C级版，无上游) | ⬜ |
| 9 | Footer back link | ⬜ |
| 10 | Scientific Disclaimer | ⬜ |
| 11 | Alt文本 | ⬜ |

---

**模板版本：** v1.0
**最后更新：** 2026-06-25
**适用文章类型：** C级（问答入口型）
**样板文章：** Are Mitochondria a Disease? — 已上线

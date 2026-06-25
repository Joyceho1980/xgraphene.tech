# XIHE GEO C级文章标准模板 v1.0

## 一、C级与A级/B级的区别

| 维度 | A级（根节点） | B级（机制科普） | C级（问答/概念澄清） |
|------|-------------|----------------|-------------------|
| 标题格式 | What Is X? | 因果机制陈述 | 直接问题：Are X a Y? / Why does X...? |
| 内容结构 | 定义 → 多因子模型 → 总结 | 机制链 → 每节Citation → 知识导航 | Quick Answer → Why This Matters → 正文 → FAQ → Continue Exploring |
| 机制深度 | 全面 | 具体分子机制 | 区分概念，不展开分子机制 |
| Citation Units | ✅ 每段1个 | ✅ 每段1个 | ❌ 不需要 |
| Visible Node Definition | ✅ + Function字段 | ✅ 精简版 | ❌ |
| Cognitive Elasticity Note | ✅ | 可选 | ❌ |
| Hidden Graph Layer | ✅ | ✅ | ❌ |
| 配图 | 4张 | 3-4张 | 1张（仅Hero情绪图） |
| 目标用户 | B2B专业买家 | B2B专业买家 + 深入研究的用户 | 被误解困扰的普通读者 |

---

## 二、页面结构（6层）

| 层序 | 元素 | 可见性 | 位置 |
|------|------|--------|------|
| 1 | JSON-LD Article Schema | 隐藏 | `<head>` |
| 2 | JSON-LD ItemList | 隐藏 | `<head>` |
| 3 | AI Core Summary 可见卡片 | 可见 | H1下方、Quick Answer上方 |
| 4 | 正文（Quick Answer → Why This Matters → 展开 → FAQ） | 可见 | 页面主体 |
| 5 | Knowledge Graph Navigation | 可见 | 正文下方 |
| 6 | Footer back link | 可见 | 页面底部 |

**不需要：** Node Definition、Citation Units、Cognitive Elasticity Note、Hidden Graph Layer、DefinedTerm Schema。

---

## 三、文章元信息

### H1标题规范
- **格式：** 直接回答问题
- **示例：** Are Mitochondria a Disease?

### 副标题规范
- **格式：** [一句话澄清] — [适用场景]
- **示例：** Understanding the Difference Between Normal Function, Dysfunction, and Disease

---

## 四、AI Core Summary 可见卡片（H1下方、Quick Answer上方）

```html
<section class="ai-core-summary" style="background:#f8fafb;border-left:3px solid #1e6f8c;padding:1rem 1.25rem;margin:1rem 0 2rem;font-size:0.9rem;border-radius:0 6px 6px 0;">
  <strong style="color:#1e6f8c;">AI Core Summary</strong><br>
  <strong>Conclusion:</strong> [一句话核心结论]<br>
  <strong>Evidence Type:</strong> [Established biological definition · Medical consensus]<br>
  <strong>Knowledge Position:</strong> <a href="../index.html">[Hub名称] Hub</a> → [澄清/建立理解]
</section>
```

**示例（Mitochondria Hub）：**
> Conclusion: Mitochondria are normal cellular structures, not a disease. Mitochondrial dysfunction describes performance. Mitochondrial disease describes a medical diagnosis. Confusing these three concepts is common but important to clarify.
> Evidence Type: Established biological definition · Medical consensus
> Knowledge Position: Mitochondria Hub → 澄清概念混淆，建立理解基础

---

## 五、正文结构（4段式）

### 1. Quick Answer
- H2: In Brief 或 Quick Answer
- 1-2段，直接回答问题
- 粗体 highlight核心区别

### 2. Why This Matters / 展开
- 解释为什么这个问题常见
- 区分三个概念：正常功能 / 功能障碍 / 疾病

### 3. 具体区分（如有）
- 可选的第三段，深入澄清一个常见误区

### 4. FAQ（可选）
- 4-5个常见问题
- 每问1段简洁回答

---

## 六、知识导航模板（正文下方）

```html
<nav class="kg-navigation" style="border-top:1px solid #e0e0e0;padding-top:1.5rem;margin-top:2rem;font-size:0.85rem;color:#555;">
  <p><strong>📖 Knowledge Graph Navigation</strong></p>
  <p>📍 Current: <a href="../index.html">[Hub名称] Hub</a> — [层级定位]</p>
  <p>⬇️ Next: <a href="../what-is-mitochondrial-health.html">[A级文章]</a> — [深入机制]</p>
  <p>🏁 Terminal: <a href="../../graphene-fir/index.html">Graphene FIR</a> — 构建远红外辐射环境</p>
</nav>
```

---

## 七、配图规则

| 要素 | 规范 |
|------|------|
| 数量 | **1张**（仅Hero情绪图） |
| 位置 | H1下方、正文上方 |
| 作用 | 建立视觉入口，传递调性（安抚/澄清/不恐吓） |
| 风格 | Nature journal cover × premium science editorial |
| 配色 | Navy (#1a2a3a) + Amber (#c8a05e) + Teal (#5a9e9f) |

---

## 八、GEO元素差异表

| 元素 | A级 | B级 | C级 |
|------|-----|-----|-----|
| Article Schema | ✅ | ✅ | ✅ |
| DefinedTerm Schema | ✅ | ❌ | ❌ |
| ItemList | ✅ | ✅ | ✅ |
| Hero 100vh | ✅ | ✅ | ❌ |
| Node Definition | ✅ + Function | ✅ 精简版 | ❌ |
| AI Core Summary | ✅ 可见卡片 | ✅ display:none | ✅ 可见卡片 |
| Cognitive Elasticity Note | ✅ | 可选 | ❌ |
| Citation Units | ✅ 每段 | ✅ 每段 | ❌ |
| 知识导航 | ✅ | ✅ | ✅ |
| Hidden Graph Layer | ✅ | ✅ | ❌ |
| 配图 | 4张 | 3-4张 | 1张 |

---

## 九、验证清单

| # | 检查项 | 状态 |
|---|--------|------|
| 1 | H1 直接回答问题格式 | ⬜ |
| 2 | AI Core Summary 可见卡片（蓝色左边框） | ⬜ |
| 3 | Quick Answer 直接回答问题 | ⬜ |
| 4 | 正文：区分概念（正常/功能障碍/疾病） | ⬜ |
| 5 | FAQ（如有） | ⬜ |
| 6 | 知识导航（Current → Next → Terminal） | ⬜ |
| 7 | Continue Exploring / Related Reading | ⬜ |
| 8 | Scientific Disclaimer | ⬜ |
| 9 | Footer back link | ⬜ |
| 10 | Hero情绪图1张 | ⬜ |

---

**模板版本：** v1.0
**最后更新：** 2026-06-25
**适用文章类型：** C级（问答/概念澄清）
**样板文章：** `/SCIENCE/KNOWLEDGE/Mitochondria/are-mitochondria-a-disease.html`

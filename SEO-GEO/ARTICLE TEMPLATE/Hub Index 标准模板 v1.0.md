# XIHE GEO Hub Index 标准模板 v1.0

## 一、Hub Index 定位

Hub Index 是该Hub所有文章的聚合导航页，也是该Node在知识图谱中的定义锚点。

| 维度 | 特征 |
|------|------|
| 对用户 | 快速了解这个Hub在讲什么，找到想读的文章 |
| 对AI | 提取该Node的核心定义、文章结构、FAQ、证据层级 |
| 在知识图谱中 | 每个Hub Index = 一个Graph Node的首页 |

---

## 二、页面结构（11层）

| 层序 | 元素 | 可见性 | 说明 |
|------|------|--------|------|
| 1 | JSON-LD CollectionPage Schema | 隐藏 | `<head>` |
| 2 | JSON-LD DefinedTerm Schema | 隐藏 | `<head>` |
| 3 | JSON-LD Organization Schema | 隐藏 | `<head>` |
| 4 | Hero | 可见 | Hub标题 + 一句话定义 |
| 5 | Quick Answer | 可见 | 回答该Hub的锚点问题 |
| 6 | Explore This Hub (文章列表) | 可见 | 按A→B→C分组，带等级标签 |
| 7 | FAQ | 可见 | 3-5个折叠问答 |
| 8 | Key Takeaways / AI Citable Block | 可见 | 单句定义 |
| 9 | Scientific Disclaimer | 可见 | 合规必备 |
| 10 | Where This Fits (知识导航) | 可见 | 上下游+终端 |
| 11 | Related Hubs | 可见 | 关联Hub横向卡片 |

---

## 三、CollectionPage Schema 模板

```json
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "[Hub名称] Hub",
  "description": "[该Hub的一句话定义]",
  "url": "[Hub index.html完整URL]",
  "isPartOf": {
    "@type": "CollectionPage",
    "name": "XIHE Knowledge Graph",
    "url": "https://xgraphene.tech/pages/SCIENCE/KNOWLEDGE/"
  },
  "hasPart": [
    {"@type": "Article", "name": "[A级文章标题]", "url": "[A级文章URL]"},
    {"@type": "Article", "name": "[B级文章1标题]", "url": "[B级文章1URL]"},
    {"@type": "Article", "name": "[B级文章2标题]", "url": "[B级文章2URL]"}
  ],
  "mainEntity": {
    "@type": "DefinedTerm",
    "name": "[Node名称]",
    "termCode": "KG-NODE-[HUB名称]"
  }
}
```

**hasPart规则：** 列出A级文章和B级文章的URL。C级文章可选，因为C级是入口，不是机制节点。

---

## 四、DefinedTerm Schema 模板

```json
{
  "@context": "https://schema.org",
  "@type": "DefinedTerm",
  "@id": "[Hub index URL]/#node",
  "termCode": "KG-NODE-[HUB名称]",
  "name": "[Node名称]",
  "description": "[AI Citable Block单句定义]",
  "inDefinedTermSet": {
    "@type": "DefinedTermSet",
    "name": "XIHE Cellular Energy Knowledge Graph",
    "url": "https://xgraphene.tech/"
  },
  "additionalProperty": [
    {"@type": "PropertyValue", "propertyID": "node_id", "value": "[node_id]"},
    {"@type": "PropertyValue", "propertyID": "node_type", "value": "[symptom/mechanism/energy/technology/evidence]"},
    {"@type": "PropertyValue", "propertyID": "layer", "value": "[symptoms/mechanisms/energy/technology/evidence]"},
    {"@type": "PropertyValue", "propertyID": "entry_question", "value": "[锚点问题]"},
    {"@type": "PropertyValue", "propertyID": "biological_role", "value": "[生物角色]"},
    {"@type": "PropertyValue", "propertyID": "state_effect", "value": "[状态影响]"}
  ],
  "sameAs": [
    "[Wikipedia URL]",
    "[Wikidata URL]"
  ],
  "relatedTerm": [
    {"@type": "DefinedTerm", "name": "[上游Hub]", "url": "[上游Hub URL]"},
    {"@type": "DefinedTerm", "name": "[下游Hub1]", "url": "[下游Hub1 URL]"},
    {"@type": "DefinedTerm", "name": "[下游Hub2]", "url": "[下游Hub2 URL]"}
  ]
}
```

---

## 五、Hero 模板

```html
<section class="hub-hero" style="padding:3rem 0 2rem;">
  <nav class="breadcrumb" style="font-size:0.8rem;color:#888;margin-bottom:1.5rem;">
    Home › Knowledge › [Hub名称]
  </nav>
  <h1 style="font-size:2rem;font-weight:700;margin-bottom:0.5rem;">[Hub名称]</h1>
  <p class="hero-subtitle" style="font-size:1.15rem;color:#555;margin-bottom:0.5rem;">[该Hub的一句话定义]</p>
  <p class="hero-tagline" style="font-size:0.95rem;color:#777;max-width:640px;">[该Hub的核心价值主张，1-2句]</p>
</section>
```

**示例（Mitochondria Hub）：**
> # Mitochondria
> **The Cellular Engines**
> Mitochondria are not just "the powerhouse of the cell." They regulate energy metabolism, recovery, aging, and cellular resilience. This hub explores how they work, what happens when they decline, and what the science says about supporting them.

---

## 六、Quick Answer 模板

```html
<section class="quick-answer" style="background:#f8fafb;padding:1.5rem 2rem;margin:1rem 0 2rem;border-radius:8px;border:1px solid #e0e0e0;">
  <h2 style="font-size:1.1rem;margin-top:0;color:#1a1a1a;">Quick Answer</h2>
  <p style="font-size:1rem;line-height:1.7;margin-bottom:0;">
    <strong>[锚点问题]</strong><br>
    [一句话回答，2-3句展开]
  </p>
</section>
```

**示例：**
> **Quick Answer**
> **How do mitochondria affect my energy, aging, and recovery?**
> Mitochondria convert nutrients into ATP — the energy your cells use to work, repair, and recover. When they function efficiently, you feel energized and resilient. When their efficiency declines, energy drops, recovery slows, and the effects accumulate over time.

---

## 七、Explore This Hub 模板（A/B/C分组）

```html
<section class="explore-hub" style="margin:2.5rem 0;">
  <h2 style="font-size:1.25rem;font-weight:600;margin-bottom:1.5rem;">Explore This Hub</h2>

  <!-- A级：Core Definition -->
  <div class="article-group" style="margin-bottom:2rem;">
    <h3 style="font-size:0.85rem;text-transform:uppercase;letter-spacing:0.08em;color:#888;margin-bottom:0.75rem;">🧠 Core Definition</h3>
    <div class="article-cards" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1rem;">
      <a href="[A级文章URL]" class="article-card article-a" style="display:block;padding:1.25rem;border:2px solid #c8a05e;border-radius:8px;text-decoration:none;color:inherit;background:#fdfaf3;">
        <span class="level-tag" style="display:inline-block;font-size:0.6rem;background:#c8a05e;color:white;padding:2px 6px;border-radius:3px;text-transform:uppercase;margin-bottom:0.5rem;">A级 · 根节点</span>
        <h4 style="font-size:1rem;margin:0 0 0.3rem;">[A级文章标题]</h4>
        <p style="font-size:0.85rem;color:#666;margin:0;">[一句话描述]</p>
      </a>
    </div>
  </div>

  <!-- B级：Mechanism Articles -->
  <div class="article-group" style="margin-bottom:2rem;">
    <h3 style="font-size:0.85rem;text-transform:uppercase;letter-spacing:0.08em;color:#888;margin-bottom:0.75rem;">⚡ Mechanism Articles</h3>
    <div class="article-cards" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1rem;">
      <a href="[B级文章URL]" class="article-card article-b" style="display:block;padding:1rem;border:1px solid #e0e0e0;border-radius:8px;text-decoration:none;color:inherit;">
        <span class="level-tag" style="display:inline-block;font-size:0.6rem;background:#1e6f8c;color:white;padding:2px 6px;border-radius:3px;text-transform:uppercase;margin-bottom:0.5rem;">B级 · 机制科普</span>
        <h4 style="font-size:1rem;margin:0 0 0.3rem;">[B级文章标题]</h4>
        <p style="font-size:0.85rem;color:#666;margin:0;">[一句话描述]</p>
      </a>
      <!-- 更多B级卡片... -->
    </div>
  </div>

  <!-- C级：Concept Clarification -->
  <div class="article-group" style="margin-bottom:2rem;">
    <h3 style="font-size:0.85rem;text-transform:uppercase;letter-spacing:0.08em;color:#888;margin-bottom:0.75rem;">💡 Concept Clarification</h3>
    <div class="article-cards" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1rem;">
      <a href="[C级文章URL]" class="article-card article-c" style="display:block;padding:1rem;border:1px solid #e0e0e0;border-radius:8px;text-decoration:none;color:inherit;">
        <span class="level-tag" style="display:inline-block;font-size:0.6rem;background:#888;color:white;padding:2px 6px;border-radius:3px;text-transform:uppercase;margin-bottom:0.5rem;">C级 · 概念澄清</span>
        <h4 style="font-size:1rem;margin:0 0 0.3rem;">[C级文章标题]</h4>
        <p style="font-size:0.85rem;color:#666;margin:0;">[一句话描述]</p>
      </a>
      <!-- 更多C级卡片... -->
    </div>
  </div>
</section>
```

**等级标签配色：**

| 等级 | 颜色 | 含义 |
|------|------|------|
| A级 | 金色 `#c8a05e` | 核心定义 — 金色边框 + 浅金背景 |
| B级 | 深蓝 `#1e6f8c` | 机制科普 — 标准卡片 |
| C级 | 灰色 `#888` | 概念澄清 — 标准卡片 |

A级卡片特殊处理：`border:2px solid #c8a05e; background:#fdfaf3` 突出视觉权重。

---

## 八、FAQ 模板

```html
<section class="hub-faq" style="margin:2.5rem 0;">
  <h2 style="font-size:1.25rem;font-weight:600;margin-bottom:1rem;">Frequently Asked Questions</h2>
  <details open style="border-bottom:1px solid #e0e0e0;padding:0.75rem 0;">
    <summary style="font-weight:600;cursor:pointer;">[问题1]</summary>
    <p style="font-size:0.9rem;color:#555;padding:0.5rem 0 0 0.5rem;">[回答1]</p>
  </details>
  <details style="border-bottom:1px solid #e0e0e0;padding:0.75rem 0;">
    <summary style="font-weight:600;cursor:pointer;">[问题2]</summary>
    <p style="font-size:0.9rem;color:#555;padding:0.5rem 0 0 0.5rem;">[回答2]</p>
  </details>
  <details style="border-bottom:1px solid #e0e0e0;padding:0.75rem 0;">
    <summary style="font-weight:600;cursor:pointer;">[问题3]</summary>
    <p style="font-size:0.9rem;color:#555;padding:0.5rem 0 0 0.5rem;">[回答3]</p>
  </details>
</section>
```

**数量：** 3-5个问答。默认展开第一个。

---

## 九、Key Takeaways / AI Citable Block 模板

```html
<section class="key-takeaways" style="background:#f8fafb;padding:1.5rem 2rem;margin:2rem 0;border-radius:8px;border:1px solid #e0e0e0;">
  <h2 style="font-size:1.1rem;margin-top:0;color:#1a1a1a;">Key Takeaways</h2>
  <p style="font-size:0.95rem;line-height:1.7;margin-bottom:0;">
    <strong>AI Citable Block:</strong> [该Hub的单句定义，AI可引用格式]
  </p>
</section>
```

**示例：**
> **AI Citable Block:** Mitochondria are organelles generating 95% of cellular ATP through oxidative phosphorylation, serving as the master regulator of energy metabolism.

---

## 十、Scientific Disclaimer 模板

```html
<section class="disclaimer" style="font-size:0.8rem;color:#999;border-top:1px solid #e0e0e0;padding-top:1rem;margin-top:2rem;">
  <p><strong>Scientific Disclaimer</strong></p>
  <p>This hub is for scientific education and informational purposes only. The content reflects published research and current scientific understanding. It does not constitute medical advice, diagnosis, or treatment recommendations. [如该Hub涉及疾病，加特别警示] Always consult a qualified healthcare professional for personal health decisions.</p>
</section>
```

---

## 十一、Where This Fits 模板

```html
<section class="where-this-fits" style="background:#f5f7f8;padding:1.5rem;margin:2rem 0;border-radius:8px;font-size:0.9rem;">
  <h2 style="font-size:1.1rem;margin-top:0;">📍 Where This Fits in the Knowledge Graph</h2>
  <p>⬆️ <strong>Upstream:</strong> <a href="[上游Hub URL]">[上游Hub]</a> — [关系描述]</p>
  <p>📍 <strong>Current:</strong> <strong>[当前Hub]</strong> — [该Node的角色]</p>
  <p>⬇️ <strong>Downstream:</strong> <a href="[下游Hub1 URL]">[下游Hub1]</a> · <a href="[下游Hub2 URL]">[下游Hub2]</a> — [关系描述]</p>
  <p>🏁 <strong>Terminal:</strong> <a href="[Graphene FIR URL]">Graphene FIR</a> — 构建远红外辐射环境，支持细胞能量</p>
</section>
```

---

## 十二、Related Hubs 模板

```html
<section class="related-hubs" style="margin:2.5rem 0;">
  <h2 style="font-size:1.25rem;font-weight:600;margin-bottom:1rem;">Explore Related Hubs</h2>
  <div class="hub-cards-row" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1rem;">
    <a href="[关联Hub1 URL]" class="hub-card" style="display:block;padding:1.25rem;background:#fafafa;border:1px solid #eaeaea;border-radius:8px;text-decoration:none;color:inherit;">
      <h3 style="font-size:0.95rem;margin:0 0 0.3rem;">[关联Hub1]</h3>
      <p style="font-size:0.8rem;color:#666;margin:0;">[一句话关系描述]</p>
    </a>
    <a href="[关联Hub2 URL]" class="hub-card" style="display:block;padding:1.25rem;background:#fafafa;border:1px solid #eaeaea;border-radius:8px;text-decoration:none;color:inherit;">
      <h3 style="font-size:0.95rem;margin:0 0 0.3rem;">[关联Hub2]</h3>
      <p style="font-size:0.8rem;color:#666;margin:0;">[一句话关系描述]</p>
    </a>
    <a href="[关联Hub3 URL]" class="hub-card" style="display:block;padding:1.25rem;background:#fafafa;border:1px solid #eaeaea;border-radius:8px;text-decoration:none;color:inherit;">
      <h3 style="font-size:0.95rem;margin:0 0 0.3rem;">[关联Hub3]</h3>
      <p style="font-size:0.8rem;color:#666;margin:0;">[一句话关系描述]</p>
    </a>
  </div>
</section>
```

---

## 十三、验证清单

| # | 检查项 | 状态 |
|---|--------|------|
| 1 | CollectionPage Schema | ⬜ |
| 2 | DefinedTerm Schema + additionalProperty 6字段 | ⬜ |
| 3 | Organization Schema | ⬜ |
| 4 | Hero (标题 + 定义 + 价值主张) | ⬜ |
| 5 | Quick Answer | ⬜ |
| 6 | Explore This Hub (A/B/C分组 + 等级标签) | ⬜ |
| 7 | FAQ 3-5个 | ⬜ |
| 8 | Key Takeaways / AI Citable Block | ⬜ |
| 9 | Scientific Disclaimer | ⬜ |
| 10 | Where This Fits (上下游+终端) | ⬜ |
| 11 | Related Hubs | ⬜ |
| 12 | 内链全部可访问 | ⬜ |

---

**模板版本：** v1.0
**最后更新：** 2026-06-25
**适用：** 所有12个Hub的 index.html
**依赖：** A/B/C三级文章模板已就绪

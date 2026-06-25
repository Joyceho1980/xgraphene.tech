# TASK-006: 升级 are-mitochondria-a-disease.html 到 C级标准

## 目标
将 `WEBSITE/pages/SCIENCE/KNOWLEDGE/Mitochondria/are-mitochondria-a-disease.html` 升级为符合 **C级（问答入口型）** 标准的页面。

核心参考：`SEO-GEO/ARTICLE TEMPLATE/C TEMPLATE ELEMENTS.md`

---

## 第一步：读取参考

1. `SEO-GEO/ARTICLE TEMPLATE/C TEMPLATE ELEMENTS.md` — C级完整规格
2. `SEO-GEO/ARTICLE TEMPLATE/A TEMPLATE EXAMPLE.html` — 全站通用 Hero CSS 样式参考（100vh + 左右分栏）
3. 当前线上页面作为内容保留参照

---

## 第二步：页面结构变更

### 当前状态 → 目标状态

| 元素 | 当前 | 目标 |
|------|------|------|
| Hero | 内页样式（非全屏） | **Hero 全屏100vh**，1张情绪图，左55%原图/右45%纯黑文字区（同A级Hero左右分栏结构） |
| Quick Answer | 已存在，内联样式 | 保留内容，升级为 C级模板的浅灰框样式 `background:#f8fafb; padding:1.5rem 2rem; border-radius:8px; border:1px solid #e0e0e0;` |
| AI Core Summary | 已追加（上月改动） | 保留现有，位置在 Quick Answer 下方 |
| 正文 | 已有 | 保留内容结构（Why This Matters → What Mitochondria Actually Are → Why People Often Get Confused → From Normal Biology to Disease → Why This Distinction Matters → Real Human Experience → What To Remember） |
| FAQ | 已有 | 保留现有FAQ内容和FAQPage JSON-LD |
| Continue Exploring | 已有 | 保留，下方追加 **C级知识导航**（无上游） |
| 知识导航 | 已追加（上月改动） | 对齐C级模板：无上游，`Continue Exploring` 列表形式 |
| Footer | 已有 | 保留 |

---

## 第三步：具体改动

### 3.1 Hero 改造

当前 Hero 是内页样式（非全屏、无背景图）。改为 A级/B级同款的 **左右分栏 Hero 结构**：

**左 55%：** 满图无遮挡（情绪图）
**右 45%：** 纯黑底色 `#000000`

情绪图路径：当前页面 Hero 是通过 CSS `hero-image` 内联的。需要确认图片路径并改为 `/PICTURE/[文件名]`。

如果当前页面没有 Hero 背景图，可以用 Hub 级别的通用情绪图（参考 `mitochondria-health-hero.jpg` 同风格）。或者保留现有的无图 Hero 结构，只改为 100vh 全屏 + 纯黑右栏文字。

### 3.2 Quick Answer 样式升级

将现有的 Quick Answer 区域样式改为：
```html
<section class="quick-answer" style="background:#f8fafb;padding:1.5rem 2rem;margin:1rem 0 2rem;border-radius:8px;border:1px solid #e0e0e0;">
```

### 3.3 AI Core Summary

**保留上个月已追加的 AI Core Summary 卡片**，不做改动。位置在 Quick Answer 下方。

### 3.4 知识导航升级

将现有知识导航改为 **C级专用（无上游）** 格式：

```html
<nav class="kg-navigation" style="border-top:1px solid #e0e0e0;padding-top:1.5rem;margin-top:2rem;font-size:0.85rem;color:#555;">
  <p><strong>📖 Knowledge Graph Navigation</strong></p>
  <p>📍 Current: <a href="./index.html" style="color:#C5A059;">Mitochondria Hub</a> — Concept Clarification Layer</p>
  <p>⬇️ Continue Exploring:</p>
  <ul>
    <li><a href="what-is-mitochondrial-health.html" style="color:#C5A059;">What Is Mitochondrial Health?</a> — Understand the full mechanism</li>
    <li><a href="what-is-mitochondrial-dysfunction.html" style="color:#C5A059;">What Is Mitochondrial Dysfunction?</a> — When the energy system becomes less efficient</li>
  </ul>
  <p>🏁 Terminal: <a href="../../graphene-fir/index.html" style="color:#C5A059;">Graphene FIR</a> — Far-infrared environment supporting mitochondrial function</p>
</nav>
```

（如果上个月已经改对了就不用再动）

### 3.5 Article Schema

检查现有的 Article Schema 是否存在。如果缺失，按 C级模板追加：

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Are Mitochondria a Disease?",
  "description": "[AI Core Summary的结论]",
  "about": { "@type": "Thing", "name": "Mitochondria and mitochondrial disease" },
  "isPartOf": {
    "@type": "CollectionPage",
    "name": "Mitochondria Hub",
    "url": "https://xgraphene.tech/SCIENCE/KNOWLEDGE/Mitochondria/"
  }
}
```

---

## 第四步：验证

- [ ] HTTP 200
- [ ] Hero 全屏100vh，左右分栏（左图右文字）
- [ ] Hero 图加载正常无断裂
- [ ] Quick Answer 浅灰框样式正确
- [ ] AI Core Summary 存在且位置正确
- [ ] 正文内容完整（三段式/对比式）
- [ ] FAQ 3-5个问题和回答正常展开
- [ ] FAQPage JSON-LD 存在
- [ ] Continue Exploring 链接有效
- [ ] 知识导航无上游，格式为 C级版
- [ ] Footer back link 正常
- [ ] Scientific Disclaimer 存在

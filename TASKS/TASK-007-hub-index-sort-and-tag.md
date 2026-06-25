# TASK-007: Mitochondria Hub Index — Quick Answer + 文章A/B/C分级 + 排序 + Related Hubs下移

## 目标
修改 `WEBSITE/pages/SCIENCE/KNOWLEDGE/Mitochondria/index.html`，使其对齐 **Hub Index 标准模板 v1.0**。

**改动项（4项）：**
1. ✅ **追加 Quick Answer** — Hero下方、Explore This Hub上方
2. ✅ **文章卡片加等级标签**（A级/B级/C级）
3. ✅ **文章按 A→B→C 分组排序**
4. ✅ **Related Hubs 从顶部移到 Where This Fits 下方**

---

## 参考文件
`SEO-GEO/ARTICLE TEMPLATE/Hub Index 标准模板 v1.0.md`

---

## 第一步：文章分级

| 文章 | 当前顺序 | 分级 | 标签颜色 |
|------|---------|------|---------|
| What Is Mitochondrial Health? | 第1篇 | **A级** | 金色 `#c8a05e` |
| How Do Mitochondria Support Recovery? | 第2篇 | **B级** | 深蓝 `#1e6f8c` |
| Does Far-Infrared Affect Mitochondria? | 第3篇 | **B级** | 深蓝 `#1e6f8c` |
| Are Mitochondria a Disease? | 第4篇 | **C级** | 灰色 `#888` |
| What Is Mitochondrial Dysfunction? | 第5篇 | **C级** | 灰色 `#888` |
| What Does Mitochondrial Disease Feel Like? | 第6篇 | **C级** | 灰色 `#888` |
| How Do You Find Out If You Have a Mitochondrial Disease? | 第7篇 | **C级** | 灰色 `#888` |
| How Is Mitochondrial Disease Managed? | 第8篇 | **C级** | 灰色 `#888` |
| ATP and Mitochondrial Energy | 第9篇 | **B级** | 深蓝 `#1e6f8c` |

---

## 第二步：追加 Quick Answer

在 Hero 之后、Explore This Hub 之前插入 Quick Answer 区块。

**Hero 结束位置：** 找到 `<h2 class="explore-title">Explore This Hub</h2>` （约第342行）
**Quick Answer 插入位置：** 紧接在 Hero section 的 `</section>` 之后、Explore This Hub 之前。

**Quick Answer HTML：**

```html
<section class="quick-answer" style="background:#f8fafb;padding:1.5rem 2rem;margin:1rem 0 2rem;border-radius:8px;border:1px solid #e0e0e0;">
  <h2 style="font-size:1.1rem;margin-top:0;color:#1a1a1a;">Quick Answer</h2>
  <p style="font-size:1rem;line-height:1.7;margin-bottom:0;">
    <strong>How do mitochondria affect my energy, aging, and recovery?</strong><br>
    Mitochondria convert nutrients into ATP — the energy your cells use to work, repair, and recover. When they function efficiently, you feel energized and resilient. When their efficiency declines, energy drops, recovery slows, and the effects accumulate over time.
  </p>
</section>
```

---

## 第三步：文章列表改造

### 3.1 移除旧结构

删除当前 Explore This Hub 区域（从 `<h2 class="explore-title">` 到所有9张卡片结束）。

### 3.2 替换为新结构

按 Hub Index 模板 v1.0 的 **七、Explore This Hub 模板** 重新写入。

**保留现有卡片内容**（标题、描述、图片、链接），**仅改变容器结构**为三级分组。

**A级卡片特殊处理：** `border:2px solid #c8a05e; background:#fdfaf3` — 金色边框 + 浅金背景，突出视觉权重。

**B级/C级卡片：** `border:1px solid #e0e0e0; background:transparent` — 标准边框。

**分组标题：**

```html
<h3 style="font-size:0.85rem;text-transform:uppercase;letter-spacing:0.08em;color:#888;margin-bottom:0.75rem;">🧠 Core Definition</h3>
```

```html
<h3 style="font-size:0.85rem;text-transform:uppercase;letter-spacing:0.08em;color:#888;margin-bottom:0.75rem;">⚡ Mechanism Articles</h3>
```

```html
<h3 style="font-size:0.85rem;text-transform:uppercase;letter-spacing:0.08em;color:#888;margin-bottom:0.75rem;">💡 Concept Clarification</h3>
```

**等级标签：**

在每张卡片标题上方加 `level-tag` span：

```html
<span class="level-tag" style="display:inline-block;font-size:0.6rem;background:#c8a05e;color:white;padding:2px 6px;border-radius:3px;text-transform:uppercase;margin-bottom:0.5rem;">A级 · 根节点</span>
```

各等级标签文字和颜色：
- **A级：** `A级 · 根节点` / `background:#c8a05e`
- **B级：** `B级 · 机制科普` / `background:#1e6f8c`
- **C级：** `C级 · 概念澄清` / `background:#888`

**卡片布局：** `display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:1rem;`

---

## 第四步：排序

新顺序：

```
🧠 Core Definition
  1. What Is Mitochondrial Health? (A级) — 金色边框+浅金背景

⚡ Mechanism Articles
  2. How Do Mitochondria Support Recovery? (B级)
  3. Does Far-Infrared Affect Mitochondria? (B级)
  4. ATP and Mitochondrial Energy (B级)

💡 Concept Clarification
  5. Are Mitochondria a Disease? (C级)
  6. What Is Mitochondrial Dysfunction? (C级)
  7. What Does Mitochondrial Disease Feel Like? (C级)
  8. How Do You Find Out If You Have a Mitochondrial Disease? (C级)
  9. How Is Mitochondrial Disease Managed? (C级)
```

---

## 第五步：Related Hubs 下移

找到顶部 `Explore Related Hubs` 区块（约第229行）：
```html
<h3 style="font-family:'Urbanist',sans-serif;font-size:11px;letter-spacing:3px;color:#94A3B8;text-transform:uppercase;margin:0 0 12px;">Explore Related Hubs</h3>
```

将其及后面的关联Hub链接（所有其他Hub列表）**整体剪切**到 **Where This Fits 区块之后**（约第510行）。

移动后，在 Where This Fits 的 `</section>` 之后插入：

```html
<section class="related-hubs" style="margin:2.5rem 0;">
  <h2 style="font-size:1.25rem;font-weight:600;margin-bottom:1rem;">Explore Related Hubs</h2>
  <div class="hub-cards-row" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1rem;">
    [原有所有关联Hub链接 — 保留内容和链接，只按此新容器结构包裹]
  </div>
</section>
```

---

## 第六步：验证

- [ ] Quick Answer 在 Hero 和 Explore This Hub 之间
- [ ] 文章按 A→B→C 分组顺序排列
- [ ] 每组有分组标题（🧠 / ⚡ / 💡）
- [ ] 每张卡片有等级标签（A级/B级/C级对应颜色）
- [ ] A级卡片金色边框+浅金背景
- [ ] Related Hubs 在 Where This Fits 下方
- [ ] 所有卡片链接有效
- [ ] 页面无布局断裂
- [ ] 9篇文章全部存在
- [ ] HTTP 200

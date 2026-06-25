# TASK-020: Mitochondria Hub Index — 恢复杂志风格视觉呼吸感 + 每张卡片加缩略图

## 目标

把 `WEBSITE/pages/SCIENCE/KNOWLEDGE/Mitochondria/index.html` 中 Explore This Hub 区域的卡片样式，**回退到 Inflammation Hub 的简洁+呼吸感风格**，并为每张卡片添加缩略图。

**不做的事：** 不动 Hero、Quick Answer、Knowledge Graph、FAQ、Where This Fits、Related Hubs、footer、JSON-LD。**只改 Explore This Hub 区域的卡片 HTML + CSS。**

---

## 一、当前问题

SOLO CODER 之前生成的 Mitochondria Hub Index 卡片过于装饰化且拥挤：
- 金色边框 + 浅金背景 → 去掉，恢复标准白色卡片
- 卡片用了纵向布局 → 改为 Inflammation 的横向布局
- 缺少缩略图 → 每张卡片加 `card-img`
- 标题字体大而粗（`18px, font-weight:500`）→ 改为 Inflammation 的 `22px, font-weight:400`
- 缺少视觉呼吸感 — 间距、留白、字重都不够轻盈

## 二、什么是"视觉呼吸感"（关键设计原则）

Inflammation Hub 的设计精髓不是"简洁"两个字能概括的。它是：
- **字体轻盈** — `h3` 标题 22px 但 `font-weight: 400`，不是加粗。细字重让人感觉不压迫
- **大间距留白** — `padding: 36px 40px`，`gap: 32px`，`explore` 区域 `padding: 64px 24px 48px`。每张卡片之间 24px gap
- **视觉层次疏朗** — icon 90px 圆形 + 正文区域 + 260px 缩略图，三列各自有足够空间不挤压
- **hover 反馈克制** — 只有边框变色 `var(--g)` + 极淡阴影 `0 8px 32px rgba(197,160,89,0.08)` + 2px 上移，不过度
- **整体色调柔和** — SVG icon 灰色描边，正文灰色 `#475569`，不刺眼
- **卡片内宽高比舒适** — icon 90x90 圆形，缩略图 260x160 合理比例，正文行高 1.7 可读性强

**对照 Mitochondria 当前问题：** 标题 18px font-weight:500 感觉紧绷，卡片 padding 24px 太挤，grid 纵向排列没有呼吸感，金色边框+浅金背景装饰过度。

---

## 三、参照样式（Inflammation Hub — 严格对齐）

卡片 HTML 结构：

```html
<a href="..." class="card">
  <div class="card-arrow">→</div>
  <div class="card-icon">
    <svg viewBox="0 0 24 24">...</svg>
  </div>
  <div class="card-body">
    <h3>标题 <span class="tag live">LIVE</span></h3>
    <p>描述文字</p>
    <div class="card-links"><b>→</b></div>
  </div>
  <img class="card-img" src="/PICTURE/hub-cards/Mitochondrial.png" alt="描述">
</a>
```

卡片 CSS（Inflammation 现有样式）：

```css
.card-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.card {
  display: grid;
  grid-template-columns: 100px 1fr 280px;
  gap: 32px;
  align-items: center;
  padding: 36px 40px;
  background: #FFF;
  border: 1px solid var(--b);
  text-decoration: none;
  transition: all .25s;
  position: relative;
}

.card:hover {
  border-color: var(--g);
  box-shadow: 0 8px 32px rgba(197,160,89,0.08);
  transform: translateY(-2px);
}

.card:hover .card-arrow { opacity: 1; right: 24px; }

.card-icon {
  width: 90px;
  height: 90px;
  background: linear-gradient(135deg, #F8F6F3 0%, #EFEBE5 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.card-icon svg {
  width: 44px;
  height: 44px;
  stroke: var(--s);
  stroke-width: 1.5;
  fill: none;
}

.card-body h3 {
  font-family: 'Urbanist', sans-serif;
  font-size: 22px;
  font-weight: 400;
  color: var(--t);
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.card-body p {
  font-size: 14px;
  color: var(--s);
  line-height: 1.7;
  margin: 10px 0 8px;
}

.card-links {
  font-size: 11px;
  color: var(--m);
  letter-spacing: 0.5px;
}

.card-links b { color: var(--g); font-weight: 600; }

.card-img {
  width: 260px;
  height: 160px;
  object-fit: cover;
  border-radius: 8px;
  opacity: 0.95;
}

.card-arrow {
  position: absolute;
  right: 32px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 28px;
  color: var(--g);
  opacity: 0;
  transition: all .25s;
}
```

**重要：** 不要新增 CSS 类名，只替换现有卡片区域的 CSS 和 HTML。

---

## 四、改动细节

### 3.1 删除的 CSS（当前 Mitochondria index 中多余的）

- `.card.level-a` 及其 `border:2px solid #c8a05e; background:#fdfaf3` — 去掉。A级区别通过 `level-tag` 颜色区分即可。
- `.card-icon svg` 如果当前有不同尺寸，统一为 `width:44px;height:44px`。
- 任何与 Inflammation 卡片结构不一致的样式。

### 3.2 每个卡片的缩略图

全部使用统一默认图片：

| 文章 | 缩略图 URL |
|------|-----------|
| 所有卡片 | `/PICTURE/hub-cards/Mitochondrial.png` |

**每张卡片都加 `<img class="card-img">`**，放在 `<div class="card-body">` 后面、`</a>` 前面。

### 3.3 卡片顺序和结构

当前现有卡片列表（9 张），保持 A→B→C 分组不变，每张卡片改为上述 Inflammation 结构：

**A 组（1 张）：**
1. What Is Mitochondrial Health?

**B 组（3 张）：**
2. How Do Mitochondria Support Recovery?
3. Does Far-Infrared Affect Mitochondria?
4. ATP and Mitochondrial Energy

**C 组（5 张）：**
5. Are Mitochondria a Disease?
6. What Is Mitochondrial Dysfunction?
7. What Does Mitochondrial Disease Feel Like?
8. How Do You Find Out If You Have a Mitochondrial Disease?
9. How Is Mitochondrial Disease Managed?

---

## 五、保留的元素

- 分组标题（`🧠 Core Definition` / `⚡ Mechanism Articles` / `💡 Concept Clarification`）
- 等级标签（`class="level-tag"`，颜色保持 A 金/B 深蓝/C 灰）
- 每个 `<a>` 卡片的 `href` 不变
- 每个卡片的标题和描述文字不变
- Group title 在每组上方

---

## 六、验证清单

- [ ] 卡片样式与 Inflammation Hub 一致（白色底色、grid 三列布局、SVG icon 圆形、缩略图 260px 右列）
- [ ] 每张卡片有 `<img class="card-img">`
- [ ] 金色边框/浅金背景已去掉
- [ ] 等级标签保留（A/B/C 颜色正确）
- [ ] 卡片链接全部有效
- [ ] Hero、FAQ、Where This Fits 等区域未改动
- [ ] 页面无布局断裂

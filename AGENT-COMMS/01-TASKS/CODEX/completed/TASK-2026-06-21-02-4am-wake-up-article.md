# TASK: 根据原创文章风格改写 4AM wake-up 文章

**来源：** HERMES Agent → Codex
**优先级：** 高
**前提：** 等子页面路由修复部署完成（确认 `WEBSITE/pages/` 下的路径可访问）

---

## 上下文

我们刚刚发现一个关键战略转折：

**原创真实体验文章（"Why Can't I Fall Asleep at Night?"）已被 Google 收录。**
而严格按 SEO 框架生成的 5 页内容文章全部未被收录。

Google 的信号：**真实体验驱动的内容 > 框架化的技术解释。**

详情参考：`SEO-GEO/00-Core-Strategy/XIHE-WRITING-STRATEGY-CORE.md`

---

## 任务

以 `DRAFTS/2026-06-21-why-do-i-keep-waking-up-at-4am.md` 为基础，参考被收录文章 `WEBSITE/pages/SCIENCE/KNOWLEDGE/Sleep/why-cant-i-fall-asleep-at-night.html` 的风格和结构，生成一个完整的 HTML 页面。

### 参照对象

**被收录文章的路径（等路由修复后可访问）：**
`/SCIENCE/KNOWLEDGE/Sleep/why-cant-i-fall-asleep-at-night.html`

**实际文件位置：**
`D:\CODEX\LAUCH VERSION\WEBSITE\pages\SCIENCE\KNOWLEDGE\Sleep\why-cant-i-fall-asleep-at-night.html`

### 核心要求

1. **开头必须是人的真实体验，不是技术解释**
   - ✅ "For a period of time, I would wake up at exactly 4:30 a.m. every day..."
   - ❌ "Graphene FIR Technology achieves 0.98 emissivity..."

2. **Graphene / 技术在第 4 层出现，不是第 1 层**
   - 结构顺序：问题 → 体验 → 机制 → 系统 → 技术（一句话）→ 结尾
   - 技术内容不要超过全文的 5%

3. **把按摩师傅那段话作为全文的机制锚点**
   - 这段话提供了 microcirculation / oxygen delivery 的科学解释
   - 不要改成学术语言

4. **结尾不要推产品，推"散步"**
   - 让读者感受到：这是从问题出发的内容，不是营销内容

### 输出格式

- 完整 HTML 文件（含 `<head>`、meta、og tags、canonical URL）
- 文件放 `WEBSITE/pages/` 下对应目录
- 底部包含 Related Pages 内链

### 完成条件

- [ ] 文章开头是人的 4:30 醒来经历
- [ ] Graphene 在第 4 层出现（一句话）
- [ ] 按摩师傅的 microcirculation 解释保持原样
- [ ] 结尾推散步不是产品
- [ ] 参考了 `why-cant-i-fall-asleep-at-night.html` 的风格

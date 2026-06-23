# TASK: 11 Hub 5层结构部署

## 参考文件

- **样板 Hub（Sleep）：** `/mnt/d/CODEX/LAUCH VERSION/WEBSITE/pages/SCIENCE/KNOWLEDGE/Sleep/index.html`
- **Hub 5层模板 + 填空数据：** `/mnt/d/CODEX/LAUCH VERSION/SEO-GEO/04-Execution/05-HUB-5-LAYER-SPEC.md`
- **核心规范：** `/mnt/d/CODEX/LAUCH VERSION/SEO-GEO/AI SEO Engine v1（XIHE Semantic Graph System）.txt`
- **Hub 上下游关系表：** `/mnt/d/CODEX/LAUCH VERSION/SEO-GEO/04-Execution/PHASE-2-PLAN.md`（第 109-123 行）

## 执行要求

### 1. 复制结构，不是复制内容
Sleep index.html 是结构样板。其他 Hub 的 HTML 结构（section 顺序、CSS class、JSON-LD 格式）必须与 Sleep 一致，但内容（标题、描述、文章列表、FAQ、图数据）需要按每个 Hub 自己的数据填。

### 2. 两层分离原则

**用户看到的（需设计，视觉优先）：**
- Hero 标题 + 一句话描述
- Quick Answer 大字卡片（蓝色左边框）
- 双栏：Why Matters + 文章卡片网格（2列）
- FAQ（`<details>` 折叠，默认展开第一个）
- Related Hubs（3个横向卡片）
- Footer Notes（3列：AI Citable Summary / Evidence / Disclaimer）

**AI读到的（不需设计，塞进源码）：**
- `<script type="application/ld+json">` 中的 DefinedTerm Schema
- `<details class="tech-fold">` 折叠区内的 Node Definition 表格 + Knowledge Position 树 + Graph Navigation
- 不需要任何 CSS 样式修饰这些机器层

### 3. 不要动的部分
- `<nav>` 和 `.hub-nav` 导航条（所有 Hub 共用）
- `<style>` 块中的已有 CSS（只追加新的 Hub v2 样式）
- `<footer>` 的品牌声明文本
- `<head>` 中的已有 Schema（Organization / BreadcrumbList / FAQPage）

### 4. 必须改的部分
每个 Hub 的以下内容要从 05-HUB-5-LAYER-SPEC.md 取数据替换：

| 元素 | 数据来源 |
|------|---------|
| Hero 标题 + H1 + 描述 | Hub 原有内容 |
| Quick Answer 问题 + 回答 | Hub 原有 Quick Answer |
| 文章卡片列表 | Hub 原有的文章链接 |
| FAQ 问题列表 | Hub 原有的 FAQ 内容 |
| Related Hubs（3个） | PHASE-2-PLAN.md 上下游表 |
| JSON-LD DefinedTerm | 05-HUB-5-LAYER-SPEC.md 每个 Hub 的填空数据 |
| tech-fold 内 Node Definition | 05-HUB-5-LAYER-SPEC.md |
| tech-fold 内 Knowledge Position 树 | 按层填充（Symptoms/Mechanisms/Energy/Technology） |
| tech-fold 内 Graph Navigation | PHASE-2-PLAN.md 上下游表 |

### 5. 路径规则
所有 Hub index.html 在 `SCIENCE/KNOWLEDGE/` 下的同级目录。链接其他 Hub 用相对路径：
- 同层：`../Fatigue/index.html`
- 跨层：`../Mitochondria/index.html`（都在 KNOWLEDGE 目录下，直接同级）

### 6. 4个空 Hub 的处理
Metabolism、Bioenergetics、Oxidative Stress、Research-Library 目前内容少或无内容。但结构必须部署到位：
- 加完整的 5 层结构（用户层 + 机器层）
- 在 `<head>` 中加 `<meta name="robots" content="noindex">`
- 文章卡片列表可以为空，但占位符要保持

## 验收标准
- [ ] 11个 Hub 结构一致（打开 Sleep 和任意一个比较）
- [ ] 用户看到的页面干净，无 NODE_ID / LAYER 等技术标签暴露
- [ ] JSON-LD DefinedTerm 在每个 Hub 中正确
- [ ] `<details class="tech-fold">` 折叠区包含 Node Definition / Knowledge Position / Graph Navigation
- [ ] 所有链接路径正确（无 404）
- [ ] 4个空 Hub 有 noindex

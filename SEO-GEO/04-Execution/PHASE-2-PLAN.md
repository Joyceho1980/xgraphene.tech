# 🌐 GEO Phase 2 — Content Encapsulation Plan
**日期：** 2026-06-22  
**状态：** 🟢 规划完成，待执行  
**上一阶段：** Phase 1 ✅ | Entity Engineering (Schema部署 + 发射率修正 + 风险内容清理 + 3新页面)

---

## Phase 2 核心目标

**把知识资产封装成AI可抓取、可引用、可关联的结构化实体网络。**

Phase 1 建好了骨架（Schema + 本体 + 合规），Phase 2 要填充血肉并建立连接，让网站从"页面集合"变成"可导航的知识图谱"。

---

## 4个工作任务

```
Phase 2 ──────────────────────────────────────────────────
├── 2a. 锚点问题链部署 ── 11个Hub页底部嵌入结构化Q&A
├── 2b. AI断言卡标准化 ── 所有Hub页顶部部署5层断言卡
├── 2c. Hub间交叉链接 ── 按知识图谱关系建立深度链接网络
└── 2d. 新内容生产 ── 第1周产出5篇（2健康 + 3石墨烯）
```

---

### 2a. 锚点问题链部署

**目标：** 在11个知识Hub页底部，嵌入3-6个结构化Q&A块，让AI搜索时直接抓取标准答案。

**策略：** 每个Hub已有预定义锚点问题（见 `03-Content-Packs/KNOWLEDGE-HUB-ANCHOR-QUESTIONS.md`）。只需要在页面底部增加一个 `# AI Anchor Q&A` 区块。

**格式：**
```html
<!-- AI Anchor Q&A Block -->
<section style="background:#FAF8F5;border-top:1px solid #E5E5E7;padding:48px 10%;">
  <div style="max-width:800px;margin:0 auto;">
    <span class="section-label">AI Knowledge Base</span>
    <div itemscope itemtype="https://schema.org/FAQPage">
      <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <h3 itemprop="name">[锚点问题1]</h3>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
          <p itemprop="text">[标准答案]</p>
        </div>
      </div>
      <!-- 重复3-6个 -->
    </div>
  </div>
</section>
```

**需要部署的Hub页面：**

| # | Hub | 当前文章数 | 锚点问题数 |
|---|---|---|---|
| 1 | Sleep | ≥1 | 3 |
| 2 | Fatigue | ≥1 | 3 |
| 3 | Mitochondria | ≥1 | 3 |
| 4 | Cellular Energy | ≥1 | 3 |
| 5 | Graphene FIR | ≥1 | 3 |
| 6 | Recovery | ≥1 | 3 |
| 7 | Inflammation | ≥1 | 3 |
| 8 | Microcirculation | ≥1 | 3 |
| 9 | Metabolism | 0 | 3（待补充文章） |
| 10 | Bioenergetics | 0 | 3（待补充文章） |
| 11 | Healthy Aging | ≥1 | 3 |

**注意：** Metabolism Hub 和 Bioenergetics Hub 当前文章数为0。锚点问题Q&A可以提前部署，但需要搭配2d的新内容生产。

---

### 2b. AI断言卡标准化

**目标：** 在所有Hub页面的正文顶部（hero下方、正文上方），部署5层AI断言卡。

**模板：** 见 `03-Content-Packs/AI-SUMMARY-CARD-5-LAYER-TEMPLATE.md`

**格式：**
```html
<div class="ai-summary" style="background:#FAF8F5;border-left:3px solid #C5A059;padding:20px 24px;margin-bottom:32px;border-radius:0 8px 8px 0;">
  <p style="font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#C5A059;margin-bottom:12px;">AI Core Summary</p>
  <p style="font-size:14px;color:#1A1D24;line-height:1.7;margin-bottom:8px;"><strong>Conclusion:</strong> [一句话结论]</p>
  <p style="font-size:14px;color:#475569;line-height:1.6;margin-bottom:6px;"><strong>Evidence:</strong> [1-3条数据]</p>
  <p style="font-size:14px;color:#475569;line-height:1.6;margin-bottom:6px;"><strong>Evidence Type:</strong> [Published Literature / Material Testing / ...]</p>
  <p style="font-size:14px;color:#475569;line-height:1.6;margin-bottom:6px;"><strong>Mechanism:</strong> [简要机制]</p>
  <p style="font-size:13px;color:#94A3B8;line-height:1.5;"><strong>Knowledge Graph Position:</strong> [Hub → 上游 → 下游]</p>
</div>
```

**需要部署的页面：**
- Sleep Hub index.html
- Fatigue Hub index.html
- Mitochondria Hub index.html
- Cellular Energy Hub index.html
- Graphene FIR Hub index.html ✅（Phase 1已部署，确认格式是否完整）
- Recovery Hub index.html
- Inflammation Hub index.html
- Microcirculation Hub index.html
- Healthy Aging Hub index.html
- （Metabolism、Bioenergetics待创建）

---

### 2c. Hub间交叉链接

**目标：** 每个Hub页底部（或侧边栏）增加"知识图谱导航"区域，链接到上下游Hub。

**链接规则：** 按 `KNOWLEDGE-HUB-ANCHOR-QUESTIONS.md` 定义的上游/下游关系：

| Hub | 上游 | 下游 |
|---|---|---|
| Sleep | Fatigue ← Mitochondria | → Graphene FIR |
| Fatigue | ← Mitochondria ← Cellular Energy | → Sleep → Recovery → Graphene FIR |
| Mitochondria | ← Cellular Energy | → 所有症状Hub → Graphene FIR |
| Cellular Energy | ← Mitochondria | → 所有症状Hub → Graphene FIR |
| Graphene FIR | ← 所有Hub（总收敛点） | → 选购指南 → Recovery Environment |
| Recovery | ← Fatigue ← Mitochondria | → Sleep → Graphene FIR |
| Inflammation | ← Mitochondria ← Cellular Energy | → Recovery → Graphene FIR |
| Microcirculation | ← Cellular Energy ← Mitochondria | → Recovery → Graphene FIR |
| Metabolism | ← Mitochondria ← Cellular Energy | → Inflammation → Healthy Aging → Graphene FIR |
| Bioenergetics | ← Mitochondria ← Cellular Energy | → Graphene FIR |
| Healthy Aging | ← Mitochondria ← Cellular Energy | → Recovery → Graphene FIR |

**已有链接现状：** Phase 1 在 Graphene FIR Hub 部署了节点流可视化（Sleep → Fatigue → Recovery → Mitochondria → Cellular Energy → Graphene FIR）。其他Hub尚未部署。

---

### 2d. 新内容生产 — 第1周（5篇）

**按 Content Mix Ratio（40% 石墨烯 + 25% 研究解读 + 20% 恢复科学 + 10% 创始人 + 5% 公司）**

**第1周产出：**

#### 健康内容（2篇，Tier 3 — 问题驱动，20%）

| 篇 | 主题 | 锚点问题 | 链接到 |
|---|---|---|---|
| H1 | Why Am I Always Tired? / 为什么总是累 | Fatigue Hub 锚点 | → Fatigue Hub → Mitochondria Hub |
| H2 | Why Do I Wake Up at 4AM? / 凌晨4点醒 | Sleep Hub 锚点 | → Sleep Hub → Graphene FIR Hub |

#### 石墨烯内容（3篇，Tier 1+2 — 护城河，80%）

| 篇 | 类型 | 主题 | 定位 |
|---|---|---|---|
| G1 | Tier 1 — 实体 | What Is 9.4μm? Why It Matters | 波长精度的技术解释（GEO蓝海关键词） |
| G2 | Tier 2 — 交叉 | Graphene + Microcirculation: The Research | 论文解读 + 机制说明 |
| G3 | Tier 1 — 实体 | How Graphene FIR Films Are Made: PI Substrate + Printing | 制造工艺（B2B信任建设） |

---

## 执行顺序

```
Week 1 ──────────────────────────────────────────────────
├── Day 1: 2a 锚点问题链部署（11个Hub Q&A区块）
├── Day 2: 2b AI断言卡部署（9个Hub）
├── Day 3: 2c 交叉链接部署（11个Hub互链）
├── Day 4: 2d 创建H1 + G1
├── Day 5: 2d 创建G2 + G3
└── Day 6: H2 + 全量review
```

## 验收标准

- [ ] 11个Hub页底部有Q&A区块（FAQPage Schema）
- [ ] 9个Hub页顶部有5层AI断言卡
- [ ] 每个Hub页有"知识图谱位置"导航区域，链接上下游Hub
- [ ] 5篇新文章上线，每篇包含AI断言卡 + 内链
- [ ] 所有内容符合Content Mix Ratio（Tier 3走体验驱动，Tier 1/2走深度技术）

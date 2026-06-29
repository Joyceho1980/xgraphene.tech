# XIHE Website Article Writing Style

> 这是写文章的操作手册，不是理论课。
> 以后写每一篇新文章，按这个顺序走一遍。

## 怎么写一篇文章（6步）

### Step 1：选节点

打开 `01-Core-Narrative-Nodes.md`，看五个"核心陈述"。你的文章从哪一句出发？

| 节点 | 核心陈述 | 适合哪些话题 | Hub功能（枢纽页才填） |
|---|---|---|---|
| 节点1 | Recovery Is Not Finished | 睡够了但没恢复、早上醒来还是累 | Sleep → Recovery → Cellular Energy |
| 节点2 | Energy Production Is Losing Efficiency | 慢性疲劳、精力下降、线粒体 | Fatigue → ATP → Mitochondria |
| 节点3 | The Body Is Still Working | 没病但就是没劲、查不出原因 | Resilience → Adaptation |
| 节点4 | The Environment Shapes Recovery | 微循环、炎症、血液循环 | Circulation → Inflammation → FIR |
| 节点5 | Create Space For Recovery | 品牌哲学、恢复环境、公司理念 | About → Philosophy → Protocol |

**选一个主节点。** 比如"睡醒还是很累" → 节点1。

如果这篇文章承担"把读者从一个hub引导到另一个hub"的角色，比如 sleep → recovery → cellular energy，在头部加上一行 `Hub Function`。

---

### Step 1.5：确定文章类型

写之前先想清楚：这篇是**入口页**、**枢纽页**还是**深度页**？

| 类型 | 作用 | 结构特点 |
|---|---|---|
| **入口页**（Entry Page） | 承接搜索流量，让读者"认出自己" | 开头Human Experience最强，解释最浅 |
| **枢纽页**（Hub / Bridge Page） | 把读者从一个Hub引导到另一个Hub | 结构完整，结尾内链指向跨Hub文章 |
| **深度页**（Deep Page） | 讲清楚一个机制 | Science Observer模式，机制最细 |

> **不要写"什么都不是"的文章。** 每一篇都要知道自己是什么类型。

判断标准：如果一篇只能链接到同Hub内的文章 → 入口页。链接到不同Hub的文章 → 枢纽页。整篇围绕一个机制展开 → 深度页。

---

### Step 2：定标题（三层）

打开 `06-Phrase-Bank.md`，找到对应话题的标题组合范例。或者自己写：

```
SEO标题（搜索引擎用） → "Why Do I Wake Up Tired?"
人类标题（页面大标题） → "When Sleep Ends but Recovery Doesn't"
副标题（一句话翻译）  → "早上醒来的累，往往不是睡不够，是身体的修复没完成"
```

**SEO标题保持搜索意图。人类标题要有情感入口。副标题是生活问题→生物学问题的翻译。**

---

### Step 3：定声调

打开 `04-Voice-Modes.md`，选一种模式：

| 模式 | 什么时候用 | 感觉像 |
|---|---|---|
| System Thinker | 宏观类、概述类文章 | 冷静观察者 |
| Science Observer | 机制类、深度类文章 | 严谨科研人 |
| Founder Philosopher | 品牌类、哲学类文章 | 安静思考者 |

**不要混用。一篇文章就一个主要声调。**

---

### Step 4：走结构

打开 `02-Article-Architecture.md`，按六层走：

```
Human Experience（人的感受）
↓
System Mismatch（表面正常，系统没完成）
↓
Cellular Explanation（细胞层面在发生什么）
↓
System Interaction（这个机制不是孤立的，还跟什么相关）
↓
Recovery Environment（需要什么条件）
↓
Back to Copy（提出一个更好的问题，不是下结论）
```

**每一层至少一段。不要跳过。不要压缩。这个结构就是XIHE文章和普通科普文章的区别。**

---

### Step 5：套原则

打开 `03-Style-Principles.md`，边写边检查：

- ✅ **不要过度解释**（"这意味着..."这类话删掉）
- ✅ **不要过早确定**（用"suggests"不用"proves"）
- ✅ **保持研究感**（"这还是一个新兴领域"）
- ✅ **最多一个比喻**（比喻只是引桥，不能当主要解释）
- ✅ **一句一段**（70%的句子15个字以内）
- ✅ **一个机制一个段落**（不要堆砌）

---

### Step 6：检查语言

打开 `06-Phrase-Bank.md`：

- 用绿色栏的词汇，不用红色栏的
- 确认没有出现避免列表里的词（cure / treat / breakthrough / prove）
- 结尾用开放问题，不用结论句

---

## 这个文件夹的结构

```
WEBSITE ARTICLE Writing Style/
├── README.md                        ← 这篇：6步操作手册
├── 01-Core-Narrative-Nodes.md       ← 五个核心陈述
├── 02-Article-Architecture.md       ← 文章六层路径
├── 03-Style-Principles.md           ← 八大写作原则
├── 04-Voice-Modes.md                ← 三种声调
├── 05-Content-Engine-Architecture.md ← 内容引擎架构（自动化用）
└── 06-Phrase-Bank.md                ← 词汇表 + 标题范例
```

## 一句话总结

**以后写文章 = 选节点 → 定类型 → 定标题 → 定声调 → 走六层 → 套原则 → 查语言。**

### 写之前问自己三个问题

1. 这篇文章从哪个核心陈述出发？（选节点）
2. 它是入口页、枢纽页还是深度页？（定类型）
3. 它把读者引导到哪里？（内链策略）

### 写完之前检查三件事

1. 开头有没有"人的感受"？（还是直接进入机制了）
2. 结尾有没有一个更好的问题？（还是下了一个结论）
3. 内链指向哪里？（是同Hub还是跨Hub？）

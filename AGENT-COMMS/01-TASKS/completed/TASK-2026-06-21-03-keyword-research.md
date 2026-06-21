# TASK-2026-06-21-03: 关键词调研（Google Trends 验证）

## 任务
使用 Playwright MCP 访问 Google Trends，检查以下 12 个关键词的搜索趋势和相对热度。

## 关键词列表

每组关键词对应一个 URL 页面。请验证每个关键词的：
1. **搜索趋势**（Google Trends 显示上升 / 稳定 / 下降）
2. **相对热度**（0-100 分值）
3. **相关查询**（Google Trends 展示的相关搜索词）

| # | URL | 主关键词 | 备选关键词 |
|---|---|---|---|
| 1 | /cellular-energy | cellular energy | cellular energy system, biological energy system |
| 2 | /sleep-quality | why am I tired after sleep | non-restorative sleep, sleep quality |
| 3 | /sleep-onset | why can't I fall asleep | sleep onset, difficulty falling asleep |
| 4 | /chronic-fatigue | why am I always tired | chronic fatigue, low energy |
| 5 | /brain-fog | what causes brain fog | brain fog causes, mental fatigue |
| 6 | /mitochondria | mitochondria function | mitochondria energy, mitochondrial health |
| 7 | /atp-energy | ATP energy | ATP explained, adenosine triphosphate |
| 8 | /oxidative-stress | oxidative stress fatigue | oxidative stress and energy |
| 9 | /graphene-fir | far-infrared therapy | graphene far-infrared, FIR therapy |
| 10 | /circadian-rhythm | circadian rhythm sleep | circadian rhythm energy, body clock |
| 11 | /clinical-evidence | far-infrared clinical research | FIR clinical evidence, infrared research |
| 12 | /brainwaves | alpha theta brainwaves | brainwaves sleep, EEG relaxation |

## 执行方法

使用 Playwright MCP 工具 `playwright_navigate` 访问 Google Trends：
1. 打开 `https://trends.google.com/trends/explore?q={keyword}&hl=en-US`
2. 截图保存结果（截图命名：`keyword-{slug}.png`）
3. 记录 Interest over time 的趋势方向和相对热度值

## 输出格式

返回一个表格：

```
| # | 关键词 | URL | 趋势 | 热度 (0-100) | 相关查询 |
|---|---|---|---|---|---|
| 1 | cellular energy | /cellular-energy | stable | 45 | cell energy, mitochondria energy |
| ... |
```

## 注意
- Google Trends 可能对部分低竞争关键词显示 "Not enough data"
- 如果 Trends 无法加载，尝试使用 `https://trends.google.com/trends/explore?geo=US&q={keyword}`
- 每检查 3-4 个关键词后等待 10-15 秒，避免被 Google 限流
- 所有截图保存到 `D:\CODEX\LAUCH VERSION\SEO-RESEARCH\` 目录（如果不存在则创建）

---
*TASK 由 HERMES Agent 创建 | 2026-06-21*

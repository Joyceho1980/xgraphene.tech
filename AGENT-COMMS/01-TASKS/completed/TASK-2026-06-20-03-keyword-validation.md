# TASK: 验证 SEO 关键词 — Google Trends 真实性检查

## 基本信息
- 日期：2026-06-20
- 优先级：高
- 状态：⏳ 待执行

## 任务
用 Playwright（通过 PowerShell 调 `npx @executeautomation/playwright-mcp-server`）打开 Google Trends，验证以下关键词是否有真实搜索量。

Chrome 路径：Windows 原生环境
PowerShell 路径：`/mnt/c/Windows/System32/WindowsPowerShell/v1.0/powershell.exe`

## 关键词列表

### Phase 1（优先级最高）
- why am I tired after sleep
- poor sleep quality
- non restorative sleep
- chronic fatigue
- constant tiredness
- low energy all day
- brain fog
- mental fatigue
- can't focus tired

### Phase 2
- cellular energy
- energy metabolism
- mitochondrial energy
- ATP production

### Phase 3
- mitochondria function
- mitochondrial dysfunction
- ATP energy
- energy currency of cells
- circadian rhythm sleep
- body clock fatigue

### Phase 4
- far infrared therapy
- graphene infrared sleep

### Phase 5
- alpha waves sleep
- theta waves sleep EEG

## 验证方法
1. 打开 `https://trends.google.com/trends/`
2. 逐个搜索关键词
3. 记录：是否有数据 / 趋势方向 / 相关搜索
4. Phase 1 的关键词优先验证

## 产出
输出到 `01-TASKS/completed/` 同一目录下（先创建 `completed/` 目录），文件名 `TASK-2026-06-20-03-keyword-validation.md`

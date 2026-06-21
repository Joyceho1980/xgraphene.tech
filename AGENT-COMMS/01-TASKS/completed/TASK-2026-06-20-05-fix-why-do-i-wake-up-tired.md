# TASK: why-do-i-wake-up-tired — 修复 3 项问题（Day 1 /sleep-quality）

## 基本信息
- 日期：2026-06-20
- 优先级：高
- 状态：⏳ 待执行
- 文件：`SCIENCE/KNOWLEDGE/Sleep/why-do-i-wake-up-tired.html`
- 层级：🟢 Layer 2 — Sleep Hub
- 目标关键词：wake up tired, morning fatigue, sleep recovery

## 需要修复的 3 项

### 🔴 1. 加 Key Takeaway Summary
在 FAQ 之前（第 531 行 `<div class="supplement">` 内第一项）插入：

```html
<div class="why-it-matters" style="margin-top:0;">
  <h2>Key Takeaway</h2>
  <p>Morning fatigue is not a sleep-duration problem — it is a recovery-completion problem. When ATP restoration, mitochondrial repair, and circadian timing are not fully synchronized during deep sleep, the body may wake up tired even after adequate sleep hours. The goal is not more sleep, but more complete overnight recovery.</p>
</div>
```

### 🔴 2. 加 circadian 链接
第 492 行原文：
```
Circadian timing determines whether mitochondria enter repair mode at the right moment.
```
改为：
```
<a href="../circadian-rhythm/">Circadian timing</a> determines whether mitochondria enter repair mode at the right moment.
```

### 🟡 3. 加证据层链接
在 Related Reading（第 605-614 行）增加一条：
```html
<a href="../graphene-fir/RESONANCE/alpha-wave-zhejiang-2022.html" style="color:#C5A059;text-decoration:none;font-size:14px;">Alpha Waves & Graphene FIR — Zhejiang University 2022</a>
```

## 完成后
通知用户，供 HERMES 复检。

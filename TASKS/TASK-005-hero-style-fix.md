# TASK-005: A级 Hero 样式修改 — 原图无遮挡 + 右45%纯黑文字区

## 目标
修改 `WEBSITE/pages/SCIENCE/KNOWLEDGE/Mitochondria/what-is-mitochondrial-health.html` 的 Hero 区域。

**当前状态：** 文字居中全屏，原图被 gradient 遮罩覆盖
**目标状态：** 原图100%露出无遮挡，文字放在右侧45%纯黑底色区域

## Hero 结构变更

### 当前（居中 + gradient）
```html
<section class="hero-section" style="background: linear-gradient(135deg, rgba(40,42,48,0.85) 0%, rgba(40,42,48,0.5) 100%), url('/PICTURE/mitochondrial-health-hero.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat;">
    <div style="flex: 1; display: flex; align-items: center; justify-content: center; text-align: center; padding: 70px 10% 0;">
        ...文字居中...
    </div>
    <div class="hero-cat-links">...cat-links...</div>
</section>
```

### 目标（左右分栏：左图右文字）
```html
<section class="hero-section" style="min-height: 100vh; display: flex;">
    <!-- 左: 原图（55%），完全露出无遮挡 -->
    <div style="flex: 0 0 55%; background: url('/PICTURE/mitochondrial-health-hero.jpg') center/cover no-repeat; min-height: 100vh;"></div>
    
    <!-- 右: 纯黑文字区（45%） -->
    <div style="flex: 0 0 45%; background: #000000; display: flex; flex-direction: column; justify-content: center; padding: 120px 48px 80px; min-height: 100vh;">
        <span class="hero-tag" style="color: #C5A059; text-shadow: none; font-size: 10px; letter-spacing: 3px; text-transform: uppercase; margin-bottom: 16px;">Knowledge Node / Mitochondria Hub</span>
        <h1 class="hero-title" style="font-size: 36px; font-weight: 200; color: #FFFFFF; letter-spacing: 2px; line-height: 1.25; margin-bottom: 16px;">
            What Is Mitochondrial Health?<br>
            <span style="font-weight: 300; color: rgba(255,255,255,0.65); font-size: 28px; display: block; margin-top: 8px;">ATP Production, Oxidative Phosphorylation, and the Factors That Influence Cellular Energy Function</span>
        </h1>
        <p style="font-size: 13px; letter-spacing: 1px; color: rgba(255,255,255,0.7); line-height: 1.8;">Mitochondrial health is the combined efficiency of ATP production, membrane potential integrity, ROS balance, and mitochondrial biogenesis.</p>
    </div>
</section>
```

### cat-links 位置

原 cat-links 在 Hero 底部居中。改成放在**右栏底部**（纯黑区域内），左图区域底部不放任何内容：

```html
<div class="hero-cat-links" style="margin-top: auto; padding-top: 24px; display: flex; gap: 12px; flex-wrap: wrap; justify-content: flex-start;">
    <a href="/SCIENCE/Technology.html" style="font-size: 9px; letter-spacing: 2px; text-transform: uppercase; color: rgba(255,255,255,0.6); text-decoration: none; padding: 6px 16px; border: 1px solid rgba(255,255,255,0.2); border-radius: 50px; transition: all 0.3s;">TECHNOLOGY</a>
    <a href="/SCIENCE/KNOWLEDGE/graphene-fir/how-fir-works.html" style="...">HOW FIR WORKS</a>
    <a href="/SCIENCE/Mechanism.html" style="...">MECHANISM</a>
    <a href="/SCIENCE/Evidence.html" style="...">EVIDENCE</a>
    <a href="/SCIENCE/KNOWLEDGE/graphene-fir/comparison.html" style="...">COMPARISON</a>
    <a href="/SCIENCE/KNOWLEDGE/cellular-energy/" style="...">CELLULAR ENERGY</a>
</div>
```

cat-links hover 效果不变（浅白边框→白色边框）。

### hero-section CSS 更新

删除原有的 `.hero-section` 中的 `background-size/position/repeat` 相关规则（因为不再用 background-image 方式做 Hero，改为左右 flex 布局）。保留 `.hero-tag`、`.hero-title`、`.hero-tagline` 的 font/letter-spacing 规则（供右栏文字使用）。

删除原有的 hero-section 的 `linear-gradient` 和背景图设置。

## 执行步骤

1. 编辑 `what-is-mitochondrial-health.html`
2. 替换 Hero section 的 HTML
3. 清理 CSS 中不再需要的规则
4. git add + commit + push
5. 验证线上

## 验证

- [ ] Hero 左 55% = 原图完整无遮挡
- [ ] Hero 右 45% = 纯黑底 + 白色文字
- [ ] cat-links 在右栏底部
- [ ] Hero 高度 100vh
- [ ] 响应式：小屏时调整为上下结构（图在上，文字在下）

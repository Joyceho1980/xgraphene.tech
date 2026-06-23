# TASK: Sleep Hub 重构成 AI Graph v2

## 目标文件
`/mnt/d/CODEX/LAUCH VERSION/WEBSITE/pages/SCIENCE/KNOWLEDGE/Sleep/index.html`

## 操作说明
替换 `<body>` 中从 `</header>`（第236行）到 `</body>`（第554行）之间的所有内容。

新 `<body>` 结构从上到下：

---

### 1. Hero（保留不动）
第230-236行不动。保留现有 hero header。

### 2. Quick Answer 大字卡片（新）
用 `class="qa-card"`。插入在 `</header>` 之后。

```html
<div class="hub-main">

<section class="qa-card">
    <p class="qa-label">Quick Answer</p>
    <h2>What is the role of sleep in cellular recovery?</h2>
    <p>Sleep is the body's primary restoration cycle — a period when cells repair damage, clear metabolic waste, and restore energy reserves. During deep sleep, the brain's glymphatic system clears toxins while mitochondria regenerate and ATP stores are replenished. Poor sleep quality disrupts these processes, leading to accumulated cellular stress, hormonal imbalance, and impaired cognitive function.</p>
</section>
```

### 3. 双栏：Why Matters + 文章网格
用 `class="hub-two-col"`。左栏 why-box，右栏 article-grid。

```html
<section class="hub-two-col">
    <div class="why-box">
        <h2>Why This Matters</h2>
        <p>Sleep is not passive downtime — it is the body's most active restoration period. During deep sleep, the brain clears metabolic waste, mitochondria regenerate, and ATP stores are replenished.</p>
    </div>
    <div class="explore-articles">
        <h2 style="font-family:'Urbanist',sans-serif;font-size:18px;font-weight:400;color:#1A3348;margin-bottom:14px;">Explore This Hub</h2>
        <div class="article-grid">
            <!-- 6篇文章卡片，从原始文件中获取文章标题/描述/链接 -->
            <a href="/SCIENCE/KNOWLEDGE/Sleep/why-do-i-wake-up-tired.html" class="art-card">
                <span class="art-badge">NEW</span>
                <h3>Why Do I Wake Up Tired?</h3>
                <p>When sleep duration is fine but overnight repair didn't finish.</p>
            </a>
            <a href="/SCIENCE/KNOWLEDGE/Sleep/how-does-sleep-affect-cellular-recovery.html" class="art-card">
                <span class="art-badge">NEW</span>
                <h3>How Does Sleep Affect Cellular Recovery?</h3>
                <p>What the body is actually doing during deep sleep and REM.</p>
            </a>
            <a href="/SCIENCE/KNOWLEDGE/Sleep/why-cant-i-fall-asleep-at-night.html" class="art-card">
                <span class="art-badge">NEW</span>
                <h3>Why Can't I Fall Asleep at Night?</h3>
                <p>When sleep won't come, it may be a loss of biological rhythm.</p>
            </a>
            <a href="/SCIENCE/KNOWLEDGE/Sleep/why-do-i-wake-up-at-430am.html" class="art-card">
                <span class="art-badge">NEW</span>
                <h3>Why Do I Wake Up at 4:30 AM?</h3>
                <p>When sleep happens, but the body still wakes at the same hour.</p>
            </a>
            <a href="/SCIENCE/KNOWLEDGE/Sleep/how-graphene-fir-affects-sleep-architecture.html" class="art-card">
                <h3>How Graphene FIR May Affect Sleep Architecture</h3>
                <p>Sleep first, graphene second: thermal environment and sleep timing.</p>
            </a>
            <a href="/SCIENCE/KNOWLEDGE/graphene-fir/graphene-fir-sleep-anxiety-cognitive-recovery.html" class="art-card">
                <h3>How Does Graphene FIR Affect Sleep?</h3>
                <p>FIR, microcirculation, and thermoregulation — pathway to deeper sleep.</p>
            </a>
        </div>
    </div>
</section>
```

### 4. FAQ（折叠）
用 `class="hub-faq"`。`<details open>` 默认展开第一个问题。

```html
<section class="hub-faq">
    <h2>Frequently Asked Questions</h2>
    <details open>
        <summary>Why do I wake up tired?</summary>
        <p>Waking up tired often indicates insufficient deep sleep — the stage when cellular repair and ATP restoration are most active. Sleep apnea, circadian disruption, and stress can all reduce deep sleep quality.</p>
    </details>
    <details>
        <summary>How does sleep affect mitochondria?</summary>
        <p>During sleep, mitochondrial quality control processes activate, removing damaged mitochondria (mitophagy) and stimulating the production of new, more efficient mitochondria.</p>
    </details>
    <details>
        <summary>What is the glymphatic system?</summary>
        <p>The glymphatic system is the brain's waste clearance mechanism, most active during deep sleep. It removes metabolic byproducts including beta-amyloid that accumulate during wakefulness.</p>
    </details>
    <details>
        <summary>How much deep sleep do I need?</summary>
        <p>Adults typically need 1.5 to 2 hours of deep sleep per night. This stage is when growth hormone release peaks and cellular repair processes are most active.</p>
    </details>
    <details>
        <summary>Can sleep quality be improved naturally?</summary>
        <p>Research supports circadian rhythm alignment, temperature regulation, stress reduction, and consistent sleep-wake timing as effective strategies for improving sleep quality.</p>
    </details>
</section>
```

### 5. Related Hubs
用 `class="rel-hubs"`，3个横向卡片。

```html
<section class="rel-hubs">
    <h2>Related Hubs</h2>
    <div class="rel-grid">
        <a href="../Fatigue/index.html">
            <h3>Chronic Fatigue</h3>
            <p>Why energy deficits persist even after rest</p>
        </a>
        <a href="../Recovery/index.html">
            <h3>Recovery Science</h3>
            <p>How the body repairs and rebuilds at the cellular level</p>
        </a>
        <a href="../Mitochondria/index.html">
            <h3>Mitochondrial Health</h3>
            <p>The cellular engine behind energy, aging, and vitality</p>
        </a>
    </div>
</section>
```

### 6. Footer Notes（3列）
用 `class="footer-notes"`。3列：AI Citable Summary / Evidence / Disclaimer。

```html
<section class="footer-notes">
    <div>
        <h3>AI Citable Summary</h3>
        <p>Sleep is the body's primary restoration cycle, during which glymphatic clearance, mitochondrial quality control, and ATP replenishment occur. Deep sleep supports cellular repair and metabolic regulation. Environmental factors such as stable thermal conditions may be associated with easier sleep onset, but they do not replace the underlying physiology of sleep.</p>
    </div>
    <div>
        <h3>Evidence Snapshot</h3>
        <ul>
            <li>Sleep fragmentation correlates with mitochondrial dysfunction in clinical research.</li>
            <li>FIR exposure has been observed to improve subjective sleep latency in clinical observations.</li>
            <li>Energy metabolism regulates circadian recovery cycles — sleep is an ATP-dependent process.</li>
        </ul>
    </div>
    <div>
        <h3>Scientific Disclaimer</h3>
        <p>This hub is for scientific education and informational purposes only. The content reflects published research and current scientific understanding. It does not constitute medical advice, diagnosis, or treatment recommendations. Always consult qualified healthcare professionals for personal health decisions.</p>
    </div>
</section>
```

### 7. Technical Details（折叠区 — AI读的机器层）
用 `class="tech-fold"`。Node Definition 表格 + Knowledge Position 树 + Graph Navigation 文本。全部折叠，用户看不到。

```html
<section class="tech-fold">
    <details>
        <summary>Technical Details (Node Definition · Graph · Schema)</summary>
        <h3 style="font-family:'Urbanist',sans-serif;font-size:13px;color:#1A3348;margin:16px 0 8px;">Node Definition</h3>
        <table style="width:100%;border-collapse:collapse;font-size:12px;">
            <tr><td style="padding:4px 8px;font-weight:600;">Node</td><td>Sleep</td></tr>
            <tr><td style="padding:4px 8px;font-weight:600;">Layer</td><td>Symptoms Layer</td></tr>
            <tr><td style="padding:4px 8px;font-weight:600;">Question Addressed</td><td>Why do I feel tired even after 8 hours of sleep?</td></tr>
            <tr><td style="padding:4px 8px;font-weight:600;">Mechanism Entry</td><td>Mitochondrial ATP production efficiency</td></tr>
            <tr><td style="padding:4px 8px;font-weight:600;">Upstream Cause</td><td>Cellular energy depletion</td></tr>
            <tr><td style="padding:4px 8px;font-weight:600;">Outcome</td><td>Reduced recovery efficiency, shallow sleep cycles</td></tr>
        </table>

        <h3 style="font-family:'Urbanist',sans-serif;font-size:13px;color:#1A3348;margin:16px 0 8px;">Knowledge Position</h3>
        <pre>
SYMPTOMS LAYER
├─ Sleep ★ (CURRENT)
├─ Fatigue
├─ Recovery
├─ Inflammation
├─ Metabolism
    ↓
MECHANISMS LAYER
├─ Mitochondria
├─ Microcirculation
    ↓
ENERGY LAYER
└─ Cellular Energy
    ↓
TECHNOLOGY LAYER
├─ Graphene FIR
└─ Radiant Efficiency
        </pre>

        <h3 style="font-family:'Urbanist',sans-serif;font-size:13px;color:#1A3348;margin:16px 0 8px;">Graph Navigation</h3>
        <p><strong>⬆️ Upstream Cause:</strong> Cellular Energy Depletion → Mitochondria Dysfunction</p>
        <p><strong>⬇️ Downstream Path:</strong> Sleep → Mitochondria → Cellular Energy → Graphene FIR</p>
    </details>
</section>

</div><!-- /.hub-main -->
```

### 8. Footer（品牌声明，保留不动）
保留原始的 footer 内容（品牌声明文本 + NMPA等）。

### 9. FAQPage JSON-LD（保留不动）
保留已有的 FAQPage schema（第476-523行）。

### 10. 删除旧的冗余内容
删除以下内容（因为它们被新结构取代）：
- Node Definition section（第238-247行）
- Knowledge Position section（第249-296行）
- DefinedTerm JSON-LD（第298-326行）
- 旧的 Quick Answer section（第328-334行）
- 旧的 Why This Matters section（第336-341行）
- 旧的 Explore section + card-list（第344-396行）
- 旧的 About section（第398-411行）
- 旧的 Key Takeaways section（第413-420行）
- 旧的 Related Hubs section（第422-432行）
- 旧的 FAQ section（第434-464行）
- 旧的 footer 内的 Scientific Disclaimer（第466-472行）
- 旧的 Evidence Snapshot（第525-535行）
- 旧的 Graph Navigation（第537-552行）

## 注意
- CSS 已存在于 `<style>` 块中（第91-131行），不需要再加
- `</div><!-- /.hub-main -->` 需要在 footer 之前闭合
- 所有 JSON-LD（BreadcrumbList, CollectionPage, FAQPage, DefinedTerm）保留在 `<head>` 中
- FAQPage JSON-LD 从原始文件保留，不要删除

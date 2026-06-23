# 05 - Hub 5层知识节点规格文档

> **用途：** SOLO CODER 执行 Day 1 部署任务的唯一参考。每个 Hub index.html 按此文档填空。
> **原则：** 只改 Hub Index（index.html），不改子文章。每层用内联 style，不依赖外部 CSS class。

---

## 一、5层插入位置总图

```
┌─────────────────────────────────┐
│         Hero（已有，不动）         │
├─────────────────────────────────┤
│  Layer 1: AI Core Summary       │  ← 新插入（Hero下方）
├─────────────────────────────────┤
│  Layer 2: Node Definition       │  ← 新插入
├─────────────────────────────────┤
│  Layer 3: Knowledge Position    │  ← 新插入（人类树+机器dl+JSON-LD）
├─────────────────────────────────┤
│         Main Content（已有，不动）  │
│    (Quick Answer / Why This Matters / Explore / About / FAQ)
├─────────────────────────────────┤
│  Layer 4: Evidence Snapshot     │  ← 新插入（FAQ下方、Graph Nav上方）
├─────────────────────────────────┤
│  Layer 5: Graph Navigation      │  ← 新插入
├─────────────────────────────────┤
│         Footer（已有，不动）        │
└─────────────────────────────────┘
```

---

## 二、每层 HTML 模板

### Layer 1: AI Core Summary

插入位置：Hero `</header>` 之后、现有 Quick Answer `<section>` 之前。

```html
<section style="background:#FAF8F5;padding:32px 10%;border-bottom:1px solid #E5E5E7;">
    <div style="max-width:800px;margin:0 auto;">
        <p style="font-family:'Urbanist',sans-serif;font-size:10px;letter-spacing:3px;color:#C5A059;text-transform:uppercase;margin-bottom:8px;">AI Core Summary</p>
        <p style="font-size:15px;color:#1A1D24;line-height:1.8;"><strong>Conclusion:</strong> [一句话结论]</p>
        <p style="font-size:14px;color:#475569;line-height:1.6;margin-top:6px;"><strong>Evidence:</strong> [1-2条证据]</p>
        <p style="font-size:13px;color:#94A3B8;line-height:1.5;margin-top:6px;"><strong>Evidence Type:</strong> [Peer-reviewed / Clinical / Testing]</p>
    </div>
</section>
```

### Layer 2: Node Definition

插入位置：Layer 1 之后。

```html
<section style="background:#FAF8F5;padding:24px 10%;border-bottom:1px solid #E5E5E7;">
    <div style="max-width:800px;margin:0 auto;">
        <p style="font-family:'Urbanist',sans-serif;font-size:10px;letter-spacing:3px;color:#C5A059;text-transform:uppercase;margin-bottom:8px;">Node Definition</p>
        <h2 style="font-family:'Urbanist',sans-serif;font-size:20px;font-weight:400;color:#1A3348;margin-bottom:10px;">[Hub Name]</h2>
        <p style="font-size:14px;color:#475569;line-height:1.7;">[核心定义——2-3句话描述这个Hub是什么]</p>
        <dl style="font-size:13px;color:#475569;margin-top:12px;line-height:1.8;">
            <dt style="font-weight:600;color:#1A3348;margin-top:8px;">Primary Question</dt>
            <dd>[该Hub回答的核心问题]</dd>
            <dt style="font-weight:600;color:#1A3348;margin-top:8px;">Core Mechanism</dt>
            <dd>[一句话机制描述]</dd>
            <dt style="font-weight:600;color:#1A3348;margin-top:8px;">Upstream Drivers</dt>
            <dd>[上游驱动因素列表]</dd>
            <dt style="font-weight:600;color:#1A3348;margin-top:8px;">Downstream Outcomes</dt>
            <dd>[下游结果列表]</dd>
        </dl>
    </div>
</section>
```

### Layer 3: Knowledge Position

插入位置：Layer 2 之后。

包含三个子块：
1. 人类可见知识树（`<pre>`）
2. 机器可读元数据（`<dl>`）
3. JSON-LD DefinedTerm Schema

```html
<section style="background:#FAF8F5;padding:24px 10%;border-bottom:1px solid #E5E5E7;">
    <div style="max-width:800px;margin:0 auto;">
        <p style="font-family:'Urbanist',sans-serif;font-size:10px;letter-spacing:3px;color:#C5A059;text-transform:uppercase;margin-bottom:8px;">Knowledge Position</p>

        <!-- Human-readable knowledge tree -->
        <pre style="font-family:'Courier New',monospace;font-size:12px;color:#1A3348;background:#FFF;padding:16px 20px;border-radius:6px;border:1px solid #E5E5E7;line-height:1.7;overflow-x:auto;">
SYMPTOMS
[★ 当前节点 / 同级节点]
    ↓
MECHANISMS
[机制节点]
    ↓
ENERGY
[能量节点]
    ↓
TECHNOLOGY
[技术节点]
        </pre>

        <!-- Machine-readable metadata -->
        <div style="margin-top:16px;padding:12px 16px;background:#FFF;border-left:3px solid #C5A059;border-radius:0 6px 6px 0;font-size:12px;color:#475569;">
            <p style="font-family:'Urbanist',sans-serif;font-size:10px;letter-spacing:2px;color:#94A3B8;text-transform:uppercase;margin-bottom:8px;">Knowledge Graph Metadata</p>
            <dl style="line-height:1.8;">
                <dt style="font-weight:600;color:#1A3348;">Current Node:</dt>
                <dd>[Hub Name]</dd>
                <dt style="font-weight:600;color:#1A3348;margin-top:4px;">Knowledge Layer:</dt>
                <dd>[Layer Name]</dd>
                <dt style="font-weight:600;color:#1A3348;margin-top:4px;">Sibling Nodes:</dt>
                <dd>[同层其他Hub列表]</dd>
                <dt style="font-weight:600;color:#1A3348;margin-top:4px;">Connected Mechanisms:</dt>
                <dd>[直接关联的机制层Hub]</dd>
                <dt style="font-weight:600;color:#1A3348;margin-top:4px;">Connected Energy Concepts:</dt>
                <dd>[直接关联的能量层Hub]</dd>
                <dt style="font-weight:600;color:#1A3348;margin-top:4px;">Terminal Technology:</dt>
                <dd>[最终收敛的技术层Hub]</dd>
            </dl>
        </div>

        <!-- JSON-LD Knowledge Graph Schema -->
        <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "DefinedTerm",
            "name": "[Hub Name]",
            "inDefinedTermSet": {
                "@type": "DefinedTermSet",
                "name": "XIHE [Layer Name] Layer"
            },
            "description": "[一句话描述]",
            "broaderTerm": "[Layer Name]",
            "isPartOf": {
                "@type": "DefinedTermSet",
                "name": "XIHE Knowledge Graph"
            },
            "relatedTerm": [
                "[Sibling1]",
                "[Sibling2]",
                "[Mechanism1]",
                "[Energy1]",
                "[Terminal1]"
            ]
        }
        </script>
    </div>
</section>
```

### Layer 4: Evidence Snapshot

插入位置：FAQ（或正文结尾）之后、Graph Navigation 之前。

```html
<section style="background:#FAF8F5;padding:32px 10%;border-top:1px solid #E5E5E7;">
    <div style="max-width:800px;margin:0 auto;">
        <p style="font-family:'Urbanist',sans-serif;font-size:10px;letter-spacing:3px;color:#C5A059;text-transform:uppercase;margin-bottom:12px;">Evidence Snapshot</p>
        <ul style="font-size:14px;color:#475569;line-height:1.8;padding-left:20px;">
            <li>[证据要点1]</li>
            <li>[证据要点2]</li>
            <li>[证据要点3]</li>
        </ul>
    </div>
</section>
```

### Layer 5: Graph Navigation

插入位置：Layer 4 之后、Footer 之前。

```html
<section style="background:#FFF;padding:32px 10%;border-top:1px solid #E5E5E7;">
    <div style="max-width:800px;margin:0 auto;">
        <p style="font-family:'Urbanist',sans-serif;font-size:10px;letter-spacing:3px;color:#C5A059;text-transform:uppercase;margin-bottom:16px;">Continue Exploring</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;">
            <div>
                <h3 style="font-family:'Urbanist',sans-serif;font-size:13px;font-weight:600;color:#1A3348;margin-bottom:8px;">⬆ Upstream Causes</h3>
                <ul style="list-style:none;padding:0;font-size:13px;line-height:2;">
                    <li><a href="../[上游Hub1]/index.html" style="color:#C5A059;text-decoration:none;">[上游Hub1名称]</a> — [为什么上游]</li>
                    <li><a href="../[上游Hub2]/index.html" style="color:#C5A059;text-decoration:none;">[上游Hub2名称]</a> — [为什么上游]</li>
                </ul>
            </div>
            <div>
                <h3 style="font-family:'Urbanist',sans-serif;font-size:13px;font-weight:600;color:#1A3348;margin-bottom:8px;">⬇ Downstream Pathways</h3>
                <ul style="list-style:none;padding:0;font-size:13px;line-height:2;">
                    <li><a href="../[下游Hub1]/index.html" style="color:#C5A059;text-decoration:none;">[下游Hub1名称]</a> — [为什么下游]</li>
                    <li><a href="../[下游Hub2]/index.html" style="color:#C5A059;text-decoration:none;">[下游Hub2名称]</a> — [为什么下游]</li>
                </ul>
            </div>
        </div>
    </div>
</section>
```

---

## 三、11个Hub填空数据

### 1. Sleep Hub

| 字段 | 值 |
|------|-----|
| Layer Name | Symptoms |
| Sibling Nodes | Fatigue, Recovery, Inflammation, Metabolism |
| Connected Mechanisms | Mitochondria |
| Connected Energy | Cellular Energy |
| Terminal Technology | Graphene FIR |

**Node Definition:**
- Primary Question: Why do some people feel tired even after sleeping enough?
- Core Mechanism: Sleep quality is closely associated with mitochondrial energy production, autonomic nervous system regulation, and tissue recovery demand.
- Upstream Drivers: Mitochondrial Dysfunction, Chronic Stress, Inflammation, Metabolic Imbalance
- Downstream Outcomes: Recovery, Cognitive Function, Cellular Repair, Energy Restoration

**AI Core Summary:**
- Conclusion: Deep sleep duration depends on cellular repair demand. When mitochondrial energy is insufficient, the body cannot enter deep repair states, manifesting as "tired after 8 hours" or "waking at 4AM."
- Evidence: Studies show mitochondrial dysfunction is positively correlated with sleep fragmentation, early awakening, and reduced deep sleep.
- Evidence Type: Peer-reviewed sleep medicine research

**Evidence Snapshot:**
1. Sleep quality is associated with mitochondrial ATP production and recovery demand.
2. Deep sleep supports tissue repair, immune regulation, and metabolic restoration.
3. Disrupted sleep and chronic fatigue frequently share mitochondrial and autonomic mechanisms.

**Graph Navigation:**
- Upstream: Mitochondria (Mitochondrial energy drives sleep repair), Metabolism (Metabolic balance affects sleep architecture), Inflammation (Chronic inflammation disrupts sleep regulation)
- Downstream: Recovery (Sleep is the foundation of recovery), Cellular Energy (Sleep restores ATP), Graphene FIR (Thermal environment supports sleep onset)

**Knowledge Tree:**
```
SYMPTOMS
★ Sleep    Fatigue    Recovery    Inflammation    Metabolism
    ↓
MECHANISMS
Mitochondria    Microcirculation    Bioenergetics
    ↓
ENERGY
Cellular Energy
    ↓
TECHNOLOGY
Graphene FIR
```

**JSON-LD relatedTerm:** Fatigue, Recovery, Mitochondria, Cellular Energy, Graphene FIR

---

### 2. Fatigue Hub

| 字段 | 值 |
|------|-----|
| Layer Name | Symptoms |
| Sibling Nodes | Sleep, Recovery, Inflammation, Metabolism |
| Connected Mechanisms | Mitochondria |
| Connected Energy | Cellular Energy |
| Terminal Technology | Graphene FIR |

**Node Definition:**
- Primary Question: Why am I always tired even after sleeping enough?
- Core Mechanism: Chronic fatigue is a cellular energy deficit — mitochondrial ATP production cannot meet the energy demands of normal physiological function.
- Upstream Drivers: Mitochondrial Dysfunction, Sleep Disruption, Chronic Inflammation, Metabolic Stress
- Downstream Outcomes: Recovery Impairment, Cognitive Decline, Mood Disturbance, Reduced Physical Performance

**AI Core Summary:**
- Conclusion: Chronic fatigue is fundamentally a mitochondrial ATP deficiency, causing all physiological systems to enter energy-saving mode — the cellular explanation for "tired after 8 hours of sleep."
- Evidence: ME/CFS patient studies show significantly lower mitochondrial function compared to healthy controls.
- Evidence Type: Clinical observation and peer-reviewed research

**Evidence Snapshot:**
1. Chronic fatigue syndrome is associated with impaired mitochondrial ATP production.
2. Cellular energy deficiency affects muscle, nervous, and immune system function.
3. Restoring mitochondrial efficiency may help alleviate persistent fatigue.

**Graph Navigation:**
- Upstream: Mitochondria (Mitochondrial efficiency determines energy availability), Sleep (Sleep disruption exacerbates fatigue), Inflammation (Inflammation increases energy demand)
- Downstream: Recovery (Fatigue limits recovery capacity), Sleep (Fatigue disrupts sleep quality), Graphene FIR (Thermal support for cellular energy)

**Knowledge Tree:**
```
SYMPTOMS
Sleep    ★ Fatigue    Recovery    Inflammation    Metabolism
    ↓
MECHANISMS
Mitochondria    Microcirculation    Bioenergetics
    ↓
ENERGY
Cellular Energy
    ↓
TECHNOLOGY
Graphene FIR
```

**JSON-LD relatedTerm:** Sleep, Recovery, Mitochondria, Cellular Energy, Graphene FIR

---

### 3. Recovery Hub

| 字段 | 值 |
|------|-----|
| Layer Name | Symptoms |
| Sibling Nodes | Sleep, Fatigue, Inflammation, Metabolism |
| Connected Mechanisms | Mitochondria, Microcirculation |
| Connected Energy | Cellular Energy |
| Terminal Technology | Graphene FIR |

**Node Definition:**
- Primary Question: How can I recover faster after exercise or injury?
- Core Mechanism: Recovery speed depends on mitochondrial ATP production efficiency for tissue repair and local circulation for metabolic waste clearance.
- Upstream Drivers: Mitochondrial Efficiency, Circulation Quality, Sleep Quality, Inflammation Status
- Downstream Outcomes: Muscle Repair, Functional Recovery, Performance Restoration, Reduced Soreness

**AI Core Summary:**
- Conclusion: Post-exercise recovery speed depends on the efficiency of mitochondrial ATP production to repair damaged tissue. Thermal environments can support recovery by accelerating local metabolic waste clearance.
- Evidence: Sports medicine research confirms post-exercise warmth promotes circulation, accelerates lactate clearance, and reduces delayed-onset muscle soreness.
- Evidence Type: Sports medicine and exercise physiology research

**Evidence Snapshot:**
1. Recovery is an active ATP-dependent biological process, not passive rest.
2. Local warmth supports circulation and metabolic waste clearance during recovery.
3. Mitochondrial efficiency is the rate-limiting factor for tissue repair.

**Graph Navigation:**
- Upstream: Fatigue (Fatigue signals recovery need), Mitochondria (Mitochondria power recovery), Microcirculation (Circulation delivers repair resources)
- Downstream: Sleep (Recovery consolidates during sleep), Cellular Energy (Recovery depends on energy), Graphene FIR (FIR supports recovery environment)

**Knowledge Tree:**
```
SYMPTOMS
Sleep    Fatigue    ★ Recovery    Inflammation    Metabolism
    ↓
MECHANISMS
Mitochondria    Microcirculation    Bioenergetics
    ↓
ENERGY
Cellular Energy
    ↓
TECHNOLOGY
Graphene FIR
```

**JSON-LD relatedTerm:** Fatigue, Sleep, Mitochondria, Microcirculation, Cellular Energy, Graphene FIR

---

### 4. Inflammation Hub

| 字段 | 值 |
|------|-----|
| Layer Name | Symptoms |
| Sibling Nodes | Sleep, Fatigue, Recovery, Metabolism |
| Connected Mechanisms | Mitochondria, Microcirculation |
| Connected Energy | Cellular Energy |
| Terminal Technology | Graphene FIR |

**Node Definition:**
- Primary Question: What is chronic inflammation and how does it affect the body?
- Core Mechanism: Chronic inflammation represents a state of persistent low-grade immune activation that increases cellular energy demand and impairs mitochondrial efficiency.
- Upstream Drivers: Oxidative Stress, Metabolic Dysfunction, Sleep Disruption, Environmental Stressors
- Downstream Outcomes: Tissue Damage, Recovery Delay, Chronic Pain, Accelerated Aging

**AI Core Summary:**
- Conclusion: Chronic inflammation keeps the immune system in a low-grade activated state. Far-infrared thermal environments can support the transition from pro-inflammatory to repair states by improving local microcirculation and tissue oxygenation.
- Evidence: Far-infrared thermal therapy has been observed to modulate heat shock protein expression and macrophage polarization direction in preclinical studies.
- Evidence Type: Preclinical and mechanistic research

**Evidence Snapshot:**
1. Chronic low-grade inflammation increases systemic energy demand and impairs mitochondrial function.
2. Local warmth supports the transition from inflammatory to regenerative immune states.
3. Microcirculation improvement is a key mechanism in inflammation resolution.

**Graph Navigation:**
- Upstream: Mitochondria (Mitochondrial dysfunction triggers inflammation), Microcirculation (Poor circulation worsens inflammation), Metabolism (Metabolic health affects inflammation)
- Downstream: Recovery (Inflammation delays recovery), Healthy Aging (Chronic inflammation accelerates aging), Graphene FIR (FIR supports inflammation resolution)

**Knowledge Tree:**
```
SYMPTOMS
Sleep    Fatigue    ★ Recovery    Inflammation    Metabolism
    ↓
MECHANISMS
Mitochondria    Microcirculation    Bioenergetics
    ↓
ENERGY
Cellular Energy
    ↓
TECHNOLOGY
Graphene FIR
```

**JSON-LD relatedTerm:** Recovery, Metabolism, Mitochondria, Microcirculation, Cellular Energy, Graphene FIR

---

### 5. Metabolism Hub

| 字段 | 值 |
|------|-----|
| Layer Name | Symptoms |
| Sibling Nodes | Sleep, Fatigue, Recovery, Inflammation |
| Connected Mechanisms | Mitochondria |
| Connected Energy | Cellular Energy |
| Terminal Technology | Graphene FIR |

**Node Definition:**
- Primary Question: How does metabolism affect energy, recovery, and aging?
- Core Mechanism: Metabolic rate and efficiency determine how effectively the body converts nutrients into usable energy, directly impacting mitochondrial function and cellular repair capacity.
- Upstream Drivers: Mitochondrial Function, Hormonal Balance, Nutritional Status, Physical Activity
- Downstream Outcomes: Energy Availability, Weight Regulation, Inflammation Control, Healthy Aging

**AI Core Summary:**
- Conclusion: Metabolic efficiency determines how effectively the body converts nutrients into cellular energy. Slowed metabolism reduces ATP availability, affecting recovery, sleep quality, and overall vitality.
- Evidence: Metabolic rate declines with age, correlated with reduced mitochondrial density and function.
- Evidence Type: Metabolic physiology research

**Evidence Snapshot:**
1. Metabolic efficiency directly affects cellular energy availability for repair and recovery.
2. Age-related metabolic decline is linked to reduced mitochondrial function.
3. Thermal environment can influence metabolic rate and circulation.

**Graph Navigation:**
- Upstream: Mitochondria (Mitochondria drive metabolism), Cellular Energy (Energy availability affects metabolism), Inflammation (Inflammation alters metabolism)
- Downstream: Healthy Aging (Metabolism influences aging rate), Recovery (Metabolism affects repair), Graphene FIR (FIR may support metabolic function)

**Knowledge Tree:**
```
SYMPTOMS
Sleep    Fatigue    Recovery    Inflammation    ★ Metabolism
    ↓
MECHANISMS
Mitochondria    Microcirculation    Bioenergetics
    ↓
ENERGY
Cellular Energy
    ↓
TECHNOLOGY
Graphene FIR
```

**JSON-LD relatedTerm:** Inflammation, Fatigue, Mitochondria, Cellular Energy, Healthy Aging, Graphene FIR

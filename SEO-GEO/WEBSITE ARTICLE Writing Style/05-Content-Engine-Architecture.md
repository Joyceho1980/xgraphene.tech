# 05 — Content Engine Architecture

> This is the operational layer.
> It defines how XIHE website articles are generated from structured input.

The XIHE content system operates as five layers. This architecture makes content reproducible without depending on inspiration.

```
Raw Knowledge Layer
    ↓
Insight Card Layer
    ↓
Prompt Object Layer
    ↓
Content Engine Layer
    ↓
Publishing Queue
```

---

## Layer 1: Raw Knowledge Layer

**What it contains:**
- Papers
- Experiment records
- Mechanism notes
- Product data
- Clinical / preclinical findings

**Characteristics:**
- Original, high-value, high-noise
- Not yet structured for publishing
- Useful as evidence, not yet usable as communication

**Rule:** Do not confuse raw notes with publish-ready content. The raw layer is the source of truth, not the source of copy.

---

## Layer 2: Insight Card Layer

**Purpose:** Convert raw material into reusable knowledge units.

**Key fields:**
- Title
- Core idea
- Evidence
- Limitation
- Status (preclinical / clinical / confirmed / hypothesis)
- Confidence

**Example:**
> **Title:** M1/M2 polarization under physical modulation
> **Core idea:** M1 to M2 transition observed under FIR exposure
> **Evidence:** TNF-alpha downregulation, IL-1beta suppression
> **Status:** Preclinical, mechanism not fully causal
> **Confidence:** Moderate

---

## Layer 3: Prompt Object Layer

**Purpose:** Convert insight into structured content fuel.

**Structure:**
```json
{
  "topic": "macrophage polarization",
  "node_anchor": "environment-shapes-recovery",
  "mode": "science-observer",
  "mechanism": "M1 to M2 shift",
  "modality": "graphene far-infrared 9.4μm",
  "context": "preclinical STZ rat model",
  "signals": ["TNF-alpha downregulation", "IL-1beta suppression"],
  "uncertainty": "causality not fully established",
  "human_entry": "Inflammation is not always visible. But the immune system is constantly reading the environment."
}
```

**Rule:** The prompt object is not a post. It is the fuel for the content engine. Every prompt object must specify: topic, node_anchor, mode, mechanism, and human_entry.

---

## Layer 4: Content Engine

**Input:** Prompt object

**Process:**
1. Select the narrative node
2. Select the voice mode
3. Apply the article architecture (Human Experience → System Mismatch → Cellular Explanation → System Interaction → Recovery Environment → Back to Copy)
4. Apply style principles (no over-explaining, no premature certainty, metaphor control)
5. Add three-layer title (SEO Title, Human H1, Deck sentence)
6. Add internal links to related nodes

**Output:** A complete XIHE website article

**Default generator rules:**
- Keep sentences short (~70% under 15 words)
- Preserve uncertainty where needed
- Avoid medical claims
- One idea per line
- One mechanism per paragraph

---

## Layer 5: Publishing Queue

**Purpose:** Schedule and track content.

**Queue entry fields:**
- Status: draft / ready / scheduled / published
- Mode: system-thinker / science-observer / founder-philosopher
- Node: node name
- Date
- Platform: website / linkedin / quora

---

## The Bridge Layer Principle

The KB is a storage system. It is not yet a generation system.

The missing bridge is the transformation of raw KB material into structured prompt objects.

That bridge layer is what makes automation possible.

If the system is applied consistently, the result is not just more articles. The result is:
- Stronger content consistency
- Less dependence on inspiration
- A reusable insight library
- A durable narrative system
- A recognizable thought architecture

---

## One-Sentence Summary

The XIHE content system should not function as a content dump. It should function as the raw-material layer of a reproducible thinking system.

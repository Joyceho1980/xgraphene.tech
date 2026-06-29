# XIHE Content Quality Audit — 2026-06-29

## 概览

| 指标 | 数据 |
|:---|:---|
| 文件数 | 150 |
| 🔴 错误 | 61 |
| 🟡 警告 | 1 |
| 🔵 信息 | 0 |

### 按类别

| 类别 | 🔴 | 🟡 | 🔵 |
|:---|---:|---:|---:|
| technical | 61 | 0 | 0 |
| schema | 0 | 1 | 0 |

## 🔴 错误（61个）

### duplicate-doctype

- **WEBSITE/pages/CONTACT/index.html**
  - 发现 2 个重复 DOCTYPE
  - 修复: 只保留第一行 <!DOCTYPE html>

- **WEBSITE/pages/NEWS/Company-Updates/zheng-nanfeng-neuropsychiatric-research.html**
  - 发现 2 个重复 DOCTYPE
  - 修复: 只保留第一行 <!DOCTYPE html>

- **WEBSITE/pages/NEWS/Industry-News/rise-of-non-pharmacological-healthcare.html**
  - 发现 2 个重复 DOCTYPE
  - 修复: 只保留第一行 <!DOCTYPE html>

- **WEBSITE/pages/PRODUCTS/CABIN/cabin.html**
  - 发现 2 个重复 DOCTYPE
  - 修复: 只保留第一行 <!DOCTYPE html>

- **WEBSITE/pages/PRODUCTS/CAPSULE/capsule-b2b.html**
  - 发现 2 个重复 DOCTYPE
  - 修复: 只保留第一行 <!DOCTYPE html>

> ...还有 56 个


## 🟡 警告（1个）

### missing-faq-schema

- **WEBSITE/pages/SCIENCE/KNOWLEDGE/Clinical-Evidence/index.html**
  - 页面含 FAQ 内容但缺 FAQPage Schema
  - 修复: 添加 FAQPage JSON-LD


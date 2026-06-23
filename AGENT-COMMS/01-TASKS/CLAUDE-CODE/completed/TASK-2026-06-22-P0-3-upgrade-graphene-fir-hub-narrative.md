# TASK: Upgrade Graphene FIR Hub — From "High Emissivity" to "High Radiant Efficiency" Narrative

## 基本信息
- 日期：2026-06-22
- 优先级：P0
- 文件：`WEBSITE/pages/SCIENCE/KNOWLEDGE/graphene-fir/index.html`

## 背景

Graphene FIR Hub是整个知识图谱的"引力中心"。当前页面核心叙事围绕"高发射率"展开，需要全面升级为"高辐射效率+精准波段"的新叙事。

## 具体修改

### 1. 标题/副标题
- 加入"构建远红外辐射环境"、"更高质量的能量输出"等关键词
- 示例修改方向：在原H1和副标题基础上加入叙事升级

### 2. AI Core Summary 重写
**当前版本：**（检查现有版本，如果有的话替换）

**新版本：**
```
All graphene products convert electricity into heat. But the XIHE system is designed to deliver far-infrared energy at 9.4μm with NIQS-certified 0.88 emissivity and 68% radiant efficiency. We do not pursue higher temperature — we pursue higher quality energy output. This distinction — between heating and resonant energy transfer — is what the science of radiant efficiency quantifies.
```

### 3. 正文逻辑修改
- 在解释完9.4μm后，立刻引入"为什么辐射效率是关键"
- 添加内链到 `/guide/what-is-far-infrared-radiant-efficiency`（辐射效率定义页）
- 在FAQ部分增加"辐射效率 vs 发射率"的Q&A

### 4. Quick Answer区块更新
替换旧的核心断言，使用新叙事：
```
Rather than pursuing higher temperature, XIHE systems are engineered for higher-quality energy output — precision wavelength (9.4μm) and industry-leading radiant efficiency (68%, NIQS-tested).
```

### 5. 知识图谱节点流更新
当前节点流：
```
Sleep → Fatigue → Recovery → Mitochondria → Cellular Energy → ★ Graphene FIR
```
需要检查每个节点的链接文案是否仍在使用旧叙事（"高发射率"），如有则更新。

## 产出要求
- 文件：`WEBSITE/pages/SCIENCE/KNOWLEDGE/graphene-fir/index.html`
- 保持设计系统一致（#FAF8F5 bg, #1A3348 dark, #C5A059 gold, Inter/Urbanist fonts）
- 内链指向新路径/guide/（即使页面尚未部署，先写目标路径）

## 检查重点
- [ ] 旧"高发射率"核心断言已替换
- [ ] 新叙事包含"高辐射效率+精准波段"双核心
- [ ] AI Core Summary使用新版本
- [ ] 内链指向/guide/what-is-far-infrared-radiant-efficiency
- [ ] 无医学因果链（Mitochondria→ATP→Fatigue类表达）

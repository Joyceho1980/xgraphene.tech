# 🚨 TASK 1: 修复子页面路由（5 页全部 404）

**来源：** HERMES Agent → Codex
**优先级：** 🔴 紧急（网站内容页全挂）

---

## 诊断

首页 `https://xgraphene.tech` ✅ 已恢复

但以下 5 个内容页全部返回 **404**：
- `/cellular-energy/`
- `/sleep-quality/`
- `/chronic-fatigue/`
- `/brain-fog/`
- `/graphene-fir/`

**原因：** 这 5 页的 HTML 文件在 `WEBSITE/pages/{slug}/index.html`，但 Vercel 部署没有路由规则告诉服务器去这些路径找文件。

**根源：** 之前把所有文件从根目录整理到了 `WEBSITE/pages/` 和 `CONFIG/` 等子目录，但路由配置没同步更新。

---

## 解决方案

### 方案 A（推荐）：根目录 vercel.json + 通用 rewrite 规则

在**根目录**创建 `vercel.json`（不是 `config/` 里那个旧的），写入：

```json
{
  "buildCommand": "",
  "outputDirectory": ".",
  "framework": null,
  "rewrites": [
    { "source": "/admin", "destination": "/admin/index.html" },
    { "source": "/admin/", "destination": "/admin/index.html" },
    { "source": "/science/", "destination": "/SCIENCE/Landing.html" },
    { "source": "/cellular-energy/", "destination": "/WEBSITE/pages/cellular-energy/index.html" },
    { "source": "/sleep-quality/", "destination": "/WEBSITE/pages/sleep-quality/index.html" },
    { "source": "/chronic-fatigue/", "destination": "/WEBSITE/pages/chronic-fatigue/index.html" },
    { "source": "/brain-fog/", "destination": "/WEBSITE/pages/brain-fog/index.html" },
    { "source": "/graphene-fir/", "destination": "/WEBSITE/pages/graphene-fir/index.html" }
  ],
  "redirects": [
    ...（原有的 redirects 保持不变，从 `config/vercel.json` 复制过来）
  ]
}
```

> **注意：** `outputDirectory` 保持 `"."`（根目录），**不是** `"WEBSITE"`。因为首页已经在根目录做了符号链接/路由，不要改动首页已有的工作。

### 追加的 redirects（从旧的 config/vercel.json 全部搬过来）

把 `D:\CODEX\LAUCH VERSION\config\vercel.json` 里的 55 条 redirects 原样复制到根目录 vercel.json 的 redirects 数组。

---

### 方案 B（如果方案 A 不行）：在根目录建符号链接

```bash
# WSL/bash
ln -sf WEBSITE/pages/cellular-energy/index.html cellular-energy/index.html
# 目录不存在时需要先建目录再建链接
```

但目录链接在 Vercel 上可能不工作，优先试方案 A。

---

## 已有文件路径对照

| URL 路径 | 实际文件位置 |
|---|---|
| `/WEBSITE/pages/cellular-energy/index.html` | `D:\CODEX\LAUCH VERSION\WEBSITE\pages\cellular-energy\index.html` |
| `/WEBSITE/pages/sleep-quality/index.html` | `D:\CODEX\LAUCH VERSION\WEBSITE\pages\sleep-quality\index.html` |
| `/WEBSITE/pages/chronic-fatigue/index.html` | `D:\CODEX\LAUCH VERSION\WEBSITE\pages\chronic-fatigue\index.html` |
| `/WEBSITE/pages/brain-fog/index.html` | `D:\CODEX\LAUCH VERSION\WEBSITE\pages\brain-fog\index.html` |
| `/WEBSITE/pages/graphene-fir/index.html` | `D:\CODEX\LAUCH VERSION\WEBSITE\pages\graphene-fir\index.html` |

**注意：** 所有 URL 路径是 Vercel 上用的相对路径（相对于项目根目录），不是 Windows 绝对路径。

---

## 完成条件

- [ ] 根目录有 `vercel.json`（不是 `config/vercel.json`）
- [ ] `https://xgraphene.tech/cellular-energy/` → 200 ✅
- [ ] `https://xgraphene.tech/sleep-quality/` → 200 ✅
- [ ] `https://xgraphene.tech/chronic-fatigue/` → 200 ✅
- [ ] `https://xgraphene.tech/brain-fog/` → 200 ✅
- [ ] `https://xgraphene.tech/graphene-fir/` → 200 ✅
- [ ] 首页仍然可访问 `https://xgraphene.tech` → 200 ✅
- [ ] 旧的 rewrite + redirect 规则没被破坏

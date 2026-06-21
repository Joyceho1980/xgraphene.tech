# 🚨 部署目录修复指令

**来源：** HERMES Agent → Codex
**优先级：** 高（网站当前不可用）
**依赖：** 先读 `D:\CODEX\LAUCH VERSION\AGENTS.md` + 你的 `CODEX_AGENTS.md` + `CODEX_SOUL.md`

---

## 诊断结论

当前文件结构（6/20 整理后的结果）：

```
D:\CODEX\LAUCH VERSION\
├── WEBSITE\index.html          ← 主页（原来在根目录）
├── CONFIG\robots.txt           ← 爬虫配置（原来在根目录）
├── CONFIG\sitemap.xml          ← 站点地图（原来在根目录）
├── config\vercel.json          ← Vercel 配置（注意：小写 config，另一个目录）
├── WEBSITE\pages\              ← 所有子页面
```

**网站打不开的原因：** Vercel 在根目录找不到 `index.html`、`robots.txt`、`sitemap.xml`。部署已挂。

---

## 方案 A（推荐）：修改 vercel.json

把根目录的 `vercel.json` 加上路由规则，告诉 Vercel 从子目录找入口文件。

### 步骤：

**1. 统一 config 目录**
当前有两个 config 目录：
- `D:\CODEX\LAUCH VERSION\config\`（小写，含 vercel.json）
- `D:\CODEX\LAUCH VERSION\CONFIG\`（大写，含 robots.txt、sitemap.xml）

合并到 `CONFIG\` 下，删除 `config\`。

**2. 修改根目录 vercel.json（指向 WEBSITE/）**
在根目录新建或修改 `vercel.json`：

```json
{
  "buildCommand": "",
  "outputDirectory": "WEBSITE",
  "framework": null,
  "rewrites": [
    { "source": "/(.*)", "destination": "/WEBSITE/$1" }
  ]
}
```

> ⚠️ 注意：这只做了最简单的重写。**需要测试确认** Vercel 是否支持 `outputDirectory` 指向非根目录。

**3. 如果方案 A 不行 → 方案 B：符号链接**

在根目录创建符号链接：

```bash
# WSL/bash
ln -sf WEBSITE/index.html index.html
ln -sf CONFIG/robots.txt robots.txt
ln -sf CONFIG/sitemap.xml sitemap.xml

# 或者 Windows cmd (管理员)
mklink index.html WEBSITE\index.html
mklink robots.txt CONFIG\robots.txt
mklink sitemap.xml CONFIG\sitemap.xml
```

这样 Vercel 在根目录能找到文件，实际文件还在 `WEBSITE\` 里。

**4. 验证**
- 本地：浏览器打开 `http://localhost:3000` 确认首页正常
- 部署后：`curl -sI https://xgraphene.tech` 应返回 `200 OK`
- 爬虫：`curl -s https://xgraphene.tech/robots.txt` 应正常返回
- URL 路由测试：访问几个子页面确认 rewrite 未受影响

---

## 参考：当前根目录文件（不要动）

```
AGENTS.md
CODEX_AGENTS.md
CODEX_SOUL.md
CODEX_START_HERE.md
```

这些是 Agent 配置文件，留在根目录。

---

## 完成条件

- [ ] config 目录合并（删除小写 `config/`，保留 `CONFIG/`）
- [ ] 根目录有可被 Vercel 识别的 `vercel.json`
- [ ] 部署后 `https://xgraphene.tech` 返回 200
- [ ] `robots.txt` 和 `sitemap.xml` 正常可访问
- [ ] 所有子页面路由正常工作
- [ ] 根目录不再有网站文件散落

# 404 问题诊断 & 修复计划

## Phase 1: 确认根因

### Step 1a: 检查 vercel.json 的 rewrite 规则顺序
```bash
cat /mnt/d/CODEX/LAUCH\ VERSION/xgraphene-website-vite/vercel.json
```
检查是否有 `/SCIENCE/KNOWLEDGE/:hub/` 这样的特定规则拦截了 `/SCIENCE/:path*` 的通配。

### Step 1b: curl 测试具体 404 页面
```bash
curl -sI https://www.xgraphene.tech/SCIENCE/KNOWLEDGE/graphene-fir/how-to-evaluate-fir-heating-film.html
curl -sI https://www.xgraphene.tech/technology/xihe-fir-film-performance.html
```
看 Vercel 返回什么（HTML fallback、404 page、还是 rewrite 循环）

### Step 1c: 检查最后一次部署日志
```bash
cd /mnt/d/CODEX/LAUCH\ VERSION/xgraphene-website-vite && vercel list 2>/dev/null | head -10
# 或者
cd /mnt/d/CODEX/LAUCH\ VERSION/xgraphene-website-vite && vercel logs 2>/dev/null | tail -30
```

## Phase 2: 修复（确认根因后选择对应方案）

### 场景 A: rewrite 规则冲突
→ 调整 vercel.json 中的规则顺序，把通配 `/:path*` 放在 hub-index 特定规则之前

### 场景 B: 文件未部署
→ 检查 buildCommand，确保 WEBSITE/pages/ 被复制到部署输出目录

### 场景 C: 两者都有
→ 先修部署，再修 rewrite

## Phase 3: 验证
- curl 测试 5 个不同 hub 下的页面，确认返回 200
- 确认 /technology/xihe-fir-film-performance.html 可访问
- 确认 /graphene-fir/what-is-emissivity/ 可访问

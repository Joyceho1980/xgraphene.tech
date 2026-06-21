# 📡 CRON: 修复子页面路由后自动部署

**来源：** HERMES Agent → Codex
**动作类型：** 部署指令

---

处理完 `TASK-2026-06-21-01-fix-subpage-routing.md` 后，立即执行：

1. **将 `vercel.json` 提交到 Git** — `git add vercel.json && git commit -m "fix: add subpage rewrites for 5 content pages"`
2. **部署到 Vercel** — `vercel --prod`
3. **等待部署完成**（约 30-60 秒）
4. **验证全部 6 个 URL 可访问：**
   - `https://xgraphene.tech` (首页)
   - `https://xgraphene.tech/cellular-energy/`
   - `https://xgraphene.tech/sleep-quality/`
   - `https://xgraphene.tech/chronic-fatigue/`
   - `https://xgraphene.tech/brain-fog/`
   - `https://xgraphene.tech/graphene-fir/`

全部返回 200 ✅ 后，把 task 移到 `CODEX/completed/`。

# XGraphene Website 部署指南

## 域名
**xgraphene.tech**（阿里云购买）

---

## 第一步：创建GitHub仓库

1. 打开 https://github.com/new
2. 仓库名：`xgraphene-website`
3. 选择 **Public**
4. **不要**勾选 "Add a README file"
5. 点击 **Create repository**

---

## 第二步：推送代码到GitHub

在本地终端运行：

```bash
cd /mnt/d/TRAE/xgraphene-website

# 添加远程仓库（替换YOUR_USERNAME为你的GitHub用户名）
git remote add origin https://github.com/YOUR_USERNAME/xgraphene-website.git

# 推送代码
git branch -M main
git push -u origin main
```

---

## 第三步：部署到Vercel

1. 打开 https://vercel.com
2. 点击 **Sign Up** → 选择 **Continue with GitHub**
3. 登录后点击 **Add New...** → **Project**
4. 选择 `xgraphene-website` 仓库
5. 点击 **Import**
6. 配置：
   - Framework Preset: **Vite**
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `dist`
7. 点击 **Deploy**
8. 等待1-2分钟，部署完成

---

## 第四步：绑定域名

### 4.1 在Vercel添加域名

1. 进入项目 → **Settings** → **Domains**
2. 输入：`xgraphene.tech`
3. 点击 **Add**
4. 同时添加：`www.xgraphene.tech`

### 4.2 在阿里云配置DNS

登录阿里云域名控制台，添加DNS解析：

| 记录类型 | 主机记录 | 记录值 |
|----------|----------|--------|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

**注意**：Vercel会显示具体的DNS记录值，以Vercel显示为准。

### 4.3 等待DNS生效

- 通常5-30分钟生效
- 最长等待48小时

---

## 第五步：提交到Google Search Console

1. 打开 https://search.google.com/search-console
2. 点击 **Add Property**
3. 选择 **Domain**
4. 输入：`xgraphene.tech`
5. 按提示验证域名（通过DNS TXT记录）
6. 验证成功后，提交sitemap：
   - 左侧菜单 → **Sitemaps**
   - 输入：`sitemap.xml`
   - 点击 **Submit**

---

## 网站文件清单

### SEO文件
- ✅ `public/robots.txt` - 爬虫规则
- ✅ `public/sitemap.xml` - 页面索引
- ✅ `index.html` - Meta标签 + Schema.org

### 页面
- ✅ Home（首页）
- ✅ Technology（技术原理）
- ✅ Products（产品列表）
- ✅ Applications（应用场景）
- ✅ Research（论文数据库）
- ✅ Certification（认证资质）
- ✅ About（公司简介）
- ✅ FAQ（常见问题）
- ✅ Contact（联系方式）
- ✅ ProductTherapyHelmet（理疗头盔详情）
- ✅ ProductHairGrowth（生发仪详情）
- ✅ CaseStudyAnta（安踏案例）

### 内链优化
- ✅ 每页2-5个内链
- ✅ 相关页面推荐组件
- ✅ 关键词锚文本

---

## 预计收录时间

| 阶段 | 时间 |
|------|------|
| 部署上线 | 10分钟 |
| DNS生效 | 5-30分钟 |
| Google收录首页 | 1-7天 |
| Google收录全站 | 2-4周 |
| 排名稳定 | 1-3个月 |

---

## 后续优化建议

1. **添加Google Analytics** - 追踪流量
2. **添加OG图片** - 社交分享缩略图
3. **持续更新内容** - 博客/案例
4. **外链建设** - 行业网站链接

---

## 联系方式

如有问题，随时找我！

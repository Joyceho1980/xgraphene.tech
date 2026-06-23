# LAUCH VERSION Cleanup Map

Date: 2026-06-14

## Problem

The project root currently mixes website content with operating files, generated assets, scripts, and cache/dependency folders.

That makes the site harder to navigate and increases the risk of moving the wrong thing later.

## What Should Stay in the Root

- Website pages and routes
- Website assets needed at runtime
- Core config files
- Deployment files

## What Is Currently Mixed In

### Website Content

- `HOME/`
- `ABOUT/`
- `CONTACT/`
- `NEWS/`
- `PRODUCTS/`
- `SCIENCE/`
- `index.html`
- `applications.html`
- `science.html`
- `partnership.html`

### Operating / Documentation

- `DOCUMENTS/`
- `DOC/`
- `AGENTS.md`
- `HUB-IMAGE-GUIDE.md`
- `北美市场战略.md`

### Utility Scripts

- `add_quick_answer.py`
- `create_logo_versions.py`
- `fix_all_issues.py`
- `fix_titles.py`
- `rebuild_hub_sections.py`
- `restore_explore.py`
- `submit-index.js`
- `upgrade_articles.py`
- `remove_bg.py`
- `replace_logo.py`
- `step1-check-creds.js`
- `step2-test-api.js`

### Generated / Temporary

- `output/`
- `test-results/`
- `node_modules/`
- image files sitting directly in root
- reports such as `www.xgraphene.tech_*.report.html`

### Support / Platform

- `.codex/`
- `.trae/`
- `.vercel/`
- `config/`
- `data/`
- `tools/`

## Recommended Final Shape

### 1. Root = Website Only

Keep the root focused on the public site and deployment files.

### 2. Operational Material Moves Out

Move documentation and operational notes into:

- `DOCUMENTS/`
- `D:\\XIHE-ENGLISH-KB\\LINKEDIN-CONTENT\\`
- `D:\\XIHE-ENGLISH-KB\\06-PUBLISHING-MAPS\\`

### 3. Scripts Grouped

Group one-off utilities under a single scripts folder instead of leaving them loose in root.

### 4. Generated Assets Grouped

Keep generated images and exports in dedicated asset folders, not at the root.

## Safe Cleanup Order

1. Inventory first
2. Move docs and notes
3. Group scripts
4. Group generated assets
5. Leave runtime site files untouched until the end

## Rule

Do not move anything unless we know whether it is:

- runtime site content
- a reusable asset
- an operational note
- a temporary artifact


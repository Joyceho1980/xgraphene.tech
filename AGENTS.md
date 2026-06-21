# XIHE Project - Codex Agent Instructions

## Project Overview
XIHE (晞和科技) is a graphene-based bio-energy technology company. This is the company website project.

## Key Context
- **Company**: 厦门晞和科技有限公司 (Xiamen XIHE Technology Co., Ltd.)
- **Core Technology**: Graphene far-infrared (FIR) thermal therapy devices
- **Products**: CABIN (微压氧舱), CAPSULE (胶囊舱), PORTABLES (便携设备), FILM (石墨烯薄膜)
- **API Provider**: 9527code (OpenAI-compatible, base_url: https://9527code.com/v1)
- **Model**: gpt-5.4-mini (codex group)

## Important Rules
1. Always save important findings, decisions, and code changes to files in the project directory
2. When working on web pages, maintain the existing design language (dark theme, science-focused)
3. All HTML pages should be SEO-optimized with proper meta tags
4. Image references use relative paths from the project root
5. Chinese content should use proper encoding (UTF-8)

## Project Structure
- `HOME/` - Homepage assets
- `ABOUT/` - About us pages
- `PRODUCTS/` - Product pages (CABIN, CAPSULE, FILM, PORTABLES)
- `SCIENCE/` - Science & knowledge hub
- `NEWS/` - News & updates
- `CONTACT/` - Contact page
- `DOCUMENTS/` - Internal documents and reports
- `D:\CODEX\XIHE-CRM` - Sales CRM and customer pipeline workspace
- `PICTURE/` - Image assets
- `config/` - Configuration files
- `data/` - JSON data files
- `.codex/skills/xihe-sales-outreach/` - Local Codex skill for outbound sales workflow, CRM discipline, and painpoint-led outreach

## Session Memory
When starting a new session, check these files for context:
- `DOCUMENTS/` - for recent reports and decisions
- `DOCUMENTS/LINKEDIN/00-START-HERE.md` - single entry point for all LinkedIn operating memory and current priorities
- `DOC/` - for project progress notes
- `.codex/skills/xihe-sales-outreach/SKILL.md` - for the current XIHE outbound sales operating workflow

### LinkedIn Memory Rule

For LinkedIn work, do not rely on scattered files across `DOCUMENTS/`.

Start from:

- `DOCUMENTS/LINKEDIN/00-START-HERE.md`

Treat that file as the canonical routing file for:

- founder voice
- company page rules
- CRM-linked monitoring
- comment decision logic
- daily queue

## Current Sales State
- Current outbound execution is running as a separate sales layer under `DOCUMENTS/SALES-DIRECTOR/`
- CRM system of record is `D:\CODEX\XIHE-CRM`
- English sales and science support library is `D:\XIHE-ENGLISH-KB`
- Sales skill registry folder is `D:\CODEX\LAUCH VERSION\DOCUMENTS\SALES-DIRECTOR\skills`
- Python launcher for the active sales skill is `D:\CODEX\LAUCH VERSION\DOCUMENTS\SALES-DIRECTOR\skills\python\launch_xihe_sales_skill.py`
- Current prospecting approach is free-first: use public website routes, Google, and limited free tool credits before buying paid data or verification
- Google dorking is part of the standard free-first contact discovery workflow:
  - use official-site searches, role-based searches, filetype searches, and LinkedIn-supported Google search
  - use it to find email patterns and routing paths, not as a replacement for account-fit analysis
- First focused outbound segment is PEMF-adjacent buyers in the US, especially:
  - PT / sports rehab clinics with PEMF or related recovery modalities
  - recovery centers or recovery chains with PEMF, cryotherapy, red light, compression, or infrared stacks
- Core positioning rule for this segment:
  - do not pitch XIHE as a replacement for PEMF, cryotherapy, or red light
  - pitch XIHE as a premium, science-led recovery experience that sits beside an existing recovery stack

## Persistence Strategy
Since Codex conversation history is lost on restart:
- Write all important decisions to `DOCUMENTS/` as markdown files
- Use dated filenames (e.g., `Decision-2026-06-08.md`)
- Keep this AGENTS.md updated with current project state

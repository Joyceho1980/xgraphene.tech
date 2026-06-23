"""Convert 20 priority page drafts to HTML and deploy to correct Knowledge Hub directories."""
import os, re, shutil, json

BASE = r"D:\CODEX\LAUCH VERSION"
DRAFTS = os.path.join(BASE, "DRAFTS", "priority-pages")
HERO_SRC = os.path.join(DRAFTS, "hero-assets")
HERO_DST = os.path.join(BASE, "PICTURE")
KNOWLEDGE = os.path.join(BASE, "SCIENCE", "KNOWLEDGE")
SITE_URL = "https://www.xgraphene.tech"

# Copy hero assets to main PICTURE dir
for f in os.listdir(HERO_SRC):
    src = os.path.join(HERO_SRC, f)
    dst = os.path.join(HERO_DST, f)
    if not os.path.exists(dst):
        shutil.copy2(src, dst)
        print(f"  Copied hero: {f}")

# Hub mapping: {page_number: (hub_dir, hub_name, breadcrumb_name)}
HUB_MAP = {
    1:  ("Fatigue", "Fatigue", "Fatigue"),
    2:  ("cellular-energy", "ATP & Energy", "Cellular Energy"),
    3:  ("Mitochondria", "Mitochondria", "Mitochondria"),
    4:  ("healthy-aging", "Aging", "Healthy Aging"),
    5:  ("cellular-energy", "ATP & Energy", "Cellular Energy"),
    6:  ("Sleep", "Sleep", "Sleep"),
    7:  ("Sleep", "Sleep", "Sleep"),
    8:  ("Sleep", "Sleep", "Sleep"),
    9:  ("Inflammation", "Inflammation", "Inflammation"),
    10: ("Inflammation", "Inflammation", "Inflammation"),
    11: ("Inflammation", "Inflammation", "Inflammation"),
    12: ("Microcirculation", "Microcirculation", "Microcirculation"),
    13: ("Microcirculation", "Microcirculation", "Microcirculation"),
    14: ("Microcirculation", "Microcirculation", "Microcirculation"),
    15: ("Recovery", "Recovery", "Recovery"),
    16: ("Recovery", "Recovery", "Recovery"),
    17: ("Recovery", "Recovery", "Recovery"),
    18: ("healthy-aging", "Aging", "Healthy Aging"),
    19: ("cellular-energy", "ATP & Energy", "Cellular Resilience"),
    20: ("healthy-aging", "Aging", "Healthy Aging"),
}

# Hero asset mapping from HERO-ASSET-MAP
HERO_MAP = {
    1:  "hero-fatigue-energy.png",
    2:  "hero-mitochondria-energy.jpg",
    3:  "hero-fatigue-energy.png",
    4:  "hero-aging-recovery.png",
    5:  "hero-mitochondria-energy.jpg",
    6:  "hero-sleep-recovery.jpg",
    7:  "hero-sleep-recovery.jpg",
    8:  "hero-sleep-recovery.jpg",
    9:  None,   # new image needed
    10: None,   # new image needed
    11: "hero-fatigue-energy.png",
    12: "hero-microcirculation-flow.jpg",
    13: "hero-microcirculation-flow.jpg",
    14: "hero-microcirculation-flow.jpg",
    15: "hero-aging-recovery.png",
    16: "hero-aging-recovery.png",
    17: "hero-aging-recovery.png",
    18: "hero-aging-recovery.png",
    19: "hero-mitochondria-energy.jpg",
    20: "hero-aging-recovery.png",
}

# Hub nav links
HUB_NAV = [
    ("/SCIENCE/KNOWLEDGE/", "All Hubs"),
    ("/SCIENCE/KNOWLEDGE/Mitochondria/", "Mitochondria"),
    ("/SCIENCE/KNOWLEDGE/cellular-energy/", "ATP & Energy"),
    ("/SCIENCE/KNOWLEDGE/Fatigue/", "Fatigue"),
    ("/SCIENCE/KNOWLEDGE/Inflammation/", "Inflammation"),
    ("/SCIENCE/KNOWLEDGE/Sleep/", "Sleep"),
    ("/SCIENCE/KNOWLEDGE/Recovery/", "Recovery"),
    ("/SCIENCE/KNOWLEDGE/Microcirculation/", "Microcirculation"),
    ("/SCIENCE/KNOWLEDGE/graphene-fir/", "Graphene FIR"),
    ("/SCIENCE/KNOWLEDGE/Metabolism/", "Metabolism"),
    ("/SCIENCE/KNOWLEDGE/bioenergetics/", "Bioenergetics"),
    ("/SCIENCE/KNOWLEDGE/healthy-aging/", "Aging"),
]

RELATED_LINKS = {
    "Fatigue": [
        ("/SCIENCE/KNOWLEDGE/cellular-energy/", "What Is Cellular Energy?"),
        ("/SCIENCE/KNOWLEDGE/Mitochondria/", "What Are Mitochondria?"),
        ("/SCIENCE/KNOWLEDGE/Sleep/", "Sleep and Cellular Recovery"),
        ("/SCIENCE/KNOWLEDGE/Microcirculation/", "Microcirculation and Energy"),
        ("/SCIENCE/KNOWLEDGE/graphene-fir/", "Graphene FIR Technology"),
    ],
    "cellular-energy": [
        ("/SCIENCE/KNOWLEDGE/Mitochondria/", "Mitochondrial Function"),
        ("/SCIENCE/KNOWLEDGE/Fatigue/", "Why Am I Always Tired?"),
        ("/SCIENCE/KNOWLEDGE/Inflammation/", "Inflammation and Energy"),
        ("/SCIENCE/KNOWLEDGE/Microcirculation/", "Microcirculation"),
        ("/SCIENCE/KNOWLEDGE/graphene-fir/", "Graphene FIR Science"),
    ],
    "Mitochondria": [
        ("/SCIENCE/KNOWLEDGE/cellular-energy/", "ATP and Cellular Energy"),
        ("/SCIENCE/KNOWLEDGE/Inflammation/", "Inflammation and Mitochondria"),
        ("/SCIENCE/KNOWLEDGE/healthy-aging/", "Aging and Energy"),
        ("/SCIENCE/KNOWLEDGE/bioenergetics/", "Bioenergetics"),
        ("/SCIENCE/KNOWLEDGE/graphene-fir/", "Graphene FIR Technology"),
    ],
    "Microcirculation": [
        ("/SCIENCE/KNOWLEDGE/cellular-energy/", "Cellular Energy"),
        ("/SCIENCE/KNOWLEDGE/Inflammation/", "Inflammation"),
        ("/SCIENCE/KNOWLEDGE/Recovery/", "Recovery Science"),
        ("/SCIENCE/KNOWLEDGE/Sleep/", "Sleep and Circulation"),
        ("/SCIENCE/KNOWLEDGE/graphene-fir/", "Graphene FIR Science"),
    ],
    "Sleep": [
        ("/SCIENCE/KNOWLEDGE/Fatigue/", "Fatigue and Energy"),
        ("/SCIENCE/KNOWLEDGE/Mitochondria/", "Mitochondrial Function"),
        ("/SCIENCE/KNOWLEDGE/Microcirculation/", "Microcirculation"),
        ("/SCIENCE/KNOWLEDGE/Recovery/", "Recovery Science"),
        ("/SCIENCE/KNOWLEDGE/graphene-fir/", "Graphene FIR Technology"),
    ],
    "Inflammation": [
        ("/SCIENCE/KNOWLEDGE/Mitochondria/", "Mitochondrial Function"),
        ("/SCIENCE/KNOWLEDGE/cellular-energy/", "Cellular Energy"),
        ("/SCIENCE/KNOWLEDGE/Microcirculation/", "Microcirculation"),
        ("/SCIENCE/KNOWLEDGE/Sleep/", "Sleep and Recovery"),
        ("/SCIENCE/KNOWLEDGE/graphene-fir/", "Graphene FIR Science"),
    ],
    "Recovery": [
        ("/SCIENCE/KNOWLEDGE/Microcirculation/", "Microcirculation"),
        ("/SCIENCE/KNOWLEDGE/cellular-energy/", "Cellular Energy"),
        ("/SCIENCE/KNOWLEDGE/Sleep/", "Sleep and Recovery"),
        ("/SCIENCE/KNOWLEDGE/Inflammation/", "Inflammation"),
        ("/SCIENCE/KNOWLEDGE/graphene-fir/", "Graphene FIR Technology"),
    ],
    "healthy-aging": [
        ("/SCIENCE/KNOWLEDGE/Mitochondria/", "Mitochondrial Function"),
        ("/SCIENCE/KNOWLEDGE/cellular-energy/", "Cellular Energy"),
        ("/SCIENCE/KNOWLEDGE/Inflammation/", "Inflammation"),
        ("/SCIENCE/KNOWLEDGE/Sleep/", "Sleep Science"),
        ("/SCIENCE/KNOWLEDGE/Recovery/", "Recovery Science"),
    ],
}

def build_hub_nav(active_hub):
    """Build hub nav HTML with correct active state."""
    links = []
    for i, (url, name) in enumerate(HUB_NAV):
        is_active = name == active_hub or (name == "ATP & Energy" and active_hub == "Cellular Energy") or (name == "Aging" and active_hub == "Healthy Aging")
        cls = ' class="active"' if is_active else ""
        links.append(f'    <a href="{url}"{cls}>{name}</a>')
        if i in (0, 9):  # Add separator after "All Hubs" and before "Metabolism"
            links.append('    <span class="sep"></span>')
    return "\n".join(links)

def mk_faq_schema(title, answer_text):
    """Generate FAQPage JSON-LD schema."""
    q = title.replace('"', "'")
    a = answer_text[:800].replace('"', "'").replace('\n', ' ')
    return f'''    <script type="application/ld+json">
    {{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {{"@type": "Question", "name": "{q}",
             "acceptedAnswer": {{"@type": "Answer", "text": "{a}"}}}}
        ]
    }}
    </script>'''

def mk_article_schema(title, desc):
    """Generate Article JSON-LD schema."""
    t = title.replace('"', "'")
    d = desc[:300].replace('"', "'").replace('\n', ' ')
    return f'''    <script type="application/ld+json">
    {{
        "@context": "https://schema.org", "@type": "Article",
        "headline": "{t}",
        "description": "{d}",
        "author": {{"@type": "Organization", "name": "XIHE Technology"}},
        "publisher": {{"@type": "Organization", "name": "XIHE Technology"}},
        "datePublished": "2026-06-16"
    }}
    </script>'''

def mk_breadcrumb(hub_dir, hub_name, page_title, slug):
    """Generate BreadcrumbList JSON-LD."""
    hub_url = f"{SITE_URL}/SCIENCE/KNOWLEDGE/{hub_dir}/"
    page_url = f"{SITE_URL}/SCIENCE/KNOWLEDGE/{hub_dir}/{slug}"
    return f'''    <script type="application/ld+json">
{{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        {{"@type": "ListItem", "position": 1, "name": "Home", "item": "{SITE_URL}/"}},
        {{"@type": "ListItem", "position": 2, "name": "Science", "item": "{SITE_URL}/SCIENCE/Landing.html"}},
        {{"@type": "ListItem", "position": 3, "name": "{hub_name}", "item": "{hub_url}"}},
        {{"@type": "ListItem", "position": 4, "name": "{page_title}", "item": "{page_url}"}}
    ]
}}
    </script>'''

def parse_draft(filepath):
    """Parse a draft .md file. Returns dict with sections."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    lines = content.strip().split('\n')

    h1 = lines[0].replace('# ', '').strip()

    seo_title = ""
    deck = ""
    hero_direction = ""
    body_start = 0

    for i, line in enumerate(lines):
        if line.startswith("SEO Title:"):
            seo_title = line.replace("SEO Title:", "").strip()
        elif line.startswith("Deck:"):
            deck = line.replace("Deck:", "").strip()
        elif line.startswith("Hero Direction:"):
            hero_direction = line.replace("Hero Direction:", "").strip()
        elif line == "---":
            body_start = i + 1
            break

    if body_start == 0:
        # No --- separator, body starts after metadata
        body_start = 1
        for i, line in enumerate(lines):
            if i > 0 and line and not line.startswith("SEO") and not line.startswith("Deck") and not line.startswith("Hero"):
                body_start = i
                break

    body_lines = lines[body_start:]
    body = '\n'.join(body_lines).strip()

    return {
        'h1': h1,
        'seo_title': seo_title,
        'deck': deck,
        'hero_direction': hero_direction,
        'body': body,
    }

def md_body_to_html(body):
    """Convert simple markdown body to HTML paragraphs, h2, h3, lists."""
    lines = body.split('\n')
    result = []
    i = 0
    in_list = False

    while i < len(lines):
        line = lines[i]

        # Skip empty lines at start
        if not line.strip() and not result:
            i += 1
            continue

        # Horizontal rule
        if line.strip() == '---':
            if in_list:
                result.append('</ol>')
                in_list = False
            result.append('<hr>')
            i += 1
            continue

        # Related section
        if line.strip().startswith('Related:'):
            if in_list:
                result.append('</ol>')
                in_list = False
            result.append('<div class="related">')
            result.append('<div class="rl">Related Reading</div>')
            i += 1
            while i < len(lines) and lines[i].strip().startswith('- '):
                link_text = lines[i].strip()[2:].strip()
                result.append(f'<a href="#">{link_text}</a>')
                i += 1
            result.append('</div>')
            continue

        # Numbered list items
        if re.match(r'^\d+\.\s', line.strip()):
            if not in_list:
                result.append('<ol>')
                in_list = True
            text = re.sub(r'^\d+\.\s+', '', line.strip())
            # Handle bold
            text = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', text)
            result.append(f'<li>{text}</li>')
            i += 1
            continue
        elif in_list and not re.match(r'^\d+\.\s', line.strip()):
            result.append('</ol>')
            in_list = False

        # Headings
        if line.startswith('### '):
            text = line[4:].strip()
            result.append(f'<h3>{text}</h3>')
            i += 1
            continue
        if line.startswith('## '):
            text = line[3:].strip()
            result.append(f'<h2>{text}</h2>')
            i += 1
            continue

        # Regular paragraph
        stripped = line.strip()
        if stripped:
            # Bold
            stripped = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', stripped)
            result.append(f'<p>{stripped}</p>')
        else:
            # Single empty line between paragraphs - skip, multiple empty lines
            pass

        i += 1

    if in_list:
        result.append('</ol>')

    return '\n'.join(result)

def build_final_related(hub_dir):
    """Build Related Reading HTML for a hub."""
    hub_key = hub_dir.rstrip('/')
    links = RELATED_LINKS.get(hub_key, RELATED_LINKS.get("Fatigue", []))

    html = ['<div class="related">', '<div class="rl">Related Reading</div>']
    for url, name in links:
        html.append(f'<a href="{url}">{name}</a>')
    html.append('</div>')
    return '\n'.join(html)

def slugify(title):
    """Convert title to URL slug."""
    s = title.lower()
    s = re.sub(r'[^a-z0-9\s-]', '', s)
    s = re.sub(r'\s+', '-', s)
    return s[:60]

def build_html(draft_data, page_num, today="2026-06-16"):
    """Build complete HTML page from draft data."""
    h1 = draft_data['h1']
    seo_title = draft_data['seo_title'] or h1
    deck = draft_data['deck']
    body = draft_data['body']

    hub_dir, hub_nav_name, breadcrumb_name = HUB_MAP[page_num]
    hero_file = HERO_MAP.get(page_num)

    slug = slugify(seo_title)
    filepath = os.path.join(KNOWLEDGE, hub_dir, f"{slug}.html")

    # Build description
    desc = deck[:160] if deck else body[:160].replace('\n', ' ').strip()

    # Build hero CSS
    if hero_file and os.path.exists(os.path.join(HERO_DST, hero_file)):
        hero_bg = f'background: linear-gradient(180deg, rgba(26,51,72,0.85) 0%, rgba(26,51,72,0.75) 100%), url(\'/PICTURE/{hero_file}\') center/cover no-repeat;'
    else:
        hero_bg = 'background: linear-gradient(180deg, #1A3348 0%, #233F5A 100%);'

    # Build title tag
    title_tag = f"{seo_title} | XIHE Knowledge"

    # Canonical URL
    canonical = f"{SITE_URL}/SCIENCE/KNOWLEDGE/{hub_dir}/{slug}"

    # Build related reading
    related_html = build_final_related(hub_dir)

    # Build body HTML
    body_html = md_body_to_html(body)

    # Build first paragraph for FAQ answer
    first_para = ""
    for line in body.split('\n'):
        stripped = line.strip()
        if stripped and not stripped.startswith('#') and not stripped.startswith('SEO') and not stripped.startswith('Deck') and not stripped.startswith('Hero'):
            first_para = stripped[:300]
            break

    hub_nav_html = build_hub_nav(hub_nav_name)
    faq = mk_faq_schema(seo_title, first_para)
    article = mk_article_schema(seo_title, desc)
    breadcrumb = mk_breadcrumb(hub_dir, breadcrumb_name, seo_title, slug)

    full_html = f'''<!DOCTYPE html>
<html lang="en" translate="no">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="google" content="notranslate">
    <title>{title_tag}</title>
    <link rel="icon" type="image/svg+xml" href="/PICTURE/XIHE_ICON.svg">
    <meta name="description" content="{desc}">
    <link rel="canonical" href="{canonical}">
    <meta property="og:title" content="{seo_title} | XIHE Knowledge">
    <meta property="og:description" content="{desc}">
    <meta property="og:image" content="{SITE_URL}/PICTURE/xihe-og.jpg">
    <meta property="og:type" content="article">
    <meta name="original-source" content="{SITE_URL}">
    <meta name="copyright" content="XIHE Technology. Unauthorized reproduction prohibited.">

{faq}

{article}

    <link rel="stylesheet" href="../../../fonts/fonts.css">
    <style>
        :root {{ --bg: #FAF8F5; --t: #1A1D24; --s: #475569; --m: #94A3B8; --g: #C5A059; --b: #E5E5E7; --n: #1A3348; }}
        * {{ margin: 0; padding: 0; box-sizing: border-box; }}
        body {{ font-family: 'Inter', sans-serif; background: #FFF; color: var(--t); line-height: 1.75; -webkit-font-smoothing: antialiased; }}

        nav {{ position: fixed; top: 0; left: 0; right: 0; height: 70px; background: var(--n); display: flex; align-items: center; justify-content: space-between; padding: 0 10%; z-index: 1000; }}
        .nl {{ display: flex; gap: 30px; align-items: center; }}
        .nl a {{ font-size: 11px; color: #E0E6ED; text-decoration: none; letter-spacing: 1px; text-transform: uppercase; position: relative; padding-bottom: 4px; white-space: nowrap; }}
        .nl a::after {{ content: ''; position: absolute; bottom: 0; left: 0; width: 100%; height: 1px; background: var(--g); transform: scaleX(0); transform-origin: right center; transition: transform .3s; }}
        .nl a:hover::after, .nl a.active::after {{ transform: scaleX(1); transform-origin: left center; }}
        .nl a:hover, .nl a.active {{ color: var(--g); }}
        .np {{ font-family: 'Urbanist', sans-serif; font-size: 11px; letter-spacing: 1px; color: var(--g); text-decoration: none; padding: 6px 14px; border: 1px solid rgba(197,160,89,.3); border-radius: 50px; transition: all .3s; white-space: nowrap; font-weight: 500; }}
        .np:hover {{ background: var(--g); color: var(--n); }}

        .hub-nav {{ position: fixed; top: 70px; left: 0; right: 0; height: 44px; background: var(--bg); border-bottom: 1px solid var(--b); display: flex; align-items: center; justify-content: center; gap: 0; padding: 0 10%; z-index: 999; overflow-x: auto; }}
        .hub-nav a {{ font-family: 'Urbanist', sans-serif; font-size: 11px; color: var(--s); text-decoration: none; padding: 8px 16px; white-space: nowrap; letter-spacing: 0.8px; transition: all .15s; position: relative; }}
        .hub-nav a:hover {{ color: var(--t); }}
        .hub-nav a.active {{ color: var(--n); font-weight: 600; }}
        .hub-nav a.active::after {{ content: ''; position: absolute; bottom: -1px; left: 50%; transform: translateX(-50%); width: 24px; height: 2px; background: var(--g); }}
        .hub-nav .sep {{ width: 1px; height: 16px; background: var(--b); flex-shrink: 0; margin: 0 4px; }}

        .article-hero {{ {hero_bg} padding: 172px 24px 56px; text-align: center; position: relative; }}
        .article-hero .hub-tag {{ display: inline-block; font-family: 'Urbanist', sans-serif; font-size: 10px; letter-spacing: 3px; color: var(--g); text-transform: uppercase; padding: 4px 14px; border: 1px solid rgba(197,160,89,0.3); margin-bottom: 20px; position: relative; }}
        .article-hero h1 {{ font-family: 'Urbanist', sans-serif; font-size: 40px; font-weight: 200; color: #FFF; letter-spacing: 1.5px; line-height: 1.2; max-width: 680px; margin: 0 auto 12px; position: relative; }}
        .article-hero .subtitle {{ font-size: 16px; color: rgba(255,255,255,0.5); font-weight: 300; letter-spacing: 0.3px; max-width: 520px; margin: 0 auto; position: relative; line-height: 1.6; }}

        article {{ max-width: 680px; margin: 0 auto; padding: 60px 24px 80px; }}
        .qa {{ margin-bottom: 48px; }}
        .qa p {{ font-size: 17px; color: var(--s); line-height: 1.85; padding-left: 20px; border-left: 2px solid var(--g); }}
        h2 {{ font-family: 'Urbanist', sans-serif; font-size: 26px; font-weight: 300; letter-spacing: 0.3px; margin: 56px 0 20px; color: var(--n); }}
        h3 {{ font-family: 'Urbanist', sans-serif; font-size: 17px; font-weight: 500; color: var(--t); margin: 32px 0 6px; letter-spacing: 0.3px; }}
        p {{ font-size: 16px; color: var(--s); margin-bottom: 16px; }}
        ul, ol {{ font-size: 15px; color: var(--s); margin-bottom: 20px; padding-left: 20px; }}
        li {{ margin-bottom: 6px; line-height: 1.8; }}
        strong {{ color: var(--t); font-weight: 600; }}
        hr {{ border: none; border-top: 1px solid var(--b); margin: 48px 0; }}
        .pull {{ margin: 40px 0; padding-left: 20px; border-left: 2px solid var(--g); }}
        .pull p {{ font-family: 'Playfair Display', serif; font-size: 18px; color: var(--t); font-style: italic; line-height: 1.6; margin-bottom: 8px; }}
        .pull .attr {{ font-size: 12px; color: var(--m); font-style: normal; letter-spacing: 0.5px; }}
        .related {{ margin: 48px 0; }}
        .related .rl {{ font-family: 'Urbanist', sans-serif; font-size: 11px; letter-spacing: 3px; color: var(--m); text-transform: uppercase; margin-bottom: 14px; }}
        .related a {{ display: block; font-size: 15px; color: var(--s); text-decoration: none; padding: 6px 0; transition: color .2s; border-bottom: 1px solid #F5F5F5; }}
        .related a:hover {{ color: var(--g); }}
        .related a::after {{ content: ' \\2192'; color: var(--g); opacity: 0; transition: opacity .2s; }}
        .related a:hover::after {{ opacity: 1; }}
        .compliance {{ font-size: 11px; color: var(--m); margin-top: 8px; text-align: center; }}
        footer {{ padding: 40px 10%; background: var(--n); text-align: center; border-top: 2px solid var(--g); }} footer p {{ font-size: 13px; color: #E0E6ED; margin-bottom: 0; }}
        @media (max-width: 600px) {{ nav {{ padding: 0 5%; }} .nl {{ gap: 12px; overflow-x: auto; }} .nl a {{ font-size: 9px; }} .hub-nav {{ justify-content: flex-start; padding: 0 5%; gap: 2px; }} .hub-nav a {{ font-size: 9px; padding: 6px 8px; }} .hub-nav .sep {{ display: none; }} .article-hero {{ padding-top: 152px; }} .article-hero h1 {{ font-size: 26px; }} }}
    </style>
{breadcrumb}
</head>
<body>
<nav>
    <a href="/"><img src="/PICTURE/XIHE_LOGO_DARK.svg" alt="XIHE" style="height:44px;width:auto"></a>
    <div class="nl">
        <a href="/">Home</a><a href="/ABOUT/AboutOrigin.html">About</a><a href="/SCIENCE/Landing.html">Science</a><a href="/applications.html">Applications</a><a href="/PRODUCTS/ProductPage.html">Products</a><a href="/partnership.html">Partnership</a><a href="/NEWS/index.html">News</a><a href="/CONTACT/index.html">Contact</a>
        <a href="tel:0086-18688683865" class="np">+86 186 8868 3865</a>
    </div>
</nav>

<div class="hub-nav">
{hub_nav_html}
</div>

<header class="article-hero">
    <h1>{h1}</h1>
    <p class="subtitle">{deck}</p>
</header>

<article>
{body_html}

    <hr>

{related_html}

    <p style="text-align:center;font-family:'Urbanist',sans-serif;font-size:18px;font-weight:300;color:var(--n);letter-spacing:0.5px;margin:40px 0 12px;">Human performance starts at the cellular level.</p>

    <p class="compliance">Published on xgraphene.tech. This article draws from publicly available research and is intended for educational purposes. It is not medical advice. Consult a qualified healthcare professional for personal health concerns.</p>
</article>

<footer>
    <p>XIHE Technology &mdash; Jiageng Innovation Laboratory (IKKEM) | Lead Drafter, China Graphene Electrothermal Film Industry Standard 2024-0923T-YB</p>
    <p style="font-size: 11px; color: rgba(255,255,255,0.4); margin-top: 8px;">&copy; 2026 XIHE Technology. All content original to xgraphene.tech.</p>
</footer>
</body>
</html>'''

    return filepath, full_html


# ── Main execution ──
deployed = []
for page_num in range(1, 21):
    # Find the draft file
    prefix = f"{page_num:02d}"
    draft_files = [f for f in os.listdir(DRAFTS) if f.startswith(prefix) and f.endswith('.md')]
    if not draft_files:
        print(f"  SKIP page {page_num}: no draft file found")
        continue

    draft_path = os.path.join(DRAFTS, draft_files[0])
    print(f"  Processing: {draft_files[0]}")

    try:
        draft_data = parse_draft(draft_path)
        filepath, html = build_html(draft_data, page_num)

        # Ensure hub directory exists
        os.makedirs(os.path.dirname(filepath), exist_ok=True)

        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(html)

        # Get relative path
        rel_path = os.path.relpath(filepath, BASE)
        deployed.append(rel_path)
        print(f"    -> {rel_path}")
    except Exception as e:
        print(f"    ERROR: {e}")

print(f"\nDeployed {len(deployed)} pages:")
for d in deployed:
    print(f"  {d}")

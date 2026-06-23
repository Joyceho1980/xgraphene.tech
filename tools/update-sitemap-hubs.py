"""Update sitemap.xml and hub index pages with 20 new KNOWLEDGE articles."""
import os, re

BASE = r"D:\CODEX\LAUCH VERSION"
SITEMAP = os.path.join(BASE, "sitemap.xml")
KNOWLEDGE = os.path.join(BASE, "SCIENCE", "KNOWLEDGE")

NEW_PAGES = [
    ("Fatigue", "why-am-i-always-tired.html", "Why Am I Always Tired? | Cellular Energy"),
    ("cellular-energy", "what-causes-low-cellular-energy.html", "What Causes Low Cellular Energy?"),
    ("Mitochondria", "what-is-mitochondrial-dysfunction.html", "What Is Mitochondrial Dysfunction?"),
    ("healthy-aging", "why-does-aging-drain-your-energy.html", "Why Does Aging Drain Your Energy?"),
    ("cellular-energy", "what-is-atp-and-why-does-it-matter.html", "What Is ATP and Why Does It Matter?"),
    ("Sleep", "why-do-i-wake-up-tired.html", "Why Do I Wake Up Tired?"),
    ("Sleep", "how-does-sleep-affect-cellular-recovery.html", "How Does Sleep Affect Cellular Recovery?"),
    ("Sleep", "what-causes-poor-sleep-quality.html", "What Causes Poor Sleep Quality?"),
    ("Inflammation", "what-is-chronic-inflammation.html", "What Is Chronic Inflammation?"),
    ("Inflammation", "how-does-inflammation-affect-energy.html", "How Does Inflammation Affect Energy?"),
    ("Inflammation", "hidden-signs-your-body-is-inflamed.html", "Hidden Signs Your Body Is Inflamed"),
    ("Microcirculation", "what-is-microcirculation.html", "What Is Microcirculation?"),
    ("Microcirculation", "why-are-my-hands-and-feet-always-cold.html", "Why Are My Hands and Feet Always Cold?"),
    ("Microcirculation", "how-does-circulation-affect-recovery.html", "How Does Circulation Affect Recovery?"),
    ("Recovery", "why-does-recovery-slow-down-with-age.html", "Why Does Recovery Slow Down With Age?"),
    ("Recovery", "how-can-i-recover-faster-after-exercise.html", "How Can I Recover Faster After Exercise?"),
    ("Recovery", "what-helps-muscle-recovery-naturally.html", "What Helps Muscle Recovery Naturally?"),
    ("healthy-aging", "why-do-we-age.html", "Why Do We Age?"),
    ("cellular-energy", "what-is-cellular-resilience.html", "What Is Cellular Resilience?"),
    ("healthy-aging", "how-can-we-support-healthy-aging.html", "How Can We Support Healthy Aging?"),
]

# ============================================================
# 1. Update sitemap.xml
# ============================================================
with open(SITEMAP, 'r', encoding='utf-8') as f:
    sitemap = f.read()

new_entries = []
for hub, slug, title in NEW_PAGES:
    url = f"https://www.xgraphene.tech/SCIENCE/KNOWLEDGE/{hub}/{slug}"
    entry = f"""  <url>
    <loc>{url}</loc>
    <lastmod>2026-06-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>"""
    new_entries.append(entry)

# Insert before </urlset>
insert_pos = sitemap.rfind('</urlset>')
sitemap = sitemap[:insert_pos] + '\n'.join(new_entries) + '\n' + sitemap[insert_pos:]

with open(SITEMAP, 'w', encoding='utf-8') as f:
    f.write(sitemap)
print(f"Sitemap updated with {len(new_entries)} new URLs")

# ============================================================
# 2. Update hub index pages
# ============================================================

def build_card(hub_dir, slug, title, desc, icon_svg):
    """Build a card HTML block for a new article."""
    url = f"/SCIENCE/KNOWLEDGE/{hub_dir}/{slug}"
    return f'''    <a href="{url}" class="card">
        <div class="card-icon">{icon_svg}</div>
        <div class="card-body">
            <h3>{title} <span class="tag live">NEW</span></h3>
            <p>{desc}</p>
        </div>
        <span class="card-arrow">&rarr;</span>
    </a>'''

# Card descriptions (short, 1 line)
DESC_MAP = {
    "why-am-i-always-tired.html": "Why eight hours of sleep doesn't guarantee waking up restored.",
    "what-causes-low-cellular-energy.html": "When cells can't produce ATP efficiently — the real reasons behind fatigue.",
    "what-is-mitochondrial-dysfunction.html": "How mitochondrial decline affects energy, recovery, and daily function.",
    "why-does-aging-drain-your-energy.html": "Why energy output drops with age and what can slow the decline.",
    "what-is-atp-and-why-does-it-matter.html": "The cellular currency behind every thought, movement, and repair process.",
    "why-do-i-wake-up-tired.html": "When sleep duration is fine but overnight repair didn't finish.",
    "how-does-sleep-affect-cellular-recovery.html": "What the body is actually doing during deep sleep and REM.",
    "what-causes-poor-sleep-quality.html": "Three biological switches that control whether sleep restores or not.",
    "what-is-chronic-inflammation.html": "The kind of inflammation you don't feel — and how it drains energy.",
    "how-does-inflammation-affect-energy.html": "Why inflammatory signaling and mitochondrial function are closely linked.",
    "hidden-signs-your-body-is-inflamed.html": "Subtle signals that your body may be carrying a higher inflammatory load.",
    "what-is-microcirculation.html": "The delivery network that determines whether recovery actually reaches your cells.",
    "why-are-my-hands-and-feet-always-cold.html": "What cold extremities say about peripheral circulation and vascular tone.",
    "how-does-circulation-affect-recovery.html": "Why tissue repair depends on delivery as much as it depends on rest.",
    "why-does-recovery-slow-down-with-age.html": "Multiple systems decelerating at once — and how to slow the decline.",
    "how-can-i-recover-faster-after-exercise.html": "Five physiological levers that control how quickly you bounce back.",
    "what-helps-muscle-recovery-naturally.html": "Protein isn't enough. ATP, circulation, inflammation timing, and sleep all matter.",
    "why-do-we-age.html": "Aging isn't one process. It's many systems shifting together.",
    "what-is-cellular-resilience.html": "Why some people bounce back from stress faster than others.",
    "how-can-we-support-healthy-aging.html": "Five daily levers that support energy, repair, and stability over time.",
}

# Simple book/article icon SVG
ICON = '<svg viewBox="0 0 24 24"><path d="M4 6h16v12H4z"/><path d="M8 2v4"/><path d="M16 2v4"/><line x1="8" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="13" y2="14"/></svg>'

# Group new pages by hub
hub_groups = {}
for hub, slug, title in NEW_PAGES:
    hub_groups.setdefault(hub, []).append((slug, title))

for hub, pages in hub_groups.items():
    index_path = os.path.join(KNOWLEDGE, hub, "index.html")
    if not os.path.exists(index_path):
        print(f"  SKIP {hub}: no index.html")
        continue

    with open(index_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Build cards
    cards = []
    for slug, title in pages:
        desc = DESC_MAP.get(slug, "")
        cards.append(build_card(hub, slug, title, desc, ICON))

    cards_html = '\n'.join(cards)

    # Find the card-list section and insert before </div> that closes it
    # Look for last card in existing list or the closing </section> before "About"
    # Strategy: insert new cards after the last existing card </a> before the comment/About section

    # Find position: look for <!-- Articles end --> or the About section
    about_pos = content.find('<!-- About')
    if about_pos == -1:
        about_pos = content.find('<section class="about"')

    if about_pos == -1:
        # No About section - insert before footer
        insert_marker = '<footer>'
    else:
        insert_marker = content[about_pos:about_pos+30]

    # Insert cards before the marker
    pos = content.find(insert_marker)
    if pos == -1:
        print(f"  WARN {hub}: can't find insertion point")
        continue

    # Check if there's already a card-list section
    card_list_pos = content.rfind('</div>', 0, pos)
    if card_list_pos > 0:
        # Insert before the closing of the card-list
        content = content[:card_list_pos] + '\n' + cards_html + '\n' + content[card_list_pos:]
    else:
        # Wrap in a new card-list section
        section = f'\n<div class="card-list">\n{cards_html}\n</div>\n'
        content = content[:pos] + section + content[pos:]

    with open(index_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"  Updated {hub}/index.html with {len(pages)} cards")

print(f"\nDone: sitemap + {len(hub_groups)} hub indexes updated")

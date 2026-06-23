"""Fix hub index cards to match the existing card format in each hub."""
import os, re

BASE = r"D:\CODEX\LAUCH VERSION\SCIENCE\KNOWLEDGE"
SITE = "https://www.xgraphene.tech"

# Card data: (hub, slug, title, description, links_text, icon_type, category_pill)
CARDS = {
    "Fatigue": [
        ("why-am-i-always-tired.html", "Why Are You Still Tired After Sleeping 8 Hours?",
         "Sleep quantity and sleep quality are different. Cellular energy explains why you can sleep enough and still feel exhausted.",
         "Links to: <b>H4 (Fatigue)</b>, <b>H3 (Sleep)</b>, <b>H2 (Mitochondria)</b>", "clock"),
    ],
    "cellular-energy": [
        ("what-causes-low-cellular-energy.html", "What Causes Low Cellular Energy?",
         "When cells struggle to produce ATP efficiently — inflammation, oxidative stress, poor microcirculation, and circadian disruption.",
         "Links to: <b>H2 (Mitochondria)</b>, <b>H3 (ATP)</b>, <b>H5 (Inflammation)</b>", "zap"),
        ("what-is-atp-and-why-does-it-matter.html", "What Is ATP and Why Does It Matter?",
         "The cellular currency behind every thought, movement, and repair. Why production matters more than fuel.",
         "Links to: <b>H2 (Mitochondria)</b>, <b>H4 (Fatigue)</b>, <b>H7 (Recovery)</b>", "zap"),
        ("what-is-cellular-resilience.html", "What Is Cellular Resilience?",
         "Why some people bounce back from stress faster — mitochondrial reserve, antioxidant response, and protein quality control.",
         "Links to: <b>H2 (Mitochondria)</b>, <b>H9 (Aging)</b>, <b>H7 (Recovery)</b>", "shield"),
    ],
    "Mitochondria": [
        ("what-is-mitochondrial-dysfunction.html", "What Is Mitochondrial Dysfunction?",
         "How declining mitochondrial efficiency affects energy, recovery, brain fog, and daily function across multiple systems.",
         "Links to: <b>H2 (Mitochondria)</b>, <b>H3 (ATP)</b>, <b>H5 (Inflammation)</b>", "alert"),
    ],
    "Microcirculation": [
        ("what-is-microcirculation.html", "What Is Microcirculation?",
         "The delivery network that determines whether oxygen, nutrients, and recovery signals reach your cells.",
         "Links to: <b>H6 (Microcirculation)</b>, <b>H5 (Inflammation)</b>, <b>H7 (Recovery)</b>", "flow"),
        ("why-are-my-hands-and-feet-always-cold.html", "Why Are My Hands and Feet Always Cold?",
         "What cold extremities reveal about peripheral circulation, endothelial function, and vascular responsiveness.",
         "Links to: <b>H6 (Microcirculation)</b>, <b>H3 (Sleep)</b>, <b>H5 (Inflammation)</b>", "flow"),
        ("how-does-circulation-affect-recovery.html", "How Does Circulation Affect Recovery?",
         "Why tissue repair depends on oxygen delivery and waste clearance as much as it depends on rest.",
         "Links to: <b>H6 (Microcirculation)</b>, <b>H7 (Recovery)</b>, <b>H3 (ATP)</b>", "flow"),
    ],
    "Sleep": [
        ("why-do-i-wake-up-tired.html", "Why Do I Wake Up Tired?",
         "When sleep duration is fine but overnight repair didn't complete — deep sleep, mitochondrial recovery, and ATP restoration.",
         "Links to: <b>H3 (Sleep)</b>, <b>H2 (Mitochondria)</b>, <b>H4 (Fatigue)</b>", "moon"),
        ("how-does-sleep-affect-cellular-recovery.html", "How Does Sleep Affect Cellular Recovery?",
         "Deep sleep isn't passive rest — it's when growth hormone pulses, mitochondria repair, and immune cells renew.",
         "Links to: <b>H3 (Sleep)</b>, <b>H2 (Mitochondria)</b>, <b>H6 (Microcirculation)</b>", "moon"),
        ("what-causes-poor-sleep-quality.html", "What Causes Poor Sleep Quality?",
         "Three biological switches — core temperature, adenosine, cortisol-melatonin rhythm — that control sleep quality.",
         "Links to: <b>H3 (Sleep)</b>, <b>H6 (Microcirculation)</b>, <b>H5 (Inflammation)</b>", "moon"),
    ],
    "Inflammation": [
        ("what-is-chronic-inflammation.html", "What Is Chronic Inflammation?",
         "The kind of inflammation you don't feel — how low-grade inflammatory signaling drains energy and slows recovery.",
         "Links to: <b>H5 (Inflammation)</b>, <b>H2 (Mitochondria)</b>, <b>H7 (Recovery)</b>", "flame"),
        ("how-does-inflammation-affect-energy.html", "How Does Inflammation Affect Energy?",
         "The closed loop between inflammatory cytokines, mitochondrial dysfunction, and oxidative stress.",
         "Links to: <b>H5 (Inflammation)</b>, <b>H2 (Mitochondria)</b>, <b>H3 (ATP)</b>", "flame"),
        ("hidden-signs-your-body-is-inflamed.html", "Hidden Signs Your Body Is Inflamed",
         "Five subtle signals — afternoon crashes, slow recovery, lingering colds, tired-but-wired, dull skin — that suggest higher inflammatory load.",
         "Links to: <b>H5 (Inflammation)</b>, <b>H4 (Fatigue)</b>, <b>H7 (Recovery)</b>", "flame"),
    ],
    "Recovery": [
        ("why-does-recovery-slow-down-with-age.html", "Why Does Recovery Slow Down With Age?",
         "Multiple systems decelerating at once — protein synthesis, mitochondrial output, microcirculation, and inflammatory resolution.",
         "Links to: <b>H7 (Recovery)</b>, <b>H9 (Aging)</b>, <b>H2 (Mitochondria)</b>", "trending-up"),
        ("how-can-i-recover-faster-after-exercise.html", "How Can I Recover Faster After Exercise?",
         "Five physiological levers — microcirculation, protein timing, deep sleep, anti-inflammatory movement, hydration.",
         "Links to: <b>H7 (Recovery)</b>, <b>H6 (Microcirculation)</b>, <b>H3 (Sleep)</b>", "trending-up"),
        ("what-helps-muscle-recovery-naturally.html", "What Helps Muscle Recovery Naturally?",
         "Protein isn't enough. ATP, circulation, inflammation timing, and deep sleep all have to work together.",
         "Links to: <b>H7 (Recovery)</b>, <b>H3 (ATP)</b>, <b>H2 (Mitochondria)</b>", "trending-up"),
    ],
    "healthy-aging": [
        ("why-does-aging-drain-your-energy.html", "Why Does Aging Drain Your Energy?",
         "Mitochondrial DNA damage, declining NAD+, reduced biogenesis — and why none of this is irreversible.",
         "Links to: <b>H9 (Aging)</b>, <b>H2 (Mitochondria)</b>, <b>H7 (Recovery)</b>", "sunrise"),
        ("why-do-we-age.html", "Why Do We Age?",
         "The Hallmarks of Aging — nine interconnected cellular processes that shift together over time.",
         "Links to: <b>H9 (Aging)</b>, <b>H2 (Mitochondria)</b>, <b>H8 (Bioenergetics)</b>", "sunrise"),
        ("how-can-we-support-healthy-aging.html", "How Can We Support Healthy Aging?",
         "Five daily levers — exercise, deep sleep, microcirculation, inflammatory control, nutrient timing.",
         "Links to: <b>H9 (Aging)</b>, <b>H6 (Microcirculation)</b>, <b>H7 (Recovery)</b>", "sunrise"),
    ],
}

# SVG icons by type
ICONS = {
    "clock": '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
    "zap": '<svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10"/></svg>',
    "shield": '<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    "alert": '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>',
    "flow": '<svg viewBox="0 0 24 24"><path d="M4 16c4-8 12-8 16 0"/><path d="M6 12c3-5 9-5 12 0"/></svg>',
    "moon": '<svg viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
    "flame": '<svg viewBox="0 0 24 24"><path d="M12 2c-4 6-6 10-6 14a6 6 0 0 0 12 0c0-4-2-8-6-14z"/></svg>',
    "trending-up": '<svg viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
    "sunrise": '<svg viewBox="0 0 24 24"><path d="M17 18a5 5 0 0 0-10 0"/><line x1="12" y1="9" x2="12" y2="2"/></svg>',
}

def build_card(hub, slug, title, desc, links, icon_type, tag_text="NEW"):
    icon = ICONS.get(icon_type, ICONS["clock"])
    url = f"/SCIENCE/KNOWLEDGE/{hub}/{slug}"
    return f"""<a href="{url}" class="card">
            <div class="card-arrow">&rarr;</div>
            <div class="card-icon">
                {icon}
            </div>
            <div class="card-body">
                <h3>{title}<span class="tag live">{tag_text}</span></h3>
                <p>{desc}</p>
                <div class="card-links">{links}</div>
            </div>
            <img class="card-img" src="https://picsum.photos/seed/{slug[:20]}/520/320" alt="" loading="lazy">
        </a>"""

# Process each hub
for hub, cards_data in CARDS.items():
    index_path = os.path.join(BASE, hub, "index.html")
    if not os.path.exists(index_path):
        print(f"  SKIP {hub}: no index.html")
        continue

    with open(index_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the card-list section
    card_list_start = content.find('<div class="card-list">')
    if card_list_start == -1:
        print(f"  SKIP {hub}: no card-list found")
        continue

    # Find the closing of card-list (look for next </div> after all cards, before next section)
    # Find position right after the opening tag
    after_open = card_list_start + len('<div class="card-list">')

    # Find the next major section that follows card-list
    # Typically it's <section class="references"> or <section class="about"> or <div class="next-up">
    end_markers = ['<section class="references"', '<section class="about"', '<div class="next-up"', '<footer>']
    end_pos = len(content)
    for marker in end_markers:
        pos = content.find(marker, after_open)
        if pos != -1 and pos < end_pos:
            end_pos = pos

    # Now find the last </a> before end_pos (end of last existing card)
    # Then find the closing </div> after that
    search_region = content[after_open:end_pos]
    last_card_end = search_region.rfind('</a>')
    if last_card_end == -1:
        print(f"  SKIP {hub}: can't find end of card list")
        continue

    # Find </div> after the last card
    remaining = search_region[last_card_end:]
    closing_div = remaining.find('</div>')
    if closing_div == -1:
        print(f"  SKIP {hub}: can't find closing div")
        continue

    card_list_end = after_open + last_card_end + closing_div + len('</div>')

    # Extract: prefix (before card-list opening + opening tag), suffix (after card-list closing)
    prefix = content[:after_open]
    suffix = content[card_list_end:]

    # Build new cards - combine existing cards (if any) with new ones
    # Find existing cards between card_list_start and card_list_end
    existing = content[after_open:card_list_end - len('</div>')]

    # Check if existing cards already include our new ones (by slug match)
    # Remove any broken/corrupted cards that were inserted by the previous script
    # Strategy: keep only cards that match the proper format (have card-arrow class)
    # Extract individual cards
    cards_html_list = []
    # Find all <a class="card" blocks
    pattern = r'<a[^>]*class="card"[^>]*>.*?</a>'
    matches = list(re.finditer(pattern, existing, re.DOTALL))
    for m in matches:
        card_html = m.group(0)
        # Check if this is a proper card (has card-arrow) or broken
        if 'card-arrow' in card_html:
            cards_html_list.append(card_html)

    # Now add new cards for this hub (skip if slug already present)
    existing_slugs = set()
    for c in cards_html_list:
        m2 = re.search(r'href="[^"]*?/([^/"]+\.html)"', c)
        if m2:
            existing_slugs.add(m2.group(1))

    for slug, title, desc, links, icon_type in cards_data:
        if slug in existing_slugs:
            continue
        cards_html_list.append(build_card(hub, slug, title, desc, links, icon_type))

    new_body = '\n'.join(cards_html_list)
    new_card_list = f'<div class="card-list">\n{new_body}\n            </div>'

    new_content = prefix + new_card_list + suffix

    with open(index_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

    print(f"  Fixed {hub}: {len(cards_html_list)} cards total")

print("\nDone fixing all hub index cards")

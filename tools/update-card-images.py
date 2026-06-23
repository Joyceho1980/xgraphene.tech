"""Replace placeholder card images with actual hero images."""
import os, re

BASE = r"D:\CODEX\LAUCH VERSION\SCIENCE\KNOWLEDGE"

# Slug -> hero image mapping (from HERO-ASSET-MAP)
HERO_MAP = {
    "why-am-i-always-tired.html": "/PICTURE/hero-fatigue-energy.png",
    "what-causes-low-cellular-energy.html": "/PICTURE/hero-mitochondria-energy.jpg",
    "what-is-mitochondrial-dysfunction.html": "/PICTURE/hero-fatigue-energy.png",
    "why-does-aging-drain-your-energy.html": "/PICTURE/hero-aging-recovery.png",
    "what-is-atp-and-why-does-it-matter.html": "/PICTURE/hero-mitochondria-energy.jpg",
    "why-do-i-wake-up-tired.html": "/PICTURE/hero-sleep-recovery.jpg",
    "how-does-sleep-affect-cellular-recovery.html": "/PICTURE/hero-sleep-recovery.jpg",
    "what-causes-poor-sleep-quality.html": "/PICTURE/hero-sleep-recovery.jpg",
    "what-is-chronic-inflammation.html": "/PICTURE/hero-fatigue-energy.png",
    "how-does-inflammation-affect-energy.html": "/PICTURE/hero-fatigue-energy.png",
    "hidden-signs-your-body-is-inflamed.html": "/PICTURE/hero-fatigue-energy.png",
    "what-is-microcirculation.html": "/PICTURE/hero-microcirculation-flow.jpg",
    "why-are-my-hands-and-feet-always-cold.html": "/PICTURE/hero-microcirculation-flow.jpg",
    "how-does-circulation-affect-recovery.html": "/PICTURE/hero-microcirculation-flow.jpg",
    "why-does-recovery-slow-down-with-age.html": "/PICTURE/hero-aging-recovery.png",
    "how-can-i-recover-faster-after-exercise.html": "/PICTURE/hero-aging-recovery.png",
    "what-helps-muscle-recovery-naturally.html": "/PICTURE/hero-aging-recovery.png",
    "why-do-we-age.html": "/PICTURE/hero-aging-recovery.png",
    "what-is-cellular-resilience.html": "/PICTURE/hero-mitochondria-energy.jpg",
    "how-can-we-support-healthy-aging.html": "/PICTURE/hero-aging-recovery.png",
}

for hub in os.listdir(BASE):
    hub_path = os.path.join(BASE, hub)
    index_path = os.path.join(hub_path, "index.html")
    if not os.path.exists(index_path):
        continue

    with open(index_path, 'r', encoding='utf-8') as f:
        content = f.read()

    updated = False
    for slug, hero in HERO_MAP.items():
        # Find cards linking to this slug
        pattern = rf'(<a href="[^"]*{re.escape(slug)}"[^>]*class="card".*?<img class="card-img" src=")[^"]*(")'
        replacement = rf'\1{hero}\2'
        new_content = re.sub(pattern, replacement, content, count=1, flags=re.DOTALL)
        if new_content != content:
            content = new_content
            updated = True

    if updated:
        with open(index_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"  Updated {hub}")

print("Done - card images replaced with hero assets")

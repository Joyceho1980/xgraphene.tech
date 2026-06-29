#!/usr/bin/env python3
"""Generate complete sitemap.xml from WEBSITE/pages/ directory."""
import os
from datetime import date

BASE = r"D:\CODEX\LAUCH VERSION\WEBSITE\pages"
DOMAIN = "https://www.xgraphene.tech"
TODAY = "2026-06-26"

# Priority rules
HIGH_PRIORITY = ["SCIENCE/KNOWLEDGE/", "SCIENCE/Landing.html", "SCIENCE/Evidence.html",
                 "SCIENCE/Mechanism.html", "SCIENCE/Technology.html",
                 "SCIENCE/KNOWLEDGE/Clinical-Evidence/", "SCIENCE/KNOWLEDGE/Technology-Platform/"]
WEEKLY = ["/index.html", "cellular-energy/index.html", "SCIENCE/Landing.html"]

CLEAN_URLS = {
    "applications.html": "applications",
    "partnership.html": "partnership",
}

def get_url_info(rel_path):
    """Return (url, changefreq, priority)"""
    url_path = rel_path.replace("\\", "/")

    # Check clean URL exceptions
    if url_path in CLEAN_URLS:
        return (DOMAIN + "/" + CLEAN_URLS[url_path], "monthly", "0.7")

    # Determine priority and changefreq
    if url_path.endswith("/index.html"):
        url = DOMAIN + "/" + url_path[:-len("index.html")]
    else:
        url = DOMAIN + "/" + url_path

    # Hub indexes and key pages get weekly + higher priority
    is_hub = url_path.endswith("/index.html")
    is_high = any(url_path.startswith(h) for h in HIGH_PRIORITY)

    if url_path == "index.html":
        return (DOMAIN + "/", "weekly", "1.0")
    elif is_high:
        return (url, "weekly", "0.9")
    elif is_hub:
        return (url, "weekly", "0.8")
    else:
        return (url, "monthly", "0.7")

def main():
    pages = []
    for root, dirs, files in os.walk(BASE):
        for f in files:
            if f.endswith(".html"):
                full = os.path.join(root, f)
                # Skip pages with noindex
                with open(full, "r", encoding="utf-8", errors="ignore") as fh:
                    head = fh.read(1024)
                if 'noindex' in head.lower():
                    continue
                rel = os.path.relpath(full, BASE)
                pages.append(rel)

    pages.sort()

    lines = []
    lines.append('<?xml version="1.0" encoding="UTF-8"?>')
    lines.append('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')

    # Homepage ALWAYS first
    lines.append('  <url>')
    lines.append(f'    <loc>{DOMAIN}/</loc>')
    lines.append(f'    <lastmod>{TODAY}</lastmod>')
    lines.append('    <changefreq>daily</changefreq>')
    lines.append('    <priority>1.0</priority>')
    lines.append('  </url>')

    for p in pages:
        url, freq, priority = get_url_info(p)
        lines.append('  <url>')
        lines.append(f'    <loc>{url}</loc>')
        lines.append(f'    <lastmod>{TODAY}</lastmod>')
        lines.append(f'    <changefreq>{freq}</changefreq>')
        lines.append(f'    <priority>{priority}</priority>')
        lines.append('  </url>')

    lines.append('</urlset>')

    output = "\n".join(lines) + "\n"

    # Write to config/ and WEBSITE/
    for dest in [
        r"D:\CODEX\LAUCH VERSION\config\sitemap.xml",
        r"D:\CODEX\LAUCH VERSION\WEBSITE\sitemap.xml"
    ]:
        os.makedirs(os.path.dirname(dest), exist_ok=True)
        with open(dest, "w", encoding="utf-8") as f:
            f.write(output)
        print(f"Written: {dest} ({len(pages)} URLs)")

    # List missing from old sitemap
    print(f"\nTotal pages: {len(pages)}")

    # Check for problematic URLs
    for p in pages:
        if " " in p:
            print(f"WARNING: Space in URL path: {p}")

if __name__ == "__main__":
    main()

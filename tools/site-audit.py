#!/usr/bin/env python3
"""
XIHE Webmaster Audit Tool (WAT)
Comprehensive site scanner: broken links, SEO/GEO, sitemap, schema, external links
Usage: python site-audit.py [--check-external] [--lighthouse] [--json]
"""

import os
import re
import sys
import json
import time
from pathlib import Path
from urllib.parse import urlparse, urljoin, unquote
from concurrent.futures import ThreadPoolExecutor, as_completed
from collections import defaultdict

# ── Config ──────────────────────────────────────────────
SITE_ROOT = Path(__file__).resolve().parent.parent  # LAUCH VERSION
BASE_URL = "https://www.xgraphene.tech"
SKIP_DIRS = {"node_modules", ".git", ".vercel", "admin", "VISUAL-LIBRARY", "PICTURE", "DOCUMENTS"}
VERCEL_CONFIG = SITE_ROOT / "vercel.json"
SITEMAP_FILE = SITE_ROOT / "sitemap.xml"

# SEO requirements
REQUIRED_META = ["description", "keywords"]
REQUIRED_OG = ["og:title", "og:description", "og:image", "og:url", "og:type"]
REQUIRED_TWITTER = ["twitter:card", "twitter:title", "twitter:description"]

# ── Helpers ─────────────────────────────────────────────
def load_rewrites():
    """Parse vercel.json rewrites into a list of (source_pattern, destination)."""
    rewrites = []
    if not VERCEL_CONFIG.exists():
        return rewrites
    try:
        with open(VERCEL_CONFIG, "r", encoding="utf-8") as f:
            config = json.load(f)
        for r in config.get("rewrites", []):
            src = r["source"]
            dst = r["destination"]
            rewrites.append((src, dst))
    except Exception:
        pass
    return rewrites


def load_redirects():
    """Parse vercel.json redirects into a lookup dict."""
    redirects = {}
    if not VERCEL_CONFIG.exists():
        return redirects
    try:
        with open(VERCEL_CONFIG, "r", encoding="utf-8") as f:
            config = json.load(f)
        for r in config.get("redirects", []):
            src = r["source"]
            dst = r["destination"]
            redirects[src] = dst
    except Exception:
        pass
    return redirects


def match_vercel_rewrite(url_path, rewrites):
    """Check if a URL path matches any Vercel rewrite rule.
    Returns True if the rewrite destination exists on filesystem."""
    for src, dst in rewrites:
        pattern = src.lstrip("/")
        # Protect :path* placeholder from re.escape
        pattern = pattern.replace(":path*", "___STAR___")
        pattern = re.escape(pattern)
        pattern = pattern.replace("___STAR___", r"(.+)")
        pattern = f"^{pattern}$"

        url_clean = url_path.lstrip("/")
        m = re.match(pattern, url_clean)
        if not m:
            continue

        # Build destination path by substituting captured group
        captured = m.group(1) if m.groups() else ""
        dst_clean = dst.lstrip("/").replace(":path*", captured).rstrip("/")

        # Check if resolved path exists on filesystem
        fs_path = SITE_ROOT / dst_clean
        if fs_path.is_file():
            return True
        if fs_path.is_dir() and (fs_path / "index.html").is_file():
            return True
        if not fs_path.suffix:
            html_path = fs_path.with_suffix(".html")
            if html_path.is_file():
                return True

    return False


def check_doctype(html_path):
    """Check for DOCTYPE issues: missing, duplicate, or malformed.
    Returns list of issue strings."""
    issues = []
    try:
        with open(html_path, "r", encoding="utf-8", errors="ignore") as f:
            content = f.read()
        lines = content.split("\n")
        doctype_lines = []
        for i, line in enumerate(lines[:5]):  # Check first 5 lines only
            stripped = line.strip()
            if stripped.lower().startswith("<!doctype"):
                doctype_lines.append((i + 1, stripped))

        if not doctype_lines:
            issues.append("Missing <!DOCTYPE html>")
        elif len(doctype_lines) > 1:
            issues.append(f"Duplicate DOCTYPE on lines {', '.join(str(n) for n, _ in doctype_lines)} (causes quirks mode)")
        elif doctype_lines[0][1] != "<!DOCTYPE html>":
            issues.append(f"Non-standard DOCTYPE: {doctype_lines[0][1]}")
    except Exception:
        pass
    return issues

def find_html_files():
    """Yield all .html files, skipping excluded dirs."""
    for root, dirs, files in os.walk(SITE_ROOT):
        dirs[:] = [d for d in dirs if d not in SKIP_DIRS and not d.startswith(".")]
        for f in files:
            if f.endswith(".html"):
                yield Path(root) / f

def extract_links(html_path):
    """Extract href and src attributes from an HTML file."""
    links = []
    try:
        with open(html_path, "r", encoding="utf-8", errors="ignore") as f:
            content = f.read()
        # href links
        for m in re.finditer(r'href=["\']([^"\']+)["\']', content):
            links.append(("href", m.group(1), m.start()))
        # src links
        for m in re.finditer(r'src=["\']([^"\']+)["\']', content):
            links.append(("src", m.group(1), m.start()))
        # content/url in schema
        for m in re.finditer(r'"url"\s*:\s*"([^"]+)"', content):
            links.append(("schema_url", m.group(1), m.start()))
        # canonical
        m = re.search(r'rel=["\']canonical["\']\s+href=["\']([^"\']+)["\']', content)
        if m:
            links.append(("canonical", m.group(1), m.start()))
        # og:url
        m = re.search(r'property=["\']og:url["\']\s+content=["\']([^"\']+)["\']', content)
        if m:
            links.append(("og_url", m.group(1), m.start()))
    except Exception as e:
        pass
    return links

def is_internal(url):
    """Check if URL is internal to the site."""
    if url.startswith("http"):
        return BASE_URL in url or "xgraphene.tech" in url
    if url.startswith("//"):
        return "xgraphene.tech" in url
    if url.startswith("#") or url.startswith("javascript:") or url.startswith("mailto:") or url.startswith("tel:"):
        return False
    if url.startswith("data:"):
        return False
    return True

def is_external(url):
    """Check if URL is external (http/https, not our domain)."""
    if url.startswith("http") or url.startswith("//"):
        if "xgraphene.tech" in url:
            return False
        return True
    return False

def resolve_path(html_file, link):
    """Resolve a relative/internal link to an absolute file system path.
    Resolves within the site's URL namespace, not raw filesystem.
    Web: /PRODUCTS/ + ../../PICTURE/x.svg = /PICTURE/x.svg (capped at root)
    FS:  LAUCH/PRODUCTS/ + ../../PICTURE/x.svg = CODEX/PICTURE/x.svg (escapes!)"""
    if link.startswith(BASE_URL):
        link = link[len(BASE_URL):]
    elif link.startswith("//xgraphene.tech"):
        link = link[len("//xgraphene.tech"):]
    elif link.startswith("http"):
        return None  # external

    if link.startswith("#") or link.startswith("?") or not link:
        return None  # anchor or empty

    # URL-decode the link (browsers treat %20 as space)
    link_decoded = unquote(link)

    # Remove fragment and query
    link_path = link_decoded.split("#")[0].split("?")[0]
    if not link_path:
        return None  # pure anchor

    if link_path.startswith("/"):
        # Absolute from site root
        resolved = SITE_ROOT / link_path.lstrip("/")
    else:
        # Resolve within site's URL namespace (cap at site root)
        try:
            rel_dir = html_file.parent.relative_to(SITE_ROOT)
        except ValueError:
            return None
        # Split into URL path components
        url_parts = list(rel_dir.parts) + link_path.replace("\\", "/").split("/")
        # Resolve .. in URL space (cap at root, don't escape)
        resolved_parts = []
        for p in url_parts:
            if p == "..":
                if resolved_parts:
                    resolved_parts.pop()
                # If empty, we're at root - stay there (web behavior)
            elif p and p != ".":
                resolved_parts.append(p)
        resolved = Path(SITE_ROOT, *resolved_parts)

    return resolved

def check_file_exists(resolved_path, link, rewrites=None):
    """Check if resolved path points to an existing file or directory (with index.html).
    Also checks Vercel rewrite rules for paths that don't exist directly on filesystem.
    Returns (exists: bool, through_rewrite: bool)"""
    if resolved_path is None:
        return True, False  # anchors, etc. are fine

    # Exact file match
    if resolved_path.is_file():
        return True, False

    # Directory with index.html
    if resolved_path.is_dir() and (resolved_path / "index.html").is_file():
        return True, False

    # Check with .html appended
    if not resolved_path.suffix:
        html_path = resolved_path.with_suffix(".html")
        if html_path.is_file():
            return True, False

    # Check Vercel rewrite rules — convert filesystem path back to URL path
    if rewrites and resolved_path:
        try:
            url_path = "/" + str(resolved_path.relative_to(SITE_ROOT)).replace("\\", "/")
        except ValueError:
            url_path = None

        # Also try the original link interpreted as an absolute URL path
        link_url = link
        if link_url and not link_url.startswith("/") and not link_url.startswith("http"):
            link_url = "/" + link_url

        for test_path in [url_path, link_url]:
            if test_path and match_vercel_rewrite(test_path, rewrites):
                return True, True

    return False, False

def check_meta_tags(html_path):
    """Check SEO meta tags presence."""
    issues = []
    try:
        with open(html_path, "r", encoding="utf-8", errors="ignore") as f:
            content = f.read()

        # Title
        if not re.search(r'<title>', content):
            issues.append("Missing <title>")

        # Meta description
        if not re.search(r'name=["\']description["\']', content):
            issues.append("Missing meta description")

        # Canonical
        if not re.search(r'rel=["\']canonical["\']', content):
            issues.append("Missing canonical URL")

        # H1
        if not re.search(r'<h1', content):
            issues.append("Missing <h1>")

        # Viewport
        if not re.search(r'viewport', content):
            issues.append("Missing viewport meta")

        # Schema.org JSON-LD
        if re.search(r'application/ld\+json', content):
            # Has schema - good
            pass
        else:
            # Only flag for main pages, not KB articles
            rel = html_path.relative_to(SITE_ROOT)
            if str(rel).count("/") <= 2:
                issues.append("Missing JSON-LD structured data")

    except Exception:
        pass

    return issues

def check_canonical_redirects(html_path, redirects):
    """Check if canonical URL points to a path that gets redirected (bad for SEO)."""
    issues = []
    try:
        with open(html_path, "r", encoding="utf-8", errors="ignore") as f:
            content = f.read()
        m = re.search(r'rel=["\']canonical["\']\s+href=["\']([^"\']+)["\']', content)
        if not m:
            return issues

        canonical = m.group(1)
        if canonical.startswith(BASE_URL):
            canonical_path = canonical[len(BASE_URL):]
        else:
            canonical_path = canonical

        # Check if canonical path is itself a redirect source
        for src, dst in redirects.items():
            # Convert vercel wildcards to simple patterns
            src_pattern = src.replace(":path*", "")
            if canonical_path.rstrip("/") == src_pattern.rstrip("/"):
                issues.append(f"Canonical points to redirected path: {canonical} → {dst}")
                break
    except Exception:
        pass
    return issues

# ── Main Scan ───────────────────────────────────────────
def run_audit(check_external=False, lighthouse=False):
    redirects = load_redirects()
    rewrites = load_rewrites()
    html_files = list(find_html_files())

    print(f"\n{'='*60}")
    print(f"  XIHE Webmaster Audit Tool")
    print(f"  Site: {BASE_URL}")
    print(f"  Files: {len(html_files)} HTML pages")
    print(f"  Rewrites: {len(rewrites)} in vercel.json")
    print(f"  Redirects: {len(redirects)} in vercel.json")
    print(f"{'='*60}\n")

    # ── 0. DOCTYPE Health ──
    print("─ [0/7] Checking DOCTYPE declarations...")
    doctype_issues = {}
    for html_file in html_files:
        issues = check_doctype(html_file)
        if issues:
            rel = html_file.relative_to(SITE_ROOT)
            doctype_issues[str(rel)] = issues

    if doctype_issues:
        dup_count = sum(1 for v in doctype_issues.values() if any("Duplicate" in i for i in v))
        miss_count = sum(1 for v in doctype_issues.values() if any("Missing" in i for i in v))
        print(f"   [ISSUE] {len(doctype_issues)} pages: {dup_count} duplicate, {miss_count} missing")
        for page, issues in sorted(doctype_issues.items()):
            print(f"      {page}:")
            for i in issues:
                print(f"         [{i}]")
    else:
        print(f"   [OK] All DOCTYPE declarations valid")
    doctype_count = len(doctype_issues)

    # ── 1. Broken Internal Links ──
    print("\n─ [1/7] Scanning internal links...")
    broken_internal = []
    internal_count = 0

    for html_file in html_files:
        links = extract_links(html_file)
        for link_type, url, pos in links:
            if not is_internal(url):
                continue
            internal_count += 1
            resolved = resolve_path(html_file, url)
            if resolved is not None:
                exists, via_rewrite = check_file_exists(resolved, url, rewrites)
                if not exists:
                    rel_path = html_file.relative_to(SITE_ROOT)
                    broken_internal.append({
                        "source": str(rel_path),
                        "type": link_type,
                        "url": url,
                        "resolved_to": str(resolved)
                    })

    print(f"   Internal links checked: {internal_count}")
    if broken_internal:
        print(f"   [BROKEN] Broken internal links: {len(broken_internal)}")
        for b in broken_internal[:30]:  # Show first 30, not all 5000
            print(f"      {b['source']} → {b['url']} (type: {b['type']})")
        if len(broken_internal) > 30:
            print(f"      ... and {len(broken_internal) - 30} more")
    else:
        print(f"   [OK] No broken internal links")

    # ── 1.5. Fragile Relative Paths ──
    print("\n─ [1.5/7] Checking for fragile relative paths (../)...")
    relative_path_issues = {}
    for html_file in html_files:
        links = extract_links(html_file)
        rel_links = [(t, u) for t, u, _ in links if is_internal(u) and "../" in u and t == "href"]
        if not rel_links:
            continue
        # Check if page is in a subdirectory where relative paths could be ambiguous
        rel = str(html_file.relative_to(SITE_ROOT))
        depth = rel.count("/")
        if depth >= 2:  # Pages 2+ levels deep using ../ are fragile
            relative_path_issues[rel] = [u for _, u in rel_links[:5]]

    if relative_path_issues:
        print(f"   [WARN]  {len(relative_path_issues)} pages use ../ relative paths (fragile — prefer /absolute):")
        for page, links in sorted(relative_path_issues.items()):
            print(f"      {page}:")
            for l in links[:3]:
                print(f"         → {l}")
    else:
        print(f"   [OK] No fragile relative path usage")

    # ── 2. SEO Baseline ──
    print("\n─ [2/7] Checking SEO essentials...")
    seo_issues = {}
    checked = 0
    for html_file in html_files:
        rel = html_file.relative_to(SITE_ROOT)
        # Skip admin, PICTURE utility pages
        if "admin" in str(rel).lower() or "button-preview" in str(rel):
            continue
        issues = check_meta_tags(html_file)
        if issues:
            seo_issues[str(rel)] = issues
        checked += 1

    print(f"   Pages checked: {checked}")
    if seo_issues:
        print(f"   [WARN]  SEO issues found on {len(seo_issues)} pages:")
        for page, issues in sorted(seo_issues.items()):
            print(f"      {page}:")
            for i in issues:
                print(f"         - {i}")
    else:
        print(f"   [OK] All pages have essential SEO tags")

    # ── 3. Canonical Health ──
    print("\n─ [3/7] Checking canonical URLs...")
    canonical_issues = {}
    for html_file in html_files:
        issues = check_canonical_redirects(html_file, redirects)
        if issues:
            rel = html_file.relative_to(SITE_ROOT)
            canonical_issues[str(rel)] = issues

    if canonical_issues:
        print(f"   [BROKEN] Canonical redirect issues: {len(canonical_issues)}")
        for page, issues in canonical_issues.items():
            print(f"      {page}:")
            for i in issues:
                print(f"         - {i}")
    else:
        print(f"   [OK] No canonical redirect issues")

    # ── 4. Sitemap Consistency ──
    print("\n─ [4/7] Checking sitemap consistency...")
    sitemap_issues = []
    if SITEMAP_FILE.exists():
        with open(SITEMAP_FILE, "r", encoding="utf-8") as f:
            sitemap_content = f.read()
        sitemap_urls = set(re.findall(r'<loc>([^<]+)</loc>', sitemap_content))

        # Check all sitemap URLs exist
        for url in sitemap_urls:
            url_path = url.replace(BASE_URL, "")
            if url_path.startswith("/"):
                url_path = url_path[1:]
            resolved = SITE_ROOT / url_path
            if not resolved.is_file() and not (resolved.is_dir() and (resolved / "index.html").is_file()):
                sitemap_issues.append(f"Sitemap URL not found: {url}")

        # Check important pages are in sitemap
        important = ["ABOUT/AboutOrigin.html", "ABOUT/AboutMission.html", "ABOUT/AboutPhilosophy.html",
                     "SCIENCE/Landing.html", "SCIENCE/Mechanism.html", "SCIENCE/Technology.html", "SCIENCE/Evidence.html",
                     "applications.html", "partnership.html", "PRODUCTS/ProductPage.html"]
        for path in important:
            expected = f"{BASE_URL}/{path}"
            if expected not in sitemap_urls:
                sitemap_issues.append(f"Missing from sitemap: {expected}")

        print(f"   Sitemap URLs: {len(sitemap_urls)}")
        if sitemap_issues:
            print(f"   [WARN]  Sitemap issues: {len(sitemap_issues)}")
            for i in sitemap_issues:
                print(f"      - {i}")
        else:
            print(f"   [OK] Sitemap consistent")
    else:
        print(f"   [WARN]  No sitemap.xml found")

    # ── 5. External Links ──
    print("\n─ [5/7] Checking external links...")
    if check_external:
        external_links = {}
        for html_file in html_files:
            links = extract_links(html_file)
            for link_type, url, pos in links:
                if is_external(url):
                    rel = html_file.relative_to(SITE_ROOT)
                    if str(rel) not in external_links:
                        external_links[str(rel)] = []
                    external_links[str(rel)].append(url)

        total_ext = sum(len(v) for v in external_links.values())
        print(f"   External links found: {total_ext} across {len(external_links)} pages")

        # Check external link health (limited to 10 concurrent, timeout 5s)
        unique_ext = list(set(l for v in external_links.values() for l in v))
        print(f"   Unique external URLs: {len(unique_ext)}")
        print(f"   Checking HTTP status (max 50, 5s timeout)...")

        broken_ext = []
        to_check = unique_ext[:50]
        with ThreadPoolExecutor(max_workers=10) as executor:
            futures = {executor.submit(check_external_url, url): url for url in to_check}
            for future in as_completed(futures):
                url = futures[future]
                try:
                    status = future.result(timeout=6)
                    if status and status >= 400:
                        broken_ext.append((url, status))
                except Exception:
                    broken_ext.append((url, "timeout/error"))

        if broken_ext:
            print(f"   [BROKEN] Broken external links: {len(broken_ext)}")
            for url, status in broken_ext:
                print(f"      {status} → {url}")
        else:
            print(f"   [OK] All checked external links healthy")
    else:
        ext_count = 0
        for html_file in html_files:
            links = extract_links(html_file)
            ext_count += sum(1 for _, url, _ in links if is_external(url))
        print(f"   External links found: {ext_count}")
        print(f"   (Use --check-external to verify HTTP status)")

    # ── 6. GEO & Readability ──
    print("\n─ [6/7] GEO & Readability analysis...")
    geo_results = {}
    # Analyze key pages only (not every KB article, skip admin/redirect pages)
    key_pages = [
        "index.html",
        "ABOUT/AboutOrigin.html", "ABOUT/AboutMission.html", "ABOUT/AboutPhilosophy.html",
        "SCIENCE/Landing.html", "SCIENCE/Mechanism.html", "SCIENCE/Technology.html", "SCIENCE/Evidence.html",
        "applications.html", "partnership.html",
        "PRODUCTS/ProductPage.html",
        "PRODUCTS/CAPSULE/capsule-b2b.html", "PRODUCTS/CABIN/cabin.html",
        "PRODUCTS/PORTABLES/DeepRecovery.html", "PRODUCTS/PORTABLES/NeuralResilience.html",
        "PRODUCTS/PORTABLES/VisceralVitality.html", "PRODUCTS/FILM/GrapheneFilm.html",
    ]
    for page_rel in key_pages:
        html_file = SITE_ROOT / page_rel
        if html_file.is_file():
            result = analyze_geo_readability(html_file)
            if result:
                geo_results[page_rel] = result

    if geo_results:
        # Calculate site-wide averages
        avg_readability = sum(r["readability"] for r in geo_results.values() if r["readability"]) / max(len([r for r in geo_results.values() if r["readability"]]), 1)
        avg_geo = sum(r["geo_total"] for r in geo_results.values()) / len(geo_results)

        print(f"   Pages analyzed:       {len(geo_results)}")
        print(f"   Site avg Readability: {avg_readability:.1f} ({flesch_grade_level(avg_readability)})")
        print(f"   Site avg GEO Score:   {avg_geo:.1f}/100")
        print(f"\n   {'Page':<40} {'Readability':<12} {'GEO':<6} {'Words':<8}")
        print(f"   {'-'*40} {'-'*12} {'-'*6} {'-'*8}")
        for page, r in sorted(geo_results.items()):
            read_str = f"{r['readability']}" if r['readability'] else "N/A"
            wc = r['word_count']
            wc_str = f"{wc}" if wc else "N/A"
            flag = ""
            if r['readability'] and r['readability'] < 40:
                flag = " [HARD]"
            elif r['readability'] and r['readability'] > 75:
                flag = " [EASY]"
            print(f"   {page:<40} {read_str:<12} {r['geo_total']:<6} {wc_str:<8}{flag}")

        # Show worst GEO pages
        low_geo = [(p, r) for p, r in geo_results.items() if r["geo_total"] < 35]
        if low_geo:
            print(f"\n   [WARN] Low GEO pages (<35):")
            for p, r in sorted(low_geo, key=lambda x: x[1]["geo_total"]):
                print(f"      {p} — GEO:{r['geo_total']} (C:{r['geo_citation']} S:{r['geo_structure']} Sch:{r['geo_schema']} D:{r['geo_depth']} A:{r['geo_answerability']})")
    else:
        avg_readability = 0
        avg_geo = 0

    # ── 7. Lighthouse Performance (optional) ──
    lighthouse_results = None
    if lighthouse:
        lighthouse_results = run_lighthouse_audit()

    # ── 7.5 HTTP Status Code Check ──
    print("\n─ [7/7] Checking live HTTP status codes...")
    http_4xx = check_http_status(html_files, rewrites)

    # Also check sitemap URLs
    sitemap_urls = set()
    if SITEMAP_FILE.exists():
        with open(SITEMAP_FILE, "r", encoding="utf-8") as f:
            sitemap_urls = set(re.findall(r'<loc>([^<]+)</loc>', f.read()))
    sitemap_4xx = []
    if sitemap_urls:
        print(f"   Checking {len(sitemap_urls)} sitemap URLs...")
        with ThreadPoolExecutor(max_workers=15) as executor:
            futures = {executor.submit(check_url_status, url): url for url in sitemap_urls}
            for future in as_completed(futures):
                url = futures[future]
                try:
                    status = future.result(timeout=10)
                    if status and status >= 400:
                        sitemap_4xx.append((url, status))
                except Exception:
                    sitemap_4xx.append((url, "timeout"))

    all_4xx = list(set(http_4xx + sitemap_4xx))
    if all_4xx:
        print(f"   [BROKEN] {len(all_4xx)} URLs return 4XX/5XX:")
        for url, status in sorted(all_4xx):
            tag = " (sitemap)" if (url, status) in sitemap_4xx and (url, status) not in http_4xx else ""
            print(f"      {status} → {url}{tag}")
    else:
        print(f"   [OK] All pages return HTTP 200")

    # ── Summary ──
    print(f"\n{'='*60}")
    print(f"  AUDIT SUMMARY")
    print(f"{'='*60}")
    print(f"  Pages scanned:         {len(html_files)}")
    print(f"  DOCTYPE issues:        {doctype_count}")
    print(f"  HTTP 4XX/5XX:          {len(all_4xx)}")
    print(f"  Internal links:        {internal_count}")
    print(f"  Broken internal:       {len(broken_internal)}")
    print(f"  SEO issues (pages):    {len(seo_issues)}")
    print(f"  Canonical issues:      {len(canonical_issues)}")
    print(f"  Sitemap issues:        {len(sitemap_issues)}")
    print(f"  Site Readability:      {avg_readability:.1f} ({flesch_grade_level(avg_readability)})")
    print(f"  Site GEO Score:        {avg_geo:.1f}/100")
    if lighthouse_results and "avg_performance" in lighthouse_results:
        print(f"  Lighthouse Perf:       {lighthouse_results['avg_performance']}/100")
        print(f"  Lighthouse A11y:       {lighthouse_results['avg_accessibility']}/100")
        print(f"  Lighthouse SEO:        {lighthouse_results['avg_seo']}/100")
    print(f"{'='*60}\n")

    result = {
        "broken_internal": broken_internal,
        "seo_issues": seo_issues,
        "canonical_issues": canonical_issues,
        "sitemap_issues": sitemap_issues,
        "geo_results": geo_results,
        "avg_readability": avg_readability,
        "avg_geo_score": avg_geo,
    }
    if lighthouse_results:
        result["lighthouse"] = lighthouse_results
    return result

# ── GEO & Readability Analysis ─────────────────────────
def count_syllables(word):
    """Approximate English syllable count by counting vowel groups."""
    word = word.lower().strip()
    if not word:
        return 1
    # Special cases
    if len(word) <= 2:
        return 1
    # Remove silent e at end (except for short words where it matters)
    if word.endswith('e') and len(word) > 3:
        word = word[:-1]
    # Count vowel groups
    vowels = set('aeiouy')
    count = 0
    prev_vowel = False
    for ch in word:
        is_vowel = ch in vowels
        if is_vowel and not prev_vowel:
            count += 1
        prev_vowel = is_vowel
    return max(count, 1)

def flesch_reading_ease(text):
    """Calculate Flesch Reading Ease score (0-100).
    90-100: Very Easy | 60-69: Standard | 0-29: Very Confusing"""
    # Extract clean text (strip HTML tags)
    clean = re.sub(r'<[^>]+>', ' ', text)
    # Remove CSS-like content, JS, HTML entities
    clean = re.sub(r'&[a-z]+;', ' ', clean)
    clean = re.sub(r'&#\w+;', ' ', clean)  # HTML entities like &#x03BC;
    clean = re.sub(r'[{}:;]', ' ', clean)
    clean = re.sub(r'\s+', ' ', clean).strip()
    # Normalize decimals (9.4 -> 9_4) before sentence split to avoid false breaks
    clean = re.sub(r'(\d)\.(\d)', r'\1_DECIMAL_\2', clean)
    # Normalize abbreviations
    clean = re.sub(r'\b([A-Z])\.([A-Z])\.', r'\1_ABBR_\2_ABBR_', clean)
    clean = re.sub(r'(e\.g\.|i\.e\.|etc\.|vs\.|Dr\.|Prof\.|Mr\.|Ms\.|Inc\.|Ltd\.|Co\.)',
                   lambda m: m.group(1).replace('.', '_DOT_'), clean)
    # Split sentences on . ! ? followed by space and capital letter or end
    sentences = re.split(r'(?<=[.!?])\s+(?=[A-Z])', clean)
    sentences = [s.strip().replace('_DECIMAL_', '.').replace('_ABBR_', '.').replace('_DOT_', '.')
                 for s in sentences if s.strip() and len(s.strip()) > 5]
    if not sentences:
        return None
    # Split words (only alphabetic, 2+ chars)
    words = [w for w in clean.split() if w.isalpha() and len(w) >= 2]
    if not words:
        return None
    total_words = len(words)
    total_sentences = len(sentences)
    total_syllables = sum(count_syllables(w) for w in words)
    if total_sentences == 0 or total_words == 0:
        return None
    score = 206.835 - 1.015 * (total_words / total_sentences) - 84.6 * (total_syllables / total_words)
    return round(max(0, min(100, score)), 1)

def flesch_grade_level(score):
    """Map Flesch score to grade level description.
    Note: Technical B2B content about graphene/mitochondria/biophysics
    naturally scores 20-40 due to multi-syllable terminology.
    This is industry-normal, not a defect."""
    if score is None:
        return "N/A"
    if score >= 80:
        return "Consumer-friendly"
    if score >= 60:
        return "General audience"
    if score >= 40:
        return "B2B-accessible"
    if score >= 25:
        return "Technical (OK for B2B)"
    if score >= 15:
        return "Dense technical"
    return "Very dense (consider plain-language summary)"

def geo_citation_score(content):
    """Score citation-worthiness for AI engines (0-25)."""
    score = 0
    # Academic citations [1], [2], etc.
    if re.search(r'\[\d+\]', content):
        score += 5
    # DOI references
    if re.search(r'10\.\d{4,}/', content):
        score += 5
    # Author attribution "according to", "research by", "study published"
    if re.search(r'according\s+to|research\s+(by|published)|study\s+(by|published)|et\s+al\.', content, re.I):
        score += 5
    # Statistics and numbers
    numbers = re.findall(r'\d+\.?\d*\s*%|\d+\.?\d*\s*(?:times|fold)', content)
    if len(numbers) >= 3:
        score += 5
    # Named entities (capitalized multi-word names, institutions)
    entities = re.findall(r'[A-Z][a-z]+(?:\s+[A-Z][a-z]+)+', content)
    if len(entities) >= 3:
        score += 5
    return min(score, 25)

def geo_structure_score(content):
    """Score content structure for AI readability (0-20)."""
    score = 0
    # H2 count
    h2_count = len(re.findall(r'<h2', content))
    if h2_count >= 3:
        score += 6
    elif h2_count >= 1:
        score += 3
    # H3 count (deep topics)
    if len(re.findall(r'<h3', content)) >= 2:
        score += 4
    # Lists (ul/ol)
    if re.search(r'<(ul|ol)[>\s]', content):
        score += 4
    # Short paragraphs (web-friendly)
    paragraphs = re.split(r'<p[>\s]', content)[1:]
    avg_len = sum(len(p) for p in paragraphs) / len(paragraphs) if paragraphs else 0
    if avg_len < 800:
        score += 3
    if avg_len < 400:
        score += 3
    return min(score, 20)

def geo_schema_score(content):
    """Score schema markup quality (0-15)."""
    score = 0
    if re.search(r'application/ld\+json', content):
        score += 5
    # FAQPage schema is gold for GEO
    if re.search(r'FAQPage', content):
        score += 5
    # Article or WebPage type
    if re.search(r'"@type"\s*:\s*"(Article|WebPage|ScholarlyArticle|CollectionPage)"', content):
        score += 3
    # Has about/subject
    if re.search(r'"about"|"subjectOf"', content):
        score += 2
    return min(score, 15)

def geo_depth_score(content):
    """Score content depth and comprehensiveness (0-20)."""
    score = 0
    clean = re.sub(r'<[^>]+>', ' ', content)
    clean = re.sub(r'\s+', ' ', clean).strip()
    words = clean.split()
    wc = len(words)
    # Word count tiers
    if wc >= 2000:
        score += 8
    elif wc >= 1000:
        score += 5
    elif wc >= 500:
        score += 3
    # Has definitions (explains terms)
    if re.search(r'(?:is|are)\s+(?:a|an|the)\s|defined\s+as|refers\s+to|in\s+other\s+words', content, re.I):
        score += 4
    # Has sources/references section
    if re.search(r'References|Sources|Further Reading|Bibliography|Citations', content, re.I):
        score += 4
    # Has images (content richness)
    if len(re.findall(r'<img', content)) >= 2:
        score += 4
    return min(score, 20)

def geo_answerability_score(content):
    """Score how well content answers AI queries directly (0-20)."""
    score = 0
    # Q&A pattern: question followed by answer
    q_patterns = re.findall(r'(?:what|how|why|when|where|who|is|are|do|does|can)\s+\w+.*?\?', content, re.I)
    if len(q_patterns) >= 2:
        score += 8
    elif len(q_patterns) >= 1:
        score += 4
    # Bold/key terms (strong tags - AI picks these up)
    if len(re.findall(r'<strong>|<b>', content)) >= 3:
        score += 4
    # Summary/conclusion section
    if re.search(r'Summary|Conclusion|Key Takeaways|In Summary|Bottom Line', content, re.I):
        score += 4
    # Short intro paragraph (AI citation favors concise intros)
    first_p = re.search(r'<p[>\s](.*?)</p>', content, re.DOTALL)
    if first_p and len(first_p.group(1).split()) < 50:
        score += 4
    return min(score, 20)

def analyze_geo_readability(html_path):
    """Full GEO + Readability analysis for a single page."""
    try:
        with open(html_path, "r", encoding="utf-8", errors="ignore") as f:
            content = f.read()
    except Exception:
        return None

    # Extract main content for readability analysis
    # 1. Try <main> tag
    main_match = re.search(r'<main[^>]*>(.*?)</main>', content, re.DOTALL)
    if main_match:
        main_content = main_match.group(1)
    else:
        # 2. Try to extract between </nav> and <footer
        nav_end = content.rfind('</nav>')
        footer_start = content.find('<footer')
        if nav_end > 0 and footer_start > nav_end:
            main_content = content[nav_end:footer_start]
        else:
            # 3. Fallback: full body minus scripts/styles
            body_match = re.search(r'<body[^>]*>(.*?)</body>', content, re.DOTALL)
            main_content = body_match.group(1) if body_match else content

    # Strip scripts, styles, and inline CSS
    clean_content = re.sub(r'<(script|style|noscript)[^>]*>.*?</\1>', '', main_content, flags=re.DOTALL)
    # Remove inline style attributes
    clean_content = re.sub(r'\s*style\s*=\s*"[^"]*"', '', clean_content)
    # Remove remaining HTML tags for readability
    readability_text = re.sub(r'<[^>]+>', ' ', clean_content)

    readability_score = flesch_reading_ease(readability_text)

    citation = geo_citation_score(content)
    structure = geo_structure_score(content)
    schema_s = geo_schema_score(content)
    depth = geo_depth_score(content)
    answerability = geo_answerability_score(content)

    geo_total = citation + structure + schema_s + depth + answerability

    word_count = len(re.sub(r'<[^>]+>', ' ', clean_content).split())

    return {
        "readability": readability_score,
        "readability_level": flesch_grade_level(readability_score),
        "geo_citation": citation,
        "geo_structure": structure,
        "geo_schema": schema_s,
        "geo_depth": depth,
        "geo_answerability": answerability,
        "geo_total": geo_total,
        "word_count": word_count,
    }

def check_external_url(url, timeout=5):
    """Check external URL HTTP status."""
    try:
        import urllib.request
        req = urllib.request.Request(url, method="HEAD", headers={"User-Agent": "XIHE-Audit/1.0"})
        resp = urllib.request.urlopen(req, timeout=timeout)
        return resp.status
    except Exception:
        return None


def file_to_prod_url(html_file, rewrites):
    """Map an HTML file to its production URL path.
    Returns the URL path (e.g., /NEWS/) or None if unmapped."""
    try:
        rel = str(html_file.relative_to(SITE_ROOT)).replace("\\", "/")
    except ValueError:
        return None

    # Direct root files (index.html, robots.txt, etc.)
    if "/" not in rel:
        if rel == "index.html":
            return "/"
        return f"/{rel}"

    # WEBSITE/pages/ files -> use Vercel rewrites in reverse
    if rel.startswith("WEBSITE/pages/"):
        url_part = rel[len("WEBSITE/pages/"):]
        # Only strip /index.html (directory index), not xxx-index.html (named files)
        if url_part.endswith("/index.html"):
            url_part = url_part[:-11]  # Remove "index.html", keep trailing /
        elif url_part == "index.html":
            url_part = ""
        url_path = "/" + url_part

        # Verify this URL is reachable via a Vercel rewrite
        if rewrites and match_vercel_rewrite(url_path, rewrites):
            return url_path
        if match_vercel_rewrite(url_path.rstrip("/"), rewrites):
            return url_path
        # Also try with trailing slash
        if match_vercel_rewrite(url_path + "/", rewrites):
            return url_path + "/"

        # Fallback: return the computed path anyway
        return url_path

    # Other files in subdirectories (images, output, etc.) - skip
    return None


def check_http_status(html_files, rewrites, max_workers=15):
    """Check HTTP status codes for all production pages.
    Returns list of (url, status_code) tuples for 4XX/5XX responses."""
    import urllib.request
    import urllib.error

    # Build list of URLs to check
    url_map = {}  # url -> file_path
    for html_file in html_files:
        url = file_to_prod_url(html_file, rewrites)
        if url:
            url_map[BASE_URL + url] = html_file

    # Skip utility pages
    skip_patterns = ["button-preview", "visual-library-contact-sheet"]
    urls_to_check = {}
    for url, fpath in url_map.items():
        if not any(p in str(fpath) for p in skip_patterns) and not any(p in url for p in skip_patterns):
            urls_to_check[url] = fpath

    print(f"   Checking {len(urls_to_check)} production URLs...")

    broken = []
    with ThreadPoolExecutor(max_workers=max_workers) as executor:
        futures = {executor.submit(check_url_status, url): url for url in urls_to_check}
        for future in as_completed(futures):
            url = futures[future]
            try:
                status = future.result(timeout=10)
                if status and status >= 400:
                    broken.append((url, status))
            except Exception:
                broken.append((url, "timeout"))

    return broken


def check_url_status(url, timeout=8):
    """Check a single URL's HTTP status. Returns status code or None."""
    try:
        import urllib.request
        req = urllib.request.Request(url, method="HEAD",
                                     headers={"User-Agent": "XIHE-Audit/1.0"})
        resp = urllib.request.urlopen(req, timeout=timeout)
        return resp.status
    except urllib.error.HTTPError as e:
        return e.code  # 4XX, 5XX
    except Exception:
        return None

# ── Lighthouse Integration ──────────────────────────────
LIGHTHOUSE_PAGES = [
    ("Homepage", "/"),
    ("About Origin", "/ABOUT/AboutOrigin.html"),
    ("Science Landing", "/SCIENCE/Landing.html"),
    ("Technology", "/SCIENCE/Technology.html"),
    ("Evidence", "/SCIENCE/Evidence.html"),
    ("Applications", "/applications.html"),
    ("Partnership", "/partnership.html"),
    ("Products", "/PRODUCTS/ProductPage.html"),
    ("CAPSULE B2B", "/PRODUCTS/CAPSULE/capsule-b2b.html"),
]

def run_lighthouse(url, timeout=90):
    """Run Google Lighthouse audit on a single URL. Returns dict of scores or None on failure."""
    import subprocess, tempfile, os
    try:
        with tempfile.NamedTemporaryFile(suffix=".json", delete=False) as tmp:
            tmp_path = tmp.name

        cmd = " ".join([
            "npx", "lighthouse", url,
            "--output", "json",
            "--output-path", tmp_path,
            "--chrome-flags", "--headless --no-sandbox --disable-gpu",
            "--only-categories", "performance,accessibility,best-practices,seo",
            "--quiet",
        ])
        subprocess.run(cmd, capture_output=True, text=True, timeout=timeout, shell=True)

        if not os.path.exists(tmp_path):
            return None

        with open(tmp_path, "r", encoding="utf-8") as f:
            data = json.load(f)
        os.unlink(tmp_path)

        categories = data.get("categories", {})
        audits = data.get("audits", {})

        perf = categories.get("performance", {}).get("score", 0)
        a11y = categories.get("accessibility", {}).get("score", 0)
        bp = categories.get("best-practices", {}).get("score", 0)
        seo = categories.get("seo", {}).get("score", 0)

        # Core Web Vitals
        lcp = audits.get("largest-contentful-paint", {}).get("numericValue")
        cls = audits.get("cumulative-layout-shift", {}).get("numericValue")
        tbt = audits.get("total-blocking-time", {}).get("numericValue")
        si = audits.get("speed-index", {}).get("numericValue")

        return {
            "performance": round(perf * 100),
            "accessibility": round(a11y * 100),
            "best_practices": round(bp * 100),
            "seo": round(seo * 100),
            "lcp_ms": round(lcp) if lcp else None,
            "cls": round(cls, 3) if cls else None,
            "tbt_ms": round(tbt) if tbt else None,
            "speed_index_ms": round(si) if si else None,
        }
    except Exception as e:
        return {"error": str(e)}

def run_lighthouse_audit():
    """Run Lighthouse on all key pages. Rate-limited to 1 concurrent."""
    print("\n─ [7/7] Google Lighthouse performance audit...")
    print(f"   Testing {len(LIGHTHOUSE_PAGES)} key pages against {BASE_URL}")
    print(f"   (This may take 2-4 minutes)\n")

    results = {}
    for i, (label, path) in enumerate(LIGHTHOUSE_PAGES):
        url = f"{BASE_URL}{path}"
        print(f"   [{i+1}/{len(LIGHTHOUSE_PAGES)}] {label:25s} ", end="", flush=True)
        result = run_lighthouse(url)
        if result and "error" not in result:
            results[label] = result
            perf = result["performance"]
            icon = "[GREAT]" if perf >= 90 else ("[OK]" if perf >= 50 else "[POOR]")
            print(f"{icon} Perf:{result['performance']} A11y:{result['accessibility']} Best:{result['best_practices']} SEO:{result['seo']}")
        else:
            err = result.get("error", "timed out") if result else "no output"
            print(f"[FAIL] ({err})")
            results[label] = {"error": err}

    # Summary
    valid = {k: v for k, v in results.items() if "error" not in v}
    if valid:
        avg_perf = sum(v["performance"] for v in valid.values()) / len(valid)
        avg_a11y = sum(v["accessibility"] for v in valid.values()) / len(valid)
        avg_seo = sum(v["seo"] for v in valid.values()) / len(valid)
        avg_bp = sum(v["best_practices"] for v in valid.values()) / len(valid)

        print(f"\n   ── Lighthouse Summary ──")
        print(f"   Pages tested:       {len(valid)}/{len(LIGHTHOUSE_PAGES)}")
        print(f"   Avg Performance:    {avg_perf:.0f}/100")
        print(f"   Avg Accessibility:  {avg_a11y:.0f}/100")
        print(f"   Avg Best Practices: {avg_bp:.0f}/100")
        print(f"   Avg SEO:            {avg_seo:.0f}/100")

        # Flag poor performers
        poor_perf = [(k, v["performance"]) for k, v in valid.items() if v["performance"] < 50]
        if poor_perf:
            print(f"\n   [WARN] Slow pages (Performance <50):")
            for label, score in sorted(poor_perf, key=lambda x: x[1]):
                print(f"      {label}: {score}/100")

        # Core Web Vitals summary
        lcp_vals = [v["lcp_ms"] for v in valid.values() if v.get("lcp_ms")]
        cls_vals = [v["cls"] for v in valid.values() if v.get("cls") is not None]
        if lcp_vals:
            avg_lcp = sum(lcp_vals) / len(lcp_vals)
            lcp_bad = [k for k, v in valid.items() if v.get("lcp_ms") and v["lcp_ms"] > 2500]
            print(f"   Avg LCP:            {avg_lcp:.0f}ms (target: <2500ms)")
            if lcp_bad:
                print(f"   [WARN] Slow LCP (>2500ms): {', '.join(lcp_bad)}")
        if cls_vals:
            avg_cls = sum(cls_vals) / len(cls_vals)
            cls_bad = [k for k, v in valid.items() if v.get("cls") and v["cls"] > 0.1]
            print(f"   Avg CLS:            {avg_cls:.3f} (target: <0.1)")
            if cls_bad:
                print(f"   [WARN] High CLS (>0.1): {', '.join(cls_bad)}")

        return {"pages": results, "avg_performance": round(avg_perf), "avg_accessibility": round(avg_a11y), "avg_seo": round(avg_seo), "avg_best_practices": round(avg_bp)}
    return {"pages": results, "error": "No successful audits"}

# ── CLI ─────────────────────────────────────────────────
if __name__ == "__main__":
    check_ext = "--check-external" in sys.argv
    use_lighthouse = "--lighthouse" in sys.argv
    output_json = "--json" in sys.argv

    start = time.time()
    results = run_audit(check_external=check_ext, lighthouse=use_lighthouse)
    elapsed = time.time() - start

    if output_json:
        print(json.dumps(results, indent=2, ensure_ascii=False))
        with open(SITE_ROOT / "tools" / "audit-report.json", "w", encoding="utf-8") as f:
            json.dump(results, f, indent=2, ensure_ascii=False)
        print(f"\nReport saved to tools/audit-report.json")

    print(f"Scan completed in {elapsed:.1f}s")

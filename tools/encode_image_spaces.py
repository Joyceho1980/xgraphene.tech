#!/usr/bin/env python3
"""URL-encode spaces in image src paths across all HTML files."""
import re, os

BASE = r"D:\CODEX\LAUCH VERSION\WEBSITE\pages"
fixed = 0

for root, dirs, files in os.walk(BASE):
    for f in files:
        if not f.endswith(".html"):
            continue
        path = os.path.join(root, f)
        with open(path, "r", encoding="utf-8", errors="ignore") as fh:
            content = fh.read()

        original = content

        def fix_spaces_in_quotes(m):
            full = m.group(0)
            if "%20" in full:
                return full
            return full.replace(" ", "%20")

        # Fix src="path with spaces"
        content = re.sub(r'src="[^"]*\s[^"]*"', fix_spaces_in_quotes, content)
        # Fix url('path with spaces') and url("path with spaces")
        content = re.sub(r"url\('[^']*\s[^']*'\)", fix_spaces_in_quotes, content)
        content = re.sub(r'url\("[^"]*\s[^"]*"\)', fix_spaces_in_quotes, content)
        # Fix url(path with spaces) — no quotes
        content = re.sub(r'url\([^\"\'\s\)]*\s[^\"\'\s\)]*\)', fix_spaces_in_quotes, content)
        # Fix href="path with spaces"
        content = re.sub(r'href="[^"]*\s[^"]*"', fix_spaces_in_quotes, content)

        if content != original:
            with open(path, "w", encoding="utf-8") as fh:
                fh.write(content)
            rel = os.path.relpath(path, BASE)
            print(f"  + {rel}")
            fixed += 1

print(f"\nFixed {fixed} files")

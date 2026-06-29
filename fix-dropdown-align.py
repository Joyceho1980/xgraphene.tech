#!/usr/bin/env python3
"""
修复 .nav-item-dropdown 对齐问题：添加 display: inline-flex; align-items: center;
"""

import os
import re
from pathlib import Path

OLD_CSS = """.nav-item-dropdown {
    position: relative;
}"""

NEW_CSS = """.nav-item-dropdown {
    position: relative;
    display: inline-flex;
    align-items: center;
}"""

def process_file(filepath):
    for encoding in ['utf-8', 'gbk', 'gb2312', 'latin-1']:
        try:
            with open(filepath, 'r', encoding=encoding) as f:
                content = f.read()
            used_encoding = encoding
            break
        except UnicodeDecodeError:
            continue
    else:
        return False

    if OLD_CSS not in content:
        return False

    content = content.replace(OLD_CSS, NEW_CSS)

    with open(filepath, 'w', encoding=used_encoding) as f:
        f.write(content)
    return True

def main():
    base_dir = Path(r'D:\CODEX\LAUCH VERSION\WEBSITE\pages')
    count = 0
    for root, dirs, files in os.walk(base_dir):
        dirs[:] = [d for d in dirs if d != 'admin']
        for filename in files:
            if not filename.endswith('.html'):
                continue
            filepath = os.path.join(root, filename)
            if process_file(filepath):
                count += 1
    # Also fix index.html
    idx = Path(r'D:\CODEX\LAUCH VERSION\WEBSITE\index.html')
    if idx.exists():
        if process_file(idx):
            count += 1
    print(f"修复完成: {count} 个文件")

if __name__ == '__main__':
    main()

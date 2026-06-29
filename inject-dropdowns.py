#!/usr/bin/env python3
"""
SOLO-20260628-005: 全站导航下拉菜单注入
- 注入 CSS 到 <style> 块
- 替换 Science 链接为下拉
- 替换 Products 链接为下拉
"""

import os
import re
from pathlib import Path

# CSS 模板
CSS_TEMPLATE = """/* Dropdown */
.nav-item-dropdown {
    position: relative;
}
.nav-dropdown-menu {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%) translateY(8px);
    background: #1A3348;
    border: 1px solid rgba(197,160,89,0.2);
    border-radius: 8px;
    padding: 8px 0;
    min-width: 200px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.25s ease;
    box-shadow: 0 8px 32px rgba(0,0,0,0.3);
    z-index: 1001;
}
.nav-item-dropdown:hover .nav-dropdown-menu,
.nav-item-dropdown:focus-within .nav-dropdown-menu {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(4px);
}
.nav-dropdown-menu a {
    display: block;
    padding: 10px 24px;
    font-size: 11px;
    color: #E0E6ED;
    text-decoration: none;
    letter-spacing: 1px;
    text-transform: uppercase;
    white-space: nowrap;
    transition: background 0.2s, color 0.2s;
}
.nav-dropdown-menu a:hover {
    background: rgba(197,160,89,0.1);
    color: #C5A059;
}
.nav-dropdown-menu a::after { display: none; }
.nav-dropdown-trigger {
    cursor: pointer;
}
.nav-dropdown-trigger::after {
    content: ' \\25BE';
    font-size: 8px;
    opacity: 0.6;
}
"""

# Science 下拉 HTML
SCIENCE_DROPDOWN = """<div class="nav-item-dropdown">
            <a href="/SCIENCE/Landing.html" class="nav-dropdown-trigger{active_class}">Science</a>
            <div class="nav-dropdown-menu">
                <a href="/SCIENCE/Landing.html">Science Overview</a>
                <a href="/SCIENCE/Mechanism.html">Mechanism</a>
                <a href="/SCIENCE/Technology.html">Technology</a>
                <a href="/SCIENCE/Evidence.html">Evidence</a>
                <a href="/SCIENCE/KNOWLEDGE/">Knowledge Hub</a>
            </div>
        </div>"""

# Products 下拉 HTML
PRODUCTS_DROPDOWN = """<div class="nav-item-dropdown">
            <a href="/PRODUCTS/ProductPage.html" class="nav-dropdown-trigger{active_class}">Products</a>
            <div class="nav-dropdown-menu">
                <a href="/PRODUCTS/CAPSULE/capsule-b2b.html">CAPSULE — Full Body Photon Chamber</a>
                <a href="/PRODUCTS/CABIN/cabin.html">CABIN — Modular Resonance Chamber</a>
                <a href="/PRODUCTS/FILM/GrapheneFilm.html">Graphene Film — Heating Module</a>
                <a href="/PRODUCTS/PORTABLES/NeuralResilience.html">Neural Resilience — Wearable</a>
                <a href="/PRODUCTS/PORTABLES/VisceralVitality.html">Visceral Vitality — Waist Pad</a>
                <a href="/PRODUCTS/PORTABLES/DeepRecovery.html">Deep Recovery — Lumbar Belt</a>
                <a href="/technology/xihe-fir-film-performance.html" style="font-size:10px;opacity:0.7;">— FIR Film Performance Data</a>
            </div>
        </div>"""

def inject_css(content):
    """注入 CSS 到 <style> 块，在 .nav-phone 之前"""
    if '.nav-item-dropdown' in content:
        return content, False  # 已存在
    
    # 查找 .nav-phone { 或类似的导航相关样式
    patterns = [
        r'(\.nav-phone\s*\{)',
        r'(\.nav-links\s*\{)',
        r'(nav\s*\{[^}]*display:\s*flex)',
    ]
    
    for pattern in patterns:
        match = re.search(pattern, content)
        if match:
            insert_pos = match.start()
            new_content = content[:insert_pos] + CSS_TEMPLATE + '\n        ' + content[insert_pos:]
            return new_content, True
    
    # 如果找不到，尝试在 </style> 之前插入
    style_end = content.rfind('</style>')
    if style_end > 0:
        new_content = content[:style_end] + '\n' + CSS_TEMPLATE + '\n    ' + content[style_end:]
        return new_content, True
    
    return content, False

def replace_science_link(content):
    """替换 Science 链接为下拉菜单"""
    if 'nav-dropdown-trigger">Science</a>' in content:
        return content, False  # 已存在
    
    # 匹配各种形式的 Science 链接
    patterns = [
        # 有 active 的
        (r'<a\s+href="[^"]*SCIENCE[^"]*"\s+class="active"[^>]*>Science</a>', ' active'),
        # 没有 active 的
        (r'<a\s+href="[^"]*SCIENCE[^"]*"[^>]*>Science</a>', ''),
    ]
    
    for pattern, active_class in patterns:
        match = re.search(pattern, content)
        if match:
            replacement = SCIENCE_DROPDOWN.format(active_class=active_class)
            new_content = content[:match.start()] + replacement + content[match.end():]
            return new_content, True
    
    return content, False

def replace_products_link(content):
    """替换 Products 链接为下拉菜单"""
    if 'nav-dropdown-trigger">Products</a>' in content:
        return content, False  # 已存在
    
    # 匹配各种形式的 Products 链接
    patterns = [
        # 有 active 的
        (r'<a\s+href="[^"]*PRODUCTS[^"]*"\s+class="active"[^>]*>Products</a>', ' active'),
        # 没有 active 的
        (r'<a\s+href="[^"]*PRODUCTS[^"]*"[^>]*>Products</a>', ''),
    ]
    
    for pattern, active_class in patterns:
        match = re.search(pattern, content)
        if match:
            replacement = PRODUCTS_DROPDOWN.format(active_class=active_class)
            new_content = content[:match.start()] + replacement + content[match.end():]
            return new_content, True
    
    return content, False

def process_file(filepath):
    """处理单个文件"""
    # 尝试多种编码
    content = None
    used_encoding = None
    for encoding in ['utf-8', 'gbk', 'gb2312', 'latin-1']:
        try:
            with open(filepath, 'r', encoding=encoding) as f:
                content = f.read()
            used_encoding = encoding
            break
        except UnicodeDecodeError:
            continue
    
    if content is None:
        return ['ERROR: cannot decode']
    
    changes = []
    
    # 注入 CSS
    content, css_changed = inject_css(content)
    if css_changed:
        changes.append('CSS')
    
    # 替换 Science
    content, science_changed = replace_science_link(content)
    if science_changed:
        changes.append('Science')
    
    # 替换 Products
    content, products_changed = replace_products_link(content)
    if products_changed:
        changes.append('Products')
    
    if changes:
        with open(filepath, 'w', encoding=used_encoding) as f:
            f.write(content)
    
    return changes

def main():
    base_dir = Path(r'D:\CODEX\LAUCH VERSION\WEBSITE\pages')
    
    # 排除 admin 目录
    exclude_dirs = ['admin']
    
    files_processed = 0
    files_changed = 0
    
    for root, dirs, files in os.walk(base_dir):
        # 排除目录
        dirs[:] = [d for d in dirs if d not in exclude_dirs]
        
        for filename in files:
            if not filename.endswith('.html'):
                continue
            
            filepath = os.path.join(root, filename)
            rel_path = os.path.relpath(filepath, base_dir)
            
            # 跳过根目录的 index.html（首页已完成）
            if rel_path == 'index.html':
                continue
            
            files_processed += 1
            changes = process_file(filepath)
            
            if changes:
                files_changed += 1
                print(f"✓ {rel_path}: {', '.join(changes)}")
            else:
                print(f"- {rel_path}: no changes")
    
    print(f"\n处理完成: {files_processed} 个文件, {files_changed} 个已修改")

if __name__ == '__main__':
    main()

#!/usr/bin/env python3
"""
修复导航栏 logo 的 style 属性位置问题
将 <img ...> style="height:28px;"> 改为 <img ... style="height:28px;">
"""

import os
import re
from pathlib import Path

def fix_logo_style(content):
    """修复 logo 的 style 属性位置"""
    # 匹配模式：<img ...> style="height:28px;">
    # 需要把 style 移到 img 标签内
    pattern = r'(<img\s+[^>]*?)>\s*style="height:28px;"(>)'
    
    def replacer(match):
        img_tag = match.group(1)
        closing = match.group(2)
        # 把 style 插入到 img 标签内，在 > 之前
        return img_tag + ' style="height:28px;"' + closing
    
    new_content, count = re.subn(pattern, replacer, content)
    return new_content, count

def process_file(filepath):
    """处理单个文件"""
    for encoding in ['utf-8', 'gbk', 'gb2312', 'latin-1']:
        try:
            with open(filepath, 'r', encoding=encoding) as f:
                content = f.read()
            used_encoding = encoding
            break
        except UnicodeDecodeError:
            continue
    else:
        return 0
    
    new_content, count = fix_logo_style(content)
    
    if count > 0:
        with open(filepath, 'w', encoding=used_encoding) as f:
            f.write(new_content)
    
    return count

def main():
    base_dir = Path(r'D:\CODEX\LAUCH VERSION\WEBSITE\pages')
    
    files_processed = 0
    files_fixed = 0
    total_fixes = 0
    
    for root, dirs, files in os.walk(base_dir):
        for filename in files:
            if not filename.endswith('.html'):
                continue
            
            filepath = os.path.join(root, filename)
            rel_path = os.path.relpath(filepath, base_dir)
            
            files_processed += 1
            count = process_file(filepath)
            
            if count > 0:
                files_fixed += 1
                total_fixes += count
                print(f"✓ {rel_path}: {count} 处修复")
    
    print(f"\n处理完成: {files_processed} 个文件, {files_fixed} 个已修复, 共 {total_fixes} 处")

if __name__ == '__main__':
    main()

import os, re
from urllib.parse import unquote

# 收集所有 HTML 文件
html_files = []
for root, dirs, files in os.walk('pages'):
    for f in files:
        if f.endswith('.html'):
            html_files.append(os.path.join(root, f))
html_files.append('index.html')

print(f"Total HTML files: {len(html_files)}")
print()

site_root = os.getcwd()
broken = []

for html_file in html_files:
    html_dir = os.path.dirname(html_file)
    with open(html_file, encoding='utf-8', errors='ignore') as f:
        content = f.read()
    
    # 找所有图片引用
    img_refs = re.findall(r'(src|href|poster)="([^"]*\.(webp|jpg|jpeg|png|gif|svg))"', content, re.IGNORECASE)
    
    for match in img_refs:
        attr = match[0]
        img_path = match[1]
        
        if img_path.startswith(('http://', 'https://', '//', 'data:')):
            continue
        
        # 解析实际路径
        if img_path.startswith('/'):
            real_path = site_root + img_path
        else:
            real_path = os.path.normpath(os.path.join(site_root, html_dir, img_path))
        
        real_path = unquote(real_path)
        
        if not os.path.exists(real_path):
            broken.append((html_file, attr, img_path, real_path))

if not broken:
    print("✅ 0 broken image references found! All images exist.")
else:
    print(f"❌ {len(broken)} broken image references:\n")
    for html_file, attr, img_path, real_path in broken:
        print(f"📄 {html_file}")
        print(f"   {attr}=\"{img_path}\"")
        print(f"   ❌ {real_path}")
        print()
PYEOF
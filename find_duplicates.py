import os
import re

root_dir = r'D:\CODEX\LAUCH VERSION\WEBSITE'

titles = {}
descriptions = {}

for dirpath, dirnames, filenames in os.walk(root_dir):
    for filename in filenames:
        if filename.endswith('.html'):
            filepath = os.path.join(dirpath, filename)
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                title_match = re.search(r'<title>(.*?)</title>', content, re.IGNORECASE)
                if title_match:
                    title = title_match.group(1).strip()
                    if title:
                        if title not in titles:
                            titles[title] = []
                        titles[title].append(filepath)
                
                desc_match = re.search(r'<meta\s+name=["\']description["\']\s+content=["\'](.*?)["\']', content, re.IGNORECASE)
                if desc_match:
                    desc = desc_match.group(1).strip()
                    if desc:
                        if desc not in descriptions:
                            descriptions[desc] = []
                        descriptions[desc].append(filepath)
            except:
                pass

print('=== Duplicate Title Tags ===')
for title, files in titles.items():
    if len(files) > 1:
        print(f'Title: {title}')
        for f in files:
            print(f'  {f}')
        print()

print('=== Duplicate Meta Descriptions ===')
for desc, files in descriptions.items():
    if len(files) > 1:
        print(f'Description: {desc[:100]}...')
        for f in files:
            print(f'  {f}')
        print()

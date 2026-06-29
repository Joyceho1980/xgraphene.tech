import re

files = [
    r'D:\CODEX\LAUCH VERSION\WEBSITE\pages\ABOUT\AboutMission.html',
    r'D:\CODEX\LAUCH VERSION\WEBSITE\pages\ABOUT\AboutPhilosophy.html',
    r'D:\CODEX\LAUCH VERSION\WEBSITE\pages\NEWS\Product-News\xihe-CABIN-standard-module-release.html',
    r'D:\CODEX\LAUCH VERSION\WEBSITE\pages\SCIENCE\Mechanism.html',
]

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    match = re.search(r'<meta\s+name=["\']description["\']\s+content=["\'](.*?)["\']', content, re.IGNORECASE)
    if match:
        print(f'=== {filepath} ===')
        desc = match.group(1)
        print(f'{desc[:200]}...' if len(desc) > 200 else desc)
        print()
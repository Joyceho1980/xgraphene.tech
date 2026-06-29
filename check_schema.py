import re

files = [
    r'D:\CODEX\LAUCH VERSION\WEBSITE\pages\ABOUT\AboutOrigin.html',
    r'D:\CODEX\LAUCH VERSION\WEBSITE\pages\PRODUCTS\FILM\GrapheneFilm.html',
]

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    matches = re.findall(r'<script type="application/ld\+json">(.*?)</script>', content, re.DOTALL)
    for m in matches:
        print(f'=== {filepath} ===')
        print(m[:800])
        print()

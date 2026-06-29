import os

root_dir = r'D:\CODEX\LAUCH VERSION\WEBSITE'

corrupted_files = []

for dirpath, dirnames, filenames in os.walk(root_dir):
    for filename in filenames:
        if filename.endswith('.html'):
            filepath = os.path.join(dirpath, filename)
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                if '?<!DOCTYPE' in content:
                    corrupted_files.append(filepath)
            except:
                pass

print(f'Found {len(corrupted_files)} files with DOCTYPE corruption:')
for f in corrupted_files:
    print(f'  {f}')

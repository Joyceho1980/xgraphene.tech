import os

root_dir = r'D:\CODEX\LAUCH VERSION\WEBSITE'

fixed_count = 0

for dirpath, dirnames, filenames in os.walk(root_dir):
    for filename in filenames:
        if filename.endswith('.html'):
            filepath = os.path.join(dirpath, filename)
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                if '?<!DOCTYPE' in content:
                    new_content = content.replace('?<!DOCTYPE', '<!DOCTYPE')
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    fixed_count += 1
                    print(f'Fixed: {filepath}')
            except Exception as e:
                print(f'Error: {filepath} - {e}')

print(f'\nTotal fixed: {fixed_count} files')

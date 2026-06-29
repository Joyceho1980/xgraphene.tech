import os
import hashlib

root_dir = r'D:\CODEX\LAUCH VERSION\WEBSITE'

content_hashes = {}

for dirpath, dirnames, filenames in os.walk(root_dir):
    for filename in filenames:
        if filename.endswith('.html'):
            filepath = os.path.join(dirpath, filename)
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                clean_content = content.replace('\n', '').replace('\r', '').replace(' ', '')
                content_hash = hashlib.md5(clean_content.encode()).hexdigest()
                
                if content_hash not in content_hashes:
                    content_hashes[content_hash] = []
                content_hashes[content_hash].append(filepath)
            except:
                pass

duplicates = {k: v for k, v in content_hashes.items() if len(v) > 1}

print(f'Found {len(duplicates)} duplicate content groups:')
for hash_val, files in duplicates.items():
    print(f'\n=== Group (hash: {hash_val[:8]}) ===')
    for f in files:
        print(f'  {f}')

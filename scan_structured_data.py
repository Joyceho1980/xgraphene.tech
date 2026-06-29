import os
import json

root_dir = r'D:\CODEX\LAUCH VERSION\WEBSITE'

pages_with_schema = []
pages_with_invalid_schema = []

for dirpath, dirnames, filenames in os.walk(root_dir):
    for filename in filenames:
        if filename.endswith('.html'):
            filepath = os.path.join(dirpath, filename)
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                if 'application/ld+json' in content:
                    pages_with_schema.append(filepath)
                    
                    start_idx = content.find('application/ld+json')
                    if start_idx != -1:
                        brace_start = content.find('{', start_idx)
                        if brace_start != -1:
                            brace_count = 0
                            end_idx = brace_start
                            for i in range(brace_start, len(content)):
                                if content[i] == '{':
                                    brace_count += 1
                                elif content[i] == '}':
                                    brace_count -= 1
                                    if brace_count == 0:
                                        end_idx = i + 1
                                        break
                            
                            json_str = content[brace_start:end_idx]
                            try:
                                json.loads(json_str)
                            except json.JSONDecodeError:
                                pages_with_invalid_schema.append(filepath)
            except Exception as e:
                pass

print(f'Pages with schema: {len(pages_with_schema)}')
print(f'Pages with invalid schema: {len(pages_with_invalid_schema)}')
if pages_with_invalid_schema:
    print('\nInvalid schema pages:')
    for f in pages_with_invalid_schema:
        print(f'  {f}')

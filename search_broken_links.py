import os

root_dir = r'D:\CODEX\LAUCH VERSION\WEBSITE'

patterns = [
    '/SCIENCE/Microcirculation/',
    '/SCIENCE/Recovery/',
    '/SCIENCE/Sleep/',
    '/SCIENCE/cellular-energy/',
    '/SCIENCE/graphene-fir/',
    '/SCIENCE/Inflammation/',
    '/SCIENCE/Fatigue/',
    '/SCIENCE/healthy-aging/',
    '/SCIENCE/Mitochondria/',
    '/SCIENCE/oxidative-stress/',
    '/SCIENCE/Clinical-Evidence/',
    '/SCIENCE/Metabolism/',
    '/SCIENCE/Technology-Platform/',
    '/SCIENCE/Research-Library/',
]

for pattern in patterns:
    files_found = []
    for dirpath, dirnames, filenames in os.walk(root_dir):
        for filename in filenames:
            if filename.endswith('.html'):
                filepath = os.path.join(dirpath, filename)
                try:
                    with open(filepath, 'r', encoding='utf-8') as f:
                        content = f.read()
                    if pattern in content:
                        files_found.append(filepath)
                except:
                    pass
    if files_found:
        print(f'=== {pattern} ===')
        for f in files_found[:5]:
            print(f'  {f}')
        print(f'  Total: {len(files_found)}')

import os

root_dir = r'D:\CODEX\LAUCH VERSION\WEBSITE'

replacements = [
    ('/SCIENCE/Microcirculation/', '/SCIENCE/KNOWLEDGE/Microcirculation/'),
    ('/SCIENCE/Recovery/', '/SCIENCE/KNOWLEDGE/Recovery/'),
    ('/SCIENCE/Sleep/', '/SCIENCE/KNOWLEDGE/Sleep/'),
    ('/SCIENCE/cellular-energy/', '/SCIENCE/KNOWLEDGE/cellular-energy/'),
    ('/SCIENCE/graphene-fir/', '/SCIENCE/KNOWLEDGE/graphene-fir/'),
    ('/SCIENCE/Inflammation/', '/SCIENCE/KNOWLEDGE/Inflammation/'),
    ('/SCIENCE/Fatigue/', '/SCIENCE/KNOWLEDGE/Fatigue/'),
    ('/SCIENCE/healthy-aging/', '/SCIENCE/KNOWLEDGE/healthy-aging/'),
    ('/SCIENCE/Oxidative-Stress/', '/SCIENCE/KNOWLEDGE/oxidative-stress/'),
    ('/SCIENCE/Mitochondria/', '/SCIENCE/KNOWLEDGE/Mitochondria/'),
]

total_changes = 0
files_changed = 0

for old_path, new_path in replacements:
    changes = 0
    for dirpath, dirnames, filenames in os.walk(root_dir):
        for filename in filenames:
            if filename.endswith('.html'):
                filepath = os.path.join(dirpath, filename)
                try:
                    with open(filepath, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    if old_path in content:
                        new_content = content.replace(old_path, new_path)
                        if new_content != content:
                            with open(filepath, 'w', encoding='utf-8') as f:
                                f.write(new_content)
                            changes += 1
                            files_changed += 1
                except Exception as e:
                    pass
    if changes > 0:
        total_changes += changes
        print(f'{old_path} → {new_path}: {changes} changes')

print(f'\nTotal: {total_changes} changes in {files_changed} files')

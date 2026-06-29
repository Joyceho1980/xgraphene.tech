"""Fix JSON-LD blocks with Windows path backslash issues."""
import re, os, sys

files = [
    'WEBSITE/pages/SCIENCE/KNOWLEDGE/cellular-energy/atp-study.html',
    'WEBSITE/pages/SCIENCE/KNOWLEDGE/Clinical-Evidence/pku-clinical-trial.html',
    'WEBSITE/pages/SCIENCE/KNOWLEDGE/graphene-fir/comparison.html',
    'WEBSITE/pages/SCIENCE/KNOWLEDGE/graphene-fir/elderly-anxiety-cognition-rct-2024.html',
    'WEBSITE/pages/SCIENCE/KNOWLEDGE/graphene-fir/how-to-evaluate-fir-heating-film.html',
    'WEBSITE/pages/SCIENCE/KNOWLEDGE/graphene-fir/ontology.html',
    'WEBSITE/pages/SCIENCE/KNOWLEDGE/graphene-fir/RESONANCE/alpha-wave-zhejiang-2022.html',
    'WEBSITE/pages/SCIENCE/KNOWLEDGE/graphene-fir/RESONANCE/wu-wei-resonance.html',
    'WEBSITE/pages/SCIENCE/KNOWLEDGE/graphene-fir/what-is-emissivity.html',
    'WEBSITE/pages/SCIENCE/KNOWLEDGE/graphene-fir/what-is-far-infrared-radiant-efficiency.html',
    'WEBSITE/pages/SCIENCE/KNOWLEDGE/graphene-fir/wu-wei-resonance.html',
    'WEBSITE/pages/SCIENCE/KNOWLEDGE/Inflammation/beyond-thermal-comfort-biological-recovery.html',
    'WEBSITE/pages/SCIENCE/KNOWLEDGE/Microcirculation/graphene-fir-microcirculation.html',
]

for fpath in files:
    content = open(fpath, 'r', encoding='utf-8', errors='ignore').read()
    old = content

    def fix_json_block(m):
        json_str = m.group(1)
        # Replace Windows backslash paths: d:\CODEX\... becomes d:/CODEX/...
        json_str = re.sub(r'([a-zA-Z]):\\', r'\1:/', json_str)
        # Also fix any remaining lone backslashes (except intentional \n \t etc)
        # Convert \W, \C etc. to forward slash paths
        json_str = json_str.replace('\\', '/')
        return '<script type="application/ld+json">' + json_str + '</script>'

    content = re.sub(
        r'<script\s+type="application/ld\+json"[^>]*>(.*?)</script>',
        fix_json_block, content, flags=re.DOTALL
    )

    if content != old:
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'FIXED: {fpath}')
    else:
        print(f'NO CHANGE: {fpath}')

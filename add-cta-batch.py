import os
import re

CTA_B_BLOCK = '''
        <!-- CTA Block -->
        <div class="cta-block" style="text-align:center; margin:3rem 0; padding:1.5rem; border-top:1px solid rgba(212,175,55,0.2);">
          <p style="color:#888; font-size:0.9rem; margin-bottom:0.75rem;">
            Ready to explore graphene FIR integration?
          </p>
          <a href="/partnership.html" class="btn-cta" style="
            display:inline-block;
            background:linear-gradient(135deg, #D4AF37, #C09A2B);
            color:#0A0A0A;
            padding:0.75rem 2rem;
            border-radius:4px;
            text-decoration:none;
            font-weight:600;
            font-size:0.95rem;
            letter-spacing:0.5px;
          ">
            Request Technical Data Sheet →
          </a>
        </div>
'''

CTA_D_BLOCK = '''
        <!-- CTA Block -->
        <div class="cta-block" style="text-align:center; margin:3rem 0; padding:1.5rem; border-top:1px solid rgba(212,175,55,0.2);">
          <p style="color:#888; font-size:0.9rem; margin-bottom:0.75rem;">
            Ready to explore graphene FIR integration?
          </p>
          <a href="/partnership.html" class="btn-cta" style="
            display:inline-block;
            background:linear-gradient(135deg, #D4AF37, #C09A2B);
            color:#0A0A0A;
            padding:0.75rem 2rem;
            border-radius:4px;
            text-decoration:none;
            font-weight:600;
            font-size:0.95rem;
            letter-spacing:0.5px;
          ">
            Explore OEM Integration →
          </a>
        </div>
'''

def process_file(filepath, cta_type):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if 'cta-block' in content:
            print(f"  [SKIP] {filepath} - already has CTA")
            return
        
        kg_nav_pattern = r'(<div class="kg-navigation"|<!-- ============ WHERE THIS FITS)'
        match = re.search(kg_nav_pattern, content)
        
        if match:
            insert_pos = match.start()
            new_content = content[:insert_pos] + (CTA_B_BLOCK if cta_type == 'B' else CTA_D_BLOCK) + content[insert_pos:]
        else:
            article_end_pattern = r'(<footer>|\s*</article>)'
            match = re.search(article_end_pattern, content)
            if match:
                insert_pos = match.start()
                new_content = content[:insert_pos] + (CTA_B_BLOCK if cta_type == 'B' else CTA_D_BLOCK) + content[insert_pos:]
            else:
                print(f"  [SKIP] {filepath} - could not find insertion point")
                return
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"  [OK] {filepath}")
    except Exception as e:
        print(f"  [ERROR] {filepath}: {e}")

def main():
    base_path = r"D:\CODEX\LAUCH VERSION\WEBSITE\pages"
    
    science_dirs = [
        os.path.join(base_path, "SCIENCE", "KNOWLEDGE", "graphene-fir"),
        os.path.join(base_path, "SCIENCE", "KNOWLEDGE", "Mitochondria"),
        os.path.join(base_path, "SCIENCE", "KNOWLEDGE", "cellular-energy"),
        os.path.join(base_path, "SCIENCE", "KNOWLEDGE", "Sleep"),
        os.path.join(base_path, "SCIENCE", "KNOWLEDGE", "Recovery"),
        os.path.join(base_path, "SCIENCE", "KNOWLEDGE", "Inflammation"),
        os.path.join(base_path, "SCIENCE", "KNOWLEDGE", "Microcirculation"),
        os.path.join(base_path, "SCIENCE", "KNOWLEDGE", "Fatigue"),
        os.path.join(base_path, "SCIENCE", "KNOWLEDGE", "healthy-aging"),
        os.path.join(base_path, "SCIENCE", "KNOWLEDGE", "oxidative-stress"),
        os.path.join(base_path, "SCIENCE", "KNOWLEDGE", "Clinical-Evidence"),
    ]
    
    news_dirs = [
        os.path.join(base_path, "NEWS"),
        os.path.join(base_path, "NEWS", "Company-Updates"),
        os.path.join(base_path, "NEWS", "Industry-News"),
        os.path.join(base_path, "NEWS", "Product-News"),
    ]
    
    print("=== Processing B-grade articles (SCIENCE/KNOWLEDGE) ===")
    for dir_path in science_dirs:
        if not os.path.exists(dir_path):
            continue
        for filename in os.listdir(dir_path):
            if filename.endswith('.html') and not filename.startswith('index'):
                filepath = os.path.join(dir_path, filename)
                process_file(filepath, 'B')
    
    print("\n=== Processing D-grade articles (NEWS) ===")
    for dir_path in news_dirs:
        if not os.path.exists(dir_path):
            continue
        for filename in os.listdir(dir_path):
            if filename.endswith('.html') and not filename.startswith('index'):
                filepath = os.path.join(dir_path, filename)
                process_file(filepath, 'D')
    
    print("\nDone!")

if __name__ == "__main__":
    main()

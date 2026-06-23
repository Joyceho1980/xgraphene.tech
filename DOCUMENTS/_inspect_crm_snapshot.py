import sqlite3
import json
from pathlib import Path

db_path = Path(r"D:\CODEX\XIHE-CRM\database.db")
conn = sqlite3.connect(db_path)
conn.row_factory = sqlite3.Row
cur = conn.cursor()

tables = [row[0] for row in cur.execute("SELECT name FROM sqlite_master WHERE type='table' ORDER BY name").fetchall()]
print("TABLES")
print(json.dumps(tables, ensure_ascii=False, indent=2))

for table in ["customers", "follow_ups", "emails", "materials", "email_templates", "keyword_archives"]:
    try:
        cols = cur.execute(f"PRAGMA table_info({table})").fetchall()
    except sqlite3.OperationalError:
        continue
    print(f"\nCOLUMNS:{table}")
    print(json.dumps([dict(r) for r in cols], ensure_ascii=False, indent=2))

def fetch(query, params=()):
    rows = cur.execute(query, params).fetchall()
    return [dict(r) for r in rows]

customers = fetch(
    """
    SELECT id, company_name, country, city, industry, application_scene, decision_maker,
           position, email, phone, linkedin, website, existing_equipment,
           pain_points, xihe_advantage, priority, status, next_follow_up,
           notes, tags, tech_stack, academic_level, fit_score, segment,
           account_type, buyer_type, business_model, facility_stage, buying_trigger,
           economic_justification, product_fit, outreach_angle, keyword_cluster,
           priority_level, recon_brief, created_at, updated_at
    FROM customers
    ORDER BY
      CASE priority
        WHEN 'High' THEN 0
        WHEN 'Medium' THEN 1
        WHEN 'Low' THEN 2
        ELSE 9
      END,
      CASE status
        WHEN 'To Contact' THEN 0
        WHEN 'Contacted' THEN 1
        WHEN 'Negotiating' THEN 2
        WHEN 'Trial' THEN 3
        WHEN 'Won' THEN 4
        WHEN 'Paused' THEN 5
        ELSE 9
      END,
      COALESCE(fit_score, 0) DESC,
      company_name ASC
    LIMIT 80
    """
)

print("\nCUSTOMERS_TOP")
print(json.dumps(customers, ensure_ascii=False, indent=2))

focus = [
    row for row in customers
    if (row.get("priority") == "High" or row.get("priority_level") in {"Hot", "Warm"} or (row.get("fit_score") or 0) >= 75)
    and row.get("decision_maker")
]
focus = focus[:20]

print("\nFOCUS_ACCOUNTS")
print(json.dumps(focus, ensure_ascii=False, indent=2))

follow_ups = fetch(
    """
    SELECT f.id, f.customer_id, c.company_name, f.date, f.action, f.result, f.next_step, f.material_sent, f.created_at, f.next_follow_date, f.channel, f.follow_up_stage, f.related_email_id
    FROM follow_ups f
    LEFT JOIN customers c ON c.id = f.customer_id
    ORDER BY COALESCE(f.next_follow_date, f.date, f.created_at) DESC
    LIMIT 40
    """
)
print("\nFOLLOW_UPS")
print(json.dumps(follow_ups, ensure_ascii=False, indent=2))

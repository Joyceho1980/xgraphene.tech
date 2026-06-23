import sqlite3
import json
from pathlib import Path

db_path = Path(r"D:\CODEX\XIHE-CRM\database.db")
conn = sqlite3.connect(db_path)
conn.row_factory = sqlite3.Row
cur = conn.cursor()

rows = cur.execute(
    """
    SELECT id, company_name, country, city, industry, decision_maker, position, email, phone, linkedin, website,
           existing_equipment, pain_points, xihe_advantage, priority, status, next_follow_up, notes, tags,
           segment, account_type, buyer_type, business_model, facility_stage, buying_trigger, economic_justification,
           product_fit, outreach_angle, fit_score, priority_level, recon_brief
    FROM customers
    ORDER BY
      CASE priority
        WHEN 'High' THEN 0
        WHEN 'Medium' THEN 1
        WHEN 'Low' THEN 2
        ELSE 9
      END,
      COALESCE(fit_score, 0) DESC,
      company_name ASC
    """
).fetchall()

customers = [dict(r) for r in rows]

focus = []
for c in customers:
    if not c.get("decision_maker"):
        continue
    if c.get("priority") == "High" or c.get("priority_level") in {"Hot", "Warm"} or (c.get("fit_score") or 0) >= 75:
        focus.append(c)

print("FOCUS_COUNT", len(focus))
print(json.dumps([
    {
        "company_name": c.get("company_name"),
        "decision_maker": c.get("decision_maker"),
        "position": c.get("position"),
        "country": c.get("country"),
        "city": c.get("city"),
        "priority": c.get("priority"),
        "status": c.get("status"),
        "next_follow_up": c.get("next_follow_up"),
        "linkedin": c.get("linkedin"),
        "website": c.get("website"),
        "pain_points": c.get("pain_points"),
        "outreach_angle": c.get("outreach_angle"),
        "fit_score": c.get("fit_score"),
        "business_model": c.get("business_model"),
        "buying_trigger": c.get("buying_trigger"),
    }
    for c in focus[:20]
], ensure_ascii=False, indent=2))

missing_linkedin = [c for c in focus if not c.get("linkedin")]
missing_email = [c for c in focus if not c.get("email")]
print("\nMISSING_LINKEDIN", len(missing_linkedin))
print("\nMISSING_EMAIL", len(missing_email))

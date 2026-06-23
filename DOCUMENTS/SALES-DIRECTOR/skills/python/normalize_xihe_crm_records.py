from __future__ import annotations

import shutil
import sqlite3
from datetime import datetime
from pathlib import Path


DB_PATH = Path(r"D:\CODEX\XIHE-CRM\database.db")
BACKUP_DIR = Path(r"D:\CODEX\LAUCH VERSION\DOCUMENTS\CRM-BACKUPS")


CUSTOMER_UPDATES: dict[int, dict[str, str | None]] = {
    2: {
        "country": "United Kingdom",
        "city": "London",
        "industry": "Medical Rehabilitation",
        "status": "To Contact",
        "priority": "High",
        "tags": "#SpineRehab,#PT",
        "pain_points": "Spine and radiculopathy patients need deeper, non-drug recovery support beyond surface heat. Home-use adherence also matters in longer rehabilitation cycles.",
        "xihe_advantage": "XIHE can support a deeper recovery environment for spine rehab and home continuity, while giving the practice a stronger science-led technology story.",
    },
    3: {
        "country": "United Kingdom",
        "city": "London",
        "industry": "Medical Rehabilitation",
        "status": "To Contact",
        "priority": "High",
        "tags": "#SpineRehab,#PT",
        "pain_points": "Scoliosis and post-op spine rehab often require long recovery cycles, better inflammation support, and stronger home adherence.",
        "xihe_advantage": "XIHE can complement clinic care with a recovery tool positioned around comfort, continuity, and post-procedure support.",
    },
    4: {
        "country": "United Kingdom",
        "city": "London",
        "industry": "Medical Rehabilitation",
        "status": "To Contact",
        "priority": "Medium",
        "tags": "#SpineRehab,#PT",
        "pain_points": "Early-stage private practitioners need stronger credibility, clearer differentiation, and a home-use recovery tool that helps patient compliance.",
        "xihe_advantage": "XIHE can add a more credible technology story and a simple recovery add-on that supports patient trust and continuity.",
    },
    5: {
        "country": "United Kingdom",
        "city": "London",
        "industry": "Medical Rehabilitation",
        "status": "To Contact",
        "priority": "High",
        "tags": "#SpineRehab,#PT",
        "pain_points": "Non-surgical spine care needs better differentiation and deeper recovery support than standard surface-heat tools.",
        "xihe_advantage": "XIHE can be positioned as a non-invasive graphene FIR recovery option that supports spine rehab, patient compliance, and clinical differentiation.",
    },
    6: {
        "country": "United Kingdom",
        "city": "London",
        "industry": "Medical Rehabilitation",
        "status": "To Contact",
        "priority": "High",
        "tags": "#SpineRehab,#SportsRehab",
        "pain_points": "Sports recovery and amputee care both need better tissue comfort, circulation support, and a stronger advanced-recovery story.",
        "xihe_advantage": "XIHE can support premium recovery positioning around deeper recovery workflows, athlete care, and comfort-led tissue support.",
    },
    7: {
        "country": "United Kingdom",
        "city": "London",
        "industry": "Medical Rehabilitation",
        "status": "To Contact",
        "priority": "High",
        "tags": "#SportsMedicine,#PostOp,#ElitePerformance",
        "pain_points": "Elite post-op recovery demands credibility, differentiated technology, and a recovery environment that fits high-performance patients.",
        "xihe_advantage": "XIHE can be positioned beside post-op rehab as a premium recovery environment that supports differentiation and advanced-care storytelling.",
    },
    8: {
        "country": "United Kingdom",
        "city": "London",
        "industry": "Medical Rehabilitation",
        "status": "To Contact",
        "priority": "High",
        "tags": "#PT,#SportsMedicine,#HomeRecovery",
        "pain_points": "There is a gap between in-clinic results and home recovery, especially for premium rehab patients who need continuity.",
        "xihe_advantage": "XIHE can extend the recovery experience beyond the clinic and support a higher-value home or post-session recovery workflow.",
    },
    9: {
        "country": "United Kingdom",
        "city": "London",
        "industry": "Medical Rehabilitation",
        "status": "To Contact",
        "priority": "High",
        "tags": "#SportsMedicine,#EvidenceBased,#Recovery",
        "pain_points": "Evidence-driven sports medicine groups need credible differentiation rather than another generic modality.",
        "xihe_advantage": "XIHE can be introduced as a differentiated recovery environment with a stronger scientific positioning beside existing sports medicine services.",
    },
    10: {
        "country": "Germany / United Kingdom",
        "city": "",
        "industry": "Wellness & Recovery",
        "status": "To Contact",
        "priority": "High",
        "tags": "#LuxuryWellness,#Longevity,#Recovery",
        "pain_points": "Luxury longevity clients expect novelty, premium recovery experiences, and advanced wellness technologies beyond familiar red light or standard heat products.",
        "xihe_advantage": "XIHE can support a signature graphene FIR recovery environment aligned with high-end longevity and preventive wellness positioning.",
    },
    11: {
        "country": "United Kingdom",
        "city": "London",
        "industry": "Medical Rehabilitation",
        "status": "To Contact",
        "priority": "High",
        "tags": "#Aesthetics,#HairTransplant,#PostProcedure",
        "pain_points": "Post-hair-transplant patients care about recovery comfort, anxiety reduction, and a more complete premium aftercare package.",
        "xihe_advantage": "XIHE can fit as a recovery-support add-on within post-procedure care, helping the clinic package a more reassuring premium aftercare experience.",
    },
    12: {
        "country": "United States",
        "industry": "Medical Rehabilitation",
        "status": "To Contact",
        "priority": "High",
    },
    13: {
        "country": "United States",
        "industry": "Wellness & Recovery",
        "status": "To Contact",
        "priority": "High",
    },
    14: {
        "country": "United States",
        "industry": "Medical Rehabilitation",
        "status": "To Contact",
        "priority": "High",
    },
    15: {
        "country": "United States",
        "industry": "Medical Rehabilitation",
        "status": "To Contact",
        "priority": "High",
    },
    16: {
        "country": "United States",
        "industry": "Medical Rehabilitation",
        "status": "To Contact",
        "priority": "High",
    },
    17: {
        "country": "Canada",
        "industry": "Wellness & Recovery",
        "status": "To Contact",
        "priority": "Medium",
    },
    18: {
        "country": "Canada",
        "industry": "Wellness & Recovery",
        "status": "To Contact",
        "priority": "Medium",
    },
    19: {
        "country": "United States",
        "industry": "Wellness & Recovery",
        "status": "To Contact",
        "priority": "Medium",
    },
    20: {
        "country": "United States",
        "industry": "Senior Care",
        "status": "To Contact",
        "priority": "Medium",
    },
    21: {
        "country": "United States",
        "industry": "Senior Care",
        "status": "To Contact",
        "priority": "Medium",
    },
    22: {
        "country": "United States",
        "industry": "Wellness & Recovery",
        "status": "To Contact",
        "priority": "Medium",
    },
}


def backup_database() -> Path:
    BACKUP_DIR.mkdir(parents=True, exist_ok=True)
    backup_path = BACKUP_DIR / f"xihe-crm-before-normalize-{datetime.now().strftime('%Y%m%d-%H%M%S')}.db"
    shutil.copy2(DB_PATH, backup_path)
    return backup_path


def apply_updates() -> int:
    conn = sqlite3.connect(DB_PATH)
    now = datetime.now().isoformat(timespec="seconds")
    updated = 0
    try:
        for customer_id, fields in CUSTOMER_UPDATES.items():
            clean_fields = {key: value for key, value in fields.items()}
            clean_fields["updated_at"] = now
            set_clause = ", ".join(f"{key} = ?" for key in clean_fields.keys())
            values = list(clean_fields.values()) + [customer_id]
            conn.execute(f"UPDATE customers SET {set_clause} WHERE id = ?", values)
            updated += 1
        conn.commit()
    finally:
        conn.close()
    return updated


def main():
    backup_path = backup_database()
    updated = apply_updates()
    print(f"Backup created: {backup_path}")
    print(f"Customers normalized: {updated}")


if __name__ == "__main__":
    main()

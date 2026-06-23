from pathlib import Path


ROOT = Path(r"D:\CODEX\LAUCH VERSION")
SALES_ROOT = ROOT / "DOCUMENTS" / "SALES-DIRECTOR"
SKILL_FILE = ROOT / ".codex" / "skills" / "xihe-sales-outreach" / "SKILL.md"


def print_block(title, lines):
    print(f"\n{title}")
    print("-" * len(title))
    for line in lines:
        print(line)


def main():
    print("XIHE Sales Skill Launcher")
    print("=========================")

    print_block(
        "Active Skill",
        [
            "xihe-sales-outreach",
            f"Skill file: {SKILL_FILE}",
            f"Skill exists: {'yes' if SKILL_FILE.exists() else 'no'}",
        ],
    )

    print_block(
        "Core Execution Order",
        [
            "1. Pick market and segment",
            "2. Build account pain hypothesis",
            "3. Run Google / official-site contact discovery",
            "4. Identify named route or best available route",
            "5. Choose XIHE complementary angle",
            "6. Draft human outreach email",
            "7. Save notes to documents and CRM",
        ],
    )

    print_block(
        "Key Positioning Rules",
        [
            "Lead with buyer pain, not product specs.",
            "Position XIHE as complementary, not replacing PEMF, cryotherapy, or red light.",
            "Do not lead with high-risk mechanism claims.",
            "Use a small amount of proof, not a paper dump.",
        ],
    )

    print_block(
        "Reference Files",
        [
            str(SALES_ROOT / "Country-Painpoint-Matrix-2026-06-09.md"),
            str(SALES_ROOT / "First-Customer-Runbook-2026-06-09.md"),
            str(SALES_ROOT / "prospecting" / "Google-Dorking-Email-Hunting-Playbook-2026-06-10.md"),
            str(SALES_ROOT / "prospecting" / "Google-Dorking-Verification-Run-2026-06-10.md"),
            str(SALES_ROOT / "prospecting" / "PEMF-Adjacent-Prospecting-Strategy-2026-06-09.md"),
        ],
    )

    print_block(
        "Current Best First Targets",
        [
            "Apto Physical Therapy",
            "Oasis Cryo & Health Spa",
            "Phorm Fitness / Fire & Ice Wellness Center",
            "Bionic Barbell",
            "Red Light Recovery",
        ],
    )


if __name__ == "__main__":
    main()

from pathlib import Path
from urllib.parse import quote


def main() -> None:
    folder = Path(r"D:\CODEX\LAUCH VERSION\VISUAL-LIBRARY")
    files = sorted([p for p in folder.iterdir() if p.is_file()])

    rows = []
    for path in files:
        rel = quote(f"../VISUAL-LIBRARY/{path.name}")
        label = path.name
        rows.append(
            f"""
            <figure class="tile">
              <img src="{rel}" alt="{label}">
              <figcaption>{label}</figcaption>
            </figure>
            """
        )

    html = f"""<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>VISUAL LIBRARY CONTACT SHEET</title>
  <style>
    body {{
      margin: 0;
      padding: 24px;
      font-family: Arial, sans-serif;
      background: #111;
      color: #eee;
    }}
    h1 {{
      margin: 0 0 16px;
      font-size: 24px;
    }}
    .grid {{
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 16px;
    }}
    .tile {{
      margin: 0;
      background: #1b1b1b;
      border: 1px solid #333;
      border-radius: 12px;
      overflow: hidden;
    }}
    .tile img {{
      display: block;
      width: 100%;
      height: 220px;
      object-fit: contain;
      background: #000;
    }}
    .tile figcaption {{
      padding: 8px 10px;
      font-size: 12px;
      line-height: 1.35;
      word-break: break-word;
    }}
  </style>
</head>
<body>
  <h1>VISUAL LIBRARY CONTACT SHEET</h1>
  <div class="grid">
    {''.join(rows)}
  </div>
</body>
</html>"""

    out_dir = Path(r"D:\CODEX\LAUCH VERSION\output")
    out_dir.mkdir(parents=True, exist_ok=True)
    out = out_dir / "visual-library-contact-sheet.html"
    out.write_text(html, encoding="utf-8")
    print(out)


if __name__ == "__main__":
    main()

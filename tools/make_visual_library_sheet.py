from pathlib import Path
import math

from PIL import Image, ImageOps, ImageDraw, ImageFont


def main() -> None:
    folder = Path(r"D:\CODEX\LAUCH VERSION\VISUAL-LIBRARY")
    files = sorted([p for p in folder.iterdir() if p.is_file()])

    thumb_w, thumb_h = 320, 220
    label_h = 42
    cols = 4
    rows = math.ceil(len(files) / cols)
    pad = 18

    sheet_w = cols * thumb_w + (cols + 1) * pad
    sheet_h = rows * (thumb_h + label_h) + (rows + 1) * pad
    sheet = Image.new("RGB", (sheet_w, sheet_h), "white")
    draw = ImageDraw.Draw(sheet)
    font = ImageFont.load_default()

    for idx, path in enumerate(files):
        try:
            img = Image.open(path).convert("RGB")
        except Exception:
            continue

        thumb = ImageOps.contain(img, (thumb_w, thumb_h))
        cell_x = pad + (idx % cols) * (thumb_w + pad)
        cell_y = pad + (idx // cols) * (thumb_h + label_h + pad)
        x = cell_x + (thumb_w - thumb.width) // 2
        y = cell_y + (thumb_h - thumb.height) // 2
        sheet.paste(thumb, (x, y))
        draw.rectangle(
            [cell_x, cell_y, cell_x + thumb_w, cell_y + thumb_h + label_h],
            outline="gray",
            width=1,
        )
        label = path.name
        if len(label) > 32:
            label = label[:29] + "..."
        draw.text((cell_x + 4, cell_y + thumb_h + 4), label, fill="black", font=font)

    out = Path(r"C:\tmp\visual-library-contact-sheet.jpg")
    sheet.save(out, quality=92)
    print(out)


if __name__ == "__main__":
    main()

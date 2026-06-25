import importlib.util as u


mods = ["torch", "transformers", "cv2", "easyocr", "pytesseract", "PIL"]
print({m: u.find_spec(m) is not None for m in mods})

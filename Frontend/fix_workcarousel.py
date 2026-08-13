import os

file_path = r"C:\Users\admin\Portfolio\Frontend\src\components\WorkCarousel.jsx"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

new_content = content.replace("#0a0a0f", "#0A1128")

with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_content)

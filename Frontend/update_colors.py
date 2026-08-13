import os
import re

dir_path = r"C:\Users\admin\Portfolio\Frontend\src"

replacements = {
    '#020202': '#0A1128',
    '#050505': '#0A1128',
    '#0B0E14': '#0A1128',
    '#0a0a0a': '#14213d',
    '#00f2ff': '#ffffff',
    '#bc13fe': '#e0e1dd',
    '#ff00c8': '#98c1d9',
    
    # Check for tailwind specific backgrounds if any hardcoded colors are missed
}

for root, _, files in os.walk(dir_path):
    for file in files:
        if file.endswith(".jsx") or file.endswith(".css") or file.endswith(".js"):
            file_path = os.path.join(root, file)
            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()
            
            new_content = content
            for old, new in replacements.items():
                new_content = re.sub(old, new, new_content, flags=re.IGNORECASE)
            
            if new_content != content:
                with open(file_path, "w", encoding="utf-8") as f:
                    f.write(new_content)
                print(f"Updated {file_path}")

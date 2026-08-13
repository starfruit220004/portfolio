import os

dir_path = r"C:\Users\admin\Portfolio\Frontend\src"

replacements = {
    '#0A1128': '#0F172A',
    '#00E5FF': '#22D3EE',
    'rgba(0,229,255': 'rgba(34,211,238'
}

for root, _, files in os.walk(dir_path):
    for file in files:
        if file.endswith(".jsx") or file.endswith(".css"):
            file_path = os.path.join(root, file)
            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()
            
            new_content = content
            for old, new in replacements.items():
                new_content = new_content.replace(old, new)
            
            if new_content != content:
                with open(file_path, "w", encoding="utf-8") as f:
                    f.write(new_content)
                print(f"Updated {file_path}")

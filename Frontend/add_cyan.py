import os

dir_path = r"C:\Users\admin\Portfolio\Frontend\src"

replacements = {
    '#98c1d9': '#00E5FF',
    '#98C1D9': '#00E5FF',
    'rgba(152,193,217': 'rgba(0,229,255'
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

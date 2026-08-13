import os

dir_path = r"C:\Users\admin\Portfolio\Frontend\src"

replacements = {
    'rgba(0, 242, 255': 'rgba(34, 211, 238',
    '#00f2ff': '#22D3EE',
    '#ffffff': '#FFFFFF' # Just to ensure consistency if needed
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

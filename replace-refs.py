import os
import re

target_dirs = ['website-main/src', 'website-main/public']
extensions = ('.js', '.jsx', '.ts', '.tsx', '.css', '.html', '.json', '.md')

def replace_in_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Regex to match .jpg, .jpeg, .JPG, .JPEG but ensure it's at the end of a filename (e.g. before quote or parenthesis)
        # Using a simpler string replacement since we just want to replace the extension in paths
        new_content = re.sub(r'\.jpg|\.jpeg|\.JPG|\.JPEG', '.webp', content)
        
        if new_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            return True
        return False
    except Exception as e:
        print(f"Error processing {filepath}: {e}")
        return False

updated_files = []

for target_dir in target_dirs:
    for root, dirs, files in os.walk(target_dir):
        for file in files:
            if file.endswith(extensions):
                filepath = os.path.join(root, file)
                if replace_in_file(filepath):
                    updated_files.append(filepath)

print("\n--- UPDATED FILES ---")
for file in updated_files:
    print(file)

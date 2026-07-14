import re

file_path = "website-main/src/pages/Gallery.jsx"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# The conflict is between <<<<<<< Updated upstream and >>>>>>> Stashed changes
# We want to extract the upstream block, modify it, and replace the whole conflict block.

conflict_pattern = re.compile(
    r"<<<<<<< Updated upstream\n(.*?)\n=======\n.*?\n>>>>>>> Stashed changes\n",
    re.DOTALL
)

match = conflict_pattern.search(content)
if not match:
    print("Conflict not found!")
    exit(1)

upstream_block = match.group(1)

# Now, we need to replace .jpg/.JPG with .webp for IDs 1 to 75
new_lines = []
for line in upstream_block.split('\n'):
    # Check if the line has an ID from 1 to 75
    id_match = re.search(r"id:\s*(\d+)", line)
    if id_match:
        img_id = int(id_match.group(1))
        if 1 <= img_id <= 75:
            line = re.sub(r"\.jpg|\.JPG", ".webp", line)
    new_lines.append(line)

new_upstream_block = '\n'.join(new_lines) + '\n'

# Replace the whole conflict with the new block
new_content = content[:match.start()] + new_upstream_block + content[match.end():]

with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_content)

print(f"Successfully resolved conflict. New array length should be 77.")

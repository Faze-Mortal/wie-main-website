import re

file_path = "website-main/src/pages/Gallery.jsx"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Extract the galleryPhotos array content
match = re.search(r"export const galleryPhotos = \[\n(.*?)\n\];", content, re.DOTALL)
if match:
    array_content = match.group(1)
    
    cats = set()
    for line in array_content.split("\n"):
        cat_match = re.search(r"cat:\s*'([^']+)'", line)
        if cat_match:
            cats.add(cat_match.group(1))
            
    print("Distinct categories found:")
    for cat in cats:
        print("-", cat)

    # Let's also do the replacements just in case
    new_content = content.replace("cat: 'reeti-riwaaz'", "cat: 'reeti-riwaz'")
    new_content = new_content.replace("cat: 'ieee-summit'", "cat: 'cc-summit'")
    
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(new_content)
        
    print("\nReplaced reeti-riwaaz and ieee-summit (if any were present).")
    
    # Check again
    match = re.search(r"export const galleryPhotos = \[\n(.*?)\n\];", new_content, re.DOTALL)
    cats_final = set()
    for line in match.group(1).split("\n"):
        cat_match = re.search(r"cat:\s*'([^']+)'", line)
        if cat_match:
            cats_final.add(cat_match.group(1))
            
    print("\nFinal Distinct categories:")
    for cat in cats_final:
        print("-", cat)
else:
    print("Could not find galleryPhotos array")

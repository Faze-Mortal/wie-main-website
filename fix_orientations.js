const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const oldFormatPicsDir = path.join(__dirname, 'old-format-pics');

async function fixOrientations() {
  const filesToProcess = [];

  function traverse(dir) {
    if (!fs.existsSync(dir)) return;
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item.toLowerCase().endsWith('.jpg') || item.toLowerCase().endsWith('.jpeg')) {
        filesToProcess.push(fullPath);
      }
    }
  }

  traverse(oldFormatPicsDir);

  console.log(`Found ${filesToProcess.length} backed up images. Processing with EXIF rotation...`);
  
  let fixedCount = 0;

  for (const backupPath of filesToProcess) {
    // Determine the original path
    // backupPath is like: <project_root>/old-format-pics/website-main/public/Gallery/IMG-1.jpg
    // We want to save to: <project_root>/website-main/public/Gallery/IMG-1.webp
    
    // We can extract everything after old-format-pics
    const relPath = path.relative(oldFormatPicsDir, backupPath);
    const targetDir = path.join(__dirname, path.dirname(relPath));
    const ext = path.extname(backupPath);
    const basename = path.basename(backupPath, ext);
    const targetWebpPath = path.join(targetDir, `${basename}.webp`);
    
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    try {
      // Re-convert using .rotate() to respect EXIF orientation
      await sharp(backupPath)
        .rotate()
        .webp({ quality: 85 })
        .toFile(targetWebpPath);
      
      fixedCount++;
    } catch (err) {
      console.error(`Error processing ${backupPath}:`, err);
    }
  }

  console.log(`Successfully re-converted and replaced ${fixedCount} images with orientation correction.`);
}

fixOrientations().catch(console.error);

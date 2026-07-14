const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const oldFormatPicsDir = path.join(__dirname, 'old-format-pics');

async function checkOrientations() {
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

  const rotatedImages = [];
  
  for (const backupPath of filesToProcess) {
    try {
      const metadata = await sharp(backupPath).metadata();
      // Orientation 1 means normal. Anything else (usually 3, 6, 8) means rotated.
      if (metadata.orientation && metadata.orientation !== 1) {
        rotatedImages.push({
          file: path.basename(backupPath),
          orientation: metadata.orientation
        });
      }
    } catch (err) {
      // ignore
    }
  }

  console.log('Images that had an EXIF orientation flag:');
  for (const img of rotatedImages) {
    console.log(`- ${img.file} (Orientation code: ${img.orientation})`);
  }
}

checkOrientations().catch(console.error);

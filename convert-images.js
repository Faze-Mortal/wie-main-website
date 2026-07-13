const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const targetDirs = ['website-main/public', 'website-main/src'];
const oldFormatPicsDir = path.join(__dirname, 'old-format-pics');

const convertedLog = [];

async function convertImages() {
  for (const targetDir of targetDirs) {
    const dirPath = path.join(__dirname, targetDir);
    if (fs.existsSync(dirPath)) {
      await processDirectory(dirPath, targetDir);
    }
  }

  console.log('\n--- CONVERSION LOG ---');
  for (const log of convertedLog) {
    console.log(`${log.old} -> ${log.new}`);
  }
}

async function processDirectory(dir, basePath) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await processDirectory(fullPath, basePath);
    } else if (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')) {
      await convertFile(fullPath, basePath);
    }
  }
}

async function convertFile(filePath, basePath) {
  const dir = path.dirname(filePath);
  const ext = path.extname(filePath);
  const basename = path.basename(filePath, ext);
  const webpPath = path.join(dir, `${basename}.webp`);
  
  // Create relative path for old-format-pics mirroring
  const relPath = path.relative(path.join(__dirname, basePath), filePath);
  const oldBackupDir = path.join(oldFormatPicsDir, basePath, path.dirname(relPath));
  const backupPath = path.join(oldBackupDir, path.basename(filePath));

  try {
    // Convert to webp
    await sharp(filePath)
      .webp({ quality: 85 })
      .toFile(webpPath);
    
    // Ensure backup directory exists
    fs.mkdirSync(oldBackupDir, { recursive: true });
    
    // Move original to backup
    fs.renameSync(filePath, backupPath);
    
    convertedLog.push({
      old: path.relative(__dirname, filePath).replace(/\\/g, '/'),
      new: path.relative(__dirname, webpPath).replace(/\\/g, '/')
    });
  } catch (err) {
    console.error(`Error processing ${filePath}:`, err);
  }
}

convertImages().catch(console.error);

const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse/sync');

function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

// Read CSV
const csvPath = path.join(__dirname, 'data-imports', 'team responses.csv');
const csvContent = fs.readFileSync(csvPath, 'utf8');

const data = parse(csvContent, {
  columns: true,
  skip_empty_lines: true,
  trim: true
});

// Recursively get all files in public/teams
function getFilesRecursively(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getFilesRecursively(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const teamsDir = path.join(__dirname, 'public', 'teams');
const teamFiles = getFilesRecursively(teamsDir);

const fileMap = {};
// Map lowercase filenames (without extension) to their exact public paths
teamFiles.forEach(filepath => {
  const ext = path.extname(filepath);
  const basename = path.basename(filepath, ext);
  
  // Public path format: /teams/subdirectory/filename.ext
  const relativeToPublic = path.relative(path.join(__dirname, 'public'), filepath);
  const publicPath = '/' + relativeToPublic.replace(/\\/g, '/');
  
  // We'll store both the exact basename and a slugified version of the basename to help match
  fileMap[basename.toLowerCase()] = publicPath;
  fileMap[slugify(basename)] = publicPath;
});

const mismatchLog = [];
const generatedArray = [];

function cleanSocialUrl(url, type) {
  if (!url || url.toLowerCase() === 'na' || url === '"') return '';
  url = url.trim();

  // Invalid links (spaces)
  if (url.includes(' ')) {
    return '';
  }

  // Cross-contamination & Generic links
  if (type === 'github' && (url.includes('linkedin.com') || url.includes('github.com/settings/profile'))) {
    return '';
  }

  // Handle building the full URL if it doesn't have http
  let finalUrl = url;
  if (!finalUrl.startsWith('http')) {
    if (type === 'instagram') finalUrl = `https://www.instagram.com/${finalUrl.replace(/^@/, '')}`;
    if (type === 'linkedin') finalUrl = `https://www.linkedin.com/in/${finalUrl}`;
    if (type === 'github') finalUrl = `https://github.com/${finalUrl}`;
  }

  // Clean up duplicate prefixes AFTER full url is assembled
  if (finalUrl.includes('linkedin.com/in/www.linkedin.com/in/')) {
    finalUrl = finalUrl.replace('linkedin.com/in/www.linkedin.com/in/', 'linkedin.com/in/');
  }
  if (finalUrl.includes('linkedin.com/in/linkedin.com/in/')) {
    finalUrl = finalUrl.replace('linkedin.com/in/linkedin.com/in/', 'linkedin.com/in/');
  }

  return finalUrl;
}

data.forEach((row, index) => {
  const name = row['Name'];
  if (!name) return;
  
  const expectedSlug = slugify(name);
  let matchedFile = null;

  // Manual fixes
  let searchName = name;
  if (name.trim() === "Yashu Suresh Pandey") {
    searchName = "Yashu Pandey";
  }

  // Try to find a matching file
  const searchSlug = slugify(searchName);
  // Check exact slug
  if (fileMap[searchSlug]) {
    matchedFile = fileMap[searchSlug];
  } 
  // Check lowercase name (in case file has spaces)
  else if (fileMap[searchName.toLowerCase()]) {
    matchedFile = fileMap[searchName.toLowerCase()];
  }
  // Try finding by prefix/includes
  else {
    const possibleMatches = Object.keys(fileMap).filter(k => k.includes(searchSlug) || searchSlug.includes(k));
    if (possibleMatches.length > 0) {
      matchedFile = fileMap[possibleMatches[0]];
    }
  }

  if (!matchedFile) {
    mismatchLog.push(`No file found for CSV Name: "${name}" (Expected slug: ${searchSlug})`);
  }

  // Generate the object
  generatedArray.push({
    id: index + 1,
    name: name.trim(),
    designation: row['Post'] ? row['Post'].trim() : '',
    img: matchedFile || `/teams/${expectedSlug}.jpg`, // Fallback to expected format
    instagram: cleanSocialUrl(row['Insta ID link'], 'instagram'),
    linkedin: cleanSocialUrl(row['LinkedIn ID link'], 'linkedin'),
    github: cleanSocialUrl(row['GitHub ID link'], 'github')
  });
});

let nextId = generatedArray.length + 1;

generatedArray.push({
  id: nextId++,
  name: "Andrea Benjamin",
  designation: "Senior Coordinator for Editorial",
  img: "/teams/CC/Andrea Benjamin.jpeg",
  instagram: "https://www.instagram.com/andrea.diaa?igsh=ZWkwOHJ2bm93cWFm",
  linkedin: "https://www.linkedin.com/in/andrea-benjamin-658238311?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  github: ""
});

generatedArray.push({
  id: nextId++,
  name: "Presha Gusain",
  designation: "Senior coordinator of Marketing",
  img: "/teams/CC/Presha Gusain.jpeg",
  instagram: "https://www.instagram.com/preshagusain__?igsh=aTVidHV5ZDBwam05",
  linkedin: "https://www.linkedin.com/in/presha-gusain-7198863a6?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  github: ""
});

// Find extra files that didn't match any CSV row
const matchedPaths = generatedArray.map(g => g.img);
teamFiles.forEach(filepath => {
  const ext = path.extname(filepath);
  const basename = path.basename(filepath, ext);
  const relativeToPublic = path.relative(path.join(__dirname, 'public'), filepath);
  const publicPath = '/' + relativeToPublic.replace(/\\/g, '/');
  
  if (!matchedPaths.includes(publicPath)) {
    mismatchLog.push(`Extra file found with no CSV match: ${publicPath}`);
  }
});

console.log("=== MISMATCH LOG ===");
if (mismatchLog.length === 0) {
  console.log("No mismatches! All names matched a file.");
} else {
  mismatchLog.forEach(log => console.log(log));
}

// Write to JSON for inspection
fs.writeFileSync('generated_team_data.json', JSON.stringify(generatedArray, null, 2));
console.log("\nFull data written to generated_team_data.json");

const fs = require('fs');

let content = fs.readFileSync('src/pages/Team.jsx', 'utf-8');

// 1. Fix capitalization
content = content.replace(/"name": "Kshiti singh"/g, '"name": "Kshiti Singh"');

// 2. Fix image extensions/names
content = content.replace(/\/teams\/CC\/Aum Lenka\.jpg/g, '/teams/CC/Aum Lenka.jpeg');
content = content.replace(/\/teams\/CC\/Yashu Suresh Pandey\.jpg/g, '/teams/CC/Yashu Pandey.jpeg');

// 3. Add Andrea Benjamin to Editorial
const andrea = `
      },
      {
        "id": 81,
        "name": "Andrea Benjamin",
        "designation": "Senior Coordinator",
        "img": "/teams/CC/Andrea Benjamin.jpeg",
        "instagram": "https://www.instagram.com/andrea.diaa?igsh=ZWkwOHJ2bm93cWFm",
        "linkedin": "https://www.linkedin.com/in/andrea-benjamin-658238311",
        "github": ""`;
// Find the end of Editorial (we'll just replace the last person in Editorial's block to append)
content = content.replace(/(name": "Yashika Chugh"[\s\S]*?"github": "".*?)(\n\s*\}\n\s*\]\n\s*\},)/, `$1${andrea}$2`);

// 4. Add Presha Gusain to Promotions
const presha = `
      },
      {
        "id": 82,
        "name": "Presha Gusain",
        "designation": "Senior Coordinator",
        "img": "/teams/CC/Presha Gusain.jpeg",
        "instagram": "https://www.instagram.com/preshagusain__?igsh=aTVidHV5ZDBwam05",
        "linkedin": "https://www.linkedin.com/in/presha-gusain-7198863a6",
        "github": ""`;
// Find the end of Promotions
content = content.replace(/(name": "Shouryam Sharma"[\s\S]*?"github": "".*?)(\n\s*\}\n\s*\]\n\s*\},)/, `$1${presha}$2`);

// 5. Update CoreCard Image
const coreCardImgOld = `className="w-full h-64 object-cover rounded-xl border border-gray-600 mb-4 transition-all duration-300 filter-none grayscale-0 saturate-100 contrast-100 group-hover:border-purple-400"`;
const coreCardImgNew = `className={\`w-full h-64 object-cover rounded-xl border border-gray-600 mb-4 transition-all duration-300 filter-none grayscale-0 saturate-100 contrast-100 group-hover:border-purple-400 \${
          name === "Aum Lenka" ? "object-top" : "object-[center_20%]"
        }\`}`;
content = content.replace(coreCardImgOld, coreCardImgNew);

// 6. Update ExecutiveCard Image
const execCardImgOld = `className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-110"`;
const execCardImgNew = `className={\`absolute inset-0 w-full h-full object-cover transition-transform duration-700 \${
              member.name === "Kshiti Singh" || member.name === "Akshat Raheja" 
                ? "object-[center_top] hover:scale-110" 
                : member.name === "Vaibhav Kumar" || member.name === "Sarath Mohanraj"
                ? "scale-[1.25] hover:scale-[1.35]"
                : "hover:scale-110"
            }\`}`;
content = content.replace(execCardImgOld, execCardImgNew);

fs.writeFileSync('src/pages/Team.jsx', content);
console.log('Fixed Team.jsx successfully!');

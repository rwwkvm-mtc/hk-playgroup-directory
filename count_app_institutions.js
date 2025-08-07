// Count institutions in app.js
const fs = require('fs');

// Read app.js file
const appJsContent = fs.readFileSync('app.js', 'utf8');

// Count "id": number patterns
const idMatches = appJsContent.match(/"id":\s*\d+/g);
const uniqueIds = new Set();

if (idMatches) {
  idMatches.forEach(match => {
    const id = match.match(/\d+/)[0];
    uniqueIds.add(parseInt(id));
  });
}

console.log('📊 APP.JS INSTITUTION COUNT:');
console.log('============================');
console.log(`Total unique institution IDs: ${uniqueIds.size}`);
console.log(`Highest ID: ${Math.max(...uniqueIds)}`);
console.log(`Lowest ID: ${Math.min(...uniqueIds)}`);

// Check for gaps in IDs
const sortedIds = Array.from(uniqueIds).sort((a, b) => a - b);
const gaps = [];
for (let i = 1; i <= Math.max(...uniqueIds); i++) {
  if (!uniqueIds.has(i)) {
    gaps.push(i);
  }
}

if (gaps.length > 0) {
  console.log(`Missing IDs: ${gaps.join(', ')}`);
} else {
  console.log('✅ No gaps in ID sequence');
}

// Count by district
const districtMatches = appJsContent.match(/"district":\s*"[^"]+"/g);
const districtCount = {};
if (districtMatches) {
  districtMatches.forEach(match => {
    const district = match.match(/"district":\s*"([^"]+)"/)[1];
    districtCount[district] = (districtCount[district] || 0) + 1;
  });
}

console.log('\n📋 BY DISTRICT:');
Object.keys(districtCount).sort().forEach(district => {
  console.log(`${district}: ${districtCount[district]}`);
}); 
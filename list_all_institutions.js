// Extract and list all institutions from app.js by district
const fs = require('fs');

// Read app.js file
const appJsContent = fs.readFileSync('app.js', 'utf8');

// Extract institution objects using regex
const institutionMatches = appJsContent.match(/\{[^}]*"id":\s*\d+[^}]*\}/g);

const institutions = [];

if (institutionMatches) {
  institutionMatches.forEach(match => {
    try {
      // Clean up the match to make it valid JSON
      let cleanedMatch = match.replace(/(\w+):/g, '"$1":');
      cleanedMatch = cleanedMatch.replace(/'/g, '"');
      
      // Extract basic info using regex since the JSON might be incomplete
      const idMatch = cleanedMatch.match(/"id":\s*(\d+)/);
      const nameMatch = cleanedMatch.match(/"name_en":\s*"([^"]+)"/);
      const districtMatch = cleanedMatch.match(/"district":\s*"([^"]+)"/);
      const typeMatch = cleanedMatch.match(/"type":\s*"([^"]+)"/);
      
      if (idMatch && nameMatch && districtMatch) {
        institutions.push({
          id: parseInt(idMatch[1]),
          name: nameMatch[1],
          district: districtMatch[1],
          type: typeMatch ? typeMatch[1] : 'Unknown'
        });
      }
    } catch (e) {
      // Skip invalid matches
    }
  });
}

// Sort by district and then by name
institutions.sort((a, b) => {
  if (a.district !== b.district) {
    return a.district.localeCompare(b.district);
  }
  return a.name.localeCompare(b.name);
});

// Group by district
const institutionsByDistrict = {};
institutions.forEach(inst => {
  if (!institutionsByDistrict[inst.district]) {
    institutionsByDistrict[inst.district] = [];
  }
  institutionsByDistrict[inst.district].push(inst);
});

console.log('📋 ALL 387 INSTITUTIONS BY DISTRICT');
console.log('====================================\n');

// Display by district
Object.keys(institutionsByDistrict).sort().forEach(district => {
  console.log(`🏫 ${district} (${institutionsByDistrict[district].length} institutions):`);
  institutionsByDistrict[district].forEach((inst, index) => {
    console.log(`  ${index + 1}. ${inst.name} (${inst.type})`);
  });
  console.log('');
});

console.log(`📊 SUMMARY:`);
console.log(`Total institutions: ${institutions.length}`);
console.log(`Total districts: ${Object.keys(institutionsByDistrict).length}`);

// Count by type
const typeCount = {};
institutions.forEach(inst => {
  typeCount[inst.type] = (typeCount[inst.type] || 0) + 1;
});

console.log(`\nBy type:`);
Object.keys(typeCount).forEach(type => {
  console.log(`  ${type}: ${typeCount[type]}`);
}); 
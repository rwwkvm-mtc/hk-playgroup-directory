// List all institutions for review
const fs = require('fs');

// Load the data
const data = JSON.parse(fs.readFileSync('assets/sample_data.json', 'utf8'));

console.log('📋 ALL INSTITUTIONS LIST');
console.log('========================\n');

// Filter out undefined institutions and sort by district
const validInstitutions = data.institutions.filter(inst => inst.institution_name_en && inst.institution_name_en !== 'undefined');

// Group by district
const institutionsByDistrict = {};
validInstitutions.forEach(inst => {
  const district = inst.district || 'Unknown';
  if (!institutionsByDistrict[district]) {
    institutionsByDistrict[district] = [];
  }
  institutionsByDistrict[district].push(inst);
});

// Display by district
Object.keys(institutionsByDistrict).sort().forEach(district => {
  console.log(`\n🏫 ${district.replace(/_/g, ' ')} (${institutionsByDistrict[district].length} institutions):`);
  institutionsByDistrict[district].forEach((inst, index) => {
    const type = inst.institution_type || 'Unknown';
    console.log(`  ${index + 1}. ${inst.institution_name_en} (${type})`);
  });
});

console.log(`\n📊 SUMMARY:`);
console.log(`Total valid institutions: ${validInstitutions.length}`);
console.log(`Total districts: ${Object.keys(institutionsByDistrict).length}`);

// Count by type
const typeCount = {};
validInstitutions.forEach(inst => {
  const type = inst.institution_type || 'Unknown';
  typeCount[type] = (typeCount[type] || 0) + 1;
});

console.log(`\nBy type:`);
Object.keys(typeCount).forEach(type => {
  console.log(`  ${type}: ${typeCount[type]}`);
}); 
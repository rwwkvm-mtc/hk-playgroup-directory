// Check Central & Western district contact details
const fs = require('fs');

// Read app.js file
const appJsContent = fs.readFileSync('app.js', 'utf8');

// Extract Central & Western institutions
const centralWesternMatches = appJsContent.match(/\{[^}]*"district":\s*"Central & Western"[^}]*\}/g);

const institutions = [];

if (centralWesternMatches) {
  centralWesternMatches.forEach(match => {
    try {
      // Clean up the match to make it valid JSON
      let cleanedMatch = match.replace(/(\w+):/g, '"$1":');
      cleanedMatch = cleanedMatch.replace(/'/g, '"');
      
      // Extract info using regex
      const idMatch = cleanedMatch.match(/"id":\s*(\d+)/);
      const nameMatch = cleanedMatch.match(/"name_en":\s*"([^"]+)"/);
      const phoneMatch = cleanedMatch.match(/"phone":\s*"([^"]+)"/);
      const emailMatch = cleanedMatch.match(/"email":\s*"([^"]+)"/);
      const addressMatch = cleanedMatch.match(/"address":\s*"([^"]+)"/);
      
      if (idMatch && nameMatch) {
        institutions.push({
          id: parseInt(idMatch[1]),
          name: nameMatch[1],
          phone: phoneMatch ? phoneMatch[1] : 'Missing',
          email: emailMatch ? emailMatch[1] : 'Missing',
          address: addressMatch ? addressMatch[1] : 'Missing'
        });
      }
    } catch (e) {
      // Skip invalid matches
    }
  });
}

// Sort by name
institutions.sort((a, b) => a.name.localeCompare(b.name));

console.log('📋 CENTRAL & WESTERN DISTRICT - CURRENT DATA');
console.log('============================================\n');

institutions.forEach(inst => {
  console.log(`${inst.name}:`);
  console.log(`  Phone: ${inst.phone}`);
  console.log(`  Email: ${inst.email}`);
  console.log(`  Address: ${inst.address}`);
  console.log('');
});

console.log(`Total Central & Western institutions: ${institutions.length}`); 
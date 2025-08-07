const fs = require('fs');

// Read the app.js file
const appJsContent = fs.readFileSync('app.js', 'utf8');

// Extract the appData.institutions array
const institutionsMatch = appJsContent.match(/const appData = \{[^}]*institutions: \[([\s\S]*?)\][^}]*\};/);
if (!institutionsMatch) {
    console.log('Could not find institutions data in app.js');
    process.exit(1);
}

// Parse the institutions data
const institutionsData = '[' + institutionsMatch[1] + ']';
let institutions;
try {
    // Clean up the data for JSON parsing
    const cleanedData = institutionsData
        .replace(/(\w+):/g, '"$1":') // Add quotes to property names
        .replace(/'/g, '"') // Replace single quotes with double quotes
        .replace(/,(\s*[}\]])/g, '$1') // Remove trailing commas
        .replace(/\/\/.*$/gm, '') // Remove comments
        .replace(/\s+/g, ' ') // Normalize whitespace
        .replace(/"\s*,\s*"/g, '","') // Fix array formatting
        .replace(/\[\s*"/g, '["') // Fix array start
        .replace(/"\s*\]/g, '"]') // Fix array end
        .replace(/,\s*}/g, '}') // Remove trailing commas in objects
        .replace(/,\s*]/g, ']'); // Remove trailing commas in arrays
    
    institutions = JSON.parse(cleanedData);
} catch (error) {
    console.log('Error parsing institutions data:', error.message);
    console.log('Attempting manual extraction...');
    
    // Manual extraction for Eastern district
    const easternMatch = appJsContent.match(/"district": "Eastern"[\s\S]*?},/g);
    if (easternMatch) {
        console.log('Found Eastern district institutions:');
        easternMatch.forEach((match, index) => {
            console.log(`\n--- Institution ${index + 1} ---`);
            console.log(match);
        });
    }
    process.exit(1);
}

// Filter Eastern district institutions
const easternInstitutions = institutions.filter(inst => inst.district === 'Eastern');

console.log(`Found ${easternInstitutions.length} Eastern district institutions:\n`);

easternInstitutions.forEach((institution, index) => {
    console.log(`${index + 1}. ${institution.name_en || institution.name}`);
    console.log(`   Phone: ${institution.phone || 'N/A'}`);
    console.log(`   Email: ${institution.email || 'N/A'}`);
    console.log(`   WhatsApp: ${institution.whatsapp || 'N/A'}`);
    console.log(`   Address: ${institution.address || 'N/A'}`);
    console.log(`   Website: ${institution.website || 'N/A'}`);
    console.log(`   Type: ${institution.type || 'N/A'}`);
    console.log('');
}); 
const fs = require('fs');

// Read the app.js file
const appJsContent = fs.readFileSync('app.js', 'utf8');

// Extract Kwun Tong district institutions using regex
const kwunTongMatch = appJsContent.match(/"district": "Kwun Tong"[\s\S]*?},/g);

if (kwunTongMatch) {
    console.log(`Found ${kwunTongMatch.length} Kwun Tong district institutions:\n`);
    
    kwunTongMatch.forEach((match, index) => {
        // Extract name_en
        const nameMatch = match.match(/"name_en":\s*"([^"]*)"/);
        const name = nameMatch ? nameMatch[1] : 'Unknown';
        
        // Extract phone
        const phoneMatch = match.match(/"phone":\s*"([^"]*)"/);
        const phone = phoneMatch ? phoneMatch[1] : 'N/A';
        
        // Extract email
        const emailMatch = match.match(/"email":\s*"([^"]*)"/);
        const email = emailMatch ? emailMatch[1] : 'N/A';
        
        // Extract whatsapp
        const whatsappMatch = match.match(/"whatsapp":\s*"([^"]*)"/);
        const whatsapp = whatsappMatch ? whatsappMatch[1] : 'N/A';
        
        // Extract address
        const addressMatch = match.match(/"address":\s*"([^"]*)"/);
        const address = addressMatch ? addressMatch[1] : 'N/A';
        
        // Extract website
        const websiteMatch = match.match(/"website":\s*"([^"]*)"/);
        const website = websiteMatch ? websiteMatch[1] : 'N/A';
        
        // Extract type
        const typeMatch = match.match(/"type":\s*"([^"]*)"/);
        const type = typeMatch ? typeMatch[1] : 'N/A';
        
        console.log(`${index + 1}. ${name}`);
        console.log(`   Type: ${type}`);
        console.log(`   Phone: ${phone}`);
        console.log(`   Email: ${email}`);
        console.log(`   WhatsApp: ${whatsapp}`);
        console.log(`   Address: ${address}`);
        console.log(`   Website: ${website}`);
        console.log('');
    });
} else {
    console.log('No Kwun Tong district institutions found in app.js');
} 
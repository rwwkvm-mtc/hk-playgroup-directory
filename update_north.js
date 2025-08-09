const fs = require('fs');

// Read the app.js file
let appJsContent = fs.readFileSync('app.js', 'utf8');

// Define the new contact details for North district institutions
const newContactDetails = {
  "Caritas Nursery School - Ta Kwu Ling": {
    phone: "+852 2674 3207",
    email: "cctkl@caritassws.org.hk",
    address: "G/F, Caritas Centre, Ping Che Road, Ta Kwu Ling, Fanling, N.T.",
    website: "http://tklns.caritas.org.hk"
  },
  "Child Psychological Development Association (CPDA) - Sheung Shui Center": {
    phone: "+852 3160 8576",
    whatsapp: "+852 3160 8576",
    email: "info-ss@cpda.com.hk",
    address: "Unit 1006, 10/F, Landmark North, 48 Lung Sum Avenue, Sheung Shui, NT",
    website: "www.cpda.com.hk"
  },
  "Fanling Baptist Church Lui Ming Choi Kindergarten": {
    phone: "+852 2669 4315, +852 2676 1925",
    email: "info@fbclmckg.edu.hk",
    address: "3 Sha Tau Kok Road, Fanling, New Territories",
    website: "www.fbclmckg.edu.hk"
  },
  "Fun To Learn English Learning Centre (Fanling Branch)": {
    phone: "+852 2511 1122, +852 2511 1182",
    email: "contact@funtolearnenglish.com.hk",
    address: "Shop 17AB, Level 2, Shopping Mall, Belair Monte Block 4, 3 Ma Sik Rd, Fanling, Hong Kong",
    website: "www.funtolearnenglish.com.hk"
  },
  "Fun To Learn English Learning Centre (Sheung Shui) - Fun 2 Grow Playgroup": {
    phone: "+852 5406 7892, +852 2511 1488",
    whatsapp: "+852 5406 7892",
    email: "hello@fun2learnenglish.com.hk",
    address: "Shop 7, 2/F, Lung Fung Garden, 33 Lung Sum Avenue, Sheung Shui, Hong Kong",
    website: "www.fun2learnenglish.com.hk"
  },
  "Fung Kai Kindergarten": {
    phone: "+852 2671 9919",
    email: "fkkgfungkai@yahoo.com.hk",
    address: "No. 21 Jockey Club Road, Sheung Shui, New Territories",
    website: "https://fkkgfungkai.edu.hk"
  },
  "Gloria Creative Kindergarten / International Nursery (Fanling Campus)": {
    phone: "+852 2669 7339",
    email: "mail@gciedu.hk",
    address: "Shop Nos. 72, 73, 75, 76, 77 & 79, G/F, Union Plaza, No. 9 Wo Muk Road, Fanling, New Territories",
    website: "https://gciedu.hk/home/en/"
  },
  "Gloria Creative Kindergarten / International Nursery (Sheung Shui Campus)": {
    phone: "+852 2669 7009",
    email: "mail@gciedu.hk",
    address: "Unit 23 & 24 G/F Commercial Complex Tsui Lai Garden, 9 Fung Nam Road, Sheung Shui NT",
    website: "https://gciedu.hk/home/en/"
  },
  "New Territories Women & Juveniles Welfare Association Fanling Nursery School": {
    phone: "+852 2682 0877",
    email: "fl@ntwjwaflns.edu.hk",
    address: "G/F, Wings B & C, Chun King House, King Shing Court, Fanling, N.T.",
    website: "www.ntwjwa.org.hk"
  },
  "New Territories Women & Juveniles Welfare Association Sheung Shui Nursery School": {
    phone: "+852 2672 5710",
    email: "ss@ntwjwassns.edu.hk",
    address: "5/F, North District Community Centre, 2 Lung Wan Street, Sheung Shui, N.T.",
    website: "www.ntwjwa.org.hk"
  },
  "Sheung Shui Church Kindergarten": {
    phone: "+852 2672 1848",
    address: "23 Jockey Club Road, Sheung Shui, New Territories",
    website: "www.ssckg.edu.hk"
  },
  "The Fanling Assemblies of God Kindergarten": {
    phone: "+852 2669 8174, +852 2669 8202",
    email: "office@aogkg.edu.hk",
    address: "301 Jockey Club Road, Fanling, NT",
    website: "www.aogkg.edu.hk"
  },
  "Tung Wah Group of Hospitals Jolly Playland (North District)": {
    phone: "+852 2390 3323",
    address: "Unit No. 3, G/F, Chung Ming House, Wah Ming Estate, Fanling, N.T.",
    website: "www.tungwah.org.hk"
  },
  "Yan Chai Hospital Wing Lung Kindergarten": {
    phone: "+852 2679 7337",
    email: "wl@ychkg.org.hk",
    address: "Units 107-120, 122 & 124, G/F, Choi Yuk House, Choi Yuen Estate, Sheung Shui, N.T.",
    website: "www.ychwl.org.hk"
  }
};

// Function to update institution data
function updateInstitution(institutionName, newDetails) {
  const namePattern = new RegExp(`"name_en": "${institutionName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`, 'i');
  const match = appJsContent.match(namePattern);
  
  if (!match) {
    console.log(`❌ Institution not found: ${institutionName}`);
    return false;
  }
  
  const startIndex = match.index;
  const institutionStart = appJsContent.lastIndexOf('{', startIndex);
  const institutionEnd = appJsContent.indexOf('},', startIndex) + 1;
  
  if (institutionStart === -1 || institutionEnd === 0) {
    console.log(`❌ Could not parse institution structure for: ${institutionName}`);
    return false;
  }
  
  const institutionBlock = appJsContent.substring(institutionStart, institutionEnd);
  let updatedBlock = institutionBlock;
  
  // Update phone
  if (newDetails.phone) {
    const phonePattern = /"phone":\s*"[^"]*"/;
    if (phonePattern.test(updatedBlock)) {
      updatedBlock = updatedBlock.replace(phonePattern, `"phone": "${newDetails.phone}"`);
    } else {
      // Insert phone field after name_en
      const nameEnPattern = /"name_en":\s*"[^"]*"/;
      updatedBlock = updatedBlock.replace(nameEnPattern, `$&,\n      "phone": "${newDetails.phone}"`);
    }
  }
  
  // Update email
  if (newDetails.email) {
    const emailPattern = /"email":\s*"[^"]*"/;
    if (emailPattern.test(updatedBlock)) {
      updatedBlock = updatedBlock.replace(emailPattern, `"email": "${newDetails.email}"`);
    } else {
      // Insert email field after phone
      const phonePattern = /"phone":\s*"[^"]*"/;
      if (phonePattern.test(updatedBlock)) {
        updatedBlock = updatedBlock.replace(phonePattern, `$&,\n      "email": "${newDetails.email}"`);
      } else {
        // Insert after name_en if no phone
        const nameEnPattern = /"name_en":\s*"[^"]*"/;
        updatedBlock = updatedBlock.replace(nameEnPattern, `$&,\n      "email": "${newDetails.email}"`);
      }
    }
  }
  
  // Update WhatsApp
  if (newDetails.whatsapp) {
    const whatsappPattern = /"whatsapp":\s*"[^"]*"/;
    if (whatsappPattern.test(updatedBlock)) {
      updatedBlock = updatedBlock.replace(whatsappPattern, `"whatsapp": "${newDetails.whatsapp}"`);
    } else {
      // Insert WhatsApp field after email or phone
      const emailPattern = /"email":\s*"[^"]*"/;
      if (emailPattern.test(updatedBlock)) {
        updatedBlock = updatedBlock.replace(emailPattern, `$&,\n      "whatsapp": "${newDetails.whatsapp}"`);
      } else {
        const phonePattern = /"phone":\s*"[^"]*"/;
        if (phonePattern.test(updatedBlock)) {
          updatedBlock = updatedBlock.replace(phonePattern, `$&,\n      "whatsapp": "${newDetails.whatsapp}"`);
        } else {
          const nameEnPattern = /"name_en":\s*"[^"]*"/;
          updatedBlock = updatedBlock.replace(nameEnPattern, `$&,\n      "whatsapp": "${newDetails.whatsapp}"`);
        }
      }
    }
  }
  
  // Update address
  if (newDetails.address) {
    const addressPattern = /"address":\s*"[^"]*"/;
    if (addressPattern.test(updatedBlock)) {
      updatedBlock = updatedBlock.replace(addressPattern, `"address": "${newDetails.address}"`);
    }
  }
  
  // Update website
  if (newDetails.website) {
    const websitePattern = /"website":\s*"[^"]*"/;
    if (websitePattern.test(updatedBlock)) {
      updatedBlock = updatedBlock.replace(websitePattern, `"website": "${newDetails.website}"`);
    } else {
      // Insert website field after address
      const addressPattern = /"address":\s*"[^"]*"/;
      if (addressPattern.test(updatedBlock)) {
        updatedBlock = updatedBlock.replace(addressPattern, `$&,\n      "website": "${newDetails.website}"`);
      } else {
        const nameEnPattern = /"name_en":\s*"[^"]*"/;
        updatedBlock = updatedBlock.replace(nameEnPattern, `$&,\n      "website": "${newDetails.website}"`);
      }
    }
  }
  
  // Replace the institution block
  appJsContent = appJsContent.substring(0, institutionStart) + updatedBlock + appJsContent.substring(institutionEnd);
  
  console.log(`✅ Updated: ${institutionName}`);
  return true;
}

// Update all institutions
console.log('Updating North district institutions...\n');

let updatedCount = 0;
for (const [institutionName, newDetails] of Object.entries(newContactDetails)) {
  if (updateInstitution(institutionName, newDetails)) {
    updatedCount++;
  }
}

console.log(`\n📊 Summary: Updated ${updatedCount} out of ${Object.keys(newContactDetails).length} institutions`);

// Write the updated content back to app.js
fs.writeFileSync('app.js', appJsContent, 'utf8');
console.log('\n💾 Updated app.js file saved successfully!');
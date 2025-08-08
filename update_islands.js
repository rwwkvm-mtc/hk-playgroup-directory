const fs = require('fs');

// Read the app.js file
let appJsContent = fs.readFileSync('app.js', 'utf8');

// Define the new contact details for Islands district institutions
const newContactDetails = {
  "Bayview House of Children (Discovery Bay)": {
    phone: "+852 6114 2436",
    email: "ramesha@bayview.hk, info@bayview.hk",
    address: "Unit 5 & 6, LG Floor, Block II Office Building, DB North Plaza, Discovery Bay, Lantau Island, Hong Kong",
    website: "http://www.bayview.hk/"
  },
  "Discovery Bay International School (Early Years Foundation Stage) - Pre-Nursery": {
    phone: "+852 2914 2142",
    email: "dbis@dbis.edu.hk",
    address: "Discovery Bay Road, Discovery Bay, Lantau Island",
    website: "https://www.dbis.edu.hk/"
  },
  "Discovery Mind International Play Centre & Kindergarten (Discovery Bay)": {
    phone: "+852 2987 8088",
    email: "dmk@discoverymind.edu.hk",
    address: "Shop Unit No. 102, First Floor, 92 Siena Avenue, Discovery Bay City, Lantau Island",
    website: "https://discoverymind.edu.hk/"
  },
  "Discovery Mind International Play Centre & Kindergarten (Tung Chung)": {
    phone: "+852 2987 8070",
    email: "dmtc@discoverymind.edu.hk",
    address: "G/F, Seaview Crescent, No. 8 Waterfront Road, Tung Chung, Hong Kong",
    website: "https://discoverymind.edu.hk/"
  },
  "Discovery Montessori Schools (Discovery Bay)": {
    phone: "+852 2987 1201",
    email: "enquiry@discoverymontessori.info",
    address: "Room 101, 1/F, 92 Siena Avenue, Discovery Bay, Lantau, Hong Kong",
    website: "http://www.dms.edu.hk/"
  },
  "École Française Internationale de Lantau (EFIL) - Les Petits Pois": {
    phone: "+852 8191 0813, +852 6071 3136",
    whatsapp: "+852 6071 3136",
    email: "info@ecole-discovery.com",
    address: "Unit 5 & Unit 6, LG/F, Office Block One, 92 Siena Avenue DB North, Lantau Island, Hong Kong",
    website: "https://ecole-discovery.com/"
  },
  "ESF Tung Chung International Kindergarten (Playgroups)": {
    phone: "+852 3742 3500",
    email: "kinder@tck.edu.hk, admissions@tck.edu.hk",
    address: "1/F, Commercial Accommodation, The Visionary, 1 Ying Hong Street, Tung Chung, Lantau Island, New Territories",
    website: "https://www.tck.edu.hk/"
  },
  "Guidepost Montessori (Discovery Bay)": {
    phone: "+852 2185 6134",
    whatsapp: "+852 2185 6134",
    email: "admissions@guidepost.hk",
    address: "1-06, 1/F, 92 Siena Avenue, Discovery Bay North, Discovery Bay",
    website: "https://guidepost.hk/locations/discovery-bay"
  },
  "Lantau International School (Reception Class)": {
    phone: "+852 2984 0069",
    email: "lisadmin@lis.edu.hk, admin@lis.edu.hk",
    address: "22 Upper Cheung Sha Village, Lantau Island, N.T. Hong Kong",
    website: "www.lis.edu.hk"
  },
  "Mindseeds Studio (Mui Wo)": {
    whatsapp: "+852 5106 4411",
    address: "G/F., No. 89, Chung Hau St., Mui Wo, Lantau Island"
  },
  "Sunshine House International Pre-School (Discovery Bay)": {
    phone: "+852 2987 8143",
    email: "clearwaterbay@sunshinehouse.com.hk",
    address: "Shop 106, 1/F, Blk 6, Discovery Bay North Development, Discovery Bay; also Shop 137-138, 1/F, DB Plaza, Discovery Bay",
    website: "http://www.sunshinehouse.com.hk/"
  },
  "Woodentots Montessori Playgroup (Discovery Bay)": {
    phone: "+852 6108 9131",
    whatsapp: "+852 6108 9131",
    email: "woodentotsdb@gmail.com",
    address: "Plaza Lane, Discovery Bay, Hong Kong",
    website: "https://www.woodentotsdb.com/"
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
      updatedBlock = updatedBlock.replace(nameEnPattern, `$&\n      "phone": "${newDetails.phone}"`);
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
        updatedBlock = updatedBlock.replace(phonePattern, `$&\n      "email": "${newDetails.email}"`);
      } else {
        // Insert after name_en if no phone
        const nameEnPattern = /"name_en":\s*"[^"]*"/;
        updatedBlock = updatedBlock.replace(nameEnPattern, `$&\n      "email": "${newDetails.email}"`);
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
        updatedBlock = updatedBlock.replace(emailPattern, `$&\n      "whatsapp": "${newDetails.whatsapp}"`);
      } else {
        const phonePattern = /"phone":\s*"[^"]*"/;
        if (phonePattern.test(updatedBlock)) {
          updatedBlock = updatedBlock.replace(phonePattern, `$&\n      "whatsapp": "${newDetails.whatsapp}"`);
        } else {
          const nameEnPattern = /"name_en":\s*"[^"]*"/;
          updatedBlock = updatedBlock.replace(nameEnPattern, `$&\n      "whatsapp": "${newDetails.whatsapp}"`);
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
        updatedBlock = updatedBlock.replace(addressPattern, `$&\n      "website": "${newDetails.website}"`);
      } else {
        const nameEnPattern = /"name_en":\s*"[^"]*"/;
        updatedBlock = updatedBlock.replace(nameEnPattern, `$&\n      "website": "${newDetails.website}"`);
      }
    }
  }
  
  // Replace the institution block
  appJsContent = appJsContent.substring(0, institutionStart) + updatedBlock + appJsContent.substring(institutionEnd);
  
  console.log(`✅ Updated: ${institutionName}`);
  return true;
}

// Update all institutions
console.log('Updating Islands district institutions...\n');

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
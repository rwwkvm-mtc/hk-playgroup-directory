const fs = require('fs');

// Read the app.js file
let appJsContent = fs.readFileSync('app.js', 'utf8');

// Define the new contact details for Kwai Tsing district institutions
const newContactDetails = {
  "ESF Tsing Yi International Kindergarten (Playgroups)": {
    phone: "+852 2436 3355",
    email: "kinder@tyk.edu.hk",
    address: "Maritime Square, 33 Tsing King Road, Tsing Yi, Hong Kong",
    website: "www.esf.edu.hk, tyk.esf.edu.hk"
  },
  "Hong Kong Sheng Kung Hui Lady MacLehose Centre (Shek Yam) Kindergarten Day Nursery": {
    phone: "+852 2276 5028",
    email: "sydnkids@skhmaclehose.org.hk",
    address: "G/F, Commercial Centre, Shek Yam Estate Phase 2, Kwai Chung, New Territories",
    website: "www.lmcsy.edu.hk"
  },
  "Hong Kong Sheng Kung Hui Lady MacLehose Centre Joyful Children World": {
    phone: "+852 2423 5496",
    email: "skhlmcdc@skhmaclehose.org.hk",
    address: "Room 302-303, 3/F, 22 Wo Yi Hop Road, Kwai Chung, N.T.",
    website: "www.skhlmc.org.hk"
  },
  "Hong Kong Sheng Kung Hui Lady MacLehose Centre Kindergarten Day Nursery": {
    phone: "+852 2427 3523",
    email: "skhlmcdn@skhmaclehose.org.hk",
    address: "3/F, 22 Wo Yi Hop Road, Kwai Chung, New Territories",
    website: "www.lmcdn.edu.hk"
  },
  "Lai King Rhenish Nursery": {
    phone: "+852 2742 1714",
    email: "info.lkc@ppe.rhenish.org",
    address: "1/F, Block 5, Yeung King House, Lai King Estate, Kwai Chung, N.T.",
    website: "lkc.ppe.rhenish.org"
  },
  "Learning Habitat Kindergarten": {
    phone: "+852 2501 5500",
    email: "contact@learninghabitat.org",
    address: "Level 1, Commercial Building of Phase 1, Villa Esplanada, 8 Nga Ying Chau Street, Tsing Yi, New Territories",
    website: "www.learninghabitat.org"
  },
  "Llamahood Playgroup (Kwai Chung)": {
    phone: "+852 3619 0119",
    whatsapp: "+852 3619 0119",
    email: "info@llamahood.com",
    address: "Office 06, 2/F, K83, 83 Tai Lin Pai Road, Kwai Chung, Kwai Tsing District, New Territories",
    website: "www.llamahood.com"
  },
  "Maritime Square Lutheran Day Nursery": {
    phone: "+852 2449 0052",
    email: "n10@hklss.hk",
    address: "Portion of G/F, Maritime Square 1, 33 Tsing King Road, Tsing Yi, N.T.",
    website: "www.msl-web.net"
  },
  "Po Leung Kuk Mr. & Mrs. Charlie Lee Kindergarten-cum-Nursery": {
    phone: "+852 2419 2734",
    email: "clkgn@poleungkuk.org.hk",
    address: "Wing B & C, Podium Level, Shing Yat House, Kwai Shing East Estate, Kwai Chung, N.T.",
    website: "www.poleungkuk.org.hk/child-care-services/clkgn"
  },
  "S.K.H. St. Christopher's Nursery (Kwai Chung)": {
    phone: "+852 2257 9331",
    email: "kc_admin@skhsch.org.hk, kc_sup@skhsch.org.hk",
    address: "Unit No.1, Podium Level 3, Kwai Chung Shopping Centre, Kwai Chung Estate, New Territories",
    website: "www.skhkckg.edu.hk"
  },
  "Sun Island English Kindergarten (Kwai Hing Branch)": {
    phone: "+852 2425 5003",
    email: "school@sunisland.edu.hk",
    address: "2/F Podium, Block B, Sun Kwai Hing Gardens, 163 Tai Wo Hau Road, Kwai Chung, New Territories",
    website: "www.sunisland.edu.hk"
  },
  "Yan Chai Hospital Ju Ching Chu Kindergarten": {
    phone: "+852 2480 1975",
    email: "jcc@ychkg.org.hk",
    address: "G/F, Chak Yam House, On Yam Estate, Kwai Chung, N.T.",
    website: "www.jcc.edu.hk"
  },
  "Yan Chai Hospital Tung Pak Ying Kindergarten": {
    phone: "+852 2480 1953",
    email: "tpy@ychkg.org.hk, ic.tpy@ychkg.org.hk",
    address: "Wings B & C, G/F, Shek Tai House, Shek Lei (I) Estate, Kwai Chung, N.T.",
    website: "www.ychtpy.org.hk"
  },
  "Yan Chai Hospital Zonta Club of Kowloon Kindergarten": {
    phone: "+852 2434 1420",
    email: "zc@ychkg.org.hk",
    address: "Wing B and Part of Wing A, G/F, Hang Yip House, Cheung Hang Estate, Tsing Yi, N.T."
  },
  "YWCA Tsing Yi Nursery School": {
    phone: "+852 2495 7678",
    email: "nsty@ywca.org.hk",
    address: "P1/F, Ching Ho House, Cheung Ching Estate, Tsing Yi, New Territories",
    website: "nsty.ywca.org.hk"
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
console.log('Updating Kwai Tsing district institutions...\n');

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
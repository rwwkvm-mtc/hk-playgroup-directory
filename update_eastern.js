const fs = require('fs');

// Read the app.js file
let appJsContent = fs.readFileSync('app.js', 'utf8');

// Define the new contact details for Eastern district institutions
const newContactDetails = {
  "AS Chloe (Tin Hau Campus)": {
    phone: "3689 5269",
    email: "enquiry@aschloe.com",
    whatsapp: "9685 9105",
    address: "19/F, Parkview Centre, 7 Lau Li Street, Causeway Bay East, Hong Kong",
    website: "aschloe.com"
  },
  "Baby Buddies": {
    phone: "2881 8717 / 2504 1978",
    address: "1/F, Park View Centre, 7 Lau Li Street, Tin Hau",
    website: "bbllschools.wixsite.com/eyfsedu"
  },
  "Chong Wai Sze Academy of Ballet (Playgroup)": {
    phone: "2104 3527",
    email: "ccdance168@gmail.com",
    whatsapp: "6323 7693",
    address: "Room 1502, 15/F, Kwai Hung Holdings Centre, No. 89 King's Road, North Point (MTR Fortress Hill Station Exit A1)",
    website: "cwsballet.com.hk"
  },
  "Grace Garden International Nursery": {
    phone: "2702 9778",
    email: "enquiry@gracegarden.edu.hk",
    address: "Shops GA12B-14, G/F 55 Tai Hong Street, Site A, Lei King Wan, Sai Wan Ho, Hong Kong",
    website: "gracegarden.edu.hk"
  },
  "Guidepost Montessori (Happy Valley Sing Woo Road)": {
    phone: "2547 7176",
    whatsapp: "2547 7176",
    address: "1/F, Happy Court, 39E Sing Woo Rd, Happy Valley",
    website: "guidepost.hk"
  },
  "Hong Kong Chinese Women's Club Kindergarten": {
    phone: "2568 2110",
    address: "G/F, Yiu Fook House, Yiu Tung Estate, Shaukeiwan, Hong Kong"
  },
  "Hong Kong Federation of Youth Groups Ching Lok Kindergarten": {
    phone: "2886 8856",
    email: "cl-swh@hkfyg.org.hk",
    address: "G/F, Lee Ga Building, 129 Sai Wan Ho Street, Sai Wan Ho, Hong Kong",
    website: "clswh.hkfyg.org.hk"
  },
  "Kids Garden (Causeway Bay)": {
    address: "13/F King's Commercial Centre, 25 King's Road, Causeway Bay",
    website: "kidsgardenhk.com"
  },
  "Lisac Funland Toddlers' Play House": {
    whatsapp: "6100 6637",
    address: "Rm 01 12/f King'S View Court Blk B. 905 King'S Rd. Hong Kong"
  },
  "MAGART International Kindergarten (Tai Koo)": {
    address: "Located in the eastern district of Hong Kong Island, MAGART International Kindergarten in Tai Koo",
    website: "magartedu.com"
  },
  "Mulberry House Asia (Mandarin Playgroup)": {
    phone: "5598 0509",
    whatsapp: "5598 0509",
    email: "hello@mulberryhouseasia.com",
    address: "Unit 901, Universal Trade Centre, 17-19 Caine Road, Central, Hong Kong",
    website: "mulberryhouseasia.com"
  },
  "MusicRings": {
    phone: "3565 6826",
    whatsapp: "5439 8292",
    email: "info@musicrings.com.hk",
    address: "Unit 01, 12/F, Park Avenue Tower, 5 Moreton Terrace, Causeway Bay, Hong Kong",
    website: "musicrings.com.hk"
  },
  "Mustard Seed Playschool": {
    phone: "2566 5200",
    email: "info@mustardseedplayschool.com.hk",
    address: "Room 801-802, Park Commercial Centre, 180 Tung Lo Wan Road, Hong Kong",
    website: "mustardseedplayschool.com.hk"
  },
  "PODS Kindergarten & Preschool": {
    phone: "3460 3560",
    email: "info@pods.com.hk",
    address: "1/F., Magnolia, No.4, Tin Hau Temple Road, North Point, Hong Kong",
    website: "pods.com.hk"
  },
  "St. Anna Anglo-Chinese Kindergarten & International Nursery Garden": {
    phone: "2569 9267; 2569 9269",
    address: "Shop P901, 2/F, Kwun Hoi Terrace, Tung Hoi Mansion, 8 Taikoo Shing Road and Podium of Nam Hoi Mansion, 2 Tai Wing, Avenue, Quarry Bay, Hong Kong"
  },
  "Stage Right (Eastern District Programs)": {
    phone: "9225 8924",
    email: "info@stagerighthk.com",
    address: "STAGE RIGHT! Studio 1/F 70 Po Tung Road Sai Kung Town",
    website: "stagerighthk.com"
  },
  "Steps Education Plus (Causeway Bay)": {
    phone: "2553 3558",
    email: "plus@steps.edu.hk",
    address: "Room 1102, 11/F, One Hysan Avenue, Causeway Bay",
    website: "steps.edu.hk"
  },
  "The Salvation Army North Point Nursery School": {
    phone: "2856 0892",
    email: "npnc@hkm.salvationarmy.org",
    address: "Podium Level 2, Healthy Village, 6 Healthy Street Central, North Point, Hong Kong"
  },
  "The Women's Welfare Club (Eastern District) Nursery Hong Kong": {
    phone: "2561 3409",
    email: "edn56@netvigator.com",
    address: "G/F, Oi Ping House, Oi Tung Estate, Shau Kei Wan, Hong Kong"
  },
  "TWGHs Chiap Hua Cheng's Nursery School": {
    phone: "2558 6639",
    email: "chcns@tungwah.org.hk",
    address: "3/F, Chai Wan Municipal Services Building, 338 Chai Wan Road, Hong Kong"
  },
  "TWGHs Fong Shu Chuen Nursery School": {
    phone: "2887 2106",
    email: "fscns@tungwah.org.hk",
    address: "G/F, CNTA Causeway Bay Community Centre, 7 Fuk Yum Road, North Point, Hong Kong"
  },
  "Victoria (Kornhill) Nursery": {
    phone: "2513 1108",
    address: "G/F, 14 Hong Yue Street, Kornhill, Hong Kong",
    website: "victoria.edu.hk"
  },
  "Victoria (Kornhill) Nursery (Upper Kornhill Campus)": {
    phone: "2513 1108",
    email: "ukvkoffc@victoria.edu.hk",
    website: "victoria.edu.hk"
  },
  "Victoria Kindergarten (Harbour Heights Campus)": {
    phone: "2571 3456",
    email: "hhvnoff2@victoria.edu.hk",
    address: "2/F, Tower 1, Ko Fung Court Harbour Heights, 1, 3 & 5 Fook Yum Road, North Point, Hong Kong",
    website: "victoria.edu.hk"
  },
  "Victoria Kindergarten (Lower Kornhill Campus)": {
    phone: "2885 3331",
    email: "lkvkoffc@victoria.edu.hk",
    address: "G/F, Block R, 2 - 8 Hong On Street, Kornhill, Quarry Bay, Hong Kong",
    website: "victoria.edu.hk"
  },
  "Victoria Kindergarten (Middle Kornhill Campus)": {
    email: "mkvkoffc@victoria.edu.hk",
    address: "Kornhill Plaza (South), 2 Kornhill Road, Quarry Bay, Hong Kong",
    website: "victoria.edu.hk"
  },
  "Women's Welfare Club (Eastern District) Hong Kong Lai Kwai Tim Day Nursery": {
    phone: "2856 3192",
    address: "2/F, Island Place, 53 Tanner Road, North Point, Hong Kong",
    website: "lktnursery.org.hk"
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
console.log('Updating Eastern district institutions...\n');

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
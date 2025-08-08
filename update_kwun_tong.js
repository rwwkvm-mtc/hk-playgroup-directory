const fs = require('fs');

// Read the app.js file
let appJsContent = fs.readFileSync('app.js', 'utf8');

// Define the new contact details for Kwun Tong district institutions
const newContactDetails = {
  "Caritas Nursery School - Lei Yue Mun": {
    phone: "+852 2246 5002",
    email: "cclym@caritassws.org.hk",
    address: "G/F, Wings B & C, Lei Sang House, Lei Yue Mun Estate, Ko Chiu Road, Kwun Tong, Kowloon",
    website: "http://lymns.caritas.org.hk"
  },
  "Caritas Nursery School - Yau Tong": {
    phone: "+852 2717 1098",
    email: "ccyt@caritassws.org.hk",
    address: "Level 2, No. 60 Lei Yue Mun Road, Yau Tong, Kowloon",
    website: "http://ytns.caritas.org.hk"
  },
  "Child Psychological Development Association (CPDA) - Kwun Tong Center": {
    phone: "+852 6675 7527",
    whatsapp: "+852 6675 7527",
    email: "info-kt@cpda.com.hk",
    address: "觀塘成業街7號寧晉中心30樓F室",
    website: "www.cpda.com.hk"
  },
  "CNEC Christian Kindergarten (Sau Mau Ping)": {
    phone: "+852 2340 6063",
    email: "cneckg1997@gmail.com, cneckg1997@cnecckg.edu.hk",
    address: "G/F, Sau Hong House, Sau Mau Ping (III) Estate, Kowloon",
    website: "www.cnecckg.edu.hk"
  },
  "Garden Estate Baptist Nursery School": {
    phone: "+852 2345 4340",
    email: "gebn@abwe.org.hk",
    address: "Lotus Tower 2, 2/F, Room 37, Garden Estate, 297 Ngau Tau Kok Road, Kwun Tong, Kowloon",
    website: "www.gebns.edu.hk"
  },
  "Hong Kong Student Aid Society Po Tat Nursery": {
    phone: "+852 2997 4601",
    email: "po-tat@hksas.org.hk",
    address: "Wing B & C, G/F, Tat Yan House, Po Tat Estate, Sau Mau Ping, Kowloon",
    website: "www.potat-nursery.edu.hk"
  },
  "Kwun Tong Methodist Kindergarten": {
    phone: "+852 2342 3062",
    email: "info@ktmk.edu.hk",
    address: "2/F, Lotus Tower-3, Kwun Tong Garden Estate, 297 Ngau Tau Kok Road, Kwun Tong, Kowloon",
    website: "www.ktmk.edu.hk"
  },
  "Maple Bear Academy (Yau Tong Campus) - Extra Curricular Activities": {
    phone: "+852 2185 6646",
    whatsapp: "+852 6849 2840",
    address: "G/F & 1/F, The Spectacle, 8 Cho Yuen Street, Yau Tong",
    website: "www.maplebear.hk"
  },
  "Monkey Tree English Learning Center (Kwun Tong)": {
    phone: "+852 2117 1948, +852 9343 6236",
    email: "enquiry@monkeytree.com.hk",
    address: "Shop No 18, G/F, Yue Man Centre, Nos.300 & 302, Ngau Tau Kok Road, Kowloon",
    website: "www.monkeytree.com.hk"
  },
  "Monkey Tree English Learning Center (Lam Tin)": {
    phone: "+852 2338 8702, +852 6487 0942",
    email: "enquiry@monkeytree.com.hk",
    address: "Shop no.90, 1/F, Laguna Plaza, 88 Cha Kwo Ling Road, Kwun Tong",
    website: "www.monkeytree.com.hk"
  },
  "Monkey Tree English Learning Center (Sau Mau Ping)": {
    phone: "+852 2698 1026, +852 6976 9526",
    email: "enquiry@monkeytree.com.hk",
    address: "Shops 110 & 111, 1/F, Hiu Lai Shopping Centre, Hiu Lai Court, Sau Mau Ping, Kwun Tong",
    website: "www.monkeytree.com.hk"
  },
  "Po Leung Kuk Lee Siu Chan Kindergarten-cum-Nursery": {
    phone: "+852 2343 9038",
    email: "leesiuchan@poleungkuk.org.hk",
    address: "5/F, Shun Lee Estate Community Centre, 2 Shun Chi Street, Shun Lee Estate, Kowloon",
    website: "www.poleungkuk.org.hk/child-care-services/lsckgn"
  },
  "Po Leung Kuk Mrs Fong Wong Kam Chuen Kindergarten": {
    phone: "+852 2349 3606",
    email: "plkfwkckg@poleungkuk.org.hk",
    address: "G/F, Chun Moon House, Ko Chun Court, Ko Chiu Road, Yau Tong, Kowloon",
    website: "www.plkkgs.edu.hk/plkfwkckg/"
  },
  "Po Leung Kuk Ng Po Ling Kindergarten-cum-Nursery": {
    phone: "+852 2727 1405",
    email: "nplkgn@poleungkuk.org.hk",
    address: "Units 21-34, Podium Level, Tsui To House, Tsui Ping Estate, Kwun Tong, Kowloon",
    website: "www.poleungkuk.org.hk/child-care-services/nplkgn"
  },
  "St. Antonius Kindergarten": {
    phone: "+852 2349 0221",
    email: "principal@stantoniuskg.edu.hk",
    address: "1/F, 1 Yau Tong Road, Kwun Tong, Kowloon",
    website: "www.stakg.edu.hk"
  },
  "St. James Catholic Kindergarten": {
    phone: "+852 2348 9344",
    email: "principal@sjck.edu.hk",
    address: "8 Ka Wing Street, Yau Tong, Kowloon",
    website: "www.sjck.edu.hk"
  },
  "Tsung Tsin Mission of Hong Kong On Yee Nursery School": {
    phone: "+852 2727 6468",
    email: "oe@ttmssd.org",
    address: "G/F, Ko Shing House, Ko Yee Estate, Yau Tong, Kowloon",
    website: "https://oe.ttmssd.org/"
  },
  "Tung Wah Group of Hospitals Chan Han Nursery School": {
    phone: "+852 2340 5982",
    email: "chns@tungwah.org.hk",
    address: "Unit 2, G/F, Sau Fu House, Sau Mau Ping Estate, Sau Ming Road, Kowloon",
    website: "www.tungwahcsd.org"
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
console.log('Updating Kwun Tong district institutions...\n');

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
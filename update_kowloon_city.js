const fs = require('fs');

// Read the app.js file
let appJsContent = fs.readFileSync('app.js', 'utf8');

// Define the new contact details for Kowloon City district institutions
const newContactDetails = {
  "Casita (Satellite Programs)": {
    phone: "+852 6291 0128",
    email: "info@casita.com.hk",
    address: "2/F, Workington Tower, 78 Bonham Strand, Sheung Wan, Hong Kong",
    website: "www.casita.com.hk"
  },
  "ESF Playgroup (Ho Man Tin venue - currently not open)": {
    phone: "+852 2838 2276",
    email: "facilities.booking@esf.org.hk",
    address: "2/F The Jockey Club Sarah Roe Centre, 2A Tin Kwong Road, Ho Man Tin, Kowloon, Hong Kong",
    website: "www.esfexplore.org.hk"
  },
  "Harrow Little Lions (Kai Tak)": {
    phone: "+852 3152 4700",
    email: "futurestar-HK@aisl-edu.com",
    address: "55 Kwun Tong Road, Hong Kong",
    website: "www.harrowhongkong.hk/hll/"
  },
  "Holy Trinity Centre Kindergarten & Day Nursery": {
    phone: "+852 2760 0189, +852 2760 0832",
    email: "htckg@htckg.edu.hk",
    address: "G/F-2/F, 139 Ma Tau Chung Road, Kowloon City, Kowloon",
    website: "www.htckg.edu.hk"
  },
  "Imperial Academy (Kowloon City)": {
    phone: "+852 2716 9966",
    whatsapp: "+852 9421 2974, +852 6473 0629",
    email: "info@imperialgroup.asia",
    address: "Shop 1B, No.18 Fuk Lo Tsun Road, Kowloon City, Hong Kong",
    website: "www.imperialgroup.asia"
  },
  "Kendall International Preschool": {
    phone: "+852 2328 8223",
    whatsapp: "+852 5407 3884",
    email: "info@kendall.edu.hk",
    address: "G/F, RESIDENCE 228, 228 Fuk Wing Street, Cheung Sha Wan, West Kowloon, Hong Kong",
    website: "www.kendall.edu.hk"
  },
  "Kiddoland Playpark & Learning Hub (Hung Hom)": {
    phone: "+852 6890 8280",
    whatsapp: "+852 6890 8280",
    email: "Kiddolandplaypark@gmail.com",
    address: "Room# 6, Unit F2, 5th Floor, Phase-II, Hang Fung Industrial Building, 2G Hok Yuen Street, Hung Hom, Kowloon"
  },
  "Llamahood Playgroup (Potential Service Area)": {
    phone: "+852 3619 0119",
    email: "info@llamahood.com",
    whatsapp: "+852 3619 0119",
    address: "Office 06, 2/F, K83, 83 Tai Lin Pai Road, Kwai Chung, Kwai Tsing District, New Territories",
    website: "www.llamahood.com"
  },
  "MAGART International Kindergarten (Whampoa Campus)": {
    phone: "+852 2786 9314, +852 2788 0788, +852 2786 9699",
    address: "Shop G3A, G/F, Commercial Podium Site 7, Whampoa Garden, 9 Tak On Street, Hung Hom, Kowloon",
    website: "www.magartedu.com"
  },
  "Po Leung Kuk Chan Lai Wai Lin Kindergarten-cum-Nursery": {
    phone: "+852 2364 7170",
    email: "clwlkgn@poleungkuk.org.hk",
    address: "G/F, 1/F & 2/F, Honour Court, 188-194 Ma Tau Wai Road, Kowloon City, Kowloon",
    website: "www.poleungkuk.org.hk/child-care-services/clwlkgn"
  },
  "Po Leung Kuk Lam Ting Lai Ling Kindergarten-cum-Nursery": {
    phone: "+852 2364 9480",
    email: "ltllkgn@poleungkuk.org.hk",
    address: "G/F, Ka On Lau, Ka Wai Chuen, Hung Hom, Kowloon",
    website: "www.poleungkuk.org.hk/child-care-services/ltllkgn"
  },
  "Po Leung Kuk Lui Chan Wai Ching Kindergarten-cum-Nursery": {
    phone: "+852 2761 3431",
    email: "lcwckgn@poleungkuk.org.hk",
    address: "G/F, Sheung Lok House, Sheung Lok Estate, Sheung Shing Street, Homantin, Kowloon",
    website: "www.poleungkuk.org.hk/child-care-services/lcwckgn"
  },
  "Shine On Family Neighbourhood Support Child Care Project": {
    phone: "+852 2435 8500",
    email: "nsccp@yang.org.hk",
    address: "Shop nos. 115-116 & 117-118, 1/F, Grand Waterfront Plaza, 38 San Ma Tau Street, To Kwa Wan, Kowloon",
    website: "yang.org.hk/en/shine-on-family-neighbourhood-support-child-care-project/"
  },
  "St. Catherine's International Kindergarten & Nursery (Harbour Place)": {
    phone: "+852 2337 7344, +852 2337 7273",
    address: "4 & 6 Norfolk Road, Kowloon Tong, Kowloon",
    website: "www.stcatherines.edu.hk"
  },
  "St. Hilary's Kindergarten (Hung Hom)": {
    phone: "+852 2338 9097",
    email: "hh@sthilarys.edu.hk",
    address: "G/F – 2/F Metro 6, 121 Bulkeley Street, Hung Hom, Kowloon, Hong Kong",
    website: "kindergarten.sthilarys.edu.hk"
  },
  "Sun Island English Kindergarten": {
    phone: "+852 2714 5545",
    whatsapp: "+852 5631 9017",
    email: "school@sunisland.edu.hk",
    address: "LG/F, G/F & 1/F, Pau Chung Building, 152 Pau Chung Street, To Kwa Wan, Kowloon",
    website: "www.sunisland.edu.hk"
  },
  "Victoria (Homantin) International Nursery": {
    phone: "+852 2762 9130",
    email: "hmtoffc@victoria.edu.hk",
    address: "1/F, Carmel-on-the-Hill, 9 Carmel Village Street, Homantin, Kowloon, Hong Kong",
    website: "www.victoria.edu.hk"
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
console.log('Updating Kowloon City district institutions...\n');

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
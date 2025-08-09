const fs = require('fs');

// Read the app.js file
let appJsContent = fs.readFileSync('app.js', 'utf8');

// Define the new contact details for Sai Kung district institutions
const newContactDetails = {
  "BGCAHK Cheerland Kindergarten (Tseung Kwan O)": {
    phone: "+852 2177 4831",
    email: "nursery@bgca.org.hk, tkocn@bgca.org.hk",
    address: "G/F, Tong Wong House, Tong Ming Court, Tseung Kwan O, New Territories, Hong Kong",
    website: "http://nursery.bgca.org.hk"
  },
  "Child Psychological Development Association (CPDA) - Tseung Kwan O Center": {
    phone: "+852 2325 8228",
    whatsapp: "+852 5700 7282",
    email: "info-tko@cpda.com.hk",
    address: "Flat 10, The Papillons, 21 Tong Chun St, Tseung Kwan O",
    website: "www.cpda.com.hk"
  },
  "ESF Clearwater Bay School - Pre-Kindergarten Programmes (Potential)": {
    phone: "+852 2358 3221",
    email: "info@cwbs.edu.hk, admissions@cwbs.edu.hk",
    address: "DD 229, Lot 235, Clearwater Bay Road, New Territories, Hong Kong",
    website: "https://cwbs.esf.edu.hk"
  },
  "Forest House Waldorf School - Nursery Programme": {
    phone: "+852 2792 6055",
    email: "info@foresthouse.edu.hk, admissions@foresthouse.edu.hk",
    address: "Commercial Area, Floral Villas, No 18 Tso Wo Road, Sai Kung, New Territories Hong Kong",
    website: "www.foresthouse.edu.hk"
  },
  "Forest House Waldorf School - Parent & Baby Programs": {
    phone: "+852 2792 6055",
    email: "info@foresthouse.edu.hk, admissions@foresthouse.edu.hk",
    address: "Commercial Area, Floral Villas, No 18 Tso Wo Road, Sai Kung, New Territories Hong Kong",
    website: "www.foresthouse.edu.hk"
  },
  "Guidepost Montessori (Clearwater Bay) - Montessori Together": {
    phone: "+852 2185 6135",
    whatsapp: "+852 2185 6135",
    address: "Level 7, Silverstrand Mart, Clear Water Bay Rd, Clear Water Bay, Sai Kung",
    website: "https://guidepost.hk/locations/clearwater-bay"
  },
  "Guidepost Montessori (Clearwater Bay) - Toddler Program": {
    phone: "+852 2185 6135",
    whatsapp: "+852 2185 6135",
    address: "Level 7, Silverstrand Mart, Clear Water Bay Rd, Clear Water Bay, Sai Kung",
    website: "https://guidepost.hk/locations/clearwater-bay"
  },
  "Guidepost Montessori (Sai Kung) - Montessori Together": {
    phone: "+852 2813 0290",
    whatsapp: "+852 2813 0290",
    address: "Shop D, G/F, Marina Cove Shopping Centre, Sai Kung",
    website: "https://guidepost.hk/locations/sai-kung"
  },
  "Guidepost Montessori (Sai Kung) - Toddler Program": {
    phone: "+852 2813 0290",
    whatsapp: "+852 2813 0290",
    address: "Shop D, G/F, Marina Cove Shopping Centre, Sai Kung",
    website: "https://guidepost.hk/locations/sai-kung"
  },
  "Hong Kong Academy - Playgroup": {
    phone: "+852 2655 1111",
    email: "office@hkacademy.edu.hk, catherine.munoz@hkacademy.edu.hk",
    address: "33 Wai Man Road, Sai Kung, New Territories, Hong Kong SAR",
    website: "hkacademy.edu.hk"
  },
  "Hong Kong Academy - Playgroup (Transitioning to Pre-Nursery)": {
    phone: "+852 2655 1111",
    email: "office@hkacademy.edu.hk, catherine.munoz@hkacademy.edu.hk",
    address: "33 Wai Man Road, Sai Kung, New Territories, Hong Kong SAR",
    website: "hkacademy.edu.hk"
  },
  "Hong Kong Sheng Kung Hui St Simon's Sai Kung Nursery School": {
    phone: "+852 2792 0047",
    email: "sssk@skhwc.org.hk",
    address: "DD215, Tan Cheung Village, Sai Kung, New Territories",
    website: "www.sssk.edu.hk"
  },
  "Leapfrog Kindergarten": {
    phone: "+852 2791 1540",
    email: "admin@leapfrogkindergarten.org",
    address: "11 Pak Tam Chung Village, Sai Kung Country Park, Sai Kung, New Territories, Hong Kong",
    website: "www.leapfrogkindergarten.org"
  },
  "Nord Anglia International School Hong Kong - Early Years (Sai Kung Campus)": {
    phone: "+852 3958 1488, +852 3958 1428",
    email: "admissions@nais.hk",
    address: "285 Hong Kin Road, Tui Min Hoi, Sai Kung, New Territories",
    website: "www.nordangliaeducation.com/nais-hong-kong"
  },
  "Pentecostal Church of Hong Kong Tseung Kwan O Nursery School": {
    phone: "+852 2178 4472, +852 2178 4475",
    email: "tseung.kwan.o.ns@pchk.org.hk",
    address: "4/F, Podium, Wing B & C, Sheung Shun House, Sheung Tak Estate, Tseung Kwan O, New Territories",
    website: "http://tseungkwanons.pchk.org.hk"
  },
  "Sai Kung English - Baby Playgroup": {
    phone: "+852 5599 2001",
    address: "M/F, 10 Po Tung Road, Sai Kung, N.T., Hong Kong",
    website: "www.saikungenglish.com"
  },
  "Sai Kung Montessori School": {
    phone: "+852 2869 1811, +852 5369 8587",
    email: "info@saikungmontessori.com",
    address: "G/F 787 SB, Tan Cheung Village, Sai Kung, Hong Kong",
    website: "www.saikungmontessori.com"
  },
  "SKIP - Sai Kung Pre-school International Kindergarten - Playgroups": {
    phone: "+852 2791 7354",
    email: "skip@skip.edu.hk",
    address: "Sai Kung Pre-school Group Limited, 159 Che Keng Tuk Road, Sai Kung, Hong Kong",
    website: "www.skip.edu.hk"
  },
  "Stage Right Youth Theatre - Teddy Bear Tea Club": {
    phone: "+852 9225 8924",
    email: "info@stagerighthk.com",
    address: "1/F, 14 Wan King Path, Sai Kung, New Territories, Hong Kong",
    website: "www.stagerighthk.com"
  },
  "Sun Island English Kindergarten (Sai Kung Branch)": {
    phone: "+852 2339 1145",
    email: "school@sunisland.edu.hk",
    address: "G/F, Tower 11, Lakeside Garden, 1 Chui Tong Road, Sai Kung, New Territories",
    website: "www.sunisland.edu.hk"
  },
  "Woodland Pre-Schools (formerly Woodland Sai Kung Pre-School)": {
    phone: "+852 2813 0290",
    email: "saikung@woodlandschools.com",
    address: "Shop D, G/F, Marina Cove Shopping Centre, Sai Kung, New Territories, Hong Kong",
    website: "www.woodlandschools.com"
  },
  "Yew Chung International School (YCIS) - Infant and Toddler Learning Programme (ITLP)": {
    phone: "+852 2338 7106, +852 2338 0264",
    email: "admissions@ycef.com",
    address: "1/F, Savannah Place, 3 Chi Shin Street, Tseung Kwan O",
    website: "www.ycis-hk.com"
  },
  "Yew Chung International School (YCIS) - Two's Programme": {
    phone: "+852 2338 7106, +852 2338 0264",
    email: "admissions@ycef.com",
    address: "1/F, Savannah Place, 3 Chi Shin Street, Tseung Kwan O",
    website: "www.ycis-hk.com"
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
console.log('Updating Sai Kung district institutions...\n');

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
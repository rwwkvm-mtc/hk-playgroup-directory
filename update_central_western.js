// Update Central & Western district contact details
const fs = require('fs');

// New contact details provided by user
const newContactDetails = {
  "BabySteps International Preschool": {
    phone: "+852 9302 2190",
    email: "enquiries@babysteps.com.hk",
    address: "25/F, 2501-2502 Universal Trade Centre, 3-5A Arbuthnot Road, Central, Hong Kong"
  },
  "BabySteps International Preschool - Pre-Nursery": {
    phone: "+852 9302 2190",
    email: "enquiries@babysteps.com.hk",
    address: "25/F, 2501-2502 Universal Trade Centre, 3-5A Arbuthnot Road, Central, Hong Kong"
  },
  "Baumhaus": {
    phone: "+852 2321 5898",
    email: "info@baumhaus.com.hk",
    address: "1/F, Kar Yau Building, 36-44 Queen's Rd E, Wan Chai, Hong Kong"
  },
  "Blooming Buds Preschool & Child Care Centre": {
    phone: "+852 2887 9921",
    email: "enquiry@bloomingbuds.com.hk",
    address: "Unit 7, 1/F, Island Crest, 8 First Street, Sai Ying Pun, Hong Kong"
  },
  "Casita": {
    phone: "Contact available through website booking system",
    email: "info@casita.com.hk",
    address: "Various locations - details available on website"
  },
  "City Kids Preschool and Playgroup": {
    phone: "+852 2522 4446",
    email: "admin@citykidshk.org",
    address: "2/F East Wing, 12 Borret Road, Mid-Levels, Hong Kong"
  },
  "ELCHK Amazing Grace Nursery School": {
    phone: "+852 2540 7583",
    email: "agns@elchk.org.hk",
    address: "3/F, Sai Ying Pun Community Complex, 2 High Street, Hong Kong"
  },
  "ESF Explore (Wan Chai Language & Learning Centre)": {
    phone: "+852 2838 2276",
    email: "languagecentre@esfexplore.org.hk",
    address: "2/F Prime Mansion, 183-187 Johnston Road, Wan Chai, Hong Kong"
  },
  "ESF Pre-Kindergarten Programme": {
    phone: "+852 3762 2411",
    email: "kindergarten.admissions@esfcentre.edu.hk",
    address: "Various ESF locations including ESF Language & Learning Centre"
  },
  "Fairchild Nursery & Kindergarten": {
    phone: "+852 2803 2638",
    email: "info@fairchild.edu.hk",
    address: "G/F & 1/F Kong Chian Tower, Block 1, 351 Des Voeux Road West, Sai Ying Pun, Hong Kong"
  },
  "HKCS Central Nursery School": {
    phone: "+852 2380 2320",
    email: "cns@hkcs.org",
    address: "3/F, Mong Kok Complex, 557 Shanghai Street, Kowloon, Hong Kong"
  },
  "Hong Kong Man Sang Kindergarten (Western District)": {
    phone: "+852 2336 3232",
    email: "western@mansangkg.edu.hk",
    address: "Shop A, G/F & 1/F, Nice Garden, 513-519 Queen's Road West, Hong Kong"
  },
  "Les Petits Lascars (Central)": {
    phone: "+852 2526 8666",
    email: "admissions@petitslascars.com",
    address: "3/F, Wellington Plaza, 56-58 Wellington Street, Central"
  },
  "Les Petits Lascars (Central) - Pre-Nursery": {
    phone: "+852 2526 8666",
    email: "admissions@petitslascars.com",
    address: "3/F, Wellington Plaza, 56-58 Wellington Street, Central"
  },
  "Llamahood Playgroup": {
    phone: "+852 3619 0119",
    email: "info@llamahood.com",
    address: "Office 06, 2/F, K83, 83 Tai Lin Pai Road, Kwai Chung"
  },
  "m.i.l.k. Western District Campus": {
    phone: "+852 2336 3232",
    email: "admin@imilk.co",
    address: "Shop A, G/F & 1/F, Nice Garden, 513-519 Queen's Road West, Western District"
  },
  "Malvern College Pre-School Hong Kong (Island West)": {
    phone: "+852 3898 4670",
    email: "iw-office@malvernpreschool.hk",
    address: "G/F and 1/F Viking Court, 165-166 Connaught Road West, Sai Ying Pun, Hong Kong"
  },
  "Malvern Playgroup (Sai Ying Pun)": {
    phone: "+852 3898 4669",
    email: "info@babyloneducation.com",
    address: "G/F and 1/F Viking Court, 165-166 Connaught Road West, Sai Ying Pun, Hong Kong"
  },
  "Mulberry House International Kindergarten (Central)": {
    phone: "+852 5598 0509",
    email: "hello@mulberryhouseasia.com",
    address: "Unit 901 and 2403, Universal Trade Centre, 17-19 Caine Road, Central, Hong Kong"
  },
  "My Gym Children": {
    phone: "+852 2577 3322",
    email: "admin@mygym.com.hk",
    address: "6th Floor Marina 8, 8 Heung Yip Rd, Wong Chuk Hang"
  },
  "SPRING Learning": {
    phone: "+852 3465 5000",
    email: "enquiry@spring-learning.com.hk",
    address: "3/F, Centre Point 181-185 Gloucester Road, Wanchai, Hong Kong"
  },
  "St. John": {
    phone: "+852 2523 4157",
    email: "general@stjohnscathedral.org.hk",
    address: "4-8 Garden Road, Central, Hong Kong"
  },
  "Thomas Tam Nursery School": {
    phone: "+852 2549 5107",
    email: "tt@hkspc.org",
    address: "King George V Memorial Park, Hospital Road, Sai Ying Pun, Hong Kong"
  },
  "Trybe": {
    phone: "+852 5400 7710",
    email: "kids@trybehk.com",
    address: "G/F Nam Hung Mansion, 5H Belchers Street, Kennedy Town, Hong Kong"
  },
  "Tutor Time (Mid-levels Caine Road Campus)": {
    phone: "+852 2529 2288",
    email: "admissions@tutortime.com.hk",
    address: "Shop A-B, G/F Botanical Court, 5 Caine Road, Mid-Levels, Hong Kong"
  },
  "Victoria Playpark (Wan Chai Harcourt House)": {
    phone: "+852 2117 4218",
    email: "enquiryhc@victoriaplaypark.com",
    address: "Room 305-8, 3rd Floor, Harcourt House, 39 Gloucester Road, Wan Chai"
  }
};

console.log('🔍 COMPARISON RESULTS - CENTRAL & WESTERN DISTRICT');
console.log('==================================================\n');

// Read current app.js content
let appJsContent = fs.readFileSync('app.js', 'utf8');

let updateCount = 0;

// Update each institution
Object.keys(newContactDetails).forEach(institutionName => {
  const newDetails = newContactDetails[institutionName];
  
  // Find and update phone
  const phoneRegex = new RegExp(`("name_en":\\s*"${institutionName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[^}]*"phone":\\s*")[^"]*(")`, 'g');
  if (phoneRegex.test(appJsContent)) {
    appJsContent = appJsContent.replace(phoneRegex, `$1${newDetails.phone}$2`);
    console.log(`✅ Updated phone for ${institutionName}: ${newDetails.phone}`);
    updateCount++;
  }
  
  // Find and update email
  const emailRegex = new RegExp(`("name_en":\\s*"${institutionName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[^}]*"email":\\s*")[^"]*(")`, 'g');
  if (emailRegex.test(appJsContent)) {
    appJsContent = appJsContent.replace(emailRegex, `$1${newDetails.email}$2`);
    console.log(`✅ Updated email for ${institutionName}: ${newDetails.email}`);
    updateCount++;
  }
  
  // Find and update address
  const addressRegex = new RegExp(`("name_en":\\s*"${institutionName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[^}]*"address":\\s*")[^"]*(")`, 'g');
  if (addressRegex.test(appJsContent)) {
    appJsContent = appJsContent.replace(addressRegex, `$1${newDetails.address}$2`);
    console.log(`✅ Updated address for ${institutionName}: ${newDetails.address}`);
    updateCount++;
  }
});

// Write updated content back to file
fs.writeFileSync('app.js', appJsContent);

console.log(`\n📊 SUMMARY:`);
console.log(`Total updates made: ${updateCount}`);
console.log(`Institutions updated: ${Object.keys(newContactDetails).length}`);
console.log(`\n✅ Central & Western district contact details have been updated!`); 
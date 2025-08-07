// Update website information for Central & Western institutions
const fs = require('fs');

// New website details provided by user
const newWebsiteDetails = {
  "BabySteps International Preschool": "https://babysteps.com.hk/",
  "BabySteps International Preschool - Pre-Nursery": "https://babysteps.com.hk/",
  "Baumhaus": "https://www.baumhaus.com.hk",
  "Blooming Buds Preschool & Child Care Centre": "https://www.bloomingbuds.com.hk",
  "Casita": "www.casita.com.hk",
  "City Kids Preschool and Playgroup": "https://www.citykidshk.org/",
  "ELCHK Amazing Grace Nursery School": "http://agns.elchk.org.hk/",
  "ESF Explore (Wan Chai Language & Learning Centre)": "www.esfexplore.org.hk",
  "ESF Pre-Kindergarten Programme": "https://join-us.esf.edu.hk/pre-kindergarten/",
  "Fairchild Nursery & Kindergarten": "http://www.fairchild.edu.hk",
  "HKCS Central Nursery School": "https://cns.hkcschild.edu.hk",
  "Hong Kong Man Sang Kindergarten (Western District)": "http://www.mansangkg.edu.hk",
  "Les Petits Lascars (Central)": "https://hkkidsacademy.edu.hk/les-petits-lascars",
  "Les Petits Lascars (Central) - Pre-Nursery": "https://hkkidsacademy.edu.hk/les-petits-lascars",
  "Llamahood Playgroup": "www.llamahood.com",
  "m.i.l.k. Western District Campus": "www.milkplaygroup.com",
  "Malvern College Pre-School Hong Kong (Island West)": "http://www.malvernpreschool.hk",
  "Malvern Playgroup (Sai Ying Pun)": "http://www.malvernplaygroup.hk",
  "Mulberry House International Kindergarten (Central)": "https://mulberryhousekg.com/en/central-campus/",
  "My Gym Children's Fitness Center (Central)": "https://mygymhk.com",
  "SPRING Learning": "https://spring-learning.com.hk",
  "St. John's Cathedral Playgroup": "https://stjohnscathedral.org.hk",
  "Thomas Tam Nursery School": "https://ns.hkspc.org/tt/",
  "Trybe": "https://www.trybehk.com",
  "Tutor Time (Mid-levels Caine Road Campus)": "https://www.tutortime.com.hk/locations/caine-road/",
  "Victoria Playpark (Wan Chai Harcourt House)": "https://www.victoriaplaypark.com"
};

console.log('🌐 UPDATING WEBSITE INFORMATION - CENTRAL & WESTERN DISTRICT');
console.log('============================================================\n');

// Read current app.js content
let appJsContent = fs.readFileSync('app.js', 'utf8');

let updateCount = 0;

// Update each institution's website
Object.keys(newWebsiteDetails).forEach(institutionName => {
  const newWebsite = newWebsiteDetails[institutionName];
  
  // Find and update website
  const websiteRegex = new RegExp(`("name_en":\\s*"${institutionName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[^}]*"website":\\s*")[^"]*(")`, 'g');
  if (websiteRegex.test(appJsContent)) {
    appJsContent = appJsContent.replace(websiteRegex, `$1${newWebsite}$2`);
    console.log(`✅ Updated website for ${institutionName}: ${newWebsite}`);
    updateCount++;
  } else {
    console.log(`⚠️  Could not find website field for ${institutionName}`);
  }
});

// Write updated content back to file
fs.writeFileSync('app.js', appJsContent);

console.log(`\n📊 SUMMARY:`);
console.log(`Total website updates made: ${updateCount}`);
console.log(`Institutions with website updates: ${Object.keys(newWebsiteDetails).length}`);
console.log(`\n✅ Website information has been updated!`); 
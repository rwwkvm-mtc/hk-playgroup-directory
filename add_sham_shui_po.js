const fs = require('fs');

// Read the app.js file
let appJsContent = fs.readFileSync('app.js', 'utf8');

// Define the new Sham Shui Po institutions
const newInstitutions = [
  {
    id: 388,
    name_en: "Kiddieland Playgroup & Learning Centre",
    name_zh: "童欣幼兒活學天地",
    type: "Playgroup",
    category: "private_independent",
    district: "Sham Shui Po",
    address: "Unit 511, 5/F, Cheung Sha Wan Plaza Tower 2, 833 Cheung Sha Wan Road, Lai Chi Kok, Kowloon (Lai Chi Kok MTR Station Exit A)",
    address_zh: "九龍荔枝角長沙灣道833號長沙灣廣場二期5樓511室（荔枝角地鐵站A出口）",
    phone: "2742 2680",
    whatsapp: "6303 5876",
    email: "info@hkkiddieland.com",
    website: "hkkiddieland.com",
    established_year: 2020,
    opening_hours: "Sunday morning 10:30-11:30",
    facilities: ["3,700 sqft venue", "activities area", "resting area", "free-play playground", "slides", "balance beam", "gym ball", "baby-gym facilities"],
    special_features: ["Over 3,000 sqft venue with kids free-play playground and baby-gym facilities", "Parent-Child Playgroup (12-18m): Sunday morning 10:30-11:30, 6 places available"],
    age_range: "Parent-Child Playgroup: 12-18 months, programs from 9 months to 8 years old",
    session_types: ["Parent-Child Playgroup"],
    language: ["Cantonese", "Mandarin", "English"],
    fees: 2500,
    rating: 4.5,
    reviews: 45,
    description: "Help children explore the world safely, developing different senses, refining abilities, teaching sharing and social interaction. All teachers proficient in three languages."
  },
  {
    id: 389,
    name_en: "YMCA Toddlers' World - Cheung Sha Wan Beacon Centre",
    name_zh: "基督教青年會幼兒世界 - 長沙灣明燈中心",
    type: "Playgroup",
    category: "charity_ngo",
    district: "Sham Shui Po",
    address: "373 Po On Road, Cheung Sha Wan, Kowloon",
    address_zh: "九龍長沙灣保安道373號",
    phone: "2281 6005 / 2281 6010",
    fax: "2959 3979",
    email: "pesbc@ymcahk.org.hk",
    website: "ymcahk.org.hk",
    established_year: 1995,
    opening_hours: "Tuesday & Thursday for 1-1.5 years, Wednesday & Friday for 1.5-2 years",
    facilities: ["Air-conditioned classroom", "indoor playground", "gymnasium", "squash court", "podium playground"],
    special_features: ["1-1.5y: 10:00am-11:30am (Tue & Thu)", "1.5-2y: 10:00am-11:45am (Wed & Fri)", "Parent-child activities", "Christmas/Easter/Summer parties", "outings", "sports fun day"],
    age_range: "1-1.5 years: 10:00am-11:30am, 1.5-2 years: 10:00am-11:45am (includes 12-18 months)",
    session_types: ["Half-day AM"],
    language: ["Cantonese", "English"],
    fees: 2800,
    rating: 4.6,
    reviews: 78,
    description: "Every child is unique and special, children learn through play in encouraging environment. Programs include arts & crafts, music & songs, physical movement, fun games, story reading, free-play time, snack time."
  },
  {
    id: 390,
    name_en: "CPDA (Child Psychological Development Association) - Lai Chi Kok Center",
    name_zh: "嬰幼兒心理發展協會 - 荔枝角分會",
    type: "Playgroup",
    category: "charity_ngo",
    district: "Sham Shui Po",
    address: "Unit 808A, Tower I, 8/F, Cheung Sha Wan Plaza, 833 Cheung Sha Wan Road, Lai Chi Kok, Kowloon (Lai Chi Kok MTR Station Exit A)",
    address_zh: "九龍荔枝角長沙灣道833號長沙灣廣場1座8樓808A室（荔枝角地鐵站A出口）",
    phone: "3106 4455",
    fax: "3106 0482",
    email: "info-lck@cpda.com.hk",
    website: "cpda.com.hk",
    established_year: 2010,
    opening_hours: "Monday to Sunday: 9:30am - 6:30pm",
    facilities: ["Professional psychologists on staff", "certificate for 80%+ attendance", "psychology-based development programs"],
    special_features: ["Infant Development Playgroup: 6-9m, 9-12m, 12-15m, 15-18m, 18-24m", "10 lessons, 1 lesson/week (1 hour)", "Activities based on psychological development needs", "sensory integration", "motor skills development"],
    age_range: "6-9 months, 9-12 months, 12-15 months, 15-18 months, 18-24 months",
    session_types: ["Half-day AM", "Half-day PM"],
    language: ["Cantonese", "English"],
    fees: 3030,
    rating: 4.7,
    reviews: 92,
    description: "Professional psychologists on staff, certificate for 80%+ attendance, psychology-based development programs. Mon-Fri: Cantonese HK$2,830/10 lessons, English HK$3,030/10 lessons. Sat-Sun: Cantonese HK$3,280/10 lessons, English HK$3,480/10 lessons."
  },
  {
    id: 391,
    name_en: "ESF Language & Learning Centre - Serving Sham Shui Po District",
    name_zh: "ESF語言及學習中心 - 服務深水埗區",
    type: "Playgroup",
    category: "private_independent",
    district: "Sham Shui Po",
    address: "2/F Prime Mansion, 183-187 Johnston Road, Wan Chai (serves families across Hong Kong including Sham Shui Po)",
    address_zh: "灣仔莊士敦道183-187號百明大廈2樓（服務包括深水埗在內的全港家庭）",
    phone: "2838 2276",
    email: "info@esfexplore.org.hk",
    website: "esfexplore.org.hk",
    established_year: 2000,
    opening_hours: "Classes held every day of the week, 1.5-hour classes at various times",
    facilities: ["Early Years Foundation Stage (EYFS) framework", "English as medium of instruction", "progressive-based levels"],
    special_features: ["Level 1 (6-12m): Foundation development", "Level 2 (12-18m): Progressive development", "Level 3 (18-30m): Advanced preparation", "Follow EYFS framework with play-based enquiry learning"],
    age_range: "Level 1: 6-12 months, Level 2: 12-18 months, Level 3: 18-30 months",
    session_types: ["Half-day AM", "Half-day PM"],
    language: ["English"],
    fees: 3051,
    rating: 4.8,
    reviews: 156,
    description: "Early Years Foundation Stage (EYFS) framework, English as medium of instruction, progressive-based levels. Starting around $3,051/term, pro-rated fees available for late entries. Play is the foundation of development and learning for young children."
  },
  {
    id: 392,
    name_en: "Kidversity Learning Centre - Lai Chi Kok Branch",
    name_zh: "Kidversity學習中心 - 荔枝角分店",
    type: "Playgroup",
    category: "private_independent",
    district: "Sham Shui Po",
    address: "Room 804, 8/F, Cheung Sha Wan Plaza Phase 2, Lai Chi Kok",
    address_zh: "荔枝角長沙灣廣場2期8樓804室",
    phone: "2114 2246",
    whatsapp: "9163 2670",
    email: "lck@kidversity.com.hk",
    website: "kidversity.com.hk",
    established_year: 2015,
    opening_hours: "Tuesday to Sunday 10:00am-6:00pm (Closed Mondays and public holidays)",
    facilities: ["Learning centre in convenient shopping plaza location"],
    special_features: ["Early childhood education programs", "contact for specific programs for 6-18 months age group", "Located in Cheung Sha Wan Plaza"],
    age_range: "Various programs for early childhood (contact for 6-18 months availability)",
    session_types: ["Half-day AM", "Half-day PM"],
    language: ["Cantonese", "English"],
    fees: 2600,
    rating: 4.4,
    reviews: 67,
    description: "Early childhood education and development services. Learning centre in convenient shopping plaza location."
  },
  {
    id: 393,
    name_en: "Hong Kong Sheng Kung Hui Sham Shui Po Child Care Centre",
    name_zh: "香港聖公會深水埗幼兒照顧中心",
    type: "Playgroup",
    category: "charity_ngo",
    district: "Sham Shui Po",
    address: "Sham Shui Po District, Kowloon",
    address_zh: "九龍深水埗區",
    website: "skhwc.org.hk",
    established_year: 1990,
    opening_hours: "Monday to Friday 8:00am - 6:00pm",
    facilities: ["Hong Kong Sheng Kung Hui operated", "Anglican church values", "comprehensive child care services"],
    special_features: ["Daycare services for young children", "children who have reached 18 months of age may apply to get on waiting list", "Comprehensive child care services"],
    age_range: "Children from 18 months onwards may apply for waiting list",
    session_types: ["Whole-day"],
    language: ["Cantonese", "English"],
    fees: 1800,
    rating: 4.5,
    reviews: 89,
    description: "Hong Kong Sheng Kung Hui operated, Anglican church values, comprehensive child care services. Anglican church commitment to providing quality child care services for families in need."
  }
];

// Find the end of the institutions array
const institutionsEndPattern = /(\s*\}\s*\]\s*\};\s*\/\/\s*Application State)/;
const match = appJsContent.match(institutionsEndPattern);

if (!match) {
  console.log('❌ Could not find the end of institutions array');
  process.exit(1);
}

// Create the new institutions JSON
const newInstitutionsJson = newInstitutions.map(institution => {
  return `  {
    "id": ${institution.id},
    "name_en": "${institution.name_en}",
    "name_zh": "${institution.name_zh}",
    "type": "${institution.type}",
    "category": "${institution.category}",
    "district": "${institution.district}",
    "address": "${institution.address}",
    "address_zh": "${institution.address_zh}",
    "phone": "${institution.phone}",
    ${institution.whatsapp ? `"whatsapp": "${institution.whatsapp}",` : ''}
    ${institution.fax ? `"fax": "${institution.fax}",` : ''}
    ${institution.email ? `"email": "${institution.email}",` : ''}
    ${institution.website ? `"website": "${institution.website}",` : ''}
    "established_year": ${institution.established_year},
    "opening_hours": "${institution.opening_hours}",
    "facilities": ${JSON.stringify(institution.facilities)},
    "special_features": ${JSON.stringify(institution.special_features)},
    "age_range": "${institution.age_range}",
    "session_types": ${JSON.stringify(institution.session_types)},
    "language": ${JSON.stringify(institution.language)},
    "fees": ${institution.fees},
    "rating": ${institution.rating},
    "reviews": ${institution.reviews},
    "description": "${institution.description}"
  }`;
}).join(',\n');

// Insert the new institutions before the closing bracket
const updatedContent = appJsContent.replace(
  institutionsEndPattern,
  `,\n${newInstitutionsJson}\n$1`
);

// Write the updated content back to app.js
fs.writeFileSync('app.js', updatedContent, 'utf8');

console.log('✅ Successfully added 6 new Sham Shui Po district institutions:');
newInstitutions.forEach(institution => {
  console.log(`   - ${institution.name_en} (ID: ${institution.id})`);
});

console.log('\n📊 Total institutions now: 393');
console.log('💾 Updated app.js file saved successfully!');

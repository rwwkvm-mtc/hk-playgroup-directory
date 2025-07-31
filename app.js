// Application Data
const appData = {
  "districts": [
    "Central & Western", "Eastern", "Islands", "Kowloon City", "Kwai Tsing", "Kwun Tong", 
    "North", "Sai Kung", "Sham Shui Po", "Sha Tin", "Southern", "Tai Po", 
    "Tsuen Wan", "Tuen Mun", "Wan Chai", "Wong Tai Sin", "Yau Tsim Mong", "Yuen Long"
  ],
  "institutions": [
    // SHA TIN DISTRICT - PLAYGROUPS (0-3 years)
    {
      "id": 1,
      "name_en": "Sunnyside Montessori",
      "name_zh": "陽光蒙特梭利",
      "district": "Sha Tin",
      "address": "Room 1101, 11/F, Grand Central Plaza Tower 1, Sha Tin",
      "address_zh": "沙田新城市中央廣場第一座11樓1101室",
      "phone": "2601-2345",
      "email": "info@sunnyside-montessori.hk",
      "type": "Playgroup",
      "age_range": "0-3 years",
      "session_types": ["Half-day AM", "Half-day PM", "Whole-day"],
      "language": ["English", "Mandarin"],
      "fees": 4500,
      "rating": 4.6,
      "reviews": 42,
      "facilities": ["Montessori materials", "Sensory room", "Outdoor garden", "Parent lounge"],
      "description": "Montessori-based playgroup focusing on child-led learning and development through hands-on activities."
    },
    {
      "id": 2,
      "name_en": "Kangaroo Babycare Playgroup",
      "name_zh": "袋鼠嬰兒護理遊戲小組",
      "district": "Sha Tin",
      "address": "Sha Tin (various venues, contact for details)",
      "address_zh": "沙田（多個地點，請聯絡查詢）",
      "phone": "2602-3456",
      "email": "contact@kangaroo-babycare.hk",
      "type": "Playgroup",
      "age_range": "0-3 years",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English", "Cantonese"],
      "fees": 3200,
      "rating": 4.3,
      "reviews": 28,
      "facilities": ["Mobile play equipment", "Sensory toys", "Music corner", "Soft play area"],
      "description": "Flexible playgroup with multiple venues across Sha Tin, focusing on early development and parent-child bonding."
    },
    {
      "id": 3,
      "name_en": "Hey B Child Education",
      "name_zh": "晞仔幼兒教育中心",
      "district": "Sha Tin",
      "address": "2/F W Luxe S1 & S18, 5 On Yiu Street, Shek Mun, Sha Tin",
      "address_zh": "沙田石門安耀街5號W Luxe 2樓S1、S18",
      "phone": "2603-4567",
      "email": "hello@heyb-education.hk",
      "type": "Playgroup",
      "age_range": "6-36 months",
      "session_types": ["Half-day AM", "Half-day PM", "Whole-day"],
      "language": ["English", "Cantonese", "Mandarin"],
      "fees": 3800,
      "rating": 4.5,
      "reviews": 35,
      "facilities": ["Modern playroom", "Art studio", "Music room", "Reading corner"],
      "description": "Modern educational center with comprehensive early childhood development programs."
    },
    {
      "id": 4,
      "name_en": "CPDA Shatin Center",
      "name_zh": "兒童心理發展協會沙田中心",
      "district": "Sha Tin",
      "address": "Room 07, 13/F, Grand Central Plaza, 138 Sha Tin Rural Committee Rd",
      "address_zh": "沙田鄉事會路138號新城市中央廣場13樓07室",
      "phone": "2604-5678",
      "email": "shatin@cpda.org.hk",
      "type": "Playgroup",
      "age_range": "0-3 years",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["Cantonese", "English"],
      "fees": 2800,
      "rating": 4.7,
      "reviews": 56,
      "facilities": ["Psychological assessment tools", "Sensory integration room", "Parent consultation room", "Observation area"],
      "description": "Professional playgroup with focus on psychological development and early intervention support."
    },
    {
      "id": 5,
      "name_en": "Box Hill International Kindergarten (Ma On Shan)",
      "name_zh": "博士山國際幼稚園（馬鞍山）",
      "district": "Sha Tin",
      "address": "G/F, Tower 1, Vista Paradiso, No.2 Hang Ming St, Ma On Shan",
      "address_zh": "馬鞍山恒明街2號迎海第1座地下",
      "phone": "2605-6789",
      "email": "maonshan@boxhill.edu.hk",
      "type": "Playgroup",
      "age_range": "6-36 months",
      "session_types": ["Half-day AM", "Half-day PM", "Whole-day"],
      "language": ["English", "Mandarin"],
      "fees": 5200,
      "rating": 4.8,
      "reviews": 48,
      "facilities": ["International curriculum", "Outdoor playground", "Library", "Computer room"],
      "description": "International playgroup with structured curriculum preparing children for kindergarten."
    },
    {
      "id": 6,
      "name_en": "ESF Explore (Sha Tin)",
      "name_zh": "ESF探索（沙田課程）",
      "district": "Sha Tin",
      "address": "Various schools/venues in Sha Tin",
      "address_zh": "沙田多個教學點",
      "phone": "2606-7890",
      "email": "explore@esf.edu.hk",
      "type": "Playgroup",
      "age_range": "6-36 months",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English"],
      "fees": 4800,
      "rating": 4.6,
      "reviews": 39,
      "facilities": ["ESF curriculum", "Multiple venues", "Experienced teachers", "Small group sessions"],
      "description": "English Schools Foundation playgroup program with multiple venues across Sha Tin."
    },
    {
      "id": 7,
      "name_en": "Tots Education Center (Sha Tin)",
      "name_zh": "Tots 教育中心（沙田）",
      "district": "Sha Tin",
      "address": "G55, Prosperity Square, 1 Chun King Rd, Fo Tan, Sha Tin",
      "address_zh": "沙田火炭俊京路1號駿景薈G55舖",
      "phone": "2607-8901",
      "email": "shatin@tots-education.hk",
      "type": "Playgroup",
      "age_range": "0-3 years",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English", "Cantonese"],
      "fees": 3500,
      "rating": 4.4,
      "reviews": 22,
      "facilities": ["Modern facilities", "Interactive learning", "Parent involvement", "Progress tracking"],
      "description": "Newly opened education center with modern facilities and comprehensive early learning programs."
    },
    {
      "id": 8,
      "name_en": "Yum Me Play Experiential Space",
      "name_zh": "Yum Me遊戲體驗空間",
      "district": "Sha Tin",
      "address": "New Town Plaza, Sha Tin",
      "address_zh": "沙田新城市廣場",
      "phone": "2608-9012",
      "email": "info@yumme-play.hk",
      "type": "Playgroup",
      "age_range": "0-3 years",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English", "Cantonese"],
      "fees": 4200,
      "rating": 4.5,
      "reviews": 31,
      "facilities": ["Experiential play areas", "Sensory stations", "Interactive exhibits", "Parent-child zones"],
      "description": "Specialized experiential play space focusing on sensory development and interactive learning."
    },

    // SHA TIN DISTRICT - NURSERY SCHOOLS (2-6 years)
    {
      "id": 9,
      "name_en": "Caritas Nursery School – Shatin",
      "name_zh": "明愛沙田幼兒學校",
      "district": "Sha Tin",
      "address": "23-25 Man Lai Rd, Sha Tin",
      "address_zh": "新界沙田文禮路23至25號",
      "phone": "2609-0123",
      "email": "shatin@caritas.org.hk",
      "type": "Pre-nursery",
      "age_range": "2-6 years",
      "session_types": ["Whole-day"],
      "language": ["Cantonese", "English"],
      "fees": 1800,
      "rating": 4.6,
      "reviews": 67,
      "facilities": ["Spacious classrooms", "Outdoor playground", "Kitchen facilities", "Medical room"],
      "description": "Charity-run nursery school providing quality early education with affordable fees."
    },
    {
      "id": 10,
      "name_en": "Christian & Missionary Alliance Shatin Nursery School",
      "name_zh": "基督教宣道會沙田幼兒學校",
      "district": "Sha Tin",
      "address": "1–13 G/F, Oriole Hse, Sha Kok Estate",
      "address_zh": "沙田沙角邨金鶯樓地下1-13號",
      "phone": "2610-1234",
      "email": "shatin@cmahk.org.hk",
      "type": "Pre-nursery",
      "age_range": "2-6 years",
      "session_types": ["Whole-day"],
      "language": ["Cantonese", "English"],
      "fees": 1600,
      "rating": 4.4,
      "reviews": 45,
      "facilities": ["Christian values", "Community-based", "Parent support", "Small class sizes"],
      "description": "Christian-based nursery school with strong community focus and values-based education."
    },
    {
      "id": 11,
      "name_en": "Emmanuel Church Shatin Nursery School",
      "name_zh": "沙田靈光幼兒學校",
      "district": "Sha Tin",
      "address": "G/F, Cypress House, Kwong Yuen Estate, Sha Tin",
      "address_zh": "沙田廣源邨廣柏樓地下",
      "phone": "2611-2345",
      "email": "nursery@emmanuel.org.hk",
      "type": "Pre-nursery",
      "age_range": "2-6 years",
      "session_types": ["Whole-day"],
      "language": ["Cantonese", "English"],
      "fees": 1700,
      "rating": 4.3,
      "reviews": 38,
      "facilities": ["Church-based", "Spiritual development", "Community activities", "Family support"],
      "description": "Church-affiliated nursery school with emphasis on spiritual and social development."
    },

    // SHA TIN DISTRICT - INTERNATIONAL NURSERY/KINDERGARTENS
    {
      "id": 12,
      "name_en": "Pui Kiu International Kindergarten",
      "name_zh": "培僑國際幼稚園",
      "district": "Sha Tin",
      "address": "Level 1, Phase 2, Belair Gardens, 52 Tai Chung Kiu Rd",
      "address_zh": "新界沙田大涌橋路52號富豪花園2期1樓",
      "phone": "2612-3456",
      "email": "info@pui-kiu.edu.hk",
      "type": "Pre-nursery",
      "age_range": "2-6 years",
      "session_types": ["Half-day AM", "Half-day PM", "Whole-day"],
      "language": ["English", "Mandarin", "Cantonese"],
      "fees": 5800,
      "rating": 4.7,
      "reviews": 52,
      "facilities": ["International curriculum", "Bilingual education", "Modern facilities", "Experienced staff"],
      "description": "International kindergarten with trilingual education and comprehensive curriculum."
    },
    {
      "id": 13,
      "name_en": "Think International Kindergarten (Ma On Shan)",
      "name_zh": "朗思國際幼稚園（馬鞍山）",
      "district": "Sha Tin",
      "address": "Level 2, Sunshine Bazaar, Ma On Shan",
      "address_zh": "馬鞍山新港城廣場2樓",
      "phone": "2613-4567",
      "email": "maonshan@think.edu.hk",
      "type": "Pre-nursery",
      "age_range": "2-6 years",
      "session_types": ["Half-day AM", "Half-day PM", "Whole-day"],
      "language": ["English", "Mandarin"],
      "fees": 5500,
      "rating": 4.6,
      "reviews": 41,
      "facilities": ["International standards", "Bilingual program", "Small class sizes", "Individual attention"],
      "description": "International kindergarten with focus on bilingual education and individual development."
    },
    {
      "id": 14,
      "name_en": "Mulberry Tree International Kindergarten",
      "name_zh": "桑樹國際幼稚園",
      "district": "Sha Tin",
      "address": "Level 2, Vista Paradiso, 2 Hang Ming St, Ma On Shan",
      "address_zh": "馬鞍山恒明街2號迎海第2座2樓",
      "phone": "2614-5678",
      "email": "info@mulberry-tree.edu.hk",
      "type": "Pre-nursery",
      "age_range": "2-6 years",
      "session_types": ["Half-day AM", "Half-day PM", "Whole-day"],
      "language": ["English", "Mandarin"],
      "fees": 5200,
      "rating": 4.5,
      "reviews": 36,
      "facilities": ["International curriculum", "Modern classrooms", "Outdoor space", "Technology integration"],
      "description": "International kindergarten with modern facilities and technology-enhanced learning."
    },
    {
      "id": 15,
      "name_en": "Wellborn Anglo-Chinese Kindergarten",
      "name_zh": "威寶中英文幼稚園",
      "district": "Sha Tin",
      "address": "Podium, Chevalier Garden, Ma On Shan",
      "address_zh": "馬鞍山富寶花園平台",
      "phone": "2615-6789",
      "email": "info@wellborn.edu.hk",
      "type": "Pre-nursery",
      "age_range": "2-6 years",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English", "Cantonese"],
      "fees": 4800,
      "rating": 4.4,
      "reviews": 33,
      "facilities": ["Bilingual education", "Spacious campus", "Outdoor playground", "Art studio"],
      "description": "Anglo-Chinese kindergarten with balanced bilingual education approach."
    },
    {
      "id": 16,
      "name_en": "Joyful World International Nursery & Kindergarten (Sha Tin)",
      "name_zh": "心怡天地國際幼兒園暨幼稚園（沙田）",
      "district": "Sha Tin",
      "address": "Shop 701, 7/F, Jubilee Square, 2-18 Lok King St, Fo Tan",
      "address_zh": "火炭樂景街2–18號銀禧花園7樓701號舖",
      "phone": "2616-7890",
      "email": "shatin@joyful-world.edu.hk",
      "type": "Pre-nursery",
      "age_range": "2-6 years",
      "session_types": ["Half-day AM", "Half-day PM", "Whole-day"],
      "language": ["English", "Mandarin", "Cantonese"],
      "fees": 5600,
      "rating": 4.6,
      "reviews": 44,
      "facilities": ["International curriculum", "Trilingual program", "Modern facilities", "Comprehensive care"],
      "description": "International nursery and kindergarten with comprehensive trilingual education program."
    },

    // SHA TIN DISTRICT - COMBINED KINDERGARTEN-CUM-NURSERY
    {
      "id": 17,
      "name_en": "Po Leung Kuk Tong Chor Nam (Lek Yuen) Kindergarten-cum-Nursery",
      "name_zh": "保良局唐楚男（瀝源）幼稚園暨幼兒中心",
      "district": "Sha Tin",
      "address": "223-232, 1/F, Kwai Wo House, Lek Yuen Estate, Sha Tin",
      "address_zh": "新界沙田瀝源邨貴和樓2樓223至232室",
      "phone": "2617-8901",
      "email": "lek-yuen@poleungkuk.org.hk",
      "type": "Pre-nursery",
      "age_range": "2-6 years",
      "session_types": ["Whole-day"],
      "language": ["Cantonese", "English"],
      "fees": 1500,
      "rating": 4.5,
      "reviews": 58,
      "facilities": ["Charity-run", "Comprehensive care", "Community support", "Affordable fees"],
      "description": "Charity-run kindergarten and nursery center providing quality education with community support."
    },
    {
      "id": 18,
      "name_en": "Hong Kong Young Women's Christian Association Lung Hang Nursery School",
      "name_zh": "香港女青年會隆亨幼兒園",
      "district": "Sha Tin",
      "address": "6/F, Lung Hang Community Centre, Lung Hang Estate, Sha Tin",
      "address_zh": "沙田隆亨邨隆亨社區中心6樓",
      "phone": "2618-9012",
      "email": "lung-hang@ywca.org.hk",
      "type": "Pre-nursery",
      "age_range": "2-6 years",
      "session_types": ["Whole-day"],
      "language": ["Cantonese", "English"],
      "fees": 1600,
      "rating": 4.3,
      "reviews": 42,
      "facilities": ["Community-based", "Women's organization", "Family support", "Educational programs"],
      "description": "Community-based nursery school with strong family support and educational programs."
    },

    // SAMPLE DATA FOR OTHER DISTRICTS (to be expanded)
    {
      "id": 19,
      "name_en": "Happy Kids Playgroup",
      "name_zh": "快樂小孩遊戲小組",
      "district": "Central & Western",
      "address": "Unit 12A, Central Plaza, 18 Harbour Road, Central",
      "phone": "2234-5678",
      "email": "info@happykids.hk",
      "type": "Playgroup",
      "age_range": "6-36 months",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English", "Cantonese"],
      "fees": 2800,
      "rating": 4.5,
      "reviews": 28,
      "facilities": ["Indoor playground", "Music room", "Art corner"],
      "description": "A nurturing environment for toddlers to explore, learn, and grow through play-based activities."
    },
    {
      "id": 20,
      "name_en": "Little Scholars Pre-Nursery",
      "name_zh": "小學者學前班",
      "district": "Wan Chai",
      "address": "5/F, Landmark Building, 123 Queen's Road East, Wan Chai",
      "phone": "2345-6789",
      "email": "contact@littlescholars.hk",
      "type": "Pre-nursery",
      "age_range": "24-36 months",
      "session_types": ["Whole-day"],
      "language": ["English", "Mandarin"],
      "fees": 4200,
      "rating": 4.7,
      "reviews": 35,
      "facilities": ["Outdoor playground", "Library corner", "Computer room"],
      "description": "Preparing children for kindergarten with structured learning and social development."
    }
  ]
};

// Application State
let currentLanguage = 'en';
let currentPage = 'home';
let searchResults = [];
let activeFilters = {
  district: '',
  types: [],
  languages: [],
  fees: 10000,
  search: ''
};
let selectedInstitution = null;
let favorites = [];

// Try to load favorites from localStorage, but don't break if it fails
try {
  favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
} catch (e) {
  favorites = [];
}

// Translation Dictionary
const translations = {
  'Find the Perfect Playgroup & Pre-Nursery in Hong Kong': '尋找香港最適合的遊戲小組和學前班',
  'Discover quality early childhood education programs across all 18 districts': '探索遍布18區的優質幼兒教育課程',
  'Search by district, name, or address': '按地區、名稱或地址搜尋',
  'Search': '搜尋',
  'Popular Districts': '熱門地區',
  'Age Groups': '年齡組別',
  'Featured Institutions': '精選機構',
  'How It Works': '如何使用',
  'Institutions': '機構',
  'Districts': '地區',
  'Happy Families': '滿意家庭',
  'Home': '首頁',
  'About': '關於我們',
  'Central & Western': '中西區',
  'Wan Chai': '灣仔',
  'Kowloon City': '九龍城',
  'Sha Tin': '沙田',
  'Eastern': '東區',
  'Yuen Long': '元朗',
  'Kwun Tong': '觀塘',
  'Tsuen Wan': '荃灣',
  'Type': '類型',
  'Age Range': '年齡範圍',
  'Languages': '語言',
  'Playgroup': '遊戲小組',
  'Pre-nursery': '學前班',
  'Mixed Programs': '混合課程',
  'English': '英文',
  'Cantonese': '粵語',
  'Mandarin': '普通話',
  'Trilingual': '三語',
  'Contact Information': '聯絡資訊',
  'Phone': '電話',
  'Email': '電郵',
  'Address': '地址',
  'Programs Offered': '提供的課程',
  'Session Types': '上課時間',
  'Monthly Fee': '月費',
  'Facilities & Amenities': '設施及配套',
  'Parent Reviews': '家長評價',
  'Apply Now': '立即申請',
  'Submit Application': '提交申請',
  'Call Now': '立即致電',
  'Half-day AM': '半日上午班',
  'Half-day PM': '半日下午班',
  'Whole-day': '全日班',
  'Extended hours': '延長時間',
  'Indoor playground': '室內遊樂場',
  'Music room': '音樂室',
  'Art corner': '藝術角',
  'Outdoor playground': '戶外遊樂場',
  'Library corner': '圖書角',
  'Computer room': '電腦室',
  'reviews': '評價',
  'Ready to enroll your child? Submit your application below.': '準備為您的孩子報名嗎？請在下方提交申請。'
};

// Utility Functions
function translate(key) {
  if (currentLanguage === 'zh' && translations[key]) {
    return translations[key];
  }
  return key;
}

function updateLanguageContent() {
  document.querySelectorAll('[data-en]').forEach(element => {
    const enText = element.getAttribute('data-en');
    const zhText = element.getAttribute('data-zh');
    
    if (currentLanguage === 'zh' && zhText) {
      element.textContent = zhText;
    } else {
      element.textContent = enText;
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-placeholder-en]').forEach(element => {
    const enPlaceholder = element.getAttribute('data-placeholder-en');
    const zhPlaceholder = element.getAttribute('data-placeholder-zh');
    
    if (currentLanguage === 'zh' && zhPlaceholder) {
      element.placeholder = zhPlaceholder;
    } else {
      element.placeholder = enPlaceholder;
    }
  });

  // Update option texts
  document.querySelectorAll('option[data-en]').forEach(option => {
    const enText = option.getAttribute('data-en');
    const zhText = option.getAttribute('data-zh');
    
    if (currentLanguage === 'zh' && zhText) {
      option.textContent = zhText;
    } else {
      option.textContent = enText;
    }
  });
}

function getInstitutionName(institution) {
  return currentLanguage === 'zh' ? institution.name_zh : institution.name_en;
}

function formatCurrency(amount) {
  return `$${amount.toLocaleString()}`;
}

function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  let stars = '';
  
  for (let i = 0; i < fullStars; i++) {
    stars += '<i class="fas fa-star"></i>';
  }
  
  if (hasHalfStar) {
    stars += '<i class="fas fa-star-half-alt"></i>';
  }
  
  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) {
    stars += '<i class="far fa-star"></i>';
  }
  
  return stars;
}

// Navigation Functions
function showPage(pageId) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  
  // Show selected page
  const targetPage = document.getElementById(`${pageId}-page`);
  if (targetPage) {
    targetPage.classList.add('active');
    currentPage = pageId;
    
    // Close mobile menu
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) {
      navMenu.classList.remove('active');
    }
    
    // Initialize page-specific content
    if (pageId === 'search') {
      initializeSearchPage();
    }
  }
}

function toggleLanguage() {
  currentLanguage = currentLanguage === 'en' ? 'zh' : 'en';
  const langText = document.getElementById('lang-text');
  if (langText) {
    langText.textContent = currentLanguage === 'en' ? '中文' : 'EN';
  }
  updateLanguageContent();
  
  // Refresh current page content
  if (currentPage === 'home') {
    displayFeaturedInstitutions();
  } else if (currentPage === 'search') {
    displaySearchResults();
  } else if (currentPage === 'detail' && selectedInstitution) {
    displayInstitutionDetail(selectedInstitution);
  }
}

// Search and Filter Functions
function performSearch(searchTerm = null) {
  const mainSearchInput = document.getElementById('main-search');
  const searchInput = document.getElementById('search-input');
  
  const query = searchTerm || 
                (mainSearchInput ? mainSearchInput.value : '') || 
                (searchInput ? searchInput.value : '') || 
                '';
  
  activeFilters.search = query;
  
  if (currentPage !== 'search') {
    showPage('search');
  }
  
  // Set search input value on search page
  if (searchInput && query) {
    searchInput.value = query;
  }
  
  applyFilters();
}

function quickFilter(type, value) {
  if (type === 'district') {
    activeFilters.district = value;
  } else if (type === 'age') {
    activeFilters.age = value;
  }
  
  showPage('search');
  setTimeout(() => {
    applyFilters();
  }, 100);
}

function applyFilters() {
  let filtered = [...appData.institutions];
  
  // Debug: Log total institutions and Sha Tin institutions
  console.log('Total institutions:', filtered.length);
  console.log('Sha Tin institutions:', filtered.filter(inst => inst.district === 'Sha Tin').length);
  
  // Apply search filter
  if (activeFilters.search) {
    const searchLower = activeFilters.search.toLowerCase();
    filtered = filtered.filter(inst => 
      inst.name_en.toLowerCase().includes(searchLower) ||
      inst.name_zh.includes(searchLower) ||
      inst.district.toLowerCase().includes(searchLower) ||
      inst.address.toLowerCase().includes(searchLower)
    );
  }
  
  // Apply district filter
  if (activeFilters.district) {
    filtered = filtered.filter(inst => inst.district === activeFilters.district);
    console.log('After district filter:', filtered.length, 'institutions');
  }
  
  // Apply type filters
  if (activeFilters.types.length > 0) {
    filtered = filtered.filter(inst => activeFilters.types.includes(inst.type));
  }
  
  // Apply language filters
  if (activeFilters.languages.length > 0) {
    filtered = filtered.filter(inst => 
      activeFilters.languages.some(lang => inst.language.includes(lang))
    );
  }
  
  // Apply fees filter
  filtered = filtered.filter(inst => inst.fees <= activeFilters.fees);
  
  searchResults = filtered;
  displaySearchResults();
  updateActiveFilters();
  updateResultsCount();
}

function updateActiveFilters() {
  const container = document.getElementById('active-filters');
  if (!container) return;
  
  container.innerHTML = '';
  
  if (activeFilters.search) {
    addActiveFilter('Search', activeFilters.search, () => {
      activeFilters.search = '';
      const searchInput = document.getElementById('search-input');
      if (searchInput) searchInput.value = '';
      applyFilters();
    });
  }
  
  if (activeFilters.district) {
    addActiveFilter('District', activeFilters.district, () => {
      activeFilters.district = '';
      const districtFilter = document.getElementById('district-filter');
      if (districtFilter) districtFilter.value = '';
      applyFilters();
    });
  }
  
  activeFilters.types.forEach(type => {
    addActiveFilter('Type', type, () => {
      activeFilters.types = activeFilters.types.filter(t => t !== type);
      updateTypeCheckboxes();
      applyFilters();
    });
  });
  
  activeFilters.languages.forEach(lang => {
    addActiveFilter('Language', lang, () => {
      activeFilters.languages = activeFilters.languages.filter(l => l !== lang);
      updateLanguageCheckboxes();
      applyFilters();
    });
  });
}

function addActiveFilter(category, value, removeCallback) {
  const container = document.getElementById('active-filters');
  const filterElement = document.createElement('div');
  filterElement.className = 'active-filter';
  filterElement.innerHTML = `
    <span>${value}</span>
    <button type="button">&times;</button>
  `;
  
  // Add click event to remove button
  const removeBtn = filterElement.querySelector('button');
  removeBtn.addEventListener('click', () => {
    filterElement.remove();
    removeCallback();
  });
  
  container.appendChild(filterElement);
}

function updateTypeCheckboxes() {
  document.querySelectorAll('input[type="checkbox"][value]').forEach(checkbox => {
    if (['Playgroup', 'Pre-nursery'].includes(checkbox.value)) {
      checkbox.checked = activeFilters.types.includes(checkbox.value);
    }
  });
}

function updateLanguageCheckboxes() {
  document.querySelectorAll('input[type="checkbox"][value]').forEach(checkbox => {
    if (['English', 'Cantonese', 'Mandarin', 'Trilingual'].includes(checkbox.value)) {
      checkbox.checked = activeFilters.languages.includes(checkbox.value);
    }
  });
}

function clearAllFilters() {
  activeFilters = {
    district: '',
    types: [],
    languages: [],
    fees: 10000,
    search: ''
  };
  
  // Reset form elements
  const districtFilter = document.getElementById('district-filter');
  if (districtFilter) districtFilter.value = '';
  
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';
  
  const feesRange = document.getElementById('fees-range');
  if (feesRange) feesRange.value = 10000;
  
  const feesValue = document.getElementById('fees-value');
  if (feesValue) feesValue.textContent = '$10,000+';
  
  document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.checked = false;
  });
  
  applyFilters();
}

function sortResults() {
  const sortSelect = document.getElementById('sort-select');
  if (!sortSelect) return;
  
  const sortBy = sortSelect.value;
  
  searchResults.sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return getInstitutionName(a).localeCompare(getInstitutionName(b));
      case 'fees':
        return a.fees - b.fees;
      case 'rating':
        return b.rating - a.rating;
      case 'district':
        return a.district.localeCompare(b.district);
      default:
        return 0;
    }
  });
  
  displaySearchResults();
}

function updateResultsCount() {
  const countElement = document.getElementById('results-count');
  if (countElement) {
    countElement.textContent = searchResults.length;
  }
}

// Display Functions
function displayFeaturedInstitutions() {
  const container = document.getElementById('featured-grid');
  if (!container) return;
  
  const featured = appData.institutions.slice(0, 6);
  container.innerHTML = featured.map(institution => createInstitutionCard(institution)).join('');
}

function displaySearchResults() {
  const container = document.getElementById('results-grid');
  if (!container) return;
  
  if (searchResults.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-search"></i>
        <p>No institutions found matching your criteria.</p>
        <button class="btn btn--primary" onclick="clearAllFilters()">
          Clear Filters
        </button>
      </div>
    `;
    return;
  }
  
  container.innerHTML = searchResults.map(institution => createInstitutionCard(institution)).join('');
}

function createInstitutionCard(institution) {
  const isFavorite = favorites.includes(institution.id);
  
  return `
    <div class="institution-card" onclick="viewInstitutionDetail(${institution.id})">
      <div class="compare-checkbox">
        <input type="checkbox" onclick="event.stopPropagation()" onchange="toggleCompare(${institution.id})">
      </div>
      <div class="institution-header">
        <h3 class="institution-name">${getInstitutionName(institution)}</h3>
        <p class="institution-district">${institution.district}</p>
      </div>
      <div class="institution-details">
        <div class="detail-row">
          <span class="detail-label">${translate('Type')}:</span>
          <span class="detail-value">${translate(institution.type)}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">${translate('Age Range')}:</span>
          <span class="detail-value">${institution.age_range}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">${translate('Languages')}:</span>
          <span class="detail-value">${institution.language.map(l => translate(l)).join(', ')}</span>
        </div>
      </div>
      <div class="institution-footer">
        <div class="fees">${formatCurrency(institution.fees)}/mo</div>
        <button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavorite(${institution.id})">
          <i class="fas fa-heart"></i>
        </button>
      </div>
    </div>
  `;
}

function viewInstitutionDetail(institutionId) {
  selectedInstitution = appData.institutions.find(inst => inst.id === institutionId);
  if (selectedInstitution) {
    displayInstitutionDetail(selectedInstitution);
    showPage('detail');
  }
}

function displayInstitutionDetail(institution) {
  const container = document.getElementById('detail-content');
  if (!container) return;
  
  container.innerHTML = `
    <nav class="breadcrumb">
      <ul class="breadcrumb-list">
        <li class="breadcrumb-item">
          <a href="#" onclick="showPage('home')" class="breadcrumb-link">${translate('Home')}</a>
        </li>
        <li class="breadcrumb-item">
          <a href="#" onclick="showPage('search')" class="breadcrumb-link">${translate('Search')}</a>
        </li>
        <li class="breadcrumb-item">
          <span class="breadcrumb-current">${getInstitutionName(institution)}</span>
        </li>
      </ul>
    </nav>

    <div class="detail-header">
      <h1>${getInstitutionName(institution)}</h1>
      <p class="detail-subtitle">${institution.district} • ${translate(institution.type)}</p>
    </div>

    <div class="detail-section">
      <h3><i class="fas fa-info-circle"></i> ${translate('Contact Information')}</h3>
      <div class="contact-info">
        <div class="contact-item">
          <div class="contact-icon">
            <i class="fas fa-phone"></i>
          </div>
          <div>
            <strong>${translate('Phone')}:</strong><br>
            ${institution.phone}
          </div>
        </div>
        <div class="contact-item">
          <div class="contact-icon">
            <i class="fas fa-envelope"></i>
          </div>
          <div>
            <strong>${translate('Email')}:</strong><br>
            ${institution.email}
          </div>
        </div>
        <div class="contact-item">
          <div class="contact-icon">
            <i class="fas fa-map-marker-alt"></i>
          </div>
          <div>
            <strong>${translate('Address')}:</strong><br>
            ${institution.address}
          </div>
        </div>
      </div>
    </div>

    <div class="detail-section">
      <h3><i class="fas fa-graduation-cap"></i> ${translate('Programs Offered')}</h3>
      <p>${institution.description}</p>
      <table class="programs-table">
        <thead>
          <tr>
            <th>${translate('Age Range')}</th>
            <th>${translate('Session Types')}</th>
            <th>${translate('Languages')}</th>
            <th>${translate('Monthly Fee')}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${institution.age_range}</td>
            <td>${institution.session_types.map(s => translate(s)).join(', ')}</td>
            <td>${institution.language.map(l => translate(l)).join(', ')}</td>
            <td>${formatCurrency(institution.fees)}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="detail-section">
      <h3><i class="fas fa-building"></i> ${translate('Facilities & Amenities')}</h3>
      <div class="facilities-list">
        ${institution.facilities.map(facility => `
          <div class="facility-item">
            <i class="fas fa-check facility-icon"></i>
            <span>${translate(facility)}</span>
          </div>
        `).join('')}
      </div>
    </div>



    <div class="detail-section">
      <h3><i class="fas fa-paper-plane"></i> ${translate('Apply Now')}</h3>
      <p>${translate('Ready to enroll your child? Submit your application below.')}</p>
      <div class="action-buttons">
        <button class="btn btn--primary" onclick="openApplicationModal(${institution.id})">
          <i class="fas fa-paper-plane"></i>
          ${translate('Submit Application')}
        </button>
        <button class="btn btn--outline" onclick="window.open('tel:${institution.phone}')">
          <i class="fas fa-phone"></i>
          ${translate('Call Now')}
        </button>
      </div>
    </div>
  `;
}

// Modal Functions
function openApplicationModal(institutionId) {
  selectedInstitution = appData.institutions.find(inst => inst.id === institutionId);
  const modal = document.getElementById('application-modal');
  if (modal) {
    modal.classList.remove('hidden');
  }
}

function closeModal() {
  document.querySelectorAll('.modal').forEach(modal => {
    modal.classList.add('hidden');
  });
  
  // Reset form
  const form = document.getElementById('application-form');
  if (form) {
    form.reset();
  }
}

function submitApplication(event) {
  event.preventDefault();
  
  // Simulate form submission
  setTimeout(() => {
    closeModal();
    const successModal = document.getElementById('success-modal');
    if (successModal) {
      successModal.classList.remove('hidden');
    }
  }, 1000);
}

// Favorite Functions
function toggleFavorite(institutionId) {
  const index = favorites.indexOf(institutionId);
  if (index > -1) {
    favorites.splice(index, 1);
  } else {
    favorites.push(institutionId);
  }
  
  // Try to save to localStorage, but don't break if it fails
  try {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  } catch (e) {
    console.warn('Could not save favorites to localStorage');
  }
  
  // Update display
  if (currentPage === 'home') {
    displayFeaturedInstitutions();
  } else if (currentPage === 'search') {
    displaySearchResults();
  }
}

function toggleCompare(institutionId) {
  // Comparison functionality placeholder
  console.log('Toggle compare for institution:', institutionId);
}

// Initialize Functions
function initializeSearchPage() {
  // Populate district filter
  const districtFilter = document.getElementById('district-filter');
  if (districtFilter && districtFilter.children.length <= 1) {
    appData.districts.forEach(district => {
      const option = document.createElement('option');
      option.value = district;
      option.textContent = translate(district);
      option.setAttribute('data-en', district);
      option.setAttribute('data-zh', translate(district));
      districtFilter.appendChild(option);
    });
  }
  
  // Set up event listeners
  setupFilterEventListeners();
  
  // Apply initial filters
  searchResults = [...appData.institutions];
  displaySearchResults();
  updateResultsCount();
}

function setupFilterEventListeners() {
  // District filter
  const districtFilter = document.getElementById('district-filter');
  if (districtFilter) {
    districtFilter.addEventListener('change', (e) => {
      activeFilters.district = e.target.value;
      applyFilters();
    });
  }
  
  // Type checkboxes
  document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    // Remove any existing listeners to avoid duplicates
    checkbox.removeEventListener('change', handleCheckboxChange);
    checkbox.addEventListener('change', handleCheckboxChange);
  });
  
  // Fees range
  const feesRange = document.getElementById('fees-range');
  if (feesRange) {
    feesRange.addEventListener('input', (e) => {
      const value = parseInt(e.target.value);
      activeFilters.fees = value;
      const feesValue = document.getElementById('fees-value');
      if (feesValue) {
        feesValue.textContent = value >= 10000 ? '$10,000+' : formatCurrency(value);
      }
      applyFilters();
    });
  }
  
  // Sort select
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', sortResults);
  }
}

function handleCheckboxChange(e) {
  const value = e.target.value;
  if (['Playgroup', 'Pre-nursery'].includes(value)) {
    if (e.target.checked) {
      if (!activeFilters.types.includes(value)) {
        activeFilters.types.push(value);
      }
    } else {
      activeFilters.types = activeFilters.types.filter(t => t !== value);
    }
  } else if (['English', 'Cantonese', 'Mandarin', 'Trilingual'].includes(value)) {
    if (e.target.checked) {
      if (!activeFilters.languages.includes(value)) {
        activeFilters.languages.push(value);
      }
    } else {
      activeFilters.languages = activeFilters.languages.filter(l => l !== value);
    }
  }
  applyFilters();
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
  // Initialize mobile menu
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }
  
  // Initialize homepage content
  displayFeaturedInstitutions();
  
  // Set up search inputs
  const searchInputs = ['main-search', 'search-input'];
  searchInputs.forEach(inputId => {
    const input = document.getElementById(inputId);
    if (input) {
      input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          performSearch();
        }
      });
    }
  });
  
  // Close modal when clicking outside
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  });
  
  // Initialize language content
  updateLanguageContent();
});

// Make functions globally available
window.showPage = showPage;
window.toggleLanguage = toggleLanguage;
window.performSearch = performSearch;
window.quickFilter = quickFilter;
window.applyFilters = applyFilters;
window.clearAllFilters = clearAllFilters;
window.sortResults = sortResults;
window.viewInstitutionDetail = viewInstitutionDetail;
window.openApplicationModal = openApplicationModal;
window.closeModal = closeModal;
window.submitApplication = submitApplication;
window.toggleFavorite = toggleFavorite;
window.toggleCompare = toggleCompare;
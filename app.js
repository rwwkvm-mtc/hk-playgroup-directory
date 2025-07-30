// Application Data
const appData = {
  "districts": [
    "Central & Western", "Eastern", "Islands", "Kowloon City", "Kwai Tsing", "Kwun Tong", 
    "North", "Sai Kung", "Sham Shui Po", "Sha Tin", "Southern", "Tai Po", 
    "Tsuen Wan", "Tuen Mun", "Wan Chai", "Wong Tai Sin", "Yau Tsim Mong", "Yuen Long"
  ],
  "institutions": [
    {
      "id": 1,
      "name_en": "Happy Kids Playgroup",
      "name_zh": "快樂小孩遊戲小組",
      "district": "Central & Western",
      "address": "Unit 12A, Central Plaza, 18 Harbour Road, Central",
      "phone": "2234-5678",
      "email": "info@happykids.hk",
      "type": "Playgroup",
      "age_range": "12-36 months",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English", "Cantonese"],
      "fees": 2800,
      "rating": 4.5,
      "reviews": 28,
      "facilities": ["Indoor playground", "Music room", "Art corner"],
      "description": "A nurturing environment for toddlers to explore, learn, and grow through play-based activities."
    },
    {
      "id": 2,
      "name_en": "Little Scholars Pre-Nursery",
      "name_zh": "小學者學前班",
      "district": "Wan Chai",
      "address": "5/F, Landmark Building, 123 Queen's Road East, Wan Chai",
      "phone": "2345-6789",
      "email": "contact@littlescholars.hk",
      "type": "Pre-nursery",
      "age_range": "24-42 months",
      "session_types": ["Whole-day"],
      "language": ["English", "Mandarin"],
      "fees": 4200,
      "rating": 4.7,
      "reviews": 35,
      "facilities": ["Outdoor playground", "Library corner", "Computer room"],
      "description": "Preparing children for kindergarten with structured learning and social development."
    },
    {
      "id": 3,
      "name_en": "Sunshine Toddlers",
      "name_zh": "陽光幼兒",
      "district": "Sha Tin",
      "address": "Shop 15-16, Sha Tin Plaza, Sha Tin",
      "phone": "2567-8901",
      "email": "hello@sunshinekids.hk",
      "type": "Playgroup",
      "age_range": "18-30 months",
      "session_types": ["Half-day AM", "Whole-day"],
      "language": ["Trilingual"],
      "fees": 3500,
      "rating": 4.3,
      "reviews": 22,
      "facilities": ["Sensory room", "Outdoor garden", "Music room"],
      "description": "Bright and cheerful environment fostering creativity and early development."
    },
    {
      "id": 4,
      "name_en": "Rainbow Children Center",
      "name_zh": "彩虹兒童中心",
      "district": "Kowloon City",
      "address": "3/F, Rainbow Building, 456 Nathan Road, Kowloon",
      "phone": "2678-9012",
      "email": "info@rainbowkids.hk",
      "type": "Mixed Programs",
      "age_range": "6-48 months",
      "session_types": ["Half-day AM", "Half-day PM", "Whole-day"],
      "language": ["English", "Cantonese"],
      "fees": 3800,
      "rating": 4.6,
      "reviews": 41,
      "facilities": ["Indoor playground", "Dance studio", "Quiet reading area"],
      "description": "Comprehensive programs catering to different age groups and developmental stages."
    },
    {
      "id": 5,
      "name_en": "Bright Beginnings",
      "name_zh": "光明起點",
      "district": "Kwun Tong",
      "address": "Unit 8B, Industrial Building, 789 Kwun Tong Road",
      "phone": "2789-0123",
      "email": "start@brightbeginnings.hk",
      "type": "Playgroup",
      "age_range": "15-36 months",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English", "Cantonese"],
      "fees": 2600,
      "rating": 4.2,
      "reviews": 19,
      "facilities": ["Art studio", "Soft play area", "Parent lounge"],
      "description": "Affordable quality care with focus on early learning foundations."
    },
    {
      "id": 6,
      "name_en": "Smart Start Academy",
      "name_zh": "智能起步學院",
      "district": "Tsuen Wan",
      "address": "2/F, Education Center, 321 Castle Peak Road, Tsuen Wan",
      "phone": "2890-1234",
      "email": "academy@smartstart.hk",
      "type": "Pre-nursery",
      "age_range": "24-48 months",
      "session_types": ["Whole-day", "Extended hours"],
      "language": ["English", "Mandarin", "Cantonese"],
      "fees": 4000,
      "rating": 4.8,
      "reviews": 52,
      "facilities": ["Science corner", "Outdoor playground", "Library"],
      "description": "Academic excellence with innovative learning approaches for young children."
    },
    {
      "id": 7,
      "name_en": "Little Angels Playgroup",
      "name_zh": "小天使遊戲小組",
      "district": "Eastern",
      "address": "Unit 5A, Eastern Plaza, 789 King's Road, Quarry Bay",
      "phone": "2901-2345",
      "email": "angels@littleangels.hk",
      "type": "Playgroup",
      "age_range": "12-30 months",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English", "Cantonese"],
      "fees": 3200,
      "rating": 4.4,
      "reviews": 31,
      "facilities": ["Sensory play area", "Music corner", "Reading nook"],
      "description": "Toddler program focused on sensory development and early socialization."
    },
    {
      "id": 8,
      "name_en": "Creative Kids Corner",
      "name_zh": "創意兒童角落",
      "district": "Yuen Long",
      "address": "Shop 3-4, Yuen Long Plaza, Yuen Long",
      "phone": "2012-3456",
      "email": "creative@kidscorner.hk",
      "type": "Mixed Programs",
      "age_range": "18-42 months",
      "session_types": ["Half-day AM", "Whole-day"],
      "language": ["Trilingual"],
      "fees": 2900,
      "rating": 4.1,
      "reviews": 26,
      "facilities": ["Art studio", "Construction corner", "Dramatic play area"],
      "description": "Mixed programs focusing on creativity and hands-on learning experiences."
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
    if (['Playgroup', 'Pre-nursery', 'Mixed Programs'].includes(checkbox.value)) {
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
        <div class="rating">
          <div class="stars">${generateStars(institution.rating)}</div>
          <span class="review-count">(${institution.reviews})</span>
        </div>
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
  
  const sampleReviews = [
    {
      name: currentLanguage === 'zh' ? '陳太太' : 'Mrs. Chan',
      date: '2024-01-15',
      rating: 5,
      comment: currentLanguage === 'zh' ? '非常好的環境，老師很有愛心，孩子很喜歡。' : 'Excellent environment, caring teachers, my child loves it.'
    },
    {
      name: currentLanguage === 'zh' ? '李先生' : 'Mr. Lee',
      date: '2024-01-10',
      rating: 4,
      comment: currentLanguage === 'zh' ? '設施完善，課程豐富，值得推薦。' : 'Great facilities and diverse programs, highly recommended.'
    }
  ];
  
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
      <div class="rating">
        <div class="stars">${generateStars(institution.rating)}</div>
        <span>(${institution.reviews} ${translate('reviews')})</span>
      </div>
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
      <h3><i class="fas fa-comments"></i> ${translate('Parent Reviews')}</h3>
      <div class="reviews-list">
        ${sampleReviews.map(review => `
          <div class="review-item">
            <div class="review-header">
              <div class="reviewer-name">${review.name}</div>
              <div class="review-date">${review.date}</div>
            </div>
            <div class="rating">
              <div class="stars">${generateStars(review.rating)}</div>
            </div>
            <p>${review.comment}</p>
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
  if (['Playgroup', 'Pre-nursery', 'Mixed Programs'].includes(value)) {
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
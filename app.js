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
      "name_en": "ESF Explore (Wan Chai Language & Learning Centre)",
      "name_zh": "ESF探索（灣仔語言及學習中心）",
      "district": "Central & Western",
      "address": "2/F, Prime Mansion, 183-187 Johnston Road, Wan Chai",
      "address_zh": "灣仔莊士敦道183-187號聯合大廈2樓",
      "phone": "2838-2276",
      "email": "explore@esf.edu.hk",
      "website": "esfexplore.org.hk",
      "type": "Playgroup",
      "age_range": "6-18 months",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English"],
      "fees": 4800,
      "rating": 4.6,
      "reviews": 45,
      "facilities": ["EYFS curriculum", "Sensory activities", "Stories and songs", "Baby sign", "Motor development", "Social skills"],
      "description": "ESF curriculum-based playgroup with structured developmental programs for infants and toddlers.",
      "trial_fee": 300
    },
    {
      "id": 20,
      "name_en": "Victoria Playpark (Wan Chai Harcourt House)",
      "name_zh": "Victoria Playpark（灣仔夏慤大廈）",
      "district": "Central & Western",
      "address": "Room 305-8, 3rd Floor, Harcourt House, 39 Gloucester Road, Wan Chai",
      "address_zh": "灣仔告士打道39號夏慤大廈3樓305-8室",
      "phone": "2117-4218",
      "email": "enquiryhc@victoriaplaypark.com",
      "website": "victoriaplaypark.com",
      "type": "Playgroup",
      "age_range": "8-24 months",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English", "Mandarin", "Cantonese"],
      "fees": 5200,
      "rating": 4.7,
      "reviews": 52,
      "facilities": ["Trilingual playgroups", "6 learning stations", "Themed activities", "Award-winning environment"],
      "description": "Trilingual playgroup with award-winning purpose-built environment and comprehensive learning stations."
    },
    {
      "id": 21,
      "name_en": "Baumhaus",
      "name_zh": "Baumhaus家庭中心",
      "district": "Central & Western",
      "address": "1/F, Kar Yau Building, 36-44 Queen's Road East, Wan Chai",
      "address_zh": "灣仔皇后大道東36-44號嘉友大廈1樓",
      "phone": "2321-5898",
      "email": "info@baumhaus.com.hk",
      "website": "baumhaus.com.hk",
      "type": "Playgroup",
      "age_range": "0-4 years",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English", "Cantonese"],
      "fees": 4500,
      "rating": 4.5,
      "reviews": 38,
      "facilities": ["Kindermusik classes", "Iconic treehouse play", "Unlimited weekday playroom access", "Family center"],
      "description": "Family center with iconic treehouse play area and unlimited weekday playroom access for students.",
      "trial_fee": 350
    },
    {
      "id": 22,
      "name_en": "Casita",
      "name_zh": "Casita家庭中心",
      "district": "Central & Western",
      "address": "2/F, Workington Tower, 78 Bonham Strand, Sheung Wan",
      "address_zh": "上環文咸東街78號文咸東街廣場2樓",
      "phone": "6291-0128",
      "email": "info@casita.com.hk",
      "website": "casita.com.hk",
      "type": "Playgroup",
      "age_range": "6 months-5 years",
      "session_types": ["Half-day AM", "Half-day PM", "Drop-in"],
      "language": ["English", "Cantonese"],
      "fees": 4200,
      "rating": 4.4,
      "reviews": 31,
      "facilities": ["Music & Movement (Zumbini)", "Sensory Exploration", "Early Foundational Skills", "Montessori principles"],
      "description": "Family center offering music, movement, and sensory exploration with Montessori principles.",
      "drop_in_fee": 330
    },
    {
      "id": 23,
      "name_en": "BabySteps International Preschool",
      "name_zh": "BabySteps國際幼兒學校",
      "district": "Central & Western",
      "address": "25/F, 2501-2502 Universal Trade Centre, 3-5A Arbuthnot Road, Central",
      "address_zh": "中環亞畢諾道3-5A號環貿中心25樓2501-2502室",
      "phone": "9302-2190",
      "email": "enquiries@babysteps.com.hk",
      "website": "babysteps.com.hk",
      "type": "Playgroup",
      "age_range": "6 months-6 years",
      "session_types": ["Half-day AM", "Half-day PM", "Whole-day"],
      "language": ["English", "Mandarin"],
      "fees": 5800,
      "rating": 4.8,
      "reviews": 48,
      "facilities": ["Customized multisensory curriculum", "5 developmental dimensions", "International approach"],
      "description": "International preschool with customized multisensory curriculum focusing on 5 developmental dimensions."
    },
    {
      "id": 24,
      "name_en": "Malvern Playgroup (Sai Ying Pun)",
      "name_zh": "英國Malvern遊戲小組（西營盤）",
      "district": "Central & Western",
      "address": "G/F & 1/F Viking Court, 165-166 Connaught Road West, Sai Ying Pun",
      "address_zh": "西營盤德輔道西165-166號維景閣地下及一樓",
      "phone": "3898-4699",
      "email": "info@babyloneducation.com",
      "website": "malvernplaygroup.hk",
      "type": "Playgroup",
      "age_range": "6-24 months",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English"],
      "fees": 4800,
      "rating": 4.6,
      "reviews": 42,
      "facilities": ["Reggio Emilia approach", "Sensory activities", "Baby yoga", "Arts & crafts", "UK heritage"],
      "description": "British heritage playgroup using Reggio Emilia approach with sensory activities and baby yoga."
    },
    {
      "id": 25,
      "name_en": "Trybe",
      "name_zh": "Trybe體操遊戲小組",
      "district": "Central & Western",
      "address": "Shop 10B, G/F, Nam Hung Mansion, 5H Belcher's Street, Kennedy Town",
      "address_zh": "堅尼地城卑路乍街5H號南豐大廈地下10B鋪",
      "phone": "2796-1112",
      "email": "kids@trybehk.com",
      "website": "trybehk.com/playgroup",
      "type": "Playgroup",
      "age_range": "6 months-3 years",
      "session_types": ["Half-day AM", "Half-day PM", "Drop-in"],
      "language": ["English", "Cantonese"],
      "fees": 4500,
      "rating": 4.5,
      "reviews": 35,
      "facilities": ["Ninja obstacle course", "Gymnastics", "3,000 sq ft facility", "Carer participation"],
      "description": "Gymnastics-focused playgroup with ninja obstacle courses in a 3,000 sq ft facility.",
      "trial_fee": 400
    },
    {
      "id": 26,
      "name_en": "Les Petits Lascars (Central)",
      "name_zh": "Les Petits Lascars法國國際幼兒學校（中環）",
      "district": "Central & Western",
      "address": "3/F, Wellington Plaza, 56-58 Wellington Street, Central",
      "address_zh": "中環威靈頓街56-58號威靈頓廣場3樓",
      "phone": "2526-8666",
      "email": "admissions@petitslascars.com",
      "website": "petitslascars.com",
      "type": "Playgroup",
      "age_range": "9-24 months",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["French", "English", "Mandarin"],
      "fees": 5500,
      "rating": 4.7,
      "reviews": 44,
      "facilities": ["French international curriculum", "Small classes (max 7)", "AEFE accreditation", "Trilingual approach"],
      "description": "French international school with AEFE accreditation offering trilingual baby classes in small groups."
    },
    {
      "id": 27,
      "name_en": "SPRING Learning",
      "name_zh": "SPRING學習中心",
      "district": "Central & Western",
      "address": "181-185 Gloucester Road, Wan Chai",
      "address_zh": "灣仔告士打道181-185號中怡大廈",
      "phone": "3465-5000",
      "email": "enquiry@spring-learning.com.hk",
      "website": "spring-learning.com.hk",
      "type": "Playgroup",
      "age_range": "6 weeks-18 months",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English"],
      "fees": 4200,
      "rating": 4.4,
      "reviews": 28,
      "facilities": ["Australian-certified Neurosteps", "Neurological development focus", "Wrigglers program", "Crawlers program", "Walkers program"],
      "description": "Australian-certified Neurosteps program focusing on neurological development for very young children."
    },
    {
      "id": 28,
      "name_en": "My Gym Children's Fitness Center (Central)",
      "name_zh": "My Gym兒童體適能中心（中環）",
      "district": "Central & Western",
      "address": "2203B, 22/F, The Centrium, 60 Wyndham Street, Central",
      "address_zh": "中環雲咸街60號Central大廈22樓2203B室",
      "phone": "2577-3322",
      "email": "info@mygymhk.com",
      "website": "mygymhk.com",
      "type": "Playgroup",
      "age_range": "6 months-6 years",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English", "Cantonese"],
      "fees": 4800,
      "rating": 4.5,
      "reviews": 39,
      "facilities": ["Sports", "Dance", "Gymnastics", "Puppet shows", "Motor skills development"],
      "description": "Fitness-focused playgroup offering sports, dance, gymnastics, and motor skills development.",
      "trial_fee": 380
    },
    {
      "id": 29,
      "name_en": "St. John's Cathedral Playgroup",
      "name_zh": "聖約翰座堂遊戲小組",
      "district": "Central & Western",
      "address": "Fanny Li Hall, 4-8 Garden Road, Central",
      "address_zh": "中環花園道4-8號聖約翰座堂李芳馮堂",
      "phone": "2855-7074",
      "email": "playgroup@stjohnscathedral.org.hk",
      "website": "stjohnscathedral.org.hk",
      "type": "Playgroup",
      "age_range": "Birth-2 years",
      "session_types": ["Community sessions"],
      "language": ["English", "Cantonese"],
      "fees": 0,
      "rating": 4.3,
      "reviews": 25,
      "facilities": ["Community playgroup", "Church-based", "Free sessions", "Thursday afternoons"],
      "description": "Community-based free playgroup at St. John's Cathedral, currently closed but normally operates Thursdays 2:30-4:30pm."
    },
    {
      "id": 30,
      "name_en": "Llamahood Playgroup",
      "name_zh": "Llamahood遊戲小組",
      "district": "Central & Western",
      "address": "Contact for location details",
      "address_zh": "聯絡查詢地點詳情",
      "phone": "Contact for details",
      "email": "info@llamahood.com",
      "website": "llamahood.com",
      "type": "Playgroup",
      "age_range": "6-18 months",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English", "Cantonese"],
      "fees": 3800,
      "rating": 4.4,
      "reviews": 22,
      "facilities": ["Infanity program (6-11 months)", "Top Learner program (12-18 months)", "Sensory exploration", "Physical development", "Individualized approach"],
      "description": "Specialized programs for different age groups with focus on sensory exploration and physical development."
    },
    {
      "id": 31,
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
    },

    // CENTRAL & WESTERN DISTRICT - PRE-NURSERY PROGRAMS
    {
      "id": 32,
      "name_en": "Malvern College Pre-School Hong Kong (Island West)",
      "name_zh": "英國墨爾文學院香港分校（港島西）",
      "district": "Central & Western",
      "address": "G/F and 1/F Viking Court, 165-166 Connaught Road West, Sai Ying Pun",
      "address_zh": "西營盤德輔道西165-166號維景閣地下及一樓",
      "phone": "3898-4670",
      "email": "iw-office@malvernpreschool.hk",
      "website": "malvernpreschool.hk",
      "type": "Pre-nursery",
      "age_range": "2-3 years",
      "session_types": ["2-Day", "3-Day"],
      "language": ["English", "Chinese"],
      "fees": 6500,
      "rating": 4.8,
      "reviews": 56,
      "facilities": ["EYFS curriculum", "Forest-Beach-School Programme", "Bilingual English-Chinese", "UK heritage", "Reggio Emilia design"],
      "description": "UK Malvern College heritage school with EYFS curriculum and Forest-Beach-School Programme, around 180 places available."
    },
    {
      "id": 33,
      "name_en": "Hong Kong Man Sang Kindergarten (Western District)",
      "name_zh": "香港民生幼稚園（西區）",
      "district": "Central & Western",
      "address": "45 High Street, Sai Ying Pun, Hong Kong",
      "address_zh": "香港西營盤高街45號",
      "phone": "2546-2963",
      "email": "info@mansangkg.edu.hk",
      "website": "mansangkg.edu.hk",
      "type": "Pre-nursery",
      "age_range": "2-6 years",
      "session_types": ["Half-day", "Whole-day"],
      "language": ["English", "Cantonese", "Mandarin"],
      "fees": 5825,
      "rating": 4.6,
      "reviews": 48,
      "facilities": ["Trilingual program", "Integrated curriculum", "Project learning", "Modern facilities"],
      "description": "Trilingual kindergarten with integrated curriculum and project-based learning approach."
    },
    {
      "id": 34,
      "name_en": "Tutor Time (Mid-levels Caine Road Campus)",
      "name_zh": "Tutor Time（半山堅道校園）",
      "district": "Central & Western",
      "address": "Suite 1-3, 11/F, World-Wide House, 19 Des Voeux Road Central",
      "address_zh": "中環德輔道中19號環球大廈11樓1-3室",
      "phone": "2529-2288",
      "email": "midlevels@tutortime.com.hk",
      "website": "tutortime.com.hk/locations/caine-road",
      "type": "Pre-nursery",
      "age_range": "2-3 years",
      "session_types": ["Half-day", "Whole-day"],
      "language": ["English", "Mandarin"],
      "fees": 5800,
      "rating": 4.7,
      "reviews": 52,
      "facilities": ["50/50 English-Mandarin immersion", "Indoor playground", "Free Cantonese classes", "Tailored Educational Pathways"],
      "description": "50/50 English-Mandarin immersion program with indoor playground and free Cantonese classes."
    },
    {
      "id": 35,
      "name_en": "Les Petits Lascars (Central) - Pre-Nursery",
      "name_zh": "Les Petits Lascars法國國際幼兒學校（中環）- 學前班",
      "district": "Central & Western",
      "address": "3/F, Wellington Plaza, 56-58 Wellington Street, Central",
      "address_zh": "中環威靈頓街56-58號威靈頓廣場3樓",
      "phone": "2526-8666",
      "email": "admissions@petitslascars.com",
      "website": "petitslascars.com",
      "type": "Pre-nursery",
      "age_range": "2-3 years",
      "session_types": ["Half-day", "Whole-day"],
      "language": ["French", "English", "Mandarin"],
      "fees": 6000,
      "rating": 4.7,
      "reviews": 44,
      "facilities": ["French international curriculum", "Small classes (max 7)", "AEFE accreditation", "Bright colorful environment"],
      "description": "French international school with AEFE accreditation offering trilingual pre-nursery classes in small groups."
    },
    {
      "id": 36,
      "name_en": "BabySteps International Preschool - Pre-Nursery",
      "name_zh": "BabySteps國際幼兒學校 - 學前班",
      "district": "Central & Western",
      "address": "25/F, 2501-2502 Universal Trade Centre, 3-5A Arbuthnot Road, Central",
      "address_zh": "中環亞畢諾道3-5A號環貿中心25樓2501-2502室",
      "phone": "9302-2190",
      "email": "enquiries@babysteps.com.hk",
      "website": "babysteps.com.hk",
      "type": "Pre-nursery",
      "age_range": "2.5-3.5 years",
      "session_types": ["Half-day", "Whole-day"],
      "language": ["English", "Mandarin"],
      "fees": 6200,
      "rating": 4.8,
      "reviews": 48,
      "facilities": ["Customized curriculum", "5 developmental dimensions", "Multisensory approach", "Individualized learning styles", "Detailed assessments"],
      "description": "International preschool with customized curriculum focusing on 5 developmental dimensions and individualized learning styles."
    },
    {
      "id": 37,
      "name_en": "Blooming Buds Preschool & Child Care Centre",
      "name_zh": "籽苗學前教育及幼兒照顧中心",
      "district": "Central & Western",
      "address": "Unit 7, 1/F, Island Crest, 8 First Street, Sai Ying Pun",
      "address_zh": "西營盤第一街8號島峰大廈1樓7號單位",
      "phone": "2887-9921",
      "email": "enquiry@bloomingbuds.com.hk",
      "website": "bloomingbuds.com.hk",
      "type": "Pre-nursery",
      "age_range": "2-3 years",
      "session_types": ["Half-day", "Whole-day"],
      "language": ["English", "Cantonese"],
      "fees": 4800,
      "rating": 4.5,
      "reviews": 38,
      "facilities": ["Reggio Emilia approach", "Bilingual learning", "Self-directed learning", "3 minutes from Sai Ying Pun MTR"],
      "description": "Reggio Emilia approach with bilingual learning and self-directed learning, conveniently located 3 minutes from Sai Ying Pun MTR."
    },
    {
      "id": 38,
      "name_en": "ELCHK Amazing Grace Nursery School",
      "name_zh": "基督教香港信義會基恩幼兒學校",
      "district": "Central & Western",
      "address": "3/F, Sai Ying Pun Community Complex, 2 High Street",
      "address_zh": "香港西營盤高街2號西營盤社區綜合大樓3樓",
      "phone": "2540-7583",
      "email": "info@agns.elchk.org.hk",
      "website": "agns.elchk.org.hk",
      "type": "Pre-nursery",
      "age_range": "2-6 years",
      "session_types": ["Whole-day"],
      "language": ["Cantonese", "English"],
      "fees": 3200,
      "rating": 4.4,
      "reviews": 42,
      "facilities": ["Child-oriented curriculum", "Project learning", "Inquiry learning", "Outdoor/indoor playgrounds", "Music room"],
      "description": "Established 1984, offering child-oriented curriculum with project and inquiry learning approaches."
    },
    {
      "id": 39,
      "name_en": "m.i.l.k. Western District Campus",
      "name_zh": "m.i.l.k.西區校園",
      "district": "Central & Western",
      "address": "Shop A, G/F & 1/F, Nice Garden, 513-519 Queen's Road West",
      "address_zh": "香港皇后大道西513-519號尼斯花園地下及1樓A鋪",
      "phone": "Contact for details",
      "email": "info@imilk.co",
      "website": "imilk.co",
      "type": "Pre-nursery",
      "age_range": "2-3 years",
      "session_types": ["3 sessions/week"],
      "language": ["English", "Cantonese", "Mandarin"],
      "fees": 3200,
      "rating": 4.3,
      "reviews": 28,
      "facilities": ["Trilingual PN Prep", "Classroom routine", "Self-help skills", "Uniform and materials included"],
      "description": "Trilingual Pre-Nursery Preparation program focusing on classroom routine and self-help skills, 3 sessions per week."
    },
    {
      "id": 40,
      "name_en": "Mulberry House International Kindergarten (Central)",
      "name_zh": "桑葚樹國際幼稚園（中環）",
      "district": "Central & Western",
      "address": "Contact for address details",
      "address_zh": "聯絡查詢地址詳情",
      "phone": "5598-0909",
      "email": "admissions@mulberryhousekg.com",
      "website": "mulberryhousekg.com/en/central-campus",
      "type": "Pre-nursery",
      "age_range": "2-3 years",
      "session_types": ["Half-day", "Whole-day"],
      "language": ["Mandarin", "English"],
      "fees": 5800,
      "rating": 4.6,
      "reviews": 45,
      "facilities": ["Mandarin immersion", "Reggio Emilia inspired", "Inquiry-based bilingual", "Traditional Chinese teaching"],
      "description": "Founded 2015, offering Mandarin immersion with Reggio Emilia inspired inquiry-based bilingual education, supporting 3000+ families."
    },
    {
      "id": 41,
      "name_en": "HKCS Central Nursery School",
      "name_zh": "香港基督教服務處雋匯幼兒學校",
      "district": "Central & Western",
      "address": "Contact for address details",
      "address_zh": "聯絡查詢地址詳情",
      "phone": "2380-2320",
      "email": "cns@hkcs.org",
      "website": "cns.hkcschild.edu.hk",
      "type": "Pre-nursery",
      "age_range": "2-6 years",
      "session_types": ["Whole-day"],
      "language": ["Cantonese", "English"],
      "fees": 2800,
      "rating": 4.3,
      "reviews": 35,
      "facilities": ["Individual differences focus", "Potential development", "Quality services", "Hong Kong Christian Service organization"],
      "description": "Hong Kong Christian Service organization focusing on individual differences and potential development."
    },
    {
      "id": 42,
      "name_en": "Thomas Tam Nursery School",
      "name_zh": "譚華正幼兒學校",
      "district": "Central & Western",
      "address": "King George V Memorial Park, Hospital Road, Sai Ying Pun",
      "address_zh": "西營盤醫院道英皇佐治五世紀念公園",
      "phone": "Contact for details",
      "email": "info@ns.hkspc.org",
      "website": "ns.hkspc.org/tt",
      "type": "Pre-nursery",
      "age_range": "2-3 years",
      "session_types": ["Whole-day"],
      "language": ["Cantonese", "English"],
      "fees": 2500,
      "rating": 4.2,
      "reviews": 32,
      "facilities": ["N1 class for 2-3 year olds", "Park setting", "Nature-based learning environment", "Structured early childhood education"],
      "description": "N1 class for 2-3 year olds in a park setting with nature-based learning environment."
    },
    {
      "id": 43,
      "name_en": "Fairchild Nursery & Kindergarten",
      "name_zh": "輝庭幼兒園及幼稚園",
      "district": "Central & Western",
      "address": "Sai Ying Pun, Hong Kong",
      "address_zh": "香港西營盤",
      "phone": "2803-2638",
      "email": "info@fairchild.edu.hk",
      "website": "fairchild.edu.hk",
      "type": "Pre-nursery",
      "age_range": "2-6 years",
      "session_types": ["Whole-day", "Saturday sessions"],
      "language": ["English", "Cantonese"],
      "fees": 4500,
      "rating": 4.4,
      "reviews": 38,
      "facilities": ["Mon-Fri 8:00-17:00", "Sat 9:00-12:00", "Flexible hours including Saturday"],
      "description": "Flexible hours including Saturday sessions, operating Mon-Fri 8:00-17:00 and Sat 9:00-12:00."
    },
    {
      "id": 44,
      "name_en": "City Kids Preschool and Playgroup",
      "name_zh": "City Kids學前班及遊戲小組",
      "district": "Central & Western",
      "address": "2/F, East Wing, 12 Borrett Road, Mid-Levels",
      "address_zh": "半山寶雲道12號東翼2樓",
      "phone": "2522-4446",
      "email": "info@citykids.com.hk",
      "website": "citykids.com.hk",
      "type": "Pre-nursery",
      "age_range": "2-3 years",
      "session_types": ["2 hours/2 days per week", "Half-day"],
      "language": ["English", "Cantonese"],
      "fees": 1862,
      "rating": 4.3,
      "reviews": 25,
      "facilities": ["Half Day Nursery", "AM/PM sessions", "Flexible scheduling"],
      "description": "Half Day Nursery program with flexible scheduling options including 2 hours/2 days per week or half-day sessions."
    },
    {
      "id": 45,
      "name_en": "ESF Pre-Kindergarten Programme",
      "name_zh": "ESF學前幼稚園課程",
      "district": "Central & Western",
      "address": "ESF Language & Learning Centre, Wan Chai (and other locations)",
      "address_zh": "ESF語言及學習中心，灣仔（及其他地點）",
      "phone": "3762-2411",
      "email": "admissions@esf.edu.hk",
      "website": "join-us.esf.edu.hk/pre-kindergarten",
      "type": "Pre-nursery",
      "age_range": "2 years",
      "session_types": ["Half-day"],
      "language": ["English"],
      "fees": 5200,
      "rating": 4.7,
      "reviews": 52,
      "facilities": ["Play-based learning", "5 key areas: Wellbeing, Belonging, Communication, Contribution, Exploration", "Priority access to ESF kindergartens", "Certified Early Childhood educators"],
      "description": "Play-based learning with 5 key areas: Wellbeing, Belonging, Communication, Contribution, Exploration. Priority access to ESF kindergartens."
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
  
  // Debug: Log total institutions and district breakdown
  console.log('Total institutions:', filtered.length);
  console.log('Sha Tin institutions:', filtered.filter(inst => inst.district === 'Sha Tin').length);
  console.log('Central & Western institutions:', filtered.filter(inst => inst.district === 'Central & Western').length);
  console.log('Wan Chai institutions:', filtered.filter(inst => inst.district === 'Wan Chai').length);
  
  // Log all districts present
  const districts = [...new Set(filtered.map(inst => inst.district))];
  console.log('All districts in data:', districts);
  
  // Apply search filter
  if (activeFilters.search) {
    const searchLower = activeFilters.search.toLowerCase();
    filtered = filtered.filter(inst => 
      inst.name_en.toLowerCase().includes(searchLower) ||
      inst.name_zh.includes(searchLower) ||
      inst.district.toLowerCase().includes(searchLower) ||
      inst.address.toLowerCase().includes(searchLower)
    );
    console.log('After search filter:', filtered.length, 'institutions');
  }
  
  // Apply district filter
  if (activeFilters.district) {
    console.log('Filtering by district:', activeFilters.district);
    filtered = filtered.filter(inst => inst.district === activeFilters.district);
    console.log('After district filter:', filtered.length, 'institutions');
    console.log('Filtered institutions:', filtered.map(inst => inst.name_en));
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
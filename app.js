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
    },

    // EASTERN DISTRICT - PLAYGROUPS
    {
      "id": 46,
      "name_en": "Island Children's Montessori House (North Point)",
      "name_zh": "島嶼蒙特梭利兒童之家（北角）",
      "district": "Eastern",
      "address": "Commercial Unit, G/F, Bedford Gardens, 151-173 Tin Hau Temple Road, North Point",
      "address_zh": "北角天后廟道151-173號柏景臺地下商業單位",
      "phone": "Contact for details",
      "email": "admissions@icms.edu.hk",
      "website": "icms.edu.hk",
      "type": "Playgroup",
      "age_range": "9-36 months",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English", "Mandarin"],
      "fees": 4800,
      "rating": 4.6,
      "reviews": 42,
      "facilities": ["Authentic Montessori approach", "Nido program (9-16m)", "TOM program (16-36m)", "PNSS program (16-36m)", "Sensorial learning", "Parental involvement"],
      "description": "Authentic Montessori approach with Nido program for 9-16 months, gentle introduction to Montessori with sensorial learning."
    },
    {
      "id": 47,
      "name_en": "Island Children's Montessori House (Tin Hau)",
      "name_zh": "島嶼蒙特梭利兒童之家（天后）",
      "district": "Eastern",
      "address": "Units B & C, LG/F & UG/F, 16 Tin Hau Temple Road, Tin Hau",
      "address_zh": "天后天后廟道16號地庫及上層地庫B及C單位",
      "phone": "Contact for details",
      "email": "admissions@icms.edu.hk",
      "website": "icms.edu.hk",
      "type": "Playgroup",
      "age_range": "16-36 months",
      "session_types": ["Saturday Playgroup"],
      "language": ["English", "Mandarin"],
      "fees": 4200,
      "rating": 4.5,
      "reviews": 38,
      "facilities": ["TOM Saturday Playgroup", "Bilingual English/Putonghua", "Taste of Montessori", "Complimentary school bus service", "North Point/Taikoo/Lei King Wan coverage"],
      "description": "Saturday playgroup with bilingual English/Putonghua options, taste of Montessori with complimentary school bus service."
    },
    {
      "id": 48,
      "name_en": "MAGART International Kindergarten (Tai Koo)",
      "name_zh": "MAGART國際幼稚園（太古）",
      "district": "Eastern",
      "address": "Tai Koo Campus (contact for exact address)",
      "address_zh": "太古校園（聯絡查詢確實地址）",
      "phone": "Contact for details",
      "email": "info@magartedu.com",
      "website": "magartedu.com",
      "type": "Playgroup",
      "age_range": "6 months-6 years",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English", "Mandarin"],
      "fees": 5200,
      "rating": 4.7,
      "reviews": 48,
      "facilities": ["EYFS curriculum", "Reggio Emilia approach", "Sensory experiences", "Language development", "50,000+ sq ft campus", "Priority kindergarten application", "Certificate of attendance"],
      "description": "EYFS curriculum with Reggio Emilia approach, sensory experiences and language development in a 50,000+ sq ft campus."
    },
    {
      "id": 49,
      "name_en": "Victoria (Kornhill) Nursery",
      "name_zh": "維多利亞（康山）幼兒園",
      "district": "Eastern",
      "address": "LG, Kornhill Plaza (South), Tai Koo",
      "address_zh": "太古康怡廣場（南）地庫",
      "phone": "Contact for details",
      "email": "info@victoria.edu.hk",
      "website": "victoria.edu.hk/campus/upper-kornhill-campus",
      "type": "Playgroup",
      "age_range": "8-36 months",
      "session_types": ["Half-day AM", "Half-day PM", "Whole-day"],
      "language": ["English", "Mandarin", "Cantonese"],
      "fees": 5500,
      "rating": 4.6,
      "reviews": 45,
      "facilities": ["Only VEO campus with infant programs", "Trilingual classes", "Learn through play", "Environment as Third Teacher philosophy", "Quality-building curriculum"],
      "description": "Only VEO campus with infant programs, offering trilingual classes with 'Environment as Third Teacher' philosophy."
    },
    {
      "id": 50,
      "name_en": "Lisac Funland Toddlers' Play House",
      "name_zh": "Lisac趣樂幼兒遊樂屋",
      "district": "Eastern",
      "address": "Quarry Bay (contact Chinese Christian God Blessed Church)",
      "address_zh": "鰂魚涌（聯絡中華基督教神愛堂查詢確實地址）",
      "phone": "Contact for details",
      "email": "info@lisacfunland.com.hk",
      "website": "lisacfunland.com.hk",
      "type": "Playgroup",
      "age_range": "6 months-3 years",
      "session_types": ["Tue/Thu classes"],
      "language": ["English", "Cantonese"],
      "fees": 1600,
      "rating": 4.3,
      "reviews": 28,
      "facilities": ["Level 1 (6-18m)", "Level 2 (19m-3y)", "English or Cantonese options", "4-10 students per class", "Church member discounts"],
      "description": "Level 1 (6-18m) and Level 2 (19m-3y) programs with English or Cantonese options, Tue/Thu classes with 4-10 students."
    },
    {
      "id": 51,
      "name_en": "Mustard Seed Playschool",
      "name_zh": "芥菜種遊戲學校",
      "district": "Eastern",
      "address": "Room 801-802, Park Commercial Building, 180 Tung Lo Wan Road, Tin Hau",
      "address_zh": "天后銅鑼灣道180號百樂商業大廈801-802室",
      "phone": "2566-5200",
      "email": "info@mustardseedplayschool.com.hk",
      "website": "mustardseedplayschool.com.hk",
      "type": "Playgroup",
      "age_range": "Contact for specifics",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English", "Cantonese"],
      "fees": 3800,
      "rating": 4.4,
      "reviews": 32,
      "facilities": ["Age-appropriate programs", "Tue-Sat 9:00am-5:45pm", "Flexible scheduling"],
      "description": "Age-appropriate programs with flexible scheduling, operating Tue-Sat 9:00am-5:45pm."
    },
    {
      "id": 52,
      "name_en": "Guidepost Montessori (Happy Valley Sing Woo Road)",
      "name_zh": "Guidepost蒙特梭利（跑馬地成和道）",
      "district": "Eastern",
      "address": "1/F, Happy Court, 39E Sing Woo Road, Happy Valley",
      "address_zh": "跑馬地成和道39E號快樂大廈1樓",
      "phone": "2547-7176",
      "email": "info@guidepost.hk",
      "website": "guidepost.hk/locations/happyvalley-singwooroad",
      "type": "Playgroup",
      "age_range": "Up to 2.5 years",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English", "Mandarin"],
      "fees": 4800,
      "rating": 4.6,
      "reviews": 41,
      "facilities": ["Montessori Together (up to 18m)", "Nido (1-2y)", "Transitional Toddler (1.5-2.5y)", "Accompanied sessions", "Authentic Montessori materials", "Dedicated infant/toddler space"],
      "description": "Montessori Together program for up to 18 months with accompanied sessions to explore prepared environment."
    },
    {
      "id": 53,
      "name_en": "Grace Garden International Nursery",
      "name_zh": "恩典花園國際幼兒園",
      "district": "Eastern",
      "address": "Contact for address details",
      "address_zh": "聯絡查詢地址詳情",
      "phone": "Contact for details",
      "email": "info@gracegarden.edu.hk",
      "website": "gracegarden.edu.hk/programmes",
      "type": "Playgroup",
      "age_range": "12-30 months",
      "session_types": ["60-minute sessions"],
      "language": ["English"],
      "fees": 4200,
      "rating": 4.5,
      "reviews": 35,
      "facilities": ["PODS (12-20m)", "BLOOMERS (21-30m)", "English immersion", "Sensory/creative play", "Parent-child socialization", "Play-based approach", "Songs & dance"],
      "description": "PODS (12-20m) and BLOOMERS (21-30m) programs with 60-minute English immersion, sensory/creative play and parent-child socialization."
    },
    {
      "id": 54,
      "name_en": "MusicRings",
      "name_zh": "音樂環",
      "district": "Eastern",
      "address": "Unit 01, 12/F, Park Avenue Tower, 5 Moreton Terrace, Causeway Bay",
      "address_zh": "銅鑼灣摩頓臺5號百富中心12樓01室",
      "phone": "3565-6826",
      "email": "info@musicrings.com.hk",
      "website": "musicrings.com.hk",
      "type": "Playgroup",
      "age_range": "8-26 months",
      "session_types": ["Music Playgroup"],
      "language": ["English"],
      "fees": 4500,
      "rating": 4.7,
      "reviews": 52,
      "facilities": ["English Music Playgroup", "Music-based development", "Brain stimulation through music", "30+ years experience", "Highly qualified staff", "Music room rental"],
      "description": "English Music Playgroup for 8-26 months with music-based development and brain stimulation through music, 30+ years experience."
    },
    {
      "id": 55,
      "name_en": "Baby Buddies",
      "name_zh": "嬰兒伙伴",
      "district": "Eastern",
      "address": "1/F, Park View Centre, 7 Lau Li Street, Tin Hau",
      "address_zh": "天后琉璃街7號百利中心1樓",
      "phone": "2881-8717",
      "email": "info@babybuddies.com.hk",
      "website": "babybuddies.com.hk",
      "type": "Playgroup",
      "age_range": "Contact for specifics",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English", "Cantonese"],
      "fees": 3800,
      "rating": 4.4,
      "reviews": 29,
      "facilities": ["2 minutes from Tin Hau MTR", "Experienced instructor (Abby)", "Flexible programs"],
      "description": "Conveniently located 2 minutes from Tin Hau MTR with experienced instructor Abby, contact for specific programs."
    },
    {
      "id": 56,
      "name_en": "Kids Garden (Causeway Bay)",
      "name_zh": "兒童花園（銅鑼灣）",
      "district": "Eastern",
      "address": "13/F King's Commercial Centre, 25 King's Road, Causeway Bay",
      "address_zh": "銅鑼灣英皇道25號英皇商業中心13樓",
      "phone": "Contact for details",
      "email": "info@kidsgardenhk.com",
      "website": "kidsgardenhk.com",
      "type": "Playgroup",
      "age_range": "Contact for specifics",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English", "Chinese"],
      "fees": 4200,
      "rating": 4.5,
      "reviews": 38,
      "facilities": ["Interactive learning", "Singing activities", "English/Chinese foundation", "Themed activities", "10+ years experience", "Leading provider in HK", "Multiple locations"],
      "description": "Interactive learning with singing, English/Chinese foundation and themed activities, 10+ years experience as leading provider in HK."
    },
    {
      "id": 57,
      "name_en": "AS Chloe (Tin Hau Campus)",
      "name_zh": "AS Chloe（天后校園）",
      "district": "Eastern",
      "address": "19/F, Parkview Centre, 7 Lau Li Street, Causeway Bay East",
      "address_zh": "銅鑼灣東琉璃街7號百利中心19樓",
      "phone": "3689-5269",
      "email": "enquiry@aschloe.com",
      "website": "aschloe.com",
      "type": "Playgroup",
      "age_range": "Contact for specifics",
      "session_types": ["Baby Gym", "Dance programs"],
      "language": ["English", "Cantonese"],
      "fees": 4000,
      "rating": 4.4,
      "reviews": 31,
      "facilities": ["Baby Gym programs", "Dance programs", "2 minutes from Tin Hau MTR Exit A1", "Modern facilities"],
      "description": "Baby Gym & Dance programs conveniently located 2 minutes from Tin Hau MTR Exit A1."
    },
    {
      "id": 58,
      "name_en": "Stage Right (Eastern District Programs)",
      "name_zh": "舞台右側（東區課程）",
      "district": "Eastern",
      "address": "Contact for location details",
      "address_zh": "聯絡查詢地點詳情",
      "phone": "9225-8924",
      "email": "info@stagerighthk.com",
      "website": "stagerighthk.com/playgroups",
      "type": "Playgroup",
      "age_range": "6 months-3 years",
      "session_types": ["Term-based enrollment"],
      "language": ["English", "Mandarin"],
      "fees": 3800,
      "rating": 4.3,
      "reviews": 26,
      "facilities": ["Teddy Bear Tea Club", "Panda Bear Tea Club", "Sensory play", "Art activities", "Creative play", "5 areas of development focus", "Coffee for parents"],
      "description": "Teddy Bear Tea Club (English) and Panda Bear Tea Club (Mandarin) with sensory play, art, and creative play focusing on 5 areas of development."
    },
    {
      "id": 59,
      "name_en": "Chong Wai Sze Academy of Ballet (Playgroup)",
      "name_zh": "莊慧詩芭蕾舞學院（遊戲小組）",
      "district": "Eastern",
      "address": "Contact for location details",
      "address_zh": "聯絡查詢地點詳情",
      "phone": "Contact for details",
      "email": "info@cwsballet.com.hk",
      "website": "cwsballet.com.hk",
      "type": "Playgroup",
      "age_range": "1.5-2.5 years",
      "session_types": ["Music and Dance Playgroup"],
      "language": ["English", "Cantonese"],
      "fees": 3500,
      "rating": 4.4,
      "reviews": 28,
      "facilities": ["Music and Dance Playgroup", "Ballet/Jazz syllabus-based", "Muscle strength training", "Kindergarten adaptation", "Royal Academy of Dance syllabus", "Parent accompaniment required"],
      "description": "Music and Dance Playgroup for 1.5-2.5 years with Ballet/Jazz syllabus-based training and muscle strength development."
    },
    {
      "id": 60,
      "name_en": "Mulberry House Asia (Mandarin Playgroup)",
      "name_zh": "桑葚樹亞洲（普通話遊戲小組）",
      "district": "Eastern",
      "address": "Contact for location details",
      "address_zh": "聯絡查詢地點詳情",
      "phone": "Contact for details",
      "email": "info@mulberryhouseasia.com",
      "website": "mulberryhouseasia.com/mandarin-playgroup",
      "type": "Playgroup",
      "age_range": "8 months-3 years",
      "session_types": ["60-minute sessions"],
      "language": ["Mandarin"],
      "fees": 4200,
      "rating": 4.5,
      "reviews": 35,
      "facilities": ["Infants (8-16m)", "Toddlers (16-26m)", "Transition (2-3y)", "Multi-sensory parent-accompanied", "Mandarin immersion", "Language/cognitive/motor/social development", "Adult accompaniment required"],
      "description": "Multi-sensory parent-accompanied Mandarin immersion playgroup with focus on language, cognitive, motor, and social development."
    },

    // EASTERN DISTRICT - PRE-NURSERY PROGRAMS
    {
      "id": 61,
      "name_en": "Island Children's Montessori International Nursery and Kindergarten (Tin Hau)",
      "name_zh": "島嶼蒙特梭利國際幼兒園及幼稚園（天后）",
      "district": "Eastern",
      "address": "Units B & C, LG/F & UG/F, 16 Tin Hau Temple Road, Tin Hau",
      "address_zh": "天后天后廟道16號地庫及上層地庫B及C單位",
      "phone": "3427-9100",
      "email": "admissions@icms.edu.hk",
      "website": "icms.edu.hk",
      "type": "Pre-nursery",
      "age_range": "2-3 years",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English", "Cantonese", "Mandarin"],
      "fees": 5800,
      "rating": 4.7,
      "reviews": 48,
      "facilities": ["One-year Montessori Pre-Casa Program", "Holistic social/emotional/cognitive development", "English primary language", "AMI recognized", "Complimentary school bus service", "Authentic Montessori materials"],
      "description": "One-year Montessori Pre-Casa Program for children prepared to attend independently, with holistic social/emotional/cognitive development."
    },
    {
      "id": 62,
      "name_en": "Victoria (Kornhill) Nursery (Upper Kornhill Campus)",
      "name_zh": "維多利亞（康山）幼兒園（上康山校園）",
      "district": "Eastern",
      "address": "LG, Kornhill Plaza (South), Tai Koo",
      "address_zh": "太古康怡廣場（南）地庫",
      "phone": "2513-1108",
      "email": "veo_admission@victoria.edu.hk",
      "website": "victoria.edu.hk/campus/upper-kornhill-campus",
      "type": "Pre-nursery",
      "age_range": "8-36 months",
      "session_types": ["Half-day AM", "Half-day PM", "Whole-day"],
      "language": ["English", "Mandarin", "Cantonese"],
      "fees": 6200,
      "rating": 4.8,
      "reviews": 52,
      "facilities": ["Only VEO campus with infant/toddler/pre-nursery programs", "Trilingual classes", "Environment as Third Teacher", "IB PYP alignment", "Quality-building curriculum", "1:8 teacher-student ratio"],
      "description": "Only VEO campus with infant/toddler/pre-nursery programs, offering trilingual classes with IB PYP alignment."
    },
    {
      "id": 63,
      "name_en": "Victoria Kindergarten (Lower Kornhill Campus)",
      "name_zh": "維多利亞幼稚園（下康山校園）",
      "district": "Eastern",
      "address": "G/F & Lower G/F, Block R, 2-8 Hong On Street, Kornhill, Quarry Bay",
      "address_zh": "鰂魚涌康安街2-8號康山花園R座地下及地庫",
      "phone": "2885-3331",
      "email": "lkvkoffc@victoria.edu.hk",
      "website": "victoria.edu.hk/campus/lower-kornhill-campus",
      "type": "Pre-nursery",
      "age_range": "2-6 years",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English", "Mandarin", "Cantonese"],
      "fees": 5800,
      "rating": 4.7,
      "reviews": 45,
      "facilities": ["IB PYP-aligned curriculum", "Bilingual/trilingual classes", "Performing arts integration", "Established 1988", "IB World School", "Diverse learning zones"],
      "description": "IB PYP-aligned curriculum with bilingual/trilingual classes and performing arts integration, established 1988."
    },
    {
      "id": 64,
      "name_en": "Victoria Kindergarten (Middle Kornhill Campus)",
      "name_zh": "維多利亞幼稚園（中康山校園）",
      "district": "Eastern",
      "address": "Contact for address details",
      "address_zh": "聯絡查詢地址詳情",
      "phone": "Contact for details",
      "email": "veo_admission@victoria.edu.hk",
      "website": "victoria.edu.hk/campus/middle-kornhill-campus",
      "type": "Pre-nursery",
      "age_range": "1.8-6 years",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English", "Mandarin", "Cantonese"],
      "fees": 5800,
      "rating": 4.6,
      "reviews": 42,
      "facilities": ["Pre-Nursery programs for both under and above 2 years", "IB PYP curriculum", "Established 2007", "Comprehensive age range coverage"],
      "description": "Pre-Nursery programs for both under and above 2 years with IB PYP curriculum, established 2007."
    },
    {
      "id": 65,
      "name_en": "Victoria Kindergarten (Harbour Heights Campus)",
      "name_zh": "維多利亞幼稚園（海峯花園校園）",
      "district": "Eastern",
      "address": "North Point (contact for exact address)",
      "address_zh": "北角（聯絡查詢確實地址）",
      "phone": "2885-1888",
      "email": "veo_admission@victoria.edu.hk",
      "website": "victoria.edu.hk/campus/harbour-heights-campus",
      "type": "Pre-nursery",
      "age_range": "1.8-6 years",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English", "Mandarin", "Cantonese"],
      "fees": 5800,
      "rating": 4.6,
      "reviews": 40,
      "facilities": ["Pre-Nursery programs", "IB PYP-aligned curriculum", "Bilingual education", "Established 2005", "Serves North Point district"],
      "description": "Pre-Nursery programs with IB PYP-aligned curriculum and bilingual education, established 2005."
    },
    {
      "id": 66,
      "name_en": "The Women's Welfare Club (Eastern District) Nursery Hong Kong",
      "name_zh": "香港東區婦女福利會幼兒園",
      "district": "Eastern",
      "address": "G/F, Oi Ping House, Oi Tung Estate, Shau Kei Wan",
      "address_zh": "筲箕灣愛東邨愛平樓地下",
      "phone": "2561-3409",
      "email": "info@ednursery.edu.hk",
      "website": "ednursery.edu.hk",
      "type": "Pre-nursery",
      "age_range": "2-3 years",
      "session_types": ["Whole-day"],
      "language": ["Cantonese", "English"],
      "fees": 3362,
      "rating": 4.4,
      "reviews": 35,
      "facilities": ["Pre-N1 (2-3 years)", "Eligible families can deduct SWD subsidy", "Established 1956", "EDB quality review approved"],
      "description": "Pre-N1 program for 2-3 years old, eligible families can deduct SWD subsidy, established 1956."
    },
    {
      "id": 67,
      "name_en": "TWGHs Fong Shu Chuen Nursery School",
      "name_zh": "東華三院方樹泉幼兒園",
      "district": "Eastern",
      "address": "Portion of Ground Floor, Causeway Bay Community Centre, 7 Fook Yum Road, Causeway Bay",
      "address_zh": "銅鑼灣福蔭道7號銅鑼灣社區中心地下部分",
      "phone": "Contact for details",
      "email": "info@twghs.org.hk",
      "website": "twghs.org.hk",
      "type": "Pre-nursery",
      "age_range": "2-3 years",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["Cantonese", "English"],
      "fees": 2800,
      "rating": 4.3,
      "reviews": 28,
      "facilities": ["Half Day Nursery for aged 2-3", "AM/PM sessions available", "Tung Wah Group of Hospitals services", "Community-based"],
      "description": "Half Day Nursery for aged 2-3 with AM/PM sessions available, Tung Wah Group of Hospitals services."
    },
    {
      "id": 68,
      "name_en": "The Salvation Army North Point Nursery School",
      "name_zh": "救世軍北角幼兒學校",
      "district": "Eastern",
      "address": "North Point (contact for exact address)",
      "address_zh": "北角（聯絡查詢確實地址）",
      "phone": "Contact for details",
      "email": "info@salvationarmy.org.hk",
      "website": "salvationarmy.org.hk",
      "type": "Pre-nursery",
      "age_range": "2-6 years",
      "session_types": ["Whole-day"],
      "language": ["Cantonese", "English"],
      "fees": 3200,
      "rating": 4.4,
      "reviews": 32,
      "facilities": ["Pre-Nursery services for 2-3 year olds", "Comprehensive early childhood education", "Established 1965", "Originally as crèche"],
      "description": "Pre-Nursery services for 2-3 year olds with comprehensive early childhood education, established 1965."
    },
    {
      "id": 69,
      "name_en": "Steps Education Plus (Causeway Bay)",
      "name_zh": "思步教育升級版（銅鑼灣）",
      "district": "Eastern",
      "address": "Room 1102, 11/F, One Hysan Avenue, Causeway Bay",
      "address_zh": "銅鑼灣希慎道1號11樓1102室",
      "phone": "2553-3558",
      "email": "plus@steps.edu.hk",
      "website": "steps.edu.hk",
      "type": "Pre-nursery",
      "age_range": "2-6 years",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English", "Cantonese"],
      "fees": 4800,
      "rating": 4.5,
      "reviews": 38,
      "facilities": ["Steps Playgroup Levels 1-4", "ASQ® system for multidimensional development", "Let's Talk (English)", "Let's Grow Up (Cantonese)", "Let's Think", "US psychologist-developed ASQ® system"],
      "description": "Steps Playgroup Levels 1-4 with ASQ® system for multidimensional development, US psychologist-developed system."
    },
    {
      "id": 70,
      "name_en": "PODS Kindergarten & Preschool",
      "name_zh": "PODS幼稚園及學前班",
      "district": "Eastern",
      "address": "Contact for address details",
      "address_zh": "聯絡查詢地址詳情",
      "phone": "Contact for details",
      "email": "info@pods.com.hk",
      "website": "pods.com.hk",
      "type": "Pre-nursery",
      "age_range": "2-6 years",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English", "Cantonese"],
      "fees": 4500,
      "rating": 4.4,
      "reviews": 35,
      "facilities": ["Pre-Nursery PN (2-3 years)", "Nursery K1 programs (2y8m-4 years)", "Enrichment programs (2-6 years)", "Multiple program options"],
      "description": "Pre-Nursery PN (2-3 years) with Nursery K1 programs and enrichment programs, multiple program options available."
    },
    {
      "id": 71,
      "name_en": "St. Anna Anglo-Chinese Kindergarten & International Nursery Garden",
      "name_zh": "聖安娜中英文幼稚園暨國際幼兒樂園",
      "district": "Eastern",
      "address": "Contact for address details",
      "address_zh": "聯絡查詢地址詳情",
      "phone": "Contact for details",
      "email": "info@stanna.edu.hk",
      "website": "stanna.edu.hk",
      "type": "Pre-nursery",
      "age_range": "2-6 years",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English", "Cantonese"],
      "fees": 4200,
      "rating": 4.3,
      "reviews": 30,
      "facilities": ["Pre-Nursery (PN) program", "Structured admission process", "Anglo-Chinese bilingual education", "International nursery concept"],
      "description": "Pre-Nursery (PN) program with structured admission process, Anglo-Chinese bilingual education."
    },
    {
      "id": 72,
      "name_en": "Hong Kong Chinese Women's Club Kindergarten",
      "name_zh": "香港中國婦女會幼稚園",
      "district": "Eastern",
      "address": "Eastern District (contact for exact address)",
      "address_zh": "東區（聯絡查詢確實地址）",
      "phone": "Contact for details",
      "email": "info@hkcwc.org.hk",
      "website": "hkcwc.org.hk",
      "type": "Pre-nursery",
      "age_range": "2-6 years",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["Cantonese", "English"],
      "fees": 2800,
      "rating": 4.2,
      "reviews": 25,
      "facilities": ["Pre-Nursery and kindergarten programs", "Participating in 2025/26 Kindergarten Education Scheme", "Government kindergarten scheme participant"],
      "description": "Pre-Nursery and kindergarten programs, participating in 2025/26 Kindergarten Education Scheme."
    },
    {
      "id": 73,
      "name_en": "Hong Kong Federation of Youth Groups Ching Lok Kindergarten",
      "name_zh": "香港青年協會青樂幼稚園",
      "district": "Eastern",
      "address": "Eastern District (contact for exact address)",
      "address_zh": "東區（聯絡查詢確實地址）",
      "phone": "Contact for details",
      "email": "info@hkfyg.org.hk",
      "website": "hkfyg.org.hk",
      "type": "Pre-nursery",
      "age_range": "2-6 years",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["Cantonese", "English"],
      "fees": 2800,
      "rating": 4.2,
      "reviews": 25,
      "facilities": ["Pre-Nursery and kindergarten programs", "HKFYG educational services", "Youth organization backing", "Government scheme participant"],
      "description": "Pre-Nursery and kindergarten programs with HKFYG educational services, government scheme participant."
    },
    {
      "id": 74,
      "name_en": "TWGHs Chiap Hua Cheng's Nursery School",
      "name_zh": "東華三院捷和鄭氏幼兒園",
      "district": "Eastern",
      "address": "Eastern District (contact TWGHs for address)",
      "address_zh": "東區（聯絡東華三院查詢地址）",
      "phone": "Contact for details",
      "email": "info@twghs.org.hk",
      "website": "twghs.org.hk",
      "type": "Pre-nursery",
      "age_range": "2-6 years",
      "session_types": ["Whole-day"],
      "language": ["Cantonese", "English"],
      "fees": 2800,
      "rating": 4.2,
      "reviews": 25,
      "facilities": ["Pre-Nursery services for 2-3 year olds", "TWGHs social services", "Established charitable organization", "Government scheme participant"],
      "description": "Pre-Nursery services for 2-3 year olds with TWGHs social services, established charitable organization."
    },
    {
      "id": 75,
      "name_en": "Women's Welfare Club (Eastern District) Hong Kong Lai Kwai Tim Day Nursery",
      "name_zh": "香港東區婦女福利會黎桂添幼兒園",
      "district": "Eastern",
      "address": "Eastern District (contact for exact address)",
      "address_zh": "東區（聯絡查詢確實地址）",
      "phone": "Contact for details",
      "email": "info@wwc.org.hk",
      "website": "wwc.org.hk",
      "type": "Pre-nursery",
      "age_range": "2-6 years",
      "session_types": ["Whole-day"],
      "language": ["Cantonese", "English"],
      "fees": 2800,
      "rating": 4.2,
      "reviews": 25,
      "facilities": ["Pre-Nursery and day nursery services", "Community-based welfare services", "Women's welfare organization", "Government scheme participant"],
      "description": "Pre-Nursery and day nursery services with community-based welfare services, women's welfare organization."
    },

    // ISLANDS DISTRICT - PLAYGROUPS
    {
      "id": 76,
      "name_en": "ESF Tung Chung International Kindergarten (Playgroups)",
      "name_zh": "ESF東涌國際幼稚園（遊戲小組）",
      "district": "Islands",
      "address": "1/F, Commercial Accommodation, The Visionary, 1 Ying Hong Street, Tung Chung, Lantau Island",
      "address_zh": "大嶼山東涌盈康街1號昇薈1樓商業樓面",
      "phone": "3742-3500",
      "email": "kinder@tck.edu.hk",
      "website": "tck.esf.edu.hk",
      "type": "Playgroup",
      "age_range": "6 months-2 years",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English"],
      "fees": 5200,
      "rating": 4.7,
      "reviews": 48,
      "facilities": ["Playgroup Level 1 (6-12m)", "Pre-K for toddlers aged 2", "Hands-on learning", "Stories/songs", "Fine/gross motor skills", "Sensory exploration", "Baby signs", "ESF network access", "EYFS framework", "Inquiry-based learning"],
      "description": "Playgroup Level 1 (6-12m) with hands-on learning, stories/songs, fine/gross motor skills, sensory exploration, and baby signs."
    },
    {
      "id": 77,
      "name_en": "Discovery Mind International Play Centre & Kindergarten (Discovery Bay)",
      "name_zh": "探索心靈國際遊戲中心及幼稚園（愉景灣）",
      "district": "Islands",
      "address": "Shop Unit No. 102, First Floor, 92 Siena Avenue, Discovery Bay City, Lantau Island",
      "address_zh": "大嶼山愉景灣海澄湖畔路92號愉景灣廣場第一座102號鋪",
      "phone": "2987-8088",
      "email": "dmk@discoverymind.edu.hk",
      "website": "discoverymind.edu.hk",
      "type": "Playgroup",
      "age_range": "15 months-6 years",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English", "Mandarin"],
      "fees": 4800,
      "rating": 4.6,
      "reviews": 42,
      "facilities": ["International and bilingual classes", "Morning/afternoon sessions", "Spacious Lantau Island location", "K3 extended hours available", "15m-18m age range"],
      "description": "International and bilingual (Putonghua & English) classes with morning/afternoon sessions in spacious Lantau Island location."
    },
    {
      "id": 78,
      "name_en": "Discovery Mind International Play Centre & Kindergarten (Tung Chung)",
      "name_zh": "探索心靈國際遊戲中心及幼稚園（東涌）",
      "district": "Islands",
      "address": "G/F, Seaview Crescent, No. 8 Waterfront Road, Tung Chung",
      "address_zh": "東涌海濱路8號海堤灣畔地下",
      "phone": "2987-8070",
      "email": "dmtc@discoverymind.edu.hk",
      "website": "discoverymind.edu.hk",
      "type": "Playgroup",
      "age_range": "15 months-6 years",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English", "Mandarin"],
      "fees": 4800,
      "rating": 4.6,
      "reviews": 40,
      "facilities": ["International and bilingual programs", "Nurturing children to be thinkers and creators", "Two campuses on Lantau Island", "Ages up to 11 years across programs", "15m-18m age range"],
      "description": "International and bilingual programs nurturing children to be thinkers and creators, two campuses on Lantau Island."
    },
    {
      "id": 79,
      "name_en": "Discovery Montessori Schools (Discovery Bay)",
      "name_zh": "探索蒙特梭利學校（愉景灣）",
      "district": "Islands",
      "address": "Discovery Bay Campus (contact for exact address)",
      "address_zh": "愉景灣校園（聯絡查詢確實地址）",
      "phone": "Contact for details",
      "email": "info@montessori-ami.edu.hk",
      "website": "montessori-ami.edu.hk",
      "type": "Playgroup",
      "age_range": "1-12 years",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English", "Mandarin"],
      "fees": 5200,
      "rating": 4.7,
      "reviews": 45,
      "facilities": ["Authentic AMI Montessori Method", "Bilingual English/Putonghua", "Toddler playgroups transitioning to Casa", "First accredited IB Montessori school in HK", "AMI recognized", "Traditional Chinese characters taught"],
      "description": "Authentic AMI Montessori Method with bilingual English/Putonghua, toddler playgroups transitioning to Casa."
    },
    {
      "id": 80,
      "name_en": "Woodentots Montessori Playgroup (Discovery Bay)",
      "name_zh": "木製玩具蒙特梭利遊戲小組（愉景灣）",
      "district": "Islands",
      "address": "Discovery Bay (contact for exact address)",
      "address_zh": "愉景灣（聯絡查詢確實地址）",
      "phone": "Contact for details",
      "email": "info@woodentotsdb.com",
      "website": "woodentotsdb.com",
      "type": "Playgroup",
      "age_range": "18 months-6 years",
      "session_types": ["Mon/Wed 3-4:30pm"],
      "language": ["English", "Mandarin"],
      "fees": 4200,
      "rating": 4.5,
      "reviews": 35,
      "facilities": ["Toddler Class (18m-3y)", "Preschool (2.5-6y)", "Activity/free play", "Sensory play", "Arts & crafts", "Story time", "Music & movement", "Small class size (max 5 children)", "Weekly Mandarin lessons", "Yoga sessions", "Healthy snacks"],
      "description": "Toddler Class (18m-3y) on Mondays & Wednesdays 3-4:30pm with activity/free play, sensory play, arts & crafts, story time, music & movement."
    },
    {
      "id": 81,
      "name_en": "Discovery Bay International School (Early Years)",
      "name_zh": "愉景灣國際學校（幼兒部）",
      "district": "Islands",
      "address": "Discovery Bay, Lantau Island (Early Years Campus)",
      "address_zh": "大嶼山愉景灣（幼兒校園）",
      "phone": "2914-2142",
      "email": "info@dbis.edu.hk",
      "website": "dbis.edu.hk",
      "type": "Playgroup",
      "age_range": "Contact for specific ages",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English"],
      "fees": 5800,
      "rating": 4.8,
      "reviews": 52,
      "facilities": ["EYFS program with FS-1 and FS-2", "Reggio Emilia-inspired environments", "Child-directed learning", "Dedicated EYFS campus", "English National Curriculum", "Natural Lantau setting", "Small class sizes"],
      "description": "EYFS program with FS-1 and FS-2, Reggio Emilia-inspired environments with child-directed learning."
    },
    {
      "id": 82,
      "name_en": "École Française Internationale de Lantau (EFIL) - Les Petits Pois",
      "name_zh": "大嶼山法國國際學校 - 小豌豆",
      "district": "Islands",
      "address": "LG 05-08, Office Block One, 92 Siena Avenue, DB North, Discovery Bay",
      "address_zh": "愉景灣愉景北廣場海澄湖畔路92號辦公大樓1座LG 05-08",
      "phone": "8191-0813",
      "email": "info@ecole-discovery.com",
      "website": "ecole-discovery.com",
      "type": "Playgroup",
      "age_range": "Contact for specific ages",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["French", "English", "Mandarin"],
      "fees": 5500,
      "rating": 4.6,
      "reviews": 38,
      "facilities": ["Les Petits Pois playgroup for toddlers", "French international curriculum", "Trilingual programs", "French international education", "Citizenship education", "Cultural diversity celebration", "Outdoor areas"],
      "description": "Les Petits Pois playgroup for toddlers with French international curriculum and trilingual programs (French, English, Mandarin)."
    },
    {
      "id": 83,
      "name_en": "Mindseeds Studio (Mui Wo)",
      "name_zh": "心種子工作室（梅窩）",
      "district": "Islands",
      "address": "G/F, No. 89, Chung Hau Street, Mui Wo, Lantau Island",
      "address_zh": "大嶼山梅窩涌口街89號地下",
      "phone": "Contact for details",
      "email": "info@mindseedsstudio.com",
      "website": "mindseedsstudio.com",
      "type": "Playgroup",
      "age_range": "1.5-3.5 years",
      "session_types": ["Morning session"],
      "language": ["English", "Cantonese"],
      "fees": 3800,
      "rating": 4.4,
      "reviews": 28,
      "facilities": ["Morning session for 1.5-3.5 years", "Alternative early childhood education", "Natural setting", "Lantau Island natural environment", "Small community-focused approach"],
      "description": "Morning session for 1.5-3.5 years with alternative early childhood education in natural setting on Lantau Island."
    },
    {
      "id": 84,
      "name_en": "Little Leaps Asia (Lantau Island Programs)",
      "name_zh": "小跳躍亞洲（大嶼山課程）",
      "district": "Islands",
      "address": "Various Lantau Island locations",
      "address_zh": "大嶼山多個地點",
      "phone": "Contact for details",
      "email": "info@littleleapsasia.com",
      "website": "Contact via Instagram @little_leaps_asia",
      "type": "Playgroup",
      "age_range": "Contact for specific ages",
      "session_types": ["Mon/Wed 10:30-11:30am"],
      "language": ["English", "Cantonese"],
      "fees": 3500,
      "rating": 4.3,
      "reviews": 25,
      "facilities": ["Little Leaps Playgroup", "Specialized curriculum", "Mondays and Wednesdays 10:30-11:30am", "Unmatched curriculum and methodology", "Community-based approach"],
      "description": "Little Leaps Playgroup with specialized curriculum, Mondays and Wednesdays 10:30-11:30am with unmatched curriculum and methodology."
    },
    {
      "id": 85,
      "name_en": "Bayview House of Children (Discovery Bay)",
      "name_zh": "海景兒童之家（愉景灣）",
      "district": "Islands",
      "address": "Discovery Bay (contact for exact address)",
      "address_zh": "愉景灣（聯絡查詢確實地址）",
      "phone": "Contact for details",
      "email": "info@bayviewhouse.com",
      "website": "bayviewhouse.com",
      "type": "Playgroup",
      "age_range": "Contact for specific ages",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English", "Mandarin"],
      "fees": 4800,
      "rating": 4.5,
      "reviews": 32,
      "facilities": ["AMI Montessori curriculum", "Bilingual (Mandarin/English)", "Five days a week", "Morning/afternoon sessions", "Full-week programs", "Bilingual environment"],
      "description": "Bilingual (Mandarin/English) AMI Montessori curriculum, five days a week with morning/afternoon sessions."
    },
    {
      "id": 86,
      "name_en": "Discovery Mind International Play Centre & Kindergarten (Discovery Bay) - Pre-Nursery",
      "name_zh": "探索心靈國際遊戲中心及幼稚園（愉景灣）- 學前班",
      "district": "Islands",
      "address": "Shop Unit No. 102, First Floor, 92 Siena Avenue, Discovery Bay City, Lantau Island",
      "address_zh": "大嶼山愉景灣海澄湖畔路92號愉景灣廣場第一座102號鋪",
      "phone": "2987-8088",
      "email": "dmk@discoverymind.edu.hk",
      "website": "discoverymind.edu.hk",
      "type": "Pre-nursery",
      "age_range": "2-3 years",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English", "Mandarin"],
      "fees": 5200,
      "rating": 4.6,
      "reviews": 45,
      "facilities": ["Pre-Nursery (2-3y)", "Peaceful and inclusive atmosphere", "Play-based curriculum", "Stories/songs/movement/art", "Self-paced interactive play", "Sensory exploration", "Bilingual or monolingual instruction", "365-day enrollment available"],
      "description": "Pre-Nursery (2-3y) with peaceful and inclusive atmosphere, play-based curriculum with stories/songs/movement/art, fostering love for learning through self-paced interactive play and sensory exploration."
    },
    {
      "id": 87,
      "name_en": "Discovery Mind International Play Centre & Kindergarten (Tung Chung) - Pre-Nursery",
      "name_zh": "探索心靈國際遊戲中心及幼稚園（東涌）- 學前班",
      "district": "Islands",
      "address": "G/F, Seaview Crescent, No. 8 Waterfront Road, Tung Chung",
      "address_zh": "東涌海濱路8號海堤灣畔地下",
      "phone": "2987-8070",
      "email": "dmtc@discoverymind.edu.hk",
      "website": "discoverymind.edu.hk",
      "type": "Pre-nursery",
      "age_range": "2-3 years",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English", "Mandarin"],
      "fees": 5200,
      "rating": 4.6,
      "reviews": 43,
      "facilities": ["Pre-Nursery program", "Nurturing children to be thinkers and creators", "International curriculum", "Bilingual education options", "Two campuses on Lantau Island", "Ages 15 months to 11 years across programs"],
      "description": "Pre-Nursery program nurturing children to be thinkers and creators, international curriculum, bilingual education options."
    },
    {
      "id": 88,
      "name_en": "ESF Tung Chung International Kindergarten (Pre-Kindergarten)",
      "name_zh": "ESF東涌國際幼稚園（學前幼稚園）",
      "district": "Islands",
      "address": "1/F, Commercial Accommodation, The Visionary, 1 Ying Hong Street, Tung Chung, Lantau Island",
      "address_zh": "大嶼山東涌盈康街1號昇薈1樓商業樓面",
      "phone": "3742-3500",
      "email": "kinder@tck.edu.hk",
      "website": "tck.esf.edu.hk",
      "type": "Pre-nursery",
      "age_range": "2 years",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English"],
      "fees": 5800,
      "rating": 4.8,
      "reviews": 55,
      "facilities": ["Pre-K program for toddlers aged 2", "Play-based inquiry curriculum", "Wellbeing, belonging, communication", "Contribution, exploration", "Priority for ESF kindergarten admissions", "IB PYP preparation"],
      "description": "Pre-K program for toddlers aged 2, play-based inquiry curriculum focusing on wellbeing, belonging, communication, contribution, exploration."
    },
    {
      "id": 89,
      "name_en": "Discovery Montessori Schools (Discovery Bay) - Pre-Nursery",
      "name_zh": "探索蒙特梭利學校（愉景灣）- 學前班",
      "district": "Islands",
      "address": "Suite 101, 1/F, 92 Siena Avenue, Discovery Bay, Lantau Island",
      "address_zh": "大嶼山愉景灣海澄湖畔路92號1樓101室",
      "phone": "2987-1201",
      "email": "enquiry@discoverymontessori.info",
      "website": "montessori-ami.edu.hk",
      "type": "Pre-nursery",
      "age_range": "2-3 years",
      "session_types": ["Half-day AM", "Half-day PM", "Whole-day"],
      "language": ["English", "Mandarin"],
      "fees": 9920,
      "rating": 4.7,
      "reviews": 48,
      "facilities": ["Authentic AMI Montessori Method", "Bilingual English/Putonghua environment", "Pre-Casa for 2-3 year olds", "Preparing for independence", "First accredited IB Montessori school in HK", "Traditional Chinese characters taught"],
      "description": "Authentic AMI Montessori Method, bilingual English/Putonghua environment, Pre-Casa for 2-3 year olds preparing for independence."
    },
    {
      "id": 90,
      "name_en": "Discovery Bay International School (Early Years Foundation Stage) - Pre-Nursery",
      "name_zh": "愉景灣國際學校（幼兒基礎階段）- 學前班",
      "district": "Islands",
      "address": "Discovery Bay, Lantau Island (Early Years Campus)",
      "address_zh": "大嶼山愉景灣（幼兒校園）",
      "phone": "2914-2142",
      "email": "info@dbis.edu.hk",
      "website": "dbis.edu.hk",
      "type": "Pre-nursery",
      "age_range": "2-3 years",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English"],
      "fees": 6200,
      "rating": 4.8,
      "reviews": 52,
      "facilities": ["EYFS program with FS-1 and FS-2", "Reggio Emilia-inspired environments", "Child-directed learning", "Open-ended inquiry", "Dedicated EYFS campus", "English National Curriculum", "Natural Lantau setting", "Small class sizes"],
      "description": "EYFS program with FS-1 and FS-2, Reggio Emilia-inspired environments, child-directed learning, open-ended inquiry."
    },
    {
      "id": 91,
      "name_en": "Sunshine House International Pre-School (Discovery Bay)",
      "name_zh": "陽光屋國際學前班（愉景灣）",
      "district": "Islands",
      "address": "Shop 137-138, 1/F, DB Plaza, Discovery Bay",
      "address_zh": "愉景灣愉景灣廣場1樓137-138號鋪",
      "phone": "2987-8143",
      "email": "info@sunshinehouse.com.hk",
      "website": "sunshinehouse.com.hk",
      "type": "Pre-nursery",
      "age_range": "2-4 years",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English", "Mandarin"],
      "fees": 4800,
      "rating": 4.5,
      "reviews": 38,
      "facilities": ["Preschool division for 2-4 years", "British National Curriculum", "Early Years Foundation Stage", "Play-based learning", "Literacy through Oxford Reading Tree", "Jolly Phonics", "Founded 1990", "Bilingual education (English/Putonghua)", "40 minutes daily Putonghua lessons"],
      "description": "Preschool division for 2-4 years with British National Curriculum and Early Years Foundation Stage, play-based learning, literacy through Oxford Reading Tree and Jolly Phonics."
    },
    {
      "id": 92,
      "name_en": "Guidepost Montessori (Discovery Bay)",
      "name_zh": "Guidepost蒙特梭利（愉景灣）",
      "district": "Islands",
      "address": "1-06, 1/F, 92 Siena Avenue, Discovery Bay North, Discovery Bay",
      "address_zh": "愉景灣愉景北廣場海澄湖畔路92號1樓1-06",
      "phone": "2185-6134",
      "email": "info@guidepost.hk",
      "website": "guidepost.hk/locations/discovery-bay",
      "type": "Pre-nursery",
      "age_range": "2-3 years",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English", "Mandarin"],
      "fees": 5200,
      "rating": 4.6,
      "reviews": 35,
      "facilities": ["Toddler program (2-3y)", "Safe and engaging space", "Building view of self", "Foundation of trust, joy, independence", "Encouragement", "Seaside location", "Own outdoor play space", "Unaccompanied classes", "Trial available"],
      "description": "Toddler program (2-3y): safe and engaging space, building view of self on foundation of trust, joy, independence, encouragement."
    },
    {
      "id": 93,
      "name_en": "Lantau International School (Reception Class)",
      "name_zh": "大嶼山國際學校（預備班）",
      "district": "Islands",
      "address": "22 Upper Cheung Sha Village, Lantau Island (Reception Campus)",
      "address_zh": "大嶼山上長沙村22號（預備班校園）",
      "phone": "2984-0302",
      "email": "lisadmin@lis.edu.hk",
      "website": "lis.edu.hk",
      "type": "Pre-nursery",
      "age_range": "4-5 years",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English", "Mandarin"],
      "fees": 8350,
      "rating": 4.7,
      "reviews": 42,
      "facilities": ["British curriculum", "Strong Mandarin instruction", "Small focused classes (max 24:1 ratio)", "Runs 9:15am-2:15pm", "Private school since 1995", "Greenest environment in HK", "Three scenic campuses"],
      "description": "British curriculum with strong Mandarin instruction, small focused classes (max 24:1 ratio), runs 9:15am-2:15pm."
    },
    {
      "id": 94,
      "name_en": "École Française Internationale de Lantau (EFIL) - Pre-Nursery",
      "name_zh": "大嶼山法國國際學校 - 學前班",
      "district": "Islands",
      "address": "LG 05-08, Office Block One, 92 Siena Avenue, DB North, Discovery Bay",
      "address_zh": "愉景灣愉景北廣場海澄湖畔路92號辦公大樓1座LG 05-08",
      "phone": "8191-0813",
      "email": "info@ecole-discovery.com",
      "website": "ecole-discovery.com",
      "type": "Pre-nursery",
      "age_range": "2-3 years",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["French", "English", "Mandarin"],
      "fees": 5800,
      "rating": 4.6,
      "reviews": 40,
      "facilities": ["French international curriculum", "Bilingual and trilingual programs", "French, English, Mandarin", "Citizenship education", "Sustainable development focus", "French consulate supported", "Cultural diversity celebration", "Spacious premises with outdoor areas"],
      "description": "French international curriculum, bilingual and trilingual programs (French, English, Mandarin), citizenship education, sustainable development focus."
    },
    {
      "id": 95,
      "name_en": "Island Children's Montessori International Nursery (Satellite Programs)",
      "name_zh": "島嶼蒙特梭利國際幼兒園（衛星課程）",
      "district": "Islands",
      "address": "Various locations (main campuses in Tin Hau/North Point)",
      "address_zh": "多個地點（主校園位於天后/北角）",
      "phone": "3427-9100",
      "email": "admissions@icms.edu.hk",
      "website": "icms.edu.hk",
      "type": "Pre-nursery",
      "age_range": "2-3 years",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English", "Cantonese", "Mandarin"],
      "fees": 5200,
      "rating": 4.7,
      "reviews": 45,
      "facilities": ["One-year Montessori Pre-Casa Program", "Children aged 2-3 prepared to attend independently", "Holistic social/emotional/cognitive development", "AMI recognized", "May offer satellite programs in Islands District", "Contact for availability"],
      "description": "One-year Montessori Pre-Casa Program for children aged 2-3 prepared to attend independently, holistic social/emotional/cognitive development."
    },

    // KOWLOON CITY DISTRICT - PLAYGROUPS
    {
      "id": 96,
      "name_en": "Imperial Academy (Kowloon City)",
      "name_zh": "Imperial Academy（九龍城）",
      "district": "Kowloon City",
      "address": "Shop 1B, No. 18 Fuk Lo Tsun Road, Kowloon City",
      "address_zh": "九龍城福佬村道18號1B號舖",
      "phone": "2716-9966",
      "email": "info@imperialgroup.asia",
      "website": "imperialgroup.asia",
      "type": "Playgroup",
      "age_range": "6-18 months",
      "session_types": ["45-min sessions", "50-min sessions"],
      "language": ["English"],
      "fees": 4200,
      "rating": 4.5,
      "reviews": 35,
      "facilities": ["Baby Playgroup (6-11m)", "Toddler Playgroup (12-18m)", "Sensory Play", "Baby Massage", "Music & Movement", "Baby Fitness", "Nursery Rhymes", "Reggio Emilia + EYFS curriculum", "English language focus", "Confidence building"],
      "description": "Baby Playgroup (6-11m): 45-min sessions, 2x/week, accompanied. Toddler Playgroup (12-18m): 50-min sessions, 2x/week, accompanied."
    },
    {
      "id": 97,
      "name_en": "MAGART International Kindergarten (Whampoa Campus)",
      "name_zh": "MAGART國際幼稚園（黃埔校園）",
      "district": "Kowloon City",
      "address": "Shop G3A, Site 7, Whampoa Garden, 9 Tak On Street, Hung Hom, Kowloon (Whampoa Station Exit D2)",
      "address_zh": "九龍紅磡德安街9號黃埔花園第7期G3A號舖（黃埔站D2出口）",
      "phone": "2786-9699",
      "email": "info@magartedu.com",
      "website": "magartedu.com",
      "type": "Playgroup",
      "age_range": "6-24 months",
      "session_types": ["1 hour", "1.5 hours"],
      "language": ["English", "Mandarin"],
      "fees": 4800,
      "rating": 4.6,
      "reviews": 42,
      "facilities": ["Curious Crawlers (6-12m)", "Little Explorers (12-24m)", "Circle time", "Sensory exploration", "Music & movement", "Arts & crafts", "50,000+ sq ft campus", "EYFS + Reggio Emilia", "Priority kindergarten application"],
      "description": "Curious Crawlers (6-12m): 1 hour, 1x/week, accompanied. Little Explorers (12-24m): 1.5 hours, 2x/week, accompanied."
    },
    {
      "id": 98,
      "name_en": "Victoria (Homantin) International Nursery",
      "name_zh": "維多利亞（何文田）國際幼兒園",
      "district": "Kowloon City",
      "address": "Contact Victoria Education Organisation for exact address",
      "address_zh": "聯絡維多利亞教育機構查詢確實地址",
      "phone": "Contact for details",
      "email": "info@victoria.edu.hk",
      "website": "victoria.edu.hk/campus/homantin-campus",
      "type": "Playgroup",
      "age_range": "8 months-2 years",
      "session_types": ["120-min sessions"],
      "language": ["English", "Mandarin", "Cantonese"],
      "fees": 5200,
      "rating": 4.7,
      "reviews": 48,
      "facilities": ["Baby Bee (8-12m)", "Toddler Bee (1-2y)", "Morning/Afternoon sessions", "IB PYP alignment", "Trilingual/bilingual programs", "Near Homantin MTR"],
      "description": "Baby Bee (8-12m): 120-min sessions, 1 day/week. Toddler Bee (1-2y): 120-min sessions, 2 days/week."
    },
    {
      "id": 99,
      "name_en": "ESF Playgroup (Ho Man Tin venue - currently not open)",
      "name_zh": "ESF遊戲小組（何文田場地 - 現暫不開放）",
      "district": "Kowloon City",
      "address": "Ho Man Tin, Kowloon (specific venue not currently accepting enquiries)",
      "address_zh": "九龍何文田（具體場地現不接受查詢）",
      "phone": "2838-2276",
      "email": "info@esfexplore.org.hk",
      "website": "esfexplore.org.hk",
      "type": "Playgroup",
      "age_range": "6-18 months",
      "session_types": ["Contact for details"],
      "language": ["English"],
      "fees": 0,
      "rating": 0,
      "reviews": 0,
      "facilities": ["Level 1: 6-12 months", "Level 2: 12-18 months", "EYFS curriculum", "Stories, songs, sensory activities", "ESF network access", "Priority kindergarten interviews when operational"],
      "description": "Currently not open for enquiry or registrations at Ho Man Tin venue. When operational: EYFS curriculum, stories, songs, sensory activities."
    },
    {
      "id": 100,
      "name_en": "Harrow Little Lions (Kai Tak)",
      "name_zh": "哈羅小獅子（啟德）",
      "district": "Kowloon City",
      "address": "55 Kwun Tong Road, Hong Kong",
      "address_zh": "香港觀塘道55號",
      "phone": "2824-9099",
      "email": "futurestar-HK@aisl-edu.com",
      "website": "harrowhongkong.hk/hll",
      "type": "Playgroup",
      "age_range": "3-5 years",
      "session_types": ["Contact for details"],
      "language": ["English"],
      "fees": 5800,
      "rating": 4.8,
      "reviews": 55,
      "facilities": ["Early Years education (EYFS)", "Inspiring learning spaces", "Bespoke curriculum", "Harrow School heritage", "Educational excellence focus"],
      "description": "Exceptional early years education (EYFS), inspiring learning spaces, bespoke curriculum. Contact directly for programs serving 6-18 months."
    },
    {
      "id": 101,
      "name_en": "Casita (Satellite Programs)",
      "name_zh": "Casita（衛星課程）",
      "district": "Kowloon City",
      "address": "Main location: 2/F, Workington Tower, 78 Bonham Strand, Sheung Wan",
      "address_zh": "主要地點：上環文咸東街78號永基大廈2樓",
      "phone": "6291-0128",
      "email": "info@casita.com.hk",
      "website": "casita.com.hk",
      "type": "Playgroup",
      "age_range": "6 months+",
      "session_types": ["Flexible enrollment"],
      "language": ["English", "Mandarin"],
      "fees": 3800,
      "rating": 4.4,
      "reviews": 28,
      "facilities": ["Music & Movement", "Sensory Exploration", "Early Foundational Skills", "Zumbini music program", "Flexible enrollment (drop-in, full-term, 20-class packs)", "STEAM activities"],
      "description": "Music & Movement, Sensory Exploration, Early Foundational Skills, Zumbini music program. Contact to confirm programs in Kowloon City district."
    },
    {
      "id": 102,
      "name_en": "Llamahood Playgroup (Potential Service Area)",
      "name_zh": "Llamahood遊戲小組（潛在服務區域）",
      "district": "Kowloon City",
      "address": "Contact for Kowloon City area programs",
      "address_zh": "聯絡查詢九龍城區課程",
      "phone": "Contact for details",
      "email": "info@llamahood.com",
      "website": "llamahood.com",
      "type": "Playgroup",
      "age_range": "6-18 months",
      "session_types": ["Accompanied class"],
      "language": ["English"],
      "fees": 3500,
      "rating": 4.3,
      "reviews": 25,
      "facilities": ["Infanity (6-11m)", "Top Learner (12-18m)", "Sensory stimulation", "Bonding", "Safe nurturing environment", "Individuality development", "English playgroup focus", "Trial available", "Love & Laughter philosophy"],
      "description": "Infanity (6-11m): Accompanied class, sensory stimulation, bonding. Top Learner (12-18m): Accompanied class, safe nurturing environment, individuality development."
    },
    {
      "id": 103,
      "name_en": "LCSD Children's Play Rooms (Ho Man Tin Sports Centre)",
      "name_zh": "康文署兒童遊戲室（何文田體育館）",
      "district": "Kowloon City",
      "address": "No.1 Chung Yee Street, Ho Man Tin, Kowloon",
      "address_zh": "九龍何文田忠義街1號",
      "phone": "2762-7837",
      "email": "info@lcsd.gov.hk",
      "website": "lcsd.gov.hk",
      "type": "Playgroup",
      "age_range": "4-9 years",
      "session_types": ["Free government play room"],
      "language": ["Cantonese", "English"],
      "fees": 0,
      "rating": 4.2,
      "reviews": 45,
      "facilities": ["Tropical Forest theme", "85 sq meters", "Capacity 20", "FREE admission", "First-come-first-served", "Government facility", "Multiple daily sessions 9:00am-8:00pm"],
      "description": "Free government play room, Tropical Forest theme, 85 sq meters, capacity 20. Children under 4 must be accompanied by parents/guardians."
    },
    {
      "id": 104,
      "name_en": "LCSD Children's Play Rooms (Hung Hom Municipal Services Building)",
      "name_zh": "康文署兒童遊戲室（紅磡市政大廈）",
      "district": "Kowloon City",
      "address": "5/F, Hung Hom Municipal Services Building, 11 Ma Tau Wai Road, Hung Hom, Kowloon",
      "address_zh": "九龍紅磡馬頭圍道11號紅磡市政大廈5樓",
      "phone": "2765-0586",
      "email": "info@lcsd.gov.hk",
      "website": "lcsd.gov.hk",
      "type": "Playgroup",
      "age_range": "4-9 years",
      "session_types": ["Free government play room"],
      "language": ["Cantonese", "English"],
      "fees": 0,
      "rating": 4.3,
      "reviews": 52,
      "facilities": ["Forest theme", "90 sq meters", "Capacity 30", "FREE admission", "Larger capacity than Ho Man Tin venue", "Government facility", "Multiple daily sessions 9:00am-8:00pm"],
      "description": "Free government play room, Forest theme, 90 sq meters, capacity 30. Children under 4 must be accompanied by parents/guardians."
    },
    {
      "id": 105,
      "name_en": "Kiddoland Playpark & Learning Hub (Hung Hom)",
      "name_zh": "Kiddoland遊樂園及學習中心（紅磡）",
      "district": "Kowloon City",
      "address": "Hang Fung Industrial Building, Hok Yuen Street, Hung Hom",
      "address_zh": "紅磡學源街恆豐工業大廈",
      "phone": "6890-8280",
      "email": "info@kiddolandplaypark.com",
      "website": "facebook.com/kiddolandplaypark",
      "type": "Playgroup",
      "age_range": "Contact for specific ages",
      "session_types": ["General children's play area"],
      "language": ["English", "Cantonese"],
      "fees": 2500,
      "rating": 4.1,
      "reviews": 18,
      "facilities": ["Ball pit", "Soft play area", "Trampoline", "Pretend play area", "Cozy nook with toys and books", "New addition to HK playroom scene", "Functional design", "Learning hub concept"],
      "description": "Ball pit, soft play area, trampoline, pretend play area, cozy nook with toys and books. Contact to confirm age-appropriate programs for 6-18 months."
    },
    {
      "id": 106,
      "name_en": "Shine On Family Neighbourhood Support Child Care Project",
      "name_zh": "陽光家庭鄰里支援幼兒照顧計劃",
      "district": "Kowloon City",
      "address": "Kowloon City district service area (Including Hung Hom, Ho Man Tin, To Kwa Wan, Kowloon City, Kai Tak)",
      "address_zh": "九龍城區服務範圍（包括紅磡、何文田、土瓜灣、九龍城、啟德）",
      "phone": "Contact for details",
      "email": "info@yang.org.hk",
      "website": "yang.org.hk",
      "type": "Playgroup",
      "age_range": "0 to preschool",
      "session_types": ["Community-based support"],
      "language": ["Cantonese", "English"],
      "fees": 0,
      "rating": 4.0,
      "reviews": 22,
      "facilities": ["Neighbourhood support child care services", "Community-based support for families", "Covers entire Kowloon City district", "Family-focused services"],
      "description": "Neighbourhood support child care services, community-based support for families. Covers entire Kowloon City district."
    },

    // KOWLOON CITY DISTRICT - PRE-NURSERY PROGRAMS
    {
      "id": 107,
      "name_en": "Imperial Academy (Kowloon City) - Pre-Nursery",
      "name_zh": "Imperial Academy（九龍城）- 學前班",
      "district": "Kowloon City",
      "address": "Shop 1B, No. 18 Fuk Lo Tsun Road, Kowloon City",
      "address_zh": "九龍城福佬村道18號1B號舖",
      "phone": "2716-9966",
      "email": "info@imperialgroup.asia",
      "website": "imperialgroup.asia",
      "type": "Pre-nursery",
      "age_range": "2-3 years",
      "session_types": ["4-day programme (Tue-Fri)"],
      "language": ["English", "Mandarin"],
      "fees": 5200,
      "rating": 4.6,
      "reviews": 38,
      "facilities": ["Imperial Preschool (24-36 months)", "Bilingual environment", "English Language development", "Creative Fun", "Early STEM", "K1 preparation", "Reggio Emilia + EYFS", "Individual documentation", "Gallery app"],
      "description": "4-day programme (Tue-Fri), bilingual environment, English Language development, Creative Fun, Early STEM, K1 preparation."
    },
    {
      "id": 108,
      "name_en": "Victoria (Homantin) International Nursery - Pre-Nursery",
      "name_zh": "維多利亞（何文田）國際幼兒園 - 學前班",
      "district": "Kowloon City",
      "address": "Contact Victoria Education Organisation for exact address",
      "address_zh": "聯絡維多利亞教育機構查詢確實地址",
      "phone": "2762-9130",
      "email": "info@victoria.edu.hk",
      "website": "victoria.edu.hk/campus/homantin-campus",
      "type": "Pre-nursery",
      "age_range": "2-6 years",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English", "Mandarin", "Cantonese"],
      "fees": 5800,
      "rating": 4.7,
      "reviews": 45,
      "facilities": ["Pre-Nursery programs", "Inquiry-based approach", "Character building", "Holistic development", "IB PYP alignment", "Near Homantin MTR", "Established 2005"],
      "description": "Pre-Nursery programs, inquiry-based approach, character building, holistic development."
    },
    {
      "id": 109,
      "name_en": "St. Catherine's International Kindergarten & Nursery (Harbour Place)",
      "name_zh": "國際英文幼稚園暨幼兒園（海濱南岸）",
      "district": "Kowloon City",
      "address": "Kindergarten 1/F, Harbour Place, 8 Oi King Street, Hung Hom, Kowloon",
      "address_zh": "九龍紅磡愛景街8號海濱南岸1樓幼稚園",
      "phone": "2670-6600",
      "email": "info@stcatherines.edu.hk",
      "website": "stcatherines.edu.hk",
      "type": "Pre-nursery",
      "age_range": "2-3 years",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English", "Cantonese"],
      "fees": 5135,
      "rating": 4.8,
      "reviews": 52,
      "facilities": ["Bilingual competencies (Chinese/English)", "5C's education", "Communicative, Collaborative, Creative", "Compassionate, Critical thinking", "Founded 1970", "Tradition of excellence", "1:5.5 teacher ratio"],
      "description": "Bilingual competencies (Chinese/English), 5C's education: Communicative, Collaborative, Creative, Compassionate, Critical thinking."
    },
    {
      "id": 110,
      "name_en": "Po Leung Kuk Chan Lai Wai Lin Kindergarten-cum-Nursery",
      "name_zh": "保良局陳黎惠莲幼稚園暨幼兒中心",
      "district": "Kowloon City",
      "address": "G/F, 1/F & 2/F, Honour Court, 188-194 Ma Tau Wai Road, Kowloon City, Kowloon",
      "address_zh": "九龍九龍城馬頭圍道188-194號康雅苑地下、1樓及2樓",
      "phone": "2364-7170",
      "email": "clwlkgn@poleungkuk.org.hk",
      "website": "poleungkuk.org.hk/child-care-services/clwlkgn",
      "type": "Pre-nursery",
      "age_range": "2-6 years",
      "session_types": ["Whole-day"],
      "language": ["Cantonese", "English"],
      "fees": 2800,
      "rating": 4.4,
      "reviews": 35,
      "facilities": ["Enlightening environment", "Exploratory spirit development", "Whole person development", "Founded 1996", "School social worker", "Rehabilitation services", "1:8.3 teacher ratio"],
      "description": "Enlightening environment, exploratory spirit development, whole person development."
    },
    {
      "id": 111,
      "name_en": "Po Leung Kuk Lui Chan Wai Ching Kindergarten-cum-Nursery",
      "name_zh": "保良局雷陳慧貞幼稚園暨幼兒中心",
      "district": "Kowloon City",
      "address": "G/F, Sheung Lok House, Sheung Lok Estate, Sheung Shing Street, Homantin, Kowloon",
      "address_zh": "九龍何文田常盛街常樂邨常樂樓地下",
      "phone": "2761-3431",
      "email": "lcwckgn@poleungkuk.org.hk",
      "website": "poleungkuk.org.hk/child-care-services/lcwckgn",
      "type": "Pre-nursery",
      "age_range": "2-6 years",
      "session_types": ["Whole-day"],
      "language": ["Cantonese", "English"],
      "fees": 2800,
      "rating": 4.3,
      "reviews": 32,
      "facilities": ["High-quality care in loving environment", "Developmental assessment and follow-up", "Subvented operation", "Comprehensive support services"],
      "description": "High-quality care in loving environment, developmental assessment and follow-up."
    },
    {
      "id": 112,
      "name_en": "Po Leung Kuk Lam Ting Lai Ling Kindergarten-cum-Nursery",
      "name_zh": "保良局林丁麗玲幼稚園暨幼兒中心",
      "district": "Kowloon City",
      "address": "G/F, Ka On Lau, Ka Wai Chuen, Hung Hom, Kowloon",
      "address_zh": "九龍紅磡嘉輝花園嘉安樓地下",
      "phone": "2364-9480",
      "email": "ltllkgn@poleungkuk.org.hk",
      "website": "poleungkuk.org.hk/child-care-services/ltllkgn",
      "type": "Pre-nursery",
      "age_range": "2-6 years",
      "session_types": ["Whole-day"],
      "language": ["Cantonese", "English"],
      "fees": 2800,
      "rating": 4.3,
      "reviews": 30,
      "facilities": ["Comprehensive early childhood education", "Children-centered curriculum", "Subvented operation", "Full support services including speech therapy"],
      "description": "Comprehensive early childhood education, children-centered curriculum."
    },
    {
      "id": 113,
      "name_en": "Holy Trinity Centre Kindergarten & Day Nursery",
      "name_zh": "聖三一中心幼稚園暨幼兒園",
      "district": "Kowloon City",
      "address": "Contact for exact address",
      "address_zh": "聯絡查詢確實地址",
      "phone": "Contact for details",
      "email": "info@htckg.edu.hk",
      "website": "htckg.edu.hk",
      "type": "Pre-nursery",
      "age_range": "2-6 years",
      "session_types": ["Whole-day"],
      "language": ["English", "Cantonese"],
      "fees": 3200,
      "rating": 4.5,
      "reviews": 28,
      "facilities": ["Whole-day Early Childhood Education", "Holistic Christian education", "All developmental domains covered", "Established 1984", "HKSKH affiliated", "Every child is unique philosophy"],
      "description": "Whole-day Early Childhood Education, holistic Christian education, all developmental domains covered."
    },
    {
      "id": 114,
      "name_en": "St. Hilary's Kindergarten (Hung Hom)",
      "name_zh": "德萃幼稚園（紅磡）",
      "district": "Kowloon City",
      "address": "G/F – 2/F Metro 6, 121 Bulkeley Street, Hung Hom, Kowloon",
      "address_zh": "九龍紅磡寶其利街121號美羅中心6期地下至2樓",
      "phone": "2338-9097",
      "email": "hh@sthilarys.edu.hk",
      "website": "kindergarten.sthilarys.edu.hk",
      "type": "Pre-nursery",
      "age_range": "12 months+",
      "session_types": ["Toddlers' Playgroup"],
      "language": ["English", "Mandarin"],
      "fees": 4200,
      "rating": 4.4,
      "reviews": 25,
      "facilities": ["Transition preparation", "Bilingual activities (English/Putonghua)", "Motor development", "Adult accompaniment required", "Assessment reports provided", "10% multi-class discount"],
      "description": "Transition preparation, bilingual activities (English/Putonghua), motor development."
    },
    {
      "id": 115,
      "name_en": "Kendall International Preschool",
      "name_zh": "Kendall國際學前班",
      "district": "Kowloon City",
      "address": "228 Fuk Wing Street, Cheung Sha Wan (contact for Kowloon City availability)",
      "address_zh": "長沙灣福榮街228號（聯絡查詢九龍城服務）",
      "phone": "Contact for details",
      "email": "info@kendall.edu.hk",
      "website": "kendall.edu.hk",
      "type": "Pre-nursery",
      "age_range": "2-3 years",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English", "Mandarin"],
      "fees": 4800,
      "rating": 4.3,
      "reviews": 22,
      "facilities": ["Modern Western Teaching + Chinese values", "Creative Curriculum (US developed)", "Learning through play", "Unique Hong Kong approach", "Child-oriented teaching", "2025-2026 admission open"],
      "description": "Modern Western Teaching + Chinese values, Creative Curriculum (US developed), learning through play."
    },
    {
      "id": 116,
      "name_en": "Harrow Little Lions (Kai Tak) - Pre-Nursery",
      "name_zh": "哈羅小獅子（啟德）- 學前班",
      "district": "Kowloon City",
      "address": "55 Kwun Tong Road, Hong Kong",
      "address_zh": "香港觀塘道55號",
      "phone": "2824-9099",
      "email": "futurestar-HK@aisl-edu.com",
      "website": "harrowhongkong.hk/hll",
      "type": "Pre-nursery",
      "age_range": "3-5 years",
      "session_types": ["Contact for details"],
      "language": ["English"],
      "fees": 6200,
      "rating": 4.8,
      "reviews": 48,
      "facilities": ["EYFS", "Inspiring learning spaces", "Bespoke curriculum", "Harrow School heritage", "Educational excellence focus"],
      "description": "EYFS, inspiring learning spaces, bespoke curriculum. Contact directly for 2-3 year program availability."
    },
    {
      "id": 117,
      "name_en": "Sun Island English Kindergarten",
      "name_zh": "太陽島英文幼稚園",
      "district": "Kowloon City",
      "address": "Multiple locations in Kowloon City area",
      "address_zh": "九龍城區多個地點",
      "phone": "Contact for details",
      "email": "info@sunisland.edu.hk",
      "website": "sunisland.edu.hk",
      "type": "Pre-nursery",
      "age_range": "2-6 years",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English", "Cantonese"],
      "fees": 3800,
      "rating": 4.2,
      "reviews": 35,
      "facilities": ["Quality pre-primary education", "English language focus", "Established 1984", "Multiple campus locations"],
      "description": "Quality pre-primary education, English language focus."
    },

    // KWAI TSING DISTRICT - PLAYGROUPS
    {
      "id": 118,
      "name_en": "Llamahood Playgroup (Kwai Chung)",
      "name_zh": "Llamahood遊戲小組（葵涌）",
      "district": "Kwai Tsing",
      "address": "Office 06, 2/F, K83, 83 Tai Lin Pai Road, Kwai Chung, Kwai Tsing District, New Territories",
      "address_zh": "新界葵青區葵涌大林百道83號K83二樓06室",
      "phone": "3169-0119",
      "email": "info@llamahood.com",
      "website": "llamahood.com",
      "type": "Playgroup",
      "age_range": "6-18 months",
      "session_types": ["Weekday sessions", "Weekend sessions"],
      "language": ["English"],
      "fees": 188,
      "rating": 4.4,
      "reviews": 28,
      "facilities": ["Infanity (6-11m)", "Top Learner (12-18m)", "Sensory play", "Music", "Guided activities for fine motor skills", "Language awareness", "Themed learning", "Pretend play", "English focus", "Parent accompaniment", "Free 24hr rescheduling", "Founded by two sisters"],
      "description": "Infanity (6-11m): Sensory play, music, guided activities for fine motor skills, language awareness. Top Learner (12-18m): Themed learning, sensory play, music, pretend play supporting observation and basic language skills."
    },
    {
      "id": 119,
      "name_en": "ESF Tsing Yi International Kindergarten (Playgroups)",
      "name_zh": "ESF青衣國際幼稚園（遊戲小組）",
      "district": "Kwai Tsing",
      "address": "Maritime Square, 33 Tsing King Road, Tsing Yi, New Territories",
      "address_zh": "新界青衣青敬路33號海濱廣場地下及中層",
      "phone": "2436-3355",
      "email": "kinder@tyk.edu.hk",
      "website": "tyk.esf.edu.hk",
      "type": "Playgroup",
      "age_range": "6-18 months",
      "session_types": ["Contact for details"],
      "language": ["English"],
      "fees": 5200,
      "rating": 4.6,
      "reviews": 35,
      "facilities": ["ESF playgroup programs", "EYFS framework", "Play-based inquiry approach", "Curiosity, creativity, communication", "Social skills", "ESF network access", "Experienced teachers", "Student Support Coordinator", "Personalised learning"],
      "description": "ESF playgroup programs following EYFS framework, play-based inquiry approach encouraging curiosity, creativity, communication and social skills."
    },
    {
      "id": 120,
      "name_en": "Hong Kong Sheng Kung Hui Lady MacLehose Centre Joyful Children World",
      "name_zh": "香港聖公會麥理浩夫人中心趣智成長樂園",
      "district": "Kwai Tsing",
      "address": "Portion of 3/F, 22 Wo Yi Hop Road, Kwai Chung, New Territories",
      "address_zh": "新界葵涌和宜合道22號3樓部分",
      "phone": "2423-5496",
      "email": "skhlmcdc@skhmaclehose.org.hk",
      "website": "skhlmc.org.hk",
      "type": "Playgroup",
      "age_range": "6-18 months",
      "session_types": ["Early childhood programs"],
      "language": ["Cantonese", "English"],
      "fees": 2800,
      "rating": 4.2,
      "reviews": 25,
      "facilities": ["Joyful Children World programs", "Early childhood education and childcare", "Holistic development approach", "HKSKH-affiliated", "Established community centre", "Comprehensive family services"],
      "description": "Joyful Children World programs providing early childhood education and childcare, holistic development approach."
    },
    {
      "id": 121,
      "name_en": "Hong Kong Sheng Kung Hui Lady MacLehose Centre Kindergarten Day Nursery",
      "name_zh": "香港聖公會麥理浩夫人中心幼稚園幼兒園",
      "district": "Kwai Tsing",
      "address": "Rm 302-303, 3/F, 22 Wo Yi Hop Road, Kwai Chung, New Territories",
      "address_zh": "新界葵涌和宜合道22號3樓302-303室",
      "phone": "2427-3523",
      "email": "skhlmcdn@skhmaclehose.org.hk",
      "website": "lmcdn.edu.hk",
      "type": "Playgroup",
      "age_range": "2-6 years",
      "session_types": ["Kindergarten and day nursery services"],
      "language": ["Cantonese", "English"],
      "fees": 3200,
      "rating": 4.3,
      "reviews": 30,
      "facilities": ["Kindergarten and day nursery services", "Holistic early childhood education", "Christian values", "HKSKH-affiliated", "Established 1970s", "Kindergarten Education Scheme participant"],
      "description": "Kindergarten and day nursery services, holistic early childhood education with Christian values."
    },
    {
      "id": 122,
      "name_en": "Lai King Rhenish Nursery",
      "name_zh": "禮賢會荔景幼兒園",
      "district": "Kwai Tsing",
      "address": "1/F, Block 5, Yeung King House, Lai King Estate, Kwai Chung, New Territories",
      "address_zh": "新界葵涌荔景邨第五座仰景樓1樓",
      "phone": "Contact for details",
      "email": "info@lkc.ppe.rhenish.org",
      "website": "lkc.ppe.rhenish.org",
      "type": "Playgroup",
      "age_range": "6-18 months",
      "session_types": ["Nursery services"],
      "language": ["Cantonese", "English"],
      "fees": 2800,
      "rating": 4.1,
      "reviews": 22,
      "facilities": ["Quality early childhood education", "Love of Christ", "Holistic development", "Moral, intellectual, physical, social, aesthetic, and spiritual aspects", "Established 1979", "Chinese Rhenish Church operated", "Kindergarten Education Scheme participant"],
      "description": "Quality early childhood education with love of Christ, holistic development in moral, intellectual, physical, social, aesthetic, and spiritual aspects."
    },
    {
      "id": 123,
      "name_en": "Yan Chai Hospital Tung Pak Ying Kindergarten",
      "name_zh": "仁濟醫院董伯英幼稚園",
      "district": "Kwai Tsing",
      "address": "Relocated to Shek Lei (1) Estate (contact for exact address)",
      "address_zh": "遷至石籬（一）邨（聯絡查詢確實地址）",
      "phone": "Contact for details",
      "email": "info@ychtpy.org.hk",
      "website": "ychtpy.org.hk",
      "type": "Playgroup",
      "age_range": "2-6 years",
      "session_types": ["Full-day education"],
      "language": ["Cantonese", "English"],
      "fees": 3000,
      "rating": 4.0,
      "reviews": 20,
      "facilities": ["Full-day education and caring services", "Integrated programmes", "Occasional child care", "Extended hours service", "Established 1977", "First Yan Chai child-care centre", "Serves 140 children", "Originally Kwai Tsing District"],
      "description": "Full-day education and caring services, integrated programmes, occasional child care, extended hours service."
    },
    {
      "id": 124,
      "name_en": "Play Connect Happy Growth Positive Parenting Project",
      "name_zh": "「遊戲連繫快樂成長」正向親職計劃",
      "district": "Kwai Tsing",
      "address": "Various locations in Tsuen Wan District and Kwai Tsing District",
      "address_zh": "荃灣區及葵青區多個地點",
      "phone": "Contact for details",
      "email": "info@savechildren.org.hk",
      "website": "savechildren.org.hk",
      "type": "Playgroup",
      "age_range": "12-30 months",
      "session_types": ["8-session programs"],
      "language": ["Cantonese", "English"],
      "fees": 0,
      "rating": 4.5,
      "reviews": 35,
      "facilities": ["Preschool adaptation playgroup (20-30m)", "Separation exercises", "Self-care skills", "Social skills", "Cognitive skills", "Gross/fine motor development", "Parent stress management workshops", "Save the Children Hong Kong sponsored", "Developmental needs focus", "Separation training"],
      "description": "Preschool adaptation playgroup (20-30m), separation exercises, self-care skills, social skills, cognitive skills, gross/fine motor development. Parent stress management workshops."
    },
    {
      "id": 125,
      "name_en": "Good Parents' Networking Project (Child Protection Focus)",
      "name_zh": "好爸媽網絡計劃（兒童保護焦點）",
      "district": "Kwai Tsing",
      "address": "Various locations including Kwai Chung Estate",
      "address_zh": "多個地點包括葵涌邨",
      "phone": "Contact for details",
      "email": "info@futakiam.org.hk",
      "website": "futakiam.org.hk",
      "type": "Playgroup",
      "age_range": "0-5 years",
      "session_types": ["Parent-child activities"],
      "language": ["Cantonese", "English"],
      "fees": 0,
      "rating": 4.3,
      "reviews": 28,
      "facilities": ["Parent-child activities", "Child protection education", "Positive discipline focus", "Interactive games", "Community events", "Toddlers aged 18-24 months programs", "Fu Tak Iam Foundation sponsored", "Child Protection Carnival events", "Eco-friendly materials", "Community-based"],
      "description": "Parent-child activities, child protection education, positive discipline focus, interactive games, community events. Toddlers aged 18-24 months programs."
    },
    {
      "id": 126,
      "name_en": "My Gym (Potential Service Area)",
      "name_zh": "My Gym（潛在服務區域）",
      "district": "Kwai Tsing",
      "address": "Main location Wong Chuk Hang (may offer satellite programs)",
      "address_zh": "主要地點黃竹坑（可能提供衛星課程）",
      "phone": "Contact for details",
      "email": "info@mygymhk.com",
      "website": "mygymhk.com",
      "type": "Playgroup",
      "age_range": "6 months-6 years",
      "session_types": ["Award-winning programme"],
      "language": ["English", "Cantonese"],
      "fees": 480,
      "rating": 4.4,
      "reviews": 32,
      "facilities": ["Award-winning programme", "Sports, dance, early childhood development", "Kinesiology, gymnastics", "Fine motor skills, coordination", "Muscle development", "Puppet shows, dance, songs", "Contact to confirm Kwai Tsing district service"],
      "description": "Award-winning programme combining sports, dance, early childhood development, kinesiology, gymnastics. Fine motor skills, coordination, muscle development through puppet shows, dance, songs."
    },
    {
      "id": 127,
      "name_en": "Guidepost Montessori (Potential Locations)",
      "name_zh": "Guidepost蒙特梭利（潛在地點）",
      "district": "Kwai Tsing",
      "address": "Multiple locations in Hong Kong (contact for Kwai Tsing availability)",
      "address_zh": "香港多個地點（聯絡查詢葵青區服務）",
      "phone": "Contact for details",
      "email": "info@guidepost.hk",
      "website": "guidepost.hk",
      "type": "Playgroup",
      "age_range": "Up to 18 months",
      "session_types": ["Montessori Together"],
      "language": ["English", "Mandarin"],
      "fees": 4200,
      "rating": 4.5,
      "reviews": 25,
      "facilities": ["Montessori Together", "Accompanied playgroup for children up to 18 months", "Thoughtfully designed to encourage independent learning", "Multiple HK locations", "Authentic Montessori method", "Parent accompaniment required", "Contact for Kwai Tsing district availability"],
      "description": "Montessori Together - accompanied playgroup for children up to 18 months, thoughtfully designed to encourage independent learning."
    },
    {
      "id": 128,
      "name_en": "Po Leung Kuk Mr. & Mrs. Charlie Lee Kindergarten-cum-Nursery",
      "name_zh": "保良局李樹福伉儷幼稚園暨幼兒中心",
      "district": "Kwai Tsing",
      "address": "Wing B & C, Podium Level, Shing Yat House, Kwai Shing East Estate, Kwai Chung, New Territories",
      "address_zh": "新界葵涌葵盛東邨盛逸樓平台B及C翼",
      "phone": "2419-2734",
      "email": "clkgn@poleungkuk.org.hk",
      "website": "poleungkuk.org.hk/child-care-services/clkgn/school-info",
      "type": "Pre-nursery",
      "age_range": "2-6 years",
      "session_types": ["Whole-day"],
      "language": ["Cantonese", "English"],
      "fees": 2583,
      "rating": 4.4,
      "reviews": 35,
      "facilities": ["Pre-Nursery (N class): 2-3 years", "K1-K3: 3-6 years", "Diversified daytime child care and education services", "Holistic development approach", "Established 2000", "Serving district 30+ years", "100% qualified teachers", "Children above 12 months can apply"],
      "description": "Pre-Nursery (N class): 2-3 years, diversified daytime child care and education services, holistic development approach."
    },
    {
      "id": 129,
      "name_en": "S.K.H. St. Christopher's Nursery (Kwai Chung)",
      "name_zh": "聖公會聖基道幼兒園（葵涌）",
      "district": "Kwai Tsing",
      "address": "Unit No.1, Podium Level 3, Kwai Chung Shopping Centre, Kwai Chung Estate, New Territories",
      "address_zh": "新界葵涌邨葵涌商場三樓平台一號單位",
      "phone": "2257-9331",
      "email": "kc_sup@skhsch.org.hk",
      "website": "skhkckg.edu.hk",
      "type": "Pre-nursery",
      "age_range": "2-6 years",
      "session_types": ["Whole-day"],
      "language": ["English", "Cantonese", "Mandarin"],
      "fees": 3200,
      "rating": 4.5,
      "reviews": 42,
      "facilities": ["Preschool class N: 2-3 years", "K1-K3: 3-6 years", "Whole day pre-school education", "Biliteracy and trilingualism with native teachers", "Founded 2006", "HKSKH operated", "Continuous assessment policy", "Computing facilities"],
      "description": "Preschool N class (2-3y): Whole day pre-school education, biliteracy and trilingualism with native teachers."
    },
    {
      "id": 130,
      "name_en": "Maritime Square Lutheran Day Nursery",
      "name_zh": "路德會青衣城幼兒園",
      "district": "Kwai Tsing",
      "address": "Portion of Ground Floor, Maritime Square, 33 Tsing King Road, Tsing Yi, New Territories",
      "address_zh": "新界青衣青敬路33號青衣城地下部分",
      "phone": "2449-0052",
      "email": "n10@hklss.hk",
      "website": "msl-web.net",
      "type": "Pre-nursery",
      "age_range": "2-6 years",
      "session_types": ["Whole-day"],
      "language": ["Cantonese", "English"],
      "fees": 2979,
      "rating": 4.3,
      "reviews": 28,
      "facilities": ["N1: 2-3 years", "K1-K3: 3-6 years", "Whole day pre-primary education", "Integrated curriculum", "Whole language learning", "Established November 1999", "Near Tsing Yi MTR A1 Exit", "Miscellaneous fee $700/semester"],
      "description": "N1 class (2-3 years): Whole day pre-primary education, integrated curriculum, whole language learning."
    },
    {
      "id": 131,
      "name_en": "Hong Kong Sheng Kung Hui Lady MacLehose Centre Kindergarten Day Nursery - Pre-Nursery",
      "name_zh": "香港聖公會麥理浩夫人中心幼稚園暨幼兒園 - 學前班",
      "district": "Kwai Tsing",
      "address": "Rm 302-303, 3/F, 22 Wo Yi Hop Road, Kwai Chung, New Territories",
      "address_zh": "新界葵涌和宜合道22號3樓302-303室",
      "phone": "2427-3523",
      "email": "skhlmcdn@skhmaclehose.org.hk",
      "website": "lmcdn.edu.hk",
      "type": "Pre-nursery",
      "age_range": "2-6 years",
      "session_types": ["Whole-day"],
      "language": ["Cantonese", "English"],
      "fees": 3200,
      "rating": 4.3,
      "reviews": 30,
      "facilities": ["Pre-Nursery programs", "Holistic early childhood education", "Christian values", "HKSKH-affiliated", "Established 1970s", "Comprehensive family services at same location"],
      "description": "Pre-Nursery programs, holistic early childhood education with Christian values."
    },
    {
      "id": 132,
      "name_en": "Hong Kong Sheng Kung Hui Lady MacLehose Centre (Shek Yam) Kindergarten Day Nursery",
      "name_zh": "香港聖公會麥理浩夫人中心（石蔭）幼稚園暨幼兒園",
      "district": "Kwai Tsing",
      "address": "G/F, Commercial Centre, Phase II, Shek Yam Estate, Kwai Chung, New Territories",
      "address_zh": "新界葵涌石蔭邨第二期商業中心地下",
      "phone": "Contact for details",
      "email": "dnsy_ic@hk.skhlmc.org",
      "website": "lmcsy.edu.hk",
      "type": "Pre-nursery",
      "age_range": "2-6 years",
      "session_types": ["Whole-day"],
      "language": ["Cantonese", "English"],
      "fees": 3200,
      "rating": 4.2,
      "reviews": 25,
      "facilities": ["Pre-Nursery services", "Christian-based early childhood education", "Whole-day programs", "HKSKH-affiliated", "Serves Shek Yam Estate area", "Satellite campus"],
      "description": "Pre-Nursery services, Christian-based early childhood education, whole-day programs."
    },
    {
      "id": 133,
      "name_en": "Lai King Rhenish Nursery - Pre-Nursery",
      "name_zh": "禮賢會荔景幼兒園 - 學前班",
      "district": "Kwai Tsing",
      "address": "1/F, Block 5, Yeung King House, Lai King Estate, Kwai Chung, New Territories",
      "address_zh": "新界葵涌荔景邨第五座仰景樓1樓",
      "phone": "2742-1714",
      "email": "info.lkc@ppe.rhenish.org",
      "website": "lkc.ppe.rhenish.org",
      "type": "Pre-nursery",
      "age_range": "2-3 years",
      "session_types": ["Whole-day", "Half-day"],
      "language": ["Cantonese", "English"],
      "fees": 2800,
      "rating": 4.1,
      "reviews": 22,
      "facilities": ["Pre-Nursery (N1): 2-3 years", "Whole-day and half-day classes", "Quality education with love of Christ", "Holistic development", "Established 1979", "Chinese Rhenish Church operated", "Kindergarten Education Scheme participant"],
      "description": "Pre-Nursery N1 (2-3 years): Quality education with love of Christ, holistic development."
    },
    {
      "id": 134,
      "name_en": "Yan Chai Hospital Ju Ching Chu Kindergarten",
      "name_zh": "仁濟醫院裘錦秋幼稚園",
      "district": "Kwai Tsing",
      "address": "G/F, Chak Yam House, On Yam Estate, Kwai Chung, New Territories",
      "address_zh": "新界葵涌安蔭邨澤蔭樓地下",
      "phone": "Contact for details",
      "email": "info@ychjcc.org.hk",
      "website": "ychjcc.org.hk",
      "type": "Pre-nursery",
      "age_range": "2-6 years",
      "session_types": ["Whole-day"],
      "language": ["Cantonese", "English"],
      "fees": 3000,
      "rating": 4.0,
      "reviews": 20,
      "facilities": ["Pre-Nursery programs", "Comprehensive early childhood education", "Full-day education and caring", "Yan Chai Hospital operated", "On-site Pre-school Rehabilitation Services participant"],
      "description": "Pre-Nursery programs, comprehensive early childhood education, full-day education and caring."
    },
    {
      "id": 135,
      "name_en": "Yan Chai Hospital Tung Pak Ying Kindergarten - Pre-Nursery",
      "name_zh": "仁濟醫院董伯英幼稚園 - 學前班",
      "district": "Kwai Tsing",
      "address": "G/F, Wing B & Wing C, Shek Tai House, Shek Lei (I) Estate, Kwai Chung, New Territories",
      "address_zh": "新界葵涌石籬(一)邨石泰樓B及C翼地下",
      "phone": "Contact for details",
      "email": "info@ychtpy.org.hk",
      "website": "ychtpy.org.hk",
      "type": "Pre-nursery",
      "age_range": "2-6 years",
      "session_types": ["Whole-day"],
      "language": ["Cantonese", "English"],
      "fees": 3000,
      "rating": 4.0,
      "reviews": 20,
      "facilities": ["Full-day education for 140 children", "Integrated programmes", "Occasional child care", "Extended hours", "Established 1977", "First Yan Chai child-care centre", "Relocated but may serve area families"],
      "description": "Full-day education for 140 children, integrated programmes, occasional child care, extended hours."
    },
    {
      "id": 136,
      "name_en": "Yan Chai Hospital Zonta Club of Kowloon Kindergarten",
      "name_zh": "仁濟醫院九龍崇德社幼稚園",
      "district": "Kwai Tsing",
      "address": "Wing B & part of Wing A, G/F, Hang Yip House, Cheung Hang Estate, Tsing Yi, New Territories",
      "address_zh": "新界青衣長亨邨亨業樓地下B翼及A翼部分",
      "phone": "Contact for details",
      "email": "info@ychzck.org.hk",
      "website": "ychzck.org.hk",
      "type": "Pre-nursery",
      "age_range": "2-6 years",
      "session_types": ["Whole-day"],
      "language": ["Cantonese", "English"],
      "fees": 3000,
      "rating": 4.0,
      "reviews": 18,
      "facilities": ["Pre-Nursery programs", "Comprehensive kindergarten services", "Full-day education and caring", "Yan Chai Hospital operated", "Tsing Yi location", "Rehabilitation services participant"],
      "description": "Pre-Nursery programs, comprehensive kindergarten services, full-day education and caring."
    },
    {
      "id": 137,
      "name_en": "Learning Habitat Kindergarten",
      "name_zh": "學之園幼稚園",
      "district": "Kwai Tsing",
      "address": "Level 1, Commercial Building of Phase 1, Villa Esplanada, 8 Nga Ying Chau Street, Tsing Yi, New Territories",
      "address_zh": "新界青衣牙鷹洲街8號灝景灣第1期商場第1層",
      "phone": "Contact for details",
      "email": "info@learninghabitat.edu.hk",
      "website": "learninghabitat.edu.hk",
      "type": "Pre-nursery",
      "age_range": "2-3 years",
      "session_types": ["Contact for details"],
      "language": ["English", "Cantonese"],
      "fees": 4500,
      "rating": 4.4,
      "reviews": 25,
      "facilities": ["Kindergarten programs with potential Pre-Nursery services", "Tsing Yi location", "On-site Pre-school Rehabilitation Services participant"],
      "description": "Kindergarten programs with potential Pre-Nursery services."
    },
    {
      "id": 138,
      "name_en": "ESF Tsing Yi International Kindergarten (Pre-Kindergarten)",
      "name_zh": "ESF青衣國際幼稚園（學前幼稚園）",
      "district": "Kwai Tsing",
      "address": "G/F and Mezzanine/F, 33 Tsing King Road, Tsing Yi, New Territories",
      "address_zh": "新界青衣青敬路33號地下及中層",
      "phone": "2436-3355",
      "email": "kinder@tyk.edu.hk",
      "website": "tyk.esf.edu.hk",
      "type": "Pre-nursery",
      "age_range": "2-3 years",
      "session_types": ["Contact for details"],
      "language": ["English"],
      "fees": 5800,
      "rating": 4.6,
      "reviews": 35,
      "facilities": ["ESF Pre-Kindergarten following EYFS framework", "Play-based inquiry approach", "Personalised learning", "ESF network access", "Experienced teachers", "Everyone a learner, everyone an achiever philosophy"],
      "description": "ESF Pre-Kindergarten following EYFS framework, play-based inquiry approach, personalised learning."
    },
    {
      "id": 139,
      "name_en": "YWCA Tsing Yi Nursery School",
      "name_zh": "基督教女青年會青衣幼兒學校",
      "district": "Kwai Tsing",
      "address": "Contact YWCA for exact address in Tsing Yi",
      "address_zh": "聯絡基督教女青年會查詢青衣確實地址",
      "phone": "Contact for details",
      "email": "info@ywca.org.hk",
      "website": "nsty.ywca.org.hk",
      "type": "Pre-nursery",
      "age_range": "2-6 years",
      "session_types": ["Whole-day"],
      "language": ["Cantonese", "English"],
      "fees": 2800,
      "rating": 4.2,
      "reviews": 22,
      "facilities": ["Quality whole-day early childhood education", "Christian values-based education", "Established 1984", "Formerly Cheung Ching Nursery School", "Kindergarten Education Scheme participant"],
      "description": "Quality whole-day early childhood education, Christian values-based education."
    },
    {
      "id": 140,
      "name_en": "Sun Island English Kindergarten (Kwai Hing Branch)",
      "name_zh": "太陽島英文幼稚園（葵興分校）",
      "district": "Kwai Tsing",
      "address": "Near Kwai Hing Station (Exit C), contact for exact address",
      "address_zh": "葵興站附近（C出口），聯絡查詢確實地址",
      "phone": "Contact for details",
      "email": "info@sunisland.edu.hk",
      "website": "sunisland.edu.hk",
      "type": "Pre-nursery",
      "age_range": "2-3 years",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English", "Cantonese"],
      "fees": 3800,
      "rating": 4.3,
      "reviews": 28,
      "facilities": ["Pre-Nursery Class (PN): 2-3 years", "Minimum admission age 2", "Quality pre-primary education with English language focus", "Established 1984", "MTR accessible (Kwai Hing Station Exit C)", "Student transport service available"],
      "description": "Pre-Nursery Class (PN), quality pre-primary education with English language focus."
    },

    // KWUN TONG DISTRICT - PLAYGROUPS
    {
      "id": 141,
      "name_en": "Child Psychological Development Association (CPDA) - Kwun Tong Center",
      "name_zh": "嬰幼兒心理發展協會 - 觀塘分會",
      "district": "Kwun Tong",
      "address": "Room F, 30/F, Legend Tower, 7 Shing Yip Street, Kwun Tong, Kowloon",
      "address_zh": "九龍觀塘成業街7號寧晉中心30樓F室",
      "phone": "3575-9511",
      "email": "info-kt@cpda.com.hk",
      "website": "cpda.com.hk",
      "type": "Playgroup",
      "age_range": "6-18 months",
      "session_types": ["Weekday", "Weekend"],
      "language": ["Cantonese", "English"],
      "fees": 2850,
      "rating": 4.5,
      "reviews": 45,
      "facilities": ["Infant Development Playgroup (6-9m, 9-12m, 12-15m, 15-18m)", "10 lessons, 1 lesson/week (1 hour)", "Baby Massage (6-9m): 5 lessons (1 hour each)", "Parent-accompanied", "Sensory play", "Motor skills", "Language development", "Multiple slots Mon-Sun", "New member 10% discount", "Upgrade discount 5%", "Rolling enrollment (循環課程)"],
      "description": "Infant Development Playgroup (6-9m, 9-12m, 12-15m, 15-18m): 10 lessons, 1 lesson/week (1 hour). Baby Massage (6-9m): 5 lessons (1 hour each). Parent-accompanied, sensory play, motor skills, language development."
    },
    {
      "id": 142,
      "name_en": "Victoria Playpark (Potential Service Area)",
      "name_zh": "維多利亞遊戲園（潛在服務區域）",
      "district": "Kwun Tong",
      "address": "Main centers: Wan Chai Harcourt House, TST K11 MUSEA (contact for Kwun Tong service)",
      "address_zh": "主要中心：灣仔夏慤大廈、尖沙咀K11 MUSEA（聯絡查詢觀塘服務）",
      "phone": "2117-4218",
      "email": "enquiryhc@victoriaplaypark.com",
      "website": "victoriaplaypark.com",
      "type": "Playgroup",
      "age_range": "8-24 months",
      "session_types": ["Weekday", "Weekend"],
      "language": ["English", "Putonghua", "Cantonese"],
      "fees": 3500,
      "rating": 4.6,
      "reviews": 52,
      "facilities": ["Infant (8-12m): Physical activities, sensory play, art, music, rhymes, language, social interaction, baby massage", "Toddler (13-24m): Storytelling, sensory play, music, art, gross/fine motor development", "Trilingual programs (English, Putonghua, Cantonese)", "One-teacher-one-language approach", "Purpose-built environment", "Holiday Programs: PlayTime on Sundays/holidays at K11 MUSEA for ages 1-5", "Themed activities, 40-45 min sessions"],
      "description": "Infant (8-12m): Physical activities, sensory play, art, music, rhymes, language, social interaction, baby massage. Toddler (13-24m): Storytelling, sensory play, music, art, gross/fine motor development."
    },
    {
      "id": 143,
      "name_en": "Monkey Tree English Learning Center (Kwun Tong)",
      "name_zh": "Monkey Tree英語學習中心（觀塘）",
      "district": "Kwun Tong",
      "address": "Shop No 18, G/F, Yue Man Centre, Nos.300 & 302, Ngau Tau Kok Road, Kowloon",
      "address_zh": "九龍牛頭角道300及302號裕民中心地下18號舖",
      "phone": "2117-1948",
      "email": "info@monkeytree.com.hk",
      "website": "monkeytree.com.hk",
      "type": "Playgroup",
      "age_range": "2.5-6 years",
      "session_types": ["Saturday"],
      "language": ["English"],
      "fees": 2800,
      "rating": 4.3,
      "reviews": 38,
      "facilities": ["Saturday Little Monkeys: Entry-level program with play-based learning", "English exposure via songs, games, crafts, stories", "Focus on speaking, listening, fundamental phonics", "Saturday classes, 1.5 hours/class", "Max 8 students", "Monthly themes", "Native English teachers", "Mon-Fri: 9:30am-7:30pm, Sat: 9:30am-5:30pm", "MTR Access: Ngau Tau Kok Station Exit A"],
      "description": "Saturday Little Monkeys: Entry-level program with play-based learning, English exposure via songs, games, crafts, stories. Focus on speaking, listening, fundamental phonics."
    },
    {
      "id": 144,
      "name_en": "Monkey Tree English Learning Center (Lam Tin)",
      "name_zh": "Monkey Tree英語學習中心（藍田）",
      "district": "Kwun Tong",
      "address": "Shop no.90, 1/F, Laguna Plaza, 88 Cha Kwo Ling Road, Kwun Tong",
      "address_zh": "觀塘茶果嶺道88號麗港城商場1樓90號舖",
      "phone": "2338-8702",
      "email": "info@monkeytree.com.hk",
      "website": "monkeytree.com.hk",
      "type": "Playgroup",
      "age_range": "2.5-6 years",
      "session_types": ["Weekday", "Saturday"],
      "language": ["English"],
      "fees": 2800,
      "rating": 4.2,
      "reviews": 32,
      "facilities": ["English learning programs with play-based approach", "Native English teachers", "Progressive levels", "Mon-Fri: 9:30am-7:30pm, Sat: 9:30am-5:30pm"],
      "description": "English learning programs with play-based approach, native English teachers, progressive levels."
    },
    {
      "id": 145,
      "name_en": "Monkey Tree English Learning Center (Sau Mau Ping)",
      "name_zh": "Monkey Tree英語學習中心（秀茂坪）",
      "district": "Kwun Tong",
      "address": "Shops 110 & 111, 1/F, Hiu Lai Shopping Centre, Hiu Lai Court, Sau Mau Ping, Kwun Tong",
      "address_zh": "觀塘秀茂坪曉麗苑曉麗商場1樓110及111號舖",
      "phone": "2698-1026",
      "email": "info@monkeytree.com.hk",
      "website": "monkeytree.com.hk",
      "type": "Playgroup",
      "age_range": "2.5-6 years",
      "session_types": ["Weekday", "Saturday"],
      "language": ["English"],
      "fees": 2800,
      "rating": 4.2,
      "reviews": 30,
      "facilities": ["English learning programs with play-based learning", "Songs, games, crafts, stories for young learners", "Mon-Fri: 9:30am-7:30pm, Sat: 9:30am-5:30pm"],
      "description": "English learning programs with play-based learning, songs, games, crafts, stories for young learners."
    },
    {
      "id": 146,
      "name_en": "Maple Bear Academy (Yau Tong Campus) - Extra Curricular Activities",
      "name_zh": "楓葉小熊學院（油塘校園）- 課外活動",
      "district": "Kwun Tong",
      "address": "Contact Maple Bear Yau Tong campus for exact address",
      "address_zh": "聯絡楓葉小熊油塘校園查詢確實地址",
      "phone": "Contact for details",
      "email": "info@maplebear.hk",
      "website": "maplebear.hk/eca",
      "type": "Playgroup",
      "age_range": "12-24 months",
      "session_types": ["Weekday", "Weekend"],
      "language": ["English", "Cantonese"],
      "fees": 3200,
      "rating": 4.4,
      "reviews": 35,
      "facilities": ["Music Induction", "Pre-K Gym", "Various activities for 12-17 months and 18-24 months age groups", "Learn through play approach", "Canadian curriculum-based academy", "Multiple age-appropriate programs", "Trial classes available"],
      "description": "Music Induction, Pre-K Gym, various activities for 12-17 months and 18-24 months age groups. Learn through play approach."
    },
    {
      "id": 147,
      "name_en": "My Gym Hong Kong (Potential Service Area)",
      "name_zh": "My Gym香港（潛在服務區域）",
      "district": "Kwun Tong",
      "address": "Main location: Wong Chuk Hang (may serve Kwun Tong area)",
      "address_zh": "主要地點：黃竹坑（可能服務觀塘區）",
      "phone": "Contact for details",
      "email": "info@mygymhk.com",
      "website": "mygymhk.com",
      "type": "Playgroup",
      "age_range": "6 months-6 years",
      "session_types": ["Weekday", "Saturday"],
      "language": ["English", "Cantonese"],
      "fees": 480,
      "rating": 4.5,
      "reviews": 48,
      "facilities": ["Award-winning children's programme combining sports, dance, early childhood development, kinesiology, gymnastics", "Fine motor skills, coordination development through puppet shows, dance, songs, gymnastic stations", "Mon-Sat: 9:15am-5:30pm", "$480 drop-in class, packages from $288/class, trial $380 for new students"],
      "description": "Award-winning children's programme combining sports, dance, early childhood development, kinesiology, gymnastics. Fine motor skills, coordination development through puppet shows, dance, songs, gymnastic stations."
    },
    {
      "id": 148,
      "name_en": "ESF Language & Learning (Potential Programs)",
      "name_zh": "ESF語言及學習（潛在課程）",
      "district": "Kwun Tong",
      "address": "Main center: Wan Chai (contact for Kwun Tong area programs)",
      "address_zh": "主要中心：灣仔（聯絡查詢觀塘區課程）",
      "phone": "Contact for details",
      "email": "info@esfexplore.org.hk",
      "website": "esfexplore.org.hk",
      "type": "Playgroup",
      "age_range": "6-18 months",
      "session_types": ["Weekday"],
      "language": ["English"],
      "fees": 4500,
      "rating": 4.6,
      "reviews": 42,
      "facilities": ["Progressive playgroups following EYFS framework: Level 1 (6-12m), Level 2 (12-18m)", "Stories, songs, hands-on sensory activities, confidence building", "ESF network access", "EYFS curriculum", "Play-based inquiry learning", "Development-tailored levels"],
      "description": "Progressive playgroups following EYFS framework: Level 1 (6-12m), Level 2 (12-18m). Stories, songs, hands-on sensory activities, confidence building."
    },

    // KWUN TONG DISTRICT - PRE-NURSERY PROGRAMS
    {
      "id": 149,
      "name_en": "Po Leung Kuk Lee Siu Chan Kindergarten-cum-Nursery",
      "name_zh": "保良局李筱參幼稚園暨幼兒園",
      "district": "Kwun Tong",
      "address": "5/F, Shun Lee Estate Community Centre, 2 Shun Chi Street, Shun Lee Estate, Kwun Tong, Kowloon",
      "address_zh": "九龍觀塘順利邨順緻街2號順利社區中心5樓",
      "phone": "2343-9038",
      "email": "leesiuchan@poleungkuk.org.hk",
      "website": "poleungkuk.org.hk/child-care-services/lsckgn/school-info",
      "type": "Pre-nursery",
      "age_range": "2-6 years",
      "session_types": ["Whole-day"],
      "language": ["Cantonese", "English"],
      "fees": 3200,
      "rating": 4.4,
      "reviews": 35,
      "facilities": ["Pre-Nursery (N class): 2-3 years", "K1-K3: 3-6 years", "Diversified child care and education services", "Holistic development approach", "Founded 1983", "100% degree holders", "1:9.8 teacher ratio", "School social worker", "Integrated programme"],
      "description": "Pre-Nursery (N class): 2-3 years, diversified child care and education services, holistic development approach."
    },
    {
      "id": 150,
      "name_en": "Caritas Nursery School - Yau Tong",
      "name_zh": "明愛油塘幼兒學校",
      "district": "Kwun Tong",
      "address": "Level 2, 60 Lei Yue Mun Road, Yau Tong, Kowloon",
      "address_zh": "九龍油塘鯉魚門道60號第2層平台",
      "phone": "2717-1098",
      "email": "ccyt@caritassws.org.hk",
      "website": "ytns.caritas.org.hk",
      "type": "Pre-nursery",
      "age_range": "2-6 years",
      "session_types": ["Whole-day"],
      "language": ["Cantonese", "English"],
      "fees": 3200,
      "rating": 4.3,
      "reviews": 30,
      "facilities": ["N1: 2-3 years", "K1-K3: 3-6 years", "Whole day pre-school education", "Catholic education emphasizing 5 Core Values: Truth, Justice, Love, Life, Family", "Founded 2003", "Caritas-Hong Kong operated", "1:8.4 teacher ratio", "108 capacity"],
      "description": "N1 class (2-3 years): Whole day pre-school education, Catholic education emphasizing 5 Core Values: Truth, Justice, Love, Life, Family."
    },
    {
      "id": 151,
      "name_en": "Hong Kong Student Aid Society Po Tat Nursery",
      "name_zh": "香港學生輔助會寶達幼兒園",
      "district": "Kwun Tong",
      "address": "G/F, Tat Yan House, Wing B & C, Po Tat Estate, Sau Mau Ping, Kowloon",
      "address_zh": "九龍秀茂坪寶達邨達欣樓B及C翼地下",
      "phone": "2997-4601",
      "email": "po-tat@hksas.org.hk",
      "website": "potat-nursery.edu.hk",
      "type": "Pre-nursery",
      "age_range": "2-6 years",
      "session_types": ["Whole-day"],
      "language": ["Cantonese", "English"],
      "fees": 3000,
      "rating": 4.2,
      "reviews": 28,
      "facilities": ["N: 2-3 years", "K1-K3: 3-6 years", "Whole-day pre-primary education based on Christian faith", "Nurture students to be courteous, honest, self-confident", "Founded 2002", "76 capacity", "4 registered classrooms", "Professional counseling for parents"],
      "description": "N class (2-3 years): Whole-day pre-primary education based on Christian faith, nurture students to be courteous, honest, self-confident."
    },
    {
      "id": 152,
      "name_en": "Caritas Nursery School - Lei Yue Mun",
      "name_zh": "明愛鯉魚門幼兒學校",
      "district": "Kwun Tong",
      "address": "G/F, Wing B & C, Lei Sang House, Lei Yue Mun Estate, Ko Chiu Road, Kwun Tong, Kowloon",
      "address_zh": "九龍觀塘高超道鯉魚門邨鯉生樓地下B及C翼",
      "phone": "2246-5002",
      "email": "cclym@caritassws.org.hk",
      "website": "lymns.caritas.org.hk",
      "type": "Pre-nursery",
      "age_range": "2-6 years",
      "session_types": ["Whole-day"],
      "language": ["Cantonese", "English"],
      "fees": 2793,
      "rating": 4.3,
      "reviews": 32,
      "facilities": ["N1: 2-3 years", "K1-K3: 3-6 years", "$2,793/month (including school fee $2,393 and meal fee $400)", "Catholic education", "Founded 2003", "110 children capacity", "Financial assistance available", "MTR: Yau Tong Station Exit A1"],
      "description": "N1 class (2-3 years): $2,793/month (including school fee $2,393 and meal fee $400), Catholic education."
    },
    {
      "id": 153,
      "name_en": "Tung Wah Group of Hospitals Chan Han Nursery School",
      "name_zh": "東華三院陳嫺幼兒園",
      "district": "Kwun Tong",
      "address": "Unit No. 2, G/F, Sau Fu House, Sau Ming Road, Sau Mau Ping (I) Estate, Kowloon",
      "address_zh": "九龍秀明道秀茂坪(一)邨秀富樓地下2號",
      "phone": "2340-5982",
      "email": "info@tungwahcsd.org",
      "website": "tungwahcsd.org/en/our-services/youth-and-family-services/day-nursery-services/CHNS",
      "type": "Pre-nursery",
      "age_range": "2-6 years",
      "session_types": ["Whole-day"],
      "language": ["Cantonese", "English"],
      "fees": 3200,
      "rating": 4.1,
      "reviews": 25,
      "facilities": ["Pre-Nursery programs", "Age-appropriate learning corners: dramatic play, reading/writing, art/craft, constructive play, computer programme", "473 sq.m", "3 activity rooms", "Indoor big muscle playground", "Music room", "Founded 1979", "Relocated 1994", "Registered as KG-cum-Child Care Centre 2005"],
      "description": "Pre-Nursery programs, age-appropriate learning corners: dramatic play, reading/writing, art/craft, constructive play, computer programme."
    },
    {
      "id": 154,
      "name_en": "Tsung Tsin Mission of Hong Kong On Yee Nursery School",
      "name_zh": "基督教香港崇真會安怡幼兒學校",
      "district": "Kwun Tong",
      "address": "G/F, Ko Shing House, Ko Yee Estate, Yau Tong, Kowloon",
      "address_zh": "九龍油塘高怡邨高盛樓地下",
      "phone": "2727-6468",
      "email": "info@oe.ttmssd.org",
      "website": "oe.ttmssd.org",
      "type": "Pre-nursery",
      "age_range": "2-6 years",
      "session_types": ["Whole-day"],
      "language": ["Cantonese", "English"],
      "fees": 3000,
      "rating": 4.2,
      "reviews": 28,
      "facilities": ["Pre-Nursery programs", "Christian-based holistic development", "Founded 2000", "101 capacity", "1:9.3 teacher ratio", "100% C(ECE) qualified teachers"],
      "description": "Pre-Nursery programs, Christian-based holistic development."
    },
    {
      "id": 155,
      "name_en": "Garden Estate Baptist Nursery School",
      "name_zh": "花園大廈浸信會幼兒學校",
      "district": "Kwun Tong",
      "address": "Lotus Tower 2, 2/F, Room 37, Garden Estate, 297 Ngau Tau Kok Road, Kwun Tong, Kowloon",
      "address_zh": "九龍觀塘牛頭角道297號花園大廈玉蓮台2座2樓37室",
      "phone": "2345-4340",
      "email": "info@gebns.org.hk",
      "website": "gebns.org.hk",
      "type": "Pre-nursery",
      "age_range": "2-6 years",
      "session_types": ["Whole-day"],
      "language": ["Cantonese", "English"],
      "fees": 3000,
      "rating": 4.0,
      "reviews": 22,
      "facilities": ["Pre-Nursery programs within Baptist church nursery school setting", "Christian education focus", "Baptist church operated", "Participates in On-site Pre-school Rehabilitation Services"],
      "description": "Pre-Nursery programs within Baptist church nursery school setting, Christian education focus."
    },
    {
      "id": 156,
      "name_en": "Kwun Tong Methodist Kindergarten",
      "name_zh": "觀塘循道幼稚園",
      "district": "Kwun Tong",
      "address": "2/F, Lotus Tower-3, Kwun Tong Garden Estate, 297 Ngau Tau Kok Road, Kwun Tong, Kowloon",
      "address_zh": "九龍觀塘牛頭角道297號花園大廈玉蓮台第三座2樓",
      "phone": "Contact for details",
      "email": "info@ktmk.edu.hk",
      "website": "ktmk.edu.hk",
      "type": "Pre-nursery",
      "age_range": "3-6 years",
      "session_types": ["Contact for details"],
      "language": ["Cantonese", "English"],
      "fees": 3000,
      "rating": 4.0,
      "reviews": 20,
      "facilities": ["Methodist church-based kindergarten programs", "May offer Pre-Nursery services", "Methodist church operated", "Participates in On-site Pre-school Rehabilitation Services"],
      "description": "Methodist church-based kindergarten programs, may offer Pre-Nursery services."
    },
    {
      "id": 157,
      "name_en": "St. Antonius Kindergarten",
      "name_zh": "聖安當幼稚園",
      "district": "Kwun Tong",
      "address": "1/F, 1 Yau Tong Road, Kwun Tong, Kowloon",
      "address_zh": "九龍觀塘油塘道1號1樓",
      "phone": "Contact for details",
      "email": "info@stantonius.edu.hk",
      "website": "stantonius.edu.hk",
      "type": "Pre-nursery",
      "age_range": "3-6 years",
      "session_types": ["Contact for details"],
      "language": ["Cantonese", "English"],
      "fees": 3000,
      "rating": 4.0,
      "reviews": 20,
      "facilities": ["Catholic kindergarten programs", "Potential Pre-Nursery services available", "Catholic church operated", "Participates in Caritas On-site Pre-school Rehabilitation Services"],
      "description": "Catholic kindergarten programs, potential Pre-Nursery services available."
    },
    {
      "id": 158,
      "name_en": "St. James Catholic Kindergarten",
      "name_zh": "天主教聖雅各伯幼稚園",
      "district": "Kwun Tong",
      "address": "8 Ka Wing Street, Yau Tong, Kowloon",
      "address_zh": "九龍油塘嘉榮街8號",
      "phone": "Contact for details",
      "email": "info@stjames.edu.hk",
      "website": "stjames.edu.hk",
      "type": "Pre-nursery",
      "age_range": "3-6 years",
      "session_types": ["Contact for details"],
      "language": ["Cantonese", "English"],
      "fees": 3000,
      "rating": 4.0,
      "reviews": 20,
      "facilities": ["Catholic kindergarten education", "May offer Pre-Nursery programs for 2-3 years", "Catholic church operated", "Participates in Caritas On-site Pre-school Rehabilitation Services"],
      "description": "Catholic kindergarten education, may offer Pre-Nursery programs for 2-3 years."
    },
    {
      "id": 159,
      "name_en": "Po Leung Kuk Mrs Fong Wong Kam Chuen Kindergarten",
      "name_zh": "保良局方王錦全幼稚園",
      "district": "Kwun Tong",
      "address": "G/F, Block C, Ko Chun Court, Ko Chiu Road, Yau Tong, Kowloon",
      "address_zh": "九龍油塘高超道高俊苑C座地下",
      "phone": "Contact for details",
      "email": "info@poleungkuk.org.hk",
      "website": "poleungkuk.org.hk",
      "type": "Pre-nursery",
      "age_range": "3-6 years",
      "session_types": ["Contact for details"],
      "language": ["Cantonese", "English"],
      "fees": 3200,
      "rating": 4.2,
      "reviews": 25,
      "facilities": ["Po Leung Kuk kindergarten services", "May include Pre-Nursery programs for 2-3 years", "Po Leung Kuk operated", "Participates in I Can Fly (Kowloon East) rehabilitation services"],
      "description": "Po Leung Kuk kindergarten services, may include Pre-Nursery programs for 2-3 years."
    },
    {
      "id": 160,
      "name_en": "Po Leung Kuk Ng Po Ling Kindergarten-cum-Nursery",
      "name_zh": "保良局吳寶玲幼稚園暨幼兒園",
      "district": "Kwun Tong",
      "address": "Unit 21-34, Podium Level, Tsui To House, Tsui Ping Estate, Tsui Ping Road, Kwun Tong, Kowloon",
      "address_zh": "九龍觀塘翠屏道翠屏邨翠桃樓平台21-34號",
      "phone": "Contact for details",
      "email": "info@poleungkuk.org.hk",
      "website": "poleungkuk.org.hk",
      "type": "Pre-nursery",
      "age_range": "2-6 years",
      "session_types": ["Whole-day"],
      "language": ["Cantonese", "English"],
      "fees": 3200,
      "rating": 4.2,
      "reviews": 25,
      "facilities": ["Kindergarten-cum-Nursery services including Pre-Nursery for 2-3 years", "Holistic development approach", "Po Leung Kuk operated", "Participates in I Can Fly (Kowloon East) rehabilitation services"],
      "description": "Kindergarten-cum-Nursery services including Pre-Nursery for 2-3 years, holistic development approach."
    },
    {
      "id": 161,
      "name_en": "CNEC Christian Kindergarten (Sau Mau Ping)",
      "name_zh": "中華傳道會基督教幼稚園（秀茂坪）",
      "district": "Kwun Tong",
      "address": "Contact school for exact address in Sau Mau Ping area",
      "address_zh": "聯絡學校查詢秀茂坪區確實地址",
      "phone": "Contact for details",
      "email": "info@cnec.edu.hk",
      "website": "cnec.edu.hk",
      "type": "Pre-nursery",
      "age_range": "3-6 years",
      "session_types": ["Contact for details"],
      "language": ["Cantonese", "English"],
      "fees": 3000,
      "rating": 4.0,
      "reviews": 20,
      "facilities": ["Christian kindergarten education", "May offer Pre-Nursery programs", "CNEC operated", "Participates in I Can Fly (Kowloon East) rehabilitation services"],
      "description": "Christian kindergarten education, may offer Pre-Nursery programs."
    },

    // NORTH DISTRICT - PLAYGROUPS
    {
      "id": 162,
      "name_en": "MAGART International Kindergarten (Fanling Campus) - Playgroups",
      "name_zh": "瑪歌瑞特國際幼稚園（粉嶺校園）- 遊戲小組",
      "district": "North",
      "address": "G/F, Sites A & B, Phase 1, Central Plaza, 9 Fanling Station Road, Fanling, New Territories",
      "address_zh": "新界粉嶺火車站路9號中心廣場第1期A及B座地下",
      "phone": "2677-8109",
      "email": "info@magartedu.com",
      "website": "magartedu.com",
      "type": "Playgroup",
      "age_range": "6-24 months",
      "session_types": ["Saturday", "Weekday"],
      "language": ["English", "Cantonese"],
      "fees": 400,
      "rating": 4.5,
      "reviews": 45,
      "facilities": ["Curious Crawlers: 6-12 months", "Little Explorers: 12-24 months", "Sensory experiences, language, physical development, social skills", "Play-based learning, inquiry-based approach, EYFS curriculum", "Over 50,000 sq.ft campus", "Outdoor learning area", "Trial class available", "Fanling MTR Station Exit A (direct access)"],
      "description": "Curious Crawlers (6-12m): Sensory experiences, language, physical development, social skills. Little Explorers (12-24m): Play-based learning, inquiry-based approach, EYFS curriculum."
    },
    {
      "id": 163,
      "name_en": "Fun To Learn English Learning Centre (Sheung Shui) - Fun 2 Grow Playgroup",
      "name_zh": "Fun To Learn英語學習中心（上水）- Fun 2 Grow遊戲小組",
      "district": "North",
      "address": "Shop 7, 2/F, 33 Lung Sum Avenue, Lung Fung Garden, Sheung Shui, New Territories",
      "address_zh": "新界上水龍琛路33號龍豐花園2樓7號舖",
      "phone": "5406-7892",
      "email": "info@fun2learnenglish.com.hk",
      "website": "fun2learnenglish.com.hk",
      "type": "Playgroup",
      "age_range": "12-36 months",
      "session_types": ["Weekday", "Saturday"],
      "language": ["English"],
      "fees": 200,
      "rating": 4.3,
      "reviews": 38,
      "facilities": ["Fun 2 Grow (1-3y): English playgroup teaching communication, play, making friends", "Story listening, singing & movement, arts & crafts, snack time, sensory games, English interaction", "1 hour sessions, 4 lessons per course, $800 for 4 lessons", "Small group teaching", "Home-like environment", "Free professional assessment"],
      "description": "Fun 2 Grow (1-3y): English playgroup teaching communication, play, making friends. Story listening, singing & movement, arts & crafts, snack time, sensory games, English interaction."
    },
    {
      "id": 164,
      "name_en": "Fun To Learn English Learning Centre (Fanling Branch)",
      "name_zh": "Fun To Learn英語學習中心（粉嶺分校）",
      "district": "North",
      "address": "Shop 17AB, Level 2, Belair Monte Shopping Mall, 3 Ma Sik Road, Fanling, New Territories",
      "address_zh": "新界粉嶺馬適路3號碧湖花園商場2樓17AB號舖",
      "phone": "5406-7892",
      "email": "info@funtolearnenglish.com.hk",
      "website": "funtolearnenglish.com.hk",
      "type": "Playgroup",
      "age_range": "6 months-10 years",
      "session_types": ["Weekday", "Saturday"],
      "language": ["English"],
      "fees": 250,
      "rating": 4.2,
      "reviews": 32,
      "facilities": ["English learning programs with interactive approach", "Small group teaching", "Role play, arts & crafts, games, circle time", "Bright, home-like environment", "Experienced teachers", "Confidence building focus"],
      "description": "English learning programs with interactive approach, small group teaching, role play, arts & crafts, games, circle time."
    },
    {
      "id": 165,
      "name_en": "Child Psychological Development Association (CPDA) - Sheung Shui Center",
      "name_zh": "嬰幼兒心理發展協會 - 上水分會",
      "district": "North",
      "address": "Contact CPDA for Sheung Shui center address",
      "address_zh": "聯絡嬰幼兒心理發展協會查詢上水分會地址",
      "phone": "Contact for details",
      "email": "info@cpda.com.hk",
      "website": "cpda.com.hk",
      "type": "Playgroup",
      "age_range": "6-18 months",
      "session_types": ["Weekday", "Weekend"],
      "language": ["Cantonese", "English"],
      "fees": 2850,
      "rating": 4.4,
      "reviews": 40,
      "facilities": ["Infant Development Playgroup (6-9m, 9-12m, 12-15m, 15-18m)", "10 lessons, 1 lesson/week (1 hour)", "Activities based on psychological development needs", "Professional psychologists on staff", "Research-based program development", "Focus on preventive work", "Enhance cognitive, behavioral, social and emotional development"],
      "description": "Infant Development Playgroup (6-9m, 9-12m, 12-15m, 15-18m): 10 lessons, 1 lesson/week (1 hour). Activities based on psychological development needs."
    },
    {
      "id": 166,
      "name_en": "Gloria Creative Kindergarten / International Nursery (Sheung Shui Campus) - Pre-schoolers Playgroup",
      "name_zh": "耀基創藝幼稚園/國際幼兒園（上水校園）- 學前遊戲小組",
      "district": "North",
      "address": "Contact school for Sheung Shui campus address",
      "address_zh": "聯絡學校查詢上水校園地址",
      "phone": "Contact for details",
      "email": "info@gciedu.hk",
      "website": "gciedu.hk",
      "type": "Playgroup",
      "age_range": "6-18 months",
      "session_types": ["Weekday", "Weekend"],
      "language": ["English", "Cantonese"],
      "fees": 3200,
      "rating": 4.3,
      "reviews": 35,
      "facilities": ["Pre-schoolers Playgroup programs", "Christian-based education", "Holistic development with creativity and artistic expression", "Happy Learning, Meaningful Learning, Creative Learning philosophy", "Home-school cooperation"],
      "description": "Pre-schoolers Playgroup programs, Christian-based education, holistic development with creativity and artistic expression."
    },
    {
      "id": 167,
      "name_en": "Gloria Creative Kindergarten / International Nursery (Fanling Campus) - Pre-schoolers Playgroup",
      "name_zh": "耀基創藝幼稚園/國際幼兒園（粉嶺校園）- 學前遊戲小組",
      "district": "North",
      "address": "Contact school for Fanling campus address",
      "address_zh": "聯絡學校查詢粉嶺校園地址",
      "phone": "Contact for details",
      "email": "info@gciedu.hk",
      "website": "gciedu.hk",
      "type": "Playgroup",
      "age_range": "6-18 months",
      "session_types": ["Weekday", "Weekend"],
      "language": ["English", "Cantonese"],
      "fees": 3200,
      "rating": 4.3,
      "reviews": 35,
      "facilities": ["Pre-schoolers Playgroup programs", "Christian-based early childhood education", "Experiential learning activities", "Bilingual education", "Parent education seminars", "Child flag-guards activities", "Parent-child Activity Day for PN & NC", "Mid-Autumn Lantern Carnivals", "Birthday Parties"],
      "description": "Pre-schoolers Playgroup programs, Christian-based early childhood education, experiential learning activities."
    },
    {
      "id": 168,
      "name_en": "Tung Wah Group of Hospitals Jolly Playland (North District)",
      "name_zh": "東華三院童樂居（北區）",
      "district": "North",
      "address": "Contact Tung Wah Group of Hospitals for exact address in North District",
      "address_zh": "聯絡東華三院查詢北區確實地址",
      "phone": "Contact for details",
      "email": "info@tungwahcsd.org",
      "website": "tungwahcsd.org/en/our-services/youth-and-family-services/day-nursery-services/JP-ND",
      "type": "Playgroup",
      "age_range": "0-24 months",
      "session_types": ["Whole-day"],
      "language": ["Cantonese", "English"],
      "fees": 3500,
      "rating": 4.2,
      "reviews": 28,
      "facilities": ["Full-day care: newborns to 2 years old", "Full-day care and educational services", "Warm, safe, inspiring learning environment", "Extended-hours service available", "Supports working parents", "Helps balance work and family life", "Non-profit standalone child care center", "Walks alongside parents on parenting journey"],
      "description": "Full-day care and educational services for newborns to 2-year-olds, warm, safe, inspiring learning environment."
    },
    {
      "id": 169,
      "name_en": "ESF Language & Learning (Potential North District Programs)",
      "name_zh": "ESF語言及學習（潛在北區課程）",
      "district": "North",
      "address": "Main center: Wan Chai (contact for North District programs)",
      "address_zh": "主要中心：灣仔（聯絡查詢北區課程）",
      "phone": "Contact for details",
      "email": "info@esfexplore.org.hk",
      "website": "esfexplore.org.hk",
      "type": "Playgroup",
      "age_range": "6-18 months",
      "session_types": ["Weekday"],
      "language": ["English"],
      "fees": 4500,
      "rating": 4.6,
      "reviews": 42,
      "facilities": ["Progressive playgroups following EYFS framework: Level 1 (6-12m), Level 2 (12-18m)", "Stories, songs, hands-on sensory activities, confidence building", "ESF network access", "EYFS curriculum", "Play-based inquiry learning", "Development-tailored levels"],
      "description": "Progressive playgroups following EYFS framework: Level 1 (6-12m), Level 2 (12-18m). Stories, songs, hands-on sensory activities, confidence building."
    },
    {
      "id": 170,
      "name_en": "My Gym Hong Kong (Potential Service Area)",
      "name_zh": "My Gym香港（潛在服務區域）",
      "district": "North",
      "address": "Main location: Wong Chuk Hang (may serve North District)",
      "address_zh": "主要地點：黃竹坑（可能服務北區）",
      "phone": "Contact for details",
      "email": "info@mygymhk.com",
      "website": "mygymhk.com",
      "type": "Playgroup",
      "age_range": "6 months-6 years",
      "session_types": ["Weekday", "Saturday"],
      "language": ["English", "Cantonese"],
      "fees": 480,
      "rating": 4.5,
      "reviews": 48,
      "facilities": ["Award-winning children's programme combining sports, dance, early childhood development, kinesiology, gymnastics", "Fine motor skills development through puppet shows, dance, songs", "$480 drop-in class, packages from $288/class, trial $380 for new students", "Founded California 1983", "Energetic teaching team", "Builds confidence through meaningful play"],
      "description": "Award-winning children's programme combining sports, dance, early childhood development, kinesiology, gymnastics. Fine motor skills development through puppet shows, dance, songs."
    },

    // NORTH DISTRICT - PRE-NURSERY PROGRAMS
    {
      "id": 171,
      "name_en": "New Territories Women & Juveniles Welfare Association Fanling Nursery School",
      "name_zh": "新界婦孺福利會粉嶺幼兒學校",
      "district": "North",
      "address": "G/F, Wing B & C, Chun King House, King Shing Court, Fanling, New Territories",
      "address_zh": "新界粉嶺景盛苑俊景閣B及C翼地下",
      "phone": "2682-0877",
      "email": "fl@ntwjwaflns.edu.hk",
      "website": "ntwjwaflns.edu.hk",
      "type": "Pre-nursery",
      "age_range": "2-6 years",
      "session_types": ["Whole-day"],
      "language": ["Cantonese", "English"],
      "fees": 1230,
      "rating": 4.4,
      "reviews": 52,
      "facilities": ["N class (2-3 years): Non-profit whole-day pre-primary education", "Holistic child development through stimulating curriculum", "Founded 1996", "NTWJWA operated", "Serves over 700 children aged 2-6", "Integrated programme", "Registration fee $1,500", "Mon-Fri: 8:00am-6:00pm"],
      "description": "N class (2-3 years): Non-profit whole-day pre-primary education, holistic child development through stimulating curriculum. Founded 1996, serves over 700 children aged 2-6."
    },
    {
      "id": 172,
      "name_en": "New Territories Women & Juveniles Welfare Association Sheung Shui Nursery School",
      "name_zh": "新界婦孺福利會上水幼兒學校",
      "district": "North",
      "address": "5/F, North District Community Centre, 2 Lung Wan Street, Sheung Shui, New Territories",
      "address_zh": "新界上水龍運街2號北區社區會堂5樓",
      "phone": "2672-5710",
      "email": "ss@ntwjwassns.edu.hk",
      "website": "ntwjwassns.edu.hk",
      "type": "Pre-nursery",
      "age_range": "2-6 years",
      "session_types": ["Whole-day"],
      "language": ["Cantonese", "English"],
      "fees": 1230,
      "rating": 4.3,
      "reviews": 48,
      "facilities": ["N class (2-3 years): Whole-day nursery program", "Quality pre-school education developing intellectual, physical, language, social, emotional abilities", "Founded 1965", "Integrated programme", "School social worker", "Speech therapy", "Occasional child care services", "N (Whole-day): $815/month school fee + $415/month meal charge = $1,230/month total (after government subsidy)"],
      "description": "N class (2-3 years): Whole-day nursery program, quality pre-school education developing intellectual, physical, language, social, emotional abilities. Founded 1965, integrated programme."
    },
    {
      "id": 173,
      "name_en": "Caritas Nursery School - Ta Kwu Ling",
      "name_zh": "明愛打鼓嶺幼兒學校",
      "district": "North",
      "address": "G/F, Caritas Ta Kwu Ling Centre, Ping Che Road, Ta Kwu Ling, Fanling, New Territories",
      "address_zh": "新界粉嶺打鼓嶺坪輋路明愛打鼓嶺中心地下",
      "phone": "2674-3207",
      "email": "cctkl@caritassws.org.hk",
      "website": "tklns.caritas.org.hk",
      "type": "Pre-nursery",
      "age_range": "2-6 years",
      "session_types": ["Whole-day"],
      "language": ["Cantonese", "English"],
      "fees": 2509,
      "rating": 4.5,
      "reviews": 56,
      "facilities": ["N class (2-3 years): Catholic education emphasizing 5 Core Values: Truth, Justice, Love, Life, Family", "Enquiry, expressive, exploratory, experiential learning", "Founded 1967", "1:6.4 teacher ratio", "121 capacity", "5 classrooms", "Outdoor/indoor playgrounds", "Principal: Mr Wong Ansen", "Supervisor: Madam Leung Chi Kin Gloria"],
      "description": "N class (2-3 years): Catholic education emphasizing 5 Core Values: Truth, Justice, Love, Life, Family. Enquiry, expressive, exploratory, experiential learning. Founded 1967."
    },
    {
      "id": 174,
      "name_en": "The Fanling Assemblies of God Kindergarten",
      "name_zh": "粉嶺神召會幼稚園",
      "district": "North",
      "address": "301 Jockey Club Road, Fanling, New Territories",
      "address_zh": "新界粉嶺馬會道301號",
      "phone": "2669-8202",
      "email": "office@aogkg.edu.hk",
      "website": "aogkg.edu.hk",
      "type": "Pre-nursery",
      "age_range": "3-6 years",
      "session_types": ["Half-day AM", "Half-day PM", "Whole-day"],
      "language": ["English", "Cantonese"],
      "fees": 3800,
      "rating": 4.2,
      "reviews": 42,
      "facilities": ["Christian-based kindergarten education for children aged 2-6 years", "Curriculum designed for social, physical, spiritual skills development", "Founded 1962", "616 capacity", "9 classrooms", "28 teaching staff", "1:9.6 teacher ratio", "100% degree holders", "Principal: Ms Wan Man Ling", "Contact: Vice Principal Ms. Hung for enquiries"],
      "description": "Christian-based kindergarten education for children aged 2-6 years, curriculum designed for social, physical, spiritual skills development. Founded 1962, 616 capacity."
    },
    {
      "id": 175,
      "name_en": "Gloria Creative Kindergarten / International Nursery (Sheung Shui Campus)",
      "name_zh": "耀基創藝幼稚園/國際幼兒園（上水校園）",
      "district": "North",
      "address": "Unit 23-24, G/F Commercial Complex, contact school for exact address",
      "address_zh": "地下商業綜合大樓23-24號單位，聯絡學校查詢確實地址",
      "phone": "Contact for details",
      "email": "info@gciedu.hk",
      "website": "gciedu.hk",
      "type": "Pre-nursery",
      "age_range": "2-6 years",
      "session_types": ["Half-day AM", "Whole-day"],
      "language": ["English", "Cantonese"],
      "fees": 3200,
      "rating": 4.3,
      "reviews": 38,
      "facilities": ["PN (Pre-Nursery N1): 2-3 years", "Christian-based education with Happy Learning, Meaningful Learning, Creative Learning, Effective Learning philosophy", "Bilingual education", "Parent education seminars", "Experiential learning activities", "Parent-child activity days", "PN (N1): AM Class 9:00am-11:45am, Whole day class 9:00am-4:30pm"],
      "description": "PN (Pre-Nursery N1): 2-3 years, Christian-based education with Happy Learning, Meaningful Learning, Creative Learning, Effective Learning philosophy."
    },
    {
      "id": 176,
      "name_en": "Gloria Creative Kindergarten / International Nursery (Fanling Campus)",
      "name_zh": "耀基創藝幼稚園/國際幼兒園（粉嶺校園）",
      "district": "North",
      "address": "Contact school for Fanling campus address",
      "address_zh": "聯絡學校查詢粉嶺校園地址",
      "phone": "Contact for details",
      "email": "info@gciedu.hk",
      "website": "gciedu.hk",
      "type": "Pre-nursery",
      "age_range": "2-6 years",
      "session_types": ["Half-day AM", "Whole-day"],
      "language": ["English", "Cantonese"],
      "fees": 3200,
      "rating": 4.3,
      "reviews": 38,
      "facilities": ["PN (Pre-Nursery N1): 2-3 years", "Christian-based early childhood education with artistic and creative expression focus", "Happy Learning philosophy", "Experiential learning activities outside classroom", "Child flag-guards activities", "PN (N1): AM Class 9:00am-11:45am, Whole day class 9:00am-4:30pm"],
      "description": "PN (Pre-Nursery N1): 2-3 years, Christian-based early childhood education with artistic and creative expression focus."
    },
    {
      "id": 177,
      "name_en": "MAGART International Kindergarten (Fanling Campus)",
      "name_zh": "瑪歌瑞特國際幼稚園（粉嶺校園）",
      "district": "North",
      "address": "G/F, Sites A & B, Phase 1, Central Plaza, 9 Fanling Station Road, Fanling, New Territories",
      "address_zh": "新界粉嶺火車站路9號中心廣場第1期A及B座地下",
      "phone": "2677-8109",
      "email": "info@magartedu.com",
      "website": "magartedu.com",
      "type": "Pre-nursery",
      "age_range": "2-6 years",
      "session_types": ["Half-day AM", "Half-day PM", "Whole-day"],
      "language": ["English", "Cantonese"],
      "fees": 4500,
      "rating": 4.5,
      "reviews": 45,
      "facilities": ["International kindergarten programs with potential Pre-Nursery services for 2-3 years", "EYFS curriculum", "Inquiry-based approach", "Over 50,000 sq.ft campus", "Outdoor learning area", "International curriculum", "Native teachers", "Close to Fanling MTR Station Exit A"],
      "description": "International kindergarten programs with potential Pre-Nursery services for 2-3 years, EYFS curriculum, inquiry-based approach. Over 50,000 sq.ft campus."
    },
    {
      "id": 178,
      "name_en": "Fanling Baptist Church Lui Ming Choi Kindergarten",
      "name_zh": "粉嶺浸信會呂明才幼稚園",
      "district": "North",
      "address": "Contact school for exact address in Fanling",
      "address_zh": "聯絡學校查詢粉嶺確實地址",
      "phone": "Contact for details",
      "email": "info@fbc.edu.hk",
      "website": "fbc.edu.hk",
      "type": "Pre-nursery",
      "age_range": "2-6 years",
      "session_types": ["Half-day AM", "Half-day PM", "Whole-day"],
      "language": ["English", "Cantonese"],
      "fees": 3500,
      "rating": 4.2,
      "reviews": 35,
      "facilities": ["Pre-Nursery programs for 2-3 years", "Baptist church-based education with comprehensive educational system", "Strong foundation of faith in daily learning routine", "Individualized teaching methods", "Library and computer labs", "Regular parent-teacher communication", "Workshops", "Parental involvement emphasis"],
      "description": "Pre-Nursery programs for 2-3 years, Baptist church-based education with comprehensive educational system. Strong foundation of faith in daily learning routine."
    },
    {
      "id": 179,
      "name_en": "Yan Chai Hospital Wing Lung Kindergarten",
      "name_zh": "仁濟醫院永隆幼稚園",
      "district": "North",
      "address": "Contact school for exact address in North District",
      "address_zh": "聯絡學校查詢北區確實地址",
      "phone": "Contact for details",
      "email": "info@ychwl.org.hk",
      "website": "ychwl.org.hk",
      "type": "Pre-nursery",
      "age_range": "2-6 years",
      "session_types": ["Half-day AM", "Half-day PM", "Whole-day"],
      "language": ["Cantonese", "English"],
      "fees": 2800,
      "rating": 4.1,
      "reviews": 32,
      "facilities": ["Kindergarten programs with potential Pre-Nursery services", "Comprehensive early childhood education approach", "Yan Chai Hospital operated", "Established community services", "Participates in rehabilitation and support services"],
      "description": "Kindergarten programs with potential Pre-Nursery services, comprehensive early childhood education approach. Yan Chai Hospital operated."
    },
    {
      "id": 180,
      "name_en": "Sheung Shui Church Kindergarten",
      "name_zh": "上水堂幼稚園",
      "district": "North",
      "address": "Contact school for exact address in Sheung Shui",
      "address_zh": "聯絡學校查詢上水確實地址",
      "phone": "Contact for details",
      "email": "info@ssck.edu.hk",
      "website": "ssck.edu.hk",
      "type": "Pre-nursery",
      "age_range": "2-6 years",
      "session_types": ["Half-day AM", "Half-day PM", "Whole-day"],
      "language": ["Cantonese", "English"],
      "fees": 3000,
      "rating": 4.0,
      "reviews": 28,
      "facilities": ["Church-based kindergarten programs", "Loving and supportive learning environment", "Character development focus", "Each child is unique, capable, and creative in their own unique manner", "Values such as love, kindness, respect, responsibility", "Child-friendly classrooms"],
      "description": "Church-based kindergarten programs, loving and supportive learning environment, character development focus. Each child is unique, capable, and creative."
    },
    {
      "id": 181,
      "name_en": "Fung Kai Kindergarten",
      "name_zh": "鳳溪幼稚園",
      "district": "North",
      "address": "No. 21 Jockey Club Road, Sheung Shui, New Territories",
      "address_zh": "新界上水馬會道21號",
      "phone": "Contact for details",
      "email": "info@fungkai.edu.hk",
      "website": "fungkai.edu.hk",
      "type": "Pre-nursery",
      "age_range": "2-6 years",
      "session_types": ["Half-day AM", "Half-day PM", "Whole-day"],
      "language": ["Cantonese", "English"],
      "fees": 2800,
      "rating": 4.1,
      "reviews": 30,
      "facilities": ["Kindergarten programs with potential Pre-Nursery services", "Participates in StartSmart@school.hk Campaign", "Established kindergarten in Sheung Shui area", "Participates in government education campaigns"],
      "description": "Kindergarten programs with potential Pre-Nursery services, participates in StartSmart@school.hk Campaign. Established kindergarten in Sheung Shui area."
    },
    {
      "id": 182,
      "name_en": "Galilee International Kindergarten",
      "name_zh": "加利利國際幼稚園",
      "district": "North",
      "address": "G/F, contact school for exact address",
      "address_zh": "地下，聯絡學校查詢確實地址",
      "phone": "Contact for details",
      "email": "info@galilee.edu.hk",
      "website": "galilee.edu.hk",
      "type": "Pre-nursery",
      "age_range": "2-6 years",
      "session_types": ["Half-day AM", "Half-day PM", "Whole-day"],
      "language": ["English", "Cantonese"],
      "fees": 4200,
      "rating": 4.3,
      "reviews": 35,
      "facilities": ["International kindergarten programs with potential Pre-Nursery services", "Participates in StartSmart@school.hk Campaign", "International curriculum approach", "Government campaign participant"],
      "description": "International kindergarten programs with potential Pre-Nursery services, participates in StartSmart@school.hk Campaign. International curriculum approach."
    },
    {
      "id": 183,
      "name_en": "ESF Pre-Kindergarten Programs (Potential North District Service)",
      "name_zh": "ESF學前幼稚園課程（潛在北區服務）",
      "district": "North",
      "address": "Main centers: Wan Chai, Tung Chung (contact for North District programs)",
      "address_zh": "主要中心：灣仔、東涌（聯絡查詢北區課程）",
      "phone": "Contact for details",
      "email": "info@esf.edu.hk",
      "website": "join-us.esf.edu.hk/ages/2-3-yo",
      "type": "Pre-nursery",
      "age_range": "2-3 years",
      "session_types": ["Half-day AM", "Half-day PM", "Whole-day"],
      "language": ["English"],
      "fees": 4500,
      "rating": 4.6,
      "reviews": 42,
      "facilities": ["ESF Pre-Kindergarten for ages 2-3 following EYFS framework", "Play-based inquiry approach", "Preparation for ESF pathway", "ESF network access", "International curriculum", "Seamless pathway to ESF primary and secondary schools"],
      "description": "ESF Pre-Kindergarten for ages 2-3 following EYFS framework, play-based inquiry approach, preparation for ESF pathway. ESF network access."
    },
    // SAI KUNG DISTRICT - PLAYGROUPS
    {
      "id": 184,
      "name_en": "Guidepost Montessori (Clearwater Bay) - Montessori Together",
      "name_zh": "Guidepost蒙特梭利（清水灣）- 蒙特梭利親子課程",
      "district": "Sai Kung",
      "address": "Level 7, Silverstrand Mart, Clear Water Bay Road, Clear Water Bay, Sai Kung",
      "address_zh": "西貢清水灣清水灣道銀線灣廣場7樓",
      "phone": "2185 6135",
      "email": "clearwaterbay@guidepostmontessori.com",
      "website": "guidepost.hk/locations/clearwater-bay",
      "type": "Playgroup",
      "age_range": "0-18 months (Montessori Together), 1.5-2.5 years (Transitional Toddler)",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English", "Mandarin"],
      "fees": 5800,
      "rating": 4.7,
      "reviews": 38,
      "facilities": ["4 classrooms", "Beautiful panoramic views of Silverstrand Bay", "Montessori materials", "Dual-language environment", "Trial available"],
      "description": "Montessori-inspired playgroup with accompanied sessions for children up to 18 months. Children freely explore prepared environment and engage with curated Montessori materials."
    },
    {
      "id": 185,
      "name_en": "Guidepost Montessori (Sai Kung) - Montessori Together",
      "name_zh": "Guidepost蒙特梭利（西貢）- 蒙特梭利親子課程",
      "district": "Sai Kung",
      "address": "Shop D, G/F, Marina Cove Shopping Centre, Sai Kung",
      "address_zh": "西貢海濤灣商場地下D舖",
      "phone": "2813 0290",
      "email": "saikung@guidepostmontessori.com",
      "website": "guidepost.hk/locations/sai-kung",
      "type": "Playgroup",
      "age_range": "0-18 months (Montessori Together), 1-2 years (Nido), 1.5-2.5 years (Transitional Toddler)",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English", "Mandarin"],
      "fees": 5800,
      "rating": 4.6,
      "reviews": 32,
      "facilities": ["Spacious classrooms with natural light", "Private indoor and outdoor play spaces", "Marina Cove location", "Montessori materials"],
      "description": "Montessori Together for accompanied playgroup sessions, Nido for unaccompanied sessions meeting developmental needs with care."
    },
    {
      "id": 186,
      "name_en": "Child Psychological Development Association (CPDA) - Tseung Kwan O Center",
      "name_zh": "嬰幼兒心理發展協會 - 將軍澳分會",
      "district": "Sai Kung",
      "address": "Flat 10, The Papillons, 21 Tong Chun Street, Tseung Kwan O",
      "address_zh": "將軍澳唐俊街21號翩滙坊地庫10號（海港酒家側）",
      "phone": "2325 8228",
      "email": "info-tko@cpda.com.hk",
      "website": "cpda.com.hk",
      "type": "Playgroup",
      "age_range": "6-9 months, 9-12 months, 12-15 months, 15-18 months, 18-24 months",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["Cantonese", "English"],
      "fees": 3000,
      "rating": 4.5,
      "reviews": 45,
      "facilities": ["Professional psychologists", "Qualified teachers", "Sensory integration tools", "Motor skills equipment", "Certificate for 80%+ attendance"],
      "description": "Infant Development Playgroup with 10 lessons (1 lesson/week, 1 hour). Activities based on psychological development needs, sensory integration, and motor skills."
    },
    {
      "id": 187,
      "name_en": "Stage Right Youth Theatre - Teddy Bear Tea Club",
      "name_zh": "Stage Right青年劇場 - 泰迪熊茶話會",
      "district": "Sai Kung",
      "address": "1/F, 70 Po Tung Road, Sai Kung",
      "address_zh": "西貢普通道70號1樓",
      "phone": "9225 8924",
      "email": "info@stagerighthk.com",
      "website": "stagerighthk.com/playgroups",
      "type": "Playgroup",
      "age_range": "6 months to 3 years (Walkers: 12+ months, Jumpers: 2+ years)",
      "session_types": ["Half-day AM"],
      "language": ["English"],
      "fees": 2120,
      "rating": 4.4,
      "reviews": 28,
      "facilities": ["Parent coffee area", "Experienced leaders", "Studio rental available", "Creative play materials"],
      "description": "Sensory play, art activities, creative play, dress-up, enhancing 5 areas of development: physical, cognitive, emotional, social, language."
    },
    {
      "id": 188,
      "name_en": "Sai Kung English - Baby Playgroup",
      "name_zh": "西貢英語 - 嬰兒遊戲小組",
      "district": "Sai Kung",
      "address": "Sai Kung town center (contact for exact address)",
      "address_zh": "西貢市中心（聯絡查詢確實地址）",
      "phone": "Contact for details",
      "email": "info@saikungenglish.com",
      "website": "saikungenglish.com/private-lessons-copy",
      "type": "Playgroup",
      "age_range": "Under 3 years old",
      "session_types": ["Half-day PM"],
      "language": ["English"],
      "fees": 1800,
      "rating": 4.3,
      "reviews": 22,
      "facilities": ["Free trial class available", "English learning focus", "Small group setting", "Sensory and messy activities"],
      "description": "Play, sensory and messy activities, songs and movement, perfect for babies to make new friends while exploring activities."
    },
    {
      "id": 189,
      "name_en": "Hong Kong Academy - Playgroup",
      "name_zh": "香港學堂 - 遊戲小組",
      "district": "Sai Kung",
      "address": "33 Wai Man Road, Sai Kung, New Territories",
      "address_zh": "新界西貢惠民路33號",
      "phone": "2655 1111",
      "email": "admissions@hkacademy.edu.hk",
      "website": "hkacademy.edu.hk/playgroup",
      "type": "Playgroup",
      "age_range": "24+ months with accompanying adult, 30+ months unaccompanied (if toilet trained)",
      "session_types": ["Half-day AM", "Half-day PM", "Whole-day"],
      "language": ["English", "Mandarin"],
      "fees": 6500,
      "rating": 4.8,
      "reviews": 52,
      "facilities": ["Non-profit international IB World School", "Spacious classroom opening to outdoor playscape", "Organic garden", "Library", "PE", "Music", "Visual Arts", "Mandarin specialist classes"],
      "description": "Indoor play: art, story time, building blocks, sensory play. Outdoor play: nature exploration, sand/water/mud play, climbing, gardening."
    },
    {
      "id": 190,
      "name_en": "Sai Kung Montessori School",
      "name_zh": "西貢蒙特梭利學校",
      "district": "Sai Kung",
      "address": "Sai Kung town",
      "address_zh": "西貢市",
      "phone": "5369 8587",
      "email": "info@saikungmontessori.com",
      "website": "saikungmontessori.com",
      "type": "Playgroup",
      "age_range": "Contact for programs (may offer infant/toddler programs)",
      "session_types": ["Half-day AM", "Half-day PM", "Whole-day"],
      "language": ["English", "Mandarin"],
      "fees": 4800,
      "rating": 4.5,
      "reviews": 35,
      "facilities": ["Founded 2016", "Full-day and half-day options", "Special parks for younger kids", "Montessori methodology"],
      "description": "Montessori methodology, child-centered approach promoting independence and love of learning, environment tailored for child-centric education."
    },
    {
      "id": 191,
      "name_en": "SKIP - Sai Kung Pre-school International Kindergarten - Playgroups",
      "name_zh": "SKIP - 西貢學前國際幼稚園 - 遊戲小組",
      "district": "Sai Kung",
      "address": "Contact school for exact address in Sai Kung",
      "address_zh": "聯絡學校查詢西貢確實地址",
      "phone": "Contact for details",
      "email": "info@skip.edu.hk",
      "website": "skip.edu.hk/classes/playgroups",
      "type": "Playgroup",
      "age_range": "Accompanied playgroup classes (contact for specific ages)",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English"],
      "fees": 4200,
      "rating": 4.4,
      "reviews": 28,
      "facilities": ["International kindergarten with playgroup programs", "Family-friendly approach", "Experienced playgroup leaders"],
      "description": "Relaxed and friendly play sessions for children and their special adults, run by experienced playgroup leaders."
    },
    {
      "id": 192,
      "name_en": "Forest House Waldorf School - Parent & Baby Programs",
      "name_zh": "森林小屋華德福學校 - 親子嬰兒課程",
      "district": "Sai Kung",
      "address": "No. 200 Hang Hau Village, Tseung Kwan O, New Territories (Secondary Campus)",
      "address_zh": "新界將軍澳坑口村200號（中學校園）",
      "phone": "2792 6055",
      "email": "info@foresthouse.edu.hk",
      "website": "Contact for information",
      "type": "Playgroup",
      "age_range": "Parent & baby: 2-12 months, Parent & child: 1-2.5 years",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English", "Cantonese"],
      "fees": 3800,
      "rating": 4.6,
      "reviews": 42,
      "facilities": ["First Waldorf primary school in Hong Kong", "Over 10,000 sq ft facilities", "Outdoor play equipment", "Garden with pets/herbs/flowers", "Natural and warm environment"],
      "description": "Waldorf curriculum approach, Anthroposophic education, respect for local culture, natural and warm environment."
    },
    {
      "id": 193,
      "name_en": "Yew Chung International School (YCIS) - Infant and Toddler Learning Programme (ITLP)",
      "name_zh": "耀中國際學校 - 嬰幼兒學習課程",
      "district": "Sai Kung",
      "address": "YCIS Tseung Kwan O Campus (contact for exact address)",
      "address_zh": "耀中將軍澳校園（聯絡查詢確實地址）",
      "phone": "Contact for details",
      "email": "info@ycis.edu.hk",
      "website": "Contact for information",
      "type": "Playgroup",
      "age_range": "6 months to 2 years",
      "session_types": ["Half-day AM", "Half-day PM", "Whole-day"],
      "language": ["English", "Mandarin"],
      "fees": 7200,
      "rating": 4.7,
      "reviews": 48,
      "facilities": ["Founded 1986 ITLP program", "Caregiver Connection Programme", "20% Founding Discount available", "Book clubs", "Workshops by early childhood experts"],
      "description": "Child-centered emergent model, rich bilingual environments (English/Chinese), co-teaching model, intentional play-based learning."
    },
    // SAI KUNG DISTRICT - PRE-NURSERY PROGRAMS
    {
      "id": 194,
      "name_en": "Guidepost Montessori (Clearwater Bay) - Toddler Program",
      "name_zh": "Guidepost蒙特梭利（清水灣）- 幼兒課程",
      "district": "Sai Kung",
      "address": "Level 7, Silverstrand Mart, Clear Water Bay Road, Clear Water Bay, Sai Kung",
      "address_zh": "西貢清水灣清水灣道銀線灣廣場7樓",
      "phone": "2185 6135",
      "email": "clearwaterbay@guidepostmontessori.com",
      "website": "guidepost.hk/locations/clearwater-bay",
      "type": "Pre-nursery",
      "age_range": "2-3 years (Toddler), 3-6 years (Children's House)",
      "session_types": ["Half-day AM", "Half-day PM", "Whole-day"],
      "language": ["English", "Mandarin"],
      "fees": 6800,
      "rating": 4.8,
      "reviews": 45,
      "facilities": ["Beautiful panoramic views of Silverstrand Bay", "4 classrooms", "Trial available", "Dual-language environment", "Safe and engaging space"],
      "description": "Unaccompanied program where toddlers internalize just how capable they are, building self-confidence through authentic Montessori approach."
    },
    {
      "id": 195,
      "name_en": "Guidepost Montessori (Sai Kung) - Toddler Program",
      "name_zh": "Guidepost蒙特梭利（西貢）- 幼兒課程",
      "district": "Sai Kung",
      "address": "Shop D, G/F, Marina Cove Shopping Centre, Sai Kung",
      "address_zh": "西貢海濤灣商場地下D舖",
      "phone": "2813 0290",
      "email": "saikung@guidepostmontessori.com",
      "website": "guidepost.hk/locations/sai-kung",
      "type": "Pre-nursery",
      "age_range": "2-3 years (Toddler), 3-6 years (Children's House)",
      "session_types": ["Half-day AM", "Half-day PM", "Whole-day"],
      "language": ["English", "Mandarin"],
      "fees": 6800,
      "rating": 4.7,
      "reviews": 38,
      "facilities": ["Marina Cove location", "Spacious classrooms with natural light", "Private indoor and outdoor play spaces", "Montessori materials"],
      "description": "Unaccompanied program where toddlers build self-confidence, independence, and love of learning through Montessori materials."
    },
    {
      "id": 196,
      "name_en": "BGCAHK Cheerland Kindergarten (Tseung Kwan O)",
      "name_zh": "香港小童群益會樂緻幼稚園（將軍澳）",
      "district": "Sai Kung",
      "address": "G/F, Tong Wong House, Tong Ming Court, Tseung Kwan O, New Territories",
      "address_zh": "新界將軍澳唐明苑唐煌閣地下",
      "phone": "2177 4831",
      "email": "nursery@bgca.org.hk",
      "website": "nursery.bgca.org.hk",
      "type": "Pre-nursery",
      "age_range": "2-3 years (Pre-Nursery), 3-6 years (K1-K3)",
      "session_types": ["Half-day AM", "Half-day PM", "Whole-day"],
      "language": ["Cantonese", "English"],
      "fees": 30744,
      "rating": 4.5,
      "reviews": 52,
      "facilities": ["Founded 1999", "1:8.1 teacher ratio", "Indoor playground", "Music room", "35 students aged 2-3"],
      "description": "Whole-day pre-school education services, curriculum based on multiple intelligence theory, theme and activity teaching method."
    },
    {
      "id": 197,
      "name_en": "Hong Kong Sheng Kung Hui St Simon's Sai Kung Nursery School",
      "name_zh": "香港聖公會聖西門西貢幼兒學校",
      "district": "Sai Kung",
      "address": "DD215, Tan Cheung Village, Sai Kung, New Territories",
      "address_zh": "新界西貢頓場村DD215地段",
      "phone": "2792 0047",
      "email": "sssk@skhwc.org.hk",
      "website": "sssk.edu.hk",
      "type": "Pre-nursery",
      "age_range": "2-3 years (Pre-Nursery), 3-6 years (K1-K3)",
      "session_types": ["Half-day AM", "Half-day PM", "Whole-day"],
      "language": ["Cantonese", "English"],
      "fees": 51696,
      "rating": 4.6,
      "reviews": 48,
      "facilities": ["Founded 1994", "1:7.6 teacher ratio", "Outdoor playground", "4 registered classrooms", "7 students aged 2-3"],
      "description": "Christian-based education following Anglican spirit, safe and inspiring learning environment fostering balanced development."
    },
    {
      "id": 198,
      "name_en": "Pentecostal Church of Hong Kong Tseung Kwan O Nursery School",
      "name_zh": "竹園區神召會將軍澳康樂幼兒學校",
      "district": "Sai Kung",
      "address": "4/F, Podium, Wing B & C, Sheung Shun House, Sheung Tak Estate, Tseung Kwan O, New Territories",
      "address_zh": "新界將軍澳尚德邨尚信樓4樓平台B及C翼",
      "phone": "2178 4472",
      "email": "tseung.kwan.o.ns@pchk.org.hk",
      "website": "tseungkwanons.pchk.org.hk",
      "type": "Pre-nursery",
      "age_range": "2-3 years (Pre-Nursery), 3-6 years (K1-K3)",
      "session_types": ["Half-day AM", "Half-day PM", "Whole-day"],
      "language": ["Cantonese", "English"],
      "fees": 4200,
      "rating": 4.4,
      "reviews": 35,
      "facilities": ["Pentecostal Church operated", "Participates in On-site Pre-school Rehabilitation Services", "Christian values integration"],
      "description": "Pentecostal church-based education, whole-day and half-day services, Christian values integration."
    },
    {
      "id": 199,
      "name_en": "Hong Kong Academy - Playgroup (Transitioning to Pre-Nursery)",
      "name_zh": "香港學堂 - 遊戲小組（過渡至學前班）",
      "district": "Sai Kung",
      "address": "33 Wai Man Road, Sai Kung, New Territories",
      "address_zh": "新界西貢惠民路33號",
      "phone": "2655 1111",
      "email": "admissions@hkacademy.edu.hk",
      "website": "hkacademy.edu.hk",
      "type": "Pre-nursery",
      "age_range": "24+ months with adult, 30+ months unaccompanied, Pre-K programs available",
      "session_types": ["Half-day AM", "Half-day PM", "Whole-day"],
      "language": ["English", "Mandarin"],
      "fees": 7500,
      "rating": 4.8,
      "reviews": 55,
      "facilities": ["Non-profit international IB World School", "Spacious classroom opening to outdoor playscape", "Organic garden", "Specialist classes in Library, PE, Music, Visual Arts, Mandarin"],
      "description": "Playgroup transitioning to Pre-K programs for 2-3 years, indoor/outdoor play, specialist classes."
    },
    {
      "id": 200,
      "name_en": "Sun Island English Kindergarten (Sai Kung Branch)",
      "name_zh": "太陽島英文幼稚園（西貢分校）",
      "district": "Sai Kung",
      "address": "Contact school for Sai Kung branch address",
      "address_zh": "聯絡學校查詢西貢分校地址",
      "phone": "Contact for details",
      "email": "info@sunisland.edu.hk",
      "website": "sunisland.edu.hk/branches/sai-kung-branch",
      "type": "Pre-nursery",
      "age_range": "2+ years (Pre-Nursery Class), 3-6 years (K1-K3)",
      "session_types": ["Half-day AM", "Half-day PM", "Whole-day"],
      "language": ["English", "Cantonese"],
      "fees": 4800,
      "rating": 4.5,
      "reviews": 42,
      "facilities": ["English kindergarten with bilingual approach", "Established Sun Island education group", "Whole day and half day options"],
      "description": "Pre-Nursery Class with 2 years minimum admission age, bilingual programs, whole day and half day options."
    },
    {
      "id": 201,
      "name_en": "Yew Chung International School (YCIS) - Two's Programme",
      "name_zh": "耀中國際學校 - 兩歲課程",
      "district": "Sai Kung",
      "address": "YCIS Tseung Kwan O Campus (contact for exact address)",
      "address_zh": "耀中將軍澳校園（聯絡查詢確實地址）",
      "phone": "Contact for details",
      "email": "info@ycis.edu.hk",
      "website": "Contact for information",
      "type": "Pre-nursery",
      "age_range": "2-3 years (Two's Programme), 3-5 years (Three's and Four's)",
      "session_types": ["Half-day AM", "Half-day PM", "Whole-day"],
      "language": ["English", "Mandarin"],
      "fees": 8500,
      "rating": 4.7,
      "reviews": 48,
      "facilities": ["20% Founding Discount on monthly fees at TKO campus", "Caregiver Connection Programme", "Workshops by early childhood experts"],
      "description": "Child-centered emergent model, rich bilingual environments (English/Chinese), co-teaching model, intentional play-based learning."
    },
    {
      "id": 202,
      "name_en": "Forest House Waldorf School - Nursery Programme",
      "name_zh": "森林小屋華德福學校 - 幼兒課程",
      "district": "Sai Kung",
      "address": "No. 200 Hang Hau Village, Tseung Kwan O, New Territories (Secondary Campus)",
      "address_zh": "新界將軍澳坑口村200號（中學校園）",
      "phone": "2792 6055",
      "email": "info@foresthouse.edu.hk",
      "website": "Contact for information",
      "type": "Pre-nursery",
      "age_range": "2-3 years (Nursery), 3-6 years (Kindergarten)",
      "session_types": ["Half-day AM", "Half-day PM", "Whole-day"],
      "language": ["English", "Cantonese"],
      "fees": 5200,
      "rating": 4.6,
      "reviews": 45,
      "facilities": ["First Waldorf primary school in Hong Kong", "Over 10,000 sq ft facilities", "Garden with pets/herbs/flowers", "Natural and warm environment"],
      "description": "Waldorf curriculum approach, Anthroposophic education, natural and warm environment, rhythm-based daily activities."
    },
    {
      "id": 203,
      "name_en": "Nord Anglia International School Hong Kong - Early Years (Sai Kung Campus)",
      "name_zh": "香港諾德安達國際學校 - 幼兒部（西貢校園）",
      "district": "Sai Kung",
      "address": "285 Hong Kin Road, Tui Min Hoi, Sai Kung, New Territories",
      "address_zh": "新界西貢對面海康建路285號",
      "phone": "Contact for details",
      "email": "info@nais.hk",
      "website": "nordangliaeducation.com/nais-hong-kong/campuses/sai-kung-early-years-campus",
      "type": "Pre-nursery",
      "age_range": "2-6 years (Early Years, includes Pre-Nursery programmes)",
      "session_types": ["Half-day AM", "Half-day PM", "Whole-day"],
      "language": ["English", "Mandarin"],
      "fees": 12000,
      "rating": 4.8,
      "reviews": 58,
      "facilities": ["Dedicated Sai Kung Early Years Campus", "Nord Anglia global education network", "Premium international education", "British Early Years Foundation Stage (EYFS)"],
      "description": "Early Years programmes including Pre-Nursery, following British Early Years Foundation Stage (EYFS), inquiry-based learning."
    },
    {
      "id": 204,
      "name_en": "Leapfrog Kindergarten",
      "name_zh": "跳蛙幼稚園",
      "district": "Sai Kung",
      "address": "Sai Kung area (contact for exact address)",
      "address_zh": "西貢區（聯絡查詢確實地址）",
      "phone": "Contact for details",
      "email": "info@leapfrog.edu.hk",
      "website": "Contact for information",
      "type": "Pre-nursery",
      "age_range": "Contact for Pre-Nursery programs (may serve 2-3 years)",
      "session_types": ["Half-day AM", "Half-day PM", "Whole-day"],
      "language": ["English", "Cantonese"],
      "fees": 3800,
      "rating": 4.4,
      "reviews": 28,
      "facilities": ["Nature-based curriculum", "Located in beautiful Sai Kung area", "Focus on outdoor learning", "Hands-on play and exploration"],
      "description": "Nature-based early childhood education, hands-on play and exploration, development of social, emotional, and motor skills."
    },
    {
      "id": 205,
      "name_en": "Woodland Pre-Schools (formerly Woodland Sai Kung Pre-School)",
      "name_zh": "森林幼兒學校（前西貢森林幼兒學校）",
      "district": "Sai Kung",
      "address": "Marina Cove development, Sai Kung (contact for exact address)",
      "address_zh": "西貢海濤灣發展區（聯絡查詢確實地址）",
      "phone": "Contact for details",
      "email": "info@woodland.edu.hk",
      "website": "Contact for information",
      "type": "Pre-nursery",
      "age_range": "2+ years (Pre-Nursery), Nursery and Kindergarten programs",
      "session_types": ["Half-day AM", "Half-day PM", "Whole-day"],
      "language": ["English"],
      "fees": 6500,
      "rating": 4.6,
      "reviews": 42,
      "facilities": ["Spacious purpose-built environment", "High ceilings", "Natural light", "Indoor play area", "School bus services TKO, Sai Kung, Clearwater Bay areas"],
      "description": "Pre-Nursery programs for 2+ years, English international curriculum following EYFS, child-friendly environment."
    },
    {
      "id": 206,
      "name_en": "ESF Clearwater Bay School - Pre-Kindergarten Programmes (Potential)",
      "name_zh": "ESF清水灣學校 - 學前幼稚園課程（潛在）",
      "district": "Sai Kung",
      "address": "DD229 Lot 235, Clearwater Bay Road, Clearwater Bay, Sai Kung, New Territories",
      "address_zh": "新界西貢清水灣清水灣道DD229地段235號",
      "phone": "2358 5221",
      "email": "info@esf.edu.hk",
      "website": "join-us.esf.edu.hk/schools/esf-clearwater-bay-school",
      "type": "Pre-nursery",
      "age_range": "Contact for Pre-Kindergarten programs (may serve 2-3 years)",
      "session_types": ["Half-day AM", "Half-day PM", "Whole-day"],
      "language": ["English"],
      "fees": 5500,
      "rating": 4.7,
      "reviews": 45,
      "facilities": ["Established 1992", "Serves Sai Kung/Clearwater Bay/TKO communities", "Beautiful campus location", "ESF network with IB Primary Years Programme pathway"],
      "description": "Potential Pre-Kindergarten programmes, ESF network with IB Primary Years Programme pathway."
    },
    // SOUTHERN DISTRICT - PLAYGROUPS
    {
      "id": 207,
      "name_en": "Guidepost Montessori (Repulse Bay) - Montessori Together",
      "name_zh": "Guidepost蒙特梭利（淺水灣）- 蒙特梭利親子課程",
      "district": "Southern",
      "address": "2/F, 35 Beach Road, Repulse Bay, Hong Kong",
      "address_zh": "香港淺水灣海灘道35號2樓",
      "phone": "2812 0274",
      "email": "repulsebay@guidepostmontessori.com",
      "website": "guidepost.hk/locations/repulse-bay",
      "type": "Playgroup",
      "age_range": "0-18 months (Montessori Together), 1.5-2.5 years (Transitional Toddler)",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English", "Mandarin"],
      "fees": 6200,
      "rating": 4.8,
      "reviews": 42,
      "facilities": ["Amazing ocean views", "Located across from Repulse Bay Beach and The Pulse shopping center", "Trial available", "Convenient to Repulse Bay Beach and The Pulse"],
      "description": "Accompanied Montessori-inspired playgroup, freely explore prepared environment, engage with curated Montessori materials."
    },
    {
      "id": 208,
      "name_en": "My Gym Children's Fitness Centre (Wong Chuk Hang)",
      "name_zh": "My Gym兒童體適能中心（黃竹坑）",
      "district": "Southern",
      "address": "6/F, Marina 8, 8 Heung Yip Road, Wong Chuk Hang, Hong Kong",
      "address_zh": "香港黃竹坑香葉道8號海港8號6樓",
      "phone": "Contact for details",
      "email": "info@mygymhk.com",
      "website": "mygymhk.com",
      "type": "Playgroup",
      "age_range": "6-12 months (Tiny Tykes), 12-19 months (Waddlers)",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English"],
      "fees": 480,
      "rating": 4.6,
      "reviews": 38,
      "facilities": ["Nearly 3,000 sq ft gym floor", "Opposite Exit A Wong Chuk Hang MTR", "Award-winning program from California 1983", "High bar", "Monkey bars", "Rock climbing wall", "Zip line", "Trampoline", "Jumping equipment"],
      "description": "Tiny Tykes: Beginning stretches, exercises, infant songs, dances, balance and agility skills. Waddlers: Balancing, tumbling, hanging and agility exercises."
    },
    {
      "id": 209,
      "name_en": "Infants, Toddlers & Twos (ITT)",
      "name_zh": "嬰幼兒及兩歲幼兒(ITT)",
      "district": "Southern",
      "address": "Unit 1 & 2, G/F, Larvotto, 8 Ap Lei Chau Praya Road, Aberdeen, Hong Kong",
      "address_zh": "香港仔鴨脷洲海怡路8號海怡半島Larvotto地下1及2號單位",
      "phone": "2655 7100",
      "email": "info@itt.hk",
      "website": "itt.hk",
      "type": "Playgroup",
      "age_range": "6 months to 2+ years",
      "session_types": ["Half-day AM", "Half-day PM", "Whole-day"],
      "language": ["English", "Cantonese"],
      "fees": 3500,
      "rating": 4.5,
      "reviews": 32,
      "facilities": ["Located in Ap Lei Chau area", "Specialized in infants and toddlers development", "Purpose-built facility", "Ap Lei Chau area", "Accessible by bus services"],
      "description": "Nurturing, learning, fundamental development programs for infants, toddlers and twos. Focus on early childhood development, social interaction, motor skills."
    },
    {
      "id": 210,
      "name_en": "Child Psychological Development Association (CPDA) - Southern District Coverage",
      "name_zh": "嬰幼兒心理發展協會 - 南區服務",
      "district": "Southern",
      "address": "Contact CPDA for Southern District service areas",
      "address_zh": "聯絡嬰幼兒心理發展協會查詢南區服務範圍",
      "phone": "Contact for details",
      "email": "info@cpda.com.hk",
      "website": "cpda.com.hk",
      "type": "Playgroup",
      "age_range": "6-9 months, 9-12 months, 12-15 months, 15-18 months",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["Cantonese", "English"],
      "fees": 3200,
      "rating": 4.7,
      "reviews": 45,
      "facilities": ["Professional psychologists on staff", "Research-based programs", "Certificate and assessment for 80%+ attendance", "Contact to confirm specific Southern District center locations and availability"],
      "description": "Infant Development Playgroup: 10 lessons, 1 lesson/week (1 hour). Activities based on psychological development needs, sensory integration."
    },
    {
      "id": 211,
      "name_en": "Victoria Playpark - Holiday PlayTime Program",
      "name_zh": "Victoria Playpark - 假日遊樂時光課程",
      "district": "Southern",
      "address": "K11 MUSEA Centre, TST (serves families from all districts including Southern)",
      "address_zh": "尖沙咀K11 MUSEA中心（服務包括南區在內的各區家庭）",
      "phone": "2117 4218",
      "email": "enquiryhc@victoriaplaypark.com",
      "website": "victoriaplaypark.com",
      "type": "Playgroup",
      "age_range": "1-5 years (includes 12-18 months)",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English", "Mandarin", "Cantonese"],
      "fees": 180,
      "rating": 4.4,
      "reviews": 28,
      "facilities": ["One-teacher-one-language approach", "Themed activities", "No more than 9 children per class", "Sundays & public holidays sessions"],
      "description": "Holiday PlayTime: Themed activities for ages 1-5, 40-minute sessions on Sundays and public holidays. Trilingual environment (English, Putonghua, Cantonese)."
    },
    {
      "id": 212,
      "name_en": "ESF Language & Learning (Wan Chai) - Potential Southern District Service",
      "name_zh": "ESF語言及學習（灣仔）- 潛在南區服務",
      "district": "Southern",
      "address": "Main center: Wan Chai (may serve Southern District families)",
      "address_zh": "主要中心：灣仔（可能服務南區家庭）",
      "phone": "Contact for details",
      "email": "info@esfexplore.org.hk",
      "website": "esfexplore.org.hk",
      "type": "Playgroup",
      "age_range": "6-12 months (Level 1), 12-18 months (Level 2), 18-30 months (Level 3)",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English"],
      "fees": 4500,
      "rating": 4.6,
      "reviews": 42,
      "facilities": ["ESF network access", "EYFS curriculum", "Play-based inquiry learning", "Classes held every day of the week"],
      "description": "Progressive playgroups following EYFS framework: Level 1 (6-12m), Level 2 (12-18m). Stories, songs, hands-on sensory activities."
    },
    {
      "id": 213,
      "name_en": "Baumhaus Kindermusik (Wan Chai) - Southern District Accessible",
      "name_zh": "Baumhaus兒童音樂（灣仔）- 南區可達",
      "district": "Southern",
      "address": "1/F, Kar Yau Building, 36-44 Queen's Road East, Wan Chai (accessible to Southern District)",
      "address_zh": "灣仔皇后大道東36-44號嘉友大廈1樓（南區可達）",
      "phone": "2321 5898",
      "email": "info@baumhaus.com.hk",
      "website": "baumhaus.com.hk",
      "type": "Playgroup",
      "age_range": "Birth to 6 years (includes 6-18 months programs)",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English", "German"],
      "fees": 350,
      "rating": 4.5,
      "reviews": 35,
      "facilities": ["Beautiful birch treehouse centerpiece", "Café for parents", "Early childhood specialists", "Trial class $350 (includes free playroom access)"],
      "description": "Kindermusik classes for infants and toddlers, encouraging singing, movement, musical instruments, story listening. Develops musical, cognitive, and social skills."
    },
    {
      "id": 214,
      "name_en": "Casita (Sheung Wan) - Southern District Accessible",
      "name_zh": "Casita（上環）- 南區可達",
      "district": "Southern",
      "address": "2/F, Workington Tower, 78 Bonham Strand, Sheung Wan (accessible to Southern District)",
      "address_zh": "上環文咸東街78號華勝工業大廈2樓（南區可達）",
      "phone": "6291 0128",
      "email": "info@casita.com.hk",
      "website": "casita.com.hk",
      "type": "Playgroup",
      "age_range": "6 months to 5 years",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English", "Spanish"],
      "fees": 330,
      "rating": 4.4,
      "reviews": 32,
      "facilities": ["4 different age groups", "Teachers specialized in multi-disciplinary programs", "Mon-Sat: 9:30am-5:30pm", "Drop-in classes $330"],
      "description": "Dynamic multi-disciplinary activities including sensory exploration, games, story time, specialized programs for different age groups."
    },
    {
      "id": 215,
      "name_en": "Artsplus Playgroup Programs",
      "name_zh": "Artsplus遊戲小組課程",
      "district": "Southern",
      "address": "Contact Artsplus for location details",
      "address_zh": "聯絡Artsplus查詢地點詳情",
      "phone": "Contact for details",
      "email": "info@artsplus.com.hk",
      "website": "artsplus.com.hk",
      "type": "Playgroup",
      "age_range": "6+ months (Infant Class), 12+ months (Toddler Class)",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English"],
      "fees": 2800,
      "rating": 4.3,
      "reviews": 25,
      "facilities": ["Purpose-built facilities supporting physical and brain development", "Parent education sessions", "Exploratory play", "Sensory play", "Musical activities", "Art", "Language", "Movement activities"],
      "description": "Infant Class: Strengthen gross and fine motor skills, prepare for sitting, standing, walking. Toddler Class: Build motor skills and coordination."
    },
    {
      "id": 216,
      "name_en": "The Little Gym Hong Kong",
      "name_zh": "小體操館香港",
      "district": "Southern",
      "address": "Contact for Hong Kong location details",
      "address_zh": "聯絡查詢香港地點詳情",
      "phone": "2368 8777",
      "email": "tlghongkong@thelittlegym.com",
      "website": "thelittlegym.com/class-category/parent-child",
      "type": "Playgroup",
      "age_range": "4 months to 3 years",
      "session_types": ["Half-day AM", "Half-day PM"],
      "language": ["English"],
      "fees": 420,
      "rating": 4.5,
      "reviews": 38,
      "facilities": ["Promotes motor skills", "Balance", "Coordination in safe", "Fun environment", "Parent-child classes focusing on strengthening bonds", "Boosting development", "Creating social connections"],
      "description": "Parent-child classes focusing on strengthening bonds, boosting development, creating social connections. Activities include directive songs, basic tumbling, gymnastics skills."
    },
    // SOUTHERN DISTRICT - PRE-NURSERY PROGRAMS
    {
      "id": 217,
      "name_en": "Creative Kindergarten and Day Nursery (Sham Wan Towers)",
      "name_zh": "啟思幼稚園暨幼兒園（深灣軒）",
      "district": "Southern",
      "address": "G/F, Sham Wan Towers, 3 Ap Lei Chau Drive, Ap Lei Chau, Hong Kong",
      "address_zh": "香港鴨脷洲鴨脷洲橋道3號深灣軒地下",
      "phone": "2873 2128",
      "email": "swt@creative.edu.hk",
      "website": "swt.creative.edu.hk/en",
      "type": "Pre-nursery",
      "age_range": "2-3 years (Pre-Nursery N1), 3-6 years (K1-K3)",
      "session_types": ["Half-day AM", "Half-day PM", "Whole-day"],
      "language": ["Cantonese", "English"],
      "fees": 43800,
      "rating": 4.6,
      "reviews": 48,
      "facilities": ["Founded 2005", "Panoramic views of Aberdeen Marina Club", "Natural daylight throughout premises", "Half-day: FREE for KG Education Scheme holders", "Whole-day: KG holders $26,470/year"],
      "description": "High-quality preschool education through 6 learning areas: Physical Fitness & Health, Language, Early Childhood Mathematics, Nature & Living, Self & Society, Arts & Creativity."
    },
    {
      "id": 218,
      "name_en": "Guidepost Montessori (Repulse Bay) - Toddler Program",
      "name_zh": "Guidepost蒙特梭利（淺水灣）- 幼兒課程",
      "district": "Southern",
      "address": "2/F, 35 Beach Road, Repulse Bay, Hong Kong",
      "address_zh": "香港淺水灣海灘道35號2樓",
      "phone": "2812 0274",
      "email": "repulsebay@guidepostmontessori.com",
      "website": "guidepost.hk/locations/repulse-bay",
      "type": "Pre-nursery",
      "age_range": "2-3 years (Toddler), 3-6 years (Children's House)",
      "session_types": ["Half-day AM", "Half-day PM", "Whole-day"],
      "language": ["English", "Mandarin"],
      "fees": 7200,
      "rating": 4.8,
      "reviews": 45,
      "facilities": ["Amazing ocean views", "Located across from Repulse Bay Beach and The Pulse shopping center", "Trial available", "Unaccompanied program"],
      "description": "Unaccompanied program, safe and engaging space where toddlers build self-confidence through authentic Montessori approach."
    },
    {
      "id": 219,
      "name_en": "Italian International Nursery & Kindergarten",
      "name_zh": "意大利國際幼兒園及幼稚園",
      "district": "Southern",
      "address": "South Horizons, Ap Lei Chau, Hong Kong",
      "address_zh": "香港鴨脷洲海怡半島",
      "phone": "2662 3066",
      "email": "info@iikg.edu.hk",
      "website": "iikg.edu.hk",
      "type": "Pre-nursery",
      "age_range": "7-24 months (Nursery), 2-6 years (Pre-Nursery and Kindergarten)",
      "session_types": ["Half-day AM", "Half-day PM", "Whole-day"],
      "language": ["English", "Italian"],
      "fees": 8500,
      "rating": 4.7,
      "reviews": 52,
      "facilities": ["More than 10,000 sq ft premises", "Linear and winding waterfront design", "Premises purchased in 2019", "Up to 217 children according to Education Bureau licenses"],
      "description": "Pre-Nursery programs for 2+ years, Italian international curriculum, waterfront location with natural lighting."
    },
    {
      "id": 220,
      "name_en": "Lou Pichoun École Maternelle Internationale (Stanley Campus)",
      "name_zh": "Lou Pichoun國際法語幼稚園（赤柱校園）",
      "district": "Southern",
      "address": "Shop A & B, G/F, Realfound Mansion, 30A Stanley Main Street, Stanley",
      "address_zh": "赤柱大街30A號瑞豐大廈地下A及B舖",
      "phone": "Contact for details",
      "email": "info@loupichoun.com",
      "website": "loupichoun.com/en/our-campus",
      "type": "Pre-nursery",
      "age_range": "13 months to 6 years",
      "session_types": ["Half-day AM", "Half-day PM", "Whole-day"],
      "language": ["French", "English", "Mandarin"],
      "fees": 6800,
      "rating": 4.6,
      "reviews": 42,
      "facilities": ["French international curriculum", "Trilingual environment", "Safe neighbourhood with spacious outdoor play space", "EDB Registration: 612472"],
      "description": "French preschool programmes, playgroups and after-school activities in French, English and Mandarin for toddlers 13 months+."
    },
    {
      "id": 221,
      "name_en": "Christian & Missionary Alliance Lei Tung Nursery School",
      "name_zh": "基督教宣道會利東幼兒學校",
      "district": "Southern",
      "address": "G/F, 102-112, Tung Hing House, Lei Tung Estate, Ap Lei Chau, Hong Kong",
      "address_zh": "香港鴨脷洲利東邨東興樓地下102-112室",
      "phone": "Contact for details",
      "email": "info@cma.org.hk",
      "website": "Contact for information",
      "type": "Pre-nursery",
      "age_range": "2-3 years (Pre-Nursery), 3-6 years (K1-K3)",
      "session_types": ["Half-day AM", "Half-day PM", "Whole-day"],
      "language": ["Cantonese", "English"],
      "fees": 3800,
      "rating": 4.4,
      "reviews": 35,
      "facilities": ["C&MA operated", "Participates in Social Work Service for Pre-primary Institutions", "On-site Pre-school Rehabilitation Services", "Comprehensive early childhood education approach"],
      "description": "Pre-Nursery programs for 2-3 years, Christian & Missionary Alliance operated, comprehensive early childhood education approach."
    },
    {
      "id": 222,
      "name_en": "Christian & Missionary Alliance South Horizons Nursery School",
      "name_zh": "基督教宣道會海怡幼兒學校",
      "district": "Southern",
      "address": "Upper G/F, 29 Yi Nam Road, Phase IV, South Horizons, Ap Lei Chau, Hong Kong",
      "address_zh": "香港鴨脷洲怡南路海怡半島第4期29座高層地面",
      "phone": "Contact for details",
      "email": "info@cma.org.hk",
      "website": "Contact for information",
      "type": "Pre-nursery",
      "age_range": "2-3 years (Pre-Nursery), 3-6 years (K1-K3)",
      "session_types": ["Half-day AM", "Half-day PM", "Whole-day"],
      "language": ["Cantonese", "English"],
      "fees": 4200,
      "rating": 4.5,
      "reviews": 38,
      "facilities": ["C&MA operated", "South Horizons location", "Participates in rehabilitation and support services", "Holistic early childhood development"],
      "description": "Pre-Nursery programs for 2-3 years, Christian & Missionary Alliance operated, holistic early childhood development."
    },
    {
      "id": 223,
      "name_en": "St. Peter's Church Kindergarten (Stanley)",
      "name_zh": "聖公會聖彼得堂幼稚園（赤柱分校）",
      "district": "Southern",
      "address": "Shop 1, G/F, Kin Ma House, Ma Hang Estate, Stanley, Hong Kong",
      "address_zh": "香港赤柱馬坑邨健馬樓地下1號舖",
      "phone": "2813 6130",
      "email": "stpchs@biznetvigator.com",
      "website": "stpstkg.edu.hk",
      "type": "Pre-nursery",
      "age_range": "2-3 years (Child care services), 3-6 years (K1-K3)",
      "session_types": ["Half-day AM", "Half-day PM", "Whole-day"],
      "language": ["Cantonese", "English"],
      "fees": 42570,
      "rating": 4.6,
      "reviews": 45,
      "facilities": ["Founded 1994", "134 capacity", "Outdoor playground", "6 registered classrooms", "1:8.0 teacher ratio", "Anglican church-based education"],
      "description": "Child care services for children aged 2-3, Anglican church-based education, whole-day service."
    },
    {
      "id": 224,
      "name_en": "Po Leung Kuk Mrs Vicwood K T Chong (Wah Kwai) Kindergarten",
      "name_zh": "保良局方王錦全幼稚園（華貴）",
      "district": "Southern",
      "address": "4/F, Neighbourhood Community Centre, Wah Kwai Estate, Pokfulam",
      "address_zh": "薄扶林華貴邨鄰里社區中心4樓",
      "phone": "2551 6908",
      "email": "vicwoodktchong@poleungkuk.org.hk",
      "website": "poleungkuk.org.hk/child-care-services",
      "type": "Pre-nursery",
      "age_range": "Contact for Pre-Nursery programs (may serve 2-3 years), 3-6 years (K1-K3)",
      "session_types": ["Half-day AM", "Half-day PM", "Whole-day"],
      "language": ["Cantonese", "English"],
      "fees": 3200,
      "rating": 4.4,
      "reviews": 32,
      "facilities": ["Po Leung Kuk operated", "Participates in I Can Fly rehabilitation services", "School social worker services", "Kindergarten-cum-nursery services"],
      "description": "Po Leung Kuk kindergarten-cum-nursery services, potential Pre-Nursery programs for 2-3 years."
    },
    {
      "id": 225,
      "name_en": "Aberdeen Baptist Church Pak Kwong Kindergarten",
      "name_zh": "香港仔浸信會白光幼稚園",
      "district": "Southern",
      "address": "11 Aberdeen Reservoir Road, Aberdeen, Hong Kong",
      "address_zh": "香港香港仔水塘道11號",
      "phone": "Contact for details",
      "email": "info@pkkg.edu.hk",
      "website": "pkkg.edu.hk",
      "type": "Pre-nursery",
      "age_range": "Contact for Pre-Nursery programs (may serve 2-3 years), 3-6 years (K1-K3)",
      "session_types": ["Half-day AM", "Half-day PM", "Whole-day"],
      "language": ["Cantonese", "English"],
      "fees": 2800,
      "rating": 4.3,
      "reviews": 28,
      "facilities": ["Founded 1997", "158 capacity", "Outdoor playground", "Indoor playground", "Music room", "Parent-child library", "Baptist church-based education"],
      "description": "Baptist church-based kindergarten education, potential Pre-Nursery services, thematic teaching approach."
    },
    {
      "id": 226,
      "name_en": "Victoria Nursery (South Horizons)",
      "name_zh": "Victoria Nursery（海怡半島）",
      "district": "Southern",
      "address": "South Horizons, Ap Lei Chau (contact for exact address)",
      "address_zh": "鴨脷洲海怡半島（聯絡查詢確實地址）",
      "phone": "Contact for details",
      "email": "info@victoria.edu.hk",
      "website": "victoria.edu.hk/campus/south-horizons-campus",
      "type": "Pre-nursery",
      "age_range": "Pre-Nursery (under 2), Pre-Nursery (above 2), Nursery & K: 1 year 10 months – 5 years",
      "session_types": ["Half-day AM", "Half-day PM", "Whole-day"],
      "language": ["English", "Mandarin"],
      "fees": 7500,
      "rating": 4.7,
      "reviews": 48,
      "facilities": ["Victoria education group", "Southern District campus", "Comprehensive early years programs", "Pre-Nursery programs for under 2 and above 2 years"],
      "description": "Pre-Nursery programs for under 2 and above 2 years, comprehensive nursery and kindergarten services."
    },
    {
      "id": 227,
      "name_en": "The International Montessori School (Stanley Campus)",
      "name_zh": "國際蒙特梭利學校（赤柱校園）",
      "district": "Southern",
      "address": "Stanley campus (contact for exact address)",
      "address_zh": "赤柱校園（聯絡查詢確實地址）",
      "phone": "2772 2468",
      "email": "info@ims.edu.hk",
      "website": "ims.edu.hk",
      "type": "Pre-nursery",
      "age_range": "Parent/toddler programs, Preschool: 2-6 years, Primary: 5-12 years",
      "session_types": ["Half-day AM", "Half-day PM", "Whole-day"],
      "language": ["English", "Mandarin"],
      "fees": 197500,
      "rating": 4.8,
      "reviews": 58,
      "facilities": ["Founded 2002", "Greater China's first through-chain Montessori school", "Serves close to 1,000 children", "Authentic Montessori programme", "Immersive bilingual environment"],
      "description": "Parent/toddler to preschool programs including 2-3 years, authentic Montessori programme with immersive bilingual environment (English/Mandarin)."
    },
    {
      "id": 228,
      "name_en": "ESF Pre-Kindergarten Programs (Potential Southern District Service)",
      "name_zh": "ESF學前幼稚園課程（潛在南區服務）",
      "district": "Southern",
      "address": "Main centers: Tung Chung, Wan Chai (may serve Southern District families)",
      "address_zh": "主要中心：東涌、灣仔（可能服務南區家庭）",
      "phone": "3762 2411",
      "email": "info@esf.edu.hk",
      "website": "join-us.esf.edu.hk/pre-kindergarten",
      "type": "Pre-nursery",
      "age_range": "Pre-Kindergarten programme for toddlers aged 2",
      "session_types": ["Half-day AM", "Half-day PM", "Whole-day"],
      "language": ["English"],
      "fees": 5500,
      "rating": 4.7,
      "reviews": 45,
      "facilities": ["ESF network access", "Certified Early Childhood educators", "Priority for ESF kindergarten applications", "Play-based theory across 5 key areas"],
      "description": "Pre-kindergarten programme for toddlers aged 2, play-based theory across 5 key areas: Wellbeing, Belonging, Communication, Contribution, Exploration."
    },
    {
      "id": 229,
      "name_en": "SAHK Apleichau Pre-school Centre",
      "name_zh": "香港耀能協會鴨脷洲學前服務中心",
      "district": "Southern",
      "address": "1-16, G/F, Lei Yee House, Ap Lei Chau (West) Estate, Hong Kong",
      "address_zh": "香港鴨脷洲(西)邨利怡樓地下1-16號",
      "phone": "2554 5019",
      "email": "alc@sahk1963.org.hk",
      "website": "alc.sahk1963.org.hk",
      "type": "Pre-nursery",
      "age_range": "Pre-school services (likely includes 2-3 years)",
      "session_types": ["Half-day AM", "Half-day PM", "Whole-day"],
      "language": ["Cantonese", "English"],
      "fees": 2800,
      "rating": 4.5,
      "reviews": 35,
      "facilities": ["SAHK (Hong Kong Society for Rehabilitation) operated", "Specialized in children with disabilities", "Specialized support for children with special needs", "Comprehensive early childhood development programs"],
      "description": "Pre-school centre services, specialized support for children with special needs, comprehensive early childhood development programs."
    },
    // TAI PO DISTRICT - PLAYGROUPS
    {
      "id": 230,
      "name_en": "Child Psychological Development Association (CPDA) - Tai Po Center",
      "name_zh": "嬰幼兒心理發展協會 - 大埔分會",
      "district": "Tai Po",
      "address": "Room 220, 1/F, Beautiful Garden, 11 Chui Lok Street, Tai Po Town Centre",
      "address_zh": "大埔翠樂街11號美豐花園A座1樓商場220室（近安基司幼稚園）",
      "phone": "3692 5111",
      "email": "info-tp@cpda.com.hk",
      "website": "cpda.com.hk",
      "type": "Playgroup",
      "age_range": "6-18 months (Infant Development Playgroup)",
      "session_types": ["Weekday classes", "Weekend classes"],
      "language": ["Cantonese", "English"],
      "fees": 3700,
      "rating": 4.6,
      "reviews": 52,
      "facilities": ["Professional psychologists", "Certificate for 80%+ attendance", "Near Anchors Kindergarten", "Sensory integration activities", "Motor skills development"],
      "description": "Infant Development Playgroup: 10 lessons, 1 lesson/week (1 hour). Activities based on psychological development needs, sensory integration, motor skills. Multiple slots available Mon-Sun."
    },
    {
      "id": 231,
      "name_en": "International College Hong Kong (ICHK) Hong Lok Yuen - Baby Sensory & Playgroups",
      "name_zh": "香港國際學院香港凱壹苑 - 嬰兒感官及遊戲小組",
      "district": "Tai Po",
      "address": "3 Twentieth Street, Hong Lok Yuen, Tai Po, New Territories",
      "address_zh": "新界大埔香港凱壹苑第二十街3號",
      "phone": "3955 3000",
      "email": "info@ichkhly.edu.hk",
      "website": "ichkhly.edu.hk",
      "type": "Playgroup",
      "age_range": "6-32 months (Baby Sensory: 6-12m, Music & Early Starters: 12-32m, Story & Craft: 18-32m)",
      "session_types": ["Baby Sensory", "Music & Early Starters", "Story & Craft"],
      "language": ["English", "Cantonese"],
      "fees": 2000,
      "rating": 4.7,
      "reviews": 38,
      "facilities": ["Maximum 7 children per session", "Circle time with bonding", "Free exploration", "Bilingual environment", "Sensory play for infants"],
      "description": "Baby Sensory (6-12m): Sensory play for infants, develop motor and language skills, healthy brain development. Music & Early Starters: 30 mins music + 60 mins play."
    },
    {
      "id": 232,
      "name_en": "Mulberry House International Kindergarten (Tai Po Campus) - Playgroup",
      "name_zh": "Mulberry House國際幼稚園（大埔校園）- 遊戲小組",
      "district": "Tai Po",
      "address": "Pak Shek Kok, Tai Po, New Territories",
      "address_zh": "新界大埔白石角",
      "phone": "Contact for details",
      "email": "Contact for details",
      "website": "mulberryhousekg.com/en/taipo-campus",
      "type": "Playgroup",
      "age_range": "6-18 months (contact for specific availability)",
      "session_types": ["Bilingual classes"],
      "language": ["English", "Cantonese"],
      "fees": 8500,
      "rating": 4.8,
      "reviews": 45,
      "facilities": ["20,000 sq ft campus", "Brightly-lit classrooms", "Indoor tree house", "Outdoor garden", "Music Room", "Sensory Area", "Indoor Playground", "Sports Field"],
      "description": "Playgroup following Reggio Emilia approach, bilingual classes, learning environment as 'third teacher', designed for imagination and discovery. Near Chinese University and Hong Kong Science Park."
    },
    {
      "id": 233,
      "name_en": "Mulberry Tree Academy",
      "name_zh": "Mulberry Tree學院",
      "district": "Tai Po",
      "address": "Operating for Tai Po and Shui Wai Youth Centre",
      "address_zh": "為大埔及水圍青年中心營運",
      "phone": "Contact for details",
      "email": "Contact for details",
      "website": "mulberrytree.com.hk",
      "type": "Playgroup",
      "age_range": "6-18 months (contact for specific ages)",
      "session_types": ["Reggio Emilia and Montessori inspired programs"],
      "language": ["English", "Cantonese"],
      "fees": 4200,
      "rating": 4.5,
      "reviews": 32,
      "facilities": ["Team of multilingual facilitators", "Specialized in early childhood education", "Nurturing environment", "Weekly student activity wrap-ups"],
      "description": "Reggio Emilia and Montessori inspired preschool, playgroup activities promoting holistic development, Montessori work period with independent immersion."
    },
    {
      "id": 234,
      "name_en": "Anchors Academy - Creative Tots Playgroup",
      "name_zh": "安基司學院 - 創意幼兒遊戲小組",
      "district": "Tai Po",
      "address": "1 Ko Po Path, Kam Tin North, Yuen Long (Primary location, may offer Tai Po programs)",
      "address_zh": "元朗錦田北高埔徑1號（主校，可能提供大埔課程）",
      "phone": "3860 5605",
      "email": "AAKGadmission@anchorsacademy.edu.hk",
      "website": "anchorsacademy.edu.hk",
      "type": "Playgroup",
      "age_range": "12-24 months (Wrigglers: 12-18m, Toddlers: 19-24m)",
      "session_types": ["Creative Tots Playgroup"],
      "language": ["English"],
      "fees": 6800,
      "rating": 4.6,
      "reviews": 41,
      "facilities": ["Priority admission to Anchors Academy International Kindergarten", "State-of-the-art campus", "Swimming pool", "VR labs"],
      "description": "Creative Tots Playgroup: 1hr 15mins in English. Welcome & free play, Circle time & Music movement, Creative arts/Sensory play, Snack time, Physical play."
    },
    {
      "id": 235,
      "name_en": "Kadoorie Farm and Botanic Garden - Wonders in Nature Playgroup",
      "name_zh": "嘉道理農場暨植物園 - 大自然奇觀遊戲小組",
      "district": "Tai Po",
      "address": "Lam Kam Road, Tai Po, New Territories (Kadoorie Farm and Botanic Garden)",
      "address_zh": "新界大埔林錦路（嘉道理農場暨植物園）",
      "phone": "Contact for details",
      "email": "Contact for details",
      "website": "kfbg.org",
      "type": "Playgroup",
      "age_range": "2-3 years (36 months or below, may accept younger children)",
      "session_types": ["Nature-based playgroup"],
      "language": ["English", "Cantonese"],
      "fees": 2800,
      "rating": 4.9,
      "reviews": 67,
      "facilities": ["Pilot programme", "Interaction with KFBG experts", "Plant specialists", "Animal caretakers", "Farmers", "Parental involvement encouraged"],
      "description": "Nature-based playgroup for physical and emotional development through nature play. Eight themes: Seeds & Birds, Flowers & Bees, Trees & Insects, Water & Amphibians."
    },
    {
      "id": 236,
      "name_en": "Hong Kong Christian Service - Solis Playland (Tai Po)",
      "name_zh": "香港基督教服務處 - Solis Playland（大埔）",
      "district": "Tai Po",
      "address": "Tai Po (contact for exact address)",
      "address_zh": "大埔（聯絡查詢確實地址）",
      "phone": "Contact for details",
      "email": "Contact for details",
      "website": "hkcs.org/en/services/solis-playland",
      "type": "Playgroup",
      "age_range": "Infants and toddlers (specific ages contact center)",
      "session_types": ["Holistic development programs"],
      "language": ["Cantonese", "English"],
      "fees": 2200,
      "rating": 4.4,
      "reviews": 28,
      "facilities": ["Hong Kong Christian Service operated", "Safe environment", "Comfortable setting", "Interactive environment"],
      "description": "Holistic development for infants and toddlers in safe, comfortable and interactive environment, building developmental skills through play-based activities."
    },
    {
      "id": 237,
      "name_en": "Llamahood Playgroup (Potential Tai Po Service)",
      "name_zh": "Llamahood遊戲小組（潛在大埔服務）",
      "district": "Tai Po",
      "address": "Main center may serve Tai Po families (contact for service areas)",
      "address_zh": "主要中心可能服務大埔家庭（聯絡查詢服務範圍）",
      "phone": "Contact for details",
      "email": "Contact for details",
      "website": "llamahood.com",
      "type": "Playgroup",
      "age_range": "6-18 months (Infanity: 6-11m, Top Learner: 12-18m)",
      "session_types": ["Infanity", "Top Learner"],
      "language": ["English", "Cantonese"],
      "fees": 3500,
      "rating": 4.3,
      "reviews": 25,
      "facilities": ["Love & Laughter theme", "Designed to stimulate senses", "Curiosity development", "Parent-child bonding"],
      "description": "Infanity (6-11m): Accompanied class for infants and parents to explore together, sensory stimulation. Top Learner (12-18m): Safe environment for developing individuality, physical abilities."
    },
    {
      "id": 238,
      "name_en": "YMCA Hong Kong - Toddlers' World (Potential Service Extension)",
      "name_zh": "香港基督教青年會 - 幼兒世界（潛在服務延伸）",
      "district": "Tai Po",
      "address": "Main centers: TST, Cheung Sha Wan (may extend services to Tai Po)",
      "address_zh": "主要中心：尖沙咀、長沙灣（可能延伸服務至大埔）",
      "phone": "TST: 2268 7756/7757, Beacon Centre: 2281 6005/6010",
      "email": "pes@ymcahk.org.hk, pesbc@ymcahk.org.hk",
      "website": "ymcahk.org.hk",
      "type": "Playgroup",
      "age_range": "12-24 months (1-1.5 years, 1.5-2 years)",
      "session_types": ["Toddlers' World"],
      "language": ["English", "Cantonese"],
      "fees": 1800,
      "rating": 4.2,
      "reviews": 31,
      "facilities": ["Arts & Crafts", "Music & Songs", "Physical Movement", "Fun Games", "Story Reading", "Free-play Time", "Snack Time"],
      "description": "Toddlers' World: Arts & Crafts, Music & Songs, Physical Movement, Fun Games, Story Reading, Free-play Time, Snack Time, special parties and outings."
    },
    // TAI PO DISTRICT - PRE-NURSERY PROGRAMS
    {
      "id": 239,
      "name_en": "International College Hong Kong (ICHK) Hong Lok Yuen - Pre-Nursery",
      "name_zh": "香港國際學院香港凱壹苑 - 學前班",
      "district": "Tai Po",
      "address": "3 Twentieth Street, Hong Lok Yuen, Tai Po, New Territories",
      "address_zh": "新界大埔香港凱壹苑第二十街3號",
      "phone": "3955 3000",
      "email": "info@ichkhly.edu.hk",
      "website": "ichkhly.edu.hk",
      "type": "Pre-nursery",
      "age_range": "2 years 8 months to 3 years (Pre-Nursery), 3-11 years (Nursery-Year 6)",
      "session_types": ["Afternoon programme", "IB Primary Years Programme pathway"],
      "language": ["English"],
      "fees": 140880,
      "rating": 4.8,
      "reviews": 89,
      "facilities": ["Founded 1983", "Community of learners under 400 students", "Forest School education leader", "Spacious gardens", "Outdoor play apparatus", "Allotment for growing", "Mini forest", "Outdoor forest classroom"],
      "description": "Pre-Nursery: For children 2 years 8 months enrolled to join Nursery in following September, afternoon programme from January onwards (Mon, Tue, Thu). IB Primary Years Programme pathway."
    },
    {
      "id": 240,
      "name_en": "Anchors International Nursery (Fuller Gardens Campus)",
      "name_zh": "安基司國際幼兒園（富來花園校園）",
      "district": "Tai Po",
      "address": "Shop No G07B, G/F-2/F, Fuller Gardens, 8 Chui Lok Street, Tai Po, New Territories",
      "address_zh": "新界大埔翠樂街8號富來花園G07B舖地下至二樓",
      "phone": "2664 4133",
      "email": "maincampus@anchors.edu.hk",
      "website": "anchors.edu.hk/en",
      "type": "Pre-nursery",
      "age_range": "2-5 years (2-year old preparatory class N1/IN1, 3-year old class K1/IN2, up to 5-year old K3/IN4)",
      "session_types": ["Half Day N1", "K1-K3 Mainstream", "International"],
      "language": ["English", "Mandarin"],
      "fees": 6000,
      "rating": 4.6,
      "reviews": 67,
      "facilities": ["International Education Organization", "Cultural diversity programs", "Healthy teaching staff outlook", "UK National Curriculum", "Bilingual approach"],
      "description": "2-year old preparatory class: Mainstream N1 and International IN1. UK National Curriculum, bilingual approach (English/Mandarin). Online admission applications start 15 August annually."
    },
    {
      "id": 241,
      "name_en": "Anchors International Nursery (Constellation Cove Campus)",
      "name_zh": "安基司國際幼兒園（滌濤山校園）",
      "district": "Tai Po",
      "address": "Kindergarten Premises, Constellation Cove, 1 Hung Lam Drive, Tai Po, New Territories",
      "address_zh": "新界大埔紅林路1號滌濤山幼稚園校舍",
      "phone": "2650 6660",
      "email": "cc@anchors.edu.hk",
      "website": "anchors.edu.hk/en",
      "type": "Pre-nursery",
      "age_range": "2-5 years (2-year old preparatory class N1/IN1, 3-year old class K1/IN2, up to 5-year old K3/IN4)",
      "session_types": ["Half Day N1", "Whole Day K1-K3"],
      "language": ["English", "Mandarin"],
      "fees": 8400,
      "rating": 4.7,
      "reviews": 73,
      "facilities": ["Constellation Cove development location", "Individual value respected", "Founded 2008", "On-site Pre-school Rehabilitation Services", "Interdisciplinary service teams"],
      "description": "2-year old preparatory class: Mainstream N1 and International IN1. UK National Curriculum, bilingual education. Constellation Cove development location."
    },
    {
      "id": 242,
      "name_en": "Zebedee International Preschool and Nursery",
      "name_zh": "思百德國際幼稚園",
      "district": "Tai Po",
      "address": "Wing A & Wing B, G/F, Yat Wing House, Yat Nga Court, Tai Po",
      "address_zh": "新界大埔逸雅苑逸榮閣地下A翼及B翼",
      "phone": "2650 3339",
      "email": "admin@zebedee.edu.hk",
      "website": "zebedee.edu.hk",
      "type": "Pre-nursery",
      "age_range": "1-6 years (Nursery: 2+ years, Playgroup: 1-2 years, Preschool: up to 6 years)",
      "session_types": ["Nursery AM & PM", "Nursery whole day"],
      "language": ["English"],
      "fees": 7200,
      "rating": 4.5,
      "reviews": 58,
      "facilities": ["Established 2008", "Close to Tai Po Market train station", "Home-school communication platform", "6,000 sqft", "8 spacious purpose-built classrooms", "Large play area", "Multipurpose room", "Outdoor shared playground"],
      "description": "Nursery (2+ years): Non-profit family-oriented education, Early Years Foundation Stage framework (EYFS), small class sizes offering personal approach. Student Ratio: 1:8 Nursery, 1:10 Preschool."
    },
    {
      "id": 243,
      "name_en": "Tung Wah Group of Hospitals Fong Lai Ming Nursery School",
      "name_zh": "東華三院方麗明幼兒學校",
      "district": "Tai Po",
      "address": "5/F and Roof Playground, Tai Po Community Centre, Heung Sze Wui Street, Tai Po Market, New Territories",
      "address_zh": "新界大埔墟鄉事會街大埔社區中心5樓及天台遊樂場",
      "phone": "2653 2393",
      "email": "flmns@tungwahcsd.org",
      "website": "flmns.tungwachsd.org/tc/home",
      "type": "Pre-nursery",
      "age_range": "2-6 years (Pre-Nursery and child care services for 2-3 years, K1-K3: 3-6 years)",
      "session_types": ["Kindergarten-cum-Child Care Centre"],
      "language": ["Cantonese", "English"],
      "fees": 3200,
      "rating": 4.4,
      "reviews": 42,
      "facilities": ["Founded 1984", "Renamed 1994 after Fong Shu Fook Tong Charitable Foundation donation", "Floor area around 375 sq.m", "Activity rooms", "Music room", "Kitchen", "Roof outdoor activities"],
      "description": "Kindergarten-cum-Child Care Centre providing care and educational services for young children, harmonized pre-primary services since 2005. Capacity: 74 permitted accommodation according to Education Bureau."
    },
    {
      "id": 244,
      "name_en": "St. Paul's Catholic Day Nursery",
      "name_zh": "天主教聖保祿幼兒園",
      "district": "Tai Po",
      "address": "28 Wan Tau Street, Tai Po, New Territories",
      "address_zh": "新界大埔運頭街28號",
      "phone": "2656 1066",
      "email": "taipo@spn.edu.hk",
      "website": "spcn.edu.hk",
      "type": "Pre-nursery",
      "age_range": "2-6 years (N1: 2-3 years, N2: 3-4 years, N3: 4-5 years, N4: 5-6 years)",
      "session_types": ["Full-day whole person development"],
      "language": ["Cantonese", "English"],
      "fees": 93170,
      "rating": 4.6,
      "reviews": 76,
      "facilities": ["Founded 1975", "Catholic values integration", "Non-profit making", "Does not participate in KG Education Scheme", "N1: 40 places", "N2: 10 places", "Total student capacity 136"],
      "description": "N1 (2-3 years full-day): Catholic-based education, full-day whole person development, child-centered approach with life experience foundation. 2025-2026 admission: December 1-31, 2024 online application."
    },
    {
      "id": 245,
      "name_en": "Mulberry House International Kindergarten (Tai Po Campus) - Pre-Nursery",
      "name_zh": "Mulberry House國際幼稚園（大埔校園）- 學前班",
      "district": "Tai Po",
      "address": "Pak Shek Kok, Tai Po, New Territories",
      "address_zh": "新界大埔白石角",
      "phone": "Contact for details",
      "email": "Contact for details",
      "website": "mulberryhousekg.com/en/taipo-campus",
      "type": "Pre-nursery",
      "age_range": "Pre-Nursery programme, Playgroup, Kindergarten programmes",
      "session_types": ["Pre-Nursery programme", "Bilingual classes"],
      "language": ["English", "Cantonese"],
      "fees": 9500,
      "rating": 4.8,
      "reviews": 64,
      "facilities": ["20,000 sq ft spacious campus", "Breezy promenade setting of Pak Shek Kok", "Designed with young children's needs in mind", "Brightly-lit classrooms", "One-of-a-kind tree house", "Music Room", "Sensory Area", "Indoor Playground", "Sports Field", "Outdoor Garden"],
      "description": "Pre-Nursery programme in partnership with established early childhood education, Reggio Emilia approach, bilingual classes. Next to Chinese University of Hong Kong and Hong Kong Science Park, beside Tolo Harbour."
    },
    {
      "id": 246,
      "name_en": "Tai Po Catholic Kindergarten",
      "name_zh": "天主教大埔幼稚園",
      "district": "Tai Po",
      "address": "G/F, Ka Wo House, Po Nga Court, Tai Po, New Territories",
      "address_zh": "新界大埔寶雅苑家和閣地下",
      "phone": "Contact for details",
      "email": "Contact for details",
      "website": "Contact for information",
      "type": "Pre-nursery",
      "age_range": "2-6 years (Contact for Pre-Nursery programs, K1-K3: 3-6 years)",
      "session_types": ["Catholic kindergarten education", "Potential Pre-Nursery services"],
      "language": ["Cantonese", "English"],
      "fees": 2800,
      "rating": 4.3,
      "reviews": 35,
      "facilities": ["Catholic education approach", "Participates in On-site Pre-school Rehabilitation Services", "Heep Hong Society Team 1"],
      "description": "Catholic kindergarten education, potential Pre-Nursery services for 2-3 years, holistic development approach."
    },
    {
      "id": 247,
      "name_en": "Tai Po Merchants Association Kindergarten",
      "name_zh": "大埔商會幼稚園",
      "district": "Tai Po",
      "address": "Block 2, G/F, Fu Heng Estate, Tai Po, New Territories",
      "address_zh": "新界大埔富亨邨第二座地下",
      "phone": "Contact for details",
      "email": "Contact for details",
      "website": "Contact for information",
      "type": "Pre-nursery",
      "age_range": "2-6 years (Contact for Pre-Nursery programs, K1-K3: 3-6 years)",
      "session_types": ["Community-based kindergarten education", "Potential Pre-Nursery services"],
      "language": ["Cantonese", "English"],
      "fees": 2200,
      "rating": 4.2,
      "reviews": 28,
      "facilities": ["Community association operated", "Participates in On-site Pre-school Rehabilitation Services", "Heep Hong Society Team 1"],
      "description": "Community-based kindergarten education, potential Pre-Nursery services, Tai Po Merchants Association operated."
    },
    {
      "id": 248,
      "name_en": "Po Leung Kuk Lau Chun Kindergarten",
      "name_zh": "保良局劉進幼稚園",
      "district": "Tai Po",
      "address": "G/F, Kwong Lai House, Kwong Fuk Estate, Tai Po, New Territories",
      "address_zh": "新界大埔廣福邨廣禮樓地下",
      "phone": "Contact for details",
      "email": "Contact for details",
      "website": "poleungkuk.org.hk/child-care-services",
      "type": "Pre-nursery",
      "age_range": "2-6 years (Contact for Pre-Nursery programs, K1-K3: 3-6 years)",
      "session_types": ["Kindergarten-cum-nursery services", "Potential Pre-Nursery programs"],
      "language": ["Cantonese", "English"],
      "fees": 1800,
      "rating": 4.1,
      "reviews": 31,
      "facilities": ["Po Leung Kuk operated", "Participates in I Can Fly (New Territories North) rehabilitation services"],
      "description": "Po Leung Kuk kindergarten-cum-nursery services, potential Pre-Nursery programs for 2-3 years, holistic early childhood development."
    },
    {
      "id": 249,
      "name_en": "Pentecostal Church of Hong Kong Tai Wo Nursery School",
      "name_zh": "竹園區神召會太和康樂幼兒學校",
      "district": "Tai Po",
      "address": "3/F, Neighbourhood Community Centre, Tai Wo Estate, Tai Po, New Territories",
      "address_zh": "新界大埔太和邨太和鄰里社區中心3樓",
      "phone": "Contact for details",
      "email": "Contact for details",
      "website": "Contact for information",
      "type": "Pre-nursery",
      "age_range": "2-6 years (Pre-Nursery programs for 2-3 years, K1-K3: 3-6 years)",
      "session_types": ["Pre-Nursery programs", "Pentecostal church-based education"],
      "language": ["Cantonese", "English"],
      "fees": 2500,
      "rating": 4.0,
      "reviews": 24,
      "facilities": ["Pentecostal Church of Hong Kong operated", "Participates in On-site Pre-school Rehabilitation Services"],
      "description": "Pre-Nursery programs for 2-3 years, Pentecostal church-based education, comprehensive early childhood development."
    },
    {
      "id": 250,
      "name_en": "Hong Kong Taoist Association Yuen Yuen Kindergarten (Fu Shin Estate)",
      "name_zh": "香港道教聯合會圓玄幼稚園（富善邨）",
      "district": "Tai Po",
      "address": "G/F, Shin Mei House, Fu Shin Estate, Tai Po, New Territories",
      "address_zh": "新界大埔富善邨善美樓地下",
      "phone": "Contact for details",
      "email": "Contact for details",
      "website": "Contact for information",
      "type": "Pre-nursery",
      "age_range": "2-6 years (Contact for Pre-Nursery programs, K1-K3: 3-6 years)",
      "session_types": ["Taoist Association operated kindergarten", "Potential Pre-Nursery services"],
      "language": ["Cantonese", "English"],
      "fees": 2000,
      "rating": 4.0,
      "reviews": 22,
      "facilities": ["Hong Kong Taoist Association operated", "Participates in On-site Pre-school Rehabilitation Services"],
      "description": "Taoist Association operated kindergarten, potential Pre-Nursery services, holistic development approach."
    },
    {
      "id": 251,
      "name_en": "The Education University of Hong Kong Early Childhood Learning Centre (Kindergarten Section)",
      "name_zh": "香港教育大學幼兒發展中心（幼稚園部）",
      "district": "Tai Po",
      "address": "Room G02-G05, G/F, Senior Staff Quarters, The Education University of Hong Kong, 10 Lo Ping Road, Tai Po, New Territories",
      "address_zh": "新界大埔露屏路10號香港教育大學高級教職員宿舍地下G02-G05室",
      "phone": "Contact for details",
      "email": "Contact for details",
      "website": "Contact for information",
      "type": "Pre-nursery",
      "age_range": "Contact for Pre-Nursery programs, professional early childhood education",
      "session_types": ["Early childhood education programs", "Research-based approach"],
      "language": ["English", "Cantonese"],
      "fees": 4500,
      "rating": 4.7,
      "reviews": 55,
      "facilities": ["Operated by The Education University of Hong Kong", "Research and practice integration", "Professional teacher training environment"],
      "description": "Early childhood education programs operated by Hong Kong's premier teacher education university, research-based approach to child development."
    },
    // TSUEN WAN DISTRICT - PLAYGROUPS
    {
      "id": 252,
      "name_en": "Child Psychological Development Association (CPDA) - Tsuen Wan Center",
      "name_zh": "嬰幼兒心理發展協會 - 荃灣分會",
      "district": "Tsuen Wan",
      "address": "Room D, 25/F, Plaza 88, 88 Yeung Uk Road, Tsuen Wan, New Territories",
      "address_zh": "新界荃灣楊屋道88號Plaza 88 25樓D室",
      "phone": "3543 5128",
      "email": "info-tw@cpda.com.hk",
      "website": "cpda.com.hk",
      "type": "Playgroup",
      "age_range": "6-18 months (Infant Development Playgroup: 6-9m, 9-12m, 12-15m, 15-18m)",
      "session_types": ["Infant Development Playgroup"],
      "language": ["Cantonese", "English"],
      "fees": 3500,
      "rating": 4.6,
      "reviews": 48,
      "facilities": ["Professional psychologists on staff", "Certificate for 80%+ attendance", "Tsuen Wan West Station (8 min walk)", "Tsuen Wan Station (12 min walk)"],
      "description": "Infant Development Playgroup: 10 lessons, 1 lesson/week (1 hour). Activities based on psychological development needs, sensory integration, motor skills. Opening Hours: Mon-Sun: 10:00am-6:30pm."
    },
    {
      "id": 253,
      "name_en": "Child Psychological Development Association (CPDA) - Tsuen Wan West Center",
      "name_zh": "嬰幼兒心理發展協會 - 荃灣西分會",
      "district": "Tsuen Wan",
      "address": "Shop 3107, OP Mall, Tsuen Wan, New Territories",
      "address_zh": "新界荃灣OP商場3107號舖",
      "phone": "5629 4980",
      "email": "info-tww@cpda.com.hk",
      "website": "cpda.com.hk",
      "type": "Playgroup",
      "age_range": "6-18 months (Infant Development Playgroup: 6-9m, 9-12m, 12-15m, 15-18m)",
      "session_types": ["Infant Development Playgroup"],
      "language": ["Cantonese", "English"],
      "fees": 3500,
      "rating": 4.5,
      "reviews": 42,
      "facilities": ["Professional psychologists", "Research-based programs", "Located in OP Mall", "Shopping and dining facilities", "Convenient access"],
      "description": "Infant Development Playgroup: 10 lessons, 1 lesson/week (1 hour). Activities based on psychological development needs, sensory integration. Opening Hours: Mon-Sun: 9:30am-6:30pm."
    },
    {
      "id": 254,
      "name_en": "ESF Tsing Yi International Kindergarten - Playgroups",
      "name_zh": "ESF青衣國際幼稚園 - 遊戲小組",
      "district": "Tsuen Wan",
      "address": "Maritime Square, 33 Tsing King Road, Tsing Yi, New Territories",
      "address_zh": "新界青衣青敬路33號海濱廣場",
      "phone": "Contact for details",
      "email": "Contact for details",
      "website": "tyk.esf.edu.hk, esfexplore.org.hk",
      "type": "Playgroup",
      "age_range": "6-24 months (Level 1: 6-12m, Level 2: 13-24m)",
      "session_types": ["Progressive playgroups", "EYFS framework"],
      "language": ["English"],
      "fees": 124900,
      "rating": 4.8,
      "reviews": 76,
      "facilities": ["ESF network access", "IB Primary Years Programme pathway", "Play-based inquiry learning", "Multicultural setting", "Tsing Yi MTR Station nearby", "School bus routes"],
      "description": "Progressive playgroups following EYFS framework: Level 1 (6-12m), Level 2 (13-24m). Stories, songs, hands-on sensory activities, building confidence. Principal: Suzannah Large (experienced early-years specialist)."
    },
    {
      "id": 255,
      "name_en": "Kids Garden (Tsuen Wan Branch) - English & Chinese Playgroup",
      "name_zh": "Kids Garden（荃灣分校）- 英文及中文遊戲小組",
      "district": "Tsuen Wan",
      "address": "Tsuen Wan center location (contact for exact address)",
      "address_zh": "荃灣中心地點（聯絡查詢確實地址）",
      "phone": "Contact for details",
      "email": "Contact for details",
      "website": "kidsgardenhk.com",
      "type": "Playgroup",
      "age_range": "6-36 months (Level 1: 6-18m, Level 2: 19-36m, Baby Gym: 6m-3y)",
      "session_types": ["English Playgroup", "Baby Gym", "Baby Yoga"],
      "language": ["English", "Cantonese"],
      "fees": 4200,
      "rating": 4.4,
      "reviews": 38,
      "facilities": ["Leading provider with over 10 years experience", "Themed weekly activities", "Multilingual approach", "Class size: 8 students", "Each accompanied by parent/guardian"],
      "description": "English Playgroup: Singing, playing, themed weekly activities. Baby Gym: Physical fitness through playgroup elements with foreign teachers. Baby Yoga: Mom and baby yoga classes. Opening Hours: Mon-Sun: 9:00am-6:30pm."
    },
    {
      "id": 256,
      "name_en": "My Gym Premium - Children's Fitness Center",
      "name_zh": "My Gym Premium - 兒童體適能中心",
      "district": "Tsuen Wan",
      "address": "Shop 3108-3111, 3/F, OP Mall, Tsuen Wan, New Territories",
      "address_zh": "新界荃灣OP商場3樓3108-3111號舖",
      "phone": "Contact for details",
      "email": "Contact for details",
      "website": "mygympremium.com",
      "type": "Playgroup",
      "age_range": "6-19 months (Tiny Tykes: 6-12m, Waddlers: 12-19m)",
      "session_types": ["Tiny Tykes", "Waddlers"],
      "language": ["English", "Cantonese"],
      "fees": 3800,
      "rating": 4.7,
      "reviews": 65,
      "facilities": ["Award-winning program from California 1983", "Signature My Gym program", "My Art and Little Builder programs", "Large playground space", "Specialized equipment", "Safe and clean environment"],
      "description": "Tiny Tykes (6-12m): Beginning stretches, exercises, infant songs, dances, balance and agility skills. Waddlers (12-19m): Balancing, tumbling, hanging and agility exercises. Philosophy: Empower The Youngster by building confidence, coordination, and physical abilities."
    },
    {
      "id": 257,
      "name_en": "Artsplus Playgroup Programs (Potential Tsuen Wan Service)",
      "name_zh": "Artsplus遊戲小組課程（潛在荃灣服務）",
      "district": "Tsuen Wan",
      "address": "Contact Artsplus for Tsuen Wan service areas",
      "address_zh": "聯絡Artsplus查詢荃灣服務範圍",
      "phone": "Contact for details",
      "email": "Contact for details",
      "website": "artsplus.com.hk",
      "type": "Playgroup",
      "age_range": "6+ months (Infant Class: 6+m, Toddler Class: 12+m)",
      "session_types": ["Infant Class", "Toddler Class"],
      "language": ["English", "Cantonese"],
      "fees": 3200,
      "rating": 4.3,
      "reviews": 29,
      "facilities": ["Purpose-built facilities", "Supporting physical and brain development", "Parent education sessions", "Exploratory play", "Sensory play", "Musical activities"],
      "description": "Infant Class: Strengthen gross and fine motor skills, prepare for sitting, standing, walking. Toddler Class: Build motor skills and coordination. Activities: Exploratory play, sensory play, musical activities, art, language, movement activities in purpose-built environment."
    },
    {
      "id": 258,
      "name_en": "Baumhaus Kindermusik (Accessible to Tsuen Wan)",
      "name_zh": "Baumhaus兒童音樂（荃灣可達）",
      "district": "Tsuen Wan",
      "address": "1/F, Kar Yau Building, 36-44 Queen's Road East, Wan Chai (accessible to Tsuen Wan families)",
      "address_zh": "灣仔皇后大道東36-44號嘉友大廈1樓（荃灣家庭可達）",
      "phone": "2321 5898",
      "email": "info@baumhaus.com.hk",
      "website": "baumhaus.com.hk",
      "type": "Playgroup",
      "age_range": "Birth to 6 years (includes 6-18 months programs)",
      "session_types": ["Kindermusik classes"],
      "language": ["English", "Cantonese"],
      "fees": 350,
      "rating": 4.6,
      "reviews": 52,
      "facilities": ["Beautiful birch treehouse centerpiece", "Café for parents", "Early childhood specialists", "Trial class $350", "Includes free playroom access"],
      "description": "Kindermusik classes for infants and toddlers, encouraging singing, movement, musical instruments, story listening. Opening Hours: Mon-Sun: 9am-6pm. Transportation: Accessible from Tsuen Wan via MTR Tsuen Wan Line to Wan Chai."
    },
    {
      "id": 259,
      "name_en": "Llamahood Playgroup (Potential Tsuen Wan Service)",
      "name_zh": "Llamahood遊戲小組（潛在荃灣服務）",
      "district": "Tsuen Wan",
      "address": "Main center may serve Tsuen Wan families (contact for service areas)",
      "address_zh": "主要中心可能服務荃灣家庭（聯絡查詢服務範圍）",
      "phone": "Contact for details",
      "email": "Contact for details",
      "website": "llamahood.com",
      "type": "Playgroup",
      "age_range": "6-18 months (Infanity: 6-11m, Top Learner: 12-18m)",
      "session_types": ["Infanity", "Top Learner"],
      "language": ["English", "Cantonese"],
      "fees": 3500,
      "rating": 4.3,
      "reviews": 25,
      "facilities": ["Love & Laughter theme", "Designed to stimulate senses", "Curiosity development", "Parent-child bonding"],
      "description": "Infanity (6-11m): Accompanied class for infants and parents to explore together, sensory stimulation. Top Learner (12-18m): Safe environment for developing individuality, physical abilities."
    },
    {
      "id": 260,
      "name_en": "Happy Theory Playhouse (Tsuen Wan)",
      "name_zh": "Happy Theory遊樂屋（荃灣）",
      "district": "Tsuen Wan",
      "address": "Tsuen Wan (contact for exact address)",
      "address_zh": "荃灣（聯絡查詢確實地址）",
      "phone": "Contact for details",
      "email": "Contact for details",
      "website": "facebook.com/happytheoryplayhouse",
      "type": "Playgroup",
      "age_range": "6 months to 8 years (babies, toddlers and kids)",
      "session_types": ["Indoor playroom"],
      "language": ["English", "Cantonese"],
      "fees": 1800,
      "rating": 4.2,
      "reviews": 31,
      "facilities": ["Indoor playroom specifically designed for young children", "Safe padded play areas", "Suitable for babies from 6 months", "Free play", "Sensory exploration"],
      "description": "Indoor playroom for babies and toddlers, play-based activities, safe environment for exploration and social interaction. Activities: Free play, sensory exploration, social interaction opportunities, parent-child bonding time."
    },
    // TSUEN WAN DISTRICT - PRE-NURSERY PROGRAMS
    {
      "id": 261,
      "name_en": "Hong Kong Young Women's Christian Association Tsuen Wan Nursery School",
      "name_zh": "香港基督教女青年會荃灣幼兒學校",
      "district": "Tsuen Wan",
      "address": "4/F, Princess Alexandra Community Centre, Tai Ho Road, Tsuen Wan, New Territories",
      "address_zh": "新界荃灣大河道雅麗珊社區中心4樓",
      "phone": "2499 0298",
      "email": "nstw@ywca.org.hk",
      "website": "nstw.ywca.org.hk/en",
      "type": "Pre-nursery",
      "age_range": "2-6 years (Pre-Nursery N: 2-3 years, K1-K3: 3-6 years)",
      "session_types": ["Pre-Nursery N", "K1-K3"],
      "language": ["Cantonese", "English"],
      "fees": 2800,
      "rating": 4.4,
      "reviews": 38,
      "facilities": ["YWCA operated", "Community-based approach", "Comprehensive care for young children and families", "Interview-based admission", "Application fee $40"],
      "description": "Pre-Nursery (N): 2-3 years, application fee $40, interview-based admission. Office hours: 10:00am-4:00pm (Mon-Fri), 9:00am-12:00pm (Sat)."
    },
    {
      "id": 262,
      "name_en": "ESF Tsing Yi International Kindergarten - Pre-Kindergarten Programs",
      "name_zh": "ESF青衣國際幼稚園 - 學前幼稚園課程",
      "district": "Tsuen Wan",
      "address": "Maritime Square, 33 Tsing King Road, Tsing Yi, New Territories",
      "address_zh": "新界青衣青敬路33號海濱廣場",
      "phone": "2436 3355",
      "email": "kinder@tyk.edu.hk",
      "website": "tyk.esf.edu.hk/en",
      "type": "Pre-nursery",
      "age_range": "2-3 years (Pre-Kindergarten programme)",
      "session_types": ["Pre-Kindergarten programme"],
      "language": ["English"],
      "fees": 124900,
      "rating": 4.8,
      "reviews": 82,
      "facilities": ["ESF network access", "Experienced early-years specialist principal Suzannah Large", "IB Primary Years Programme pathway", "Tsing Yi MTR Station nearby", "School bus routes"],
      "description": "Pre-Kindergarten programme for children aged 2-3, EYFS curriculum, play-based inquiry learning, multicultural setting. School bus routes to Tsuen Wan, Tuen Mun, Siu Lam, Ting Kau areas."
    },
    {
      "id": 263,
      "name_en": "Tsuen Wan Trade Association Chiu Kin Fung Kindergarten",
      "name_zh": "荃灣商會邱健峰幼稚園",
      "district": "Tsuen Wan",
      "address": "On Yam Estate, Kwai Chung, New Territories",
      "address_zh": "新界葵涌安蔭邨",
      "phone": "Contact for details",
      "email": "Contact for details",
      "website": "ykfk.edu.hk/en/about-us-2",
      "type": "Pre-nursery",
      "age_range": "2 years 8 months to 6 years (K1/Nursery Class: 2y8m-4y, K2-K3: 4-6y)",
      "session_types": ["K1/Nursery Class", "K2-K3"],
      "language": ["Cantonese", "English"],
      "fees": 3200,
      "rating": 4.3,
      "reviews": 29,
      "facilities": ["Founded 1995", "Tsuen Wan Trade Association founded", "Continual development and refinement of teaching practices", "Quality pre-school education"],
      "description": "K1/Nursery Class: 2 years 8 months to 4 years old, quality pre-school education fostering whole-person development. Mission: Promote education for all and nurture youngsters."
    },
    {
      "id": 264,
      "name_en": "Parkview Rhine Garden Pre-School",
      "name_zh": "栢基海韻幼稚園",
      "district": "Tsuen Wan",
      "address": "1/F, Tower 1, Rhine Garden, 38 Castle Peak Road, Sham Tseng, Tsuen Wan, New Territories",
      "address_zh": "新界荃灣深井青山公路38號海韻花園第1座1樓",
      "phone": "2491 1082",
      "email": "school@pipsrg.edu.hk",
      "website": "pipsrg.edu.hk",
      "type": "Pre-nursery",
      "age_range": "2-6 years (Pre-Nursery programs, Kindergarten: 3-6y)",
      "session_types": ["Non-profit pre-school education", "KG Education Scheme"],
      "language": ["Cantonese", "English"],
      "fees": 4184,
      "rating": 4.5,
      "reviews": 45,
      "facilities": ["Founded 1994", "352 student capacity", "6 registered classrooms", "Indoor playground", "Music room", "Children Cooking Pantry"],
      "description": "Non-profit pre-school education under KG Education Scheme, whole person development approach, Chinese Art & Culture programs. Free tuition for K1-K3, Whole Day: $4,184/year (10 installments)."
    },
    {
      "id": 265,
      "name_en": "Parkview-Rhine Garden International Nursery",
      "name_zh": "栢基海韻國際幼兒園",
      "district": "Tsuen Wan",
      "address": "Podium Level 2, Tower 5, Rhine Garden, 38 Castle Peak Road, Sham Tseng, Tsuen Wan, New Territories",
      "address_zh": "新界荃灣深井青山公路38號海韻花園第5座平台2樓",
      "phone": "2496 2080",
      "email": "school@pipsrg.edu.hk",
      "website": "pipsrg.edu.hk",
      "type": "Pre-nursery",
      "age_range": "2+ years (Nursery for 2+ years old children)",
      "session_types": ["International nursery programs"],
      "language": ["English", "Cantonese"],
      "fees": 8500,
      "rating": 4.6,
      "reviews": 58,
      "facilities": ["Founded 1994", "Private independent school status", "International approach", "Established alongside Rhine Garden Pre-School"],
      "description": "Private independent international nursery for 2+ years, not covered by KG Education Scheme, international curriculum approach. Office hours: Mon-Fri 8:30-12:30, 14:00-16:30, Sat 8:30-12:30."
    },
    {
      "id": 266,
      "name_en": "S.K.H. St. Christopher's Nursery (Kwai Chung)",
      "name_zh": "聖公會聖基道幼兒園（葵涌）",
      "district": "Tsuen Wan",
      "address": "Unit No. 1, Podium Level 3, Kwai Chung Shopping Centre, Kwai Chung Estate, New Territories",
      "address_zh": "新界葵涌葵涌邨葵涌商場3樓平台1號單位",
      "phone": "2257 9331",
      "email": "kc_admin@skhsch.org.hk",
      "website": "skhkckg.edu.hk/en",
      "type": "Pre-nursery",
      "age_range": "2-6 years (Preschool class N: 2-3y, Nursery-Upper KG: 3-6y)",
      "session_types": ["Whole day pre-school education", "Daily care"],
      "language": ["Cantonese", "English", "Mandarin"],
      "fees": 4200,
      "rating": 4.4,
      "reviews": 41,
      "facilities": ["Anglican church operated", "Native English and Mandarin teachers", "Stationed School Social Worker", "Computing facilities", "100 children each campus"],
      "description": "Preschool class N: 2-3 years old, whole day pre-school education and daily care, multiple intelligence development. Medium of Instruction: Cantonese (except English and Putonghua lessons)."
    },
    {
      "id": 267,
      "name_en": "Kendall International Preschool and Nursery (Serves Tsuen Wan via School Bus)",
      "name_zh": "Kendall國際幼稚園及幼兒園（校車服務荃灣）",
      "district": "Tsuen Wan",
      "address": "West Kowloon Campus: G/F, RESIDENCE 228, 228 Fuk Wing Street, Cheung Sha Wan, West Kowloon, Hong Kong",
      "address_zh": "西九龍校園：香港西九龍長沙灣福榮街228號RESIDENCE 228地下",
      "phone": "2328 8223",
      "email": "info@kendall.edu.hk",
      "website": "kendall.edu.hk",
      "type": "Pre-nursery",
      "age_range": "2 years 8 months to 6 years (PN: 2-3y, K1-K3: 2y8m-6y)",
      "session_types": ["Half-day English and Mandarin programs"],
      "language": ["English", "Mandarin"],
      "fees": 6800,
      "rating": 4.7,
      "reviews": 67,
      "facilities": ["Convergence of Modern Western Teaching Methods with Chinese values", "Creative Curriculum from U.S.", "School bus service available", "2025-2026 admission application now open"],
      "description": "Pre-Nursery (PN): 2-3 years old, half-day English and Mandarin programs, Creative Curriculum, child-developmental approach. School bus service available from Tsing Yi, Tsuen Wan, Tai Wai and Sha Tin areas."
    },
    {
      "id": 268,
      "name_en": "Po Leung Kuk Chi Pui Kindergarten",
      "name_zh": "保良局志沛幼稚園",
      "district": "Tsuen Wan",
      "address": "1/F, Block 2, Lei Muk Shue Estate, Kwai Chung, New Territories",
      "address_zh": "新界葵涌荔木樹邨第2座1樓",
      "phone": "2426 7643",
      "email": "Contact for details",
      "website": "poleungkuk.org.hk/child-care-services/cpkgn",
      "type": "Pre-nursery",
      "age_range": "2-6 years (Contact for Pre-Nursery programs, K1-K3: 3-6y)",
      "session_types": ["Kindergarten-cum-nursery services"],
      "language": ["Cantonese", "English"],
      "fees": 2200,
      "rating": 4.2,
      "reviews": 33,
      "facilities": ["Founded 1976", "Po Leung Kuk operated", "Non-profit-making", "Participates in 2024/25 KG Education Scheme", "Indoor playground", "91 permitted accommodation"],
      "description": "Po Leung Kuk kindergarten-cum-nursery services, potential Pre-Nursery programs for 2-3 years. Principal: Ms Wong Yin Ching."
    },
    {
      "id": 269,
      "name_en": "Hong Kong Young Women's Christian Association Tsing Yi Nursery School",
      "name_zh": "香港基督教女青年會青衣幼兒學校",
      "district": "Tsuen Wan",
      "address": "Tsing Yi area (contact for exact address)",
      "address_zh": "青衣區（聯絡查詢確實地址）",
      "phone": "2495 7678",
      "email": "nsty@ywca.org.hk",
      "website": "nsty.ywca.org.hk/en/index.html",
      "type": "Pre-nursery",
      "age_range": "2-6 years (Pre-Nursery N: 2-3y, K1-K3: 3-6y)",
      "session_types": ["Pre-Nursery N classes", "Nursery K1 classes"],
      "language": ["Cantonese", "English"],
      "fees": 2800,
      "rating": 4.3,
      "reviews": 36,
      "facilities": ["YWCA operated", "Comprehensive admission arrangements", "Office hours: 8am-7pm (Mon-Fri)", "8am-1pm (Sat)", "Closed Sundays and public holidays"],
      "description": "Pre-Nursery (N) classes admission arrangements, guidelines for 2-3 years old, nursery (K1) classes also available."
    },
    {
      "id": 270,
      "name_en": "Evangelical Lutheran Church of Hong Kong Ling Kung Nursery School",
      "name_zh": "基督教香港信義會靈工幼兒學校",
      "district": "Tsuen Wan",
      "address": "Wing A, G/F, Yee Kui House, Tsing Yi Estate, Tsing Yi, New Territories",
      "address_zh": "新界青衣青衣邨宜居樓地下A翼",
      "phone": "Contact for details",
      "email": "Contact for details",
      "website": "Contact for information",
      "type": "Pre-nursery",
      "age_range": "2-6 years (Contact for Pre-Nursery programs, K1-K3: 3-6y)",
      "session_types": ["Lutheran church-based nursery education"],
      "language": ["Cantonese", "English"],
      "fees": 2500,
      "rating": 4.1,
      "reviews": 28,
      "facilities": ["Evangelical Lutheran Church of Hong Kong operated", "Participates in On-site Pre-school Rehabilitation Services", "Christian values integration"],
      "description": "Lutheran church-based nursery education, potential Pre-Nursery services for 2-3 years, Christian values integration."
    },
    {
      "id": 271,
      "name_en": "The Salvation Army Tsuen Wan Nursery School",
      "name_zh": "救世軍荃灣幼兒學校",
      "district": "Tsuen Wan",
      "address": "1/F, Clague Garden Estate, 22 Clague Garden Estate, Tsuen Wan, New Territories",
      "address_zh": "新界荃灣麗都花園22座1樓",
      "phone": "Contact for details",
      "email": "Contact for details",
      "website": "Contact for information",
      "type": "Pre-nursery",
      "age_range": "2-6 years (Pre-Nursery and child care services for 2-3y, K1-K3: 3-6y)",
      "session_types": ["Kindergarten-cum-child care centre"],
      "language": ["Cantonese", "English"],
      "fees": 2000,
      "rating": 4.0,
      "reviews": 25,
      "facilities": ["Salvation Army operated", "Participates in Extended Hours Service", "Occasional Child Care Service"],
      "description": "Salvation Army operated kindergarten-cum-child care centre, Pre-Nursery services for 2-3 years."
    },
    {
      "id": 272,
      "name_en": "Hong Kong Sheng Kung Hui Lady MacLehose Centre Day Nursery",
      "name_zh": "香港聖公會麥理浩夫人中心幼兒園",
      "district": "Tsuen Wan",
      "address": "Room 302-303, 3/F, 22 Wo Yi Hop Road, Kwai Chung, New Territories",
      "address_zh": "新界葵涌和宜合道22號302-303室3樓",
      "phone": "2427 3523",
      "email": "skhlmcdn@skhmaclehose.org.hk",
      "website": "lmcdn.edu.hk",
      "type": "Pre-nursery",
      "age_range": "2-6 years (Contact for Pre-Nursery programs, kindergarten programs available)",
      "session_types": ["Anglican church-based day nursery services"],
      "language": ["Cantonese", "English"],
      "fees": 2400,
      "rating": 4.2,
      "reviews": 31,
      "facilities": ["Hong Kong Sheng Kung Hui operated", "Part of Lady MacLehose Centre services", "Comprehensive child development approach"],
      "description": "Anglican church-based day nursery services, potential Pre-Nursery programs, comprehensive child development approach."
    },
    {
      "id": 273,
      "name_en": "Hong Kong Sheng Kung Hui Lady MacLehose Centre (Shek Yam) Day Nursery",
      "name_zh": "香港聖公會麥理浩夫人中心（石蔭）幼兒園",
      "district": "Tsuen Wan",
      "address": "G/F, Commercial Centre, Phase II, Shek Yam Estate, Kwai Chung, New Territories",
      "address_zh": "新界葵涌石蔭邨第二期商業中心地下",
      "phone": "Contact for details",
      "email": "dnsy_ic@hk.skhlmc.org",
      "website": "lmcsy.edu.hk",
      "type": "Pre-nursery",
      "age_range": "2-6 years (Contact for Pre-Nursery programs, kindergarten programs available)",
      "session_types": ["Anglican church-based day nursery services"],
      "language": ["Cantonese", "English"],
      "fees": 2400,
      "rating": 4.1,
      "reviews": 27,
      "facilities": ["Hong Kong Sheng Kung Hui operated", "Shek Yam Estate location", "Community-based services"],
      "description": "Anglican church-based day nursery services at Shek Yam Estate, potential Pre-Nursery programs for 2-3 years."
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
  fees: 200000,
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
  console.log('Showing page:', pageId);
  
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
      console.log('Initializing search page...');
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
  console.log('Eastern institutions:', filtered.filter(inst => inst.district === 'Eastern').length);
  console.log('Wan Chai institutions:', filtered.filter(inst => inst.district === 'Wan Chai').length);
  console.log('Islands institutions:', filtered.filter(inst => inst.district === 'Islands').length); // Added for Islands fix
  
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
    console.log('Filtering by types:', activeFilters.types);
    console.log('Before type filter:', filtered.length, 'institutions');
    console.log('Available types:', [...new Set(filtered.map(inst => inst.type))]);
    filtered = filtered.filter(inst => activeFilters.types.includes(inst.type));
    console.log('After type filter:', filtered.length, 'institutions');
    console.log('Filtered institutions by type:', filtered.map(inst => inst.name_en));
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
  console.log('Initializing search page...');
  
  // Populate district filter
  const districtFilter = document.getElementById('district-filter');
  if (districtFilter && districtFilter.children.length <= 1) {
    console.log('Populating district filter with:', appData.districts);
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
  console.log('Initial search results:', searchResults.length, 'institutions');
  displaySearchResults();
  updateResultsCount();
}

function setupFilterEventListeners() {
  // District filter
  const districtFilter = document.getElementById('district-filter');
  if (districtFilter) {
    districtFilter.addEventListener('change', (e) => {
      console.log('District filter changed:', e.target.value);
      activeFilters.district = e.target.value;
      console.log('Updated activeFilters.district:', activeFilters.district);
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
  console.log('Checkbox changed:', value, 'checked:', e.target.checked);
  
  if (['Playgroup', 'Pre-nursery'].includes(value)) {
    if (e.target.checked) {
      if (!activeFilters.types.includes(value)) {
        activeFilters.types.push(value);
      }
    } else {
      activeFilters.types = activeFilters.types.filter(t => t !== value);
    }
    console.log('Updated activeFilters.types:', activeFilters.types);
  } else if (['English', 'Cantonese', 'Mandarin', 'Trilingual'].includes(value)) {
    if (e.target.checked) {
      if (!activeFilters.languages.includes(value)) {
        activeFilters.languages.push(value);
      }
    } else {
      activeFilters.languages = activeFilters.languages.filter(l => l !== value);
    }
    console.log('Updated activeFilters.languages:', activeFilters.languages);
  }
  applyFilters();
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, testing data...');
  
  // Test data integrity
  console.log('Total institutions:', appData.institutions.length);
  console.log('North district institutions:', appData.institutions.filter(inst => inst.district === 'North').length);
  console.log('Pre-nursery institutions:', appData.institutions.filter(inst => inst.type === 'Pre-nursery').length);
  console.log('North district pre-nursery institutions:', appData.institutions.filter(inst => inst.district === 'North' && inst.type === 'Pre-nursery').length);
  
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
  
  // Test the search functionality
  setTimeout(() => {
    console.log('Testing search functionality...');
    
    // Test North district filter
    activeFilters.district = 'North';
    applyFilters();
    console.log('North district results:', searchResults.length);
    
    // Test Pre-nursery type filter
    activeFilters.types = ['Pre-nursery'];
    applyFilters();
    console.log('Pre-nursery results:', searchResults.length);
    
    // Test combined filter
    activeFilters.district = 'North';
    activeFilters.types = ['Pre-nursery'];
    applyFilters();
    console.log('North district + Pre-nursery results:', searchResults.length);
    
    // Reset filters
    activeFilters.district = '';
    activeFilters.types = [];
    applyFilters();
  }, 1000);
});

// Test function for North Pre-nursery
function testNorthPreNursery() {
  console.log('Testing North Pre-nursery manually...');
  
  // Navigate to search page
  showPage('search');
  
  // Wait a bit for the page to initialize
  setTimeout(() => {
    // Set the filters
    activeFilters.district = 'North';
    activeFilters.types = ['Pre-nursery'];
    
    // Update the UI to reflect the filters
    const districtFilter = document.getElementById('district-filter');
    if (districtFilter) {
      districtFilter.value = 'North';
    }
    
    // Update checkboxes
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
      if (checkbox.value === 'Pre-nursery') {
        checkbox.checked = true;
      }
    });
    
    // Apply filters
    applyFilters();
    
    console.log('Manual test completed. Results:', searchResults.length);
  }, 500);
}

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
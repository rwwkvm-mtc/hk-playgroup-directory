-- Hong Kong Playgroup and Pre-Nursery Database Schema
-- Generated automatically

CREATE TABLE institutions (
  institution_id INTEGER PRIMARY KEY AUTO_INCREMENT,
  school_no VARCHAR(10) UNIQUE,
  institution_name_en VARCHAR(255) NOT NULL,
  institution_name_zh VARCHAR(255) NOT NULL,
  institution_type ENUM NOT NULL,
  category ENUM NOT NULL,
  joining_kg_education_scheme BOOLEAN DEFAULT False,
  district ENUM NOT NULL,
  address_en TEXT NOT NULL,
  address_zh TEXT NOT NULL,
  latitude DECIMAL(10,8),
  longitude DECIMAL(11,8),
  phone VARCHAR(20),
  fax VARCHAR(20),
  email VARCHAR(255),
  website VARCHAR(255),
  established_year INTEGER,
  registration_status ENUM,
  registration_date DATE,
  curriculum_type ENUM,
  is_active BOOLEAN DEFAULT True,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE programs (
  program_id INTEGER PRIMARY KEY AUTO_INCREMENT,
  institution_id INTEGER NOT NULL,
  program_name_en VARCHAR(255) NOT NULL,
  program_name_zh VARCHAR(255) NOT NULL,
  program_type ENUM,
  age_group_min INTEGER,
  age_group_max INTEGER,
  session_type ENUM,
  language_medium SET,
  class_size INTEGER,
  teacher_student_ratio VARCHAR(10),
  fees_per_month DECIMAL(10,2),
  fees_per_annum DECIMAL(10,2),
  application_fee DECIMAL(10,2),
  registration_fee DECIMAL(10,2),
  meal_service BOOLEAN DEFAULT False,
  transport_service BOOLEAN DEFAULT False,
  special_needs_support BOOLEAN DEFAULT False,
  non_chinese_speaking_support BOOLEAN DEFAULT False,
  is_active BOOLEAN DEFAULT True
);

CREATE TABLE facilities (
  facility_id INTEGER PRIMARY KEY AUTO_INCREMENT,
  institution_id INTEGER NOT NULL,
  facility_type ENUM,
  facility_name VARCHAR(255),
  capacity INTEGER,
  area_sqm DECIMAL(10,2),
  description_en TEXT,
  description_zh TEXT
);

CREATE TABLE staff (
  staff_id INTEGER PRIMARY KEY AUTO_INCREMENT,
  institution_id INTEGER NOT NULL,
  staff_name_en VARCHAR(255) NOT NULL,
  staff_name_zh VARCHAR(255),
  position ENUM,
  qualifications TEXT,
  experience_years INTEGER,
  languages SET,
  specializations TEXT,
  is_active BOOLEAN DEFAULT True
);

CREATE TABLE applications (
  application_id INTEGER PRIMARY KEY AUTO_INCREMENT,
  institution_id INTEGER NOT NULL,
  program_id INTEGER NOT NULL,
  child_name_en VARCHAR(255) NOT NULL,
  child_name_zh VARCHAR(255),
  child_dob DATE NOT NULL,
  child_gender ENUM,
  parent_name VARCHAR(255) NOT NULL,
  parent_phone VARCHAR(20) NOT NULL,
  parent_email VARCHAR(255) NOT NULL,
  address TEXT,
  preferred_start_date DATE,
  application_status ENUM DEFAULT submitted,
  notes TEXT,
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE reviews (
  review_id INTEGER PRIMARY KEY AUTO_INCREMENT,
  institution_id INTEGER NOT NULL,
  parent_name VARCHAR(255),
  parent_email VARCHAR(255),
  rating INTEGER NOT NULL,
  title VARCHAR(255),
  review_text TEXT,
  is_verified BOOLEAN DEFAULT False,
  is_published BOOLEAN DEFAULT False,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE districts (
  district_id INTEGER PRIMARY KEY AUTO_INCREMENT,
  district_code VARCHAR(10) UNIQUE,
  district_name_en VARCHAR(100) NOT NULL,
  district_name_zh VARCHAR(100) NOT NULL,
  region ENUM,
  area_sqkm DECIMAL(10,2),
  population INTEGER
);

CREATE TABLE search_logs (
  log_id INTEGER PRIMARY KEY AUTO_INCREMENT,
  search_query VARCHAR(500),
  filters_applied JSON,
  results_count INTEGER,
  user_ip VARCHAR(45),
  user_agent TEXT,
  search_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE admins (
  admin_id INTEGER PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role ENUM,
  is_active BOOLEAN DEFAULT True,
  last_login TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


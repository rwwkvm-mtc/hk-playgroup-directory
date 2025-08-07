// Data Validation Script for HK Playgroup Directory
// This script checks for potential data quality issues

const fs = require('fs');

// Load the data
const data = JSON.parse(fs.readFileSync('assets/sample_data.json', 'utf8'));

console.log('🔍 DATA VALIDATION REPORT');
console.log('========================\n');

// 1. Basic Statistics
console.log('📊 BASIC STATISTICS:');
console.log(`Total Institutions: ${data.institutions.length}`);
console.log(`Total Programs: ${data.programs.length}`);

// 2. Check for missing required fields
console.log('\n❌ MISSING REQUIRED FIELDS:');
const requiredFields = ['institution_name_en', 'institution_name_zh', 'phone', 'email', 'address_en', 'address_zh', 'fees'];
let missingFieldsCount = 0;

data.institutions.forEach((inst, index) => {
  const missing = requiredFields.filter(field => !inst[field]);
  if (missing.length > 0) {
    console.log(`Institution ${index + 1} (${inst.institution_name_en}): Missing ${missing.join(', ')}`);
    missingFieldsCount++;
  }
});

if (missingFieldsCount === 0) {
  console.log('✅ All required fields are present');
}

// 3. Check for suspicious data patterns
console.log('\n⚠️  SUSPICIOUS DATA PATTERNS:');

// Check for duplicate phone numbers
const phoneNumbers = data.institutions.map(inst => inst.phone).filter(Boolean);
const duplicatePhones = phoneNumbers.filter((phone, index) => phoneNumbers.indexOf(phone) !== index);
if (duplicatePhones.length > 0) {
  console.log(`Duplicate phone numbers found: ${[...new Set(duplicatePhones)].join(', ')}`);
}

// Check for duplicate emails
const emails = data.institutions.map(inst => inst.email).filter(Boolean);
const duplicateEmails = emails.filter((email, index) => emails.indexOf(email) !== index);
if (duplicateEmails.length > 0) {
  console.log(`Duplicate email addresses found: ${[...new Set(duplicateEmails)].join(', ')}`);
}

// Check for suspicious fees (0 or very high)
const suspiciousFees = data.institutions.filter(inst => inst.fees === 0 || inst.fees > 50000);
if (suspiciousFees.length > 0) {
  console.log(`Institutions with suspicious fees (0 or >$50,000):`);
  suspiciousFees.forEach(inst => {
    console.log(`  - ${inst.institution_name_en}: $${inst.fees}`);
  });
}

// 4. Check for realistic contact information
console.log('\n📞 CONTACT INFORMATION ANALYSIS:');

// Check phone number format (should be 8 digits)
const invalidPhones = data.institutions.filter(inst => {
  if (!inst.phone) return false;
  const cleanPhone = inst.phone.replace(/[^0-9]/g, '');
  return cleanPhone.length !== 8;
});

if (invalidPhones.length > 0) {
  console.log('Phone numbers that don\'t follow HK format (8 digits):');
  invalidPhones.forEach(inst => {
    console.log(`  - ${inst.institution_name_en}: ${inst.phone}`);
  });
}

// Check email format
const invalidEmails = data.institutions.filter(inst => {
  if (!inst.email) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return !emailRegex.test(inst.email);
});

if (invalidEmails.length > 0) {
  console.log('Invalid email formats:');
  invalidEmails.forEach(inst => {
    console.log(`  - ${inst.institution_name_en}: ${inst.email}`);
  });
}

// 5. Check for address issues
console.log('\n📍 ADDRESS ANALYSIS:');

// Check for generic/vague addresses
const vagueAddresses = data.institutions.filter(inst => {
  if (!inst.address_en) return false;
  const vagueKeywords = ['various', 'contact for details', 'multiple', 'different'];
  return vagueKeywords.some(keyword => inst.address_en.toLowerCase().includes(keyword));
});

if (vagueAddresses.length > 0) {
  console.log('Institutions with vague addresses (need verification):');
  vagueAddresses.forEach(inst => {
    console.log(`  - ${inst.institution_name_en}: ${inst.address_en}`);
  });
}

// 6. Check for Yuen Long institutions specifically
console.log('\n🏫 YUEN LONG INSTITUTIONS CHECK:');
const yuenLongInstitutions = data.institutions.filter(inst => inst.district === 'Yuen_Long');
console.log(`Yuen Long institutions found: ${yuenLongInstitutions.length}`);

if (yuenLongInstitutions.length > 0) {
  console.log('Yuen Long institutions:');
  yuenLongInstitutions.forEach(inst => {
    console.log(`  - ${inst.institution_name_en}`);
    console.log(`    Phone: ${inst.phone}`);
    console.log(`    Email: ${inst.email}`);
    console.log(`    Fee: $${inst.fees}`);
    console.log(`    Address: ${inst.address_en}`);
    console.log('');
  });
}

// 7. Summary
console.log('\n📋 SUMMARY:');
console.log(`Total issues found: ${missingFieldsCount + duplicatePhones.length + duplicateEmails.length + suspiciousFees.length + invalidPhones.length + invalidEmails.length + vagueAddresses.length}`);

if (missingFieldsCount + duplicatePhones.length + duplicateEmails.length + suspiciousFees.length + invalidPhones.length + invalidEmails.length + vagueAddresses.length === 0) {
  console.log('✅ No major data quality issues detected!');
} else {
  console.log('⚠️  Please review the issues above before publishing.');
}

console.log('\n💡 RECOMMENDATIONS:');
console.log('1. Verify all phone numbers are current and correct');
console.log('2. Confirm email addresses are active');
console.log('3. Check that addresses are accurate and complete');
console.log('4. Verify monthly fees are up-to-date');
console.log('5. Test Google Maps links for address accuracy'); 
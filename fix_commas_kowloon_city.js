const fs = require('fs');

// Read the app.js file
let appJsContent = fs.readFileSync('app.js', 'utf8');

// Fix missing commas after email fields before whatsapp fields
appJsContent = appJsContent.replace(/"email":\s*"[^"]*"\s*\n\s*"whatsapp":/g, (match) => {
  return match.replace(/"email":\s*"[^"]*"/, '$&,');
});

// Write the fixed content back to app.js
fs.writeFileSync('app.js', appJsContent, 'utf8');
console.log('✅ Fixed missing commas in app.js'); 
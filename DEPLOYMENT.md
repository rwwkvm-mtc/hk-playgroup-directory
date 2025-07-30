# Deployment Guide

This guide covers various deployment options for the Hong Kong Playgroup Directory website.

## 🚀 Quick Start (Static Hosting)

### Option 1: GitHub Pages (Recommended for Demo)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/hk-playgroup-directory.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Save and wait for deployment

3. **Access your site**
   - Your site will be available at: `https://yourusername.github.io/hk-playgroup-directory`

### Option 2: Netlify (Free Hosting)

1. **Deploy via Netlify UI**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop your project folder
   - Site will be deployed instantly

2. **Deploy via Git**
   - Connect your GitHub repository
   - Netlify will auto-deploy on every push
   - Custom domain support available

### Option 3: Vercel (Free Hosting)

1. **Deploy via Vercel CLI**
   ```bash
   npm i -g vercel
   vercel
   ```

2. **Deploy via Git**
   - Connect your GitHub repository
   - Vercel will auto-deploy on every push
   - Excellent performance and CDN

## 🌐 Production Deployment

### Option 1: AWS S3 + CloudFront

1. **Create S3 Bucket**
   ```bash
   aws s3 mb s3://your-bucket-name
   aws s3 website s3://your-bucket-name --index-document index.html
   ```

2. **Upload Files**
   ```bash
   aws s3 sync . s3://your-bucket-name --exclude "*.git*" --exclude "node_modules/*"
   ```

3. **Configure CloudFront**
   - Create CloudFront distribution
   - Point to S3 bucket
   - Configure custom domain (optional)

### Option 2: Google Cloud Storage

1. **Create Bucket**
   ```bash
   gsutil mb gs://your-bucket-name
   gsutil web set -m index.html gs://your-bucket-name
   ```

2. **Upload Files**
   ```bash
   gsutil -m rsync -r . gs://your-bucket-name
   ```

### Option 3: Azure Blob Storage

1. **Create Storage Account**
   ```bash
   az storage account create --name yourstorageaccount --resource-group your-rg --location eastus --sku Standard_LRS
   ```

2. **Upload Files**
   ```bash
   az storage blob upload-batch --account-name yourstorageaccount --source . --destination '$web'
   ```

## 🔧 Local Development Server

### Using Python
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

### Using Node.js
```bash
# Install serve globally
npm install -g serve

# Serve the current directory
serve .

# Or with specific port
serve . -p 3000
```

### Using PHP
```bash
php -S localhost:8000
```

### Using Live Server (VS Code Extension)
1. Install "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

## 📱 Mobile Testing

### Chrome DevTools
1. Open Chrome DevTools (F12)
2. Click the device icon
3. Select a mobile device
4. Test responsive design

### Real Device Testing
1. Deploy to a public URL
2. Test on actual mobile devices
3. Check different screen sizes

## 🔒 HTTPS Configuration

### GitHub Pages
- HTTPS is enabled by default
- No additional configuration needed

### Netlify/Vercel
- HTTPS is enabled by default
- Automatic SSL certificates

### Custom Domain
1. Purchase domain (e.g., hkplaygroups.com)
2. Configure DNS records
3. Enable HTTPS in hosting provider

## 📊 Performance Optimization

### Before Deployment
1. **Minify CSS and JS**
   ```bash
   # Install minification tools
   npm install -g clean-css-cli uglify-js

   # Minify CSS
   cleancss -o style.min.css style.css

   # Minify JS
   uglifyjs app.js -o app.min.js
   ```

2. **Optimize Images**
   - Compress PNG/JPG files
   - Use WebP format where possible
   - Implement lazy loading

3. **Enable Compression**
   - Configure gzip compression
   - Enable Brotli compression

### Performance Monitoring
- **Google PageSpeed Insights**
- **Lighthouse** (Chrome DevTools)
- **WebPageTest**

## 🚨 Security Considerations

### Content Security Policy
Add to your HTML:
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' cdnjs.cloudflare.com; font-src cdnjs.cloudflare.com;">
```

### HTTPS Only
- Force HTTPS redirects
- Use HSTS headers
- Secure cookies

### Input Validation
- Validate all form inputs
- Sanitize user data
- Prevent XSS attacks

## 🔄 Continuous Deployment

### GitHub Actions
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: .
```

### Netlify/Vercel
- Automatic deployment on git push
- Preview deployments for pull requests
- Rollback capabilities

## 📈 Analytics Setup

### Google Analytics
1. Create Google Analytics account
2. Add tracking code to HTML
3. Configure goals and events

### Other Options
- **Plausible Analytics** (Privacy-focused)
- **Fathom Analytics** (Privacy-focused)
- **Mixpanel** (Event tracking)

## 🆘 Troubleshooting

### Common Issues

1. **CORS Errors**
   - Ensure proper server configuration
   - Check file paths

2. **404 Errors**
   - Verify file paths
   - Check server configuration

3. **Performance Issues**
   - Optimize images
   - Minify CSS/JS
   - Enable compression

4. **Mobile Issues**
   - Test responsive design
   - Check viewport meta tag
   - Verify touch targets

### Support
- Check browser console for errors
- Test in multiple browsers
- Validate HTML/CSS
- Use developer tools for debugging

---

**Need Help?** Create an issue in the GitHub repository or contact the development team. 
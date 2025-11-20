# Deployment Guide

## 🚀 Deploy to Vercel (Recommended)

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. **Framework Preset**: Select "Vite"
5. **Root Directory**: Leave as default (.)
6. **Environment Variables** (if using Telegram):
   - `VITE_TELEGRAM_BOT_TOKEN`: Your bot token
   - `VITE_TELEGRAM_CHAT_ID`: Your chat ID
7. Click "Deploy"

Done! Your portfolio is live. Vercel provides a URL (e.g., `portfolio-xyz.vercel.app`)

### Custom Domain

1. In Vercel dashboard, go to Settings → Domains
2. Add your custom domain (e.g., yourname.com)
3. Follow DNS instructions
4. Wait for DNS propagation (usually 24-48 hours)

---

## 🌐 Deploy to Netlify

### Step 1: Connect Repository

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Select GitHub and authorize
4. Choose your repository

### Step 2: Configure Build

- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Environment Variables**:
  - `VITE_TELEGRAM_BOT_TOKEN`
  - `VITE_TELEGRAM_CHAT_ID`

### Step 3: Deploy

Click "Deploy site" and wait for build to complete.

---

## 💾 Deploy to GitHub Pages

### Step 1: Update `vite.config.ts`

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/', // or '/portfolio' if deploying to subdirectory
})
```

### Step 2: Build and Deploy

```bash
npm run build
```

### Step 3: Push to GitHub

```bash
git add dist/
git commit -m "Deploy to GitHub Pages"
git push origin main
```

### Step 4: Enable GitHub Pages

1. Go to repository Settings
2. Scroll to "Pages" section
3. Select "Publish from branch"
4. Choose "main" branch → `/docs` (if using docs folder)
5. Save

Your site is live at `https://YOUR_USERNAME.github.io/portfolio`

---

## 🖥️ Deploy to Your Own Server

### Prerequisites

- Node.js 16+ and npm installed
- SSH access to server
- Domain pointing to server

### Step 1: Build Project

```bash
npm run build
```

### Step 2: Upload

Upload the `dist` folder to your server:

```bash
# Using SCP
scp -r dist/* user@yourserver.com:/var/www/portfolio

# Or using FTP/SFTP client
```

### Step 3: Configure Web Server

**For Nginx:**

```nginx
server {
    listen 80;
    server_name yourname.com www.yourname.com;
    
    root /var/www/portfolio;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # HTTPS redirect
    if ($scheme != "https") {
        return 301 https://$server_name$request_uri;
    }
}
```

**For Apache:**

```apache
<Directory /var/www/portfolio>
    Options Indexes FollowSymLinks
    AllowOverride All
    Require all granted
    
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
</Directory>
```

### Step 4: SSL Certificate (HTTPS)

```bash
# Using Let's Encrypt with Certbot
sudo certbot certonly --webroot -w /var/www/portfolio -d yourname.com -d www.yourname.com
```

### Step 5: Restart Web Server

```bash
sudo systemctl restart nginx
# or
sudo systemctl restart apache2
```

---

## 🔄 CI/CD Pipeline

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - run: npm ci
      - run: npm run build
      
      - name: Deploy to Vercel
        run: npm i -g vercel && vercel --prod --token ${{ secrets.VERCEL_TOKEN }}
```

---

## 📊 Environment Variables by Platform

### Vercel
Set in Project Settings → Environment Variables

### Netlify
Set in Site Settings → Build & Deploy → Environment

### GitHub Pages
- Cannot use environment variables (static hosting)
- For Telegram, configure before deployment

---

## 🔍 Post-Deployment Checklist

- [ ] Website loads without errors
- [ ] All links work (internal and external)
- [ ] Contact form functions
- [ ] Images/assets display correctly
- [ ] Responsive design works on mobile
- [ ] Performance metrics acceptable
- [ ] SSL certificate valid (HTTPS)
- [ ] SEO tags present
- [ ] Analytics tracking (if configured)

---

## 📈 Performance Optimization

### For Production Build

1. **Minification**: Vite does this automatically
2. **Code Splitting**: Vite handles this
3. **Image Optimization**: Compress images manually
4. **Caching**: Vercel/Netlify cache headers by default

### Check Lighthouse Score

```bash
npm run build
npm run preview
# Open DevTools → Lighthouse tab
```

Target: 95+ score

---

## 🚨 Troubleshooting

### Build Fails
- Check `npm run build` locally
- Ensure all environment variables are set
- Check Node.js version (16+)

### Site Shows "Not Found"
- Verify build output in `dist/` folder
- Check web server configuration
- Ensure `index.html` exists in root

### Contact Form Doesn't Work
- Verify Telegram credentials in environment
- Check browser console for errors
- Test with incorrect email to verify validation

### Slow Loading
- Optimize images
- Check network requests in DevTools
- Enable gzip compression on server
- Use CDN for static assets

---

## 📞 Support

For deployment issues:
- Check platform documentation
- Review browser console errors
- Test locally with `npm run preview`
- Check platform status page

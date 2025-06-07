# 🚀 Deployment Guide - Rohit Mandavkar's Portfolio

This guide will help you deploy your portfolio to various hosting platforms.

## 📋 Pre-Deployment Checklist

- [x] Build passes: `npm run build` ✅
- [x] Site configuration updated with your information
- [x] Social media links added: 
  - [x] GitHub: https://github.com/Rohit-48
  - [x] LinkedIn: https://www.linkedin.com/in/rohit48/
  - [x] X (Twitter): https://x.com/rohitcpp
- [x] Domain configured: rohitai.in
- [x] Production-ready configurations added

## 🎯 Recommended Deployment Platform: Vercel

### Why Vercel?
- **Perfect for Next.js**: Built by the creators of Next.js
- **Zero Configuration**: Deploy directly from GitHub
- **Automatic HTTPS**: Free SSL certificates
- **Edge Network**: Global CDN for fast loading
- **Free Tier**: Perfect for personal portfolios

### 🔧 Vercel Deployment Steps

#### 1. Prepare Your Repository
```bash
# If not already a git repository
git init
git add .
git commit -m "Initial portfolio setup"

# Push to GitHub (create new repository at github.com/Rohit-48/enhanced-portfolio)
git remote add origin https://github.com/Rohit-48/enhanced-portfolio.git
git branch -M main
git push -u origin main
```

#### 2. Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Sign in with your GitHub account
3. Click "New Project"
4. Import your repository: `Rohit-48/enhanced-portfolio`
5. Configure project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

#### 3. Environment Variables (Optional)
Add these in Vercel dashboard under "Settings" → "Environment Variables":
```
NEXT_PUBLIC_SITE_URL=https://your-vercel-domain.vercel.app
NEXT_PUBLIC_GA_ID=your-google-analytics-id (if you have one)
```

#### 4. Custom Domain Setup
1. In Vercel dashboard, go to "Settings" → "Domains"
2. Add your domain: `rohitai.in`
3. Configure DNS records at your domain provider:
   - Add CNAME record: `www` → `cname.vercel-dns.com`
   - Add A record: `@` → `76.76.19.61`

### 🔄 Automatic Deployments
- Every push to `main` branch automatically deploys
- Pull requests create preview deployments
- GitHub Actions will run quality checks

---

## 🌐 Alternative: Netlify

### Netlify Deployment Steps

#### 1. Build Command Configuration
Your `netlify.toml` is already configured for deployment.

#### 2. Deploy via Git
1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click "New site from Git"
4. Choose GitHub and select `Rohit-48/enhanced-portfolio`
5. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`

#### 3. Environment Variables
In Netlify dashboard under "Site settings" → "Environment variables":
```
NEXT_PUBLIC_SITE_URL=https://your-site.netlify.app
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

---

## 🐳 Docker Deployment

### For VPS or Cloud Servers

#### 1. Build Docker Image
```bash
docker build -t rohit-portfolio .
```

#### 2. Run Container
```bash
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_SITE_URL=https://rohitai.in \
  rohit-portfolio
```

#### 3. Using Docker Compose
```bash
docker-compose up -d
```

---

## 📊 SEO & Analytics Setup

### Google Analytics (Optional)
1. Create Google Analytics 4 property
2. Get your GA4 ID (starts with G-)
3. Add to environment variables:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

### Google Search Console
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property for `rohitai.in`
3. Verify ownership using HTML meta tag method
4. Add verification code to environment variables:
   ```
   GOOGLE_SITE_VERIFICATION=your-verification-code
   ```

### Performance Monitoring
Your site includes:
- ✅ Lighthouse CI in GitHub Actions
- ✅ Web Vitals monitoring
- ✅ Security headers
- ✅ SEO optimization
- ✅ PWA capabilities

---

## 🔒 Security Considerations

### Environment Variables
Never commit sensitive data to GitHub:
- Create `.env.local` for local development
- Use platform environment variables for production
- Keep `.env.example` updated with required variables

### HTTPS
All recommended platforms provide automatic HTTPS:
- ✅ Vercel: Automatic SSL
- ✅ Netlify: Automatic SSL
- ⚠️ Custom servers: Use Let's Encrypt

---

## 📈 Post-Deployment Steps

### 1. Test Your Deployment
- [ ] Check all pages load correctly
- [ ] Verify social media links work
- [ ] Test mobile responsiveness
- [ ] Check blog posts render properly
- [ ] Verify contact information is correct

### 2. Submit to Search Engines
```bash
# Your sitemap is automatically generated at:
https://rohitai.in/sitemap.xml

# Submit to:
# - Google Search Console
# - Bing Webmaster Tools
```

### 3. Social Media Setup
Update your social profiles with your new portfolio URL:
- [x] GitHub: Add to bio and pinned repository
- [x] LinkedIn: Add to contact info
- [x] X (Twitter): Add to bio

### 4. Monitor Performance
- Set up Google Analytics (optional)
- Monitor Core Web Vitals
- Check Lighthouse scores regularly

---

## 🔧 Troubleshooting

### Build Failures
```bash
# Clear cache and rebuild
npm run clean
npm run build

# Check for TypeScript errors
npm run type-check

# Check for linting issues
npm run lint
```

### Domain Issues
- DNS changes can take 24-48 hours to propagate
- Use DNS checker tools to verify configuration
- Ensure CNAME/A records point to correct values

### Performance Issues
- Check Lighthouse report
- Optimize images (use WebP format)
- Review bundle size with `npm run analyze`

---

## 📞 Getting Help

### Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)

### Community
- [Next.js Discord](https://discord.gg/nextjs)
- [Vercel Discord](https://discord.gg/vercel)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/next.js)

---

## 🎉 You're Ready to Deploy!

Your portfolio is now production-ready with:

✅ **Performance Optimized**: Fast loading, SEO-friendly  
✅ **Mobile Responsive**: Works perfectly on all devices  
✅ **Secure**: HTTPS, security headers, best practices  
✅ **Professional**: Clean design, proper metadata  
✅ **Maintainable**: Easy to update content and projects  

**Recommended deployment**: Start with **Vercel** for the easiest experience.

Good luck with your portfolio! 🚀 
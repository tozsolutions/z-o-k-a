# Z-O-K-A Deployment Guide

## Production Deployment

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Web server (Nginx, Apache, or static hosting)

### Build for Production

```bash
# Install dependencies
npm install

# Build optimized production bundle
npm run build

# The built files will be in the 'dist' directory
```

### Environment Configuration

1. Copy `.env.production` to `.env` and configure:
   - `VITE_ANALYTICS_ID`: Your Google Analytics ID
   - `VITE_SENTRY_DSN`: Your Sentry error tracking DSN
   - Update other production settings as needed

### Static Hosting (Recommended)

Deploy the `dist` folder to any static hosting service:

#### Netlify
```bash
# Build and deploy
npm run build
# Upload dist folder to Netlify or connect Git repo
```

#### Vercel
```bash
# Using Vercel CLI
npm install -g vercel
vercel --prod
```

#### GitHub Pages
```bash
# Build and push to gh-pages branch
npm run build
# Use github-pages action or manual deployment
```

### Server Configuration

#### Nginx Configuration
```nginx
server {
    listen 80;
    server_name your-domain.com;
    
    root /path/to/dist;
    index index.html;
    
    # Handle SPA routing
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-Content-Type-Options "nosniff";
    add_header X-XSS-Protection "1; mode=block";
}
```

#### Apache Configuration (.htaccess)
```apache
RewriteEngine On
RewriteBase /

# Handle SPA routing
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Cache static assets
<FilesMatch "\.(js|css|png|jpg|jpeg|gif|ico|svg)$">
    Header set Cache-Control "public, max-age=31536000"
</FilesMatch>
```

### Performance Optimizations

1. **Enable Gzip Compression**
   - Configure your web server to compress static assets
   - Reduces bundle size by ~70%

2. **CDN Integration**
   - Use a CDN to serve static assets globally
   - Improves loading times worldwide

3. **HTTPS Configuration**
   - Enable SSL/TLS for security
   - Required for PWA features

### Monitoring and Analytics

1. **Google Analytics**
   - Set `VITE_ANALYTICS_ID` in production environment
   - Track user engagement and game completion rates

2. **Error Monitoring**
   - Configure Sentry for error tracking
   - Set `VITE_SENTRY_DSN` in production environment

3. **Performance Monitoring**
   - Use Lighthouse for performance audits
   - Monitor Core Web Vitals

### Security Considerations

1. **Content Security Policy**
   - Already configured in index.html
   - Review and adjust as needed

2. **HTTPS Only**
   - Ensure all traffic uses HTTPS
   - Required for PWA installation

3. **Environment Variables**
   - Never commit `.env` files with secrets
   - Use hosting platform's environment variable system

### Post-Deployment Checklist

- [ ] Test all game functionality
- [ ] Verify PWA installation works
- [ ] Check responsive design on mobile
- [ ] Test offline functionality
- [ ] Verify analytics tracking
- [ ] Test error reporting
- [ ] Check page load performance
- [ ] Verify SEO meta tags
- [ ] Test social media sharing

### Maintenance

- Regularly update dependencies
- Monitor error logs
- Review analytics for user behavior
- Update content based on feedback
- Keep security patches current
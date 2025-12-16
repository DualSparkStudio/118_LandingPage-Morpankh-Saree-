# Morpankh Saree - Premium Landing Page

A luxury, conversion-focused landing page for Morpankh Saree, an Indian saree brand. Built with React, Vite, GSAP, and modern web technologies.

## 🚀 Features

- **Premium Design**: Royal, graceful, and feminine aesthetic
- **Smooth Animations**: GSAP ScrollTrigger, Lenis smooth scroll
- **Mobile-First**: Fully responsive design
- **WhatsApp Integration**: Direct click-to-chat functionality
- **Performance Optimized**: Fast loading, lazy-loaded images
- **SEO Ready**: Meta tags and Open Graph support

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: CSS Modules (NO Tailwind)
- **Animations**: GSAP + ScrollTrigger, Framer Motion, AOS.js
- **Smooth Scroll**: Lenis
- **Images**: WebP format, lazy-loaded

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## 🌐 GitHub Pages Deployment

### Option 1: Automatic Deployment (Recommended)

1. Push your code to GitHub
2. The GitHub Actions workflow will automatically build and deploy to GitHub Pages
3. Make sure your repository name matches the base path in `vite.config.js`

### Option 2: Manual Deployment

1. Update the base path in `vite.config.js`:
```javascript
base: '/your-repo-name/'
```

2. Build the project:
```bash
npm run build
```

3. Deploy the `dist` folder to the `gh-pages` branch:
```bash
npm install -g gh-pages
gh-pages -d dist
```

### Setting Base Path

For GitHub Pages, you need to set the base path to match your repository name:

1. Create a `.env` file in the root:
```
VITE_BASE_PATH=/your-repo-name/
```

2. Or update `vite.config.js` directly:
```javascript
base: '/your-repo-name/'
```

**Important**: Replace `your-repo-name` with your actual GitHub repository name.

## 🎨 Brand Colors

- **Primary**: Peacock Blue / Deep Teal (#0a4d68, #088395, #05bfdb)
- **Accent**: Gold / Champagne (#d4af37, #f5e6d3)
- **Neutral**: Off-white / Ivory (#faf8f3, #fffef9)
- **Text**: Soft Black (#111111)

## 📱 Sections

1. **Preloader** - Animated logo with percentage loader
2. **Hero** - Full-screen hero with CTAs
3. **Featured Collections** - Grid-based luxury cards
4. **Why Morpankh Saree** - Glassmorphism feature cards
5. **Best Sellers** - Horizontal scroll product slider
6. **Craftsmanship Story** - Parallax storytelling section
7. **Testimonials** - Animated customer reviews
8. **Instagram Gallery** - Auto-grid social feed
9. **CTA Section** - High-conversion call-to-action
10. **Footer** - Professional footer with social links

## 🔧 Configuration

### WhatsApp Integration

Update the WhatsApp number in:
- `src/components/Hero.jsx`
- `src/components/CTA.jsx`
- `src/components/FloatingWhatsApp.jsx`
- `src/components/Footer.jsx`

Replace `1234567890` with your actual WhatsApp number.

### Social Media Links

Update social media URLs in:
- `src/components/Footer.jsx`

### Contact Information

Update contact details in:
- `src/components/Footer.jsx`

### Images

Currently using Unsplash placeholder images. To use your own images:

1. Place images in `public/images/` directory
2. Update image paths in:
   - `src/components/FeaturedCollections.jsx`
   - `src/components/BestSellers.jsx`
   - `src/components/InstagramGallery.jsx`

## 🐛 Troubleshooting

### Blank Screen on GitHub Pages

If you see a blank screen after deployment:

1. Check that the `base` path in `vite.config.js` matches your repository name
2. Ensure all asset paths are relative (they should be automatically handled by Vite)
3. Check browser console for any 404 errors
4. Verify the `dist` folder was deployed correctly

### Images Not Loading

1. Check image URLs are correct
2. Ensure images are accessible (not blocked by CORS)
3. For local images, place them in `public/images/` and reference as `/images/filename.jpg`

## 📝 Notes

- Replace placeholder images with actual product photos
- Update Instagram API integration if using real feed
- Add actual video background to Hero section
- Configure analytics tracking
- Set up form handling if adding contact forms

## 📄 License

All rights reserved © 2024 Morpankh Saree

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
- `src/components/FeaturedCollections.jsx`
- `src/components/BestSellers.jsx`
- `src/components/CTA.jsx`
- `src/components/FloatingWhatsApp.jsx`
- `src/components/Footer.jsx`

Replace `1234567890` with your actual WhatsApp number.

### Social Media Links

Update social media URLs in:
- `src/components/InstagramGallery.jsx`
- `src/components/Footer.jsx`

### Contact Information

Update contact details in:
- `src/components/Footer.jsx`

## 🚀 Deployment

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure redirects for SPA routing (if needed)

### Vercel

1. Connect your repository to Vercel
2. Vercel will automatically detect Vite and configure build settings
3. Deploy!

## 📝 Notes

- Replace placeholder images in `/public/images/` with actual product photos
- Update Instagram API integration if using real feed
- Add actual video background to Hero section
- Configure analytics tracking
- Set up form handling if adding contact forms

## 📄 License

All rights reserved © 2024 Morpankh Saree


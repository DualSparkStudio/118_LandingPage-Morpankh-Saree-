# 🚀 Netlify Deployment Guide

## ✅ Fix Applied

The blank screen issue on Netlify has been fixed! The problem was:
- **Wrong base path**: Was set to `/118_LandingPage-Morpankh-Saree-/` (for GitHub Pages)
- **Solution**: Changed to `/` (root) for Netlify

## 📋 Netlify Configuration

The following files have been created/updated:

1. **`netlify.toml`** - Netlify build configuration
   - Sets `VITE_BASE_PATH="/"` for correct base path
   - Configures SPA redirects

2. **`public/_redirects`** - SPA routing support
   - Redirects all routes to `index.html` for React Router

3. **`vite.config.js`** - Updated to default to `/` instead of GitHub Pages path

## 🚀 Deploy to Netlify

### Option 1: Automatic Deployment (Recommended)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Fix Netlify deployment: Update base path to root"
   git push origin main
   ```

2. **Connect to Netlify**:
   - Go to [Netlify Dashboard](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Netlify will auto-detect `netlify.toml` settings

3. **Build Settings** (should auto-detect):
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Environment variables**: `VITE_BASE_PATH=/` (set automatically by netlify.toml)

4. **Deploy**: Click "Deploy site"

### Option 2: Manual Deployment (Netlify CLI)

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**:
   ```bash
   netlify login
   ```

3. **Build and Deploy**:
   ```bash
   npm run build
   netlify deploy --prod --dir=dist
   ```

### Option 3: Drag & Drop

1. **Build locally**:
   ```bash
   npm run build
   ```

2. **Deploy**:
   - Go to [Netlify Drop](https://app.netlify.com/drop)
   - Drag and drop the `dist` folder

## ✅ Verification

After deployment:

1. **Visit your Netlify site** - Should display correctly (no blank screen)
2. **Check browser console** (F12) - No MIME type errors
3. **Test navigation** - All routes should work
4. **Check Network tab** - Assets should load from `/assets/...`

## 🔧 Netlify Settings

In Netlify Dashboard → Site settings → Build & deploy:

- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Environment variables**: 
  - `VITE_BASE_PATH` = `/` (optional, already set in netlify.toml)

## 🐛 Troubleshooting

### Still seeing blank screen?

1. **Clear Netlify cache**:
   - Netlify Dashboard → Deploys → Trigger deploy → Clear cache and deploy site

2. **Check build logs**:
   - Netlify Dashboard → Deploys → Click on latest deploy → View build log
   - Look for any errors

3. **Verify environment variable**:
   - Netlify Dashboard → Site settings → Environment variables
   - Ensure `VITE_BASE_PATH` is set to `/` (or remove it, netlify.toml handles it)

4. **Check browser console**:
   - Open DevTools (F12) → Console tab
   - Look for 404 errors or MIME type errors
   - Check Network tab for failed requests

5. **Rebuild**:
   - Netlify Dashboard → Deploys → Trigger deploy

## 📝 Important Notes

- **Base Path**: Now defaults to `/` (root) for Netlify
- **GitHub Pages**: If you want to deploy to GitHub Pages, set `VITE_BASE_PATH=/118_LandingPage-Morpankh-Saree-/` in GitHub Actions
- **Both Platforms**: You can deploy to both Netlify and GitHub Pages by using environment variables

## 🎯 Next Steps

1. Deploy to Netlify using one of the methods above
2. Wait for build to complete (usually 1-2 minutes)
3. Visit your Netlify site - it should work perfectly!

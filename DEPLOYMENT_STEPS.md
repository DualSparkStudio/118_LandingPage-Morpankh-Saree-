# GitHub Pages Deployment - Step by Step

## Your Repository URL
**https://dualsparkstudio.github.io/118_LandingPage-Morpankh-Saree-/**

## Quick Deployment Steps

### Method 1: Using gh-pages (Recommended)

1. **Install gh-pages** (if not already installed):
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Build and Deploy**:
   ```bash
   npm run deploy
   ```

   This will:
   - Build your project (`npm run build`)
   - Deploy the `dist` folder to the `gh-pages` branch
   - Make your site live at the URL above

### Method 2: Manual Deployment

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Go to your GitHub repository**:
   - Navigate to: https://github.com/dualsparkstudio/118_LandingPage-Morpankh-Saree-

3. **Go to Settings → Pages**:
   - Source: Select "Deploy from a branch"
   - Branch: Select `gh-pages` (create it if it doesn't exist)
   - Folder: `/ (root)`
   - Click Save

4. **Push the dist folder to gh-pages branch**:
   ```bash
   # Install gh-pages if needed
   npm install --save-dev gh-pages
   
   # Deploy
   npx gh-pages -d dist
   ```

### Method 3: Using GitHub Actions (Automatic)

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`).

1. **Push your code to the main branch**:
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

2. **The workflow will automatically**:
   - Build your project
   - Deploy to GitHub Pages
   - Your site will be live in a few minutes

## Verify Deployment

After deployment, check:
1. **GitHub Pages is enabled**: Go to Settings → Pages
2. **gh-pages branch exists**: Check branches in your repo
3. **dist folder is in gh-pages branch**: Should contain index.html, assets/, etc.
4. **Visit your site**: https://dualsparkstudio.github.io/118_LandingPage-Morpankh-Saree-/

## Troubleshooting

### Blank Screen
- ✅ Base path is set to `/118_LandingPage-Morpankh-Saree-/` in `vite.config.js`
- ✅ Make sure you rebuilt after changing base path: `npm run build`
- ✅ Check browser console for 404 errors

### 404 Errors
- ✅ Ensure `public/404.html` is deployed (it should be copied to dist/)
- ✅ Check that all asset paths are relative

### Site Not Updating
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Wait 1-2 minutes for GitHub Pages to update
- Check the gh-pages branch has the latest files

## Important Notes

- **Base Path**: Already configured in `vite.config.js` as `/118_LandingPage-Morpankh-Saree-/`
- **Rebuild Required**: Always run `npm run build` before deploying
- **Branch**: GitHub Pages should serve from `gh-pages` branch, not `main`


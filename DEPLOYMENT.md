# GitHub Pages Deployment Guide

## Quick Fix for Blank Screen Issue

The blank screen on GitHub Pages is caused by incorrect base path configuration. Follow these steps:

### Step 1: Update Base Path

1. Find your GitHub repository name (e.g., `118_LandingPage-Morpankh-Saree-`)

2. Update `vite.config.js`:
   - Option A: Set directly in the file:
     ```javascript
     base: '/118_LandingPage-Morpankh-Saree-/',
     ```
   - Option B: Create a `.env` file:
     ```
     VITE_BASE_PATH=/118_LandingPage-Morpankh-Saree-/
     ```

### Step 2: Rebuild and Deploy

```bash
npm run build
```

Then deploy the `dist` folder to GitHub Pages.

### Step 3: Verify

After deployment, your site should be accessible at:
`https://yourusername.github.io/118_LandingPage-Morpankh-Saree-/`

## Automatic Deployment (Recommended)

The project includes a GitHub Actions workflow that automatically deploys on push to main/master branch.

1. Make sure your repository name is correct
2. Push your code to GitHub
3. The workflow will automatically build and deploy

## Manual Deployment

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json scripts:
```json
"deploy": "npm run build && gh-pages -d dist"
```

3. Deploy:
```bash
npm run deploy
```

## Troubleshooting

- **Blank screen**: Check that base path matches your repo name exactly
- **404 errors**: Ensure `public/404.html` is deployed
- **Assets not loading**: Verify base path includes trailing slash


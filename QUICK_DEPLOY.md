# 🚀 Quick Deploy to GitHub Pages

## Your Site URL
**https://dualsparkstudio.github.io/118_LandingPage-Morpankh-Saree-/**

## ⚡ Fastest Method (3 Steps)

### Step 1: Install gh-pages
```bash
npm install --save-dev gh-pages
```

### Step 2: Deploy
```bash
npm run deploy
```

### Step 3: Wait & Check
- Wait 1-2 minutes
- Visit: https://dualsparkstudio.github.io/118_LandingPage-Morpankh-Saree-/

---

## 🔍 If Site Still Shows Blank

### Check GitHub Pages Settings:
1. Go to: https://github.com/dualsparkstudio/118_LandingPage-Morpankh-Saree-/settings/pages
2. **Source**: Should be "Deploy from a branch"
3. **Branch**: Should be `gh-pages` (not main/master)
4. **Folder**: Should be `/ (root)`
5. Click **Save**

### Verify gh-pages Branch:
1. Go to: https://github.com/dualsparkstudio/118_LandingPage-Morpankh-Saree-/tree/gh-pages
2. Should see: `index.html`, `assets/`, `favicon.svg`, `404.html`

### If gh-pages Branch Doesn't Exist:
Run this command:
```bash
npm run deploy
```

This will create the branch and deploy automatically.

---

## 🛠️ Manual Method (If npm run deploy doesn't work)

```bash
# 1. Build
npm run build

# 2. Deploy manually
npx gh-pages -d dist
```

---

## ✅ Verification Checklist

- [ ] `vite.config.js` has base: `/118_LandingPage-Morpankh-Saree-/`
- [ ] Ran `npm run build` successfully
- [ ] `dist` folder contains `index.html` and `assets/`
- [ ] `gh-pages` branch exists in GitHub
- [ ] GitHub Pages is enabled in Settings → Pages
- [ ] Source branch is set to `gh-pages`
- [ ] Waited 1-2 minutes after deployment

---

## 🐛 Still Not Working?

1. **Clear browser cache**: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
2. **Check browser console**: F12 → Console tab for errors
3. **Check Network tab**: F12 → Network tab, look for 404 errors
4. **Try incognito/private window**: To rule out cache issues

---

## 📝 Notes

- The base path is already configured correctly
- All assets should load from `/118_LandingPage-Morpankh-Saree-/assets/`
- The 404.html file handles SPA routing


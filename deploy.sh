#!/bin/bash

# GitHub Pages Deployment Script
# This script builds and deploys your site to GitHub Pages

echo "🚀 Building project..."
npm run build

echo "📦 Deploying to GitHub Pages..."
npx gh-pages -d dist

echo "✅ Deployment complete!"
echo "🌐 Your site should be live at: https://dualsparkstudio.github.io/118_LandingPage-Morpankh-Saree-/"
echo "⏳ Please wait 1-2 minutes for GitHub Pages to update."


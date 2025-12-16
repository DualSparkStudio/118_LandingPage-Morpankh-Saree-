import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Get base path from environment variable
// For GitHub Pages: set to '/your-repo-name/' (e.g., '/118_LandingPage-Morpankh-Saree-/')
// For Netlify/Vercel/custom domain: set to '/'
// IMPORTANT: Netlify will set VITE_BASE_PATH="/" via netlify.toml
// For GitHub Pages, set VITE_BASE_PATH="/118_LandingPage-Morpankh-Saree-/" in GitHub Actions
const base = process.env.VITE_BASE_PATH || '/'

export default defineConfig({
  plugins: [react()],
  base: base,
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        // Ensure proper file extensions for GitHub Pages
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    }
  },
  publicDir: 'public',
})

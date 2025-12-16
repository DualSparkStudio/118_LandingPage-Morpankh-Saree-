import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Get base path from environment variable or default to '/'
// For GitHub Pages: set to '/your-repo-name/' (e.g., '/118_LandingPage-Morpankh-Saree-/')
// IMPORTANT: Update this to match your GitHub repository name exactly!
// For custom domain: set to '/'
const base = process.env.VITE_BASE_PATH || '/118_LandingPage-Morpankh-Saree-/'

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
  }
})


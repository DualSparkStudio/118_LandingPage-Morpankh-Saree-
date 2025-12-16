// Vite plugin to ensure .nojekyll is copied to dist root
export default function nojekyll() {
  return {
    name: 'nojekyll',
    generateBundle() {
      // This ensures .nojekyll is included in the build
      this.emitFile({
        type: 'asset',
        fileName: '.nojekyll',
        source: ''
      })
    }
  }
}

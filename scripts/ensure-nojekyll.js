import { existsSync, writeFileSync } from 'fs'
import { join } from 'path'

const distPath = join(process.cwd(), 'dist')
const nojekyllPath = join(distPath, '.nojekyll')

// Ensure .nojekyll exists in dist root
if (!existsSync(nojekyllPath)) {
  writeFileSync(nojekyllPath, '')
  console.log('✓ Created .nojekyll file in dist/')
} else {
  console.log('✓ .nojekyll file already exists in dist/')
}

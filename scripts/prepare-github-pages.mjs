import { copyFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'

const routes = ['work', 'about', 'privacy', 'terms', 'mockups/lumen']

copyFileSync('dist/index.html', 'dist/404.html')

for (const route of routes) {
  const destination = join('dist', route, 'index.html')
  mkdirSync(dirname(destination), { recursive: true })
  copyFileSync('dist/index.html', destination)
}

console.log(`Prepared GitHub Pages routes: ${routes.join(', ')}`)

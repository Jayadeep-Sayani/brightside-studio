import { copyFileSync, mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { execSync } from 'node:child_process'

const routes = ['work', 'about', 'privacy', 'terms', 'mockups/lumen']

let buildId = 'dev'
try {
  buildId = execSync('git rev-parse --short HEAD', { encoding: 'utf8' }).trim()
} catch {
  buildId = String(Date.now())
}

copyFileSync('dist/index.html', 'dist/404.html')
writeFileSync('dist/build.txt', `${buildId}\n`)

for (const route of routes) {
  const destination = join('dist', route, 'index.html')
  mkdirSync(dirname(destination), { recursive: true })
  copyFileSync('dist/index.html', destination)
}

console.log(`Prepared GitHub Pages routes (${buildId}): ${routes.join(', ')}`)

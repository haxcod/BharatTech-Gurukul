import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbs = (p) => path.resolve(__dirname, p)

async function prerender() {
  console.log('🚀 Starting Node-based Prerender...')

  const template = fs.readFileSync(toAbs('dist/client/index.html'), 'utf-8')
  const { render } = await import('./dist/server/entry-server.js')

  const routesToPrerender = ['/', '/404']

  for (const url of routesToPrerender) {
    console.log(`📡 Rendering route: ${url}`)
    
    const helmetContext = {}
    const appHtml = render(url, helmetContext)
    const { helmet } = helmetContext

    const html = template
      .replace('<!--app-html-->', appHtml)
      .replace('<!--app-head-->', `
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
      `)

    const fileName = url === '/' ? 'index.html' : `${url.slice(1)}.html`
    const filePath = toAbs(`dist/client/${fileName}`)
    
    fs.writeFileSync(filePath, html)
    console.log(`✅ Saved ${fileName}`)
  }

  // Clean up server bundle
  console.log('✨ Prerender complete!')
}

prerender().catch((err) => {
  console.error('❌ Prerender failed:', err)
  process.exit(1)
})

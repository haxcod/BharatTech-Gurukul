import puppeteer from 'puppeteer';
import { spawn } from 'child_process';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_PATH = path.join(__dirname, 'dist');
const PORT = 3333;

const THE_TECH_URL = 'https://bharattechgurukul.tech';

async function prerender() {
  console.log('🚀 Starting Prerender process...');

  // 1. Start a local server for the dist folder
  const server = spawn('npx', ['serve', '-s', 'dist', '-l', PORT.toString()], {
    shell: true,
  });

  server.stdout.on('data', (data) => console.log(`[Server]: ${data}`));
  
  // Wait a bit for server to start
  await new Promise(resolve => setTimeout(resolve, 3000));

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const routes = ['/', '/404'];

  for (const route of routes) {
    console.log(`📸 Snapping route: ${route}`);
    const page = await browser.newPage();
    
    // Set viewport for consistent rendering
    await page.setViewport({ width: 1440, height: 900 });
    
    await page.goto(`http://localhost:${PORT}${route}`, {
      waitUntil: 'networkidle0',
    });

    // Wait for any animations to settle if needed
    await new Promise(resolve => setTimeout(resolve, 1000));

    const html = await page.content();
    
    const fileName = route === '/' ? 'index.html' : `${route.slice(1)}.html`;
    const filePath = path.join(DIST_PATH, fileName);

    await writeFile(filePath, html);
    console.log(`✅ Saved ${fileName}`);
  }

  await browser.close();
  server.kill();
  console.log('✨ Prerender complete!');
  process.exit(0);
}

prerender().catch(err => {
  console.error('❌ Prerender failed:', err);
  process.exit(1);
});

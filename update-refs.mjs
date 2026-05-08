import { readdir, readFile, writeFile, access } from 'fs/promises';
import { join, extname } from 'path';

const SRC   = 'E:/Website/0 Web dev main/portfolio/src';
const PUBLIC = 'E:/Website/0 Web dev main/portfolio/public';

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory() && e.name !== 'node_modules') files.push(...await walk(full));
    else if (/\.(js|jsx)$/.test(e.name)) files.push(full);
  }
  return files;
}

async function webpExists(publicPath) {
  const full = join(PUBLIC, publicPath.replace(/^\//, ''));
  const webp = full.replace(/\.(png|jpe?g|JPG|PNG|JPEG)$/i, '.webp');
  try { await access(webp); return true; } catch { return false; }
}

const files = await walk(SRC);

for (const file of files) {
  let src = await readFile(file, 'utf8');
  const original = src;

  // Find all image path strings and replace extension if .webp exists
  const matches = [...src.matchAll(/'([^']*\.(png|jpe?g|JPG|PNG|JPEG))'/gi)];
  for (const m of matches) {
    const path = m[1];
    if (await webpExists(path)) {
      const newPath = path.replace(/\.(png|jpe?g|JPG|PNG|JPEG)$/i, '.webp');
      src = src.replaceAll(m[0], `'${newPath}'`);
    }
  }

  if (src !== original) {
    await writeFile(file, src, 'utf8');
    console.log(`Updated: ${file.replace(SRC, '')}`);
  }
}
console.log('Done.');

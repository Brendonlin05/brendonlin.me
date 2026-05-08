import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';

const PUBLIC = 'E:/Website/0 Web dev main/portfolio/public';

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) files.push(...await walk(full));
    else files.push(full);
  }
  return files;
}

const files = await walk(PUBLIC);
const targets = files.filter(f => /\.(png|jpe?g|jpg|JPG|PNG|JPEG)$/i.test(f) && !f.endsWith('.webp'));

let converted = 0;
for (const src of targets) {
  const dest = src.replace(/\.(png|jpe?g|jpg|JPG|PNG|JPEG)$/i, '.webp');
  try {
    await sharp(src).webp({ quality: 85 }).toFile(dest);
    console.log(`✓ ${dest.replace(PUBLIC, '')}`);
    converted++;
  } catch (e) {
    console.error(`✗ ${src}: ${e.message}`);
  }
}
console.log(`\nDone: ${converted} files converted.`);

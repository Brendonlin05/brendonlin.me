import sharp from 'sharp';
import { readdirSync } from 'fs';
import { join, extname, basename } from 'path';


const dir = 'public/home';
const files = readdirSync(dir).filter(f => /\.(png|jpg|jpeg)$/i.test(f));

for (const file of files) {
  const input = join(dir, file);
  const output = join(dir, basename(file, extname(file)) + '.webp');
  const isPng = /\.png$/i.test(file);

  await sharp(input, { limitInputPixels: false })
    .resize({ width: 960, withoutEnlargement: true })
    .webp(isPng ? { lossless: true } : { quality: 90 })
    .toFile(output);

  console.log(`✓ ${file} → ${basename(output)}`);
}

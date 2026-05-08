import sharp from 'sharp';
sharp.cache(false);
await sharp('E:/Website/0 Web dev main/portfolio/public/Elephant/elephant in room header crop.png', { limitInputPixels: false })
  .resize({ width: 2560, withoutEnlargement: true })
  .webp({ quality: 85 })
  .toFile('E:/Website/0 Web dev main/portfolio/public/Elephant/elephant in room header crop.webp');
console.log('Done.');

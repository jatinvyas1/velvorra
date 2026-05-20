import sharp from 'sharp';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const src = join(root, 'src/assets/VELVORRA.jpg.jpeg');
const outDir = join(root, 'src/assets');

const meta = await sharp(src).metadata();
const side = Math.min(meta.width, Math.round(meta.height * 0.58));
const left = Math.max(0, Math.floor((meta.width - side) / 2));

const icon = await sharp(src)
  .extract({ left, top: 0, width: side, height: side })
  .flatten({ background: '#f6f5f1' })
  .toBuffer();

const sizes = [
  [16, 'favicon-16x16.png'],
  [32, 'favicon-32x32.png'],
  [48, 'favicon-48x48.png'],
  [180, 'apple-touch-icon.png'],
  [192, 'favicon-192x192.png'],
];

for (const [size, name] of sizes) {
  const path = join(outDir, name);
  await sharp(icon).resize(size, size, { fit: 'contain', background: '#f6f5f1' }).png().toFile(path);
  console.log('wrote', path);
}

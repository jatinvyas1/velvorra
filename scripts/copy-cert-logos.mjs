import { copyFileSync, mkdirSync, unlinkSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dst = join(root, 'src/assets/certs');
const srcDir =
  process.env.CERT_SRC ||
  'C:/Users/PCW/.cursor/projects/empty-window/assets';

mkdirSync(dst, { recursive: true });

const files = ['apeda.png', 'fssai.png', 'spices-board.png', 'sgs.png'];

for (const name of files) {
  copyFileSync(join(srcDir, name), join(dst, name));
  console.log('copied', name);
}

try {
  unlinkSync(join(dst, 'kosher.svg'));
} catch {
  /* already removed */
}

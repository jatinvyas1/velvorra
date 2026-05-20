import { mkdirSync, writeFileSync, unlinkSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dst = join(root, 'src/assets/certs');
mkdirSync(dst, { recursive: true });

/** Official / Commons sources for certificate logos */
const downloads = [
  {
    file: 'apeda.png',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Apeda_logo.jpg',
  },
  {
    file: 'fssai.png',
    url: 'https://upload.wikimedia.org/wikipedia/en/8/8a/Food_Safety_and_Standards_Authority_of_India_%28logo%29.png',
  },
  {
    file: 'spices-board.png',
    url: 'https://www.spicesboard.gov.in/images/spicesboard-logo.png',
  },
];

for (const { file, url } of downloads) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed ${file}: ${res.status} ${url}`);
  writeFileSync(join(dst, file), Buffer.from(await res.arrayBuffer()));
  console.log('saved', file, res.headers.get('content-type'));
}

// SGS: copy from Cursor assets if present (user-provided logo generation)
const sgsSrc =
  process.env.SGS_SRC ||
  'C:/Users/PCW/.cursor/projects/empty-window/assets/sgs.png';
try {
  const { copyFileSync } = await import('node:fs');
  copyFileSync(sgsSrc, join(dst, 'sgs.png'));
  console.log('saved sgs.png from', sgsSrc);
} catch (e) {
  console.warn('SGS copy skipped:', e.message);
}

try {
  unlinkSync(join(dst, 'kosher.svg'));
} catch {
  /* ok */
}

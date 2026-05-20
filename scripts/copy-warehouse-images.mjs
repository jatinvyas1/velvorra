import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dst = join(root, 'src/assets/warehouse');
mkdirSync(dst, { recursive: true });

const srcDir =
  process.env.WAREHOUSE_SRC ||
  'C:/Users/PCW/.cursor/projects/d-Velvorra-webSite-webSite/assets';

const copies = [
  [
    'c__Users_PCW_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_WhatsApp_Image_2026-05-19_at_10.06.03_PM-a8176859-313a-4fc6-b131-79609a949bfb.png',
    'warehouse-02-rice-godown.jpg',
  ],
  [
    'c__Users_PCW_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_WhatsApp_Image_2026-05-19_at_9.55.07_PM-01c0f804-8a12-48a4-9eb1-3edd4eeede27.png',
    'warehouse-06-onion-handling.jpg',
  ],
  [
    'c__Users_PCW_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_WhatsApp_Image_2026-05-19_at_9.52.40_PM-69def2fc-e043-4b32-8649-9f2f2d92002d.png',
    'warehouse-08-onion-storage.jpg',
  ],
  [
    'c__Users_PCW_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_WhatsApp_Image_2026-05-19_at_9.52.38_PM-0b678b66-49b5-42ae-a6c0-a9ded5972290.png',
    'warehouse-07-container-loading.jpg',
  ],
  [
    'c__Users_PCW_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_WhatsApp_Image_2026-05-19_at_9.52.38_PM__1_-449f8a95-1d2c-48af-8075-588a2dfeeb39.png',
    'warehouse-04-chilli-processing.jpg',
  ],
];

for (const [srcName, destName] of copies) {
  const from = join(srcDir, srcName);
  const to = join(dst, destName);
  if (!existsSync(from)) {
    console.error('MISSING', from);
    process.exitCode = 1;
    continue;
  }
  copyFileSync(from, to);
  console.log('OK', destName);
}

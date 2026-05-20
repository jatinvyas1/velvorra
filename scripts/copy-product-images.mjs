import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dst = join(root, 'src/assets/products');
mkdirSync(dst, { recursive: true });

const srcDir =
  process.env.PRODUCT_SRC ||
  'C:/Users/PCW/.cursor/projects/d-Velvorra-webSite-webSite/assets';

/** [source filename, output basename without extension] */
const copies = [
  [
    'c__Users_PCW_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_WhatsApp_Image_2026-05-19_at_10.30.10_PM-ba58b432-9d2d-4fac-b1ec-239c7fe54dfc.png',
    'green-chilli-g4',
  ],
  [
    'c__Users_PCW_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_WhatsApp_Image_2026-05-19_at_10.30.29_PM-ad91eb5c-96bf-4674-b0ec-e1e55c3e864a.png',
    'banana-g9',
  ],
  [
    'c__Users_PCW_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_WhatsApp_Image_2026-05-19_at_10.30.37_PM-f16e04fb-99af-4e6d-b29b-24c3137879cc.png',
    'red-onion',
  ],
  [
    'c__Users_PCW_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_WhatsApp_Image_2026-05-19_at_10.30.52_PM__1_-fa896252-a450-423a-a488-2d0656255107.png',
    'ginger',
  ],
  [
    'c__Users_PCW_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_WhatsApp_Image_2026-05-19_at_10.31.09_PM-4262dcdf-50a4-4c27-821e-b8c8ce2dbb37.png',
    'himalayan-ginger',
  ],
  [
    'c__Users_PCW_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_WhatsApp_Image_2026-05-19_at_10.32.41_PM-33a8f3c9-fca2-4fb0-bf71-2a52e164fdfb.png',
    'kabuli-chana',
  ],
  [
    'c__Users_PCW_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_WhatsApp_Image_2026-05-19_at_10.36.14_PM__1_-29323d9f-28e6-495d-bb99-18b81263321c.png',
    'pigeon-peas',
  ],
  [
    'c__Users_PCW_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_WhatsApp_Image_2026-05-19_at_10.38.20_PM-5f3c51ef-8454-4abd-88f4-c0564bdce73c.png',
    'black-chickpeas',
  ],
  [
    'c__Users_PCW_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_WhatsApp_Image_2026-05-19_at_10.39.58_PM-40bb0b02-0c20-4e2e-87b6-591eb098f9c2.png',
    'green-moong',
  ],
  [
    'c__Users_PCW_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_WhatsApp_Image_2026-05-19_at_10.42.50_PM-665aaaf9-6572-4147-892e-a23dc92bf525.png',
    'palm-oil',
  ],
  [
    'c__Users_PCW_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_WhatsApp_Image_2026-05-19_at_10.44.59_PM-bfbbb6c3-3943-41e9-8940-7e7c21506ca0.png',
    'brown-sugar',
  ],
  [
    'c__Users_PCW_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_WhatsApp_Image_2026-05-19_at_10.47.47_PM-928aeae9-b1c2-422e-859f-96a77714a451.png',
    'red-chilli-whole',
  ],
  [
    'c__Users_PCW_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_WhatsApp_Image_2026-05-19_at_10.49.27_PM-4c0f72f8-901e-4266-954a-7a4916fac7d8.png',
    'turmeric',
  ],
  [
    'c__Users_PCW_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_WhatsApp_Image_2026-05-19_at_10.49.33_PM-0ef5c6c5-02b0-40a6-b735-b0a3251056f0.png',
    'coriander-seed',
  ],
  [
    'c__Users_PCW_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_WhatsApp_Image_2026-05-19_at_10.51.01_PM-2804434a-fee0-476e-b31e-806243705399.png',
    'cumin',
  ],
  [
    'c__Users_PCW_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_WhatsApp_Image_2026-05-19_at_10.52.24_PM-96a7a7d5-87ab-47fc-9267-87d8a41e06a0.png',
    'dehydrated-onion',
  ],
  [
    'c__Users_PCW_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_WhatsApp_Image_2026-05-19_at_10.52.29_PM-f0c6a702-9b74-47e5-9aef-427853b0c17f.png',
    'onion-powder',
  ],
  [
    'c__Users_PCW_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_WhatsApp_Image_2026-05-19_at_10.54.23_PM-a3ef32c3-bcaa-4b08-882a-6e25963ef5bf.png',
    'garlic-powder',
  ],
  [
    'c__Users_PCW_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_WhatsApp_Image_2026-05-19_at_10.54.46_PM-9d1b1f96-fd5e-4761-bdff-47566fa3fefa.png',
    'beetroot-powder',
  ],
];

function extFor(buf) {
  if (buf[0] === 0xff && buf[1] === 0xd8) return '.jpg';
  if (buf[0] === 0x89 && buf[1] === 0x50) return '.png';
  if (buf[0] === 0x47 && buf[1] === 0x49) return '.gif';
  return '.jpg';
}

let ok = 0;
for (const [srcName, base] of copies) {
  const from = join(srcDir, srcName);
  if (!existsSync(from)) {
    console.error('MISSING', from);
    process.exitCode = 1;
    continue;
  }
  const buf = readFileSync(from);
  const ext = extFor(buf);
  const to = join(dst, `${base}${ext}`);
  copyFileSync(from, to);
  console.log('OK', to);
  ok++;
}
console.log(`Copied ${ok}/${copies.length} product images.`);

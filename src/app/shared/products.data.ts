export type Category =
  | 'Fresh Produce'
  | 'Pulses & Lentils'
  | 'Rice'
  | 'Sugar & Oil'
  | 'Spices'
  | 'Food Ingredients';

export interface Product {
  slug: string;
  name: string;
  category: Category;
  tagline: string;
  description: string;
  highlights: string[];
  icon: string;
  accent: string;
  image: string;
}

/* ============================================================
   Product images: Wikimedia Commons (filename-verified).
   Services still use Pexels / Unsplash below.
   ============================================================ */

/** Local product photos (WhatsApp) + Wikimedia for remaining items */
const P = (file: string) => `/assets/products/${file}`;

const IMG = {
  greenChilli: P('green-chilli-g4.jpg'),
  cavendishBanana: P('banana-g9.jpg'),
  redOnions: P('red-onion.jpg'),
  gingerFresh: P('ginger.jpg'),
  gingerFresh2: P('himalayan-ginger.jpg'),
  okra: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Quiabo.jpg/960px-Quiabo.jpg',
  chickpeasKabuli: P('kabuli-chana.jpg'),
  pigeonPeaSeeds: P('pigeon-peas.jpg'),
  desiChickpeas: P('black-chickpeas.jpg'),
  greenGram: P('green-moong.jpg'),
  moongDal:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Moong_Dal.jpg/960px-Moong_Dal.jpg',
  basmatiRice:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Raw_Basmati_Rice.jpg/960px-Raw_Basmati_Rice.jpg',
  whiteRice:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/WhiteRice.jpg/960px-WhiteRice.jpg',
  plainWhiteRice:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Plain_white_rice-min-min.jpg/960px-Plain_white_rice-min-min.jpg',
  parboiledRice:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Riso_parboiled.jpg/960px-Riso_parboiled.jpg',
  brokenRice:
    'https://upload.wikimedia.org/wikipedia/commons/5/56/Broken_rice_bris%C3%A9e.jpg',
  whiteSugar:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Granulated_White_Sugar_with_Large_Crystals%2C_Bright_Front_Light.jpg/960px-Granulated_White_Sugar_with_Large_Crystals%2C_Bright_Front_Light.jpg',
  brownSugar: P('brown-sugar.jpg'),
  palmOil: P('palm-oil.jpg'),
  redChilliDried: P('red-chilli-whole.jpg'),
  chilliPowder:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Chilli_powder_for_sale.JPG/960px-Chilli_powder_for_sale.JPG',
  corianderSeeds: P('coriander-seed.jpg'),
  spicePowders:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Bumbu_dan_Rempah_-_rempah.jpg/960px-Bumbu_dan_Rempah_-_rempah.jpg',
  turmericFingers: P('turmeric.jpg'),
  turmericPowder: P('turmeric.jpg'),
  cuminSeeds: P('cumin.jpg'),
  dehydratedOnion: P('dehydrated-onion.jpg'),
  onionPowder: P('onion-powder.jpg'),
  garlicPowder: P('beetroot-powder.jpg'),
  gingerDried:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Dried_ginger_rhizome.jpg/960px-Dried_ginger_rhizome.jpg',
  beetrootPowder: P('garlic-powder.jpg'),
} as const;

/** Pexels photo CDN (services / logistics) */
const px = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=900&fit=crop`;

/** Unsplash (services / logistics) */
const us = (path: string) =>
  `https://images.unsplash.com/${path}?w=900&q=85&auto=format&fit=crop`;

export const PRODUCTS: Product[] = [
  /* ---------- FRESH PRODUCE ---------- */
  {
    slug: 'green-chilli-g4',
    name: 'Green Chilli (G4)',
    category: 'Fresh Produce',
    tagline: 'Farm-fresh G4, export-graded',
    description:
      'Hand-picked G4 green chillies sourced directly from Indian farmers — sorted, graded and packed under hygienic conditions to maintain freshness through long-distance transit.',
    highlights: ['Export-grade sorting', 'Cold-chain logistics', 'Hygienic packaging'],
    icon: 'chilli',
    accent: '#2d8c4a',
    image: IMG.greenChilli,
  },
  {
    slug: 'banana-g9',
    name: 'G9 Banana (Cavendish)',
    category: 'Fresh Produce',
    tagline: 'Premium Cavendish, globally preferred',
    description:
      'Premium G9 Cavendish bananas with uniform size, excellent taste and a long shelf life — ideal for fresh consumption and high-volume export markets.',
    highlights: ['Uniform sizing', 'Long shelf life', 'Reefer container loading'],
    icon: 'banana',
    accent: '#e7c44a',
    image: IMG.cavendishBanana,
  },
  {
    slug: 'red-onion',
    name: 'Red Onion',
    category: 'Fresh Produce',
    tagline: 'Strong aroma, rich flavour',
    description:
      'Farm-fresh red onions with a deep, pungent aroma and superior storage life. Suitable for both domestic distribution and international shipment.',
    highlights: ['Superior storage life', 'Pungent aroma', 'Calibrated sizing'],
    icon: 'pulses',
    accent: '#a23a4a',
    image: IMG.redOnions,
  },
  {
    slug: 'ginger',
    name: 'Fresh Ginger',
    category: 'Fresh Produce',
    tagline: 'Aromatic root, culinary & medicinal',
    description:
      'High-quality fresh ginger with strong aroma and natural medicinal properties — widely used in culinary, herbal and food processing applications.',
    highlights: ['Mature rhizomes', 'High oil content', 'Hand-cleaned'],
    icon: 'pulses',
    accent: '#c89647',
    image: IMG.gingerFresh,
  },
  {
    slug: 'himalayan-ginger',
    name: 'Himalayan Ginger',
    category: 'Fresh Produce',
    tagline: 'High-altitude varietal',
    description:
      'High-altitude Zingiber officinale and Hedychium gardnerianum cultivars from the Himalayas — prized for higher essential oil content and a sharper, cleaner flavour profile.',
    highlights: ['High essential oil', 'Premium varietal', 'Single-origin'],
    icon: 'pulses',
    accent: '#8a6b3a',
    image: IMG.gingerFresh2,
  },
  {
    slug: 'okra',
    name: 'Okra (Bhindi)',
    category: 'Fresh Produce',
    tagline: 'Tender, fresh, nutritious',
    description:
      'Fresh green okra carefully sourced for tenderness, uniform length and nutritional value. Ideal for retail packaging and HORECA export supply.',
    highlights: ['Tender pods', 'Uniform length', 'Pre-cooled at source'],
    icon: 'chilli',
    accent: '#3aa84e',
    image: IMG.okra,
  },

  /* ---------- PULSES & LENTILS ---------- */
  {
    slug: 'kabuli-chana',
    name: 'Kabuli Chana',
    category: 'Pulses & Lentils',
    tagline: 'Premium export-grade chickpeas',
    description:
      'Premium export-grade Kabuli chana with uniform size, creamy texture and high nutritional value — a staple for global hummus, snack and ready-meal manufacturers.',
    highlights: ['8–10 mm calibration', 'Creamy texture', '50 kg PP bags'],
    icon: 'pulses',
    accent: '#d4a24c',
    image: IMG.chickpeasKabuli,
  },
  {
    slug: 'pigeon-peas',
    name: 'Pigeon Peas (Toor Dal)',
    category: 'Pulses & Lentils',
    tagline: 'High-protein staple',
    description:
      'High-quality pigeon peas — known for their rich protein content and authentic taste, suitable for daily consumption and dal manufacturing.',
    highlights: ['High protein', 'Polished grade', 'Bulk packaging'],
    icon: 'pulses',
    accent: '#c89647',
    image: IMG.pigeonPeaSeeds,
  },
  {
    slug: 'black-chickpeas',
    name: 'Black Chickpeas (Kala Chana)',
    category: 'Pulses & Lentils',
    tagline: 'Nutritious & flavourful',
    description:
      'Nutritious black chickpeas with excellent texture and a natural earthy flavour — suitable for traditional cuisines and healthy snack manufacturing.',
    highlights: ['Earthy flavour', 'Cleaned & sortexed', 'Multiple grades'],
    icon: 'pulses',
    accent: '#5a4423',
    image: IMG.desiChickpeas,
  },
  {
    slug: 'green-moong',
    name: 'Green Moong',
    category: 'Pulses & Lentils',
    tagline: 'Pure, fresh, high-protein',
    description:
      'Premium green moong sourced for purity, freshness and high protein value — widely used in healthy food preparations and sprouting.',
    highlights: ['Sprouting grade', 'High protein', 'Cleaned'],
    icon: 'pulses',
    accent: '#4a7a3a',
    image: IMG.greenGram,
  },
  {
    slug: 'red-moong',
    name: 'Red Moong',
    category: 'Pulses & Lentils',
    tagline: 'Rich, textured, nutritious',
    description:
      'Carefully processed red moong dal offering superior taste, texture and nutritional richness for everyday meal preparation.',
    highlights: ['Polished split', 'High protein', 'Consistent grade'],
    icon: 'pulses',
    accent: '#b9472b',
    image: IMG.moongDal,
  },

  /* ---------- RICE ---------- */
  {
    slug: 'basmati-rice',
    name: 'Basmati Rice',
    category: 'Rice',
    tagline: 'Aromatic long-grain Indian basmati',
    description:
      'Premium aged Basmati rice with long, slender grains and a signature aroma. Sortexed, polished and packed to international export standards.',
    highlights: ['Aged for aroma', 'Sortex cleaned', '1121 / 1509 / Pusa grades'],
    icon: 'rice',
    accent: '#c89647',
    image: IMG.basmatiRice,
  },
  {
    slug: 'non-basmati-rice',
    name: 'Non-Basmati Rice',
    category: 'Rice',
    tagline: 'Versatile staple rice',
    description:
      'Quality non-Basmati varieties — IR-64, Sona Masuri, Swarna and parboiled grades — for institutional, retail and bulk industrial buyers.',
    highlights: ['Multiple varieties', 'Cleaned & graded', 'Bulk & retail packs'],
    icon: 'rice',
    accent: '#e8d9bd',
    image: IMG.whiteRice,
  },
  {
    slug: 'long-grain-rice',
    name: 'Long Grain Rice',
    category: 'Rice',
    tagline: 'Slender, separate, premium',
    description:
      'Long-grain white rice with consistent kernel length and a clean, neutral profile — ideal for biryani, pilaf and ready-meal manufacturers.',
    highlights: ['Long, slender grains', 'Low broken %', 'Custom packaging'],
    icon: 'rice',
    accent: '#d8c4a0',
    image: IMG.plainWhiteRice,
  },
  {
    slug: 'sella-rice',
    name: 'Sella Rice',
    category: 'Rice',
    tagline: 'Parboiled, golden, durable',
    description:
      'Parboiled (Sella) Basmati and non-Basmati rice — partially gelatinised for higher nutritional retention and longer shelf life on long-haul shipments.',
    highlights: ['Parboiled processing', 'Higher nutrition', 'Long shelf life'],
    icon: 'rice',
    accent: '#c89647',
    image: IMG.parboiledRice,
  },
  {
    slug: 'broken-rice',
    name: 'Broken Rice',
    category: 'Rice',
    tagline: 'Industrial & food-grade',
    description:
      'Sortex-cleaned broken rice in 5%, 25% and 100% broken grades — for breweries, snack manufacturers, pet food formulators and institutional buyers.',
    highlights: ['Multiple broken %', 'Food & feed grade', 'Sortex cleaned'],
    icon: 'rice',
    accent: '#a87a2c',
    image: IMG.brokenRice,
  },

  /* ---------- SUGAR & OIL ---------- */
  {
    slug: 'refined-sugar',
    name: 'Refined Sugar (ICUMSA 45)',
    category: 'Sugar & Oil',
    tagline: 'High-purity ICUMSA 45',
    description:
      'High-purity refined sugar (ICUMSA 45) with greater than 99.8% sucrose, sparkling crystals and very low moisture — suitable for food manufacturing and direct consumption.',
    highlights: ['ICUMSA 45 spec', '>99.8% sucrose', '50 kg / 1 MT bags'],
    icon: 'sugar',
    accent: '#e8d9bd',
    image: IMG.whiteSugar,
  },
  {
    slug: 'brown-sugar',
    name: 'Brown Sugar',
    category: 'Sugar & Oil',
    tagline: 'Natural, rich, characterful',
    description:
      'Naturally processed brown sugar — both refined and raw — offering rich molasses sweetness and purity for food, bakery and beverage applications.',
    highlights: ['Refined & raw grades', 'Rich flavour', 'Retail-ready packs'],
    icon: 'sugar',
    accent: '#8b5a2b',
    image: IMG.brownSugar,
  },
  {
    slug: 'palm-oil',
    name: 'Palm Oil',
    category: 'Sugar & Oil',
    tagline: 'Crude & RBD palm oil',
    description:
      'Crude and RBD palm oil sourced from Indonesia and Malaysia — flexible Incoterms (CIF, CFR, FOB), tank or flexitank shipments, and full documentation.',
    highlights: ['CIF / CFR / FOB', 'Crude & RBD', 'Full documentation'],
    icon: 'oil',
    accent: '#d4a24c',
    image: IMG.palmOil,
  },

  /* ---------- SPICES ---------- */
  {
    slug: 'red-chilli-whole',
    name: 'Red Chilli (Whole)',
    category: 'Spices',
    tagline: 'Sun-dried whole chillies',
    description:
      'Whole sun-dried red chillies — Teja, Sannam, Byadgi and other origins — prized for intense flavour, longer shelf life and versatility in stick or powder form.',
    highlights: ['Teja / Sannam / Byadgi', 'High colour value', 'Stalk-on or stalk-off'],
    icon: 'chilli',
    accent: '#b9321a',
    image: IMG.redChilliDried,
  },
  {
    slug: 'red-chilli-powder',
    name: 'Red Chilli Powder',
    category: 'Spices',
    tagline: 'Vibrant colour, balanced heat',
    description:
      'Finely ground red chilli powder with a vibrant red colour, rich aroma and balanced pungency — calibrated to buyer-specified Scoville and ASTA colour values.',
    highlights: ['ASTA-graded colour', 'Custom heat profile', 'Steam sterilised'],
    icon: 'chilli',
    accent: '#a02214',
    image: IMG.chilliPowder,
  },
  {
    slug: 'coriander-seed',
    name: 'Coriander (Whole)',
    category: 'Spices',
    tagline: 'Aromatic whole coriander seed',
    description:
      'Premium whole coriander seeds with a fresh, citrusy aroma and natural earthiness — used across cuisines and as a base for masala blends.',
    highlights: ['Eagle / Parrot quality', 'Cleaned & sortexed', 'Bulk jute bags'],
    icon: 'pulses',
    accent: '#c89647',
    image: IMG.corianderSeeds,
  },
  {
    slug: 'coriander-powder',
    name: 'Coriander Powder',
    category: 'Spices',
    tagline: 'Freshly ground, deep aroma',
    description:
      'Freshly ground coriander powder retaining the full citrus-and-earth aroma of the seed — ideal for spice mixes, retail SKUs and food manufacturing.',
    highlights: ['Steam sterilised', 'Custom mesh size', 'Retail or bulk packs'],
    icon: 'pulses',
    accent: '#9c7536',
    image: IMG.spicePowders,
  },
  {
    slug: 'turmeric-whole',
    name: 'Turmeric (Whole)',
    category: 'Spices',
    tagline: 'High-curcumin polished fingers',
    description:
      'Polished turmeric fingers — Salem, Erode and Nizamabad origins — with high curcumin content, deep colour and excellent culinary and medicinal value.',
    highlights: ['Salem / Erode / Nizamabad', 'High curcumin', 'Single / double polish'],
    icon: 'pulses',
    accent: '#d4a02c',
    image: IMG.turmericFingers,
  },
  {
    slug: 'turmeric-powder',
    name: 'Turmeric Powder',
    category: 'Spices',
    tagline: 'Vibrant gold, full aroma',
    description:
      'Bright yellow turmeric powder ground from high-curcumin fingers — natural colour, full aroma and verified ASTA / curcumin levels.',
    highlights: ['Verified curcumin %', 'ASTA colour', 'Steam sterilised'],
    icon: 'pulses',
    accent: '#b9842c',
    image: IMG.turmericPowder,
  },
  {
    slug: 'cumin',
    name: 'Cumin Seeds',
    category: 'Spices',
    tagline: 'Aromatic, premium export grade',
    description:
      'Aromatic cumin seeds carefully selected for strong flavour, cleanliness and premium export quality — Singapore, Europe and machine-cleaned grades.',
    highlights: ['Singapore / Europe grade', 'Machine cleaned', 'Custom packaging'],
    icon: 'pulses',
    accent: '#7a5a2b',
    image: IMG.cuminSeeds,
  },

  /* ---------- FOOD INGREDIENTS ---------- */
  {
    slug: 'dehydrated-onion',
    name: 'Dehydrated Onion',
    category: 'Food Ingredients',
    tagline: 'Long-shelf-life onion flakes',
    description:
      'Premium dehydrated onion flakes processed to retain natural taste, aroma and a long shelf life — ideal for food processors, snack makers and HORECA.',
    highlights: ['Kibbled / minced / chopped', 'Low moisture', 'Long shelf life'],
    icon: 'pulses',
    accent: '#d8b974',
    image: IMG.dehydratedOnion,
  },
  {
    slug: 'onion-powder',
    name: 'Onion Powder',
    category: 'Food Ingredients',
    tagline: 'Versatile seasoning workhorse',
    description:
      'Free-flowing onion powder with consistent taste and a long shelf life — used in ready-to-eat meals, soups, sauces, snacks and spice blends.',
    highlights: ['Free-flowing', 'Custom mesh size', 'Steam sterilised'],
    icon: 'pulses',
    accent: '#caa66a',
    image: IMG.onionPowder,
  },
  {
    slug: 'garlic-powder',
    name: 'Garlic Powder',
    category: 'Food Ingredients',
    tagline: 'Pungent, dehydrated, processed',
    description:
      'Dehydrated garlic, finely milled to a free-flowing powder for flavour enhancement in food manufacturing, snacks and HORECA applications.',
    highlights: ['High pungency', 'Free-flowing', 'Custom mesh'],
    icon: 'pulses',
    accent: '#e8d9bd',
    image: IMG.garlicPowder,
  },
  {
    slug: 'ginger-powder',
    name: 'Ginger Powder',
    category: 'Food Ingredients',
    tagline: 'Aromatic, multi-purpose',
    description:
      'Natural ginger powder with a rich aroma and warm, sharp flavour — suitable for beverages, bakery, confectionery and culinary applications.',
    highlights: ['High essential oil', 'Free-flowing', 'Custom mesh'],
    icon: 'pulses',
    accent: '#c89647',
    image: IMG.gingerDried,
  },
  {
    slug: 'beetroot-powder',
    name: 'Beetroot Powder',
    category: 'Food Ingredients',
    tagline: 'Vibrant natural colour',
    description:
      'Nutrient-rich beetroot powder with a vibrant natural colour and earthy sweetness — widely used in health foods, beverages and dietary supplements.',
    highlights: ['Natural colourant', 'High betaine', 'Custom mesh'],
    icon: 'pulses',
    accent: '#a02250',
    image: IMG.beetrootPowder,
  },
];

export const CATEGORIES: Category[] = [
  'Fresh Produce',
  'Pulses & Lentils',
  'Rice',
  'Spices',
  'Food Ingredients',
  'Sugar & Oil',
];

/* ============================================================
   Other site data
   ============================================================ */

export interface Certification {
  abbr: string;
  name: string;
  body: string;
  image: string;
}

export const CERTIFICATIONS: Certification[] = [
  {
    abbr: 'APEDA',
    name: 'APEDA',
    body: 'Agricultural and Processed Food Products Export Development Authority — Govt. of India',
    image: 'assets/certs/apeda.png',
  },
  {
    abbr: 'FSSAI',
    name: 'FSSAI',
    body: 'Food Safety and Standards Authority of India — registered & compliant',
    image: 'assets/certs/fssai.png',
  },
  {
    abbr: 'SB',
    name: 'Spices Board India',
    body: 'Registered exporter — Ministry of Commerce & Industry, Government of India',
    image: 'assets/certs/spices-board.png',
  },
  {
    abbr: 'SGS',
    name: 'SGS Certified',
    body: 'ISO 9001 quality management system certification — SGS audited',
    image: 'assets/certs/sgs.png',
  },
];

export interface Service {
  icon: string;
  title: string;
  body: string;
  image: string;
}

export const SERVICES: Service[] = [
  {
    icon: 'globe',
    title: 'Global Sourcing',
    body:
      'We connect international buyers with vetted Indian manufacturers, growers and aggregators — single point of contact, multi-origin coverage.',
    image: us('flagged/photo-1563884542782-13d6a05b17c0'),
  },
  {
    icon: 'ship',
    title: 'Export Management',
    body:
      'Complete export handling — from contract and documentation through container loading, customs and dispatch.',
    image: px(4483610),
  },
  {
    icon: 'shield',
    title: 'Quality Assurance',
    body:
      'Strict pre-shipment inspections and international compliance — APEDA, FSSAI, Spices Board and third-party SGS / Geo-Chem on request.',
    image: IMG.spicePowders,
  },
  {
    icon: 'truck',
    title: 'Logistics Support',
    body:
      'Efficient ocean and air freight, reefer / cold-chain coordination, marine insurance and door-to-door supply chain management.',
    image: us('photo-1764116858315-6b149603efe9'),
  },
  {
    icon: 'spark',
    title: 'Private Label Solutions',
    body:
      'Customised branding, packaging and retail-ready SKUs for distributors, supermarkets and FMCG brands worldwide.',
    image: px(4483608),
  },
];

export interface ValueBadge {
  title: string;
  body: string;
}

export const VALUE_BADGES: ValueBadge[] = [
  { title: 'Global Export Network', body: 'Active trade lanes spanning 50+ countries.' },
  { title: 'Reliable Supply Chain', body: 'Long-term sourcing relationships and predictable lead times.' },
  { title: 'Customer-Focused Approach', body: 'Single trade-desk contact, transparent communication.' },
  { title: 'Premium Quality Products', body: 'Inspection, sampling and certification at every stage.' },
  { title: 'Timely Deliveries', body: 'Vessel coordination and live tracking through to destination.' },
  { title: 'Trusted Partnerships', body: 'Repeat buyers across the Middle East, EU, ASEAN and CIS.' },
];

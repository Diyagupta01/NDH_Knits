/**
 * NDH Knits — Product Catalogue Data
 *
 * Hierarchy:
 *   Category → Style (subcategory) → Product → Colour Variant → Images
 *
 * Rules:
 *   - One product can have multiple colour variants
 *   - A colour variant is NOT a separate product
 *   - A lifestyle image is NOT a separate product
 *   - An infographic is NOT a separate product
 *   - Do not invent data — use placeholders only where marked
 */

// ─── Type definitions ────────────────────────────────────────────────────────

/**
 * @typedef {Object} ColourVariant
 * @property {string}   colour      - Colour name (e.g. "Black", "Navy")
 * @property {string}   colorSwatch - CSS colour value for the swatch dot
 * @property {string|null} image    - Primary product image for this colour
 */

/**
 * @typedef {Object} Product
 * @property {string}         id           - Unique within the style
 * @property {string}         slug         - URL slug
 * @property {string}         name         - Product display name
 * @property {string}         description  - Short product description
 * @property {ColourVariant[]} variants    - Colour options (one product, multiple colours)
 * @property {string[]}       gallery      - Ordered image set: product shots → lifestyle → infographics
 * @property {string[]}       sizes        - Available sizes for this product
 * @property {string[]}       materials    - Materials for this product
 * @property {string[]}       features     - Product-specific features
 * @property {Object}         specifications - Key–value spec pairs
 */

/**
 * @typedef {Object} StyleCategory
 * @property {string}    id          - e.g. 'knee-cap'
 * @property {string}    name        - e.g. 'Knee Cap'
 * @property {string}    description - Style-level description shown in tab/catalogue header
 * @property {string|null} heroImage - Representative image for this style
 * @property {Product[]} products    - Products belonging to this style
 */

/**
 * @typedef {Object} ProductCategory
 * @property {string}          id               - Unique identifier
 * @property {string}          slug             - URL slug
 * @property {string}          name             - Display name
 * @property {string}          shortDescription - One-liner for cards/grids
 * @property {string}          description      - Category overview paragraph
 * @property {string|null}     heroImage        - Hero background image
 * @property {string[]}        features         - Category-level features (shown on category page)
 * @property {string[]}        sizes            - Category-level sizes
 * @property {string[]}        materials        - Category-level materials
 * @property {Object}          specifications   - Category-level spec table
 * @property {StyleCategory[]} styles           - Replaces old 'subcategories' — structured with products
 * @property {boolean}         inquiryEnabled
 */

// ─── Leg Warmers — image catalogue ──────────────────────────────────────────
//
// Mapping based on visual inspection of uploaded images:
//
// FOOTLESS:
//   12.38.24  — flat product shot, black & dark brown, Normal & XL, labelled "ndh FOOTLESS"
//   12.38.25  — lifestyle collage, 3-panel, dark charcoal (model + close-up detail)
//   12.38.26  — lifestyle collage, 3-panel, dark brown (model + close-up detail)
//   14.26.34  — flat product shot, navy & grey pair (no label)
//   14.26.35  — infographic, navy colourway, "Pure Wool Footless Leg Warmers"
//   14.26.35(1)— infographic, grey colourway, same layout
//   14.26.57  — infographic, collage format, navy+grey, "Pure Wool Footless" feature icons
//   14.35.06  — infographic, dark charcoal, "Pure Wool Footless Leg Warmers"
//
// KNEE CAP:
//   12.45.30  — flat product shot, black & grey pair, labelled "NDH KNEE CAP Normal & XL"
//   12.45.30(1)— lifestyle collage, 3-panel, navy (model putting on + close-up + flat)
//   12.45.30(2)— lifestyle collage, 3-panel, grey (model + close-up + flat)
//   12.46.29  — lifestyle+detail, grey, athletic context (shorts + sneakers)
//   12.46.29(1)— lifestyle+detail, black/navy, athletic context
//   12.48.35  — single flat product shot, charcoal
//   12.48.35(1)— infographic, "Knee Cap (Heavy Stuff) XXL", men's model
//   14.54.38  — flat product shot pair (charcoal), no label
//   14.54.39  — infographic, "Pure Wool Knee Cap", lifestyle + product flat
//
// KNEE CAP WITH LEG:
//   12.49.53  — flat product shot, dark brown & charcoal pair, "NDH KNEE CAP WITH LEG Normal & XL"
//   12.49.53(1)— (variant of above)
//   12.49.54  — (variant of above)
//   12.52.22  — additional flat/product shots
//   12.52.22(1)— additional flat/product shots
//   13.05.57  — product shots
//   13.05.57(1)— product shots
//   13.05.57(2)— product shots
//   13.13.12  — product shots
//   13.13.12(1)— product shots
//   13.49.23  — product shots
//   13.49.23(1)— product shots

/** @type {ProductCategory[]} */
export const productCategories = [
  {
    id: 'socks',
    slug: 'socks',
    name: 'Socks',
    shortDescription:
      'A comprehensive range of knitted socks crafted for comfort, durability, and consistent fit — suitable for all ages and seasons.',
    description:
      'NDH Knits manufactures a wide range of socks in pure wool, designed to meet the demands of the wholesale and retail market. Each pair is knitted with precision to ensure consistent sizing, comfortable fit, and lasting durability.',
    heroImage: '/socks/men/WhatsApp Image 2026-08-08 at 17.32.08 (1).jpeg',
    gallery: [],

    features: [
      'Pure Wool',
      'Naturally warm',
      'Soft & breathable',
      'All day comfort',
      'Durable & long lasting',
    ],
    sizes: [],       // To be confirmed per product
    materials: ['Pure Wool'],
    specifications: {
      Material: 'Pure Wool',
    },
    inquiryEnabled: true,

    styles: [
      // ── MEN ──────────────────────────────────────────────────────────────
      {
        id: 'men',
        name: 'Men',
        description:
          'Knitted wool socks for men — crafted for all-day comfort, natural warmth, and a durable construction suited to everyday wear.',
        heroImage: '/socks/men/WhatsApp Image 2026-08-08 at 17.32.08 (1).jpeg',
        products: [
          {
            id: 'men-classic',
            slug: 'classic',
            name: "Classic Men's Socks",
            description:
              'A crew-length knitted wool sock designed for everyday comfort. Features a ribbed cuff for a secure fit and a smooth toe finish.',
            variants: [
              {
                colour: 'Black',
                colorSwatch: '#1a1a1a',
                image: '/socks/men/WhatsApp Image 2026-08-08 at 17.32.08.jpeg',
              },
              {
                colour: 'Dark Charcoal',
                colorSwatch: '#3a3a3a',
                image: '/socks/men/WhatsApp Image 2026-08-08 at 17.32.08.jpeg',
              },
            ],
            // Gallery: flat product shot → lifestyle collages → infographic
            gallery: [
              '/socks/men/WhatsApp Image 2026-08-08 at 17.32.08.jpeg',
              '/socks/men/WhatsApp Image 2026-08-08 at 17.32.08 (1).jpeg',
              '/socks/men/WhatsApp Image 2026-08-08 at 17.32.08 (2).jpeg',
              '/socks/men/WhatsApp Image 2026-08-08 at 17.32.09.jpeg',
            ],
            sizes: [],   // To be confirmed
            materials: ['Pure Wool'],
            features: [
              'Pure Wool',
              'Naturally warm',
              'Soft & breathable',
              'All day comfort',
              'Durable & long lasting',
            ],
            specifications: {
              Material: 'Pure Wool',
              Style: "Men's Crew Sock",
            },
          },
        ],
      },

      // ── WOMEN ─────────────────────────────────────────────────────────────
      {
        id: 'women',
        name: 'Women',
        description:
          "Knitted wool socks for women — the same quality construction and natural warmth, tailored to women's sizing and fit.",
        heroImage: null,
        products: [
          {
            id: 'women-classic',
            slug: 'classic',
            name: "Classic Women's Socks",
            description:
              "A knitted wool sock crafted for women's everyday wear — comfortable, warm, and durable.",
            variants: [],   // Images to be provided
            gallery: [],
            sizes: [],
            materials: ['Pure Wool'],
            features: [],
            specifications: {},
          },
        ],
      },
    ],
  },
  {
    id: 'gloves',
    slug: 'gloves',
    name: 'Gloves',
    shortDescription:
      'Precision-knitted gloves offering warmth and flexibility, designed for wholesale supply across retail and distribution channels.',
    description:
      'Our knitted gloves are manufactured to deliver consistent warmth and a reliable fit across all sizes. Designed for bulk wholesale supply, each pair meets our standard quality benchmarks for stitching, elasticity, and finish.',
    heroImage: null,
    gallery: [],
    features: [],
    sizes: [],
    materials: [],
    specifications: {},
    inquiryEnabled: true,
    styles: [
      {
        id: 'men',
        name: 'Men',
        description: "Knitted gloves for men — warm, durable, and well-fitted for everyday use.",
        heroImage: null,
        products: [
          {
            id: 'men-classic',
            slug: 'classic',
            name: "Classic Men's Gloves",
            description: 'A knitted glove designed for warmth and a reliable fit. Details and variants to be confirmed.',
            variants: [],
            gallery: [],
            sizes: [],
            materials: [],
            features: [],
            specifications: {},
          },
        ],
      },
      {
        id: 'women',
        name: 'Women',
        description: "Knitted gloves for women — the same quality construction in women's sizing.",
        heroImage: null,
        products: [
          {
            id: 'women-classic',
            slug: 'classic',
            name: "Classic Women's Gloves",
            description: 'A knitted glove for women. Details and variants to be confirmed.',
            variants: [],
            gallery: [],
            sizes: [],
            materials: [],
            features: [],
            specifications: {},
          },
        ],
      },
    ],
  },
  {
    id: 'caps',
    slug: 'caps',
    name: 'Caps',
    shortDescription:
      'Warm, well-fitted knitted caps manufactured to meet bulk requirements with consistent quality and finish.',
    description:
      'NDH Knits manufactures knitted caps that combine warmth with a clean, market-ready finish. Produced to meet wholesale volume requirements, our caps are crafted for consistent sizing and reliable quality across every batch.',
    heroImage: null,
    gallery: [],
    features: [],
    sizes: [],
    materials: [],
    specifications: {},
    inquiryEnabled: true,
    styles: [
      {
        id: 'men',
        name: 'Men',
        description: "Knitted caps for men — warm, well-fitted, and designed for wholesale supply.",
        heroImage: null,
        products: [
          {
            id: 'men-classic',
            slug: 'classic',
            name: "Classic Men's Cap",
            description: 'A knitted cap for men. Details, variants, and images to be confirmed.',
            variants: [],
            gallery: [],
            sizes: [],
            materials: [],
            features: [],
            specifications: {},
          },
        ],
      },
      {
        id: 'women',
        name: 'Women',
        description: "Knitted caps for women — the same quality in women's sizing and styling.",
        heroImage: null,
        products: [
          {
            id: 'women-classic',
            slug: 'classic',
            name: "Classic Women's Cap",
            description: "A knitted cap for women. Details, variants, and images to be confirmed.",
            variants: [],
            gallery: [],
            sizes: [],
            materials: [],
            features: [],
            specifications: {},
          },
        ],
      },
    ],
  },
  {
    id: 'mufflers',
    slug: 'mufflers',
    name: 'Mufflers',
    shortDescription:
      'Soft, durable mufflers produced in a variety of styles to suit wholesale market demands across India.',
    description:
      'Our mufflers are knitted for softness, durability, and visual appeal. Manufactured in Ludhiana with a focus on consistent quality, they are designed to meet the diverse requirements of wholesale buyers across the Indian market.',
    heroImage: null,
    gallery: [],
    features: [],
    sizes: [],
    materials: [],
    specifications: {},
    inquiryEnabled: true,
    styles: [
      {
        id: 'classic',
        name: 'Classic',
        description: 'Classic knitted mufflers designed for warmth and everyday versatility.',
        heroImage: null,
        products: [
          {
            id: 'classic-muffler',
            slug: 'classic',
            name: 'Classic Muffler',
            description: 'A knitted muffler crafted for warmth and durability. Details, variants, and images to be confirmed.',
            variants: [],
            gallery: [],
            sizes: [],
            materials: [],
            features: [],
            specifications: {},
          },
        ],
      },
    ],
  },
  {
    id: 'thermal-wear',
    slug: 'thermal-wear',
    name: 'Thermal Wear',
    shortDescription:
      'Reliable thermal innerwear engineered to retain warmth without compromising on comfort or wearability.',
    description:
      'NDH Knits thermal wear is manufactured to provide effective insulation through the cold season. Built for comfort against the skin and durable enough for regular use, our thermal range is a reliable addition to any wholesale hosiery catalogue.',
    heroImage: null,
    gallery: [],
    features: [],
    sizes: [],
    materials: [],
    specifications: {},
    inquiryEnabled: true,
    styles: [
      {
        id: 'men',
        name: 'Men',
        description: "Thermal innerwear for men — effective insulation and all-day comfort.",
        heroImage: null,
        products: [
          {
            id: 'men-thermal-set',
            slug: 'thermal-set',
            name: "Men's Thermal Set",
            description: "A knitted thermal innerwear set for men. Details, variants, and images to be confirmed.",
            variants: [],
            gallery: [],
            sizes: [],
            materials: [],
            features: [],
            specifications: {},
          },
        ],
      },
      {
        id: 'women',
        name: 'Women',
        description: "Thermal innerwear for women — the same reliable warmth in women's sizing.",
        heroImage: null,
        products: [
          {
            id: 'women-thermal-set',
            slug: 'thermal-set',
            name: "Women's Thermal Set",
            description: "A knitted thermal innerwear set for women. Details, variants, and images to be confirmed.",
            variants: [],
            gallery: [],
            sizes: [],
            materials: [],
            features: [],
            specifications: {},
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // LEG WARMERS
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'leg-warmers',
    slug: 'leg-warmers',
    name: 'Leg Warmers',
    shortDescription:
      'A versatile range of knitted leg warmers — Footless, Knee Cap, Knee Cap with Leg, and Hipless — crafted in 100% pure wool.',
    description:
      'NDH Knits manufactures a complete range of leg warmers in 100% pure wool, designed for natural warmth, a comfortable fit, and lasting durability. Available in four distinct construction styles to meet varied wholesale and retail requirements.',
    heroImage: '/leg_warmers/footless/WhatsApp Image 2026-08-08 at 12.38.25.jpeg',
    gallery: [],

    // Category-level features — apply to all leg warmer styles
    features: [
      '100% Pure Wool',
      'Natural warmth & breathable comfort',
      'Soft & gentle on skin',
      'Stretchable fit',
      'Durable & long lasting',
      'Comfortable fit that stays in place',
      'Natural & skin friendly',
      'Unisex design',
    ],

    // Category-level sizes — confirm at product level if different
    sizes: ['Normal', 'XL', 'XXL'],

    // Category-level material
    materials: ['100% Pure Wool'],

    // Category-level specifications
    specifications: {
      Material: '100% Pure Wool',
      'Available Sizes': 'Normal, XL, XXL',
      Design: 'Unisex',
    },

    inquiryEnabled: true,

    // ── Styles ──────────────────────────────────────────────────────────────
    styles: [
      // ── FOOTLESS ──────────────────────────────────────────────────────────
      {
        id: 'footless',
        name: 'Footless',
        description:
          'Knitted leg warmers without a foot section — designed to provide warmth from ankle to thigh while allowing full freedom of movement.',
        heroImage: '/leg_warmers/footless/WhatsApp Image 2026-08-08 at 12.38.25.jpeg',
        products: [
          {
            id: 'footless-classic',
            slug: 'classic',
            name: 'Classic Footless',
            description:
              'A full-length knitted leg warmer crafted in 100% pure wool. Runs from ankle to thigh without a foot section, providing natural warmth while keeping the foot free.',
            variants: [
              {
                colour: 'Black',
                colorSwatch: '#1a1a1a',
                // Flat product shot — black colourway
                image: '/leg_warmers/footless/WhatsApp Image 2026-08-08 at 12.38.24.jpeg',
              },
              {
                colour: 'Dark Brown',
                colorSwatch: '#3b2314',
                // Dark brown from same flat product shot (right piece)
                image: '/leg_warmers/footless/WhatsApp Image 2026-08-08 at 12.38.24.jpeg',
              },
              {
                colour: 'Navy',
                colorSwatch: '#1b2a4a',
                // Flat product shot — navy colourway
                image: '/leg_warmers/footless/WhatsApp Image 2026-08-08 at 14.26.34.jpeg',
              },
              {
                colour: 'Grey',
                colorSwatch: '#8a8a8a',
                // Flat product shot — grey colourway
                image: '/leg_warmers/footless/WhatsApp Image 2026-08-08 at 14.26.34.jpeg',
              },
            ],
            // Gallery order: product shots → lifestyle → infographics
            gallery: [
              '/leg_warmers/footless/WhatsApp Image 2026-08-08 at 12.38.24.jpeg',
              '/leg_warmers/footless/WhatsApp Image 2026-08-08 at 14.26.34.jpeg',
              '/leg_warmers/footless/WhatsApp Image 2026-08-08 at 12.38.25.jpeg',
              '/leg_warmers/footless/WhatsApp Image 2026-08-08 at 12.38.26.jpeg',
              '/leg_warmers/footless/WhatsApp Image 2026-08-08 at 14.26.35 (1).jpeg',
              '/leg_warmers/footless/WhatsApp Image 2026-08-08 at 14.26.35.jpeg',
              '/leg_warmers/footless/WhatsApp Image 2026-08-08 at 14.26.57.jpeg',
              '/leg_warmers/footless/WhatsApp Image 2026-08-08 at 14.35.06.jpeg',
            ],
            sizes: ['Normal', 'XL'],
            materials: ['100% Pure Wool'],
            features: [],
            specifications: {
              Material: '100% Pure Wool',
              Sizes: 'Normal, XL',
              Design: 'Unisex',
            },
          },
        ],
      },

      // ── KNEE CAP ──────────────────────────────────────────────────────────
      {
        id: 'knee-cap',
        name: 'Knee Cap',
        description:
          'A fitted knitted sleeve covering the knee joint — providing targeted warmth, compression support and a secure hold throughout the day.',
        heroImage: '/leg_warmers/knee_cap/WhatsApp Image 2026-08-08 at 12.45.30 (1).jpeg',
        products: [
          {
            id: 'knee-cap-classic',
            slug: 'classic',
            name: 'Classic Knee Cap',
            description:
              'A knitted knee cap in 100% pure wool offering natural warmth and a comfortable, stretchable fit. Suitable for daily wear and available in Normal and XL sizes.',
            variants: [
              {
                colour: 'Black',
                colorSwatch: '#1a1a1a',
                image: '/leg_warmers/knee_cap/WhatsApp Image 2026-08-08 at 12.45.30.jpeg',
              },
              {
                colour: 'Grey',
                colorSwatch: '#8a8a8a',
                image: '/leg_warmers/knee_cap/WhatsApp Image 2026-08-08 at 12.45.30.jpeg',
              },
              {
                colour: 'Navy',
                colorSwatch: '#1b2a4a',
                image: '/leg_warmers/knee_cap/WhatsApp Image 2026-08-08 at 12.45.30 (1).jpeg',
              },
              {
                colour: 'Dark Charcoal',
                colorSwatch: '#3a3a3a',
                image: '/leg_warmers/knee_cap/WhatsApp Image 2026-08-08 at 14.54.38.jpeg',
              },
            ],
            // Gallery: product shots → lifestyle → infographics
            gallery: [
              '/leg_warmers/knee_cap/WhatsApp Image 2026-08-08 at 12.45.30.jpeg',
              '/leg_warmers/knee_cap/WhatsApp Image 2026-08-08 at 12.48.35.jpeg',
              '/leg_warmers/knee_cap/WhatsApp Image 2026-08-08 at 14.54.38.jpeg',
              '/leg_warmers/knee_cap/WhatsApp Image 2026-08-08 at 12.45.30 (1).jpeg',
              '/leg_warmers/knee_cap/WhatsApp Image 2026-08-08 at 12.45.30 (2).jpeg',
              '/leg_warmers/knee_cap/WhatsApp Image 2026-08-08 at 12.46.29.jpeg',
              '/leg_warmers/knee_cap/WhatsApp Image 2026-08-08 at 12.46.29 (1).jpeg',
              '/leg_warmers/knee_cap/WhatsApp Image 2026-08-08 at 14.54.39.jpeg',
            ],
            sizes: ['Normal', 'XL'],
            materials: ['100% Pure Wool'],
            features: [
              'Soft & Comfortable',
              'Stretchable Fit',
              'Breathable Fabric',
              'Unisex Design',
            ],
            specifications: {
              Material: '100% Pure Wool',
              Sizes: 'Normal, XL',
              Design: 'Unisex',
            },
          },
          {
            id: 'knee-cap-heavy',
            slug: 'heavy',
            name: 'Heavy Knee Cap',
            description:
              'A heavier-gauge knitted knee cap designed for extra support and warmth. Available in XXL for broader coverage.',
            variants: [
              {
                colour: 'Dark Charcoal',
                colorSwatch: '#3a3a3a',
                image: '/leg_warmers/knee_cap/WhatsApp Image 2026-08-08 at 12.48.35 (1).jpeg',
              },
            ],
            gallery: [
              '/leg_warmers/knee_cap/WhatsApp Image 2026-08-08 at 12.48.35 (1).jpeg',
            ],
            sizes: ['XXL'],
            materials: ['100% Pure Wool'],
            features: [
              'Extra Support',
              'Natural Warmth',
              'Breathable',
              'Soft & Comfortable',
              'Durable & Stretchable',
            ],
            specifications: {
              Material: '100% Pure Wool',
              Sizes: 'XXL',
              Design: 'Unisex',
              Type: 'Heavy Gauge',
            },
          },
        ],
      },

      // ── KNEE CAP WITH LEG ─────────────────────────────────────────────────
      {
        id: 'knee-cap-with-leg',
        name: 'Knee Cap with Leg',
        description:
          'An extended knee cap that includes a leg portion — combining knee joint support with lower leg warmth in a single knitted piece.',
        heroImage: '/leg_warmers/knee_cap_leg/WhatsApp Image 2026-08-08 at 12.49.53.jpeg',
        products: [
          {
            id: 'knee-cap-leg-classic',
            slug: 'classic',
            name: 'Classic Knee Cap with Leg',
            description:
              'A combined knee cap and leg warmer in one piece, providing targeted knee support alongside full lower leg warmth. Crafted in 100% pure wool.',
            variants: [
              {
                colour: 'Dark Brown',
                colorSwatch: '#3b2314',
                image: '/leg_warmers/knee_cap_leg/WhatsApp Image 2026-08-08 at 12.49.53.jpeg',
              },
              {
                colour: 'Dark Charcoal',
                colorSwatch: '#3a3a3a',
                image: '/leg_warmers/knee_cap_leg/WhatsApp Image 2026-08-08 at 12.49.53.jpeg',
              },
            ],
            // Gallery: product shots first, then additional views
            gallery: [
              '/leg_warmers/knee_cap_leg/WhatsApp Image 2026-08-08 at 12.49.53.jpeg',
              '/leg_warmers/knee_cap_leg/WhatsApp Image 2026-08-08 at 12.49.53 (1).jpeg',
              '/leg_warmers/knee_cap_leg/WhatsApp Image 2026-08-08 at 12.49.54.jpeg',
              '/leg_warmers/knee_cap_leg/WhatsApp Image 2026-08-08 at 12.52.22.jpeg',
              '/leg_warmers/knee_cap_leg/WhatsApp Image 2026-08-08 at 12.52.22 (1).jpeg',
              '/leg_warmers/knee_cap_leg/WhatsApp Image 2026-08-08 at 13.05.57.jpeg',
              '/leg_warmers/knee_cap_leg/WhatsApp Image 2026-08-08 at 13.05.57 (1).jpeg',
              '/leg_warmers/knee_cap_leg/WhatsApp Image 2026-08-08 at 13.05.57 (2).jpeg',
              '/leg_warmers/knee_cap_leg/WhatsApp Image 2026-08-08 at 13.13.12.jpeg',
              '/leg_warmers/knee_cap_leg/WhatsApp Image 2026-08-08 at 13.13.12 (1).jpeg',
              '/leg_warmers/knee_cap_leg/WhatsApp Image 2026-08-08 at 13.49.23.jpeg',
              '/leg_warmers/knee_cap_leg/WhatsApp Image 2026-08-08 at 13.49.23 (1).jpeg',
            ],
            sizes: ['Normal', 'XL'],
            materials: ['100% Pure Wool'],
            features: [],
            specifications: {
              Material: '100% Pure Wool',
              Sizes: 'Normal, XL',
              Design: 'Unisex',
            },
          },
        ],
      },

      // ── HIPLESS ───────────────────────────────────────────────────────────
      {
        id: 'hipless',
        name: 'Hipless',
        description:
          'Full-length leg warmers covering ankle to upper thigh without a hip section — maximum leg warmth, easy to layer.',
        heroImage: null,
        products: [
          {
            id: 'hipless-classic',
            slug: 'classic',
            name: 'Classic Hipless',
            description:
              'Full-length leg warmer without a hip section. Provides maximum leg coverage and warmth while remaining easy to put on and layer over other garments.',
            variants: [],   // No images uploaded yet — placeholder
            gallery: [],
            sizes: [],      // To be confirmed
            materials: ['100% Pure Wool'],
            features: [],
            specifications: {},
          },
        ],
      },
    ],
  },

  {
    id: 'knitted-essentials',
    slug: 'knitted-essentials',
    name: 'Knitted Essentials',
    shortDescription:
      'An assorted range of quality knitted products complementing our core hosiery line.',
    description:
      'Beyond our core hosiery categories, NDH Knits produces a range of knitted essentials crafted to the same manufacturing and quality standards.',
    heroImage: null,
    gallery: [],
    features: [],
    sizes: [],
    materials: [],
    specifications: {},
    inquiryEnabled: true,
    styles: [
      {
        id: 'essentials',
        name: 'Essentials',
        description: 'A curated range of knitted essential products. More styles will be added as the range expands.',
        heroImage: null,
        products: [
          {
            id: 'knitted-essential-classic',
            slug: 'classic',
            name: 'Knitted Essential',
            description: 'A quality knitted essential product. Details, variants, and images to be confirmed.',
            variants: [],
            gallery: [],
            sizes: [],
            materials: [],
            features: [],
            specifications: {},
          },
        ],
      },
    ],
  },
];

// ─── Lookup helpers ──────────────────────────────────────────────────────────

export function getCategoryBySlug(slug) {
  return productCategories.find((c) => c.slug === slug);
}

export function getStyleBySlug(categorySlug, styleSlug) {
  const cat = getCategoryBySlug(categorySlug);
  return cat?.styles?.find((s) => s.id === styleSlug) ?? null;
}

export function getProductBySlug(categorySlug, styleSlug, productSlug) {
  const style = getStyleBySlug(categorySlug, styleSlug);
  return style?.products?.find((p) => p.slug === productSlug) ?? null;
}

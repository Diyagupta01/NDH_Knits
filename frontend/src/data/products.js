/**
 * NDH Knits — Product Category Data
 *
 * This is the single source of truth for all product categories.
 * Replace placeholder arrays with real data when available.
 * The structure is designed to support future expansion to:
 *   - Multiple products per category
 *   - Product variants and SKUs
 *   - Downloadable catalogues
 *   - Detailed specifications
 */

/**
 * @typedef {Object} SubCategory
 * @property {string} id          - Unique identifier
 * @property {string} name        - Display name
 * @property {string} description - Short description
 */

/**
 * @typedef {Object} ProductCategory
 * @property {string}        id               - Unique identifier
 * @property {string}        slug             - URL slug (must match route)
 * @property {string}        name             - Display name
 * @property {string}        shortDescription - One-liner for cards/grids
 * @property {string}        description      - Longer paragraph for category page overview
 * @property {string}        heroImage        - Path or URL (null = placeholder)
 * @property {string[]}      gallery          - Array of image paths (empty = placeholders)
 * @property {string[]}      features         - Product feature bullet points
 * @property {string[]}      sizes            - Available sizes
 * @property {string[]}      materials        - Material/fabric information
 * @property {string[]}      colors           - Available color options
 * @property {Object}        specifications   - Key–value spec table (optional)
 * @property {SubCategory[]} subcategories    - Sub-variants within the category (optional)
 * @property {boolean}       inquiryEnabled   - Whether the inquiry CTA is shown
 */

/** @type {ProductCategory[]} */
export const productCategories = [
  {
    id: 'socks',
    slug: 'socks',
    name: 'Socks',
    shortDescription:
      'A comprehensive range of knitted socks crafted for comfort, durability, and consistent fit — suitable for all ages and seasons.',
    description:
      'NDH Knits manufactures a wide range of socks designed to meet the demands of the wholesale and retail market. Each pair is knitted with precision to ensure consistent sizing, comfortable fit, and lasting durability. Our socks are available for all age groups and across seasonal requirements.',
    heroImage: null,
    gallery: [],
    features: [],
    sizes: [],
    materials: [],
    colors: [],
    specifications: {},
    subcategories: [],
    inquiryEnabled: true,
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
    colors: [],
    specifications: {},
    subcategories: [],
    inquiryEnabled: true,
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
    colors: [],
    specifications: {},
    subcategories: [],
    inquiryEnabled: true,
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
    colors: [],
    specifications: {},
    subcategories: [],
    inquiryEnabled: true,
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
    colors: [],
    specifications: {},
    subcategories: [],
    inquiryEnabled: true,
  },
  {
    id: 'leg-warmers',
    slug: 'leg-warmers',
    name: 'Leg Warmers',
    shortDescription:
      'A versatile range of knitted leg warmers available in multiple styles — from footless and knee caps to full-length and hipless variants.',
    description:
      'NDH Knits manufactures a complete range of leg warmers designed for comfort, warmth, and consistent fit. Available in four distinct styles to meet varied wholesale and retail requirements, our leg warmers are knitted with the same precision and quality standards applied across all NDH Knits products.',
    heroImage: null,
    gallery: [],
    features: [],
    sizes: [],
    materials: [],
    colors: [],
    specifications: {},
    subcategories: [
      {
        id: 'footless',
        name: 'Footless',
        description:
          'Knitted leg warmers without a foot section — designed to provide warmth from ankle to thigh while allowing full freedom of movement for the foot.',
      },
      {
        id: 'knee-cap',
        name: 'Knee Cap',
        description:
          'A fitted knitted sleeve designed to provide targeted warmth and compression support around the knee joint.',
      },
      {
        id: 'knee-cap-with-leg',
        name: 'Knee Cap with Leg',
        description:
          'An extended version of the knee cap that includes a leg portion, offering combined knee support and lower leg warmth in a single knitted piece.',
      },
      {
        id: 'hipless',
        name: 'Hipless',
        description:
          'Full-length leg warmers that cover from ankle to upper thigh without a hip section, providing maximum leg warmth while remaining easy to layer.',
      },
    ],
    inquiryEnabled: true,
  },
  {
    id: 'knitted-essentials',
    slug: 'knitted-essentials',
    name: 'Knitted Essentials',
    shortDescription:
      'An assorted range of quality knitted products complementing our core hosiery line.',
    description:
      'Beyond our core hosiery categories, NDH Knits produces a range of knitted essentials — complementary products crafted to the same manufacturing and quality standards. This category is designed to accommodate an expanding product range as new items are added.',
    heroImage: null,
    gallery: [],
    features: [],
    sizes: [],
    materials: [],
    colors: [],
    specifications: {},
    subcategories: [],
    inquiryEnabled: true,
  },
];

/**
 * Get a single category by slug.
 * @param {string} slug
 * @returns {ProductCategory | undefined}
 */
export function getCategoryBySlug(slug) {
  return productCategories.find((c) => c.slug === slug);
}

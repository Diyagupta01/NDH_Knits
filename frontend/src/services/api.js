/**
 * NDH Knits — API service layer
 * All calls to the FastAPI backend go through here.
 */

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

/**
 * Generic fetch wrapper with error handling.
 * @template T
 * @param {string} path
 * @param {RequestInit} [options]
 * @returns {Promise<T>}
 */
async function apiFetch(path, options = {}) {
  const url = `${BASE_URL}${path}`;

  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    let detail = `Request failed with status ${response.status}`;
    try {
      const body = await response.json();
      if (body?.detail) detail = body.detail;
    } catch {
      // Ignore JSON parse errors
    }
    throw new Error(detail);
  }

  return response.json();
}

// ── Inquiry ────────────────────────────────────────────────────────────────

/**
 * Submit a contact/inquiry form.
 * @param {{
 *   name: string,
 *   company_name?: string,
 *   phone: string,
 *   email: string,
 *   product_category?: string,
 *   quantity?: string,
 *   message: string,
 * }} data
 * @returns {Promise<{ success: boolean, message: string, inquiry_id: string, submitted_at: string }>}
 */
export function submitInquiry(data) {
  return apiFetch('/inquiries/', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

// ── Products ───────────────────────────────────────────────────────────────

/**
 * Fetch all product categories.
 * @returns {Promise<{ categories: ProductCategory[], total: number }>}
 */
export function fetchCategories() {
  return apiFetch('/products/');
}

/**
 * Fetch a single product category by slug.
 * @param {string} slug
 * @returns {Promise<ProductCategory>}
 */
export function fetchCategory(slug) {
  return apiFetch(`/products/${slug}`);
}

/**
 * @typedef {Object} ProductCategory
 * @property {string}   id
 * @property {string}   slug
 * @property {string}   name
 * @property {string}   short_description
 * @property {string}   description
 * @property {string|null} hero_image
 * @property {string[]} gallery
 * @property {string[]} features
 * @property {string[]} sizes
 * @property {string[]} materials
 * @property {string[]} colors
 * @property {Object}   specifications
 * @property {boolean}  inquiry_enabled
 */

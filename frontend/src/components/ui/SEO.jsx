import { Helmet } from 'react-helmet-async';

const SITE_NAME   = 'NDH Knits';
const BASE_URL    = 'https://ndhknits.com';
const DEFAULT_OG  = `${BASE_URL}/og-image.svg`;
const DEFAULT_DESC = 'Premium hosiery manufacturer in Ludhiana, Punjab, India. Quality socks, gloves, caps, mufflers, thermal wear and knitted essentials for wholesale buyers since 1957.';

/**
 * Drop <SEO> into any page to set per-page title, description, canonical and OG tags.
 *
 * @param {string}  title        - Page-specific title (appended with " | NDH Knits")
 * @param {string}  description  - Page meta description (max ~155 chars)
 * @param {string}  canonical    - Canonical path e.g. "/about" (BASE_URL is prepended)
 * @param {string}  ogImage      - Optional OG image URL (defaults to og-image.png)
 * @param {string}  ogType       - OG type (defaults to "website")
 */
export default function SEO({
  title,
  description = DEFAULT_DESC,
  canonical,
  ogImage = DEFAULT_OG,
  ogType = 'website',
}) {
  const fullTitle    = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Premium Hosiery Manufacturer | Ludhiana, Punjab`;
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : null;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:title"       content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type"        content={ogType} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:image"       content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:title"       content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={ogImage} />
    </Helmet>
  );
}

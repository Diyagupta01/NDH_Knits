import { Link } from 'react-router-dom';
import { productCategories } from '../data/products';
import ImagePlaceholder from '../components/ui/ImagePlaceholder';
import Button from '../components/ui/Button';
import SEO from '../components/ui/SEO';
import styles from './ProductsPage.module.css';

export default function ProductsPage() {
  return (
    <div className={styles.page}>
      <SEO
        title="Our Products — Hosiery Catalogue"
        description="Browse NDH Knits' full range of knitted hosiery products — socks, gloves, caps, mufflers, thermal wear, leg warmers and knitted essentials. Wholesale supply from Ludhiana, Punjab."
        canonical="/products"
      />

      {/* ── Page Hero ──────────────────────────────── */}
      <section className={styles.pageHero} aria-label="Products catalogue hero">
        <div className="container">
          <p className="section-label" style={{ color: 'var(--color-accent-light)' }}>Product Catalogue</p>
          <h1 className={styles.heroTitle}>Our Products</h1>
          <div className={styles.heroDivider} />
          <p className={styles.heroSubtitle}>
            {productCategories.length} categories of precision-knitted hosiery products — manufactured in
            Ludhiana and supplied to wholesalers and retailers across India.
          </p>
        </div>
      </section>

      {/* ── Category Grid ──────────────────────────── */}
      <section className={`section ${styles.catalogueSection}`} aria-labelledby="catalogue-heading">
        <div className="container">
          <h2 className="sr-only" id="catalogue-heading">Product Categories</h2>
          <div className={styles.grid}>
            {productCategories.map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Inquiry CTA ────────────────────────────── */}
      <section className={styles.ctaBanner} aria-label="Wholesale inquiry">
        <div className="container">
          <div className={styles.ctaInner}>
            <div>
              <h2 className={styles.ctaTitle}>Looking for Wholesale Supply?</h2>
              <p className={styles.ctaSubtitle}>
                Contact us for bulk pricing, product availability, and customisation options.
              </p>
            </div>
            <Button as={Link} to="/contact" variant="primary" size="lg">
              Send an Inquiry
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}

function CategoryCard({ category }) {
  const { slug, name, shortDescription, heroImage } = category;
  return (
    <Link
      to={`/products/${slug}`}
      className={styles.card}
      aria-label={`View ${name} products`}
    >
      <div className={styles.cardImage}>
        {heroImage ? (
          <img
            src={heroImage}
            alt={`NDH Knits ${name} — wholesale knitted hosiery, Ludhiana`}
            className={styles.realImage}
            loading="lazy"
          />
        ) : (
          <ImagePlaceholder label={name} aspect="16/9" className={styles.imgPlaceholder} />
        )}
        <div className={styles.cardOverlay} aria-hidden="true" />
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.cardName}>{name}</h3>
        <p className={styles.cardDesc}>{shortDescription}</p>
        <span className={styles.cardCta} aria-hidden="true">
          View Category
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4"/>
          </svg>
        </span>
      </div>
    </Link>
  );
}

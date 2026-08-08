import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getCategoryBySlug, getStyleBySlug, getProductBySlug } from '../../data/products';
import ImagePlaceholder from '../../components/ui/ImagePlaceholder';
import Button from '../../components/ui/Button';
import styles from './ProductDetailPage.module.css';

export default function ProductDetailPage() {
  const { categorySlug, styleSlug, productSlug } = useParams();

  const category = getCategoryBySlug(categorySlug);
  const style    = getStyleBySlug(categorySlug, styleSlug);
  const product  = getProductBySlug(categorySlug, styleSlug, productSlug);

  if (!category || !style || !product) {
    return <Navigate to={`/products/${categorySlug ?? ''}`} replace />;
  }

  return (
    <ProductDetail
      category={category}
      style={style}
      product={product}
      categorySlug={categorySlug}
      styleSlug={styleSlug}
    />
  );
}

// ─────────────────────────────────────────────────────────────────────────────

function ProductDetail({ category, style, product, categorySlug, styleSlug }) {
  const hasVariants = product.variants && product.variants.length > 0;
  const [activeVariantIndex, setActiveVariantIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex]     = useState(0);
  const [lightboxOpen, setLightboxOpen]             = useState(false);

  const activeVariant = hasVariants ? product.variants[activeVariantIndex] : null;

  // Primary image: active variant image if available, else first gallery image
  const primaryImage = activeVariant?.image || product.gallery?.[0] || null;

  // Gallery: combine variant image at top with rest of product gallery (deduped)
  const galleryImages = buildGallery(product, activeVariant);

  // When a variant is selected, reset gallery index and update primary
  function selectVariant(index) {
    setActiveVariantIndex(index);
    setActiveImageIndex(0);
  }

  // Inquiry URL — carries product context as query params
  const inquiryUrl = `/contact?product=${encodeURIComponent(product.name)}&style=${encodeURIComponent(style.name)}&category=${encodeURIComponent(category.name)}`;

  return (
    <div className={styles.page}>

      {/* ── Breadcrumb ────────────────────────────── */}
      <div className={styles.breadcrumbBar}>
        <div className="container">
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link to="/" className={styles.bcLink}>Home</Link>
            <Chevron />
            <Link to="/products" className={styles.bcLink}>Products</Link>
            <Chevron />
            <Link to={`/products/${categorySlug}`} className={styles.bcLink}>{category.name}</Link>
            <Chevron />
            <Link to={`/products/${categorySlug}?style=${styleSlug}`} className={styles.bcLink}>{style.name}</Link>
            <Chevron />
            <span className={styles.bcCurrent} aria-current="page">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* ── Main product layout ───────────────────── */}
      <section className={styles.productLayout} aria-label={product.name}>
        <div className="container">
          <div className={styles.twoCol}>

            {/* ── LEFT — Image panel ──────────────── */}
            <div className={styles.imagePanel}>

              {/* Primary image */}
              <div
                className={styles.primaryImage}
                onClick={() => galleryImages.length > 0 && setLightboxOpen(true)}
                role={galleryImages.length > 0 ? 'button' : undefined}
                tabIndex={galleryImages.length > 0 ? 0 : undefined}
                aria-label={galleryImages.length > 0 ? 'View full image' : undefined}
                onKeyDown={(e) => e.key === 'Enter' && setLightboxOpen(true)}
              >
                {primaryImage ? (
                  <img
                    src={galleryImages[activeImageIndex] || primaryImage}
                    alt={`${product.name}${activeVariant ? ` — ${activeVariant.colour}` : ''}`}
                    className={styles.primaryImg}
                  />
                ) : (
                  <ImagePlaceholder label={product.name} aspect="4/3" className={styles.primaryPlaceholder} />
                )}
                {galleryImages.length > 1 && (
                  <span className={styles.zoomHint} aria-hidden="true">
                    <ZoomIcon /> Click to enlarge
                  </span>
                )}
              </div>

              {/* Thumbnails */}
              {galleryImages.length > 1 && (
                <div className={styles.thumbnails} role="list" aria-label="Product images">
                  {galleryImages.map((img, i) => (
                    <button
                      key={i}
                      role="listitem"
                      className={`${styles.thumb} ${i === activeImageIndex ? styles.thumbActive : ''}`}
                      onClick={() => setActiveImageIndex(i)}
                      aria-label={`View image ${i + 1}`}
                      aria-pressed={i === activeImageIndex}
                    >
                      <img src={img} alt="" className={styles.thumbImg} loading="lazy" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* ── RIGHT — Product info ─────────────── */}
            <div className={styles.infoPanel}>

              {/* Style tag */}
              <Link
                to={`/products/${categorySlug}?style=${styleSlug}`}
                className={styles.styleTag}
              >
                {style.name}
              </Link>

              <h1 className={styles.productName}>{product.name}</h1>
              <p className={styles.productDesc}>{product.description}</p>

              <div className={styles.divider} aria-hidden="true" />

              {/* Colour variants */}
              {hasVariants && (
                <div className={styles.section}>
                  <p className={styles.sectionLabel}>
                    Available Colours
                    {activeVariant && (
                      <span className={styles.selectedValue}>{activeVariant.colour}</span>
                    )}
                  </p>
                  <div className={styles.variantSwatches}>
                    {product.variants.map((v, i) => (
                      <button
                        key={v.colour}
                        className={`${styles.swatch} ${i === activeVariantIndex ? styles.swatchActive : ''}`}
                        style={{ backgroundColor: v.colorSwatch }}
                        onClick={() => selectVariant(i)}
                        aria-label={`Select ${v.colour}`}
                        aria-pressed={i === activeVariantIndex}
                        title={v.colour}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* No variants placeholder */}
              {!hasVariants && (
                <div className={styles.section}>
                  <p className={styles.sectionLabel}>Available Colours</p>
                  <p className={styles.placeholderNote}>
                    Colour options will be listed here. Contact us for current availability.
                  </p>
                </div>
              )}

              {/* Sizes */}
              <div className={styles.section}>
                <p className={styles.sectionLabel}>Available Sizes</p>
                {product.sizes?.length > 0 ? (
                  <div className={styles.sizeOptions}>
                    {product.sizes.map((s) => (
                      <span key={s} className={styles.sizeChip}>{s}</span>
                    ))}
                  </div>
                ) : (
                  <p className={styles.placeholderNote}>
                    Size information will be listed here. Contact us for details.
                  </p>
                )}
              </div>

              {/* Material */}
              <div className={styles.section}>
                <p className={styles.sectionLabel}>Material</p>
                {product.materials?.length > 0 ? (
                  <p className={styles.materialValue}>{product.materials.join(', ')}</p>
                ) : category.materials?.length > 0 ? (
                  <p className={styles.materialValue}>{category.materials.join(', ')}</p>
                ) : (
                  <p className={styles.placeholderNote}>Material information to be confirmed.</p>
                )}
              </div>

              {/* Features */}
              {product.features?.length > 0 && (
                <div className={styles.section}>
                  <p className={styles.sectionLabel}>Features</p>
                  <ul className={styles.featureList}>
                    {product.features.map((f, i) => (
                      <li key={i} className={styles.featureItem}>
                        <span className={styles.featureDot} aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Specifications */}
              {Object.keys(product.specifications || {}).length > 0 && (
                <div className={styles.section}>
                  <p className={styles.sectionLabel}>Specifications</p>
                  <table className={styles.specTable}>
                    <tbody>
                      {Object.entries(product.specifications).map(([k, v]) => (
                        <tr key={k}>
                          <th scope="row">{k}</th>
                          <td>{v}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              <div className={styles.divider} aria-hidden="true" />

              {/* CTA */}
              <div className={styles.ctaBlock}>
                <Button as={Link} to={inquiryUrl} variant="primary" size="lg">
                  Send an Inquiry
                </Button>
                <Link
                  to={`/products/${categorySlug}?style=${styleSlug}`}
                  className={styles.backLink}
                >
                  ← Back to {style.name}
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── Full Gallery ─────────────────────────── */}
      {galleryImages.length > 1 && (
        <section className={`section ${styles.gallerySection}`} aria-labelledby="gallery-heading">
          <div className="container">
            <p className="section-label">Product Gallery</p>
            <h2 className="section-title" id="gallery-heading">{product.name}</h2>
            <div className="divider" />
            <div className={styles.galleryGrid}>
              {galleryImages.map((img, i) => (
                <button
                  key={i}
                  className={styles.galleryItem}
                  onClick={() => { setActiveImageIndex(i); setLightboxOpen(true); }}
                  aria-label={`View image ${i + 1}`}
                >
                  <img
                    src={img}
                    alt={`${product.name} — image ${i + 1}`}
                    className={styles.galleryImg}
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Inquiry CTA ──────────────────────────── */}
      <section className={styles.inquiryCta} aria-label="Product inquiry">
        <div className="container">
          <div className={styles.inquiryInner}>
            <div>
              <h2 className={styles.inquiryTitle}>Interested in this product?</h2>
              <p className={styles.inquirySubtitle}>
                Contact us for product details, wholesale inquiries, availability and pricing.
              </p>
            </div>
            <div className={styles.inquiryButtons}>
              <Button as={Link} to={inquiryUrl} variant="primary" size="lg">
                Send an Inquiry
              </Button>
              <Button as={Link} to={`/products/${categorySlug}`} variant="secondary" size="lg">
                View All {category.name}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Lightbox ─────────────────────────────── */}
      {lightboxOpen && galleryImages.length > 0 && (
        <Lightbox
          images={galleryImages}
          activeIndex={activeImageIndex}
          onNavigate={setActiveImageIndex}
          onClose={() => setLightboxOpen(false)}
          productName={product.name}
        />
      )}

    </div>
  );
}

// ─── Lightbox ─────────────────────────────────────────────────────────────────

function Lightbox({ images, activeIndex, onNavigate, onClose, productName }) {
  function prev() { onNavigate((activeIndex - 1 + images.length) % images.length); }
  function next() { onNavigate((activeIndex + 1) % images.length); }

  // Close on backdrop click
  function handleBackdrop(e) {
    if (e.target === e.currentTarget) onClose();
  }

  // Keyboard navigation
  function handleKey(e) {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  }

  return (
    <div
      className={styles.lightbox}
      role="dialog"
      aria-modal="true"
      aria-label={`${productName} image viewer`}
      onClick={handleBackdrop}
      onKeyDown={handleKey}
      tabIndex={-1}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
    >
      <button className={styles.lightboxClose} onClick={onClose} aria-label="Close image viewer">
        <CloseIcon />
      </button>

      {images.length > 1 && (
        <button className={`${styles.lightboxNav} ${styles.lightboxPrev}`} onClick={prev} aria-label="Previous image">
          <ChevronLeftIcon />
        </button>
      )}

      <div className={styles.lightboxImageWrap}>
        <img
          src={images[activeIndex]}
          alt={`${productName} — image ${activeIndex + 1} of ${images.length}`}
          className={styles.lightboxImg}
        />
      </div>

      {images.length > 1 && (
        <button className={`${styles.lightboxNav} ${styles.lightboxNext}`} onClick={next} aria-label="Next image">
          <ChevronRightIcon />
        </button>
      )}

      <p className={styles.lightboxCounter} aria-live="polite">
        {activeIndex + 1} / {images.length}
      </p>
    </div>
  );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Build a deduplicated, ordered gallery for the product detail view.
 * Order: active variant image first → rest of product.gallery
 */
function buildGallery(product, activeVariant) {
  const images = [];
  if (activeVariant?.image) images.push(activeVariant.image);
  for (const img of product.gallery || []) {
    if (!images.includes(img)) images.push(img);
  }
  return images;
}

// ─── Icons ────────────────────────────────────────────────────────────────────

function Chevron() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 2l4 4-4 4" />
    </svg>
  );
}

function ZoomIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
      <line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

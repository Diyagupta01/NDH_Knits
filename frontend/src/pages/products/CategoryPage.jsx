import { useParams, Link, Navigate } from 'react-router-dom';
import { getCategoryBySlug, productCategories } from '../../data/products';
import ImagePlaceholder from '../../components/ui/ImagePlaceholder';
import Button from '../../components/ui/Button';
import styles from './CategoryPage.module.css';

export default function CategoryPage() {
  const { slug } = useParams();
  const category = getCategoryBySlug(slug);

  // Unknown slug → redirect to products landing
  if (!category) return <Navigate to="/products" replace />;

  const {
    name,
    description,
    features,
    sizes,
    materials,
    colors,
    specifications,
    gallery,
    heroImage,
    subcategories = [],
    inquiryEnabled,
  } = category;

  const currentIndex = productCategories.findIndex((c) => c.slug === slug);
  const prevCat = currentIndex > 0 ? productCategories[currentIndex - 1] : null;
  const nextCat = currentIndex < productCategories.length - 1 ? productCategories[currentIndex + 1] : null;

  return (
    <div className={styles.page}>

      {/* ── Category Hero ──────────────────────────── */}
      <section className={styles.hero} aria-label={`${name} category hero`}>
        <div className={styles.heroBg}>
          {heroImage ? (
            <img
              src={heroImage}
              alt={`${name} — hero`}
              className={styles.heroBgImage}
            />
          ) : (
            <ImagePlaceholder
              label={`${name} — Hero Image`}
              aspect="21/9"
              className={styles.heroBgImage}
            />
          )}
          <div className={styles.heroOverlay} aria-hidden="true" />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link to="/" className={styles.breadcrumbLink}>Home</Link>
            <span className={styles.breadcrumbSep} aria-hidden="true">/</span>
            <Link to="/products" className={styles.breadcrumbLink}>Products</Link>
            <span className={styles.breadcrumbSep} aria-hidden="true">/</span>
            <span className={styles.breadcrumbCurrent} aria-current="page">{name}</span>
          </nav>
          <h1 className={styles.heroTitle}>{name}</h1>
          <p className={styles.heroDesc}>{description}</p>
          {inquiryEnabled && (
            <Button as={Link} to="/contact" variant="primary" size="lg">
              Send an Inquiry
            </Button>
          )}
        </div>
      </section>

      {/* ── Subcategories ──────────────────────────── */}
      {subcategories.length > 0 && (
        <section className={`section ${styles.subcategoriesSection}`} aria-labelledby="subcategories-heading">
          <div className="container">
            <p className="section-label">Available Styles</p>
            <h2 className="section-title" id="subcategories-heading">
              {name} Variants
            </h2>
            <div className="divider" />
            <div className={styles.subcategoriesGrid}>
              {subcategories.map((sub, index) => (
                <div key={sub.id} className={styles.subCard}>
                  <div className={styles.subCardNumber} aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className={styles.subCardImage}>
                    {sub.heroImage ? (
                      <img
                        src={sub.heroImage}
                        alt={`${name} — ${sub.name}`}
                        className={styles.subCardImg}
                        loading="lazy"
                      />
                    ) : (
                      <ImagePlaceholder
                        label={`${name} — ${sub.name}`}
                        aspect="4/3"
                      />
                    )}
                  </div>
                  <div className={styles.subCardBody}>
                    <h3 className={styles.subCardName}>{sub.name}</h3>
                    <p className={styles.subCardDesc}>{sub.description}</p>
                    <Button as={Link} to="/contact" variant="secondary" size="sm">
                      Inquire About This Style
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Per-subcategory galleries */}
            {subcategories.some((s) => s.gallery?.length > 0) && (
              <div className={styles.subGalleries}>
                {subcategories.map((sub) =>
                  sub.gallery?.length > 0 ? (
                    <div key={`gallery-${sub.id}`} className={styles.subGallery}>
                      <h3 className={styles.subGalleryTitle}>{sub.name}</h3>
                      <div className={styles.subGalleryGrid}>
                        {sub.gallery.map((img, i) => (
                          <div key={i} className={styles.galleryItem}>
                            <img
                              src={img}
                              alt={`${sub.name} — image ${i + 1}`}
                              className={styles.galleryImg}
                              loading="lazy"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null
                )}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── Features ───────────────────────────────── */}
      {features.length > 0 && (
        <section className={`section ${styles.featuresSection}`} aria-labelledby="features-heading">
          <div className="container">
            <p className="section-label">Product Features</p>
            <h2 className="section-title" id="features-heading">Features</h2>
            <div className="divider" />
            <div className={styles.featuresGrid}>
              {features.map((feat, i) => (
                <div key={i} className={styles.featureItem}>
                  <div className={styles.featureCheck} aria-hidden="true">
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8l3.5 3.5L13 4"/>
                    </svg>
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Specs Grid (sizes / materials / colors) ── */}
      {(sizes.length > 0 || materials.length > 0 || colors.length > 0) && (
        <section className={`section ${styles.specsSection}`} aria-labelledby="specs-heading">
          <div className="container">
            <p className="section-label">Product Details</p>
            <h2 className="section-title" id="specs-heading">Specifications</h2>
            <div className="divider" />
            <div className={styles.specsGrid}>
              {sizes.length > 0 && (
                <SpecBlock title="Available Sizes">
                  <div className={styles.tagList}>
                    {sizes.map((s) => <span key={s} className={styles.tag}>{s}</span>)}
                  </div>
                </SpecBlock>
              )}
              {materials.length > 0 && (
                <SpecBlock title="Materials">
                  <ul className={styles.specList}>
                    {materials.map((m) => <li key={m}>{m}</li>)}
                  </ul>
                </SpecBlock>
              )}
              {colors.length > 0 && (
                <SpecBlock title="Color Options">
                  <div className={styles.tagList}>
                    {colors.map((c) => <span key={c} className={styles.tag}>{c}</span>)}
                  </div>
                </SpecBlock>
              )}
              {Object.keys(specifications).length > 0 && (
                <SpecBlock title="Technical Specifications">
                  <table className={styles.specTable}>
                    <tbody>
                      {Object.entries(specifications).map(([k, v]) => (
                        <tr key={k}>
                          <th scope="row">{k}</th>
                          <td>{v}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </SpecBlock>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Placeholder specs panel (shown when no data yet) */}
      {sizes.length === 0 && materials.length === 0 && colors.length === 0 && (
        <section className={`section ${styles.specsSection}`}>
          <div className="container">
            <p className="section-label">Product Details</p>
            <h2 className="section-title">Specifications</h2>
            <div className="divider" />
            <div className={styles.specsPlaceholder}>
              <div className={styles.specPlaceholderBox}>
                <h3 className={styles.specPlaceholderTitle}>Available Sizes</h3>
                <p className={styles.specPlaceholderNote}>Product size information will be listed here. Contact us for current availability.</p>
              </div>
              <div className={styles.specPlaceholderBox}>
                <h3 className={styles.specPlaceholderTitle}>Materials</h3>
                <p className={styles.specPlaceholderNote}>Material and fabric composition details will be listed here.</p>
              </div>
              <div className={styles.specPlaceholderBox}>
                <h3 className={styles.specPlaceholderTitle}>Color Options</h3>
                <p className={styles.specPlaceholderNote}>Available colour options will be displayed here.</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Gallery ────────────────────────────────── */}
      <section className={`section ${styles.gallerySection}`} aria-labelledby="gallery-heading">
        <div className="container">
          <p className="section-label">Product Gallery</p>
          <h2 className="section-title" id="gallery-heading">{name} Gallery</h2>
          <div className="divider" />
          {gallery.length > 0 ? (
            <div className={styles.galleryGrid}>
              {gallery.map((img, i) => (
                <div key={i} className={styles.galleryItem}>
                  <img src={img} alt={`${name} product image ${i + 1}`} className={styles.galleryImg} loading="lazy" />
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.galleryGrid}>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div key={n} className={styles.galleryItem}>
                  <ImagePlaceholder label={`${name} Image ${n}`} aspect="1/1" />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Inquiry CTA ────────────────────────────── */}
      {inquiryEnabled && (
        <section className={styles.inquiryCta} aria-label="Product inquiry">
          <div className="container">
            <div className={styles.inquiryInner}>
              <div className={styles.inquiryText}>
                <h2 className={styles.inquiryTitle}>Interested in {name}?</h2>
                <p className={styles.inquirySubtitle}>
                  Contact us for product details, wholesale inquiries, availability and pricing.
                </p>
              </div>
              <div className={styles.inquiryButtons}>
                <Button as={Link} to="/contact" variant="primary" size="lg">
                  Send an Inquiry
                </Button>
                <Button as={Link} to="/products" variant="secondary" size="lg">
                  All Products
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Prev / Next Navigation ─────────────────── */}
      <nav className={styles.categoryNav} aria-label="Category navigation">
        <div className="container">
          <div className={styles.categoryNavInner}>
            {prevCat ? (
              <Link to={`/products/${prevCat.slug}`} className={styles.navPrev}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10 4L6 8l4 4"/></svg>
                <div>
                  <span className={styles.navLabel}>Previous</span>
                  <span className={styles.navName}>{prevCat.name}</span>
                </div>
              </Link>
            ) : <div />}
            {nextCat ? (
              <Link to={`/products/${nextCat.slug}`} className={styles.navNext}>
                <div className={styles.navRight}>
                  <span className={styles.navLabel}>Next</span>
                  <span className={styles.navName}>{nextCat.name}</span>
                </div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 4l4 4-4 4"/></svg>
              </Link>
            ) : <div />}
          </div>
        </div>
      </nav>

    </div>
  );
}

function SpecBlock({ title, children }) {
  return (
    <div className={styles.specBlock}>
      <h3 className={styles.specBlockTitle}>{title}</h3>
      {children}
    </div>
  );
}

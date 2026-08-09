import { useState } from 'react';
import { useParams, Link, Navigate, useSearchParams } from 'react-router-dom';
import { getCategoryBySlug, productCategories } from '../../data/products';
import ImagePlaceholder from '../../components/ui/ImagePlaceholder';
import Button from '../../components/ui/Button';
import SEO from '../../components/ui/SEO';
import styles from './CategoryPage.module.css';

// ─── Entry point ─────────────────────────────────────────────────────────────

export default function CategoryPage() {
  const { categorySlug } = useParams();
  const category = getCategoryBySlug(categorySlug);

  if (!category) return <Navigate to="/products" replace />;

  // Categories with a styles[] structure get the catalogue layout
  if (category.styles && category.styles.length > 0) {
    return <CatalogueLayout category={category} />;
  }

  // Everything else gets the existing generic layout
  return <GenericLayout category={category} />;
}

// ─── CATALOGUE LAYOUT (leg-warmers and future styled categories) ──────────────

function CatalogueLayout({ category }) {
  const { categorySlug } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const activeStyleId = searchParams.get('style') || category.styles[0]?.id;

  const activeStyle = category.styles.find((s) => s.id === activeStyleId)
    || category.styles[0];

  function setStyle(id) {
    setSearchParams({ style: id }, { replace: true });
  }

  const currentIndex = productCategories.findIndex((c) => c.slug === categorySlug);
  const prevCat = currentIndex > 0 ? productCategories[currentIndex - 1] : null;
  const nextCat = currentIndex < productCategories.length - 1 ? productCategories[currentIndex + 1] : null;

  return (
    <div className={styles.page}>
      <SEO
        title={`${category.name} — Knitted Hosiery | NDH Knits`}
        description={`${category.shortDescription} Manufactured in Ludhiana, Punjab for wholesale supply across India.`}
        canonical={`/products/${categorySlug}`}
      />

      {/* ── Compact Hero ─────────────────────────── */}
      <section className={styles.compactHero} aria-label={`${category.name} overview`}>
        <div className={styles.compactHeroBg}>
          {category.heroImage ? (
            <img src={category.heroImage} alt={`NDH Knits ${category.name} — knitted hosiery manufacturer, Ludhiana`} className={styles.compactHeroBgImg} />
          ) : (
            <div className={styles.compactHeroBgFallback} />
          )}
          <div className={styles.compactHeroOverlay} aria-hidden="true" />
        </div>
        <div className={`container ${styles.compactHeroContent}`}>
          {/* Breadcrumb */}
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link to="/" className={styles.breadcrumbLink}>Home</Link>
            <span className={styles.breadcrumbSep} aria-hidden="true">/</span>
            <Link to="/products" className={styles.breadcrumbLink}>Products</Link>
            <span className={styles.breadcrumbSep} aria-hidden="true">/</span>
            <span className={styles.breadcrumbCurrent} aria-current="page">{category.name}</span>
          </nav>
          <h1 className={styles.compactHeroTitle}>{category.name}</h1>
          <p className={styles.compactHeroDesc}>{category.description}</p>
          <Button as={Link} to="/contact" variant="primary" size="md">
            Send an Inquiry
          </Button>
        </div>
      </section>

      {/* ── Style Navigation ─────────────────────── */}
      <section className={styles.styleNav} aria-label="Style selector">
        <div className="container">
          <div className={styles.styleNavInner}>
            <div className={styles.styleNavLabel}>Explore Styles</div>
            <nav className={styles.styleTabs} role="tablist" aria-label="Product styles">
              <button
                role="tab"
                aria-selected={!activeStyleId || activeStyleId === '__all'}
                className={`${styles.styleTab} ${(!activeStyleId || activeStyleId === '__all') ? styles.styleTabActive : ''}`}
                onClick={() => setSearchParams({}, { replace: true })}
              >
                All
              </button>
              {category.styles.map((style) => (
                <button
                  key={style.id}
                  role="tab"
                  aria-selected={activeStyle?.id === style.id}
                  className={`${styles.styleTab} ${activeStyle?.id === style.id ? styles.styleTabActive : ''}`}
                  onClick={() => setStyle(style.id)}
                >
                  {style.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* ── Product Catalogue ────────────────────── */}
      <section className={`section ${styles.catalogueSection}`} aria-label="Product catalogue">
        <div className="container">
          {activeStyle ? (
            // Single style selected
            <StyleCatalogue
              style={activeStyle}
              categorySlug={categorySlug}
              showHeader
            />
          ) : (
            // "All" — show every style
            category.styles.map((style) => (
              <StyleCatalogue
                key={style.id}
                style={style}
                categorySlug={categorySlug}
                showHeader
              />
            ))
          )}
        </div>
      </section>

      {/* ── Category-level Features ──────────────── */}
      {category.features?.length > 0 && (
        <section className={`section ${styles.featuresSection}`} aria-labelledby="cat-features-heading">
          <div className="container">
            <p className="section-label">Why Choose Our {category.name}</p>
            <h2 className="section-title" id="cat-features-heading">
              Built for Performance & Comfort
            </h2>
            <div className="divider" />
            <div className={styles.featuresGrid}>
              {category.features.map((feat, i) => (
                <div key={i} className={styles.featureItem}>
                  <div className={styles.featureCheck} aria-hidden="true">
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8l3.5 3.5L13 4" />
                    </svg>
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Category-level Specifications ────────── */}
      {(category.sizes?.length > 0 || category.materials?.length > 0) && (
        <section className={`section ${styles.specsSection}`} aria-labelledby="cat-specs-heading">
          <div className="container">
            <p className="section-label">General Specifications</p>
            <h2 className="section-title" id="cat-specs-heading">Product Information</h2>
            <div className="divider" />
            <div className={styles.specsRow}>
              {category.sizes?.length > 0 && (
                <div className={styles.specBlock}>
                  <h3 className={styles.specBlockTitle}>Available Sizes</h3>
                  <div className={styles.tagList}>
                    {category.sizes.map((s) => <span key={s} className={styles.tag}>{s}</span>)}
                  </div>
                </div>
              )}
              {category.materials?.length > 0 && (
                <div className={styles.specBlock}>
                  <h3 className={styles.specBlockTitle}>Materials</h3>
                  <ul className={styles.specList}>
                    {category.materials.map((m) => <li key={m}>{m}</li>)}
                  </ul>
                </div>
              )}
              {Object.keys(category.specifications || {}).length > 0 && (
                <div className={styles.specBlock}>
                  <h3 className={styles.specBlockTitle}>Technical Specifications</h3>
                  <table className={styles.specTable}>
                    <tbody>
                      {Object.entries(category.specifications).map(([k, v]) => (
                        <tr key={k}>
                          <th scope="row">{k}</th>
                          <td>{v}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── Inquiry CTA ──────────────────────────── */}
      <section className={styles.inquiryCta} aria-label="Inquiry CTA">
        <div className="container">
          <div className={styles.inquiryInner}>
            <div>
              <h2 className={styles.inquiryTitle}>Interested in {category.name}?</h2>
              <p className={styles.inquirySubtitle}>
                Contact us for wholesale inquiries, availability, and pricing.
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

      {/* ── Prev / Next ───────────────────────────── */}
      <CategoryNav prevCat={prevCat} nextCat={nextCat} />
    </div>
  );
}

// ─── Style Catalogue block ────────────────────────────────────────────────────

function StyleCatalogue({ style, categorySlug, showHeader }) {
  const hasProducts = style.products && style.products.length > 0;
  return (
    <div className={styles.styleCatalogue}>
      {showHeader && (
        <div className={styles.styleCatalogueHeader}>
          <h2 className={styles.styleCatalogueTitle}>{style.name}</h2>
          <p className={styles.styleCatalogueDesc}>{style.description}</p>
        </div>
      )}
      {hasProducts ? (
        <div className={styles.productGrid}>
          {style.products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              categorySlug={categorySlug}
              styleSlug={style.id}
            />
          ))}
        </div>
      ) : (
        <div className={styles.noProducts}>
          <p>Products coming soon. <Link to="/contact" className={styles.inquiryLink}>Contact us</Link> for availability.</p>
        </div>
      )}
    </div>
  );
}

// ─── Product Card ─────────────────────────────────────────────────────────────

function ProductCard({ product, categorySlug, styleSlug }) {
  const [activeVariantIndex, setActiveVariantIndex] = useState(0);
  const hasVariants = product.variants && product.variants.length > 0;
  const activeVariant = hasVariants ? product.variants[activeVariantIndex] : null;
  const displayImage = activeVariant?.image || null;
  const detailUrl = `/products/${categorySlug}/${styleSlug}/${product.slug}`;

  return (
    <article className={styles.productCard} aria-label={product.name}>
      {/* Image area */}
      <div className={styles.productCardImage}>
        <Link to={detailUrl} tabIndex={-1} aria-hidden="true">
          {displayImage ? (
            <img
              src={displayImage}
              alt={`${product.name} — ${activeVariant ? activeVariant.colour : ''} | NDH Knits ${styleSlug}`}
              className={styles.productCardImg}
              loading="lazy"
            />
          ) : (
            <ImagePlaceholder label={product.name} aspect="4/3" className={styles.productCardPlaceholder} />
          )}
        </Link>
      </div>

      {/* Card body */}
      <div className={styles.productCardBody}>
        <h3 className={styles.productCardName}>
          <Link to={detailUrl}>{product.name}</Link>
        </h3>
        <p className={styles.productCardDesc}>{product.description}</p>

        {/* Colour variants */}
        {hasVariants && (
          <div className={styles.variantRow} aria-label="Available colours">
            <span className={styles.variantLabel}>Colours:</span>
            <div className={styles.swatches}>
              {product.variants.map((v, i) => (
                <button
                  key={v.colour}
                  className={`${styles.swatch} ${i === activeVariantIndex ? styles.swatchActive : ''}`}
                  style={{ backgroundColor: v.colorSwatch }}
                  onClick={() => setActiveVariantIndex(i)}
                  aria-label={`Select colour: ${v.colour}`}
                  aria-pressed={i === activeVariantIndex}
                  title={v.colour}
                />
              ))}
            </div>
            {activeVariant && (
              <span className={styles.activeColourName}>{activeVariant.colour}</span>
            )}
          </div>
        )}

        {/* Sizes */}
        {product.sizes?.length > 0 && (
          <div className={styles.sizesRow}>
            <span className={styles.variantLabel}>Sizes:</span>
            <div className={styles.sizeList}>
              {product.sizes.map((s) => (
                <span key={s} className={styles.sizeChip}>{s}</span>
              ))}
            </div>
          </div>
        )}

        {/* Action */}
        <Link to={detailUrl} className={styles.viewDetailsLink}>
          View Details
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </Link>
      </div>
    </article>
  );
}

// ─── GENERIC LAYOUT (socks, gloves, caps, etc.) ───────────────────────────────
// Preserved exactly — no changes to existing behaviour

function GenericLayout({ category }) {
  const { categorySlug } = useParams();
  const {
    name, description, features, sizes, materials,
    colors, specifications, gallery, heroImage, inquiryEnabled,
  } = category;

  const currentIndex = productCategories.findIndex((c) => c.slug === categorySlug);
  const prevCat = currentIndex > 0 ? productCategories[currentIndex - 1] : null;
  const nextCat = currentIndex < productCategories.length - 1 ? productCategories[currentIndex + 1] : null;

  return (
    <div className={styles.page}>
      <SEO
        title={`${name} — Knitted Hosiery`}
        description={`${description} Manufactured in Ludhiana, Punjab for wholesale supply across India.`}
        canonical={`/products/${categorySlug}`}
      />

      <section className={styles.hero} aria-label={`${name} category hero`}>
        <div className={styles.heroBg}>
          {heroImage ? (
            <img src={heroImage} alt={`${name} — hero`} className={styles.heroBgImage} />
          ) : (
            <ImagePlaceholder label={`${name} — Hero Image`} aspect="21/9" className={styles.heroBgImage} />
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
            <Button as={Link} to="/contact" variant="primary" size="lg">Send an Inquiry</Button>
          )}
        </div>
      </section>

      {features?.length > 0 && (
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
                      <path d="M3 8l3.5 3.5L13 4" />
                    </svg>
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {(sizes?.length > 0 || materials?.length > 0 || colors?.length > 0) ? (
        <section className={`section ${styles.specsSection}`} aria-labelledby="specs-heading">
          <div className="container">
            <p className="section-label">Product Details</p>
            <h2 className="section-title" id="specs-heading">Specifications</h2>
            <div className="divider" />
            <div className={styles.specsRow}>
              {sizes?.length > 0 && (
                <div className={styles.specBlock}>
                  <h3 className={styles.specBlockTitle}>Available Sizes</h3>
                  <div className={styles.tagList}>{sizes.map((s) => <span key={s} className={styles.tag}>{s}</span>)}</div>
                </div>
              )}
              {materials?.length > 0 && (
                <div className={styles.specBlock}>
                  <h3 className={styles.specBlockTitle}>Materials</h3>
                  <ul className={styles.specList}>{materials.map((m) => <li key={m}>{m}</li>)}</ul>
                </div>
              )}
              {colors?.length > 0 && (
                <div className={styles.specBlock}>
                  <h3 className={styles.specBlockTitle}>Color Options</h3>
                  <div className={styles.tagList}>{colors.map((c) => <span key={c} className={styles.tag}>{c}</span>)}</div>
                </div>
              )}
              {Object.keys(specifications || {}).length > 0 && (
                <div className={styles.specBlock}>
                  <h3 className={styles.specBlockTitle}>Technical Specifications</h3>
                  <table className={styles.specTable}>
                    <tbody>
                      {Object.entries(specifications).map(([k, v]) => (
                        <tr key={k}><th scope="row">{k}</th><td>{v}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </section>
      ) : (
        <section className={`section ${styles.specsSection}`}>
          <div className="container">
            <p className="section-label">Product Details</p>
            <h2 className="section-title">Specifications</h2>
            <div className="divider" />
            <div className={styles.specsRow}>
              {['Available Sizes', 'Materials', 'Color Options'].map((t) => (
                <div key={t} className={styles.specBlock}>
                  <h3 className={styles.specBlockTitle}>{t}</h3>
                  <p className={styles.specPlaceholderNote}>Information will be listed here. Contact us for details.</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {gallery?.length > 0 && (
        <section className={`section ${styles.gallerySection}`} aria-labelledby="gallery-heading">
          <div className="container">
            <p className="section-label">Product Gallery</p>
            <h2 className="section-title" id="gallery-heading">{name} Gallery</h2>
            <div className="divider" />
            <div className={styles.galleryGrid}>
              {gallery.map((img, i) => (
                <div key={i} className={styles.galleryItem}>
                  <img src={img} alt={`NDH Knits ${name} product image ${i + 1}`} className={styles.galleryImg} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {inquiryEnabled && (
        <section className={styles.inquiryCta} aria-label="Product inquiry">
          <div className="container">
            <div className={styles.inquiryInner}>
              <div className={styles.inquiryText}>
                <h2 className={styles.inquiryTitle}>Interested in {name}?</h2>
                <p className={styles.inquirySubtitle}>Contact us for product details, wholesale inquiries, availability and pricing.</p>
              </div>
              <div className={styles.inquiryButtons}>
                <Button as={Link} to="/contact" variant="primary" size="lg">Send an Inquiry</Button>
                <Button as={Link} to="/products" variant="secondary" size="lg">All Products</Button>
              </div>
            </div>
          </div>
        </section>
      )}

      <CategoryNav prevCat={prevCat} nextCat={nextCat} />
    </div>
  );
}

// ─── Shared sub-components ────────────────────────────────────────────────────

function CategoryNav({ prevCat, nextCat }) {
  return (
    <nav className={styles.categoryNav} aria-label="Category navigation">
      <div className="container">
        <div className={styles.categoryNavInner}>
          {prevCat ? (
            <Link to={`/products/${prevCat.slug}`} className={styles.navPrev}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10 4L6 8l4 4" /></svg>
              <div><span className={styles.navLabel}>Previous</span><span className={styles.navName}>{prevCat.name}</span></div>
            </Link>
          ) : <div />}
          {nextCat ? (
            <Link to={`/products/${nextCat.slug}`} className={styles.navNext}>
              <div className={styles.navRight}><span className={styles.navLabel}>Next</span><span className={styles.navName}>{nextCat.name}</span></div>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 4l4 4-4 4" /></svg>
            </Link>
          ) : <div />}
        </div>
      </div>
    </nav>
  );
}

import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import ImagePlaceholder from '../components/ui/ImagePlaceholder';
import SEO from '../components/ui/SEO';
import styles from './AboutPage.module.css';

const values = [
  {
    icon: <HeritageIcon />,
    title: 'Rooted in Heritage',
    description:
      "Over 70 years of textile manufacturing knowledge, passed down through generations in Ludhiana's knitting industry.",
  },
  {
    icon: <CraftIcon />,
    title: 'Generations of Craftsmanship',
    description:
      'Traditional knitting expertise combined with a commitment to quality that has defined NDH Knits since 1957.',
  },
  {
    icon: <ModernIcon />,
    title: 'Modern Manufacturing',
    description:
      'Combining time-tested craft with modern manufacturing practices to deliver consistent, reliable output at scale.',
  },
  {
    icon: <PartnerIcon />,
    title: 'Long-Term Partnerships',
    description:
      'We believe lasting business relationships are built on trust, reliability, and a customer-first approach.',
  },
];

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <SEO
        title="About Us — Hosiery Manufacturer Since 1957"
        description="Learn about NDH Knits — a trusted hosiery manufacturer in Ludhiana, Punjab, with over 70 years of textile expertise. We manufacture premium socks, gloves, mufflers, caps, thermal wear and knitted essentials for wholesalers across India."
        canonical="/about"
      />

      {/* ── Page Hero ──────────────────────────────── */}
      <section className={styles.pageHero} aria-label="About NDH Knits">
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.heroText}>
              <p className="section-label">About Us</p>
              <h1 className={styles.heroTitle}>
                Rooted in Excellence<br />Since 1957
              </h1>
              <div className="divider" />
              <p className={styles.heroSubtitle}>
                A trusted hosiery manufacturer in Ludhiana, Punjab — with over
                70 years of textile expertise and a reputation built on quality,
                precision, and dependable service.
              </p>
            </div>
            <div className={styles.heroImageWrap}>
              <ImagePlaceholder
                label="NDH Knits Manufacturing Facility"
                aspect="4/3"
                className={styles.heroImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Story ──────────────────────────────── */}
      <section className={`section ${styles.storySection}`} aria-labelledby="our-story-heading">
        <div className="container">
          <div className={styles.storyLayout}>

            <div className={styles.storyImageCol}>
              <ImagePlaceholder
                label="NDH Knits — Craftsmanship"
                aspect="3/4"
                className={styles.storyImage}
              />
              <div className={styles.storyBadge} aria-label="Established 1957">
                <span className={styles.badgeYear}>Est.</span>
                <span className={styles.badgeNumber}>1957</span>
                <span className={styles.badgeLabel}>Ludhiana, Punjab</span>
              </div>
            </div>

            <div className={styles.storyContent}>
              <p className="section-label">Our Story</p>
              <h2 className="section-title" id="our-story-heading">
                A Legacy Woven in Quality
              </h2>
              <div className="divider" />

              <div className={styles.storyText}>
                <p>
                  Rooted in excellence since 1957, NDH Knits is a trusted hosiery
                  manufacturer in Ludhiana, Punjab, with over 70 years of textile
                  expertise. We manufacture premium-quality socks, gloves, mufflers,
                  caps, thermal wear, and knitted essentials for wholesalers, retailers,
                  and businesses across India.
                </p>
                <p>
                  Combining generations of craftsmanship with modern manufacturing,
                  we create products that deliver exceptional comfort, durability, and
                  consistent quality. Every stitch reflects our commitment to precision,
                  timely delivery, and dependable service.
                </p>
                <p>
                  At NDH Knits, we believe lasting partnerships are built on trust.
                  That's why businesses across India rely on us for quality products,
                  reliable manufacturing, and a customer-first approach.
                </p>
                <p className={styles.tagline}>
                  <em>NDH Knits — A legacy woven in quality.</em>
                </p>
              </div>

              <Button as={Link} to="/contact" variant="primary" size="lg">
                Partner With Us
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* ── Core Values ────────────────────────────── */}
      <section className={`section ${styles.valuesSection}`} aria-labelledby="values-heading">
        <div className="container">
          <div className="text-center">
            <p className="section-label">What We Stand For</p>
            <h2 className="section-title" id="values-heading"
              style={{ maxWidth: '520px', marginInline: 'auto' }}>
              Built on Trust and Craftsmanship
            </h2>
            <div className="divider" style={{ marginInline: 'auto' }} />
          </div>
          <div className={styles.valuesGrid}>
            {values.map((v) => (
              <div key={v.title} className={styles.valueCard}>
                <div className={styles.valueIcon} aria-hidden="true">{v.icon}</div>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Location ───────────────────────────────── */}
      <section className={`section ${styles.locationSection}`} aria-labelledby="location-heading">
        <div className="container">
          <div className={styles.locationLayout}>
            <div className={styles.locationContent}>
              <p className="section-label">Where We Are</p>
              <h2 className="section-title" id="location-heading">
                Ludhiana — India's Textile Capital
              </h2>
              <div className="divider" />
              <p className={styles.locationBody}>
                Ludhiana, Punjab, has long been recognised as one of India's foremost
                textile and hosiery manufacturing hubs. NDH Knits is deeply embedded
                in this tradition — drawing on the region's skilled workforce, industry
                knowledge, and supply chain to deliver quality hosiery products
                consistently and efficiently.
              </p>
              <p className={styles.locationBody}>
                Our manufacturing is rooted here, serving wholesale and retail
                customers across India from the heart of the country's knitting industry.
              </p>
              <Button as={Link} to="/contact" variant="secondary" size="md">
                Get in Touch
              </Button>
            </div>
            <div className={styles.locationImageWrap}>
              <ImagePlaceholder
                label="Ludhiana, Punjab — Map / Location"
                aspect="1/1"
                className={styles.locationImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ─────────────────────────────── */}
      <section className={styles.ctaBanner} aria-label="Inquiry call to action">
        <div className="container">
          <div className={styles.ctaInner}>
            <div className={styles.ctaText}>
              <h2 className={styles.ctaTitle}>Ready to Partner With Us?</h2>
              <p className={styles.ctaSubtitle}>
                Reach out to discuss your wholesale requirements. We're here to help.
              </p>
            </div>
            <div className={styles.ctaButtons}>
              <Button as={Link} to="/contact" variant="primary" size="lg">
                Send an Inquiry
              </Button>
              <Button as={Link} to="/products" variant="light" size="lg">
                View Products
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

/* ── Icons ──────────────────────────────────────────── */
function HeritageIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  );
}
function CraftIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  );
}
function ModernIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  );
}
function PartnerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  );
}

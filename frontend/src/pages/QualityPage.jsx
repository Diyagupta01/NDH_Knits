import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import ProcessSection from '../components/home/ProcessSection';
import styles from './QualityPage.module.css';

const qualityPillars = [
  {
    icon: <FitIcon />,
    title: 'Comfortable Fit',
    description:
      'Products are manufactured to consistent sizing specifications, ensuring reliable fit and comfort for the end user.',
  },
  {
    icon: <StitchIcon />,
    title: 'Durable Stitching',
    description:
      'Knitting tension and stitch integrity are monitored throughout production to ensure products withstand regular use.',
  },
  {
    icon: <ColorIcon />,
    title: 'Excellent Color Fastness',
    description:
      'Colour consistency and fastness are maintained across production batches, ensuring products retain their appearance through use and washing.',
  },
  {
    icon: <PackageIcon />,
    title: 'Secure Packaging',
    description:
      'Products are packaged to protect quality during transit, ensuring they arrive in perfect condition for retail or wholesale distribution.',
  },
  {
    icon: <ConsistencyIcon />,
    title: 'Consistent Quality',
    description:
      'Our manufacturing process is designed for repeatability — delivering the same standard of quality batch after batch, order after order.',
  },
  {
    icon: <InspectIcon />,
    title: 'Multi-Stage Inspection',
    description:
      'Quality is not a single checkpoint — it is embedded at every stage of production, from raw material to dispatch.',
  },
];

export default function QualityPage() {
  return (
    <div className={styles.page}>

      {/* ── Page Hero ──────────────────────────────── */}
      <section className={styles.hero} aria-label="Quality Assurance hero">
        <div className="container">
          <p className="section-label" style={{ color: 'var(--color-accent-light)' }}>
            Quality Assurance
          </p>
          <h1 className={styles.heroTitle}>Quality Built Into Every Stitch</h1>
          <div className={styles.heroDivider} />
          <p className={styles.heroSubtitle}>
            At NDH Knits, quality is not a final step — it is built into every stage of production.
            From raw material inspection through to dispatch, we ensure every product meets
            the highest standards of comfort, durability, and performance.
          </p>
        </div>
      </section>

      {/* ── Quality Statement ──────────────────────── */}
      <section className={`section ${styles.statementSection}`} aria-labelledby="quality-statement-heading">
        <div className="container">
          <div className={styles.statementLayout}>
            <div className={styles.statementContent}>
              <p className="section-label">Our Commitment</p>
              <h2 className="section-title" id="quality-statement-heading">
                A Commitment to Consistent Quality
              </h2>
              <div className="divider" />
              <p className={styles.statementBody}>
                At NDH Knits, quality is built into every stage of production. From careful
                raw material inspection and precision manufacturing to multiple quality checks,
                we ensure every product meets the highest standards of comfort, durability,
                and performance.
              </p>
              <p className={styles.statementBody}>
                Our hosiery products feature a comfortable fit, durable stitching, excellent
                color fastness, and secure packaging — delivering consistent quality that you
                can trust, order after order.
              </p>
            </div>
            <div className={styles.statementVisual} aria-hidden="true">
              <div className={styles.visualRings}>
                <div className={styles.ring1} />
                <div className={styles.ring2} />
                <div className={styles.ring3} />
                <div className={styles.visualBadge}>
                  <span className={styles.badgeTopText}>Quality</span>
                  <span className={styles.badgeMainText}>Assured</span>
                  <div className={styles.badgeLine} />
                  <span className={styles.badgeSubText}>NDH Knits</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quality Pillars ────────────────────────── */}
      <section className={`section ${styles.pillarsSection}`} aria-labelledby="pillars-heading">
        <div className="container">
          <div className="text-center">
            <p className="section-label">What We Guarantee</p>
            <h2 className="section-title" id="pillars-heading"
              style={{ marginInline: 'auto', maxWidth: '500px' }}>
              Our Quality Standards
            </h2>
            <div className="divider" style={{ marginInline: 'auto' }} />
          </div>
          <div className={styles.pillarsGrid}>
            {qualityPillars.map((pillar) => (
              <div key={pillar.title} className={styles.pillarCard}>
                <div className={styles.pillarIcon} aria-hidden="true">{pillar.icon}</div>
                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                <p className={styles.pillarDesc}>{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Manufacturing Process ───────────────────── */}
      <ProcessSection />

      {/* ── CTA ────────────────────────────────────── */}
      <section className={styles.ctaBanner} aria-label="Quality inquiry CTA">
        <div className="container">
          <div className={styles.ctaInner}>
            <div>
              <h2 className={styles.ctaTitle}>Questions About Our Quality?</h2>
              <p className={styles.ctaSubtitle}>
                Reach out to us for product specifications, quality information, or wholesale inquiries.
              </p>
            </div>
            <div className={styles.ctaButtons}>
              <Button as={Link} to="/contact" variant="primary" size="lg">
                Contact Us
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
function FitIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>;
}
function StitchIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18"/><circle cx="7" cy="6" r="1" fill="currentColor"/><circle cx="12" cy="12" r="1" fill="currentColor"/><circle cx="17" cy="18" r="1" fill="currentColor"/></svg>;
}
function ColorIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="13.5" cy="6.5" r="1.5"/><circle cx="17.5" cy="10.5" r="1.5"/><circle cx="8.5" cy="7.5" r="1.5"/><circle cx="6.5" cy="12.5" r="1.5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>;
}
function PackageIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>;
}
function ConsistencyIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>;
}
function InspectIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>;
}

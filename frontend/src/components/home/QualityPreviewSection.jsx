import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import styles from './QualityPreviewSection.module.css';

const highlights = [
  { label: 'Comfortable Fit', desc: 'Designed for consistent sizing and wearability.' },
  { label: 'Durable Stitching', desc: 'Built to withstand repeated use without degrading.' },
  { label: 'Excellent Color Fastness', desc: 'Colour integrity maintained through washing and wear.' },
  { label: 'Secure Packaging', desc: 'Products arrive in perfect condition, ready for retail.' },
  { label: 'Consistent Quality', desc: 'Every batch meets the same standard — batch after batch.' },
];

export default function QualityPreviewSection() {
  return (
    <section
      className={`section ${styles.section}`}
      aria-labelledby="quality-preview-heading"
    >
      <div className="container">
        <div className={styles.layout}>

          {/* Left — text content */}
          <div className={styles.content}>
            <p className="section-label">Quality Assurance</p>
            <h2 className={`section-title ${styles.title}`} id="quality-preview-heading">
              Quality Built Into Every Stitch
            </h2>
            <div className="divider" />
            <p className={styles.body}>
              At NDH Knits, quality is built into every stage of production. From careful raw
              material inspection and precision manufacturing to multiple quality checks, we
              ensure every product meets the highest standards of comfort, durability, and
              performance.
            </p>

            <ul className={styles.highlights} aria-label="Quality highlights">
              {highlights.map((h) => (
                <li key={h.label} className={styles.highlight}>
                  <div className={styles.checkIcon} aria-hidden="true">
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8l3.5 3.5L13 4"/>
                    </svg>
                  </div>
                  <div>
                    <strong className={styles.highlightLabel}>{h.label}</strong>
                    <span className={styles.highlightDesc}> — {h.desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className={styles.cta}>
              <Button as={Link} to="/quality" variant="primary" size="lg">
                Discover Our Quality Standards
              </Button>
            </div>
          </div>

          {/* Right — decorative quality panel */}
          <div className={styles.panel} aria-hidden="true">
            <div className={styles.panelInner}>
              <div className={styles.panelBadge}>
                <span className={styles.badgeTop}>NDH Knits</span>
                <span className={styles.badgeMain}>Quality</span>
                <span className={styles.badgeSub}>Assured</span>
                <div className={styles.badgeDivider} />
                <span className={styles.badgeYear}>Est. 1957</span>
              </div>
              {/* Decorative rings */}
              <div className={styles.ring1} />
              <div className={styles.ring2} />
              <div className={styles.ring3} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

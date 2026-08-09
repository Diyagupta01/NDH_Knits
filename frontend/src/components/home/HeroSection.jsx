import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import { productCategories } from '../../data/products';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero} aria-label="Hero">
      {/* Background texture layer */}
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.bgPattern} />
        <div className={styles.bgOverlay} />
        {/* Placeholder for hero image */}
        <div className={styles.bgImagePlaceholder}>
          <div className={styles.bgImageInner}>
            <KnitPatternSvg />
            <span className={styles.bgImageLabel}>Hero Image — NDH Knits Manufacturing</span>
          </div>
        </div>
      </div>

      <div className={`container ${styles.content}`}>
        <div className={styles.textBlock}>
          <p className={styles.eyebrow}>Ludhiana, Punjab, India</p>
          <h1 className={styles.headline}>
            A Legacy Woven<br />in Quality
          </h1>
          <p className={styles.subheadline}>
            Trusted Hosiery Manufacturer Since 1957
          </p>
          <p className={styles.body}>
            With over 70 years of experience, NDH Knits has been delivering
            premium-quality hosiery products crafted with precision, comfort,
            and durability. Based in Ludhiana, India's textile hub, we
            efficiently serve wholesalers and retailers with reliable products,
            competitive pricing, and consistent quality.
          </p>
          <div className={styles.ctaGroup}>
            <Button as={Link} to="/contact" variant="primary" size="lg">
              Request a Quote
            </Button>
            <Button as={Link} to="/products" variant="light" size="lg">
              Explore Products
            </Button>
          </div>
        </div>

        {/* Decorative stat strip */}
        <div className={styles.stripRow} aria-label="Key highlights">
          <div className={styles.strip}>
            <span className={styles.stripValue}>70+</span>
            <span className={styles.stripLabel}>Years of Excellence</span>
          </div>
          <div className={styles.stripDivider} aria-hidden="true" />
          <div className={styles.strip}>
            <span className={styles.stripValue}>{productCategories.length}</span>
            <span className={styles.stripLabel}>Product Categories</span>
          </div>
          <div className={styles.stripDivider} aria-hidden="true" />
          <div className={styles.strip}>
            <span className={styles.stripValue}>B2B</span>
            <span className={styles.stripLabel}>Wholesale &amp; Retail</span>
          </div>
          <div className={styles.stripDivider} aria-hidden="true" />
          <div className={styles.strip}>
            <span className={styles.stripValue}>Pan</span>
            <span className={styles.stripLabel}>India Supply</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function KnitPatternSvg() {
  return (
    <svg
      className={styles.patternSvg}
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Subtle knit/textile pattern */}
      {Array.from({ length: 12 }).map((_, row) =>
        Array.from({ length: 16 }).map((_, col) => (
          <ellipse
            key={`${row}-${col}`}
            cx={col * 26 + (row % 2 === 0 ? 13 : 0)}
            cy={row * 26}
            rx="9"
            ry="5"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
            fill="none"
          />
        ))
      )}
    </svg>
  );
}

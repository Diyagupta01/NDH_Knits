import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const categories = [
  { label: 'Socks',              to: '/products/socks' },
  { label: 'Gloves',             to: '/products/gloves' },
  { label: 'Caps',               to: '/products/caps' },
  { label: 'Mufflers',           to: '/products/mufflers' },
  { label: 'Thermal Wear',       to: '/products/thermal-wear' },
  { label: 'Leg Warmers',        to: '/products/leg-warmers' },
  { label: 'Knitted Essentials', to: '/products/knitted-essentials' },
];

const pages = [
  { label: 'Home',              to: '/' },
  { label: 'About Us',          to: '/about' },
  { label: 'Products',          to: '/products' },
  { label: 'Quality Assurance', to: '/quality' },
  { label: 'Contact Us',        to: '/contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.inner}`}>

        {/* Brand column */}
        <div className={styles.brand}>
          <Link to="/" className={styles.logo} aria-label="NDH Knits Home">
            <img
              src="/logo_dark.png"
              alt="NDH Knits"
              className={styles.logoImg}
            />
          </Link>
          <p className={styles.tagline}>A Legacy Woven in Quality.</p>
          <p className={styles.blurb}>
            Premium hosiery manufacturer based in Ludhiana, Punjab, India.
            Serving wholesalers and retailers since 1957.
          </p>

          <div className={styles.contactBlock}>
            <div className={styles.contactItem}>
              <PhoneIcon />
              <span>[PHONE NUMBER]</span>
            </div>
            <div className={styles.contactItem}>
              <MailIcon />
              <span>[EMAIL ADDRESS]</span>
            </div>
            <div className={styles.contactItem}>
              <WhatsAppIcon />
              <span>[WHATSAPP NUMBER]</span>
            </div>
            <div className={styles.contactItem}>
              <PinIcon />
              <span>[FACTORY ADDRESS], Ludhiana, Punjab, India</span>
            </div>
          </div>
        </div>

        {/* Quick links */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>Quick Links</h3>
          <ul className={styles.linkList}>
            {pages.map((p) => (
              <li key={p.to}>
                <Link to={p.to} className={styles.footerLink}>{p.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>Our Products</h3>
          <ul className={styles.linkList}>
            {categories.map((c) => (
              <li key={c.to}>
                <Link to={c.to} className={styles.footerLink}>{c.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Business hours */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>Business Hours</h3>
          <p className={styles.hoursPlaceholder}>[BUSINESS HOURS]</p>
          <div className={styles.inquiryCta}>
            <p className={styles.ctaText}>For wholesale &amp; bulk inquiries</p>
            <Link to="/contact" className={styles.ctaLink}>
              Send an Inquiry →
            </Link>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p className={styles.copyright}>
              &copy; {year} NDH Knits. All rights reserved.
            </p>
            <p className={styles.location}>
              Made in Ludhiana, Punjab, India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

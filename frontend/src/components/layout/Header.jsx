import { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import Button from '../ui/Button';
import styles from './Header.module.css';

const navLinks = [
  { label: 'Home',     to: '/' },
  { label: 'About',    to: '/about' },
  {
    label: 'Products',
    to: '/products',
    children: [
      { label: 'Socks',              to: '/products/socks' },
      { label: 'Gloves',             to: '/products/gloves' },
      { label: 'Caps',               to: '/products/caps' },
      { label: 'Mufflers',           to: '/products/mufflers' },
      { label: 'Thermal Wear',       to: '/products/thermal-wear' },
      { label: 'Leg Warmers',        to: '/products/leg-warmers' },
      { label: 'Knitted Essentials', to: '/products/knitted-essentials' },
    ],
  },
  { label: 'Quality',  to: '/quality' },
  { label: 'Contact',  to: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [dropOpen, setDropOpen]   = useState(false);
  const dropRef = useRef(null);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setDropOpen(false);
  }, [location.pathname]);

  // Scroll detection for sticky header shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) {
        setDropOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} role="banner">
        <div className={`container ${styles.inner}`}>
          {/* Logo */}
          <Link to="/" className={styles.logo} aria-label="NDH Knits — Home">
            <img
              src="/logo_light.png"
              alt="NDH Knits"
              className={styles.logoImg}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className={styles.desktopNav} aria-label="Primary navigation">
            <ul className={styles.navList}>
              {navLinks.map((link) =>
                link.children ? (
                  <li key={link.to} className={styles.navItem} ref={dropRef}>
                    <button
                      className={`${styles.navLink} ${styles.dropTrigger} ${location.pathname.startsWith('/products') ? styles.active : ''}`}
                      onClick={() => setDropOpen((v) => !v)}
                      aria-expanded={dropOpen}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <svg className={`${styles.chevron} ${dropOpen ? styles.chevronUp : ''}`} width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    {dropOpen && (
                      <div className={styles.dropdown} role="menu">
                        <Link to="/products" className={styles.dropAll} role="menuitem">
                          All Products
                        </Link>
                        <div className={styles.dropDivider} />
                        {link.children.map((child) => (
                          <NavLink
                            key={child.to}
                            to={child.to}
                            className={({ isActive }) =>
                              `${styles.dropItem} ${isActive ? styles.dropItemActive : ''}`
                            }
                            role="menuitem"
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </li>
                ) : (
                  <li key={link.to} className={styles.navItem}>
                    <NavLink
                      to={link.to}
                      end={link.to === '/'}
                      className={({ isActive }) =>
                        `${styles.navLink} ${isActive ? styles.active : ''}`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                )
              )}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className={styles.desktopCta}>
            <Button as={Link} to="/contact" variant="primary" size="sm">
              Request a Quote
            </Button>
          </div>

          {/* Hamburger */}
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className={`${styles.bar} ${menuOpen ? styles.bar1Open : ''}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.bar2Open : ''}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.bar3Open : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          <ul className={styles.mobileNavList}>
            {navLinks.map((link) =>
              link.children ? (
                <li key={link.to}>
                  <button
                    className={`${styles.mobileNavLink} ${styles.mobileDropTrigger}`}
                    onClick={() => setDropOpen((v) => !v)}
                  >
                    {link.label}
                    <svg className={`${styles.chevron} ${dropOpen ? styles.chevronUp : ''}`} width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  {dropOpen && (
                    <ul className={styles.mobileSubList}>
                      <li>
                        <NavLink to="/products" className={styles.mobileSubLink} end>
                          All Products
                        </NavLink>
                      </li>
                      {link.children.map((child) => (
                        <li key={child.to}>
                          <NavLink
                            to={child.to}
                            className={({ isActive }) =>
                              `${styles.mobileSubLink} ${isActive ? styles.mobileSubLinkActive : ''}`
                            }
                          >
                            {child.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      `${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ''}`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              )
            )}
          </ul>
          <div className={styles.mobileCta}>
            <Button as={Link} to="/contact" variant="primary" size="lg">
              Request a Quote
            </Button>
          </div>
        </nav>
      </div>

      {/* Mobile overlay backdrop */}
      {menuOpen && (
        <div
          className={styles.backdrop}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}

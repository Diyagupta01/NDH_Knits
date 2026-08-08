import styles from './ImagePlaceholder.module.css';

/**
 * Renders a tasteful placeholder until real images are provided.
 * aspect: '16/9' | '4/3' | '1/1' | '3/2' | '3/4'
 */
export default function ImagePlaceholder({
  label = 'Image',
  aspect = '16/9',
  className = '',
  icon = null,
}) {
  const [w, h] = aspect.split('/').map(Number);
  const paddingTop = `${(h / w) * 100}%`;

  return (
    <div className={`${styles.wrapper} ${className}`} style={{ paddingTop }}>
      <div className={styles.inner}>
        {icon ? (
          <span className={styles.icon}>{icon}</span>
        ) : (
          <svg
            className={styles.icon}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect x="4" y="8" width="40" height="32" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
            <circle cx="16" cy="20" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M4 36 L16 24 L26 34 L33 27 L44 38" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none"/>
          </svg>
        )}
        <span className={styles.label}>{label}</span>
      </div>
    </div>
  );
}

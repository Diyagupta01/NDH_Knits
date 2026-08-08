import styles from './SectionHeader.module.css';

export default function SectionHeader({
  label,
  title,
  subtitle,
  align = 'left',
  className = '',
}) {
  return (
    <div className={`${styles.header} ${styles[align]} ${className}`}>
      {label && <p className="section-label">{label}</p>}
      <h2 className={`section-title ${styles.title}`}>{title}</h2>
      <div className="divider" />
      {subtitle && <p className={`section-subtitle ${styles.subtitle}`}>{subtitle}</p>}
    </div>
  );
}

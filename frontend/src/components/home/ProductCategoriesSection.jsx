import { Link } from 'react-router-dom';
import SectionHeader from '../ui/SectionHeader';
import ImagePlaceholder from '../ui/ImagePlaceholder';
import styles from './ProductCategoriesSection.module.css';

const categories = [
  {
    slug: 'socks',
    name: 'Socks',
    description:
      'A comprehensive range of knitted socks crafted for comfort, durability, and consistent fit — suitable for all ages and seasons.',
  },
  {
    slug: 'gloves',
    name: 'Gloves',
    description:
      'Precision-knitted gloves offering warmth and flexibility, designed for wholesale supply across retail and distribution channels.',
  },
  {
    slug: 'caps',
    name: 'Caps',
    description:
      'Warm, well-fitted knitted caps manufactured to meet bulk requirements with consistent quality and finish.',
  },
  {
    slug: 'mufflers',
    name: 'Mufflers',
    description:
      'Soft, durable mufflers produced in a variety of styles to suit wholesale market demands across India.',
  },
  {
    slug: 'thermal-wear',
    name: 'Thermal Wear',
    description:
      'Reliable thermal innerwear engineered to retain warmth without compromising on comfort or wearability.',
  },
  {
    slug: 'knitted-essentials',
    name: 'Knitted Essentials',
    description:
      'An assorted range of quality knitted products complementing our core hosiery line, crafted with the same manufacturing precision.',
  },
];

export default function ProductCategoriesSection() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="categories-heading">
      <div className="container">
        <SectionHeader
          label="Product Catalogue"
          title="Premium Hosiery for Every Need"
          subtitle="Explore our wide range of quality knitted products, thoughtfully manufactured to meet the evolving demands of the wholesale market."
          align="center"
        />

        <div className={styles.grid}>
          {categories.map((cat) => (
            <CategoryCard key={cat.slug} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ category }) {
  const { slug, name, description } = category;
  return (
    <Link
      to={`/products/${slug}`}
      className={styles.card}
      aria-label={`View ${name} products`}
    >
      <div className={styles.cardImage}>
        <ImagePlaceholder
          label={name}
          aspect="4/3"
          className={styles.imgPlaceholder}
        />
        <div className={styles.cardImageOverlay} aria-hidden="true" />
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.cardName}>{name}</h3>
        <p className={styles.cardDesc}>{description}</p>
        <span className={styles.cardCta} aria-hidden="true">
          Explore Products
          <ArrowIcon />
        </span>
      </div>
    </Link>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4"/>
    </svg>
  );
}

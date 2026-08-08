import { Link } from 'react-router-dom';
import SectionHeader from '../ui/SectionHeader';
import ImagePlaceholder from '../ui/ImagePlaceholder';
import { productCategories } from '../../data/products';
import styles from './ProductCategoriesSection.module.css';

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
          {productCategories.map((cat) => (
            <CategoryCard key={cat.slug} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ category }) {
  const { slug, name, shortDescription, heroImage } = category;
  return (
    <Link
      to={`/products/${slug}`}
      className={styles.card}
      aria-label={`View ${name} products`}
    >
      <div className={styles.cardImage}>
        {heroImage ? (
          <img
            src={heroImage}
            alt={`NDH Knits ${name} — knitted hosiery manufacturer, Ludhiana`}
            className={styles.realImage}
            loading="lazy"
          />
        ) : (
          <ImagePlaceholder
            label={name}
            aspect="4/3"
            className={styles.imgPlaceholder}
          />
        )}
        <div className={styles.cardImageOverlay} aria-hidden="true" />
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.cardName}>{name}</h3>
        <p className={styles.cardDesc}>{shortDescription}</p>
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

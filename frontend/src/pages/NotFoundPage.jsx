import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import styles from './NotFoundPage.module.css';

export default function NotFoundPage() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <span className={styles.code} aria-hidden="true">404</span>
        <h1 className={styles.title}>Page Not Found</h1>
        <p className={styles.message}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className={styles.actions}>
          <Button as={Link} to="/" variant="primary" size="lg">
            Back to Home
          </Button>
          <Button as={Link} to="/products" variant="secondary" size="lg">
            View Products
          </Button>
        </div>
      </div>
    </div>
  );
}

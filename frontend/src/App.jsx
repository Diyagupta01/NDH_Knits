import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import CategoryPage from './pages/products/CategoryPage';
import QualityPage from './pages/QualityPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/"                           element={<HomePage />} />
          <Route path="/about"                      element={<AboutPage />} />
          <Route path="/products"                   element={<ProductsPage />} />
          <Route path="/products/:slug"             element={<CategoryPage />} />
          <Route path="/quality"                    element={<QualityPage />} />
          <Route path="/contact"                    element={<ContactPage />} />
          <Route path="*"                           element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

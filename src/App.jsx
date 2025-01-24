import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

// Impor Navbar
import Navbar from './components/Navbar';
import MobileNavbar from './components/MobileNavbar';

// Impor Halaman
import HomePage from './components/Home';
import MobileHomePage from './components/MobileHomePage'; // Halaman khusus mobile
import CategoryPage from './components/category';
import About from './components/About';
import CheckoutPage from './components/checkout';
import AddProduct from './components/addproduct';

import ProductDetail from './components/productdetail';

// Komponen ResponsiveNavbar
const ResponsiveNavbar = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  return isMobile ? <MobileNavbar /> : <Navbar />;
};

// Komponen Layout untuk margin dinamis
const Layout = ({ children }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  return <div className={isMobile ? 'mt-16' : 'mt-24'}>{children}</div>;
};

const App = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <Router>
      {/* Navbar responsif */}
      <ResponsiveNavbar />

      {/* Layout untuk margin dinamis */}
      <Layout>
        <Routes>
          {/* Rute untuk halaman utama */}
          <Route path="/" element={isMobile ? <MobileHomePage /> : <HomePage />} />

          {/* Rute untuk halaman lainnya */}
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/AddProduct" element={<AddProduct />} />
          <Route path="/product-detail" element={<ProductDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
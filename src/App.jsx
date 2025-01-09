import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

// Impor Navbar
import Navbar from './components/Navbar';
import MobileNavbar from './components/MobileNavbar';

// Impor Halaman
import HomePage from './components/Home';
import CategoryPage from './components/category';
import About from './components/About';
import CheckoutPage from './components/checkout';
import AddProduct from './components/addproduct';

const App = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' }); // Deteksi perangkat mobile

  return (
    <Router>
      {/* Navbar berbeda berdasarkan perangkat */}
      {isMobile ? <MobileNavbar /> : <Navbar />}

      <div className={isMobile ? 'mt-16' : 'mt-24'}> {/* Tambahkan margin untuk menghindari tumpang tindih */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/AddProduct" element={<AddProduct />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

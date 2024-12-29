import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Pastikan Navbar ada di folder components
import HomePage from './components/Home'; // Komponen HomePage Anda
import CategoryPage from './components/category'; // Komponen CategoryPage yang baru
import About from './components/About'; // Impor komponen About

const App = () => {
  return (
    <Router>
      {/* Render Navbar di semua halaman */}
      <Navbar />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/about" element={<About />} /> {/* Tambahkan rute untuk halaman About */}
      </Routes>
    </Router>
  );
};

export default App;
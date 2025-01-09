import React from 'react';
import { Link } from 'react-router-dom';
import homeImage from '../assets/Home.png';
import tasImage from '../assets/Tas.png';
import contactImage from '../assets/Contact.png';
import userImage from '../assets/user.png';
import logoImage from '../assets/logo.png'; 

const Navbar = () => {
  return (
    <div className="w-[95%] max-w-[1300px] h-[85px] bg-[#955530] rounded-[50px] mx-auto flex items-center justify-between px-6 fixed top-0 left-1/2 transform -translate-x-1/2 z-50">
    <Link to="/">
      <img 
        src="https://res.cloudinary.com/ddl4sxrb3/image/upload/v1735230561/IMG_20241220_063824-removebg-preview_1_1_q92ntf.png" 
        alt="Logo KiNi" 
        className="w-[80px] h-auto object-contain -mt-15" // Naikkan logo dengan margin-top negatif
      />
    </Link>

      <input 
        type="text" 
        placeholder="Cari produk atau informasi..." 
        className="w-[400px] h-[35px] rounded-[20px] border border-[#ccc] px-3"
      />

      <nav className="flex gap-6">
        <Link to="/"><img src={homeImage} alt="Home" className="w-[33px] h-[33px] object-contain" /></Link>
        <Link to="/category"><img src={tasImage} alt="Keranjang" className="w-[30px] h-[30px] object-contain" /></Link>
        <Link to="/about"><img src={contactImage} alt="Contact" className="w-[34px] h-[34px] object-contain" /></Link>
        <Link to="#login"><img src={userImage} alt="Login" className="w-[30px] h-[30px] object-contain" /></Link>
        <Link to="/AddProduct"><img src={userImage} alt="addpage" className="w-[30px] h-[30px] object-contain" /></Link>
      </nav>
    </div>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import homeImage from '../assets/ihome.png';
import tasImage from '../assets/Tas.png';
import contactImage from '../assets/Contact.png';
import userImage from '../assets/user.png';

const Navbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchQuery); // Panggil fungsi pencarian dari props
  };

  return (
    <div className="w-[90%] max-w-[1300px] h-[78px] bg-[#955530] rounded-[50px] mx-auto flex items-center justify-between px-6 fixed top-5 left-1/2 transform -translate-x-1/2 z-50">
      <Link to="/">
        <img 
          src="https://res.cloudinary.com/ddl4sxrb3/image/upload/v1735230561/IMG_20241220_063824-removebg-preview_1_1_q92ntf.png" 
          alt="Logo KiNi" 
          className="w-[80px] h-auto object-contain -mt-15" 
        />
      </Link>

      <input 
  type="text" 
  placeholder="Cari produk atau informasi..." 
  className="w-[400px] h-[35px] rounded-[20px] border border-[#ccc] px-3"
  value={searchQuery}
  onChange={handleSearchChange}
  onKeyPress={(event) => {
    if (event.key === 'Enter') {
      handleSearch(); // Panggil fungsi pencarian saat Enter ditekan
    }
  }}
/>

      

      <nav className="flex gap-6">
        <Link to="/" className="flex flex-col items-center">
          <img src={homeImage} alt="Home" className="w-[30px] h-[30px] object-contain" />
          <span className="text-[14px] text-white mt-2">Home</span>
        </Link>
        <Link to="/category" className="flex flex-col items-center">
          <img src={tasImage} alt="Keranjang" className="w-[30px] h-[30px] object-contain" />
          <span className="text-[14px] text-white mt-3">Category</span>
        </Link>
        <Link to="/about" className="flex flex-col items-center">
          <img src={contactImage} alt="Contact" className="w-[34px] h-[34px] object-contain" />
          <span className="text-[14px] text-white mt-2">About</span>
        </Link>
        <Link to="#login" className="flex flex-col items-center">
          <img src={userImage} alt="Login" className="w-[30px] h-[30px] object-contain" />
          <span className="text-[14px] text-white mt-3">Login</span>
        </Link>

      </nav>
      
    </div>
  );
};

export default Navbar;
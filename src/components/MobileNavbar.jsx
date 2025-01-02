import React from 'react';
import { Link } from 'react-router-dom';
import homeImage from '../assets/Home.png';
import tasImage from '../assets/Tas.png';
import contactImage from '../assets/Contact.png';
import userImage from '../assets/user.png';

const MobileNavbar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#955530] h-[70px] flex items-center justify-around z-50">
      <Link to="/" className="flex flex-col items-center">
        <img src={homeImage} alt="Home" className="w-[30px] h-[30px] object-contain" />
        <span className="text-white text-xs">Home</span>
      </Link>
      <Link to="/category" className="flex flex-col items-center">
        <img src={tasImage} alt="Category" className="w-[30px] h-[30px] object-contain" />
        <span className="text-white text-xs">Category</span>
      </Link>
      <Link to="/about" className="flex flex-col items-center">
        <img src={contactImage} alt="Contact" className="w-[30px] h-[30px] object-contain" />
        <span className="text-white text-xs">About</span>
      </Link>
      <Link to="#login" className="flex flex-col items-center">
        <img src={userImage} alt="Login" className="w-[30px] h-[30px] object-contain" />
        <span className="text-white text-xs">Login</span>
      </Link>
    </div>
  );
};

export default MobileNavbar;

import React from 'react';
import { Link } from 'react-router-dom';
import homeImage from '../assets/ihome.png';
import tasImage from '../assets/tas.png';
import contactImage from '../assets/contact.png';
import userImage from '../assets/user.png';

const MobileNavbar = () => {
  return (
    <div className="fixed left-0 right-0 bg-[#111B33] h-[70px] flex items-center justify-around z-50 rounded-[50px] shadow-lg mb-4 mx-4 bottom-3">
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
      <Link to="/profileuser" className="flex flex-col items-center">
        <img src={userImage} alt="Login" className="w-[30px] h-[30px] object-contain" />
        <span className="text-white text-xs">Login</span>
      </Link>
      {/* <Link to="/AddProduct" className="flex flex-col items-center">
        <img src={userImage} alt="Login" className="w-[30px] h-[30px] object-contain" />
        <span className="text-white text-xs">AddProduct</span>
      </Link> */}
    </div>
  );
};

export default MobileNavbar;
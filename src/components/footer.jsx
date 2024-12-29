// Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
      <div className="bg-[#955530] text-white text-center py-6 min-h-[280px] mt-24 rounded-t-[70px] relative">
        <h2 className="absolute top-4 left-40 text-4xl font-bold mt-7">Be Future-Ready</h2>
        
        <div className="absolute mt-5 left-[calc(45%+50px)] text-left"> {/* About Section */}
          <h3 className="text-xl font-bold">About</h3>
          <ul className="mt-2">
            <li><a href="#" className="text-white">Our Team</a></li>
            <li><a href="#" className="text-white">Client</a></li>
            <li><a href="#" className="text-white">Press</a></li>
            <li><a href="#" className="text-white">Blog</a></li>
          </ul>
        </div>

        <div className="absolute mt-5 left-[calc(65%+50px)] text-left"> {/* Contact Us Section */}
          <h3 className="text-xl font-bold">Contact Us</h3>
          <ul className="mt-2">
            <li className="flex items-center">
              <FontAwesomeIcon icon={faPhone} />
              <span className="ml-2">+62 123 456 7890</span>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="ml-2">satrya@gmail.com</span>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span className="ml-2">JL.boten ngertos I No 51</span>
            </li>
          </ul>
        </div>

        <p className="absolute top-20 ml-40 text-xl text-left text-gray-400">Get Exclusive digital marketing update<br/>straight to your inbox</p>
      </div>
    );
  };

export default Footer;
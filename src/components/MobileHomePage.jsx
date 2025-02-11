import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faShoppingCart,
  faInfoCircle,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import kapakImage from "../assets/Kapak.png";
import kuasImage from "../assets/kuas.png";
import pakuImage from "../assets/paku.png";
import hammerImage from "../assets/hammer.png";
import emberImage from "../assets/ember.png";
import pompaImage from "../assets/Pompa.png";
import LinggisImage from "../assets/Linggis.png";
import KuasCatImage from "../assets/KuasCat.png";
import MeteranImage from "../assets/Meteran.png";
import SekopImage from "../assets/Sekop.png";
import settingImage from "../assets/setting.png";
import Footer from "./footer";

const MobileHomePage = () => {
  const [liked, setLiked] = useState([false, false, false, false, false]);
  const [showCartContainer, setShowCartContainer] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [timeLeft, setTimeLeft] = useState(3600); // 1 jam dalam detik
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleLikeClick = (index) => {
    const updatedLikes = [...liked];
    updatedLikes[index] = !updatedLikes[index];
    setLiked(updatedLikes);
  };

  const handleAddToCart = (index) => {
    const newItem = {
      name: productNames[index],
      image: productImages[index],
      price: productPrices[index],
    };
    setCartItems((prevItems) => [...prevItems, newItem]);
    setShowCartContainer(true);
  };

  const handleCheckout = () => {
    navigate("/checkout", { state: { cartItems } }); // Kirim data keranjang
  };

  const productImages = [
    pompaImage,
    LinggisImage,
    KuasCatImage,
    MeteranImage,
    SekopImage,
  ];

  const productNames = ["Pompa Air", "Linggis", "Kuas Cat", "Meteran", "Sekop"];

  const productPrices = [15000, 20000, 10000, 25000, 30000];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex-1 p-3">
        {/* Header */}
        <div className="flex flex-col items-start text-sm text-gray-800 mb-2 mr-4">
          <div className="flex items-center justify-between w-full mb-1 relative">
            <img
              src="https://res.cloudinary.com/ddl4sxrb3/image/upload/v1735230561/IMG_20241220_063824-removebg-preview_1_1_q92ntf.png"
              alt="Logo"
              className="w-10 h-10 mr-2"
            />
            <img
              src={settingImage}
              alt="Settings"
              className="w-4 h-4 absolute top-3 left-36 cursor-pointer"
            />
            <input
              type="text"
              placeholder=" Search..."
              className="absolute top-1 left-44 px-2 py-1 text-sm border rounded-lg w-2/5 focus:outline-none"
            />

            <FontAwesomeIcon
              icon={faShoppingCart}
              className="absolute top-3 left-[calc(44%+11rem)] text-black text-lg cursor-pointer"
              onClick={() => setShowCartContainer(!showCartContainer)}
            />
          </div>
          <div className="flex items-center mb-1">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-black text-base mr-2"
            />
    <a href="https://maps.app.goo.gl/mkmc7nMVmBr3GraT6" className="ml-4">Jalan. Peterongan Tengah Raya</a>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faInfoCircle}
              className="text-black text-base"
            />
          </div>
        </div>

        {showCartContainer && (
          <div className="absolute top-16 right-0 left-0 bg-gray-100 shadow-md rounded-lg p-4 z-50">
            <h2 className="text-center font-bold text-sm mb-2">PEMESANAN</h2>
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <div key={index} className="flex items-center mb-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 rounded mr-2"
                  />
                  <div className="flex flex-col flex-grow">
                    <span className="text-xs font-bold">{item.name}</span>
                    <span className="text-xs text-gray-500">Rp. {item.price}</span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-xs">
                Tidak ada produk dalam keranjang.
              </p>
            )}
            <button
              className="w-full bg-[#955530] text-white py-1 rounded mt-2 text-xs"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        )}

        

        {/* Categories Section */}
        <div>
          <h2 className="text-left text-lg font-bold text-gray-800 mt-5">Category</h2>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            <div className="flex flex-col items-center">
              <div className="w-[60px] h-[60px] bg-[#955530ae] rounded-full flex justify-center items-center text-white font-bold text-sm">
                <img src={kuasImage} alt="Image A" className="w-10 h-10" />
              </div>
              <span className="text-xs font-semibold text-gray-800 mt-1">Brush</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-[60px] h-[60px] bg-[#955530ae] rounded-full flex justify-center items-center text-white font-bold text-sm">
                <img src={hammerImage} alt="Image B" className="w-10 h-10" />
              </div>
              <span className="text-xs font-semibold text-gray-800 mt-1">Hammer</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-[60px] h-[60px] bg-[#955530ae] rounded-full flex justify-center items-center text-white font-bold text-sm">
                <img src={pakuImage} alt="Image C" className="w-10 h-10" />
              </div>
              <span className="text-xs font-semibold text-gray-800 mt-1">Nails</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-[60px] h-[60px] bg-[#955530ae] rounded-full flex justify-center items-center text-white font-bold text-sm">
                <img src={emberImage} alt="Image D" className="w-10 h-10" />
              </div>
              <span className="text-xs font-semibold text-gray-800 mt-1">Paint</span>
            </div>
          </div>
        </div>
      </div>

      {/* Flash Sale Section */}
      <div className="flex justify-between items-center mt-6 mb-4">
      <h2 className="text-left text-lg font-bold text-gray-800 mt-3 ">Flash Sale</h2>
          <div className="text-sm font-bold text-red-500">{formatTime(timeLeft)}</div>
      </div>

      <div className="flex gap-5">
            <div className="cursor-pointer text-lg font-bold py-1 px-4 rounded-full hover:bg-[#955530ae] hover:text-white transition duration-300">
              All
            </div>
            <div className="cursor-pointer text-lg font-bold py-1 px-4 rounded-full hover:bg-[#955530ae] hover:text-white transition duration-300">
              Newest
            </div>
            <div className="cursor-pointer text-lg font-bold py-1 px-4 rounded-full hover:bg-[#955530ae] hover:text-white transition duration-300">
              Popular
            </div>
          </div>

          {/* product */}

          <div className="boxes-wrapper flex flex-col justify-center gap-5 mt-5"> {/* Jarak vertikal antara baris */}
  {Array(Math.ceil(productImages.length / 2)).fill().map((_, rowIndex) => (
    <div key={rowIndex} className="flex flex-row justify-between gap-2 mt-6"> {/* Jarak horizontal antara product */}
      {productImages.slice(rowIndex * 2, (rowIndex + 1) * 2).map((image, index) => (
        <div
          key={index}
          className="box-container-like relative bg-[#955530ae] rounded-lg p-1 shadow-md w-40 h-40 mx-2 my-2" // Tambahkan margin
          onClick={() => handleProductClick(rowIndex * 2 + index)}
        >
          <FontAwesomeIcon
            icon={faShoppingCart}
            className="absolute top-2 left-2 text-sm text-white cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              handleAddToCart(rowIndex * 2 + index);
            }}
          />
          <FontAwesomeIcon
            icon={faHeart}
            className={`absolute top-1 right-1 text-sm cursor-pointer ${
              liked[rowIndex * 2 + index] ? "text-red-500" : "text-gray-400"
            } like-button`}
            onClick={() => handleLikeClick(rowIndex * 2 + index)}
          />
          <div className="flex justify-center items-center h-full">
            <img
              src={image}
              alt={`Box ${rowIndex * 2 + index + 1}`}
              className="box-image object-contain rounded-lg mb-1 w-20 h-20"
            />
          </div>
          <div className="text-left mt-2 text-sm font-bold text-gray-800">
            {productNames[rowIndex * 2 + index]}
          </div>
          <div className="text-left mt-1 text-red-500 text-sm font-bold">
            Rp. {productPrices[rowIndex * 2 + index]}
          </div>
        </div>
      ))}
    </div>
  ))}
</div>

      <Footer />
    </div>
  );
};

export default MobileHomePage;

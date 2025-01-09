import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faShoppingCart,
  faInfoCircle,
  faHeart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import kapakImage from "../assets/Kapak.png";
import kuasImage from "../assets/Kuas.png";
import pakuImage from "../assets/Paku.png";
import hammerImage from "../assets/Hammer.png";
import emberImage from "../assets/ember.png";
import pompaImage from "../assets/Pompa.png";
import LinggisImage from "../assets/Linggis.png";
import KuasCatImage from "../assets/KuasCat.png";
import MeteranImage from "../assets/Meteran.png";
import SekopImage from "../assets/Sekop.png";
import Footer from "./footer";

const MobileHomePage = () => {
  const [liked, setLiked] = useState([false, false, false, false, false]);
  const [showCartContainer, setShowCartContainer] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate(); 

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
    <div className="flex flex-col min-h-screen bg-white text-sm">
      <div className="p-2">
        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-black text-base mr-1"
            />
            <span className="text-xs">Jalan. Peterongan Tengah Raya</span>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="text-black text-base mx-1 cursor-pointer"
              onClick={() => setShowCartContainer(!showCartContainer)}
            />
            <FontAwesomeIcon icon={faInfoCircle} className="text-black text-base" />
          </div>
        </div>

        {/* Cart Section */}
        {showCartContainer && (
          <div className="absolute top-16 right-0 left-0 bg-gray-100 shadow-md rounded-lg p-2 z-50">
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
              <p className="text-center text-xs">Tidak ada produk dalam keranjang.</p>
            )}
            <button
              className="w-full bg-orange-500 text-white py-1 rounded mt-2 text-xs"
              onClick={handleCheckout}
            >
              Checkout
 </button>
          </div>
        )}

        {/* Banner Section */}
        <div className="bg-gray-200 rounded-lg p-2 mb-4">
          <img
            src={kapakImage}
            alt="New Collection"
            className="w-full h-20 object-cover rounded-md mb-2"
          />
          <h2 className="text-xs font-bold text-center leading-tight">New Collection</h2>
          <p className="text-xs text-center leading-tight">Recommendations, from our shop!</p>
        </div>

        {/* Products Section */}
        <div className="grid grid-cols-2 gap-2">
          {productImages.map((image, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-lg p-1 flex flex-col items-center relative"
            >
              <FontAwesomeIcon
                icon={faHeart}
                className={`absolute top-1 right-1 text-sm cursor-pointer ${
                  liked[index] ? "text-red-500" : "text-gray-400"
                }`}
                onClick={() => handleLikeClick(index)}
              />
              <img src={image} alt={productNames[index]} className="w-16 h-16 mb-1" />
              <span className="text-xs font-bold text-center">
                {productNames[index]}
              </span>
              <span className="text-xs text-orange-500 font-bold">
                Rp. {productPrices[index]}
              </span>
              <button
                className="mt-1 text-xs bg-orange-500 text-white py-1 px-1 rounded"
                onClick={() => handleAddToCart(index)}
              >
                Tambah ke Keranjang
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MobileHomePage;
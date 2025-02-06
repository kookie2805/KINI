import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const storedWishlist = localStorage.getItem('wishlist');
      if (storedWishlist) {
        const parsedWishlist = JSON.parse(storedWishlist);
        setWishlist(Array.isArray(parsedWishlist) ? parsedWishlist : []);
      }
    } catch (error) {
      console.error('Error loading wishlist:', error);
      setWishlist([]);
    }
  }, []);

  const handleRemoveFromWishlist = (index) => {
    const updatedWishlist = wishlist.filter((_, idx) => idx !== index);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  const handleAddToCart = (product) => {
    // Implement cart functionality here
    console.log('Adding to cart:', product);
  };

  return (
    <div className="p-6">
      <div className="flex items-center mb-6 justify-center"> {/* Menambahkan justify-center untuk menengahkan */}
        <h1 className="text-2xl font-bold">My Favorite</h1> {/* Tidak perlu 'items-center' lagi */}
      </div>

      {wishlist.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500 text-lg">Your wishlist is empty</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlist.map((item, index) => (
            <div key={index} className="relative bg-white rounded-lg shadow-md p-4">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-contain mb-4"
                />
                <FontAwesomeIcon
                  icon={faHeart}
                  className="absolute top-2 right-2 text-red-500 text-xl cursor-pointer"
                  onClick={() => handleRemoveFromWishlist(index)}
                />
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className="absolute top-2 left-2 text-gray-600 text-xl cursor-pointer"
                  onClick={() => handleAddToCart(item)}
                />
              </div>
              <h3 className="font-bold text-lg mb-2">{item.name}</h3>
              <p className="text-red-500 font-bold">
                Rp. {typeof item.price === 'number' ? item.price.toLocaleString() : item.price}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;

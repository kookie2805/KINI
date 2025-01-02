import React, { useState } from "react";
import { Settings, Search, ShoppingCart, Heart } from "lucide-react";

const MobileHomePage = () => {
  const [liked, setLiked] = useState([false, false, false, false, false]);
  const [showCartContainer, setShowCartContainer] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleLikeClick = (index) => {
    const updatedLikes = [...liked];
    updatedLikes[index] = !updatedLikes[index];
    setLiked(updatedLikes);
  };

  const handleAddToCart = (index) => {
    const newItem = {
      name: productNames[index],
      image: `/api/placeholder/200/200`,
      price: productPrices[index],
    };
    setCartItems((prevItems) => [...prevItems, newItem]);
    setShowCartContainer(true);
  };

  const handleCheckout = () => {
    console.log("Proceeding to checkout with items:", cartItems);
  };

  const productNames = ["Pompa Air", "Linggis", "Kuas Cat", "Meteran", "Sekop"];
  const productPrices = [15000, 20000, 10000, 25000, 30000];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <img
  src="/api/placeholder/128/128"
  alt="Logo KIOS MINI"
  className="h-12 w-auto border border-red-500"
/>

          <div className="flex items-center space-x-3">
            <Settings className="w-5 h-5 text-gray-600" />
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-28 px-3 py-1 text-sm border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#955530]"
              />
              <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
            <ShoppingCart
              className="w-5 h-5 text-gray-600 cursor-pointer"
              onClick={() => setShowCartContainer(!showCartContainer)}
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 mt-16 px-4">
        {/* Welcome Section */}
        <div className="mt-4">
          <h1 className="text-lg md:text-xl font-bold text-gray-800">Hallo, User!</h1>
          <p className="text-sm text-gray-600">Selamat Datang di KIOS MINI</p>
        </div>

        {/* Featured Banner */}
        <div className="mt-6 bg-[#95553031] rounded-lg p-4 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-gray-800">New Collection</h2>
            <p className="text-sm font-medium text-gray-700">
              Recommendations, <br /> from our shop!
            </p>
            <button className="mt-4 px-4 py-2 bg-[#955530] text-white rounded-lg text-sm">
              Shop Now
            </button>
          </div>
          <img
            src="/api/placeholder/128/128"
            alt="New Collection"
            className="w-24 h-24 object-contain mt-4 md:mt -0"
          />
        </div>

        {/* Categories */}
        <div className="mt-8">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Categories</h2>
          <div className="flex space-x-3 overflow-x-auto scrollbar-hide">
            {["Tools", "Paint", "Hardware", "Storage"].map((name, index) => (
              <div
                key={index}
                className="bg-[#955530ae] text-white text-sm font-medium rounded-full p-3 flex items-center justify-center w-20 h-20"
              >
                {name}
              </div>
            ))}
          </div>
        </div>

        {/* Products */}
        <div className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Products</h2>
            <select className="text-sm border rounded px-2 py-1">
              <option>All</option>
              <option>Newest</option>
              <option>Popular</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {productNames.map((name, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-3 shadow-sm relative"
              >
                <div className="flex justify-between mb-2">
                  <ShoppingCart
                    className="w-5 h-5 text-gray-600 cursor-pointer"
                    onClick={() => handleAddToCart(index)}
                  />
                  <Heart
                    className={`w-5 h-5 cursor-pointer ${
                      liked[index] ? "text-red-500" : "text-gray-400"
                    }`}
                    onClick={() => handleLikeClick(index)}
                  />
                </div>
                <img
                  src="/api/placeholder/128/128"
                  alt={name}
                  className="w-full h-24 object-contain mb-2"
                />
                <h3 className="text-sm font-medium text-gray-800">{name}</h3>
                <p className="text-sm font-bold text-red-500">
                  Rp. {productPrices[index]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Cart Modal */}
      {showCartContainer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-end">
          <div className="bg-white rounded-t-lg p-4 w-full max-w-md mx-4 max-h-[80vh] overflow-y-auto">
            <h2 className="text-lg font-bold text-center mb-4">Pemesanan</h2>
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center border-b pb-4 mb-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-contain bg-gray-100 rounded-lg"
                />
                <div className="ml-3 flex-1">
                  <h3 className="text-sm font-bold">{item.name}</h3>
                  <p className="text-sm font-medium text-red-500">
                    Rp. {item.price}
                  </p>
                </div>
              </div>
            ))}
            <button
              className="w-full bg-[#955530] text-white py-2 rounded-lg"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileHomePage;
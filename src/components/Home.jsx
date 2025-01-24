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
import settingImage from "../assets/setting.png";
import Footer from "./footer";
import Navbar from "./Navbar";

const HomePage = () => {
  const [liked, setLiked] = useState([false, false, false, false, false]);
  const [showCartContainer, setShowCartContainer] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleLikeClick = (index) => {
    const updatedLikes = [...liked];
    updatedLikes[index] = !updatedLikes[index];
    setLiked(updatedLikes);
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

  const [selectAll, setSelectAll] = useState(false);

  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectAll = () => {
    if (!selectAll) {
      setSelectedItems(cartItems.map((item, index) => index));
    } else {
      setSelectedItems([]);
    }
    setSelectAll(!selectAll);
  };

  const handleItemSelect = (index) => {
    if (selectedItems.includes(index)) {
      setSelectedItems(selectedItems.filter((item) => item !== index));
    } else {
      setSelectedItems([...selectedItems, index]);
    }
  };

  const productNames = ["Pompa Air", "Linggis", "Kuas Cat", "Meteran", "Sekop"];

  const productPrices = [15000, 20000, 10000, 25000, 30000];

  const imageSizes = [
    { width: "w-[120px]", height: "h-[120px]" },
    { width: "w-[130px]", height: "h-[130px]" },
    { width: "w-[125px]", height: "h-[125px]" },
    { width: "w-[135px]", height: "h-[135px]" },
    { width: "w-[140px]", height: "h-[140px]" },
  ];

  const handleProductClick = (index) => {
    const product = {
      name: productNames[index],
      image: productImages[index],
      price: productPrices[index],
      description: "Deskripsi produk ini akan ditampilkan di sini.", // Tambahkan deskripsi produk
    };
    navigate("/product-detail", { state: { product } });
  };

  // Tambahkan state untuk menyimpan jumlah produk
  const [quantities, setQuantities] = useState({});

  // Perbarui fungsi handleAddToCart untuk menyimpan jumlah produk
  const handleAddToCart = (index) => {
    const newItem = {
      name: productNames[index],
      image: productImages[index],
      price: productPrices[index],
    };
    const existingItem = cartItems.find((item) => item.name === newItem.name);
    if (existingItem) {
      const updatedQuantities = { ...quantities };
      updatedQuantities[index] = (updatedQuantities[index] || 1) + 1;
      setQuantities(updatedQuantities);
    } else {
      setCartItems((prevItems) => [...prevItems, newItem]);
      setQuantities((prevQuantities) => ({ ...prevQuantities, [index]: 1 }));
    }
    setShowCartContainer(true);
  };

  const handleSearch = (query) => {
    console.log("Searching for:", query); // Debugging
    const results = productNames.filter((name) => 
      name.toLowerCase().includes(query.toLowerCase())
    );
    console.log("Results found:", results); // Debugging
    setSearchResults(results);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 p-4">
        <div className="flex flex-col text-lg text-gray-800 mt-6">
          <div className="flex items-center mt-4 pt-2">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-black text-2xl ml-7 mr-3"
            />
            <a
              href="https://maps.app.goo.gl/mkmc7nMVmBr3GraT6"
              className="ml-4"
            >
              Jalan. Peterongan Tengah Raya
            </a>
          </div>
          <div className="flex items-center ml-auto">
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="text-black text-2xl mx-2 cursor-pointer"
              onClick={() => setShowCartContainer(!showCartContainer)}
            />
            <img
              src={settingImage}
              alt="Settings"
              className="w-[24px] h-[24px] mx-2"
            />
            <FontAwesomeIcon
              icon={faInfoCircle}
              className="text-black text-2xl"
            />
          </div>
        </div>

        {showCartContainer && (
          <div className="absolute top-30 right-0 bg-[#933804ed] left-25 w-[499px] h-[603px] p-4 shadow-md z-50 rounded-[19px] flex flex-col">
            <div className="flex items-start justify-center mb-4">
              <h2 className="text-2xl font-bold text-white">PEMESANAN</h2>
            </div>
            <div className="mt-4 flex-grow flex flex-col">
              {cartItems.length > 0 ? (
                cartItems.map((item, index) => (
                  <div key={index} className="flex items-center mb-4">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={selectedItems.includes(index)}
                      onChange={() => handleItemSelect(index)}
                    />
                    <div className="bg-white rounded-[15px] p-3 flex items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-[60px] h-[60px]"
                      />
                    </div>
                    <div className="ml-3 flex flex-col justify-center">
                      <span className="text-white text-xl font-bold">
                        {item.name}
                      </span>
                      <div className="flex items-center mt-1">
                        <FontAwesomeIcon
                          icon={faStar}
                          className="text-gray-400 mr-1"
                        />
                        <span className="text-white">4.5</span>
                      </div>
                      <span className="text-red-500 text-lg font-bold mt-1">
                        Rp. {item.price}
                      </span>
                    </div>
                    <div className="ml-4 flex items-center">
                      <button
                        className="bg-gray-300 text-black px-2 py-1 rounded-l hover:bg-gray-400 transition duration-200"
                        onClick={() => {
                          const newQuantities = { ...quantities };
                          if (newQuantities[index] > 1) {
                            newQuantities[index]--;
                          } else {
                            newQuantities[index] = 1;
                          }
                          setQuantities(newQuantities);
                        }}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        min="1"
                        value={quantities[index] || 0}
                        className="w-[50px] text-center border border-gray-300 rounded mx-1"
                        onChange={(e) => {
                          const newQuantities = { ...quantities };
                          newQuantities[index] = parseInt(e.target.value);
                          setQuantities(newQuantities);
                        }}
                      />
                      <button
                        className="bg-gray-300 text-black px-2 py-1 rounded-r hover:bg-gray-400 transition duration-200"
                        onClick={() => {
                          const newQuantities = { ...quantities };
                          newQuantities[index]++;
                          setQuantities(newQuantities);
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <span className="text-white">
                  Tidak ada produk dalam pemesanan.
                </span>
              )}
            </div>
            <div className="flex items-center justify-between mt-4 bg-white rounded-[15px] p-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={selectAll}
                  onChange={handleSelectAll}
                />
                <span className="text-gray-800 font-bold">Semua</span>
              </div>
              <span className="text-red-500 font-bold">
                Total: Rp.{" "}
                {cartItems.reduce(
                  (total, item, index) =>
                    total + item.price * (quantities[index] || 1),
                  0
                )}
              </span>
              <button
                className="bg-[#955530] text-white px-4 py-2 rounded-[15px] mt-4 hover:bg-[#7a4722] transition duration-300"
                onClick={handleCheckout}
              >
                Booking Pembelian
              </button>
            </div>
          </div>
        )}



        {/* Kategori - produk */}
        <div className="flex flex-col md:flex-row md:space-x-4 box-container-wrapper ml-[-125px]">
          <div className="w-[610px] h-[280px] bg-[#95553031] rounded-lg mx-auto my-5 p-4 shadow-md flex flex-row-reverse items-start relative">
            <img
              src={kapakImage}
              alt="New Collection"
              className="w-[275px] h-auto rounded-lg ml-4"
            />
            <div className="flex flex-col justify-start items-start w-full mr-4 mb-12">
              <h2 className="font-bold text-lg text-gray-800">
                New Collection
              </h2>
              <p className=" font-bold text-xl text-gray-800">
                Recommendations, <br /> from our shop!
              </p>
            </div>
            <button className="absolute bottom-5 left-4 min-w-[150px] px-2 py-2 bg-[#955530] text-white rounded-lg text-sm font-bold cursor-pointer transition duration-300 hover:bg-[#7a4722]">
              Shop Now
            </button>
          </div>

          <div className="welcome-text mt-4 md:mt-0">
            <p
              className="text-2xl text-gray-800 font-bold"
              style={{ marginTop: "16px", marginLeft: "-165px" }}
            >
              Hallo, User!
            </p>
            <p style={{ marginTop: "10px", marginLeft: "-165px" }}>
              Selamat Datang di Website UMKM
            </p>
            <p style={{ marginTop: "10px", marginLeft: "-165px" }}>
              “KIOS MINI”
            </p>
            <div
              className="category-title text-2xl font-bold text-gray-800 mt-5"
              style={{ marginLeft: "-165px" }}
            >
              Category
            </div>
            <div className="flex justify-center gap-5 mt-4 -mt-2 category-container ml-[-165px]">
              <div
                className="w-[80px] h-[75px] bg-[#955530ae] rounded-full flex justify-center items-center text-white font-bold text-sm"
                style={{ marginRight: "30px" }}
              >
                <img src={kuasImage} alt="Image A" className="w-12 h-12" />
              </div>
              <div
                className="w-[80px] h-[75px] bg-[#955530ae] rounded-full flex justify-center items-center text-white font-bold text-sm"
                style={{ marginRight: "30px" }}
              >
                <img src={hammerImage} alt="Image B" className="w-12 h-12" />
              </div>
              <div
                className="w-[80px] h-[75px] bg-[#955530ae] rounded-full flex justify-center items-center text-white font-bold text-sm"
                style={{ marginRight: "30px" }}
              >
                <img src={pakuImage} alt="Image C" className="w-12 h-12" />
              </div>
              <div className="w-[80px] h-[75px] bg-[#955530ae] rounded-full flex justify-center items-center text-white font-bold text-sm">
                <img src={emberImage} alt="Image D" className="w-12 h-12" />
              </div>
            </div>
          </div>
        </div>

        {/* Product - footer */}
        <div className="w-1/3 h-[2px] bg-black mx-auto mb-2 mt-[25px]"></div>
        <div className="w-1/4 h-[2px] bg-black mx-auto mb-5 mt-[25px]"></div>

        <div className="flex items-center justify-between mb-5 mt-10">
          <div className="product-text text-lg font-bold text-left">
            Product Kini
          </div>
          <div className="flex gap-5">
            <div className="cursor-pointer text-lg font-bold py-2 px-4 rounded-full hover:bg-[#955530ae] hover:text-white transition duration-300">
              All
            </div>
            <div className="cursor-pointer text-lg font-bold py-2 px-4 rounded-full hover:bg-[#955530ae] hover:text-white transition duration-300">
              Newest
            </div>
            <div className="cursor-pointer text-lg font-bold py-2 px-4 rounded-full hover:bg-[#955530ae] hover:text-white transition duration-300">
              Popular
            </div>
          </div>
        </div>

        <div className="boxes-wrapper flex flex-row justify-between gap-3 mt-5">
          {productImages.map((image, index) => (
            <div
              key={index}
              className="box-container-like relative bg-[#955530ae] rounded-lg p-1 shadow-md w-1/6"
              onClick={() => handleProductClick(index)}
            >
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="absolute top-2 left-2 text-lg text-white cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation(); // Mencegah event click pada produk
                  handleAddToCart(index);
                }}
              />
              <FontAwesomeIcon
                icon={faHeart}
                className={`absolute top-1 right-1 text-lg cursor-pointer ${
                  liked[index] ? "text-red-500" : "text-gray-400"
                } like-button`}
                onClick={() => handleLikeClick(index)}
              />
              <div className="flex justify-center items-center h-full">
                <img
                  src={image}
                  alt={`Box ${index + 1}`}
                  className={`box-image ${imageSizes[index].width} ${imageSizes[index].height} object-contain rounded-lg mb-1`}
                />
              </div>
              <div className="text-left mt-2 text-lg font-bold text-gray-800">
                {productNames[index]}
              </div>
              <div className="text-left mt-1 text-red-500 text-lg font-bold">
                Rp. {productPrices[index]}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;

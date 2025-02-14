import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faShoppingCart,
  faInfoCircle,
  faHeart,
  faStar,
  faBell,
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
import Navbar from "./Navbar";

const HomePage = () => {
  const [liked, setLiked] = useState([false, false, false, false, false]);
  const [showCartContainer, setShowCartContainer] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();

  const handleHeartClick = (index) => {
    const updatedLikes = [...liked];
    updatedLikes[index] = !updatedLikes[index]; // Toggle like state
    setLiked(updatedLikes);

    if (updatedLikes[index]) {
      navigate("/wishlist"); // Pindah ke halaman wishlist jika produk disukai
    }
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

  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselImages = [kapakImage, MeteranImage, SekopImage];

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

  useEffect(() => {
    try {
      const storedWishlist = localStorage.getItem("wishlist");
      console.log("Stored wishlist:", storedWishlist); // Log untuk melihat data yang diambil
      if (storedWishlist) {
        const parsedWishlist = JSON.parse(storedWishlist);
        console.log("Parsed wishlist:", parsedWishlist); // Log hasil parsing
        if (Array.isArray(parsedWishlist)) {
          setWishlist(parsedWishlist);
        } else {
          console.warn("Wishlist data tidak valid");
          setWishlist([]); // Set wishlist kosong jika data tidak valid
        }
      } else {
        setWishlist([]); // Jika tidak ada data wishlist di localStorage, set wishlist kosong
      }
    } catch (error) {
      console.error("Error saat mengambil data wishlist:", error);
      setWishlist([]); // Jika terjadi error saat parsing, set wishlist kosong
    }
  }, []);

  const handleLikeClick = (index) => {
    const newLiked = [...liked];
    newLiked[index] = !newLiked[index];
    setLiked(newLiked);

    // Create product object with all necessary details
    const product = {
      name: productNames[index],
      image: productImages[index],
      price: productPrices[index],
      liked: newLiked[index],
    };

    // Update wishlist based on like state
    setWishlist((prevWishlist) => {
      let updatedWishlist;
      if (newLiked[index]) {
        // Add to wishlist if not already present
        const exists = prevWishlist.some((item) => item.name === product.name);
        updatedWishlist = exists ? prevWishlist : [...prevWishlist, product];
      } else {
        // Remove from wishlist
        updatedWishlist = prevWishlist.filter(
          (item) => item.name !== product.name
        );
      }

      // Save to localStorage
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });
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
            {/* Icon Cart */}
            <div className="relative group p-2 ">
            <div className="absolute inset-0 w-9 h-9 bg-[#933804bf] ml-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="text-black text-2xl mx-2 cursor-pointer relative"
                onClick={() => setShowCartContainer(!showCartContainer)}
              />
            </div>

            {/* Icon Heart */}
            <div className="relative group p-2">
              <div className="absolute inset-0 w-9 h-9 bg-[#933804bf] ml-3 translate-y-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <svg
                className="w-[32px] h-[32px] mx-2 text-red-500 relative"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                onClick={handleHeartClick} // Menambahkan event klik untuk navigasi
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </div>

            {/* Icon Bell */}
            <div className="relative group p-2">
              <div className="absolute inset-0 w-9 h-9 bg-[#933804bf] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-2"></div>

              <FontAwesomeIcon
                icon={faBell}
                className="text-black text-2xl mx-2 relative cursor-pointer"
                onClick={() => navigate("/notification")} // Menambahkan onClick untuk navigasi
              />
            </div>
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
            {/* Carousel Container */}
            <div className="w-[275px] h-[180px] ml-4 relative overflow-hidden rounded-lg">
              <div
                className="flex transition-transform duration-300 ease-in-out h-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {carouselImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="min-w-full h-full object-cover"
                  />
                ))}
              </div>

              {/* Dot Indicators */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? "bg-white scale-125"
                        : "bg-gray-400 hover:bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Bagian teks tetap sama */}
            <div className="flex flex-col justify-start items-start w-full mr-4 mb-12">
              <h2 className="font-bold text-lg text-gray-800">
                New Collection
              </h2>
              <p className="font-bold text-xl text-gray-800">
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
              onClick={() => handleProductClick(index)} // Event untuk klik pada produk
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
                onClick={(e) => {
                  e.stopPropagation(); // Mencegah event click pada produk agar hanya like yang diproses
                  handleLikeClick(index);
                }}
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

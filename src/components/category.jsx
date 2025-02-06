import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart, faBars, faTimes, faBell } from "@fortawesome/free-solid-svg-icons";

// Gambar produk
import sekopImage from "../assets/Sekop.png";
import cangkulImage from "../assets/Cangkul.png";
import linggisImage from "../assets/Linggis.png";
import hammerImage from "../assets/Hammer.png";
import pakuImage from "../assets/Paku.png";
import kuasImage from "../assets/Kuas.png";
import catImage from "../assets/cat.png";

const CategoryPage = ({ cartItems, handleAddToCart }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [liked, setLiked] = useState({});
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk hamburger menu
  const [showCartContainer, setShowCartContainer] = useState(false); // State untuk cart container
  const [quantities, setQuantities] = useState({});
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate = useNavigate();

  // Data kategori dan produk
  const products = {
    Pertanian: [
      { name: "Sekop", image: sekopImage, description: "Sekop berkualitas tinggi untuk keperluan pertanian.", price: "Rp. 100.000" },
      { name: "Cangkul", image: cangkulImage, description: "Cangkul untuk menggali tanah dengan mudah.", price: "Rp. 120.000" },
      { name: "Linggis", image: linggisImage, description: "Linggis untuk membongkar dan menghancurkan benda.", price: "Rp. 150.000" },
    ],
    Pertukangan: [
      { name: "Palu", image: hammerImage, description: "Palu untuk memukul dengan kekuatan yang besar.", price: "Rp. 80.000" },
      { name: "Paku", image: pakuImage, description: "Paku berkualitas untuk konstruksi dan pertukangan.", price: "Rp. 10.000" },
      { name: "Kuas", image: kuasImage, description: "Kuas cat untuk hasil pengecatan yang maksimal.", price: "Rp. 25.000" },
    ],
    Pengecatan: [
      { name: "Cat", image: catImage, description: "Cat berkualitas untuk berbagai keperluan.", price: "Rp. 50.000" },
    ],
  };

  // Gabungkan semua produk ke dalam kategori "All Products"
  const allProducts = [
    ...Object.values(products).flat(),
    { name: "Gembok Rumah", image: "https://res.cloudinary.com/ddl4sxrb3/image/upload/v1735219968/Gembok_SAP_40mm_long_zdsvvd.png", price: "Rp. 10.000" },
    { name: "Meteran", image: "https://res.cloudinary.com/ddl4sxrb3/image/upload/v1735219970/Meteran_7.5m_Kofuku_ogcptf.png", price: "Rp. 20.000" },
    { name: "Isolasi", image: "https://res.cloudinary.com/ddl4sxrb3/image/upload/v1735219990/Isolasi_Nachi_il8kxz.png", price: "Rp. 30.000" },
    { name: "Pisau Kumis Mini", image: "https://res.cloudinary.com/ddl4sxrb3/image/upload/v1735219981/Pisau_Kumis_kecil_yvwuyl.png", price: "Rp. 40.000" },
    { name: "Pisau Kumis Besar", image: "https://res.cloudinary.com/ddl4sxrb3/image/upload/v1735219986/Pisau_kumis_Besar_qzlx8k.png", price: "Rp. 50.000" },
    { name: "Arit", image: "https://res.cloudinary.com/ddl4sxrb3/image/upload/v1735219990/Arit_GBK_r7adzr.png", price: "Rp. 60.000" },
    { name: "Piting Lampu Plfn", image: "https://res.cloudinary.com/ddl4sxrb3/image/upload/v1735219994/Piting_Lampu_plafon_ycbg1l.png", price: "Rp. 20.000" },
    { name: "Rantai Pacific", image: "https://res.cloudinary.com/ddl4sxrb3/image/upload/v1735219990/Rantai_116_Pacific_6.7_speed_w7xexb.png", price: "Rp. 80.000" },
    { name: "Lem Auto Sealer", image: "https://res.cloudinary.com/ddl4sxrb3/image/upload/v1735220004/Lem_auto_sealer_Dextone_35_gr_sn6i0f.png", price: "Rp. 20.000" },
    { name: "Lem Pipa PVC", image: "https://res.cloudinary.com/ddl4sxrb3/image/upload/v1735220009/Lem_pipa_PVC_Qplast_rwelrp.png", price: "Rp. 25.000" },
    { name: "Mata Bor Kayu", image: "https://res.cloudinary.com/ddl4sxrb3/image/upload/v1735220011/Mata_Bor_kayu_set_Bison_bd5llj.png", price: "Rp. 35.000" },
    { name: "Kran Isco", image: "https://res.cloudinary.com/ddl4sxrb3/image/upload/v1735220015/Kran_merk_Isco_twoway_zvlrhd.png", price: "Rp. 12.000" },
    { name: "Lem Alteco", image: "https://res.cloudinary.com/ddl4sxrb3/image/upload/v1735220027/Lem_Alteco_Korea_nautnb.png", price: "Rp. 9.000" },
    { name: "Piringan Kompor", image: "https://res.cloudinary.com/ddl4sxrb3/image/upload/v1735220028/piringan_Kompor_Gas_knbqaj.png", price: "Rp. 35.000" },
    { name: "Knop Kompor", image: "https://res.cloudinary.com/ddl4sxrb3/image/upload/v1735220028/Knop_Kompor_gas_cixpxd.png", price: "Rp. 14.000" },
    { name: "Pompa Sepeda", image: "https://res.cloudinary.com/ddl4sxrb3/image/upload/v1735220039/Pompa_sepeda_fjvagx.png", price: "Rp. 170.000" },
    { name: "Kunci Pas", image: "https://res.cloudinary.com/ddl4sxrb3/image/upload/v1735220040/Kunci_Pas_nesock.png", price: "Rp. 80.000" },
    { name: "Tang", image: "https://res.cloudinary.com/ddl4sxrb3/image/upload/v1735220054/Tang_hml5cu.png", price: "Rp. 150.000" },
  ];

  const [selectAll, setSelectAll] = useState(false);

  const handleProductClick = (product) => {
    const cleanPrice = parseInt(product.price.replace(/[Rp. ]/g, ""), 10); // Hapus 'Rp.', spasi, dan titik, lalu ubah ke angka
  
    const similarProducts = allProducts.filter(
      (p) => p.name !== product.name && p.category === product.category
    );
  
    navigate("/product-detail", {
      state: {
        product: { ...product, price: cleanPrice }, // Oper harga yang sudah diubah ke angka
        similarProducts: similarProducts.map((p) => ({
          ...p,
          price: parseInt(p.price.replace(/[Rp. ]/g, ""), 10),
        })), // Bersihkan harga untuk produk serupa juga
      },
    });
  };

  const handleSelectAll = () => {
    setSelectAll((prev) => !prev);
    // Update selectedItems based on the new selectAll state
    if (!selectAll) {
      // If selectAll is true, select all items
      setSelectedItems(cartItems.map((_, index) => index));
    } else {
      // If selectAll is false, clear selection
      setSelectedItems([]);
    }
  };

  const handleLikeClick = (productName) => {
    setLiked((prevLiked) => ({
      ...prevLiked,
      [productName]: !prevLiked[productName],
    }));
  };

  const handleCheckout = () => {
    navigate("/checkout", { state: { cartItems } });
  };

  const handleItemSelect = (index) => {
    if (selectedItems.includes(index)) {
      setSelectedItems(selectedItems.filter((item) => item !== index));
    } else {
      setSelectedItems([...selectedItems, index]);
    }
  };

  const onAddToCart = (product) => {
    const newItem = {
      name: product.name,
      image: product.image,
      price: parseInt(product.price.replace(/[^0-9]/g, "")), // Konversi harga ke angka
    };
  
    // Periksa apakah item sudah ada di keranjang
    const existingIndex = cartItems.findIndex(item => item.name === newItem.name);
    
    if (existingIndex >= 0) {
      const newQuantities = { ...quantities };
      newQuantities[existingIndex] = (newQuantities[existingIndex] || 1) + 1;
      setQuantities(newQuantities);
    } else {
      handleAddToCart(newItem); // Gunakan prop fungsi dari parent
      setQuantities(prev => ({ ...prev, [cartItems.length]: 1 }));
    }
    
    setShowCartContainer(true);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  
  

  return (
    <div className="flex flex-col md:flex-row mt-[100px]">
      {/* Hamburger Menu Button (Mobile Only) */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button onClick={toggleMenu} className="p-2 bg-[#955530ae] rounded-lg">
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="text-white text-2xl" />
        </button>
      </div>

      {/* Ikon Cart, Heart, dan Bell */}
      <div className="flex items-center ml-auto">
        <div className="fixed top-24 right-4 flex items-center space-x-4 z-50">
          {/* Icon Cart */}
          <div className="relative group p-2">
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
              onClick={() => navigate('/wishlist')}
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
              className="text-black text-2xl mx-2 relative"
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
      {cartItems && cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div key={index} className="flex items-center mb-4">
            <input
              type="checkbox"
              className="mr-2"
              checked={selectedItems && selectedItems.includes(index)}
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
                value={quantities && quantities[index] || 1}
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
                  newQuantities[index] = (newQuantities[index] || 0) + 1;
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
          checked={selectAll || false}
          onChange={handleSelectAll}
        />
        <span className="text-gray-800 font-bold">Semua</span>
      </div>
      <span className="text-red-500 font-bold">
        Total: Rp.{" "}
        {cartItems && cartItems.reduce(
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


      {/* Overlay untuk mencegah klik di luar hamburger menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Sidebar (Mobile dan Desktop) */}
      <div
        className={`md:w-[317px] md:h-[669px] bg-[#c6bbb6] rounded-lg shadow-md p-4 md:relative md:mt-[-50px] md:block ${
          isMenuOpen ? "fixed top-0 left-0 w-[250px] h-full z-50 transform translate-x-0" : "hidden"
        } md:translate-x-0`}
      >
        <h1 className="text-black text-2xl font-bold mb-4 mt-10">Category</h1>
        <div className="mt-8">
          <div
            className={`mb-3 cursor-pointer p-2 rounded-lg ${
              selectedProduct === null ? "bg-[#955530ae] text-white" : "text-black"
            }`}
            onClick={() => {
              setSelectedProduct(null);
              setIsMenuOpen(false); // Tutup menu setelah memilih kategori
            }}
          >
            <p className="text-lg font-medium ml-2">• All Product</p>
          </div>
          {Object.keys(products).map((category, index) => (
            <div
              key={index}
              className={`mb-3 cursor-pointer p-2 rounded-lg ${
                selectedProduct?.category === category ? "bg-[#955530ae] text-white" : "text-black"
              }`}
              onClick={() => {
                setSelectedProduct({ category });
                setIsMenuOpen(false); // Tutup menu setelah memilih kategori
              }}
            >
              <p className="text-lg font-medium ml-2">• {category}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Product List */}
      <div className="flex-1 p-5 mt-14">
        <div className="overflow-y-auto h-[calc(100vh-200px)]"> {/* Set fixed height for scrolling */}
          <div className="boxes-wrapper grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {(selectedProduct ? products[selectedProduct.category] : allProducts).map((product, index) => (
              <div
                key={index}
                className="relative w-full mb-6"
                onClick={() => handleProductClick(index)}
              >
                <div className="absolute top-2 right-2 z-10">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className={`text-lg cursor-pointer ${liked[product.name] ? "text-red-500" : "text-gray-400"} like-button`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLikeClick(product.name);
                    }}
                  />
                </div>
                <div className="absolute top-2 left-2 z-10">
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="text-lg cursor-pointer text-gray-400 hover:text-white"
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(index);
                    }}
                  />
                </div>

                <div className="box-container-like bg-[#955530ae] rounded-lg p-4 shadow-md">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] object-contain mb-2 mx-auto"
                  />
                  <div className="text-left text-lg font-bold text-gray-800">{product.name}</div>
                </div>

                <div className="text-left text-red-500 text-lg font-bold mt-2">{product.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
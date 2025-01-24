import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

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
    { name: " Piting Lampu Plfn", image: "https://res.cloudinary.com/ddl4sxrb3/image/upload/v1735219994/Piting_Lampu_plafon_ycbg1l.png", price: "Rp. 20.000" },
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

  const handleProductClick = (product) => {
    navigate("/product-detail", { state: { product } });
  };

  const handleLikeClick = (productName) => {
    setLiked((prevLiked) => ({
      ...prevLiked,
      [productName]: !prevLiked[productName],
    }));
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

      {/* Overlay untuk mencegah klik di luar hamburger menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Sidebar (Hidden on Mobile, Visible on Desktop) */}
      <div
  className={`fixed top-0 left-0 w-full md:w-[317px] h-auto bg-[#c6bbb6] rounded-lg shadow-md p-4 mb-4 md:mb-9 md:mt-[-50px] transform transition-transform duration-300 z-50 md:block ${
    isMenuOpen ? "translate-x-0" : "translate-x-full"
  }`}
>
        <h1 className="text-black text-2xl font-bold mb-4 mt-10">Category</h1>
        <div className="mt-8">
          <div
            className={`mb-3 cursor-pointer p-2 rounded-lg ${selectedProduct === null ? "bg-[#955530ae] text-white" : "text-black"}`}
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
              className={`mb-3 cursor-pointer p-2 rounded-lg ${selectedProduct?.category === category ? "bg-[#955530ae] text-white" : "text-black"}`}
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
      <div className="flex-1 p-5">
        {selectedProduct ? (
          <div className="boxes-wrapper grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products[selectedProduct.category]?.map((product, index) => (
              <div
                key={index}
                className="relative w-full mb-6"
                onClick={() => handleProductClick(product)}
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
                      handleAddToCart(product);
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
        ) : (
          <div className="boxes-wrapper grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {allProducts.map((product, index) => (
              <div
                key={index}
                className="relative w-full mb-6"
                onClick={() => handleProductClick(product)}
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
                      handleAddToCart(product);
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

                <div className="text-left text-red-500 text-lg font-bold mt-2">{product.price}</div ></div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
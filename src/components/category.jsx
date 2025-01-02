import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

// Gambar produk
import sekopImage from "../assets/Sekop.png"; 
import cangkulImage from "../assets/Cangkul.png";
import linggisImage from "../assets/Linggis.png";
import hammerImage from "../assets/Hammer.png";
import pakuImage from "../assets/Paku.png";
import kuasImage from "../assets/Kuas.png";
import catImage from "../assets/cat.png";

const CategoryPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null); // Menyimpan produk yang dipilih
  const [liked, setLiked] = useState({}); // Menyimpan status like untuk setiap produk
  const [cartItems, setCartItems] = useState([]); // Menyimpan produk yang ditambahkan ke keranjang

  // Data produk utama
  const products = {
    Sekop: { name: "Sekop", image: sekopImage, description: "Sekop berkualitas tinggi untuk keperluan pertanian.", price: "Rp. 100.000" },
    Cangkul: { name: "Cangkul", image: cangkulImage, description: "Cangkul untuk menggali tanah dengan mudah.", price: "Rp. 120.000" },
    Linggis: { name: "Linggis", image: linggisImage, description: "Linggis untuk membongkar dan menghancurkan benda.", price: "Rp. 150.000" },
    Palu: { name: "Palu", image: hammerImage, description: "Palu untuk memukul dengan kekuatan yang besar.", price: "Rp. 80.000" },
    Paku: { name: "Paku", image: pakuImage, description: "Paku berkualitas untuk konstruksi dan pertukangan.", price: "Rp. 10.000" },
    Kuas: { name: "Kuas", image: kuasImage, description: "Kuas cat untuk hasil pengecatan yang maksimal.", price: "Rp. 25.000" },
    Cat: { name: "Cat", image: catImage, description: "Cat berkualitas untuk berbagai keperluan.", price: "Rp. 50.000" },
  };

  // Data tambahan untuk kategori All Product
  const allProducts = [
    ...Object.values(products), // Produk utama
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

  // Fungsi untuk menambahkan produk ke keranjang
  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    alert(`${product.name} telah ditambahkan ke keranjang.`);
  };

  // Fungsi untuk menangani klik pada tombol like
  const handleLikeClick = (productName) => {
    setLiked((prevLiked) => ({
      ...prevLiked,
      [productName]: !prevLiked[productName], // Toggle like state
    }));
  };

  return (
    <div className="flex mt-[100px]">
      {/* Sidebar kategori */}
      <div className="w-[317px] h-[669px] bg-[#dedcdb] rounded-lg shadow-md p-4 ml-0 mb-9 mt-[-50px]">
        <h1 className="text-black text-2xl font-bold mb-4 mt-5">Category</h1>

        {/* Daftar Kategori */}
        <div className="mt-4">
          <div
            className={`mb-3 cursor-pointer p-2 rounded-lg ${selectedProduct === null ? "bg-[#955530ae] text-white" : "text-black"}`}
            onClick={() => setSelectedProduct(null)}
          >
            <p className="text-lg font-medium ml-2">• All Product</p>
          </div>
          {Object.keys(products).map((product, index) => (
            <div
              key={index}
              className={`mb-3 cursor-pointer p-2 rounded-lg ${selectedProduct?.name === product ? "bg-[#955530ae] text-white" : "text-black"}`}
              onClick={() => setSelectedProduct(products[product])}
            >
              <p className="text-lg font-medium ml-2">• {product}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Konten utama */}
      <div className="flex-1 p-5">
        {selectedProduct ? (
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
            <p className="text-lg text-gray-700 mb-4">{selectedProduct.description}</p>

            {/* Menampilkan produk yang dipilih */}
            <div className="relative w-[200px] mb-6">
              <div className="absolute top-2 right-2 z-10">
                <FontAwesomeIcon
                  icon={faHeart}
                  className={`text-lg cursor-pointer ${liked[selectedProduct.name] ? "text-red-500" : "text-gray-400"} like-button`}
                  onClick={() => handleLikeClick(selectedProduct.name)}
                />
              </div>
              <div className="absolute top-2 left-2 z-10">
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className="text-lg cursor-pointer text-gray-400 hover:text-white"
                  onClick={() => handleAddToCart(selectedProduct)}
                />
              </div>

              <div className="box-container-like bg-[#955530ae] rounded-lg p-4 shadow-md">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-[150px] h-[150px] object-contain mb-2 mx-auto"
                />
                <div className="text-left text-lg font-bold text-gray-800">{selectedProduct.name}</div>
              </div>

              <div className="text-left text-red-500 text-lg font-bold mt-2">{selectedProduct.price}</div>
            </div>
          </div>
        ) : (
          <div className="boxes-wrapper flex flex-wrap justify-start gap-4">
            {allProducts.map((product, index) => (
              <div key={index} className="relative w-[200px] mb-6">
                <div className="absolute top-2 right-2 z-10">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className={`text-lg cursor-pointer ${liked[product.name] ? "text-red-500" : "text-gray-400"} like-button`}
                    onClick={() => handleLikeClick(product.name)}
                  />
                </div>
                <div className="absolute top-2 left-2 z-10">
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="text-lg cursor-pointer text-gray-400 hover:text-white"
                    onClick={() => handleAddToCart(product)}
                  />
                </div>

                <div className="box-container-like bg-[#955530ae] rounded-lg p-4 shadow-md">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-[150px] h-[150px] object-contain mb-2 mx-auto"
                  />
                  <div className="text-left text-lg font-bold text-gray-800">{product.name}</div>
                </div>

                <div className="text-left text-red-500 text-lg font-bold mt-2">{product.price}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;

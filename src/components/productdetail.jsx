import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product, similarProducts } = location.state || {};

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold">Produk tidak ditemukan.</p>
      </div>
    );
  }

  const handleBuyNow = () => {
    navigate("/checkout", {
      state: { cartItems: [product], quantities: { 0: 1 } },
    });
  };

  const handleAddToCart = () => {
    navigate("/", {
      state: { 
        addToCart: {
          ...product,
          name: product.name,
          image: product.image,
          price: product.price
        } 
      },
      replace: true // Untuk menghindari history stack menumpuk
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto p-4">
        {/* Container utama */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row">
          {/* Gambar Produk */}
          <div className="md:w-1/2 p-4 flex justify-center items-center border-r border-gray-200">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto max-w-md rounded-md"
            />
          </div>

          {/* Detail Produk */}
          <div className="md:w-1/2 p-6">
            <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
            <p className="text-red-500 text-3xl font-semibold mb-4">
              Rp. {product.price.toLocaleString("id-ID")}
            </p>

            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="text-gray-700">{product.description}</p>
            </div>

            {/* Tombol Aksi */}
            <div className="flex flex-col md:flex-row gap-4 mt-6">
              <button
                className="w-full bg-[#d0765b] hover:bg-[#aa5b43] text-white font-semibold py-3 rounded-lg"
                onClick={handleBuyNow}
              >
                Beli Sekarang
              </button>
              <button
                className="w-full bg-[#fe9655] hover:bg-[#FFB300] text-gray-800 font-semibold py-3 rounded-lg"
                onClick={handleAddToCart}
              >
                Tambah ke Keranjang
              </button>
            </div>

            {/* Informasi Tambahan */}
            <div className="mt-6">
              <h2 className="text-lg font-bold mb-2">Detail Produk</h2>
              <ul className="text-gray-700 space-y-2">
                <li>Kategori: {product.category || "Tidak ada kategori"}</li>
                <li>Stok: {product.stock || "Tidak tersedia"}</li>
                <li>Rating: {product.rating || "Belum ada penilaian"}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Produk Serupa */}
        <div className="mt-8">
          <h2 className="text-lg font-bold mb-4">Produk Serupa</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {similarProducts?.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-4 text-center cursor-pointer"
                onClick={() =>
                  navigate("/product-detail", { state: { product: item } })
                }
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-auto mb-2 rounded-md"
                />
                <p className="text-sm font-semibold">{item.name}</p>
                <p className="text-red-500 text-sm font-bold">
                  Rp. {item.price.toLocaleString("id-ID")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
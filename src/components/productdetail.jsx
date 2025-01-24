import React from "react";
import { useLocation } from "react-router-dom";

const ProductDetail = () => {
  const location = useLocation();
  const { product } = location.state || {};

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold">Produk tidak ditemukan.</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Bagian gambar produk */}
          <div className="flex justify-center items-center md:w-1/2 p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto max-w-sm rounded-md border border-gray-200"
            />
          </div>

          {/* Bagian detail produk */}
          <div className="md:w-1/2 p-6">
            <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
            <p className="text-xl text-red-500 font-semibold mb-4">
              Rp. {product.price.toLocaleString("id-ID")}
            </p>
            <p className="text-gray-700 mb-4">{product.description}</p>

            {/* Tombol aksi */}
            <div className="flex gap-4 mt-6">
              <button className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg">
                Beli Sekarang
              </button>
              <button className="w-full md:w-auto bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg">
                Tambah ke Keranjang
              </button>
            </div>
          </div>
        </div>

        {/* Bagian tambahan */}
        <div className="p-6 border-t border-gray-200">
          <h2 className="text-lg font-bold mb-2">Detail Produk</h2>
          <ul className="text-gray-700 list-disc pl-6">
            {/* Ubah detail tambahan sesuai kebutuhan */}
            <li>Kategori: {product.category || "Tidak ada kategori"}</li>
            <li>Stok: {product.stock || "Tidak tersedia"}</li>
            <li>Rating: {product.rating || "Belum ada penilaian"}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

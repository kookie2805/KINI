import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar"; // Sesuaikan path file Navbar Anda

const Checkout = () => {
  const location = useLocation();
  const cartItems = location.state?.cartItems || []; // Ambil data keranjang dari state

  // Hitung total harga
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Konten utama */}
      <div className="flex-1 p-4 pt-32 flex">
        {/* Kolom kiri untuk form */}
        <div className="w-1/2 pr-4">
          <h1 className="text-2xl font-bold text-gray-800 text-left">
            KONFIRMASI <br /> PEMESANAN
          </h1>

          {/* Form Penerima */}
          <form className="mt-6 space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Nama Penerima
              </label>
              <input
                type="text"
                placeholder="Masukkan nama penerima"
                className="w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:border-[#955530] bg-gray-200 text-sm h-8"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Alamat Penerima
              </label>
              <input
                type="text"
                placeholder="Masukkan alamat penerima"
                className="w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:border-[#955530] bg-gray-200 text-sm h-8"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Nomor Tujuan Penerima
              </label>
              <input
                type="text"
                placeholder="Masukkan nomor tujuan penerima"
                className="w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:border-[#955530] bg-gray-200 text-sm h-8"
              />
            </div>
            <div className="mt-4">
              <span className="block text-gray-700 font-medium mb-2">
                Metode Pembayaran
              </span>
              <div className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" />
                <span className="text-gray-700">Bayar di Toko</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-gray-700">QRIS</span>
              </div>
            </div>
          </form>
        </div>

        {/* Kolom kanan untuk box container */}
        <div className="w-1/2 pl-4">
          <div className="bg-[#933804] rounded-lg p-6 shadow-md">
            <h2 className="text-lg font-bold text-white mb-4">Pesanan Anda</h2>
            <div className="space-y-4">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3"
                >
                  {/* Box putih dengan border radius untuk gambar */}
                  <div className="bg-white rounded-[20px] p-2 shadow-md">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-contain"
                    />
                  </div>

                  {/* Detail Produk */}
                  <span className="text-white font-medium">{item.name}</span>
                  <span className="text-white font-bold">
                    Rp {item.price.toLocaleString()}
                  </span>
                </div>
              ))}
              <div className="w-full h-[1px] bg-gray-300 my-4"></div>
              <div className="flex justify-between">
                <span className="text-white font-bold">Total</span>
                <span className="text-white font-bold">
                  Rp {totalPrice.toLocaleString()}
                </span>
              </div>

              {/* Tombol Checkout */}
              <button
                className="w-full mt-4 py-2 bg-white text-[#933804] font-bold text-lg rounded-lg shadow-md hover:bg-gray-100 transition"
                onClick={() => alert("Checkout berhasil!")}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

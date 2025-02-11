import React, { useState } from "react";

const Profile = () => {
  // State untuk mengontrol tampilan sidebar
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function untuk menampilkan atau menyembunyikan sidebar
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex flex-col lg:flex-row h-auto lg:h-screen bg-gray-100">
      {/* Sidebar (Hamburger Menu) */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:block w-full lg:w-64 bg-[#955530ae]  p-5 text-white fixed lg:relative top-0 left-0 h-full z-50 transition-all`}
      >
        <h2 className="text-lg font-bold">HISTORY TRANSAKSI</h2>
        <ul className="mt-5 space-y-2">
          <li className="cursor-pointer p-3 rounded-md hover:bg-white hover:text-black transition">Semua</li>
          <li className="cursor-pointer p-3 rounded-md hover:bg-white hover:text-black transition">Menunggu</li>
          <li className="cursor-pointer p-3 rounded-md hover:bg-white hover:text-black transition">Disetujui</li>
          <li className="cursor-pointer p-3 rounded-md hover:bg-white hover:text-black transition">Selesai</li>
          <li className="cursor-pointer p-3 rounded-md hover:bg-white hover:text-black transition">Dibatalkan</li>
          <li className="cursor-pointer p-3 rounded-md hover:bg-white hover:text-black transition">Arsip</li>
        </ul>
      </div>

      {/* Hamburger Button */}
      <button
        className="lg:hidden absolute top-5 left-5 text-black text-3xl z-50"
        onClick={toggleSidebar}
      >
        {isOpen ? "×" : "☰"}
      </button>

      {/* Main Content */}
      <div className="flex-1 p-5 lg:p-10">
        {/* Profile Card */}
        <div className="flex flex-col sm:flex-row items-center bg-white p-6 rounded-lg shadow-lg">
          <div className="w-24 h-24 bg-gray-400 rounded-full"></div>
          <div className="ml-5 text-center sm:text-left">
            <h2 className="text-2xl font-bold">Tegar Adytia</h2>
            <p className="text-gray-500 text-lg">@akutegaradytia</p>
          </div>
          <button className="mt-4 sm:mt-0 sm:ml-auto bg-green-600 text-white px-6 py-2 rounded-lg">Edit</button>
        </div>

        {/* Action Buttons */}
        <div className="mt-5 flex flex-col sm:flex-row space-x-0 sm:space-x-4 space-y-3 sm:space-y-0">
          <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2">⚠ Laporkan Masalah</button>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2">➡ Keluar</button>
          <button className="bg-red-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2">❤️ Barang Favorit</button>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2">⚡ Alamat Saya</button>
        </div>

        {/* Orders */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white p-5 rounded-lg shadow-lg border border-gray-200">
              <h3 className="font-bold text-lg">Pesanan ID</h3>
              <p className="text-gray-700">Nama: name</p>
              <p className="text-gray-700">Alamat: address</p>
              <p className="text-gray-700">No. HP: number_phone</p>
              <p className="font-bold text-gray-800 mt-2">Metode Pembayaran: payment_method</p>
              <div className="mt-2 text-gray-700">
                <p><strong>Barang 1</strong></p>
                <p>Kuantitas x Harga</p>
              </div>
              <p className="mt-3 font-bold text-gray-800">Total Harga</p>
              <div className="mt-4 flex justify-between">
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg">Selesai</button>
                <button className="bg-red-600 text-white px-4 py-2 rounded-lg">Batalkan</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">🔍</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
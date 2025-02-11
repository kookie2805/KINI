import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Data dummy user
  const userData = {
    name: "Tegar Adytia",
    username: "@akutegaradytia",
    email: "tegaradytia@example.com",
    phone: "0812345678933",
    storeName: "Toko Tegar",
    gender: "Laki-laki"
  };

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleEditProfile = () => {
    navigate("/editprofile");
  };

  return (
    <div className="flex flex-col lg:flex-row h-auto lg:h-screen bg-gray-100">
      {/* Sidebar Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:block w-full lg:w-64 bg-[#955530ae] p-5 text-white fixed lg:relative top-0 left-0 h-full z-50 transition-all`}
      >
        <h2 className="text-lg font-bold mb-5">HISTORY TRANSAKSI</h2>
        <ul className="space-y-2">
          {["Semua", "Menunggu", "Disetujui", "Selesai", "Dibatalkan", "Arsip"].map(
            (menu, index) => (
              <li
                key={index}
                className="cursor-pointer p-3 rounded-md hover:bg-white hover:text-black transition"
              >
                {menu}
              </li>
            )
          )}
        </ul>
      </div>

      {/* Hamburger Button Mobile */}
      <button
        className="lg:hidden absolute top-5 left-5 text-black text-3xl z-50"
        onClick={toggleSidebar}
      >
        {isOpen ? "×" : "☰"}
      </button>

      {/* Konten Utama */}
      <div className="flex-1 p-5 lg:p-10">
        {/* Header Profil */}
        <div className="flex flex-col sm:flex-row items-center bg-white p-6 rounded-lg shadow-lg mb-8">
          <div className="w-24 h-24 bg-gray-400 rounded-full mb-4 sm:mb-0"></div>
          <div className="sm:ml-5 text-center sm:text-left">
            <h2 className="text-2xl font-bold text-gray-800">{userData.name}</h2>
            <p className="text-gray-500 text-lg">{userData.username}</p>
          </div>
          <button
            onClick={handleEditProfile}
            className="mt-4 sm:mt-0 sm:ml-auto bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Edit Profil
          </button>
        </div>

        {/* Tombol Aksi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          <button className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-lg font-semibold flex items-center justify-center gap-2">
            ⚠ Laporkan Masalah
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg font-semibold flex items-center justify-center gap-2">
            ➡ Keluar
          </button>
          <button className="bg-red-700 hover:bg-red-800 text-white p-3 rounded-lg font-semibold flex items-center justify-center gap-2">
            ❤️ Barang Favorit
          </button>
          <button className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-lg font-semibold flex items-center justify-center gap-2">
            ⚡ Alamat Saya
          </button>
        </div>

        {/* Daftar Pesanan */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((order) => (
            <div key={order} className="bg-white p-5 rounded-lg shadow-lg border border-gray-200">
              <div className="mb-4">
                <h3 className="font-bold text-lg text-gray-800">Pesanan #ORD{order}</h3>
                <p className="text-gray-600">Tanggal: 2023-09-{10 + order}</p>
              </div>
              
              <div className="space-y-2 mb-4">
                <p className="text-gray-700">
                  <span className="font-semibold">Status:</span>{" "}
                  <span className="text-green-600">Selesai</span>
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Total:</span> Rp{250000 + (order * 50000)},-
                </p>
              </div>

              <div className="flex justify-between gap-2">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm">
                  Detail Pesanan
                </button>
                <button className="flex-1 bg-gray-600 hover:bg-gray-700 text-white px-3 py-2 rounded-lg text-sm">
                  Beli Lagi
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
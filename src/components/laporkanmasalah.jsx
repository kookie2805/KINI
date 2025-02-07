import React from "react";

const Lapormasalah = () => {
  return (
    <div className="p-10 bg-white min-h-screen">
      {/* Header */}
      <h2 className="text-2xl font-bold mb-5">Laporkan Masalah</h2>

      {/* Form Section */}
      <div className="grid grid-cols-2 gap-5">
        {/* Left Form */}
        <div className="bg-[#D1B89F] p-5 rounded-md">
          <label className="block font-bold mb-2">Nama Lengkap</label>
          <input
            type="text"
            className="w-full p-2 rounded-md bg-[#F5EDE0] outline-none"
          />
          <label className="block font-bold mt-3 mb-2">Nomer Handphone</label>
          <input
            type="text"
            className="w-full p-2 rounded-md bg-[#F5EDE0] outline-none"
          />
        </div>

        {/* Right Form */}
        <div className="bg-[#D1B89F] p-5 rounded-md">
          <label className="block font-bold mb-2">Kategori Masalah</label>
          <select className="w-full p-2 rounded-md bg-[#F5EDE0] outline-none">
            <option>Masalah</option>
          </select>
          <label className="block font-bold mt-3 mb-2">Deskripsi Masalah</label>
          <textarea
            className="w-full p-2 rounded-md bg-[#F5EDE0] outline-none"
            placeholder="Tuliskan apa yang ingin di sampaikan"
          ></textarea>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-5 flex space-x-4">
        <button className="bg-green-600 text-white px-6 py-2 rounded-md text-lg font-semibold">
          KIRIM
        </button>
        <button className="bg-red-600 text-white px-6 py-2 rounded-md text-lg font-semibold">
          Batal
        </button>
      </div>

      {/* FAQ Section */}
      <h3 className="mt-10 text-xl font-bold">FAQ</h3>
      <hr className="my-2 border-gray-500" />
      <div className="space-y-3">
        <p className="p-3 border rounded-md font-semibold cursor-pointer">
          [Baru di KINI] Mengapa saya tidak bisa mendaftar akun KINI dengan no. handphone saya?
        </p>
        <p className="p-3 border rounded-md font-semibold cursor-pointer">
          [Akun Saya] Mengapa saya tidak bisa login ke akun KINI saya?
        </p>
        <p className="p-3 border rounded-md font-semibold cursor-pointer">
          [Customer Service] Bagaimana cara menghubungi Customer Service KINI?
        </p>
        <p className="p-3 border rounded-md font-semibold cursor-pointer">
          [Akun Saya] Bagaimana cara mengubah/memperbarui nomor telepon saya?
        </p>
      </div>
    </div>
  );
};

export default Lapormasalah;

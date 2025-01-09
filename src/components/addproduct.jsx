import React from "react";
import Navbar from "./Navbar"; // Sesuaikan path file Navbar Anda

const AddProduct = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-1 p-4 pt-32 flex flex-col items-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">
          Upload Produk Anda
        </h1>

        {/* Box dengan Lebar yang Diperkecil */}
        <div 
          className="w-full max-w-xl border bg-[#933804] rounded-[15px] p-4 mb-8"
          style={{ height: "22rem" }} // Custom height: 22rem (352px)
        >
        </div>

        {/* Grid Container */}
        <div className="w-full max-w-xl flex gap-6">
          {/* Kolom Kiri: Nama Produk dan Harga */}
          <div className="w-1/3 flex flex-col space-y-4"> {/* Ubah lebar kolom kiri */}
            {/* Nama Produk */}
            <div>
              <label htmlFor="namaProduk" className="block text-gray-700 font-bold mb-2">
                Nama Produk
              </label>
              <input
                type="text"
                id="namaProduk"
                name="namaProduk"
                placeholder="Masukkan nama produk"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#933804] bg-gray-100"
                required
              />
            </div>

            {/* Harga */}
            <div>
              <label htmlFor="harga" className="block text-gray-700 font-bold mb-2">
                Harga
              </label>
              <input
                type="number"
                id="harga"
                name="harga"
                placeholder="Masukkan harga produk"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#933804] bg-gray-100"
                required
              />
            </div>
          </div>

          {/* Kolom Kanan: Category, Deskripsi Produk, dan Tombol Upload */}
          <div className="w-2/3"> {/* Ubah lebar kolom kanan */}
            {/* Category */}
            <div className="mb-4"> {/* Tambahkan margin-bottom untuk jarak */}
              <label htmlFor="category" className="block text-gray-700 font-bold mb-2">
                Category
              </label>
              <select
                id="category"
                name="category"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#933804] bg-gray-100"
                required
              >
                <option value="">Pilih Kategori</option>
                <option value="sekop">Sekop</option>
                <option value="cangkul">Cangkul</option>
                <option value="linggis">Linggis</option>
                <option value="palu">Palu</option>
                <option value="paku">Paku</option>
                <option value="kuas">Kuas</option>
                <option value="cat">Cat</option>
                <option value="lainnya">Lainnya</option>
              </select>
            </div>

            {/* Deskripsi Produk */}
            <label htmlFor="deskripsi" className="block text-gray-700 font-bold mb-2">
              Deskripsi Produk
            </label>
            <textarea
              id="deskripsi"
              name="deskripsi"
              placeholder="Masukkan deskripsi produk"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#933804] bg-gray-100"
              rows="8" // Tinggi textarea disesuaikan
              required
            ></textarea>

            {/* Container Tombol Upload */}
            <div className="flex justify-center mt-4"> {/* Flexbox untuk posisi tengah */}
              <button
                type="submit"
                className="w-1/2 bg-[#933804] text-white py-2 px-4 rounded-lg hover:bg-[#7a2e ```javascriptreact
                03] transition duration-300 text-sm"
              >
                Upload Produk
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
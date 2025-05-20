import React, { useState, useEffect } from "react";


export default function CekProduk() {
  const [nama, setNama] = useState("");
  const [produkList, setProdukList] = useState([]);
  const [hasil, setHasil] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/produk.json")
      .then((res) => res.json())
      .then((data) => setProdukList(data))
      .catch((err) => console.error("Gagal load data produk:", err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const produk = produkList.find(
      (item) => item.nama.toLowerCase() === nama.toLowerCase()
    );

    if (produk) {
      setHasil(produk);
      setError("");
    } else {
      setHasil(null);
      setError("Produk tidak ditemukan.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f3f4f6] px-4">
      <h1 className="text-3xl font-bold mb-6">Cek Ketersediaan Produk</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md p-6 rounded-lg w-full max-w-md"
      >
        <label htmlFor="kode" className="block text-gray-700 font-semibold mb-2">
          Masukkan Kode Produk:
        </label>
        <input
          type="text"
          id="nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
          placeholder="Contoh: Klepon"
          required
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700 transition"
        >
          Cek Produk
        </button>
      </form>

      {hasil && (
        <div className="mt-6 bg-white shadow-md p-4 rounded-lg w-full max-w-md">
          <h2 className="text-xl font-semibold mb-2">Hasil Pencarian:</h2>
          <p><strong>Nama:</strong> {hasil.nama}</p>
          <p><strong>Harga:</strong> Rp {hasil.harga.toLocaleString()}</p>
          <p><strong>Stok:</strong> {hasil.stok}</p>
        </div>
      )}

      {error && (
        <p className="mt-4 text-red-600 font-medium">{error}</p>
      )}
    </div>
  );
}

import React from "react";

const testimonials = [
  {
    name: "Budi Santoso",
    role: "Pengusaha Kuliner",
    quote: "Makanannya enak sekali, bangga sekali memperkenalkan makanan Indonesia melalui platform terkenal ini!",
  },
  {
    name: "Siti Rahma",
    role: "Ibu Rumah Tangga",
    quote: "Gabisa ga kesini! dalam seminggu harus 5 atau 6 kali untuk mampir!",
  },
  {
    name: "Andi Pratama",
    role: "Mahasiswa",
    quote: "Kami sekeluarga suka sekali untuk cari dessert ke toko ini! ",
  },
  {
    name: "Lestari Wulandari",
    role: "Content Creator",
    quote: "Kata siapa makanan lokal kalah sama makanan luar? Ini bukti makanan lokal jauh lebih enndang!",
  },
  {
    name: "Dewi Kartika",
    role: "Pemilik Kafe",
    quote: "Saya dan suami suka kesini saat weekend, makanannya enak enak jadi teringat masa kecil dulu tapi versi premium hehe",
  },
  {
    name: "Novia",
    role: "Cyber Security, System administrator",
    quote: "Ketika pusing sama kerjaan, sellau lari ke sini hehehe",
  },
];

export default function Testimoni() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-10">Apa Kata Mereka?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-green-100 shadow-md rounded-2xl p-6 border">
              <p className="text-gray-600 italic mb-4">“{item.quote}”</p>
              <h4 className="text-lg font-semibold text-gray-800">{item.name}</h4>
              <p className="text-sm text-gray-500">{item.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

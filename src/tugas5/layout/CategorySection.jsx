import React from "react";

const products = [ //ini untuk menampilkan menu
  {
    title: "Pistacio Coffee",
    price: "Rp.25000",
    image: "/img/kopi.jpg",
  },
  {
    title: "Cromboloni Coklat",
    price: "Rp.28000",
    image: "/img/cromboloni.jpg",
  },
  {
    title: "Donut",
    price: "Rp.20000",
    image: "/img/donat.jpg",
  },
];

const SignatureSection = () => {
  return (
    <section className="relative mt-12">
      {/* Wave Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180 -z-10">
        <svg
          className="relative block w-full h-[60px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            fill="#FFF7E6"
            d="M0,0 C480,90 960,30 1440,90 L1440,0 L0,0 Z"
          ></path>
        </svg>
      </div>

      {/* Content */}
      <div className="bg-[#FFF7E6] py-16 px-8 text-center z-10 relative">
        <h2 className="text-4xl font-bold text-red-500 mb-12">Our Menu</h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-4 shadow-md border-4 border-dashed border-orange-300 relative transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl"
              style={{
                clipPath:
                  "polygon(10% 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0 90%, 0 10%)",
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-teal-800">{product.title}</h3>
              <p className="text-lg text-red-500 font-bold mb-4">{product.price}</p>
              <button className="bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-teal-600 transition">
                More Details
              </button>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center items-center gap-4 text-gray-600 text-lg">
          <button className="hover:text-teal-500">&lt;</button>
          {[1, 2, 3, "...", 10].map((page, i) => (
            <button
              key={i}
              className={`px-3 py-1 rounded-full ${
                page === 1 ? "bg-teal-500 text-white" : "hover:text-teal-500"
              }`}
            >
              {page}
            </button>
          ))}
          <button className="hover:text-teal-500">&gt;</button>
        </div>
      </div>
    </section>
  );
};

export default SignatureSection;

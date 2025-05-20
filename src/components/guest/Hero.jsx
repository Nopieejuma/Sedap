import React from 'react';

export default function Hero(){


  return (
    <section className="h-300 bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: "url('https://i.pinimg.com/736x/d6/65/5a/d6655a7a63534ca29d55a3f231182cfe.jpg')" }}>
      <div className="bg-white bg-opacity-200 p-5 rounded-3xl text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-[#4ade80]">Enjoy a different flavor!</h2>
        <p className="text-lg mb-6 text-[#4ade80] font-bold ">Experience unforgettable in every bites!</p>
        <button className="bg-[#22c55e] px-6 py-3 rounded-md hover:bg-[#a47e59] transition">Explore Now</button>
      </div>
    </section>
  );
};



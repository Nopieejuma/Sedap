import React, { useState } from "react";

const HeroSection = () => { //ini untuk gambar slide 
  const images = [
    "/img/crombolonii.png",
    "/img/kopii.png",
    "/img/donatt.png"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <section className="bg-peach-50 py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Section */}
        <div className="flex flex-col justify-center text-left md:w-1/2 space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-red-500 leading-tight">
            Lacof <br className="hidden md:block" />
            <span className="text-red-500">Lake, coffee, and Dialogue!</span>
          </h1>
          <p className="text-lg md:text-xl text-brown-700">
            By Maps Coffee
          </p>
          <button className="bg-orange-300 text-white px-10 py-4 rounded-full font-semibold hover:bg-orange-400 transition-all duration-300 w-full md:w-fit shadow-md">
            Beli Sekarang
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center relative">
          {/* Image */}
          <img
            src={images[currentIndex]}
            alt="Delicious Pastry"
            className="w-full md:w-[380px] h-auto object-cover drop-shadow-2xl hover:scale-105 transition-transform duration-500"
          />

          {/* Next and Prev Buttons */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-gray-700 transition-all"
          >
            &lt;
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-gray-700 transition-all"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

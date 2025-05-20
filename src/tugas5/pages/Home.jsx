import React from "react";
import Navbar from "../layout/Navbar";
import HeroSection from "../layout/HeroSection";
import CategorySection from "../layout/CategorySection";
import Footer from "../layout/Footer";

const Home = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <CategorySection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
import { createRoot } from "react-dom/client";
import Navbar from "./layout/Navbar";
import HeroSection from "./sections/HeroSection";
import Footer from "./layout/Footer";
import CategorySection from "./layout/CategorySection";
import "./assets/tailwind.css";

createRoot(document.getElementById("root")).render(
  <div className="bg-white min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">
      <HeroSection />
      <CategorySection />
    </main>
    <Footer />
  </div>
);
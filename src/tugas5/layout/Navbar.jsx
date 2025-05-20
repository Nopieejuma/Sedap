import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-[#A67B5B] shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold text-white tracking-wide">
        Lacof Coffee
      </div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-8 text-white font-medium">
        <li className="hover:text-orange-200 cursor-pointer transition-colors">About</li>
        <li className="hover:text-orange-200 cursor-pointer transition-colors">Menu</li>
        <li className="hover:text-orange-200 cursor-pointer transition-colors">Reservasi</li>
        <li className="hover:text-orange-200 cursor-pointer transition-colors">Contact</li>
      </ul>

      {/* Auth Buttons */}
      <div className="flex items-center gap-4">
        <button className="bg-orange-200 text-[#5C4033] px-4 py-2 rounded-full font-semibold hover:bg-orange-300 transition duration-200">
          Register
        </button>
        <button className="border border-white text-white px-4 py-2 rounded-full font-semibold hover:bg-white hover:text-[#A67B5B] transition duration-200">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

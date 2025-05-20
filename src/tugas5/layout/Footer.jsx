import { RiReservedLine } from "react-icons/ri"; 
import { AiFillHome, AiOutlineMenuUnfold, AiFillContacts } from "react-icons/ai"; 
import { FaTwitter } from "react-icons/fa";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#FFF7E6] text-brown-800 py-16 px-6 mt-12 rounded-t-3xl shadow-inner">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Company Info */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-orange-500">Lacof</h2>
          <p className="text-base">Lake, Coffee, and Dialogue!</p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                <AiFillHome size={18} /> 
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                <AiOutlineMenuUnfold size={18} /> Menu
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                <RiReservedLine size={18} /> Reservasi
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                <AiFillContacts size={18} /> Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
          <p className="text-base">Kampus Unilak, Umban Sari, Rumbai</p>
          <p className="text-base">Phone: +123 456 789</p>
          <p className="text-base">Instagram: @lacofcoffee</p>
        </div>
      </div>

      {/* Social Links */}
      <div className="text-center mt-12 flex justify-center gap-10">
        <a href="#" className="flex flex-col items-center text-brown-700 hover:text-orange-400 transition-colors">
          <BsFacebook size={24} className="mb-1" />
          <span className="text-sm">Facebook</span>
        </a>
        <a href="#" className="flex flex-col items-center text-brown-700 hover:text-orange-400 transition-colors">
          <BsInstagram size={24} className="mb-1" />
          <span className="text-sm">Instagram</span>
        </a>
        <a href="#" className="flex flex-col items-center text-brown-700 hover:text-orange-400 transition-colors">
          <FaTwitter size={24} className="mb-1" />
          <span className="text-sm">Twitter</span>
        </a>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-brown-500 mt-8">
        &copy; {new Date().getFullYear()} Lacof. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

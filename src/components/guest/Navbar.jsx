import React from 'react';
import { Link } from 'react-router-dom';
import AboutUs from './AboutUs';
export default function Navbar(){


  return (
    <nav className="bg-white shadow-md py-4 px-8 fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="font-jost-variable text-4xl font-bold text-green-700">Sedap</h1>
        <ul className="hidden md:flex space-x-6">
                    <li><Link className=" text-orange-600 hover:text-gray-900 font-bold " to="/Dashboard1" id="1">Home</Link></li>

          <li><Link className=" text-orange-600 hover:text-gray-900 font-bold " to="/AboutUs" id="1">About</Link></li>
         <li><Link className=" text-orange-600 hover:text-gray-900 font-bold " to="/Menu" id="2">Menu</Link></li>
          <li><Link className=" text-orange-600 hover:text-gray-900 font-bold " to="/Gallery" id="3">Gallery</Link></li>
          <li><Link className=" text-orange-600 hover:text-gray-900 font-bold " to="/Footer" id="3">Contact</Link></li>
          <li><Link className=" text-orange-600 hover:text-gray-900 font-bold " to="/cekProduk" id="3">Cek ketersediaan</Link></li>
        </ul>
        <button className="bg-[#22c55e] text-white px-4 py-2 rounded-md hover:bg-[#10b981]">
          Order Now
        </button>
      </div>
    </nav>
  );
};



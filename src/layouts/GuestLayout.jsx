// src/layouts/GuestLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/guest/Navbar";

export default function GuestLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow pt-20">
        <Outlet />
      </main>

      <footer className="text-center text-sm text-gray-500 py-6">
        © 2025 Sedap Guest Site. All rights reserved.
      </footer>
    </div>
  );
}

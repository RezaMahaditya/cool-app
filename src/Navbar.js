// src/Navbar.js
import React from "react";

function Navbar({ onProfileClick }) {
  return (
    <nav className="g-opacity-50 bg-white bg-blur-lg backdrop-filter backdrop-blur-lg backdrop-saturate-150 backdrop-contrast-75 p-4 fixed w-full z-10 top-0">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-xl font-bold">Cool App</span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="text-gray-800 hover:text-blue-500"
              onClick={() => onProfileClick()}
            >
              Profile
            </a>
            <a
              href="https://wa.me/6289523824566?text=Halo,%20saya%20ingin%20membuat%20aplikasi"
              className="text-gray-800 hover:text-blue-500"
            >
              Hubungi Kontak
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

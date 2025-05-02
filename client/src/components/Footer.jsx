import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-primary text-gray-300 pt-20 mt-10 px-8">
      <div className="max-w-5xl  mx-auto px-4 sm:px-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-16 sm:gap-8">
        <div>
          <h3 className="text-2xl text-white font-bold mb-2">
            CV. Kencana Surya
          </h3>
          <p className="text-sm text-white tracking-wide">
            Penyedia produk elektronik terpercaya untuk berbagai proyek
            pemerintahan dan swasta di Indonesia.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Navigasi</h4>
          <ul className="space-y-6 text-sm text-white">
            <li>
              <Link
                to="/"
            
                className="text-white hover:text-secondary transition"
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                to="/produk"
            
                className="text-white hover:text-secondary transition"
              >
                Produk
              </Link>
            </li>
            <li>
              <Link
                to="/pengalaman"
            
                className="text-white hover:text-secondary transition"
              >
                Pemasangan
              </Link>
            </li>
            <li>
              <Link
                to="/tentang"
            
                className="text-white hover:text-secondary transition"
              >
                Tentang
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Kontak</h4>
          <ul className="space-y-3 text-sm text-white tracking-tight">
            <li>📍 Ruko Grand Sungkono Blok C No. 9</li>
            <li>📞 +62896-7880-8764</li>
            <li>✉️ kencanasuryasby@gmail.com</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Ikuti Kami</h4>
          <div className="flex space-x-6 mt-2">
            <a href="#" className="hover:text-gray-400">
              🌐
            </a>
            <a href="#" className="hover:text-gray-400">
              📘
            </a>
            <a href="#" className="hover:text-gray-400">
              📸
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10   py-4 text-center text-sm text-white border-t">
        © {new Date().getFullYear()} CV. Kencana Surya. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

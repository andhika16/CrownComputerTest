import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-100 text-gray-700 pt-20 mt-10">
      <div className="max-w-6xl  mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold mb-2">CV. Kencana Surya</h3>
          <p className="text-sm text-gray-800">
            Penyedia produk elektronik terpercaya untuk berbagai proyek
            pemerintahan dan swasta di Indonesia.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold mb-2">Navigasi</h4>
          <ul className="space-y-1 text-sm text-gray-500">
            <li>
              <a href="#" className="hover:text-gray-700">
                Beranda
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-700">
                Produk
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-700">
                Proyek
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-700">
                Tentang Kami
              </a>
            </li>
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h4 className="font-semibold mb-2">Kontak</h4>
          <ul className="space-y-1 text-sm text-gray-500">
            <li>📍 Surabaya, Indonesia</li>
            <li>📞 0812-3456-7890</li>
            <li>✉️ info@kencanasurya.co.id</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-semibold mb-2">Ikuti Kami</h4>
          <div className="flex space-x-3 mt-2">
            <a href="#" className="hover:text-gray-700">
              🌐
            </a>
            <a href="#" className="hover:text-gray-700">
              📘
            </a>
            <a href="#" className="hover:text-gray-700">
              📸
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10   py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} CV. Kencana Surya. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

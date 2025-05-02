import React from "react";

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
              <a href="#" className="hover:text-gray-400">
                Beranda
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Produk
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Proyek
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Tentang Kami
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Kontak</h4>
          <ul className="space-y-6 text-sm text-white">
            <li>📍 Surabaya, Indonesia</li>
            <li>📞 0812-3456-7890</li>
            <li>✉️ info@kencanasurya.co.id</li>
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

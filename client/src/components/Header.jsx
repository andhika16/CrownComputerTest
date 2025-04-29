import React, { useState } from "react";
import logo from "../assets/shop/logo.png";
import { Menu, X, LocationEdit, PhoneCall, MailCheck } from "lucide-react"; // Icon gratis dari lucide
import { Link } from "react-router-dom";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleLinkClick = () => {
    setMenuOpen(false);
  };
  return (
    <div className="">
      <div className="bg-primary py-2 px-4">
        <ul className="max-w-5xl mx-auto flex flex-col md:flex-row justify-center md:justify-end items-start md:items-center gap-2 md:gap-6 text-gray-100 text-xs">
          {/* Alamat */}
          <li className="flex items-center space-x-2 font-serif tracking-wider">
            <LocationEdit size={18} />
            <p>Mayjen Sungkono No.C7 Grand Sungkono</p>
          </li>

          {/* Telepon */}
          <li className="flex items-center space-x-2 font-roboto font-semibold tracking-wider">
            <PhoneCall size={18} />
            <p>+62853-30320</p>
          </li>

          {/* Email */}
          <li className="flex items-center space-x-2 font-serif tracking-wider">
            <MailCheck size={18} />
            <p>Kencasurya@kencanasurya.com</p>
          </li>
        </ul>
      </div>

      <header className="max-w-5xl mx-auto">
        <nav className="sm:py-4 flex  items-end sm:items-center justify-between mx-auto p-3">
          {/* Logo & Brand */}
          <Link to="/">
            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt="Kencana Surya Logo"
                className="w-10 sm:w-16 object-contain"
              />
              <span className="sm:block hidden text-md sm:text-sm  pt-2 font-serif  text-primary uppercase  ">
                Kencana Surya
              </span>
            </div>
          </Link>

          <button
            className="sm:hidden  block text-primary"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <ul
            className={`flex-col z-50 md:flex-row md:flex space-y-3 md:space-y-0 md:space-x-4 text-sm md:text-base text-slate-900 font-serif absolute md:static top-[130px] left-0 w-full md:w-auto bg-white md:bg-transparent md:p-0 shadow md:shadow-none transition-all duration-300 ${
              menuOpen ? "flex" : "hidden"
            }`}
          >
            <li>
              <Link
                to="/"
                onClick={handleLinkClick}
                className="text-primary hover:text-secondary"
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                to="/tentang"
                onClick={handleLinkClick}
                className="text-primary hover:text-secondary"
              >
                Tentang
              </Link>
            </li>
            <li>
              <Link
                to="/produk"
                onClick={handleLinkClick}
                className="text-primary hover:text-secondary"
              >
                Produk
              </Link>
            </li>
            <li>
              <Link
                to="/pengalaman"
                onClick={handleLinkClick}
                className="text-primary hover:text-secondary"
              >
                Pemasangan
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;

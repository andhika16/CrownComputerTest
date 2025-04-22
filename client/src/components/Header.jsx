import React, { useState } from "react";
import logo from "../assets/shop/logo.png";
import { Menu, X } from "lucide-react"; // Icon gratis dari lucide
import { Link } from "react-router-dom";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleLinkClick = () => {
    setMenuOpen(false);
  };
  return (
    <div className="container mx-auto">
      <header className="border-b">
        <nav className="container mx-auto px-2 flex items-center justify-between">
          {/* Logo & Brand */}
          <Link to={"/"} className="flex items-center space-x-3">
            <img className="w-[105px]" src={logo} alt="Kencana Surya Logo" />
            <p className="hidden xs:block uppercase text-3xl sm:text-lg text-red-600 font-serif leading-tight xs:mt-5">
              Kencana Surya
            </p>
          </Link>

          {/* Hamburger - Mobile Only */}
          <button
            className="sm:hidden block text-slate-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Navigation Menu */}
          <ul
            className={`flex-col z-50 md:flex-row md:flex space-y-3 md:space-y-0 md:space-x-6 text-sm md:text-base text-slate-900 font-serif absolute md:static top-[64px] left-0 w-full md:w-auto bg-white md:bg-transparent p-5 md:p-0 shadow md:shadow-none transition-all duration-300 ${
              menuOpen ? "flex" : "hidden"
            }`}
          >
            <li>
              <Link
                to="/"
                onClick={handleLinkClick}
                className="text-gray-700 hover:text-blue-600"
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                to="/tentang"
                onClick={handleLinkClick}
                className="text-gray-700 hover:text-blue-600"
              >
                Tentang
              </Link>
            </li>
            <li>
              <Link
                to="/kontak"
                onClick={handleLinkClick}
                className="text-gray-700 hover:text-blue-600"
              >
                Kontak
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;

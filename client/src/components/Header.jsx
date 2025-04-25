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
    <div className="container bg-white mx-auto ">
      <header className="border-b">
        <nav className="container mx-auto px-2 flex items-center justify-between">
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Kencana Surya Logo"
              className="w-[80px] sm:w-[100px] object-contain"
            />
            <span className="text-lg sm:text-2xl pt-2 font-serif font-bold text-primary uppercase  tracking-wide">
              Kencana Surya
            </span>
          </Link>

          <button
            className="sm:hidden  block text-primary"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <ul
            className={`flex-col z-50 md:flex-row md:flex space-y-3 md:space-y-0 md:space-x-6 text-sm md:text-base text-slate-900 font-serif absolute md:static top-[64px] left-0 w-full md:w-auto bg-white md:bg-transparent p-5 md:p-0 shadow md:shadow-none transition-all duration-300 ${
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
                Pengalaman
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;

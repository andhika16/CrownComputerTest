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
    <div className="border-b ">
      <header className="max-w-5xl mx-auto">
        <nav className=" p-2 sm:p-0 flex  items-end sm:items-end justify-between mx-auto px">
          {/* Logo & Brand */}
          <Link to="/" >
            <span className="text-md sm:text-xl  font-serif  text-primary uppercase  tracking-wide">
              Kencana Surya
            </span>
          </Link>
          <div className="sm:block hidden">
            <img
              src={logo}
              alt="Kencana Surya Logo"
              className="w-[80px] sm:w-[100px] object-contain"
            />
          </div>

          <button
            className="sm:hidden  block text-primary"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <ul
            className={`flex-col z-50 md:flex-row md:flex space-y-3 md:space-y-0 md:space-x-3 text-sm md:text-base text-slate-900 font-serif absolute md:static top-[64px] left-0 w-full md:w-auto bg-white md:bg-transparent md:p-0 shadow md:shadow-none transition-all duration-300 ${
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

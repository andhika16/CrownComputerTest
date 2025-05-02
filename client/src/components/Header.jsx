import React, { useState } from "react";
import logo from "../assets/shop/logo.png";
import { Menu, X, LocationEdit, PhoneCall, MailCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="w-full">
      {/* Bagian info kontak atas */}
      <div className="bg-primary px-4 py-2">
        <ul className="max-w-5xl mx-auto flex flex-col font-thin md:flex-row justify-center md:justify-end items-start md:items-center gap-2 md:gap-6 text-white text-xs md:text-sm">
          <li className="flex items-center space-x-2 tracking-wide">
            <PhoneCall size={16} />
            <a
              href="https://wa.me/6289678808764"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>+62896-7880-8764</span>
            </a>
          </li>
          <li className="flex items-center space-x-2 tracking-wide">
            <MailCheck size={16} />
            <span className="truncate">kencanasuryasby@gmail.com</span>
          </li>
          <li className="flex items-center space-x-2 tracking-wide">
            <LocationEdit size={16} />
            <a
              href="https://maps.app.goo.gl/me9RMngGJeRj7utj7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="truncate">
                Ruko Grand Sungkono Blok C No.9, Jl.Mayor Jenderal Sungkono
              </span>
            </a>
          </li>
        </ul>
      </div>

      {/* Navigasi utama */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-5xl mx-auto flex justify-between px-4 py-4 relative">
          {/* Logo */}
          <Link to="/" onClick={handleLinkClick}>
            <div className="flex items-center gap-2">
              <img src={logo} alt="Kencana Surya Logo" className="w-16" />
              <span className="sm:inline-block text-primary font-serif uppercase text-sm tracking-wide">
                Kencana Surya
              </span>
            </div>
          </Link>

          {/* Tombol menu mobile */}
          <button
            className="sm:hidden text-primary"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Navigasi menu */}
          <ul
            className={`absolute sm:static font-serif top-full left-0 w-full sm:w-auto bg-white sm:bg-transparent flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-4 sm:p-0 transition-all duration-300 ${
              menuOpen ? "flex z-40 " : "hidden sm:flex"
            }`}
          >
            <li>
              <Link
                to="/"
                onClick={handleLinkClick}
                className="text-primary hover:text-secondary transition"
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                to="/tentang"
                onClick={handleLinkClick}
                className="text-primary hover:text-secondary transition"
              >
                Tentang
              </Link>
            </li>
            <li>
              <Link
                to="/produk"
                onClick={handleLinkClick}
                className="text-primary hover:text-secondary transition"
              >
                Produk
              </Link>
            </li>
            <li>
              <Link
                to="/pengalaman"
                onClick={handleLinkClick}
                className="text-primary hover:text-secondary transition"
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

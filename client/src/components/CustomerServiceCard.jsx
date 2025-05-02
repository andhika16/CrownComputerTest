// components/CustomerServiceCard.jsx
import { useState, useEffect } from "react";
import { X, PhoneCallIcon } from "lucide-react";
import whatsapp from "../assets/shop/whatsapp.png";
import cs1 from "../assets/profilecs/cs1.jpg";
import cs2 from "../assets/profilecs/cs2.svg";

export default function CustomerServiceCard() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-10 right-10 border bg-white shadow-lg rounded-full p-3 flex items-center space-x-2 hover:shadow-lg transition"
      >
        <img src={whatsapp} alt="whatsapp" className="w-6 h-6 object-contain" />
        <p className="font-serif text-md tracking-wide"> Hubungi sekarang</p>
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 w-80 shadow-xl rounded-xl overflow-hidden border bg-white">
      {/* Header */}
      <div className="bg-green-600 text-white p-4 relative">
        <p className="text-sm font-medium">
          Konsultasi Gratis! Hubungi Sekarang!
        </p>
        <button
          onClick={() => setOpen(false)}
          className="absolute top-2 right-2 p-1 rounded hover:bg-green-700 transition"
        >
          <X size={18} />
        </button>
      </div>

      {/* Customer List */}
      {[
        { name: "Rohul", img: cs1 },
        { name: "Novie", img: cs2 },
      ].map((cs, index) => (
        <div
          key={index}
          className="flex items-center gap-4 px-4 py-3 border-t hover:bg-gray-50 transition"
        >
          <img
            src={cs.img}
            alt={cs.name}
            className="w-12 h-12 rounded-full object-cover border"
          />
          <div className="flex-1">
            <div className="font-semibold">{cs.name}</div>
            <div className="text-sm text-gray-500"> online</div>
            <div className="text-xs text-green-500">Available</div>
          </div>
          <a
            href="https://wa.me/6285231198475"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-800 transition"
          >
            <PhoneCallIcon size={20} />
          </a>
        </div>
      ))}
    </div>
  );
}

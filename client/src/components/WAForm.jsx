import { useState } from "react";

export default function WAForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const pesan = `Halo, saya ${name}. Saya ingin konsultasi mengenai pengadaan IT.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(pesan)}`;
    window.open(url, "_blank"); // buka di tab baru
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6  shadow-md">
      <p className="text-center text-sm mb-4 text-gray-700">
        Isi data di bawah ini dan kami akan segera menghubungi Anda via
        WhatsApp.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Nama Lengkap"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full  border border-primary  px-4 py-2"
        />
        <input
          type="tel"
          placeholder="No. WhatsApp Aktif (628xxxx)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="w-full border border-primary  px-4 py-2"
        />
        <button
          type="submit"
          className="w-full bg-primary hover:bg-red-600 text-white font-semibold py-2"
        >
          Hubungi via WhatsApp
        </button>
      </form>
    </div>
  );
}

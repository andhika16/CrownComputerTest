import React from "react";

const dummyImages = [
  "https://via.placeholder.com/400x250?text=Komputer",
  "https://via.placeholder.com/400x250?text=Server",
  "https://via.placeholder.com/400x250?text=Videotron",
  "https://via.placeholder.com/400x250?text=CCTV",
  "https://via.placeholder.com/400x250?text=Alat+Non-Medis",
  "https://via.placeholder.com/400x250?text=Peralatan+Perkantoran",
  "https://via.placeholder.com/400x250?text=Layanan+Teknis",
];

const services = [
  {
    title: "Komputer",
    description:
      "Penyediaan berbagai jenis komputer desktop, laptop, dan perangkat terkait untuk kebutuhan pribadi, perusahaan, dan instansi pemerintah.",
  },
  {
    title: "Server",
    description:
      "Penyediaan dan pemasangan server untuk kebutuhan perusahaan dan instansi, baik skala kecil hingga besar termasuk data center.",
  },
  {
    title: "Videotron",
    description:
      "Videotron untuk kebutuhan iklan digital, informasi publik, dan tampilan visual strategis.",
  },
  {
    title: "CCTV",
    description:
      "Sistem pengawasan kamera CCTV untuk keamanan kantor, fasilitas umum, dan ruangan strategis.",
  },
  {
    title: "Alat Non-Medis",
    description:
      "Penyediaan alat non-medis untuk mendukung kebutuhan operasional kantor dan instansi.",
  },
  {
    title: "Peralatan Perkantoran",
    description:
      "Fasilitas lengkap mulai dari printer, proyektor, scanner, hingga mesin fotokopi.",
  },
  {
    title: "Layanan Teknis",
    description:
      "Layanan instalasi, perawatan, dan dukungan teknis produk IT dan perkantoran.",
  },
];

export default function RuangLingkupSection() {
  return (
    <div className="">
      <section className=" px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Produk Layananan Kami
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="shadow-sm  overflow-hidden">
                <img
                  src={dummyImages[i]}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
     
    </div>
  );
}



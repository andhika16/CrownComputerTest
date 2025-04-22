import React from "react";
import mbiz from "../assets/shop/mbiz.jpeg";
import inaproc from "../assets/shop/inaproc.webp";
import padiumkm from "../assets/shop/padiumkm.png";
import tkdn from "../assets/shop/tkdn.webp";
import Jumbotron from "../components/Jumbotron";
import pengalamanone from "../assets/pengalaman/pengalamanone.webp";
import pengalamantwo from "../assets/pengalaman/pengalamantwo.webp";
import { useKeenSlider } from "keen-slider/react";
const produkList = [
  {
    image: "https://picsum.photos/id/1/200/300",
    title: "Printer Epson",
    desc: "Cocok untuk kebutuhan kantor",
  },
  {
    image: "https://picsum.photos/id/1/200/300",
    title: "Router Mikrotik",
    desc: "Jaringan cepat & stabil",
  },
  {
    image: "https://picsum.photos/id/1/200/300",
    title: "Laptop Lenovo",
    desc: "Tangguh untuk kerja berat",
  },
  {
    image: "https://picsum.photos/id/1/200/300",
    title: "Scanner Fuji",
    desc: "Digitalisasi dokumen cepat",
  },
];
const Home = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 25 },
      },
    },
  });
  return (
    <div className="">
      <Jumbotron />
      <div className="max-w-6xl mx-auto  sm:py-12 text-center">
        <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold font-outfit text-gray-900 mb-6 leading-snug">
          Harga Paling Murah di Indonesia, Ribuan Customer Percaya kepada Kami
        </h2>
        <p className="max-w-full sm:text-[1em] text-sm  text-slate-600 leading-relaxed font-sans">
          Kami menyediakan solusi pengadaan IT lengkap untuk berbagai{" "}
          <span className="font-bold">instansi pemerintah</span> dan{" "}
          <span className="font-bold">korporat </span> . Mulai dari perangkat
          keras hingga sistem informasi yang disesuaikan dengan kebutuhan{" "}
          <span className="font-bold">perusahaan di indonesia</span>. Anda akan
          dipandu oleh tim marketing profesional yang siap memberikan solusi
          terbaik dengan pelayanan{" "}
          <span className="font-bold">ramah dan responsif </span> . Kami
          berkomitmen memberikan harga yang kompetitif, produk terpercaya, dan
          layanan yang memuaskan.
        </p>
      </div>
      <section className="py-8 ">
        <div className="max-w-6xl mx-auto px-4 ">
          <h2 className="text-xl sm:text-3xl font-bold text-gray-800 text-center mb-8">
            Tersedia Pembelian Melalui
          </h2>
          <ul className="grid grid-cols-2 sm:flex items-center justify-between gap-6 sm:gap-10">
            <li>
              <img className="w-28 sm:w-36 mx-auto" src={mbiz} alt="mbiz" />
            </li>
            <li>
              <img
                className="w-28 sm:w-36 mx-auto"
                src={inaproc}
                alt="inaproc"
              />
            </li>
            <li>
              <img
                className="w-28 sm:w-36 mx-auto"
                src={padiumkm}
                alt="padiumkm"
              />
            </li>
            <li>
              <img className="w-28 sm:w-36 mx-auto" src={tkdn} alt="tkdn" />
            </li>
          </ul>
        </div>
        <div className="max-w-full bg-[#fc000d] p-8 text-center font-bold text-2xl text-white my-8 ">
          Kencana Surya
        </div>
        <div className="max-w-6xl mx-auto text-center my-5">
          <p className=" sm:text-[1em] text-sm font-sans text-gray-600 leading-relaxed  mx-auto">
            Jangan ragu untuk berkonsultasi dengan tim kami hari ini. Kami
            menawarkan solusi teknologi informasi dengan harga yang{" "}
            <span className="font-bold">terjangkau </span>
            dan layanan yang profesional{" "}
            <span className="font-bold">di indonesia</span> . Mulai dari
            perangkat komputer, alat jaringan dan peralatan kantor, kami siap
            membantu kebutuhan pengadaan{" "}
            <span className="font-bold"> dikantor Anda</span> .
          </p>
        </div>
      </section>
      <section className="py-5 px-4 ">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
            Pengalaman Kami telah melayani pengadaan alat kantor & teknologi
            informasi sejak 2002
          </h2>
          <p className="mt-4 text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Dengan pengalaman lebih dari dua dekade, kami telah dipercaya oleh
            berbagai instansi pemerintah dan perusahaan swasta di berbagai
            Indonesia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-lg shadow hover:shadow-lg transition">
            <img
              src={pengalamanone}
              alt="pengalaman1"
              className="w-full h-auto object-cover hover:scale-105 transition duration-300"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow hover:shadow-lg transition">
            <img
              src={pengalamantwo}
              alt="pengalaman2"
              className="w-full h-auto object-cover hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="">
          <h2>
            Didukung oleh tim profesional dan pengalaman lebih dari dua dekade,
            kami telah dipercaya menangani berbagai pengadaan barang untuk klien
            seperti Dinas Pemerintah Daerah, Lembaga Pendidikan, dan Korporasi
            Swasta di seluruh Indonesia.
          </h2>
        </div>
        <div className="">
          
        </div>
      </section>
    </div>
  );
};

export default Home;

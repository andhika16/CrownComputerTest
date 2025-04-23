import React from "react";
import mbiz from "../assets/shop/mbiz.jpeg";
import inaproc from "../assets/shop/inaproc.webp";
import padiumkm from "../assets/shop/padiumkm.png";
import tkdn from "../assets/shop/tkdn.webp";
import Jumbotron from "../components/Jumbotron";
import pengalamanone from "../assets/pengalaman/pengalamanone.webp";
import pengalamantwo from "../assets/pengalaman/pengalamantwo.webp";
import { produkList } from "../assets/testimon/data";
import { dataClient } from "../assets/clients/data";
import { dataTrust } from "../assets/trust/data";
import logo from "../assets/shop/logo.png";
const Home = () => {
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
          <h2 className="text-xl sm:text-3xl font-bold text-gray-700 text-center mb-8">
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
        <div className="max-w-full flex justify-center sm:mt-24 mt-28 md:mt-20   ">
          <div className="">
            <img className="w-36 mx-auto" src={logo} alt={logo} />
            <p className="text-gray-600 font-medium text-lg">CV.Kencana Surya</p>
          </div>
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
          <h2 className="text-2xl capitalize sm:text-3xl md:text-4xl font-bold text-gray-700 leading-snug">
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
          <div className="overflow-hidden  transition">
            <img
              src={pengalamanone}
              alt="pengalaman1"
              className="w-full h-auto object-cover hover:scale-105 transition duration-300"
            />
          </div>
          <div className="overflow-hidden  transition">
            <img
              src={pengalamantwo}
              alt="pengalaman2"
              className="w-full h-auto object-cover hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </section>
      <section className="py-6">
        <div className="">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl capitalize md:text-4xl font-bold text-gray-700 leading-snug">
              CV.Kencana Surya telah dipercaya oleh berbagai client dari
            </h2>
            <p className="text-gray-500 mt-2">
              lembaga pemerintahan yang telah bekerja sama dengan kami
            </p>
          </div>
          <div className="bg-white px-2 py-6">
            <div className="grid grid-cols-1  sm:grid-cols-4 md:grid-cols-6 gap-6 items-center justify-items-center">
              {dataClient.map((e, index) => (
                <div
                  key={index}
                  className=" p-2 sm:w-52  w-64 sm:h-24 h-40 flex items-center justify-center "
                >
                  <img
                    src={e.image}
                    alt={`logo-${index}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="overflow-x-auto whitespace-nowrap scroll-smooth px-4">
          <div className="inline-flex gap-4">
            {produkList.map((e, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 h-auto  overflow-hidden shadow-md"
              >
                <img
                  src={e.image}
                  alt={`produk-${index}`}
                  className="w-full h-[400px] object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="text-gray-700 font-serif text-md  text-center leading-2 py-10">
          <p>
            ratusan lembaga pemerintah dan perusahaan swasta telah mempercayakan
            pengadaan alat-alat kantor mereka kepada perusahaan kami. Kami
            menghadirkan{" "}
            <span className="font-semibold">harga terbaik se-Indonesia</span>{" "}
            dengan <span className="font-semibold">garansi resmi</span>, dengan
            pelayanan yang ramah dan profesional. sebelum memesan, pastikan Anda
            berkonsultasi dengan pihak yang tepat. Tim kami siap membantu Anda
            memilih solusi terbaik sesuai kebutuhan. Hubungi kami hari ini dan
            dapatkan penawaran spesial!
          </p>
        </div>
      </section>
      <section className="border-t border-black py-12 bg-white text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-10">
          Kenapa Banyak Yang Memilih Kami
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 max-w-6xl mx-auto">
          {dataTrust.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-36 h-w-36 mb-4">
                <img
                  src={item.image}
                  alt={item.nama}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-md capitalize font-semibold text-gray-700">
                {item.nama}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <div className="border-t border-black pt-12">
          <div className="text-center mb-12 px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight">
              Apa Kata Klien Kami
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Berikut ini adalah testimoni dari berbagai perusahaan dan klien
              yang telah mempercayakan kebutuhan kantor mereka kepada kami.
            </p>
          </div>

          <div className="max-w-4xl mx-auto px-4 grid gap-8 sm:grid-cols-2">
            <div className="bg-white shadow-md rounded-xl p-6">
              <p className="text-gray-600 italic mb-4">
                "Pelayanan cepat dan profesional! alat yang kami beli sampai
                tepat waktu dan langsung bisa digunakan untuk proyek konstruksi
                besar kami."
              </p>
              <p className="font-semibold text-gray-800">Hartono suswanto</p>
              <p className="text-sm text-gray-500">Instansi Pemerintah</p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-6">
              <p className="text-gray-600 italic mb-4">
                "Harga terbaik yang kami temukan setelah membandingkan banyak
                vendor. Garansi jelas dan tim support-nya sangat membantu."
              </p>
              <p className="font-semibold text-gray-800">Syamsul</p>
              <p className="text-sm text-gray-500">Instansi Pemerintah</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold  leading-tight mb-4">
            Anda butuh SOLUSI GENSET Dan Mau PROMO DISKON BESAR? WA Sekarang!
            Kesempatan tidak datang 2 kali!
          </h2>
          <p className="text-gray-600 mb-4">
            Sampaikan permasalahan kebutuhan genset Anda kepada Marketing
            Executive Kami melalui WhatsApp atau telpon. Marketing Kami
            merupakan orang yang ahli di bidang genset puluhan tahun. Pastikan
            bertanya ke perusahaan Ahli Genset untuk solusi terbaik. Dan
            pastikan Anda minta HARGA PROMO TERMURAH. <br />
            Jangan ragu untuk bertanya kepada Marketing Executive Kami. Kami
            akan melayani Anda dengan sabar. Tersedia pembelian melalui{" "}
            <strong>E Katalog bersertifikat TKDN</strong>.
          </p>
          <p className="text-gray-700 font-medium mb-6">
            Anda hanya perlu telpon/WA untuk melakukan transaksi. Team Kami
            pasti membantu Anda untuk prosesnya. Dijamin Mudah HARGA TERMURAH.
            Selanjutnya Kami kirim dan pasang sampai ke lokasi Anda. Anda duduk
            manis, genset bekerja dengan baik.{" "}
            <strong>
              Pengiriman genset Kami bisa sampai PELOSOK SELURUH INDONESIA
            </strong>
          </p>

          {/* Form Section */}
          <div className="bg-red-700 max-w-md mx-auto p-6  border border-black">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Isi data Anda untuk mendapatkan diskon spesial hari ini!
            </h3>
            <form>
              <input
                type="text"
                placeholder="Nama Anda"
                className="w-full mb-4 px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="text"
                placeholder="No. WhatsApp Anda"
                className="w-full mb-4 px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <a
                href="https://wa.me/6281234567890?text=Halo%20saya%20tertarik%20dengan%20promo%20genset"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-md transition duration-300"
              >
                WA Sekarang
              </a>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

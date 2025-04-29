import React from "react";
import Jumbotron from "../components/Jumbotron";
import { produkList } from "../assets/testimon/data";
import { dataClient } from "../assets/clients/data";
import { keunggulan } from "../assets/trust/data";
import logo from "../assets/shop/logo.png";
import WAForm from "../components/WAForm";
import { Gallery, Item } from "react-photoswipe-gallery";
import { logoStore } from "../assets/shop/data";
import EmbeddedMap from "../components/Maps";

const Home = () => {
  return (
    <div className="">
      <Jumbotron />

      <section className="my-6 sm:px-0 px-4">
        <div className="max-w-5xl mx-auto mb-6">
          <h2 className=" text-2xl sm:text-4xl md:text-5xl text-center  font-bold font-serif text-black mb-6 leading-snug">
            Jasa Pengadaan alat elektronik dan sistem informasi
          </h2>
          <p className="sm:text-[1em] text-sm  text-black tracking-wide sm:leading-relaxed font-serif text-justify">
            penyedia solusi pengadaan IT lengkap untuk berbagai{" "}
            <span className="font-bold">instansi pemerintah</span> dan{" "}
            <span className="font-bold">korporat</span>. Mulai dari perangkat
            keras hingga sistem informasi yang disesuaikan dengan kebutuhan{" "}
            <span className="font-bold">perusahaan di indonesia</span>. Anda
            akan dipandu oleh tim marketing profesional yang siap memberikan
            solusi terbaik dengan pelayanan{" "}
            <span className="font-bold">ramah dan responsif</span>. Kami
            berkomitmen memberikan harga yang kompetitif, produk terpercaya, dan
            layanan yang memuaskan.
          </p>
        </div>
      </section>
      <section className="max-w-5xl mx-auto sm:px-0 px-4">
        <div className="flex justify-center">
          <div className="mx-auto">
            <div className="">
              <img className="sm:w-64 w-48  mx-auto" src={logo} alt={logo} />
            </div>
            <h2 className="text-2xl font-serif  text-center capitalize sm:text-3xl md:text-4xl font-bold text-black leading-snug ">
              Pengalaman Kami telah melayani pengadaan alat kantor & teknologi
              informasi sejak 1998
            </h2>
          </div>
        </div>
        <div className="mx-auto text-center mb-6 mt-6">
          <p className="sm:text-[1em] text-sm  text-black tracking-wide  leading-relaxed font-serif text-justify">
            Kami menyediakan tim untuk berkonsultasi dengan kebutuhan alat
            elektronik kantor dan lembaga. Kami menawarkan solusi teknologi
            informasi dengan harga yang{" "}
            <span className="font-bold">terjangkau </span>
            dan layanan yang profesional{" "}
            <span className="font-bold">di indonesia</span> . Mulai dari
            perangkat komputer, alat jaringan dan peralatan kantor, kami siap
            membantu kebutuhan pengadaan alat-alat
            <span className="font-bold"> kantor</span>.
          </p>
        </div>
        <div className="mx-auto sm:px-0 overflow-x-auto">
          <Gallery>
            {/* Bungkus grid di dalam container inline-flex */}
            <div className="grid grid-cols-3 gap-4 min-w-[600px] sm:min-w-0">
              {produkList.map((e, index) => (
                <div
                  key={index}
                  className="overflow-hidden hover:shadow-lg transition relative"
                >
                  {/* Caption di bawah gambar */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-center text-sm font-semibold py-2">
                    {e.caption}
                  </div>

                  <Item
                    original={e.image}
                    thumbnail={e.image}
                    width="1200"
                    height="800"
                  >
                    {({ ref, open }) => (
                      <div className="cursor-pointer" onClick={open}>
                        <img
                          ref={ref}
                          src={e.image}
                          alt={`produk-${index}`}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                    )}
                  </Item>
                </div>
              ))}
            </div>
          </Gallery>
        </div>
      </section>
      <section className="max-w-5xl mx-auto py-3 px-2">
        <div className="sm:py-12 ">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-serif text-center capitalize sm:text-3xl md:text-4xl font-bold text-black leading-snug ">
              CV.Kencana Surya telah dipercaya oleh berbagai client
            </h2>
            <p className="text-gray-500 text-md font-serif sm:mt-4 mt-0 tracking-tight">
              lembaga pemerintahan yang telah bekerja sama dengan kami
            </p>
          </div>
          <div className="bg-white">
            <div className="grid grid-cols-2 justify-items-center md:grid-cols-4 sm:grid-cols-6  sm:flex sm:justify-center mx-auto ">
              {dataClient.map((e, index) => (
                <div
                  key={index}
                  className="p-2 sm:w-48  w-36 sm:h-24 h-40 flex items-center justify-center "
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

        <div className="max-w-5xl mx-auto px-4 text-black font-serif text-sm sm:text-[1em] tracking-wide leading-relaxed sm:mb-5 text-justify">
          <p>
            ratusan lembaga pemerintah dan perusahaan swasta telah mempercayakan
            pengadaan alat-alat kantor mereka kepada perusahaan kami. Kami
            menghadirkan{" "}
            <span className="font-semibold">harga terbaik se-Indonesia</span>{" "}
            dengan <span className="font-semibold">garansi resmi</span>, dengan
            pelayanan yang ramah dan profesional. sebelum memesan, pastikan Anda
            berkonsultasi dengan pihak yang tepat. Tim kami siap membantu
            memilih solusi terbaik sesuai kebutuhan. Hubungi kami hari ini dan
            dapatkan penawaran spesial!
          </p>
        </div>
      </section>
      <section className=" bg-white px-4">
        <div className="max-w-5xl mx-auto py-12 bg-white">
          <h2 className="text-2xl font-serif text-center capitalize sm:text-3xl md:text-4xl font-bold text-black leading-snug ">
            apa yang anda dapat
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mt-6 justify-items-center">
            {keunggulan.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 rounded-lg hover:shadow-md transition"
              >
                <div className="p-3 rounded-full mb-2">
                  {<item.name size={item.size} className={item.color} />}
                </div>
                <p className="text-sm font-serif">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="max-w-5xl mx-auto ">
        <div className="pt-12">
          <div className="text-center mb-12 sm:px-0 px-4 ">
            <h2 className="text-2xl font-serif text-center capitalize sm:text-3xl md:text-4xl font-bold text-black leading-snug ">
              Apa Kata Klien Kami
            </h2>
            <p className="mx-auto text-gray-800 font-serif text-sm sm:text-[1em] tracking-wide leading-relaxed my-6 text-justify">
              Berikut ini adalah testimoni dari berbagai perusahaan dan klien
              yang telah mempercayakan kebutuhan kantor mereka kepada kami.
            </p>
          </div>

          <div className="max-w-5xl mx-auto px-4 grid gap-8 sm:grid-cols-2">
            <div className="bg-white shadow-md sm:rounded sm:p-4">
              <p className="text-gray-600 italic mb-4">
                "Pelayanan cepat dan profesional! alat yang kami beli sampai
                tepat waktu dan langsung bisa digunakan untuk proyek konstruksi
                besar kami."
              </p>
              <p className="font-semibold text-gray-800 ">Hartono suswanto</p>
              <p className="text-sm text-gray-500">Instansi Pemerintah</p>
            </div>
            <div className="bg-white shadow-md sm:rounded sm:p-4">
              <p className="text-gray-600 italic mb-4">
                "Harga terbaik yang kami temukan setelah membandingkan banyak
                vendor. Garansi jelas dan tim support-nya sangat membantu."
              </p>
              <p className="font-semibold text-gray-800">Syamsul</p>
              <p className="text-sm text-gray-500">Instansi Pemerintah</p>
            </div>
          </div>
        </div>
        <div className="max-w-5xl my-10  mx-auto">
          <h2 className="text-2xl font-serif text-center capitalize sm:text-3xl md:text-4xl font-bold text-black leading-snug ">
            Tersedia Pembelian alat elektronik Melalui
          </h2>
          <ul className="grid grid-cols-2 justify-items-center sm:flex items-center justify-center space-x-2 gap-2 sm:gap-10">
            {logoStore.map((e, index) => (
              <li key={index}>
                <img
                  className="sm:w-32  w-36 object-contain"
                  src={e.images}
                  alt={e.images}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="bg-gray-100 py-12 ">
        <div className="max-w-5xl mx-auto sm:mt-6 sm:px-0 px-4 text-justify ">
          <h2 className="text-2xl font-serif text-left lowercase my-12 sm:text-3xl md:text-4xl font-bold text-black leading-snug">
            Anda butuh alat elektronik atau sistem informasi untuk lembaga anda
            WA Sekarang!
          </h2>
          <p className=" text-gray-800 font-serif text-sm sm:text-[1em] tracking-wide leading-relaxed mb-10 text-justify">
            Sampaikan kebutuhan alat elektronik Anda kepada Marketing Executive
            Kami melalui WhatsApp atau telpon. Marketing Kami merupakan orang
            yang ahli di bidang pengadaan alat elektronik. Pastikan bertanya ke
            perusahaan pengadaan alat TI dan sistem informasi untuk solusi
            terbaik. Dan pastikan Anda minta Jangan ragu untuk bertanya kepada
            Marketing Executive Kami. Kami akan melayani Anda dengan sabar.
            Tersedia pembelian melalui{" "}
            <strong>E Katalog bersertifikat TKDN</strong>.
          </p>
          <p className="text-gray-800 font-serif text-sm sm:text-[1em] tracking-wide leading-relaxed mb-10 text-justify">
            Anda hanya perlu telpon/WA untuk melakukan transaksi. Team Kami
            pasti membantu Anda untuk prosesnya. Dijamin Mudah HARGA TERMURAH.
            Selanjutnya Kami kirim dan pasang sampai ke lokasi Anda. Anda duduk
            manis, alat elektronik anda dengan baik.{" "}
            <strong>Pengiriman Elektronika</strong> Kami bisa sampai{" "}
            <strong>PELOSOK SELURUH INDONESIA</strong>
          </p>

          {/* Form Section */}
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-stretch">
            {/* Map Section */}
            <div className="w-full md:w-1/2 h-72 md:h-auto">
              <EmbeddedMap />
            </div>

            {/* Kontak Section */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-4">
                Kontak Perusahaan
              </h2>
              <p className="text-gray-600 font-sans leading-relaxed tracking-wide">
                Ruko Grand Sungkono Blok C No.9, Jl. Mayor Jenderal Sungkono
                No.176-178, Dukuh Pakis, Kec.Dukuhpakis, Surabaya, Jawa Timur,
                Kodepos 60219
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

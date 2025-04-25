import React from "react";
import mbiz from "../assets/shop/mbiz.jpeg";
import inaproc from "../assets/shop/inaproc.webp";
import padiumkm from "../assets/shop/padiumkm.png";
import tkdn from "../assets/shop/tkdn.webp";
import Jumbotron from "../components/Jumbotron";
import PengalamanSlider from "./PengalamanSlider";
import { produkList } from "../assets/testimon/data";
import { dataClient } from "../assets/clients/data";
import { keunggulan } from "../assets/trust/data";
import logo from "../assets/shop/logo.png";
import WAForm from "../components/WAForm";
import { Gallery, Item } from "react-photoswipe-gallery";
import PengalamanGaleri from "./PengalamanGaleri";

const Home = () => {
  return (
    <div className="">
      <Jumbotron />

      <section className="sm:py-8 px-2">
        <div className="max-w-5xl mx-auto mb-6 sm:py-6 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold font-sans text-gray-900 mb-6 leading-snug">
            Jasa Pengadaan alat elektronik dan sistem informasi
          </h2>
          <p className="max-w-full sm:text-[1em] text-sm  text-black leading-relaxed font-outfit text-justify">
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

        <div className="max-w-5xl mx-auto animate-fadeInUp delay-200">
          <h2 className="text-xl sm:text-3xl font-medium text-black text-center mb-2">
            Tersedia Pembelian Melalui
          </h2>
          <ul className="grid grid-cols-2 sm:flex items-center justify-between gap-2 sm:gap-10">
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
      </section>
      <section>
        <div className="max-w-full flex justify-center sm:mt-24 mt-16 md:mt-6   ">
          <div className="">
            <img className="w-36 mx-auto" src={logo} alt={logo} />
            {/* <p className="text-gray-600 font-outfit text-lg">
                CV.Kencana Surya
              </p> */}
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-2xl font-sans capitalize sm:text-3xl md:text-4xl font-bold text-black leading-snug ">
                Pengalaman Kami telah melayani pengadaan alat kantor & teknologi
                informasi sejak 2002
              </h2>
              {/* <p className="mt-4 font-outfit text-gray-600 text-sm sm:text-base max-w-2xl mx-auto ">
            Dengan pengalaman lebih dari dua dekade, kami telah dipercaya oleh
            berbagai instansi pemerintah dan perusahaan swasta di berbagai
            Indonesia.
          </p> */}
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto text-center my-2">
          <p className=" sm:text-[1em] text-sm font-outfit  text-black leading-relaxed text-justify mx-auto px-2">
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
        <div className="max-w-5xl mx-auto xoverflow-x-auto whitespace-nowrap scroll-smooth px-4 sm:px-0">
          <Gallery>
            <div className="overflow-x-auto whitespace-nowrap scroll-smooth ">
              <div className="inline-flex gap-4">
                {produkList.map((e, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-52 sm:w-80 h-64 sm:h-auto overflow-hidden"
                  >
                    <Item
                      original={e.image}
                      thumbnail={e.image}
                      width="1200"
                      height="800"
                    >
                      {({ ref, open }) => (
                        <img
                          ref={ref}
                          onClick={open}
                          src={e.image}
                          alt={`produk-${index}`}
                          className="w-full h-[400px] object-cover cursor-pointer hover:opacity-80 transition"
                        />
                      )}
                    </Item>
                  </div>
                ))}
              </div>
            </div>
          </Gallery>
        </div>
      </section>
      <section className="pt-6 px-2">
        {/* <div className="max-w-5xl mx-auto text-center mb-10">
          <h2 className="text-2xl  capitalize sm:text-3xl md:text-4xl font-bold text-black leading-snug ">
            Pengalaman Kami telah melayani pengadaan alat kantor & teknologi
            informasi sejak 2002
          </h2>
          <p className="mt-4 font-outfit text-gray-600 text-sm sm:text-base max-w-2xl mx-auto ">
            Dengan pengalaman lebih dari dua dekade, kami telah dipercaya oleh
            berbagai instansi pemerintah dan perusahaan swasta di berbagai
            Indonesia.
          </p>
        </div> */}
        <div className="">
          <PengalamanSlider />
        </div>
        <div className="">
          <PengalamanGaleri />
        </div>
      </section>
      <section className="py-3 px-2">
        <div className="py-12 ">
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl capitalize md:text-4xl font-bold text-black leading-snug">
              CV.Kencana Surya telah dipercaya oleh berbagai client
            </h2>
            <p className="text-gray-500 text-md font-outfit mt-6">
              lembaga pemerintahan yang telah bekerja sama dengan kami
            </p>
          </div>
          <div className="bg-white">
            <div className="grid grid-cols-2 sm:flex sm:justify-center mx-auto ">
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

        <div className="max-w-5xl mx-auto text-black font-outfit text-sm sm:text-[1em]  leading-relaxed mb-10 text-justify">
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
      <section className=" bg-white border-t  border-black px-4">
        <div className="max-w-5xl mx-auto py-12 bg-white">
          <h2 className="text-2xl  capitalize sm:text-3xl md:text-4xl font-bold text-black leading-snug text-center">
            apa yang anda dapat
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 mt-6 justify-items-center">
            {keunggulan.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 rounded-lg hover:shadow-md transition"
              >
                <div className="bg-yellow-100 p-3 rounded-full mb-2">
                  {<item.name size={item.size} className={item.color} />}
                </div>
                <p className="text-sm font-medium">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="border-t border-black pt-12">
          <div className="text-center mb-12 px-4">
            <h2 className="text-2xl text-center capitalize sm:text-3xl md:text-4xl font-bold text-black leading-snug">
              Apa Kata Klien Kami
            </h2>
            <p className="text-gray-600 font-outfit  mt-3  mx-auto">
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
      </section>
      <section className="py-12 bg-gray-100 sm:mt-6  px-4 text-justify ">
        <div className="max-w-5xl mx-auto leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-extrabold  leading-tight mb-4 text-left">
            Anda butuh alat elektronik atau sistem informasi untuk lembaga anda
            Dan Mau PROMO DISKON BESAR? WA Sekarang! Kesempatan tidak datang 2
            kali!
          </h2>
          <p className="text-gray-600 font-outfit mb-4 text-left ">
            Sampaikan kebutuhan alat elektronik Anda kepada Marketing Executive
            Kami melalui WhatsApp atau telpon. Marketing Kami merupakan orang
            yang ahli di bidang pengadaan alat elektronik. Pastikan bertanya ke
            perusahaan pengadaan alat TI dan sistem informasi untuk solusi
            terbaik. Dan pastikan Anda minta{" "}
            <strong>HARGA PROMO TERMURAH. </strong>
            Jangan ragu untuk bertanya kepada Marketing Executive Kami. Kami
            akan melayani Anda dengan sabar. Tersedia pembelian melalui{" "}
            <strong>E Katalog bersertifikat TKDN</strong>.
          </p>
          <p className="text-gray-600 font-outfit mb-6  text-left">
            Anda hanya perlu telpon/WA untuk melakukan transaksi. Team Kami
            pasti membantu Anda untuk prosesnya. Dijamin Mudah HARGA TERMURAH.
            Selanjutnya Kami kirim dan pasang sampai ke lokasi Anda. Anda duduk
            manis, alat elektronik anda dengan baik.{" "}
            <strong>Pengiriman Elektronika</strong> Kami bisa sampai{" "}
            <strong>PELOSOK SELURUH INDONESIA</strong>
          </p>

          {/* Form Section */}
          <WAForm />
        </div>
      </section>
    </div>
  );
};

export default Home;

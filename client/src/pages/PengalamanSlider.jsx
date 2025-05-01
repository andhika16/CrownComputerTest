import { useKeenSlider } from "keen-slider/react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "keen-slider/keen-slider.min.css";
import "photoswipe/dist/photoswipe.css";
import { produkList } from "../assets/testimon/data";
import Banner from "../components/Banner";

export default function PengalamanSlider() {
  return (
    <section className="max-w-5xl mx-auto sm:px-0 px-4 bg-white">
      <div className="py-6  ">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-serif text-black">
            Layanan Pemasangan Profesional untuk Berbagai Alat Elektronik
          </h2>
          <p className="mt-4 font-serif text-md text-black tracking-tight">
            Kami menyediakan layanan pemasangan dan instalasi untuk berbagai
            alat elektronik, termasuk{" "}
            <strong>CCTV, Genset, Server, dan perangkat lainnya</strong>, dengan
            kualitas terbaik dan dukungan profesional.
          </p>

          {/* Slider Foto */}
          <div className="overflow-x-auto whitespace-nowrap scroll-smooth px-4 overflow-hidden">
            <div className="inline-flex gap-4">
              {produkList.map((e, index) => (
                <Gallery>
                  <div
                    key={index}
                    className="flex-shrink-0 w-80 sm:w-64 md:w-80 h-52 overflow-hidden shadow-md"
                  >
                    <img
                      src={e.image}
                      alt={`produk-${index}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Gallery>
              ))}
            </div>
          </div>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white p-6  shadow-md">
              <h3 className="text-2xl font-serif text-black">
                Pemasangan CCTV
              </h3>
              <p className="mt-2 text-md font-serif text-gray-900">
                Keamanan adalah prioritas utama. Kami menawarkan pemasangan CCTV
                dengan teknologi terbaru untuk memastikan properti Anda aman
                24/7.
              </p>
            </div>

            <div className="bg-white p-6  shadow-md">
              <h3 className="text-2xl font-serif text-black">
                Pemasangan Genset
              </h3>
              <p className="mt-2 text-md font-serif text-gray-900">
                Kami juga menyediakan layanan pemasangan genset untuk memastikan
                kelistrikan di rumah atau bisnis Anda tetap berjalan tanpa
                gangguan.
              </p>
            </div>

            <div className="bg-white p-6  shadow-md">
              <h3 className="text-2xl font-serif text-black">
                Pemasangan Server
              </h3>
              <p className="mt-2 text-md font-serif text-gray-900">
                Memastikan sistem server berjalan lancar adalah kunci bisnis
                yang sukses. Kami menyediakan pemasangan server dengan sistem
                yang handal dan aman.
              </p>
            </div>

            <div className="bg-white p-6  shadow-md">
              <h3 className="text-2xl font-serif text-black">
                Pemasangan Alat Elektronik Lainnya
              </h3>
              <p className="mt-2 text-md font-serif text-gray-900">
                Tidak hanya CCTV dan genset, kami juga menghandle pemasangan
                berbagai alat elektronik lainnya, mulai dari sistem audio hingga
                perangkat otomatisasi rumah.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-lg font-serif text-black">
              <strong>Kenapa Memilih Kami?</strong>
              Kami memberikan layanan pemasangan yang cepat, aman, dan efisien.
              Tim profesional kami siap membantu Anda dengan berbagai perangkat
              elektronik yang Anda butuhkan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

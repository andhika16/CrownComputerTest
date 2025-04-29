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
          <h2 className="text-3xl sm:text-4xl font-serif text-gray-800">
            Layanan Pemasangan Profesional untuk Berbagai Alat Elektronik
          </h2>
          <p className="mt-4 font-serif text-lg text-gray-600">
            Kami menyediakan layanan pemasangan dan instalasi untuk berbagai
            alat elektronik, termasuk{" "}
            <strong>CCTV, Genset, Server, dan perangkat lainnya</strong>, dengan
            kualitas terbaik dan dukungan profesional.
          </p>

          <div className="mx-auto flex py-6 flex-col md:flex-row items-center">
            {/* Slider Foto */}
            <div className="overflow-x-auto whitespace-nowrap scroll-smooth px-4">
              <div className="inline-flex gap-4">
                {produkList.map((e, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-80 h-52  overflow-hidden shadow-md"
                  >
                    <img
                      src={e.image}
                      alt={`produk-${index}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>  
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 border shadow-md">
              <h3 className="text-xl font-serif text-gray-800">
                Pemasangan CCTV
              </h3>
              <p className="mt-2 font-serif text-gray-600">
                Keamanan adalah prioritas utama. Kami menawarkan pemasangan CCTV
                dengan teknologi terbaru untuk memastikan properti Anda aman
                24/7.
              </p>
            </div>

            <div className="bg-white p-6 border shadow-md">
              <h3 className="text-xl font-serif text-gray-800">
                Pemasangan Genset
              </h3>
              <p className="mt-2 font-serif text-gray-600">
                Kami juga menyediakan layanan pemasangan genset untuk memastikan
                kelistrikan di rumah atau bisnis Anda tetap berjalan tanpa
                gangguan.
              </p>
            </div>

            <div className="bg-white p-6 border shadow-md">
              <h3 className="text-xl font-serif text-gray-800">
                Pemasangan Server
              </h3>
              <p className="mt-2 font-serif text-gray-600">
                Memastikan sistem server berjalan lancar adalah kunci bisnis
                yang sukses. Kami menyediakan pemasangan server dengan sistem
                yang handal dan aman.
              </p>
            </div>

            <div className="bg-white p-6 border shadow-md">
              <h3 className="text-xl font-serif text-gray-800">
                Pemasangan Alat Elektronik Lainnya
              </h3>
              <p className="mt-2 font-serif text-gray-600">
                Tidak hanya CCTV dan genset, kami juga menghandle pemasangan
                berbagai alat elektronik lainnya, mulai dari sistem audio hingga
                perangkat otomatisasi rumah.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-lg font-serif text-gray-800">
              <strong>Kenapa Memilih Kami?</strong>
              Kami memberikan layanan pemasangan yang cepat, aman, dan efisien.
              Tim profesional kami siap membantu Anda dengan berbagai perangkat
              elektronik yang Anda butuhkan.
            </p>
            <button className="mt-4 px-6 py-2 bg-primary text-white font-serif  hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Hubungi Kami untuk Konsultasi Gratis
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

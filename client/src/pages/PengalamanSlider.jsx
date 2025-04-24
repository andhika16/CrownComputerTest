import { useKeenSlider } from "keen-slider/react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "keen-slider/keen-slider.min.css";
import "photoswipe/dist/photoswipe.css";

const proyek = {
  title: "Pengadaan & Instalasi Genset",
  desc: "CV. Kencana Surya dipercaya untuk menyediakan dan menginstal genset berkualitas tinggi untuk mendukung kelistrikan gedung pemerintahan. Proses mulai dari pengiriman, instalasi, hingga uji coba dilakukan oleh tim teknis profesional.",
  images: [
    "https://via.placeholder.com/600x400?text=Genset+1",
    "https://via.placeholder.com/600x400?text=Genset+2",
    "https://via.placeholder.com/600x400?text=Genset+3",
    "https://via.placeholder.com/600x400?text=Genset+4",
  ],
};

export default function GaleriPengalaman() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 12,
    },
  });

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Slider Foto */}
        <Gallery>
          <div ref={sliderRef} className="keen-slider md:w-1/2 w-full">
            {proyek.images.map((img, i) => (
              <div key={i} className="keen-slider__slide">
                <Item original={img} thumbnail={img} width="1200" height="800">
                  {({ ref, open }) => (
                    <img
                      ref={ref}
                      onClick={open}
                      src={img}
                      alt={`Foto ${i + 1}`}
                      className="rounded-lg cursor-pointer object-cover w-full h-64 sm:h-80 shadow"
                    />
                  )}
                </Item>
              </div>
            ))}
          </div>
        </Gallery>

        {/* Caption Tetap */}
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            {proyek.title}
          </h3>
          <p className="text-gray-600 text-base leading-relaxed">
            {proyek.desc}
          </p>
        </div>
      </div>
    </section>
  );
}

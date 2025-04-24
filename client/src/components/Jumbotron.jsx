import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import slide1 from "../assets/jumbotron/jumbotronthree.webp";
import slide2 from "../assets/jumbotron/jumbotronone.webp";
import slide3 from "../assets/jumbotron/jumbotrontwo.webp";
const slides = [
  {
    image: slide1,
    title: "Solusi Teknologi Informasi Terpercaya",
    description:
      "Dukungan lengkap untuk instansi pemerintah dan perusahaan swasta.",
  },
  {
    image: slide2,
    title: "Pengadaan IT Mudah dan Efisien",
    description: "Kami hadir sebagai mitra andalan Anda sejak  1998.",
  },
  {
    image: slide3,
    title: "Kualitas Produk dan Layanan Terbaik",
    description: "Produk resmi, bergaransi, dan layanan after-sales responsif.",
  },
];

export default function Jumbotron() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const intervalRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const slide = slides[currentIndex];

  return (
    <div
      className="relative  h-[500px] w-full overflow-hidden group"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <img
        src={slide.image}
        alt=""
        className="w-full h-full object-cover transition-all duration-500"
      />
      <div className="container">
        {/* Overlay content */}
        <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-start px-10 md:px-20 text-white">
          <h2 className="text-5xl  font-bold mb-4">{slide.title}</h2>
          
          <p className="text-lg mb-6 max-w-xl">{slide.description}</p>
        </div>

        {/* Navigation buttons */}
        {hovering && (
          <>
            <button
              onClick={prevSlide}
              className="absolute sm:left-4 left-1 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-black p-2 rounded-full shadow transition"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={nextSlide}
              className="absolute sm:right-4 right-1 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-black p-2 rounded-full shadow transition"
            >
              <ChevronRight />
            </button>
          </>
        )}
      </div>
    </div>
  );
}

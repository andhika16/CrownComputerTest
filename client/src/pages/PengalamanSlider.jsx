import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { data } from "../assets/products/data";

export default function ExperienceSlider() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: {
      perView: 1,
      spacing: 24,
    },
  });

  return (
    <section className="py-16 px-4 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Bukti Pengalaman Kami
        </h2>
        <div ref={sliderRef} className="keen-slider w-full">
          {data.map((item, index) => (
            <div
              key={index}
              className="keen-slider__slide flex flex-col md:flex-row items-center   overflow-hidden shadow-md"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full md:w-1/2 object-contain  h-80 "
              />
              <div className="p-6 md:w-1/2 text-left">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

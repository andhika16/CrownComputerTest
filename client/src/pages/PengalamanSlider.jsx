import { useKeenSlider } from "keen-slider/react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "keen-slider/keen-slider.min.css";
import "photoswipe/dist/photoswipe.css";
import { data } from "../assets/products/data";

export default function PengalamanSlider() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 12,
    },
  });

  return (
    <>
      {data.map((item, index) => (
        <section key={index} className="py-6 px-4 bg-white">
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-10">
            {/* Slider Foto */}
            <Gallery>
              <div ref={sliderRef} className="keen-slider md:w-1/2 w-full">
                {item.images.map((img, i) => (
                  <div key={i} className="keen-slider__slide">
                    <Item
                      original={img}
                      thumbnail={img}
                      width="1000"
                      height="800"
                    >
                      {({ ref, open }) => (
                        <img
                          ref={ref}
                          onClick={open}
                          src={img}
                          alt={`Foto ${i + 1}`}
                          className="rounded-lg cursor-pointer object-contain w-full h-64 sm:h-80 shadow"
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
                {item.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

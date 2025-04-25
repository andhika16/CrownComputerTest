import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import { data } from "../assets/products/data";

export default function PengalamanGaleri() {
  return (
    <section className="py-6 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {data.map((item, index) => (
          <div key={index} className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {item.title}
            </h3>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              {item.desc}
            </p>

            <Gallery>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {item.images.map((img, i) => (
                  <Item
                    key={i}
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
                        className="rounded-lg cursor-pointer object-cover w-full h-32 sm:h-40 md:h-48 shadow"
                      />
                    )}
                  </Item>
                ))}
              </div>
            </Gallery>
          </div>
        ))}
      </div>
    </section>
  );
}

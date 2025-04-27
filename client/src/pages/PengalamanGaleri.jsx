import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import { data } from "../assets/products/data";

export default function PengalamanGaleri() {
  return (
    <section>
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
  );
}

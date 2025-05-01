import React from "react";
import { services, produkList } from "../assets/products/data";

export default function Product() {
  let gambar = produkList;


  return (
    <div className="">
      <section className=" px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl capitalize tracking-normal font-serif text-gray-800 mb-12 text-center">
            Kami Menyediakan Pengadaan Berupa
          </h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3  md:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <div key={i} className="shadow-sm font-serif overflow-hidden">
                <img
                  src={produkList[i].images}
                  alt={service.title}
                  className="w-full h-48 object-contain"
                />
                <div className="p-4">
                  <h3 className="text-lg font-serif text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

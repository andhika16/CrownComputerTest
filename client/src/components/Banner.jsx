import React from "react";

const Banner = () => {
  return (
    <div className="relative">
      <img
        src="https://via.placeholder.com/1200x400" // Ganti dengan URL gambar Anda
        alt="Banner Image"
        className="w-full h-64 sm:h-96 object-cover"
      />
      <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
        <h1 className="text-white text-3xl sm:text-4xl font-bold">
          Selamat Datang di Website Kami
        </h1>
      </div>
    </div>
  );
};

export default Banner;

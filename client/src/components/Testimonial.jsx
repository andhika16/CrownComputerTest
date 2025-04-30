import React from "react";

const reviews = [
  {
    message:
      "Tim pengadaan sangat responsif dan profesional. Proses pengadaan lisensi software berjalan lancar tanpa kendala, dan implementasi sesuai harapan kami.",
    name: "Hartono Suswanto",
    institution: "Komisi Pemberantasan Korupsi (KPK)",
  },
  {
    message:
      "Peralatan yang kami pesan seperti AC dan UPS dipasang dengan cepat dan rapi. Semua unit berfungsi dengan baik dan sangat membantu kelancaran operasional rumah sakit..",
    name: "Syamsul",
    institution: "Rumah Sakit Anak dan Bunda Harapan Kita",
  },
  {
    message:
      "Pengadaan alat pendingin untuk puskesmas berjalan sangat baik. Unit sampai tepat waktu dan langsung bisa digunakan. Koordinasi juga sangat komunikatif.",
    name: "Dewi Lestari",
    institution: "Dinas Kesehatan Kabupaten Kutai Kartanegara",
  },
  // {
  //   message:
  //     "“Peralatan rawat inap yang kami pesan datang dalam kondisi sangat baik. Instalasi tempat tidur pasien berjalan mulus dan sangat membantu peningkatan pelayanan.",
  //   name: "Rizal Fahmi",
  //   institution: "Rumah Sakit Jiwa Menur",
  // },
  // {
  //   message:
  //     "Pengadaan alat listrik berjalan sesuai jadwal, dengan kualitas barang yang sesuai spesifikasi. Proses administrasi dan serah terima sangat rapi.",
  //   name: "Andika Prasetya",
  //   institution: "Badan Pengelolaan Keuangan dan Aset Daerah Kota Samarinda",
  // },
];

const StarRating = () => (
  <div className="flex items-center mb-2">
    {Array(4)
      .fill(0)
      .map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-yellow-400 fill-current mr-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.564-.955L10 0l2.948 5.955 6.564.955-4.756 4.635 1.122 6.545z" />
        </svg>
      ))}
  </div>
);

const ReviewCard = ({ message, name, institution }) => (
  <div className="bg-white shadow-md  sm:text-xs text-xs rounded p-4">
    <StarRating />
    <p className="text-gray-600 italic mb-4">"{message}"</p>
    <p className="font-semibold text-gray-800">{institution}</p>
  </div>
);

const Testimonials = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 grid gap-8 grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3">
      {reviews.map((review, index) => (
        <ReviewCard
          key={index}
          message={review.message}
          name={review.name}
          institution={review.institution}
        />
      ))}
    </div>
  );
};

export default Testimonials;

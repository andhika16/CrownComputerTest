import satu from "./airconditioner.jpg";
import dua from "./generator.jpg";
import tiga from "./printer.jpg";
import empat from "./test.jpg";

export const data = [
  {
    title: "Instalasi Genset kantor bpkbd",
    desc: "Pengadaan & pemasangan genset silent untuk rumah sakit dan gedung bpkpb kalimantan timur.",
    images: [satu, dua, tiga, empat],
  },
];

// ini jaga jaga kalau nanti data bertambah semakin banyak
// const images = import.meta.glob("./*.{png,jpg,jpeg,webp}", { eager: true });

// export const dataClient = Object.keys(images).map((key) => {
//   const nama = key.split("/").pop().split(".")[0].replace(/-/g, " ");
//   return {
//     image: images[key].default,
//     nama: nama, // nama otomatis dari nama file
//   };
// });

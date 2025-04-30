import satu from "./airconditioner.jpg";
import dua from "./generator.jpg";
import tiga from "./printer.jpg";


const galeri = import.meta.glob("./*.{jpg,jpeg,png,webp}", { eager: true });

export const data = [
  {
    title: "Instalasi Genset kantor bpkbd",
    desc: "Pengadaan & pemasangan genset silent untuk rumah sakit dan gedung bpkpb kalimantan timur.",
    images: [satu, dua, tiga],
  },
];



const excludeList = ["logo.png", "whatsapp.png"];

export const produkList = Object.entries(galeri)
  .filter(([path]) => {
    // cek apakah path mengandung salah satu nama file yang mau di-exclude
    return !excludeList.some((fileName) => path.includes(fileName));
  })
  .map(([_, mod]) => ({
    images: mod.default,
  }));



  
  
  

export const services = [
  {
    title: "Komputer",
    description:
      "Penyediaan berbagai jenis komputer desktop, laptop, dan perangkat terkait untuk kebutuhan pribadi, perusahaan, dan instansi pemerintah.",
  },
  {
    title: "Server",
    description:
      "Penyediaan dan pemasangan server untuk kebutuhan perusahaan dan instansi, baik skala kecil hingga besar termasuk data center.",
  },
  {
    title: "Videotron",
    description:
      "Videotron untuk kebutuhan iklan digital, informasi publik, dan tampilan visual strategis.",
  },
  {
    title: "CCTV",
    description:
      "Sistem pengawasan kamera CCTV untuk keamanan kantor, fasilitas umum, dan ruangan strategis.",
  },

  {
    title: "Peralatan Perkantoran",
    description:
      "Fasilitas lengkap mulai dari printer, proyektor, scanner, hingga mesin fotokopi.",
  },
  {
    title: "AC",
    description:
      "Installasi AC, perawatan, dan dukungan teknis produk IT dan perkantoran.",
  },
];
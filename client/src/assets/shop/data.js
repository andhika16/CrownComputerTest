const galeri = import.meta.glob("./*.{jpg,jpeg,png,webp}", { eager: true });

const excludeList = ["logo.png", "whatsapp.png"];

export const logoStore = Object.entries(galeri)
  .filter(([path]) => {
    // cek apakah path mengandung salah satu nama file yang mau di-exclude
    return !excludeList.some((fileName) => path.includes(fileName));
  })
  .map(([_, mod]) => ({
    images: mod.default,
  }));

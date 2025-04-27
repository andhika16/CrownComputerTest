  const galeri = import.meta.glob("./*.{jpg,jpeg,png,webp}", { eager: true });

  export const produkList = Object.values(galeri).map((mod) => ({
    image: mod.default,
  }));

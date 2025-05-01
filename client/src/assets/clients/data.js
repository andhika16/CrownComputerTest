const images = import.meta.glob("./*.{png,jpg,jpeg,webp}", { eager: true });

export const dataClient = Object.keys(images).map((key) => {
  const nama = key.split("/").pop().split(".")[0].replace(/-/g, " ");
  return {
    image: images[key].default,
    nama: nama, // nama otomatis dari nama file
  };
});

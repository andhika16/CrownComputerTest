const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const folder = "./src/assets/galeri";

fs.readdir(folder, (err, files) => {
  files.forEach(file => {
    const ext = path.extname(file);
    const newName = crypto.randomBytes(6).toString("hex") + ext;
    fs.renameSync(path.join(folder, file), path.join(folder, newName));
    console.log(`Renamed: ${file} → ${newName}`);
  });
});

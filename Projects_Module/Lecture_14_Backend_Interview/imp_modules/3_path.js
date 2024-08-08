const path = require("path");
console.log("dirname", __dirname);

const baseName = path.basename(__dirname); //baseName gives the name of the last folder
console.log("baseName", baseName);
const fullPath = path.join(__dirname, "abc", "def", "file.md");
console.log("fullPath is", fullPath);

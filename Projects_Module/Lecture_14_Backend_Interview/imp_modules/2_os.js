const os = require("os");
console.log("arch", os.arch()); //this gives what architecture you are using
console.log("os.cpus", os.cpus());
console.log("os.platform", os.platform);
console.log("os.freemem", os.freemem()); //this gives free memory in bytes
console.log("ipconfig", os.networkInterfaces());

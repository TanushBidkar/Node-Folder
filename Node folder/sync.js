const fs = require("fs");
const filedata = fs.readFileSync('callback_sync.txt');
console.log(filedata.toString());
console.log("End of Program execution");

const fs = require("fs");
fs.readFile('callback_async.txt', function (ferr, filedata) {
    if (ferr) return console.error(ferr);
    console.log(filedata.toString());
});
console.log("End of Program execution");

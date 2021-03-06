//os object
const os = require("os")
console.log(os);
console.log(os.type());
console.log(os.version());
console.log(os.homedir());
console.log(os.hostname());

//global object
console.log(__dirname);
console.log(__filename);

//path object
const path = require("path");
console.log(path);
console.log(path.dirname(__filename))
console.log(path.extname(__filename));
console.log(path.basename(__filename));

console.log( new Date());
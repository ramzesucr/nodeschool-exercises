var emotifyPath = process.argv[2];
var emotify = require(emotifyPath);
var outputText = process.argv[3];
console.log(emotify(outputText));
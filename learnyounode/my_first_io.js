var fs = require('fs');
var filePath = process.argv[2];
var fileBuffer = fs.readFileSync(filePath);
var fileContent = fileBuffer.toString();
console.log(fileContent.split('\n').length - 1);
var fs = require('fs');
var filePath = process.argv[2];
fs.readFile(filePath, 'utf8', function(err, data) {
	console.log(data.split('\n').length - 1);
});
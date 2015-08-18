var fs = require('fs');
var path = require('path');
var dirPath = process.argv[2];
fs.readdir(dirPath, 'md', function(err, list) {
	for(var i = 0; i < list.length; i++) {
		if(path.extname(list[i]) === '.md') {
			console.log(list[i]);
		}
	}
});
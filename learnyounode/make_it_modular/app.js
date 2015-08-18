var mymodule = require('./mymodule');
var dirPath = process.argv[2];
var extensionName = process.argv[3];
mymodule(dirPath, extensionName, function(err, list) {
	for(var i = 0; i < list.length; i++) {
		console.log(list[i]);
	}
});
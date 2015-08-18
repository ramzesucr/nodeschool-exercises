var fs = require('fs');
var path = require('path');
module.exports = function(dirPath, extensionName, callback) {
	fs.readdir(dirPath, function(err, list) {
		if(err) return callback(err);
		var filteredDirs = [];
		for(var i = 0; i < list.length; i++) {
			if(path.extname(list[i]).substr(1) === extensionName) {
				filteredDirs.push(list[i]);
			}
		}
		callback(null, filteredDirs);
	});
}
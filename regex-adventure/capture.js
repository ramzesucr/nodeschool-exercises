module.exports = function(str) {
	var regex = /x=(\d+)/;
	var matched = regex.exec(str);
	return matched ? matched[1] : null;
};
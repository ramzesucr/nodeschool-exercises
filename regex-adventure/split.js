module.exports = function(str) {
	var regex = /\s*,\s*/;
	return str.split(regex);
};
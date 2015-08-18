module.exports = function(str) {
	var regex = /^([aeioyu0-9])/;
	return regex.test(str);
};
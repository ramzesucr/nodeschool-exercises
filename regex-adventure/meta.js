module.exports = function(str) {
	var regex = /\.$/;
	return regex.test(str);
};
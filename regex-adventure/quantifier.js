module.exports = function(str) {
	//var regex = /^\d+\.(jpg|jpeg)$/;
	var regex = /^\d+\.jpe?g$/;
	return regex.test(str);
};
module.exports = function (str) {
	var regex = /^\D[^A-Z]/;
	return regex.test(str);
};
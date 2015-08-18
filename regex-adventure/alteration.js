module.exports = function(str) {
	var regex = /^(cat|dog|robot)\d+$/;
	return regex.test(str);
};
module.exports = function(str) {
	var regex = /^(0x[A-Fa-f0-9]{2}\s+){8}$/;
	return regex.test(str);
};
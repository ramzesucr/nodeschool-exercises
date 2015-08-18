module.exports = function(str) {
	var regex = /\bx=(\d+)\b/;
	var matched = regex.exec(str);
	return matched ? matched[1] : null;
};
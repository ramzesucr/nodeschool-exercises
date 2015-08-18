module.exports = function(str) {
	//var regex = /"[a-z\s]*"/g;
	var regex = /"[^"]*"/g;
	return str.match(regex);
};
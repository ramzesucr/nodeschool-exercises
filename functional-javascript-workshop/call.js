var worker = function() {
	var args = arguments;
	return Object.keys(args).reduce(function(total, item) {
		return total + Object.prototype.hasOwnProperty.call(args[item], 'quack');
	}, 0);
};

module.exports = worker;
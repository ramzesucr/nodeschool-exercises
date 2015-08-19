var worker = function(input, fn, thisArg) {
	return input.reduce(function(result, item, index, collection) {
		result.push(fn.call(thisArg, item, index, collection));
		return result;
	}, []);
};

module.exports = worker;
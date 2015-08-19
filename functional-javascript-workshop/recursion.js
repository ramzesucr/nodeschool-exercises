var worker = function(arr, fn, initial) {
	return (function reducer(index, value) {
		if(index >= arr.length)
			return value;
		
		value = fn(value, arr[index], index, arr);
		
		return reducer(index + 1, value);
	})(0, initial);
};

module.exports = worker;
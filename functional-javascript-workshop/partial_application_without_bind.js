var worker = function(namespace) {
	return function() {
		var argumentsArray = Array.prototype.slice.call(arguments); //http://stackoverflow.com/questions/960866/how-can-i-convert-the-arguments-object-to-an-array-in-javascript
		console.log.apply(console, [namespace].concat(argumentsArray));
	};
};

module.exports = worker;
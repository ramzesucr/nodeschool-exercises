var worker = function(namespace) {
	return console.log.bind(console, namespace);
};

module.exports = worker;
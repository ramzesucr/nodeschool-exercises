var _ = require('lodash');

var worker = function(data) {
	return _.chain(data)
			.map(function(val) {
				return (val + "Chained").toUpperCase();
			})
			.sortBy()
			.value();
};

module.exports = worker;
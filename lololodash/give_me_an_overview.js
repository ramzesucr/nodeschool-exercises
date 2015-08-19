var _ = require('lodash');

var worker = function(data) {
	return _.chain(data)
			.groupBy('article')
			.map(function(val, key) {
				return {
					article: parseInt(key),
					total_orders: _.reduce(val, function(total, item) {
						return total + item.quantity;
					}, 0)
				};
			})
			.sortBy('total_orders')
			.reverse()
			.value();
};

module.exports = worker;
var _ = require('lodash');

var worker = function(data) {
	return _.chain(data)
			.groupBy('username')
			.map(function(val, key) {
				return { username: key, comment_count: _.size(val) };
			})
			.sortBy('comment_count')
			.reverse()
			.value();
};

module.exports = worker;
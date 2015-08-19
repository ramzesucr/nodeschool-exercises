var _ = require('lodash');
var worker = function(data) {
	return _.where(data, { 'active': true });
};

module.exports = worker;
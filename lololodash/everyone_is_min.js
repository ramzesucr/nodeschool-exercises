var _ = require('lodash');

var worker = function(data) {
	var result = {
		hot: [],
		warm: []
	};

	function validateTemperature (temperature) {
		return temperature > 19;
	}

	_.each(data, function(val, key) {
		var isHot = _.every(val, validateTemperature);
		var isWarm = _.some(val, validateTemperature);
		if(isHot) {
			result.hot.push(key);
		} else if(isWarm) {
			result.warm.push(key);
		}
	});
	return result;
};

module.exports = worker;
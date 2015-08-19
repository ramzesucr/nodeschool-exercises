var worker = function(input) {
	return input.reduce(function(total, item) {
		if(!total[item])
			total[item] = 0;
		
		total[item] += 1;
		return total;
	}, {});
};

module.exports = worker;
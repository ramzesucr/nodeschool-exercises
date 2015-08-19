var worker = function(operation, num) {
	if(num <= 0)
		return;
	operation();
	worker(operation, --num);
};

module.exports = worker;
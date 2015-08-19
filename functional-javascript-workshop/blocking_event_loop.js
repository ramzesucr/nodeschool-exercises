var worker = function(operation, num) {
	if(num <= 0)
		return;

	setTimeout(function() {
		operation();
		return worker(operation, --num);
	}, 0);
};

module.exports = worker;
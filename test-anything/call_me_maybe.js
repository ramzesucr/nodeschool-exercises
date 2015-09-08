var modulePath = process.argv[2];
var repeatCallback = require(modulePath);
var test = require('tape');
test('callback test', function(t) {
	t.plan(4);
	repeatCallback(4, function() {
		t.pass('callback called');
	});
});
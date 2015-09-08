var feedCatModulePath = process.argv[2];
var feedCat = require(feedCatModulePath);
var test = require('tape');
test('feed test', function(t) {
	t.plan(2);
	t.equal(feedCat('food'), 'yum');
	t.throws(feedCat.bind(null, 'chocolate'));
});
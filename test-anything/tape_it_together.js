var fancifyModulePath = process.argv[2];
var fancify = require(fancifyModulePath);
var test = require('tape');

test('fancy test', function(t) {
	t.equal(fancify('Hello'), '~*~Hello~*~', 'output is not ~*~Hello~*~');
	t.equal(fancify('Hello', true), '~*~HELLO~*~', 'output is not ~*~HELLO~*~');
	t.equal(fancify('Hello', false, '!'), '~!~Hello~!~', 'output is not ~!~Hello~!~');
	t.end();
});
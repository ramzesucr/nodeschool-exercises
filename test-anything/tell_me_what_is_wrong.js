var coolModulePath = process.argv[2];
var cool = require(coolModulePath);
var assert = require('assert');

assert(cool(42), 'cool(42) should be true');
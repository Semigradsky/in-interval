'use strict';

var assert = require('assert');
var inRange = require('./');

describe('In range', function () {

	it('in endpoints', function () {
		assert.equal(true, inRange(Infinity, '[,]'));
		assert.equal(true, inRange(42, '[42,100)'));
	});

	it('not in endpoints', function () {
		assert.equal(true, inRange(50, '[-Infinity,1e100)'));
	});

});

describe('Out of range', function () {

	it('in endpoints', function () {
		assert.equal(false, inRange(Infinity, '(,)'));
		assert.equal(false, inRange(42, '(42,100)'));
	});

	it('not in endpoints', function () {
		assert.equal(false, inRange(Infinity, '[-Infinity,1e100)'));
	});

});

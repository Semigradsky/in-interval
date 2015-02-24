'use strict';

var parse = require('math-interval-parser');

function includes(number, interval) {
	if (interval.from.value === number) {
		return interval.from.included;
	}

	if (interval.to.value === number) {
		return interval.to.included;
	}

	return Math.min(interval.from.value, number) === interval.from.value &&
		Math.max(interval.to.value, number) === interval.to.value;
}

module.exports = function (number, interval) {
	if (typeof interval === 'string') {
		interval = parse(interval);
	}

	if (!interval) {
		return false;
	}

	return includes(number, interval);
};

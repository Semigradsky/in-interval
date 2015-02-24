# In interval [![Build Status](https://travis-ci.org/Semigradsky/in-interval.svg)](https://travis-ci.org/Semigradsky/in-interval) [![Dependency Status](https://david-dm.org/Semigradsky/in-interval.svg)](https://david-dm.org/Semigradsky/in-interval)

> Determines whether the number in the specified interval.


## Install

```sh
$ npm install --save in-interval
```


## Usage

```js
var inRange = require('in-interval');

inRange(0, '[-10,Infinity)');
//=> true

inRange(Math.PI, {
	from: {
		value: -1,
		included: false
	},
	to: {
		value: 1,
		included: false
	}
});
//=> false

```


## License

MIT © Dmitry Semigradsky

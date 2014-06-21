'use strict';

var blinder = require('../lib/color-blind.js');

/*
	======== A Handy Little Nodeunit Reference ========
	https://github.com/caolan/nodeunit

	Test methods:
		test.expect(numAssertions)
		test.done()
	Test assertions:
		test.ok(value, [message])
		test.equal(actual, expected, [message])
		test.notEqual(actual, expected, [message])
		test.deepEqual(actual, expected, [message])
		test.notDeepEqual(actual, expected, [message])
		test.strictEqual(actual, expected, [message])
		test.notStrictEqual(actual, expected, [message])
		test.throws(block, [error], [message])
		test.doesNotThrow(block, [error], [message])
		test.ifError(value)
*/

exports['color-blind'] = {
	setUp: function (done) {
		// setup here
		done();
	},
	'invalid hex': function (test) {
		test.expect(6);
		var invalidHex = 'WoWoWoWnfnfnf';
		test.ok(blinder.deuteranomaly(invalidHex) === '#000000');
		var res = blinder.deuteranomaly(invalidHex, true);
		for (var key in res) {
			test.ok(res[key] === 0);
		}
		test.ok(Object.keys(res).sort().join('') === 'BGR');
		test.ok(Object.keys(res).length === 3);
		test.done();
	},
	'#000000': function (test) {
		test.expect(6);
		var hex = '#000000';
		test.ok(blinder.tritanomaly(hex) === '#000000');
		var res = blinder.tritanomaly(hex, true);
		for (var key in res) {
			test.ok(res[key] === 0, "wow: " + JSON.stringify(res) + JSON.stringify(key));
		}
		test.ok(Object.keys(res).sort().join('') === 'BGR');
		test.ok(Object.keys(res).length === 3);
		test.done();
	},
	// Color.Blind({R:200,G:100,B:50}, 'deutan', true)
	'#c86432 - deuteranomaly': function (test) {
		test.expect(6);
		var res, hex = '#c86432', expectedHex = '#af7130', expected = {
				R: 174.63501465104628, G: 113.20677847820777, B: 48.09525195743322
			};
		test.ok(blinder.deuteranomaly(hex) === expectedHex);
		res = blinder.deuteranomaly(hex, true);
		for (var key in expected) {
			if (expected.hasOwnProperty(key)) {
				test.ok(res[key] === expected[key]);
			}
		}
		test.ok(Object.keys(res).sort().join('') === 'BGR');
		test.ok(Object.keys(res).length === 3);
		test.done();
	},
	// Color.Blind({R:200,G:100,B:50}, 'deutan', false)
	'#c86432 - deuteranopia': function (test) {
		test.expect(6);
		var res, hex = '#c86432', expectedHex = '#a0792f', expected = {
				R: 160.140737308787, G: 120.75350903718365, B: 47.00682450453791
			};
		test.ok(blinder.deuteranopia(hex) === expectedHex);
		res = blinder.deuteranopia(hex, true);
		for (var key in expected) {
			if (expected.hasOwnProperty(key)) {
				test.ok(res[key] === expected[key]);
			}
		}
		test.ok(Object.keys(res).sort().join('') === 'BGR');
		test.ok(Object.keys(res).length === 3);
		test.done();
	}
};

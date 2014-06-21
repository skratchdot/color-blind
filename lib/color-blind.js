/*
 * color-blind
 * https://github.com/skratchdot/color-blind
 *
 * see blind.js for more information about the original source.
 *
 * Copyright (c) 2014 skratchdot
 * Licensed under the MIT license.
 */
'use strict';

var onecolor = require('onecolor');
var Blind = require('./blind.js').Blind;
var colorVisionData = {
	protanomaly: {type: "protan", anomalize: true},
	protanopia: {type: "protan"},
	deuteranomaly: {type: "deutan", anomalize: true},
	deuteranopia: {type: "deutan"},
	tritanomaly: {type: "tritan", anomalize: true},
	tritanopia: {type: "tritan"},
	achromatomaly: {type: "achroma", anomalize: true},
	achromatopsia: {type: "achroma"}
};
var denorm = function (ratio) {
	return Math.round(ratio * 255);
};
var createBlinder = function (key) {
	return function (colorString, returnRgb) {
		var color = onecolor(colorString);
		if (!color) {
			return returnRgb ? {R:0,G:0,B:0} : '#000000';
		}
		var rgb = new Blind({
			R: denorm(color.red() || 0),
			G: denorm(color.green() || 0),
			B: denorm(color.blue() || 0)
		}, colorVisionData[key].type, colorVisionData[key].anomalize);
		// blinder.tritanomaly('#000000') causes NaN / null
		rgb.R = rgb.R || 0;
		rgb.G = rgb.G || 0;
		rgb.B = rgb.B || 0;
		if (returnRgb) {
			delete rgb.X;
			delete rgb.Y;
			delete rgb.Z;
			return rgb;
		}
		return new onecolor.RGB(
			(rgb.R % 256) / 255,
			(rgb.G % 256) / 255,
			(rgb.B % 256) / 255,
			1
		).hex();
	};
};

// add our exported functions
for (var key in colorVisionData) {
	exports[key] = createBlinder(key);
}

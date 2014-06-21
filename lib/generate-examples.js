var blinder = require('./color-blind.js');
var hex = '#42dead';
[
	['protanomaly','Anomalous Trichromat','low amounts of red.'],
	['protanopia','Dichromat','no red.'],
	['deuteranomaly','Anomalous Trichromat','low amounts of green.'],
	['deuteranopia','Dichromat','no green.'],
	['tritanomaly','Anomalous Trichromat','low amounts of blue.'],
	['tritanopia','Dichromat','no blue.'],
	['achromatomaly','Monochromat','the absence of most color.'],
	['achromatopsia','Monochromat','no color at all.'],
].forEach(function (item) {
	var result;
	var type = item[0];
	var group = item[1];
	var description = item[2];
	console.log('\n#### blinder.' + type + '(colorString, returnRgb)');
	console.log('\nPart of the "' + group + '" family of color blindness. The viewer sees ' + description);
	console.log('\nExamples:\n```javascript');
	// type 1
	result = blinder[type](hex);
	console.log('blinder.' + type + '("' + hex + '");\n// result: ' + JSON.stringify(result));
	// type 2
	result = blinder[type](hex, false);
	console.log('blinder.' + type + '("' + hex + '", false);\n// result: ' + JSON.stringify(result));
	// type 3
	result = blinder[type](hex, true);
	console.log('blinder.' + type + '("' + hex + '", true);\n// result: ' + JSON.stringify(result));
	console.log('```');
});

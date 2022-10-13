# color-blind

[![NPM version](https://badge.fury.io/js/color-blind.svg)](http://badge.fury.io/js/color-blind)
[![Build Status](https://travis-ci.org/skratchdot/color-blind.png?branch=master)](https://travis-ci.org/skratchdot/color-blind)
[![Code Climate](https://codeclimate.com/github/skratchdot/color-blind.png)](https://codeclimate.com/github/skratchdot/color-blind)
[![Coverage Status](https://coveralls.io/repos/skratchdot/color-blind/badge.png)](https://coveralls.io/r/skratchdot/color-blind)
[![Dependency Status](https://david-dm.org/skratchdot/color-blind.svg)](https://david-dm.org/skratchdot/color-blind)
[![devDependency Status](https://david-dm.org/skratchdot/color-blind/dev-status.svg)](https://david-dm.org/skratchdot/color-blind#info=devDependencies)

[![NPM](https://nodei.co/npm/color-blind.png)](https://npmjs.org/package/color-blind)


## Description

Simulate color blindness by converting RGB hex codes.  This is a node.js port
of the daltonize code by [mudcu.be](http://mudcu.be/).
See [Links](https://github.com/skratchdot/color-blind#links) for more information.


## Getting Started

Install the module with: `npm install color-blind`

```javascript
var blinder = require('color-blind');
blinder.protanopia('#42dead'); // result: "#d1c4a0"
```


## Color Blindness Table

|                    Group                           |                                    |                             |                          |
|----------------------------------------------------|------------------------------------|-----------------------------|--------------------------|
| **Trichromat**<br/>*3 good cones*                  |Normal                              |                             |                          |
| **Anomalous Trichromat**<br/>*2 good cones, 1 bad* |Protanomaly<br/>*low red*           |Deuteranomaly<br/>*low green*|Tritanomaly<br/>*low blue*|
| **Dichromat**<br/>*2 good cones, 1 blind*          |Protanopia<br/>*no red*             |Deuteranopia<br/>*no green*  |Tritanopia <br/>*no blue* |
| **Monochromat**<br/>*1 good cone, 2 blind/bad*     |Achromatomaly<br />*almost no color*|Achromatopsia<br/>*no color* |                          |


## Documentation

All the exported functions accept 2 parameters:

- **colorString** - any valid CSS color string
- **returnRgb** *optional*
  - if true, then an object containing RGB values is returned
  - if false or not passed, then a hex string is returned


#### blinder.protanomaly(colorString, returnRgb)

Part of the "Anomalous Trichromat" family of color blindness. The viewer sees low amounts of red.

Examples:
```javascript
blinder.protanomaly("#42dead");
// result: "#9dcea5"
blinder.protanomaly("#42dead", false);
// result: "#9dcea5"
blinder.protanomaly("#42dead", true);
// result: {"R":156.81027381701807,"G":205.52274401697787,"B":164.8656701007824}
```

#### blinder.protanopia(colorString, returnRgb)

Part of the "Dichromat" family of color blindness. The viewer sees no red.

Examples:
```javascript
blinder.protanopia("#42dead");
// result: "#d1c4a0"
blinder.protanopia("#42dead", false);
// result: "#d1c4a0"
blinder.protanopia("#42dead", true);
// result: {"R":208.70185885531413,"G":196.10716916953663,"B":160.21748158694382}
```

#### blinder.deuteranomaly(colorString, returnRgb)

Part of the "Anomalous Trichromat" family of color blindness. The viewer sees low amounts of green.

Examples:
```javascript
blinder.deuteranomaly("#42dead");
// result: "#a5c9b3"
blinder.deuteranomaly("#42dead", false);
// result: "#a5c9b3"
blinder.deuteranomaly("#42dead", true);
// result: {"R":165.29136650372695,"G":201.41446893677266,"B":178.9125102904318}
```

#### blinder.deuteranopia(colorString, returnRgb)

Part of the "Dichromat" family of color blindness. The viewer sees no green.

Examples:
```javascript
blinder.deuteranopia("#42dead");
// result: "#debeb6"
blinder.deuteranopia("#42dead", false);
// result: "#debeb6"
blinder.deuteranopia("#42dead", true);
// result: {"R":222.02929022014237,"G":189.6513083292142,"B":182.29108759925}
```

#### blinder.tritanomaly(colorString, returnRgb)

Part of the "Anomalous Trichromat" family of color blindness. The viewer sees low amounts of blue.

Examples:
```javascript
blinder.tritanomaly("#42dead");
// result: "#56d8d1"
blinder.tritanomaly("#42dead", false);
// result: "#56d8d1"
blinder.tritanomaly("#42dead", true);
// result: {"R":86.14054005420464,"G":216.21898840123637,"B":209.23279525212993}
```

#### blinder.tritanopia(colorString, returnRgb)

Part of the "Dichromat" family of color blindness. The viewer sees no blue.

Examples:
```javascript
blinder.tritanopia("#42dead");
// result: "#62d5e6"
blinder.tritanopia("#42dead", false);
// result: "#62d5e6"
blinder.tritanopia("#42dead", true);
// result: {"R":97.64942008517872,"G":212.91555320194286,"B":229.93724968191844}
```

#### blinder.achromatomaly(colorString, returnRgb)

Part of the "Monochromat" family of color blindness. The viewer sees the absence of most color.

Examples:
```javascript
blinder.achromatomaly("#42dead");
// result: "#8ec7b5"
blinder.achromatomaly("#42dead", false);
// result: "#8ec7b5"
blinder.achromatomaly("#42dead", true);
// result: {"R":141.91089545454545,"G":198.63816818181814,"B":180.81998636363636}
```

#### blinder.achromatopsia(colorString, returnRgb)

Part of the "Monochromat" family of color blindness. The viewer sees no color at all.

Examples:
```javascript
blinder.achromatopsia("#42dead");
// result: "#b9b9b9"
blinder.achromatopsia("#42dead", false);
// result: "#b9b9b9"
blinder.achromatopsia("#42dead", true);
// result: {"R":185.28855,"G":185.28855,"B":185.28855}
```


## Links

- [Original Source](http://mudcu.be/sphere/js/Color.Blind.js)
- [Color Blind / Daltonize Bookmarklet](http://daltonize.appspot.com/)
- [Color Blind Bookmarklet](https://github.com/duhseekoh/Color-Blind)


## Release History

#### v0.1.0 - Released June 21, 2014

- initial release


## License

Originally this project was licensed with:

```
Copyright (c) 2014 skratchdot
Licensed under the MIT license.
```

But the main algorithm is from code that included:

```
The Color Blindness Simulation function is
copyright (c) 2000-2001 by Matthew Wickline and the
Human-Computer Interaction Resource Network ( http://hcirn.com/ ).

It is used with the permission of Matthew Wickline and HCIRN,
and is freely available for non-commercial use. For commercial use, please
contact the Human-Computer Interaction Resource Network ( http://hcirn.com/ ).
```

I've included a note about HCIRN that was copied/edited from http://colorlab.wickline.org/colorblind/colorlab/engine.js:

```
HCIRN appears to no longer exist. This makes it impractical
for users to obtain permission from HCIRN in order to use
this file for commercial works. Instead:

This work is licensed under a
Creative Commons Attribution-ShareAlike 4.0 International License.
http://creativecommons.org/licenses/by-sa/4.0/
```

On 10/13/2022 the license needed to be updated to include `CC-BY-SA-4.0`.

For more information about this change, please see:
https://github.com/skratchdot/color-blind/issues/3

Sorry for any issues this has caused.

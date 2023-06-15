// join.dict.js

autowatch = 1;

inlets = 2;

var rightDictObj = null;

function dictionary(dictName) {
	if (inlet == 1) {
		var rightDict = new Dict(dictName);
		rightDictObj = JSON.parse(rightDict.stringify());
		return;
	}
	var leftDict = new Dict(dictName);
	var leftDictObj = JSON.parse(leftDict.stringify());
	mergeDeep(leftDictObj, rightDictObj);
	var newDict = new Dict();
	newDict.parse(JSON.stringify(leftDictObj));
	outlet(0, "dictionary", newDict.name);
}

// adapted from https://gist.github.com/kylealwyn/75d9045ea2c5e8d4a1b983005cfaf198
 /** Simple is object check.
 * @param item
 * @returns {boolean}
 */
function isObject(item) {
  return (item && typeof item === 'object' && !Array.isArray(item));
}
isObject.local = 1;

/**
 * Deep merge two objects.
 * @param target
 * @param source
 */
function mergeDeep(target, source) {
  if (isObject(target) && isObject(source)) {
    for (var key in source) {
      if (isObject(source[key])) {
		if (!target[key]) target[key] = {};
        mergeDeep(target[key], source[key]);
      } else {
      	target[key] = source[key];
      }
    }
  }
  return target;
}
mergeDeep.local = 1;
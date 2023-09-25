// join.dict.js

autowatch = 1;
inlets = 3;

var leftDict = new Dict();
var leftDictObj = null;

var rightDict = new Dict();
var rightDictObj = null;

var interpolatingDict = new Dict();

var resultDict = new Dict();


function msg_float(v){
	
	var interpValue;
	if (typeof v === "number"){
		interpValue = Math.min(Math.max(v, 0.), 1.);
		//post("received float " + interpValue + "\n");
	}
	else return;
	
	interpolatingDict = leftDict;
	var interpolatingDictObj = JSON.parse(interpolatingDict.stringify());
	
	mergeDeep(interpolatingDictObj, rightDictObj, interpValue);
	resultDict.parse(JSON.stringify(interpolatingDictObj));
	outlet(0, "dictionary", resultDict.name);
}

function dictionary(dictName) {
	if (inlet == 2) {
		rightDict.name = dictName;
		rightDictObj = JSON.parse(rightDict.stringify());
		//outlet(1, "dictionary", rightDict.name);
		return;
	}
	if (inlet == 1) {
		leftDict.name = dictName;
		leftDictObj = JSON.parse(leftDict.stringify());
		//outlet(1, "dictionary", leftDict.name);
		return;
	}
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
function mergeDeep(target, source, v) {
  if (isObject(target) && isObject(source)) {
    for (var key in source) {
      if (isObject(source[key])) {
		if (!target[key]) target[key] = {};
        mergeDeep(target[key], source[key], v);
      } else {
		post("types:", typeof target[key], typeof source[key], "\n")
		if (typeof target[key] === "number"){
			post("number", v, target[key], source[key], "\n");
			target[key] = (1.-v)*target[key] + v*source[key];
		}
		else if (Array.isArray(target[key])){
			for (var i = 0; (i < target[key].length); i++) {
        		target[key][i] = (1.-v)*target[key][i] + v*source[key][i];
    		}
			post("array", v, target[key], source[key], "\n");
		}
		else target[key] = source[key];
      }
    }
  }
  return target;
}
mergeDeep.local = 1;

//
//


function anything()
{
	return;
}
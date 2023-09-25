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
	
	mergeDeep(interpolatingDictObj, rightDictObj,  interpValue);
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
	
	var theOne = (v > 0.5) ? source : target;
	
    for (var key in source) {
      if (isObject(source[key])) {
		if (!target[key]) target[key] = {};
        mergeDeep(target[key], source[key], v);
      } else {
		post("types:", typeof target[key], typeof source[key], "\n")
		switch (typeof target[key]) {
			case "number":
				post("number", v, target[key], source[key], "\n");
				target[key] = (1.-v)*target[key] + v*source[key];
				break;
			case "string":
				post("string", v, target[key], source[key], "\n");
				post("which", v > 0.5, "\n");
				target[key] = (v > 0.5) ? source[key] : target[key];
				post("=>", target[key], "\n");
				break;
			case "object":
				if (Array.isArray(target[key])){
					for (var i = 0; (i < target[key].length); i++) {
						if ((typeof target[key][i] == "number")&&(typeof source[key][i] == "number")) {
							post("item", target[key][i], "is a number\n")
        					target[key][i] = (1.-v)*target[key][i] + v*source[key][i];
						}
						else target[key][i] = (v > 0.5) ? source[key][i] : target[key][i];
    				}
					post("array", v, target[key], source[key], "\n");
				}
				else target[key] = (v > 0.5) ? source[key] : target[key];
				break;
			default:
				target[key] = (v > 0.5) ? source[key] : target[key];
		}
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
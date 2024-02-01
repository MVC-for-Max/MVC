// join.dict.js

autowatch = 1;
inlets = 3;

var leftDict = new Dict();
var leftDictObj = null;

var rightDict = new Dict();
var rightDictObj = null;

var resultDict = new Dict();

var shouldRecompute = 1;
var interpValue = -1.;

function msg_float(v){
	

	if (typeof v === "number"){
		var tmp = Math.min(Math.max(v, 0.), 1.);
		if (tmp!=interpValue) {
			interpValue = tmp;
			shouldRecompute = 1;
			//post("received float " + interpValue + "\n");
		}
	}
	else return;
	//post("shouldRecompute" , shouldRecompute, "\n");
	
	if (shouldRecompute){
		var interpolatingDictObj;
	
		if (interpValue<0.5) {
			interpolatingDictObj = JSON.parse(leftDict.stringify()); // could be interpolatingDictObj = leftDictObj ?
			mergeDeep(interpolatingDictObj, rightDictObj,  interpValue);
		}
		else {
			interpolatingDictObj = JSON.parse(rightDict.stringify()); // could be interpolatingDictObj = rightDictObj ?
			mergeDeep(interpolatingDictObj, leftDictObj, 1.-interpValue);
		}
		resultDict.parse(JSON.stringify(interpolatingDictObj));
		shouldRecompute = 0;
	}
	outlet(0, "dictionary", resultDict.name);
}

function dictionary(dictName) {
	if (inlet == 2) {
		rightDict.name = dictName;
		rightDictObj = JSON.parse(rightDict.stringify());
		//outlet(1, "dictionary", rightDict.name);
		shouldRecompute = 1;
		return;
	}
	if (inlet == 1) {
		leftDict.name = dictName;
		leftDictObj = JSON.parse(leftDict.stringify());
		//outlet(1, "dictionary", leftDict.name);
		shouldRecompute = 1;
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
    for (var key in target) {
      if (isObject(target[key])) {
		if (!source[key]){
			source[key] = {};
		}
        mergeDeep(target[key], source[key], v);
      } else {
		switch (typeof target[key]) {
			case "number":
				target[key] = (typeof source[key] === "number") ? (1.-v)*target[key] + v*source[key] : target[key];
				break;
			case "string":
				target[key] = (v > 0.5) ? source[key] : target[key];
				break;
			case "object":
				if (Array.isArray(target[key])){
					for (var i = 0; (i < target[key].length); i++) {
						if ((typeof target[key][i] == "number")&&(typeof source[key][i] == "number")) {
        					target[key][i] = (1.-v)*target[key][i] + v*source[key][i];
						}
						else target[key][i] = (v > 0.5) ? source[key][i] : target[key][i];
    				}
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
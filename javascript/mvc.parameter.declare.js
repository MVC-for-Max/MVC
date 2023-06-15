	// mvc.dict.flatten.js : output each node of a dictionary tree
// This version of flatten will output *both* the dictionary at intermediate levels and the leaf at the end of the tree.
// This enables to have parameter stored as dictionary.

inlets = 1;
outlets = 5;

_MVC_VERSION = 0.4;

var modelDict = new Dict();
modelDict.quiet = 1;
modelDict.name = "mvc.models.dict";

// var parametersDict = new Dict();
// parametersDict.quiet = 1;
// parametersDict.name = "mvc.parameters.dict";
	
var inputsDict = new Dict();
inputsDict.quiet = 1;
inputsDict.name = "mvc.inputs.dict";

var parametersValuesDict = new Dict();
parametersValuesDict.quiet = 1;
parametersValuesDict.name = "mvc.parameters.values.dict";

// var paramAttrDict = new Dict();

// var modelDefDict = new Dict();
// modelDefDict.name = "mvc.model-definitions.dict";

var parameter_type;
var parameter_UID;

var previousAddresses = [];
var currentAddresses = [];

// var parentUID;

function updateDictionaries(){
	
	previousAddresses = currentAddresses;
	currentAddresses = arrayfromargs(arguments);
	//post("received list " + currentAddresses + "\n");

	var missingAdresses = findGoneItems(currentAddresses, previousAddresses);
	//post('missingAdresses', missingAdresses, '\n');
	
	// remove gone addresses only for values
	for (var i = 0; i < (missingAdresses.length); i++) {
		var theAdd = missingAdresses[i].replace(/\//g, '::');
		//post('removing', theAdd, '\n')
		parametersValuesDict.remove(theAdd);
		outlet(1, missingAdresses[i], 0);
	}

	// remove all previous addresses in parameters (to rebuild all indices)
	for (var i = 0; i < (previousAddresses.length); i++) {
		var theAdd = previousAddresses[i].replace(/\//g, '::');
		// parametersDict.remove(theAdd);
		inputsDict.remove(theAdd);
	}
	// add new addresses in model dict
	for (var i = 0; i < (currentAddresses.length); i++) {
		var theAdd = currentAddresses[i].replace(/\//g, '::');
    	//post('add', i, theAdd, "\n");
    	var addressUID = [parameter_UID, i + 1];
		// parametersDict.replace(theAdd + "::uid", addressUID);
		inputsDict.replace(theAdd + "::uid", addressUID);
		
		if (parametersValuesDict.contains(currentAddresses[i])){
			// if param has value, recall current
			outlet(2, i+1);
			}
		else {
			// else, recall defaul
			outlet(3, i+1);
		}
		outlet(1, currentAddresses[i], 1);

	}
}

function declare(){
	//just pass arguments to updtaeDictionaries
	// (see https://stackoverflow.com/questions/3914557/passing-arguments-forward-to-another-javascript-function)
	//post("model args in declare", JSON.stringify(arguments), "\n");
	updateDictionaries.apply(null, arguments);
	// bang when done
	outlet(0, "bang")
}

function setParameterUID(uid){
	parameter_UID = uid;
}

function findGoneItems(CurrentArray, PreviousArray) {
   var CurrentArrSize = CurrentArray.length;
   var PreviousArrSize = PreviousArray.length;
   var missingItems = [];
   // loop through previous array
   for(var j = 0; j < PreviousArrSize; j++) {
      // look for same thing in new array
      if (CurrentArray.indexOf(PreviousArray[j]) == -1)
         missingItems.push(PreviousArray[j]);
   }
   return missingItems;
}

function loadbang(	) {
	outlet(4, 'bang');
}

function empty(){
	updateDictionaries();
}

function clear(){
	previousAddresses = [];
}


// function setParamDict(paramDict){
// 	paramAttrDict.name = paramDict;
// 	var parentModelType = modelDict
// }


// function setParentUID(uid){
// 		parentUID = uid;
// }


	// mvc.dict.flatten.js : output each node of a dictionary tree
// This version of flatten will output *both* the dictionary at intermediate levels and the leaf at the end of the tree.
// This enables to have parameter stored as dictionary.

inlets = 1;
outlets = 2;

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

var model_UID = 0;

var previousAddresses = [];
var currentAddresses = [];
var modelAddressDict = new Dict();
modelAddressDict.name = "modelAddressDict";
modelAddressDict.quiet = 1;
// var parentUID;

function updateDictionaries(){
	
	var test = modelAddressDict.get(model_UID);
	//post(test);
	if (test != null) {
		if (Array.isArray(test)) {
			previousAddresses = test;
		}
		else {
			previousAddresses = [].push(test);
		}
	}
	else {
		previousAddresses = [];
	}
	
	//post("pa", previousAddresses, "\n");
	//previousAddresses = currentAddresses;
	currentAddresses = arrayfromargs(arguments);
	// currentAddresses.push("dummy");
	
	
	if (currentAddresses.length == 0) {
		modelAddressDict.remove(model_UID.toString());
	}
	else {
		modelAddressDict.set(model_UID, currentAddresses);
	} 

	//post("isarray", Array.isArray(currentAddresses), "\n");
	//post("currentAddresses[0]", currentAddresses[0], "\n");

	//post("received list " + currentAddresses + "\n");

	var missingAdresses = findGoneItems(currentAddresses, previousAddresses);
	//post('missingAdresses', missingAdresses, '\n');
	//post("missingAdresses isarray", Array.isArray(currentAddresses), "\n");

	// remove gone addresses only for values
	for (var i = 0; i < (missingAdresses.length); i++) {
		var theAdd = missingAdresses[i].replace(/\//g, '::');
		//post('removing', theAdd, '\n')
		parametersValuesDict.remove(theAdd);
		inputsDict.remove(theAdd);
		outlet(1, missingAdresses[i], 0);
	}

	// remove all previous addresses in parameters (to rebuild all indices)
	for (var i = 0; i < (previousAddresses.length); i++) {
		var theAdd = previousAddresses[i].replace(/\//g, '::');
		// parametersDict.remove(theAdd);
		//inputsDict.remove(theAdd);
		modelDict.remove(theAdd);
		//post("removing param:", theAdd, "\n");
		outlet(1, missingAdresses[i], 0);
	}
	// add new addresses in model dict
	for (var i = 0; i < (currentAddresses.length); i++) {
		var theAdd = currentAddresses[i].replace(/\//g, '::');
    	//post('add', i, model_UID, theAdd, "\n");
    	var addressUID = [model_UID, i + 1];
		// parametersDict.replace(theAdd + "::uid", addressUID);
		modelDict.replace(theAdd + "::uid", addressUID);
		
		outlet(1, currentAddresses[i], 1);

	}
}

function declare(){
	//just pass arguments to updtaeDictionaries
	// (see https://stackoverflow.com/questions/3914557/passing-arguments-forward-to-another-javascript-function)
	//post("model args in declare", JSON.stringify(arguments), "\n");
	updateDictionaries.apply(null, arguments);
	// bang when done
	var sendAddress = model_UID + ".model.declare.done";
	outlet(0, "send", sendAddress)
	outlet(0, "bang")
}

function setModelUID(uid){
	model_UID = uid;
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
	//outlet(3, 'bang');
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


// aim.dict.flatten.js : output each node of a dictionary tree
// This version of flatten will output *both* the dictionary at intermediate levels and the leaf at the end of the tree.
// This enables to have parameter stored as dictionary.

inlets = 1;
outlets = 3;

_MVC_VERSION = 0.4;

var modelDict = new Dict();
modelDict.quiet = 1;
var inputsDict = new Dict();
inputsDict.quiet = 1;
var statesDict = new Dict();
statesDict.quiet = 1;
var parametersValuesDict = new Dict();
parametersValuesDict.quiet = 1;
var statesValuesDict = new Dict();
statesValuesDict.quiet = 1;

var model_type;
var model_UID;

var previousAddresses = [];
var currentAddresses = [];

function updateDictionaries(adresses){
	
	modelDict.name = "mvc.models.dict";
	inputsDict.name = "mvc.inputs.dict";
	statesDict.name = "mvc.states.dict";
	parametersValuesDict.name = "mvc.parameters.values.dict";
	statesValuesDict.name = "mvc.states.values.dict";

	previousAddresses = currentAddresses;
	currentAddresses = arrayfromargs(arguments);
	post("received list " + currentAddresses + "\n");

	var missingAdresses = findGoneItems(currentAddresses, previousAddresses);
	post('missing Adresses in', model_UID,':', missingAdresses, '\n');
	
	// remove gone addresses
	for (var i = 0; i < (missingAdresses.length); i++) {
		var theAdd = missingAdresses[i].replace(/\//g, '::');
		//post('removing', theAdd, '\n')
		inputsDict.remove(theAdd);
		//statesDict.remove(theAdd);
		parametersValuesDict.remove(theAdd);
		post("removing", theAdd, "\n");
		// send to AIM.parameter.initializers
		outlet(1, missingAdresses[i], 0);
	}



	// remove all previous addresses in models (to rebuild all)
	for (var i = 0; i < (previousAddresses.length); i++) {
		var theAdd = previousAddresses[i].replace(/\//g, '::');
		modelDict.remove(theAdd);
	}
	// add new addresses in model dict
	for (var i = 0; i < (currentAddresses.length); i++) {
		var theAdd = currentAddresses[i].replace(/\//g, '::');
    	var addressUID = [model_UID, i + 1];
    	//post('add', i, model_UID, theAdd, "\n");
		modelDict.replace(theAdd + "::uid", addressUID);
		//modelDict.replace(theAdd + "::type", model_type);
		// send to AIM.parameter.initializers
		outlet(1, missingAdresses[i], 1);
	}
}

// function setModelType(type){
// 	model_type = type;	
// }

function setModelUID(uid){
	model_UID = uid;
}

function declare(){
	//just pass arguments to updtaeDictionaries
	// (see https://stackoverflow.com/questions/3914557/passing-arguments-forward-to-another-javascript-function)
	//post("model args in declare", JSON.stringify(arguments), "\n");
	updateDictionaries.apply(null, arguments);
	// bang when done
	//var sendAddress = parameter_UID + ".param.declare.done";
	//outlet(0, "send", sendAddress)
	outlet(0, "bang")
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


function loadbang() {
	outlet(2, 'bang');
}


function empty(){
	updateDictionaries();
}


function clear(){
	previousAddresses = [];
}

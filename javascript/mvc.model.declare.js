// aim.dict.flatten.js : output each node of a dictionary tree
// This version of flatten will output *both* the dictionary at intermediate levels and the leaf at the end of the tree.
// This enables to have parameter stored as dictionary.

inlets = 1;
outlets = 3;

_MVC_VERSION = 0.4;

var modelDict = new Dict();
modelDict.quiet = 1;
var parametersDict = new Dict();
parametersDict.quiet = 1;
var statesDict = new Dict();
statesDict.quiet = 1;
var parametersValuesDict = new Dict();
parametersValuesDict.quiet = 1;


var model_type;
var model_UID;

var previousAddresses = [];
var currentAddresses = [];

function declare(adresses){
	
	modelDict.name = "aim.models.dict";
	parametersDict.name = "aim.parameters.dict";
	statesDict.name = "aim.states.dict";
	parametersValuesDict.name = "aim.parameters.values.dict";

	previousAddresses = currentAddresses;
	currentAddresses = arrayfromargs(arguments);
	//post("received list " + currentAddresses + "\n");

	var missingAdresses = findGoneItems(currentAddresses, previousAddresses);
	//post('missingAdresses', missingAdresses, '\n');
	
	// remove gone addresses
	for (var i = 0; i < (missingAdresses.length); i++) {
		var theAdd = missingAdresses[i].replace(/\//g, '::');
		//post('removing', theAdd, '\n')
		parametersDict.remove(theAdd);
		statesDict.remove(theAdd);
		parametersValuesDict.remove(theAdd);
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
    	//post('add', i, theAdd, "\n");
    	var addressUID = [model_UID, i + 1];
		modelDict.replace(theAdd + "::uid", addressUID);
		modelDict.replace(theAdd + "::type", model_type);
		// send to AIM.parameter.initializers
		outlet(1, missingAdresses[i], 1);
	}
	outlet(0, "bang")
}

function setModelType(type){
	model_type = type;	
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


function loadbang() {
	outlet(2, 'bang');
}


function empty(){
	declare();
}


function clear(){
	previousAddresses = [];
}

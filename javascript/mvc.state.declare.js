// mvc.state.declare.js

inlets = 1;
outlets = 4;

_MVC_VERSION = 0.4;

var modelDict = new Dict();
modelDict.quiet = 1;
modelDict.name = "mvc.models.dict";
	
var inputsDict = new Dict();
inputsDict.quiet = 1;
inputsDict.name = "mvc.inputs.dict";

var statesValuesDict = new Dict();
statesValuesDict.quiet = 1;
statesValuesDict.name = "mvc.statess.values.dict";

var states_type;
var states_UID = 0;

var previousAddresses = [];
var currentAddresses = ["dummy"];
var stateAddressDict = new Dict();
stateAddressDict.name = "stateAddressDict";
stateAddressDict.quiet = 1;

function updateDictionaries(){
	
	var test = stateAddressDict.get(state_UID);
	//post(test);
	if (test != null) {
		previousAddresses = test;
		}
	else {
		previousAddresses= [];
		}
	//post("pa", previousAddresses, "\n");
	//previousAddresses = currentAddresses;
	currentAddresses = arrayfromargs(arguments);
	currentAddresses.push("dummy");
	//post("isarray", Array.isArray(previousAddresses), "\n");
	//post("currentAddresses[0]", currentAddresses[0], "\n");

	//post("received list " + currentAddresses + "\n");

	var missingAdresses = findGoneItems(currentAddresses, previousAddresses);
	//post('missingAdresses', missingAdresses, '\n');
	
	// if only dummy is in the new address, remove from the cached addresses dict
	if (currentAddresses.length == 1){
		//post("removing from stateAddressDict", state_UID , "\n");
		stateAddressDict.remove(state_UID.toString());
	}
	else{
		//post("new addresses fro stateAddressDict", state_UID , "\n");
		stateAddressDict.set(state_UID, currentAddresses);
	}
	
	// remove gone addresses only for values
	for (var i = 0; i < (missingAdresses.length); i++) {
		var theAdd = missingAdresses[i].replace(/\//g, '::');
		//post('removing', theAdd, '\n')
		statesValuesDict.remove(theAdd);
		outlet(1, missingAdresses[i], 0);
	}

	// remove all previous addresses in states (to rebuild all indices)
	for (var i = 0; i < (previousAddresses.length); i++) {
		var theAdd = previousAddresses[i].replace(/\//g, '::');
		// statesDict.remove(theAdd);
		inputsDict.remove(theAdd);
		//post("removing state:", theAdd, "\n");
	}
	// add new addresses in model dict
	for (var i = 0; i < (currentAddresses.length-1); i++) {
		var theAdd = currentAddresses[i].replace(/\//g, '::');
    	//post('add', i, theAdd, "\n");
    	var addressUID = [state_UID, i + 1];
		// statesDict.replace(theAdd + "::uid", addressUID);
		inputsDict.replace(theAdd + "::uid", addressUID);
		
		if (!(statesValuesDict.contains(currentAddresses[i]))){
			// if state does not have a value, recall default
			//outlet(2, i+1);
			outlet(2, i + 1, state_UID);
			}
		else {
			// else, recall current
			//outlet(3, i+1);
			outlet(3, i + 1, state_UID);
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
	var sendAddress = state_UID + ".state.declare.done";
	outlet(0, "send", sendAddress)
	outlet(0, "bang")
}

function setStateUID(uid){
	state_UID = uid;
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
	outlet(3, 'bang');
}

function empty(){
	updateDictionaries();
}

function clear(){
	previousAddresses = [];
}


// function setParamDict(stateDict){
// 	stateAttrDict.name = stateDict;
// 	var parentModelType = modelDict
// }


// function setParentUID(uid){
// 		parentUID = uid;
// }


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

var expandedDict = new Dict();
expandedDict.quiet = 1;

var attrDict = new Dict();

var statesValuesDict = new Dict();
statesValuesDict.quiet = 1;
statesValuesDict.name = "mvc.states.values.dict";

var state_UID = 0;

var parentAddresses = [];
var previousAddresses = [];
var expandedNames = [];
var newAddresses = [];

var modelAddressDict = new Dict();
modelAddressDict.name = "modelAddressDict";
modelAddressDict.quiet = 1;

var stateAddressDict = new Dict();
stateAddressDict.name = "stateAddressDict";
stateAddressDict.quiet = 1;

function updateDictionaries(){

	// state_UID is the 1st arg, followed by addresses 
	var _args = arrayfromargs(arguments);
	state_UID = _args[0];
	// post("state_UID", state_UID, "\n");
	// post("--args", _args, "\n");
	expandedDict.name = state_UID + ".expanded";
	// post("expandedNames", expandedNames, "\n");

	var expandedKeys = expandedDict.getkeys();
	// post("expandedNames", expandedNames, "\n");

	attrDict.name = state_UID + ".attr";
	
	var parent_model_UID = attrDict.get("parent");
	// post("parent_model_UID", parent_model_UID, "\n");


	// if no expanded names is provided, remove this state
	if (!(expandedDict.contains("1"))) {
		stateAddressDict.remove(state_UID.toString());
	}
	else { // else we need to concatenate with parent model
		var parentAddressesTest = modelAddressDict.get(parent_model_UID);
		if (parentAddressesTest != null) {
			if (Array.isArray(parentAddressesTest)) {
				parentAddresses = parentAddressesTest;
				// post("parentAddresses is an array \n");
			}
			else {
				parentAddresses = [];
				parentAddresses.push(parentAddressesTest);
				// post("previous address is a solo \n");
			}
		}
		else {
			parentAddresses = [];
		}	
		// concatenate paths for this model
		newAddresses = [];
		for (var i = 0; i < (parentAddresses.length); i++) {

			var expandedNames = [];
			var expandedNamesTest = expandedDict.get((i % expandedKeys.length) + 1);
			if (expandedNamesTest != null) {
				if (Array.isArray(expandedNamesTest)) {
					expandedNames = expandedNamesTest;
					// post("parentAddresses is an array \n");
				}
				else {
					expandedNames.push(expandedNamesTest);
					// post("previous address is a solo \n");
				}
			}
			
			for (var j = 0; j < (expandedNames.length); j++) {
				var concatAddress = parentAddresses[i] + "/" + expandedNames[j];
				//post("---concatAddress", concatAddress, "\n");
				newAddresses.push(concatAddress);
			}
		}
	} 

	stateAddressDict.set(state_UID, newAddresses);

	// notify expansion done
	var sendAddress = state_UID + ".state.expand.done";
	outlet(0, "send", sendAddress);
	outlet(0, newAddresses.length);


	// fetch previous addresses for this model UID
	var test = stateAddressDict.get(state_UID);
	if (test != null) {
		if (Array.isArray(test)) {
			previousAddresses = test;
			// post("previous address is an array:", previousAddresses, "\n");
		}
		else {
			previousAddresses = [];
			previousAddresses.push(test);
			// post("previous address is a solo", previousAddresses, "\n");
		}
	}
	else {
		previousAddresses = [];
		// post("previous address did not exist", previousAddresses, "\n");
	}	

	// compare new addresses with previous addresses for this node
	var missingAdresses = findGoneItems(newAddresses, previousAddresses);


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

	// add new addresses in inputs dict
	for (var i = 0; i < (newAddresses.length); i++) {
		var theAdd = newAddresses[i].replace(/\//g, '::');
    	//post('add', i, theAdd, "\n");
    	var addressUID = [state_UID, i + 1];
		// statesDict.replace(theAdd + "::uid", addressUID);
		inputsDict.replace(theAdd + "::uid", addressUID);
		
		if (!(statesValuesDict.contains(newAddresses[i]))){
			// if state does not have a value, recall default
			//outlet(2, i+1);
			outlet(2, i + 1, state_UID);
			}
		else {
			// else, recall current
			//outlet(3, i+1);
			outlet(3, i + 1, state_UID);
		}
		//outlet(1, newAddresses[i], 1); // now done in declare
	}

}

function declare(){
	//just pass arguments to updateDictionaries
	// (see https://stackoverflow.com/questions/3914557/passing-arguments-forward-to-another-javascript-function)
	//post("model args in declare", JSON.stringify(arguments), "\n");
	updateDictionaries.apply(null, arguments);
	
	// Send initializers to public (remotes)
	for (var i = 0; i < (newAddresses.length); i++) {
		outlet(1, newAddresses[i], 1);	
	}
	
	// bang when done
	var sendAddress = state_UID + ".state.declare.done";
	var initState = arrayfromargs(arguments).length;
	outlet(0, "send", sendAddress);
	outlet(0, (initState > 0));
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

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
statesValuesDict.name = "mvc.states.values.dict";

var state_UID = 0;

var previousAddresses = [];
var currentAddresses = [];
var stateAddressDict = new Dict();
stateAddressDict.name = "stateAddressDict";
stateAddressDict.quiet = 1;

function updateDictionaries(){
	
	// state_UID is the 1st arg, followed by addresses 
	currentAddresses = arrayfromargs(arguments);
	state_UID = currentAddresses[0];
	currentAddresses.shift();

	// compare new addresses with previous addresses for this node
	var test = stateAddressDict.get(state_UID);
	if (test != null) {
		if (Array.isArray(test)) {
			previousAddresses = test;
			//post("previous address is an array \n");
		}
		else {
			previousAddresses = [];
			previousAddresses.push(test);
			//post("previous address is a solo \n");
		}
	}
	else {
		previousAddresses = [];
	}
	
	// update nodeUID / address storage for this node
	if (currentAddresses.length == 0){
		stateAddressDict.remove(state_UID.toString());
	}
	else {
		stateAddressDict.set(state_UID, currentAddresses);
	}

	// compare new addresses with previous addresses for this node
	var missingAdresses = findGoneItems(currentAddresses, previousAddresses);

	// remove gone addresses only for values
	for (var i = 0; i < (missingAdresses.length); i++) {
		var theAdd = missingAdresses[i];//.replace(/\//g, '::');
		//post('removing', theAdd, '\n')
		statesValuesDict.remove(theAdd);
		outlet(1, missingAdresses[i], 0);
	}

	// remove all previous addresses in states (to rebuild all indices)
	for (var i = 0; i < (previousAddresses.length); i++) {
		var theAdd = previousAddresses[i];//.replace(/\//g, '::');
		// statesDict.remove(theAdd);
		inputsDict.remove(theAdd);
		//post("removing state:", theAdd, "\n");
	}

	// add new addresses in model dict
	for (var i = 0; i < (currentAddresses.length); i++) {
		var theAdd = currentAddresses[i];//.replace(/\//g, '::');
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
		//outlet(1, currentAddresses[i], 1); // now done in declare
	}
}

function declare(){
	//just pass arguments to updateDictionaries
	// (see https://stackoverflow.com/questions/3914557/passing-arguments-forward-to-another-javascript-function)
	//post("model args in declare", JSON.stringify(arguments), "\n");
	updateDictionaries.apply(null, arguments);

	// Send initializers to public (remotes)
	for (var i = 0; i < (currentAddresses.length); i++) {
		outlet(1, currentAddresses[i], 1);	
	}

	// bang when done
	var sendAddress = state_UID + ".state.declare.done";
	var initState = arrayfromargs(arguments).length;
	outlet(0, "send", sendAddress)
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

function loadbang(	) {
	outlet(3, 'bang');
}

function empty(){
	updateDictionaries();
}

function clear(){
	previousAddresses = [];
}
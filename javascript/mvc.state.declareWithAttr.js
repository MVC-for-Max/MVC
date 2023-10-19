// mvc.state.declare.js

inlets = 1;
outlets = 4;

_MVC_VERSION = 0.4;
	
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

function declare(dictname){
	
	post("toto");
	var attrDict = new Dict();
	var initState = 0;

	attrDict.name = dictname;
	
	state_UID = attrDict.get('uid');
	post('state_UID',state_UID, '\n');
	var sendAddress = state_UID + ".state.declareWithAttr.done";
	

	currentAddresses = attrDict.get('addresslist');
	currentAddresses = Array.isArray(currentAddresses) ? currentAddresses : [currentAddresses]; //make sure it's an array

	post('currentAddresses', currentAddresses, '\n');

	// check if any of these addresses is already in namespace
	var already_in_namespace = 0;
	for (var i = 0; i < (arguments.length); i++) {
		var theAdd = arguments[i];
		var theUID = 0;
		var theUIDIDX = inputsDict.get(theAdd+"::uid");				
		if (theUIDIDX !== null) {
			if (state_UID != theUIDIDX[0]){
				already_in_namespace = 1;
				break;
			}
		}	
	}
	if (already_in_namespace) {
		outlet(0, "send", sendAddress);
		outlet(0, 2); // error code when address already exists
		return;
	}
	else{
		// compare new addresses with previous addresses for this node...
		previousAddresses = stateAddressDict.get(state_UID);
		// ... and make sure it's an array
		if (previousAddresses == null) {
			previousAddresses = [];
		}
		else {	
			previousAddresses = Array.isArray(previousAddresses) ? previousAddresses : [previousAddresses]; 
		}

		// update nodeUID / address storage for this node
		if (currentAddresses.length == 0){
			//post("removing from stateAddressDict", state_UID , "\n");
			initState = 0;
			stateAddressDict.remove(state_UID.toString());
		}
		else {
			initState = 1;
			//post("new addresses fro stateAddressDict", state_UID , "\n");
			stateAddressDict.set(state_UID, currentAddresses);
		}
		
		// compare new addresses with previous addresses for this node
		var missingAdresses = findGoneItems(currentAddresses, previousAddresses);
		post('missingAdresses', missingAdresses, '\n')

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

		// add new addresses in inputs dict
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
	

	// Send initializers to public (remotes)
	for (var i = 0; i < (currentAddresses.length); i++) {
		outlet(1, currentAddresses[i], initState);	
	}
	
	// bang when done
	outlet(0, "send", sendAddress);
	outlet(0, 1);
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


function clear(){
	previousAddresses = [];
}
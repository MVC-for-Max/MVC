// mvc.parameter.declare.js

inlets = 1;
outlets = 4;

_MVC_VERSION = 0.4;
	
var inputsDict = new Dict();
inputsDict.quiet = 1;
inputsDict.name = "mvc.inputs.dict";

var parametersValuesDict = new Dict();
parametersValuesDict.quiet = 1;
parametersValuesDict.name = "mvc.parameters.values.dict";

var parameter_UID = 0;

var previousAddresses = [];
var currentAddresses = [];
var paramAddressDict = new Dict();
paramAddressDict.name = "paramAddressDict";
paramAddressDict.quiet = 1;

function declare(dictname){
	
	post("toto");
	var attrDict = new Dict();
	var initState = 0;

	attrDict.name = dictname;
	
	parameter_UID = attrDict.get('uid');
	post('parameter_UID',parameter_UID, '\n');
	var sendAddress = parameter_UID + ".param.declareWithAttr.done";
	

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
			if (parameter_UID != theUIDIDX[0]){
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
		// compare new addresses with previous addresses for this node
		var test = paramAddressDict.get(parameter_UID);
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
			//post("removing from paramAddressDict", parameter_UID , "\n");
			initState = 0;
			paramAddressDict.remove(parameter_UID.toString());
		}
		else {
			initState = 1;
			//post("new addresses fro paramAddressDict", parameter_UID , "\n");
			paramAddressDict.set(parameter_UID, currentAddresses);
		}
		
		// compare new addresses with previous addresses for this node
		var missingAdresses = findGoneItems(currentAddresses, previousAddresses);
		post('missingAdresses', missingAdresses, '\n')

		// remove gone addresses only for values
		for (var i = 0; i < (missingAdresses.length); i++) {
			var theAdd = missingAdresses[i];//.replace(/\//g, '::');
			//post('removing', theAdd, '\n')
			parametersValuesDict.remove(theAdd);
			outlet(1, missingAdresses[i], 0);
		}

		// remove all previous addresses in parameters (to rebuild all indices)
		for (var i = 0; i < (previousAddresses.length); i++) {
			var theAdd = previousAddresses[i];//.replace(/\//g, '::');
			// parametersDict.remove(theAdd);
			inputsDict.remove(theAdd);
			//post("removing param:", theAdd, "\n");
		}

		// add new addresses in inputs dict
		for (var i = 0; i < (currentAddresses.length); i++) {
			var theAdd = currentAddresses[i];//.replace(/\//g, '::');
	    	//post('add', i, theAdd, "\n");
	    	var addressUID = [parameter_UID, i + 1];
			// parametersDict.replace(theAdd + "::uid", addressUID);
			inputsDict.replace(theAdd + "::uid", addressUID);
			
			if (!(parametersValuesDict.contains(currentAddresses[i]))){
				// if param does not have a value, recall default
				//outlet(2, i+1);
				outlet(2, i + 1, parameter_UID);
				}
			else {
				// else, recall current
				//outlet(3, i+1);
				outlet(3, i + 1, parameter_UID);
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

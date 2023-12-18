// mvc.parameter.declare.js

inlets = 1;
outlets = 4;

_MVC_VERSION = 0.4;

var modelDict = new Dict();
modelDict.quiet = 1;
modelDict.name = "mvc.models.dict";
	
var inputsDict = new Dict();
inputsDict.quiet = 1;
inputsDict.name = "mvc.inputs.dict";

var parametersValuesDict = new Dict();
parametersValuesDict.quiet = 1;
parametersValuesDict.name = "mvc.parameters.values.dict";

var statesValuesDict = new Dict();
statesValuesDict.quiet = 1;
statesValuesDict.name = "mvc.states.values.dict";

var model_UID = 0;

var previousAddresses = [];
var currentAddresses = [];
var modelAddressDict = new Dict();
modelAddressDict.name = "modelAddressDict";
modelAddressDict.quiet = 1;
// var parentUID;

// function test(addresses){
	// post("add", addresses, "\n");
// }

function declaremodel(dictname){

	var attrDict = new Dict();
	attrDict.name = dictname;
	
	model_UID = attrDict.get('uid');
	// set callback return address on outlet 0
	outlet(0, "send", model_UID + ".model.declareWithAttr.done");

	// get new addresslist and make sure it's an array
	currentAddresses = attrDict.get('addresslist');
	currentAddresses = (currentAddresses == null) ? [] : (Array.isArray(currentAddresses) ? currentAddresses : [currentAddresses]);

	// Check if any of these addresses has already been registered in namespace
	// from a different parameter instance (different UID).
	// Return with exit code if this is the case.
	for (var i = 0; i < (currentAddresses.length); i++) {
		var theAdd = currentAddresses[i].replace(/\//g, '::');
		var theUID = modelDict.get(theAdd+"::uid");
		if (theUID == null) break;	
		else if (model_UID != theUID[0]) {
				//post('Model', currentAddresses[i], 'is already in the namespace.\n')
				outlet(0, -1); // error code when address already exists
				return;
		}	
	}

	// get previous addresslist and make sure it's an array
	previousAddresses = modelAddressDict.get(model_UID);
	previousAddresses = (previousAddresses == null) ? [] : (Array.isArray(previousAddresses) ? previousAddresses : [previousAddresses]);
	
	// update nodeUID / address storage for this node 
	(currentAddresses.length == 0) ? modelAddressDict.remove(model_UID.toString()) : modelAddressDict.set(model_UID, currentAddresses);
	
	// compare new addresses with previous addresses for this node
	var missingAdresses = findGoneItems(currentAddresses, previousAddresses);
	//post('missingAdresses', missingAdresses.toString(), '\n');
	
	// remove gone addresses only for values
	for (var i = 0; i < (missingAdresses.length); i++) {
		var theAdd = missingAdresses[i].replace(/\//g, '::');
		//modelDict.remove(theAdd);
		parametersValuesDict.remove(theAdd);
		statesValuesDict.remove(theAdd);
		//inputsDict.remove(theAdd);
		outlet(1, missingAdresses[i], 0); // public un-init signal to missing addresses (for views)
		//post('removing', theAdd, '\n')
	}

	for (var i = 0; i < (previousAddresses.length); i++) {
		var theAdd = previousAddresses[i].replace(/\//g, '::');
		modelDict.remove(theAdd);
		inputsDict.remove(theAdd);
	}
	
	// add new addresses in model dict
	for (var i = 0; i < (currentAddresses.length); i++) {
		var theAdd = currentAddresses[i].replace(/\//g, '::');
		//post('add', i, model_UID, theAdd, "\n");
		var addressUID = [model_UID, i + 1];
		// parametersDict.replace(theAdd + "::uid", addressUID);
		modelDict.replace(theAdd + "::uid", addressUID);
	}
	// *First*, send private init to inputs (param, states and messages)
	// so that they can preempt sub-models initialization
	outlet(3, model_UID.toString()+".i", currentAddresses.length > 0);

	// *Then*, send private init to (sub)models
	// so that submodels not depending on model parameters will be initialized too
	outlet(2, model_UID.toString()+".i", currentAddresses.length > 0);

	// *Finally*, send initializers to public (remotes and views)
	for (var i = 0; i < (currentAddresses.length); i++) {
		outlet(1, currentAddresses[i], 1);	
	}
	
	// return 1 if init succeed
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


function empty(){
	updateDictionaries();
}

function clear(){
	previousAddresses = [];
}


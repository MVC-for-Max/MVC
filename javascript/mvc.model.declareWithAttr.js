// mvc.parameter.declare.js

inlets = 1;
outlets = 1;

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

function declaremodel(uid){

	var attrDict = new Dict();
	attrDict.name = uid + '.attr';
	
	model_UID = attrDict.get('uid');
	// set callback return address on outlet 0
	outlet(0, "send", model_UID + ".model.declareWithAttr.done");
    //post("model_UID:", model_UID, '\n');

	// get new addresslist and make sure it's an array
	currentAddresses = attrDict.get('addresslist');
	currentAddresses = (currentAddresses == null) ? [] : (Array.isArray(currentAddresses) ? currentAddresses : [currentAddresses]);

	// Check if any of these addresses has already been registered in namespace
	// from a different parameter instance (different UID).
	// Return with exit code if this is the case.
	for (var i = 0; i < (currentAddresses.length); i++) {
		var theAdd = currentAddresses[i].replace(/\//g, '::');
        //post("current address:", theAdd + '\n');
		var theUID = modelDict.get(theAdd+"::uid");
        //post("current address UID :",theUID + '\n');
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
	
	// return 1 if init succeed
	outlet(0, currentAddresses.length);
}


function findGoneItems(currentArray, previousArray) {
  const currentSet = new Set(currentArray);

  return previousArray.filter(item => !currentSet.has(item));
}


function empty(){
	updateDictionaries();
}

function clear(){
	previousAddresses = [];
}


// mvc.node.declare.js

inlets = 1;
outlets = 2;

_MVC_VERSION = 0.4;


var attrDict = new Dict();
attrDict.quiet = 1;

var nodeType = "undefined";

var modelDict = new Dict();
modelDict.quiet = 1;
modelDict.name = "mvc.models.dict";
	
var nodesDict = new Dict();
nodesDict.quiet = 1;
nodesDict.name = "mvc.nodes.dict";

var parametersValuesDict = new Dict();
parametersValuesDict.quiet = 1;
parametersValuesDict.name = "mvc.parameters.values.dict";

var statesValuesDict = new Dict();
statesValuesDict.quiet = 1;
statesValuesDict.name = "mvc.states.values.dict";

var node_UID = 0;

var previousAddresses = [];
var currentAddresses = [];
var nodeAddressDict = new Dict();
nodeAddressDict.name = "nodeAddressDict";
nodeAddressDict.quiet = 1;
// var parentUID;

function updateDictionaries(){
	
	var test = nodeAddressDict.get(node_UID);
	//post("test", test, "\n");
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
	
	//post("pa", previousAddresses, "\n");
	//previousAddresses = currentAddresses;
	currentAddresses = arrayfromargs(arguments);
	// currentAddresses.push("dummy");
	
	
	if (currentAddresses.length == 0) {
		nodeAddressDict.remove(node_UID.toString());
	}
	else {
		nodeAddressDict.set(node_UID, currentAddresses);
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
		statesValuesDict.remove(theAdd);
		nodesDict.remove(theAdd);
		//outlet(1, model_UID.toString(), 0); // no need to uninitialize as they will be remove
	}

	// remove all previous addresses in parameters (to rebuild all indices)
	for (var i = 0; i < (previousAddresses.length); i++) {
		var theAdd = previousAddresses[i].replace(/\//g, '::');
		// parametersDict.remove(theAdd);
		//nodesDict.remove(theAdd);
		nodesDict.remove(theAdd);
		//post("removing param:", theAdd, "\n");
		//outlet(1, missingAdresses[i], 0);
		//outlet(1, model_UID.toString(), 0);
	}
	// add new addresses in model dict
	for (var i = 0; i < (currentAddresses.length); i++) {
		var theAdd = currentAddresses[i].replace(/\//g, '::');
    	//post('add', i, model_UID, theAdd, "\n");
    	var addressUID = [node_UID, i + 1];
		// parametersDict.replace(theAdd + "::uid", addressUID);
		nodesDict.replace(theAdd + "::uid", addressUID);
		
		//outlet(1, currentAddresses[i], 1);
		outlet(1, node_UID.toString(), 1);

	}
}

function declare(){
	//just pass arguments to updtaeDictionaries
	// (see https://stackoverflow.com/questions/3914557/passing-arguments-forward-to-another-javascript-function)
	//post("model args in declare", JSON.stringify(arguments), "\n");
	updateDictionaries.apply(null, arguments);
	// bang when done
	var initState = arrayfromargs(arguments).length;
	var sendAddress = node_UID + ".node.declare.done";
	outlet(0, "send", sendAddress);
	outlet(0, initState>0);
}

function setNodeUID(uid){
	node_UID = uid;
	//attrDict.name = uid.toString()+".attr";
	//nodeType = attrDict.get("mvc-type");
	//post("nodeType:", nodeType, "\n");
	//post("nodeName:", attrDict.get("name"), "\n");

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


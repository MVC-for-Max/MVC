// mvc.message.declare.js

inlets = 1;
outlets = 4;

_MVC_VERSION = 0.4;
	
var inputsDict = new Dict();
inputsDict.quiet = 1;
inputsDict.name = "mvc.inputs.dict";

var message_UID = 0;

var previousAddresses = [];
var currentAddresses = [];
var messageAddressDict = new Dict();
messageAddressDict.name = "messageAddressDict";
messageAddressDict.quiet = 1;

function declare(dictname){
	
	var attrDict = new Dict();
	attrDict.name = dictname;
	
	message_UID = attrDict.get('uid');
	// set callback return address on outlet 0
	outlet(0, 'send', message_UID + ".message.declareWithAttr.done");

	// get new addresslist and make sure it's an array
	currentAddresses = attrDict.get('addresslist');
	currentAddresses = Array.isArray(currentAddresses) ? currentAddresses : [currentAddresses]; //make sure it's an array

	// Check if any of these addresses has already been registered in namespace
	// from a different message instance (different UID).
	// Return with exit code if this is the case.
	for (var i = 0; i < (currentAddresses.length); i++) {
		currentAddresses[i] = currentAddresses[i].replace(/\//g, '::');
		var theAdd = currentAddresses[i];
		var theUID = inputsDict.get(theAdd+"::uid");
		if (theUID == null) break;	
		else if (message_UID != theUID[0]) {
				//post('Parameter', currentAddresses[i].replace(/::/g, '/'), 'is already in the namespace.\n')
				outlet(0, -1); // error code when address already exists
				return;
		}	
	}

	// get previous addresslist and make sure it's an array
	previousAddresses = messageAddressDict.get(message_UID);
	previousAddresses = (previousAddresses == null) ? [] : (Array.isArray(previousAddresses) ? previousAddresses : [previousAddresses]);

	// update nodeUID / address storage for this node 
	(currentAddresses.length == 0) ? messageAddressDict.remove(message_UID.toString()) : messageAddressDict.set(message_UID, currentAddresses);
		
	// compare new addresses with previous addresses for this node
	var missingAdresses = findGoneItems(currentAddresses, previousAddresses);
	//post('missingAdresses', missingAdresses, '\n')

	// remove gone addresses only for values
	for (var i = 0; i < (missingAdresses.length); i++) {
		var theAdd = missingAdresses[i];//.replace(/\//g, '::');
		inputsDict.remove(theAdd);
		outlet(1, theAdd, 0); // public un-init this address
		//post('removing', theAdd, '\n')
	}

	// add new addresses in inputs dict
	for (var i = 0; i < (currentAddresses.length); i++) {
		var theAdd = currentAddresses[i].replace(/\//g, '::');
		var addressUID = [message_UID, i + 1];
		inputsDict.replace(theAdd + "::uid", addressUID);
	}
	
	// Send initializers to public (remotes)
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



function clear(){
	previousAddresses = [];
}

// mvc.message.declare.js

inlets = 1;
outlets = 2;

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

function updateDictionaries(){
	
	// message_UID is the 1st arg, followed by addresses 
	currentAddresses = arrayfromargs(arguments);
	message_UID = currentAddresses[0];
	currentAddresses.shift();

	// compare new addresses with previous addresses for this node
	var test = messageAddressDict.get(message_UID);
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
		messageAddressDict.remove(message_UID.toString());
	}
	else {
		messageAddressDict.set(message_UID, currentAddresses);
	}

	// compare new addresses with previous addresses for this node
	var missingAdresses = findGoneItems(currentAddresses, previousAddresses);

	// remove gone addresses only for values
	for (var i = 0; i < (missingAdresses.length); i++) {
		var theAdd = missingAdresses[i];//.replace(/\//g, '::');
		//post('removing', theAdd, '\n')
		outlet(1, missingAdresses[i], 0);
	}

	// remove all previous addresses in messages (to rebuild all indices)
	for (var i = 0; i < (previousAddresses.length); i++) {
		var theAdd = previousAddresses[i];//.replace(/\//g, '::');
		// messagesDict.remove(theAdd);
		inputsDict.remove(theAdd);
		//post("removing message:", theAdd, "\n");
	}

	// add new addresses in inputs dict
	for (var i = 0; i < (currentAddresses.length); i++) {
		var theAdd = currentAddresses[i];//.replace(/\//g, '::');
    	//post('add', i, theAdd, "\n");
    	var addressUID = [message_UID, i + 1];
		// messagesDict.replace(theAdd + "::uid", addressUID);
		inputsDict.replace(theAdd + "::uid", addressUID);
		
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
	var sendAddress = message_UID + ".message.declare.done";
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

function empty(){
	updateDictionaries();
}

function clear(){
	previousAddresses = [];
}
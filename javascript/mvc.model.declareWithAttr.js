// mvc.parameter.declare.js

inlets = 1;
outlets = 2;

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

function test(addresses){
	post("add", addresses, "\n");

}

function declaremodel(dictname){
	//just pass arguments to updateDictionaries
	// (see https://stackoverflow.com/questions/3914557/passing-arguments-forward-to-another-javascript-function)
	//post("model args in declare", JSON.stringify(arguments), "\n");
//
	//model_UID = arguments[0];
	//post("model_UID", model_UID, "\n");
//
	//var _a_args = arrayfromargs(arguments);
	//_a_args.shift();
	//post("_a_args", JSON.stringify(_a_args), "\n");

	//updateDictionaries(_a_args);

	//updateDictionaries.apply(null, arguments);
	//post('hello\n');
	var attrDict = new Dict();

	attrDict.name = dictname;
	// post('dictname', dictname, '\n');
	// post(attrDict.stringify());
	
	model_UID = attrDict.get('uid');
	post('model_UID',model_UID, '\n');
	var sendAddress = model_UID + ".model.declareWithAttr.done";
	outlet(0, "send", sendAddress); // prepare return address


		// model_UID is the 1st arg, followed by addresses 
	currentAddresses = attrDict.get('addresslist');
	currentAddresses = Array.isArray(currentAddresses) ? currentAddresses : [currentAddresses]; //make sure it's an array
	post('currentAddresses', currentAddresses.toString(), '\n');

	if (currentAddresses == null){
		outlet(1, model_UID.toString()+".i", 0);
	}
	else{
		// fetch previous addresses for this model UID
		var test = modelAddressDict.get(model_UID);
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

		// update nondeUID / address storage for this node
		if (currentAddresses.length == 0) {
			modelAddressDict.remove(model_UID.toString());
		}
		else {
			modelAddressDict.set(model_UID, currentAddresses);
		} 

		// compare new addresses with previous addresses for this node
		var missingAdresses = findGoneItems(currentAddresses, previousAddresses);

		post('missingAdresses', missingAdresses.toString(), '\n');


		// remove gone addresses only for values
		for (var i = 0; i < (missingAdresses.length); i++) {
			post('Removing old model address', missingAdresses[i], '\n');
			var theAdd = missingAdresses[i].replace(/\//g, '::');
			//post('removing', theAdd, '\n')
			parametersValuesDict.remove(theAdd);
			statesValuesDict.remove(theAdd);
			inputsDict.remove(theAdd);
			//outlet(1, model_UID.toString(), 0); // no need to uninitialize as they will be remove
		}

		// remove all previous addresses in parameters (to rebuild all indices)
		for (var i = 0; i < (previousAddresses.length); i++) {
			var theAdd = previousAddresses[i].replace(/\//g, '::');
			// parametersDict.remove(theAdd);
			//inputsDict.remove(theAdd);
			modelDict.remove(theAdd);
			//post("removing param:", theAdd, "\n");
			//outlet(1, missingAdresses[i], 0);
			//outlet(1, model_UID.toString(), 0);
		}
		// add new addresses in model dict
		for (var i = 0; i < (currentAddresses.length); i++) {
			var theAdd = currentAddresses[i].replace(/\//g, '::');
	    	//post('add', i, model_UID, theAdd, "\n");
	    var addressUID = [model_UID, i + 1];
			// parametersDict.replace(theAdd + "::uid", addressUID);
			modelDict.replace(theAdd + "::uid", addressUID);
		}
		// *First*, send initializers to private (param and states)
		outlet(1, model_UID.toString()+".i", 1);

	}

	// *Then*, send initializers to public (remotes)
	// for (var i = 0; i < (currentAddresses.length); i++) {
	//	outlet(2, currentAddresses[i], 1);	
	// }
	
	// bang when done
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


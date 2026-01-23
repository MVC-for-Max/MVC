/****************************************************************
 * MVC REGISTRATION MANAGER (ADDRESS-LIST VERSION)
 * Max/MSP JavaScript
 ****************************************************************/
include("picomatch.max.js");

var MVC_MODELS = new Dict("mvc.models.dict");
var MVC_INPUTS = new Dict("mvc.inputs.dict");
var MVC_PARAMETERS_VALUES = new Dict("mvc.parameters.values.dict");
var MVC_STATES_VALUES = new Dict("mvc.states.values.dict");

MVC_MODELS.quiet = 1;
MVC_INPUTS.quiet = 1;
MVC_PARAMETERS_VALUES.quiet = 1;
MVC_STATES_VALUES.quiet = 1;

let DEBUG = 0;

///////////////////////////////////////////////////////
// Public functions

// this function is called from the mvc.model object
// it unregisters the model and its submodels prior to registering with the new address/parent/type
// This unregistration should only be done at that (top) level, since we'll do it recursively in the unregisterModelSubtree function
// no need to remove sub-models and sub-inputs twice

// called from mvc.model on patcherargs's done, address or parent messages
function registerModel(uid){
    let n = node(uid);
	debugpost("----registerModel", uid, "\n");
    _registerModel(n);

    //publicInit(n);
}

// called from mvc.model on freebang
function freeModel(uid){
    let n = node(uid);
	debugpost("----freeModel", uid, "\n");
	_unregisterModel(n);

    let parentUID = n.get("parent");
    let parent = node(parentUID);
    _removeFromChildModels(parent, uid);
    _removeFromPendingChildModels(parent, uid);

	// clear the node, except for the pendingInputs and models
	let pendingChildModels =  asArray(n.get("pendingChildModels"));
	let pendingChildInputs =  asArray(n.get("pendingChildInputs"));
	n.clear();
	n.replace("pendingChildModels", pendingChildModels);
	n.replace("pendingChildInputs", pendingChildInputs);
}

// called from mvc.parameter, mvc.state or mvc.message on patcherargs's done, address or parent messages
// should we split that in separate functions?
function registerInput(uid){
    let n = node(uid);
	debugpost("----registerInput", uid, "\n");
    let address = n.get("address");
    if (invalid(address)){
        debugpost("Unregister input because invalid address", address, "\n")
        _unregisterInput(n);
        n.remove("addresslist");
        return;
    }
    else {
        _registerInput(n);
    }
}

// called from mvc.parameter, mvc.state or mvc.message on freebang
function freeInput(uid){
    let n = node(uid);
    debugpost("----freeInput", uid, "\n");
    let parentUID = n.get("parent");
    let parent = node(parentUID);
    debugpost("freeInput", parentUID, uid, "\n");
    _unregisterInput(n);  // will put this input in the parent's childInput
    //remove from parentPendingInputs
    _removeFromPendingChildInputs(parent, uid);
    n.clear();
}

//// called from mvc.view on patcherargs's done, address or parent messages
//function registerView(uid){
//    let n = node(uid);
//    _unregisterView(n);
//    _registerView(n);
//}
//// called from mvc.view on freebang
//function freeView(uid){
//	let n = node(uid);
//	_unregisterView(n);
//
//	// clear the node, except for the pendingInputs and models
//	let pendingChildModels =  n.get("pendingChildModels");
//	let pendingChildInputs =  n.get("pendingChildInputs");
//	n.clear();
//	n.replace("pendingChildModels") = pendingChildModels;
//	n.replace("pendingChildInputs") = pendingChildInputs;
//}
//
/// called from mvc.remote on patcherargs's done, address or parent messages
function registerRemote(uid){
    let n = node(uid);
    debugpost("----registerRemote", uid, "\n");
    _registerRemote(n);
}
/// called from mvc.remote on freebang
function freeRemote(uid){
    let n = node(uid);
    debugpost("----freeRemote", uid, "\n");
    _unregisterRemote(n);
    n.clear();
}


///////////////////////////////////////////////////////
// Private functions

// this function is called only internally
_registerModel.local = 1;
function _registerModel(n){

    let uid = n.get("uid");
    debugpost("----_registerModel:", uid, "\n");

    let parentUID = n.get("parent");
    if (invalid(parentUID)){
        debugpost("Aborting as parent uid is invalid:", parentUID, "\n");
        return;
    }

    let address = n.get("address");
    debugpost("parentUID", parentUID, "\n")
    debugpost("uid", uid, "\n")

    if (invalid(address)){
        debugpost("Unregister node because invalid address", address, "\n")
        _unregisterModel(n);
        n.remove("addresslist");
        return;
    }

    let parent = node(parentUID);

    // add this node to parent's pending nodes
    debugpost("adding", uid, "to pendingChildModels of", parentUID, "\n");
    _addToPendingChildModels(parent, uid);

    // if parent has no addresslist, just stay in pending child nodes, except if parent is mvc-root
    if ((parentUID != "mvc-root")&&(asArray(parent.get("addresslist")).length == 0)) {
        debugpost("Parent has not been initialized yet. Resume init for",uid, "\n");
        return;
    }

    let previousAddresses = asArray(n.get('addresslist'));
    debugpost("previousAddresses", previousAddresses, "\n");

    debugpost("address", address, "\n");
    if (invalid(address)){
        debugpost("invalid address", address, "\n");
        return;
    }

    ///// Alright, parent exist and is initialized (or is mvc-root)

	// expand brace-notation
    let expandedAddresses = expandAddressList(n.get("address"));
    n.replace("expandedAddresses", expandedAddresses);
    debugpost("expandedAddresses:", JSON.stringify(expandedAddresses) , '\n');

    // distribute addresses over parent's
    distributeAddresses(n, parent); 	

    // check namespace collision
    if (_modelAddressAlreadyInUse(n)){
        messnamed(uid + ".debugpost", "error", "Some addresses already registered in namespace.");
        //debugpost("Namespace collision for model", uid, ". Resuming init.\n"); // todo: make that an error in the object itself
        n.remove("addresslist");
        return;
    }

    // move child models and inputs to pending
    let childModels = asArray(n.get("childModels"));
    for (let i = 0; i < (childModels.length); i++) {
        let childModelUID = childModels[i];
        //let childModel = node(childModelUID);
        _addToPendingChildModels(n, childModelUID);
        _removeFromChildModels(n, childModelUID);
        //_unregisterModel(childModel);
    }
    let childInputs = asArray(n.get("childInputs"));
    for (let i = 0; i < (childInputs.length); i++) {
        let childInputUID = childInputs[i];
        //let childInput = node(childInputUID);
        _addToPendingChildInputs(n, childInputUID);
        _removeFromChildInputs(n, childInputUID);
        //_unregisterInput(childInput);
    }


    debugpost("addresslist", n.get("addresslist"), "\n");
    debugpost("previousAddresses", previousAddresses, "\n")

    // find gone addresses and remove them in the value dict
    let missingAdresses = findGoneItems(n.get("addresslist"), previousAddresses);
    debugpost("missingAdresses", JSON.stringify(missingAdresses), "\n");
    for (let i = 0; i < (missingAdresses.length); i++) {
        let theAdd = missingAdresses[i];
        debugpost("missing address:", theAdd, '\n');
        MVC_MODELS.remove(theAdd);
        MVC_INPUTS.remove(theAdd);
        MVC_STATES_VALUES.remove(theAdd);
        MVC_PARAMETERS_VALUES.remove(theAdd);
    }

    // add adresses to namespace
    let addresscount = n.get("addresslist").length;
    for (let i = 0; i < addresscount; i++) {
        let theAddress = n.get("addresslist")[i]; 
        MVC_MODELS.replace(theAddress + "::uid", uid, i+1);
    }

    // first initiliaze inputs, then models, so that inputs values can preempt model's init in the event they are use to define a submodel address
    _registerPendingInputs(n);
    _registerPendingModels(n);

	// change from pending to child models
	_removeFromPendingChildModels(parent, uid);
	_addToChildModels(parent, uid);

    messnamed(uid + ".init", addresscount);

    // send recursive public init signal
    publicInit(n);
}

_registerInput.local = 1;
function _registerInput(n){
    var uid = n.get("uid");
	debugpost("----_registerInput", uid, "\n");

    let parentUID = n.get("parent");
    if (invalid(parentUID)) return;

    let address = n.get("address");
    if (invalid(address)){
        debugpost("Unregister input because invalid address", address, "\n")
        _unregisterInput(n);
        n.remove("addresslist");
        return;
    }

	// if the input already has an addresslist, it means it has been initiliazed from outside
	// this could happen when a parameter has been initialized that preempt the internal registration
	// although this is less common for inputs than for models, a parameter whose address would have been initialized by another parameter might 
    //if (n.get("addresslist")) return;
    let parent = node(parentUID);
    var mvcType = n.get("mvc-type");
    let previousAddresses = asArray(n.get('addresslist'));

    // add this node to parent's pending nodes
    debugpost("adding", uid, "to pendingChildInputs of", parentUID, "\n");
    _addToPendingChildInputs(parent, uid);

    // if parent has no addresslist, just stay in pending child nodes, except if parent is mvc-root
    if ((parentUID != "mvc-root")&&(asArray(parent.get("addresslist")).length == 0)) {
        debugpost("Parent has not been initialized yet. Resume init for",uid, "\n");
        return;
    }

    ///// Alright, parent exist and is initialized

	// expand brace-notation
    let expandedAddresses = expandAddressList(n.get("address"));
    n.replace("expandedAddresses", expandedAddresses);
    debugpost("expandedAddresses:", JSON.stringify(expandedAddresses) , '\n');

    // distribute addresses over parent's
    distributeAddresses(n, parent); 	

    // check namespace collision and resume registration if duplicate
    if (_inputAddressAlreadyInUse(n)){
        //debugpost("Namespace collision for input", uid, ". Resuming init.\n"); // todo: make that an error in the object itself
        messnamed(uid + ".debugpost", "error", "Some addresses already registered in namespace.");
		n.remove("addresslist");
    	return;
    }

    // Find gone addresses and remove them in the value dict.
    // Don't erase all previous addresses as we need
    // to keep those values in the namespace that are still there in new addresses
    let missingAdresses = findGoneItems(n.get("addresslist"), previousAddresses);
    for (let i = 0; i < (missingAdresses.length); i++) {
        let theAdd = missingAdresses[i];
        debugpost("missing address:", theAdd, '\n');
        MVC_INPUTS.remove(theAdd);
        switch(mvcType){
            case 'state':
                MVC_STATES_VALUES.remove(theAdd);
                break;
            case 'parameter':
                MVC_PARAMETERS_VALUES.remove(theAdd);
                break;
            case 'message':
                break;
            default:
               break;
        }
    }

    // add adresses to namespace and set default value if needed
    let addresscount = n.get("addresslist").length;
    for (let i = 0; i < addresscount; i++) {
        let theAddress = n.get("addresslist")[i]; 
        MVC_INPUTS.replace(theAddress + "::uid", uid, i+1);
        let defaultValue = n.get("default");
        if (mvcType === 'parameter') {
            debugpost("setting default for", theAddress, "?\n");
            // only write default is address didn't already exist
            if (!MVC_PARAMETERS_VALUES.contains(theAddress)){
                MVC_PARAMETERS_VALUES.replace(theAddress, defaultValue);
            }
        }
        else if (mvcType === 'state') {
            // only write default is address didn't already exist
            if (!MVC_STATES_VALUES.contains(theAddress)){
                MVC_STATES_VALUES.replace(theAddress, defaultValue);
            }
        } // else
    }

	// change from pending to child models in parent's attr dictionary
	_removeFromPendingChildInputs(parent, uid);
	_addToChildInputs(parent, uid);

    debugpost("sending init message to", uid, "\n");
    messnamed(uid + ".init", addresscount);

    // send recursive public init signal
    publicInit(n);

}

/////////////////////////////////////////////////////////////
_registerRemote.local = 1;
function _registerRemote(n){
    var uid = n.get("uid");
    debugpost("----_registerRemote", uid, "\n");

    let address = n.get("address");
    debugpost("address", address, "\n");
    let parentUID = n.get("parent");
    let parent = node(parentUID);
    let previousAddresses = asArray(n.get('addresslist'));

    // address cannot be an empty string
    if (invalid(address)||(address === "")) {
        post("Invalid address", address, "\n");
        n.remove("address");
        return;
    }

    // if parent exists but is not initialized, add this node to parent's pending nodes
    if ((!invalid(parentUID)) && (invalid(parent.get("addresslist")))) {
        let pendingRemotes = asArray(parent.get("pendingRemotes"));
        pendingRemotes.push(uid)
        parent.replace("pendingRemotes", pendingRemotes);
        //return;
    }

    debugpost("parentUID", parentUID, "\n");

    ///// Alright, parent exist and is initialized

    // expand brace-notation
    let expandedAddresses = expandAddressList(n.get("address"));
    n.replace("expandedAddresses", expandedAddresses);
    //debugpost("expandedAddresses:", JSON.stringify(expandedAddresses) , "\n");

    // distribute addresses over parent's
    distributeAddresses(n, parent);
    debugpost("addresslist", JSON.stringify(n.get("addresslist")), "\n");

    // the addresslist returned by distributeAddresses() is only potential, 
    // we'll need to filter it against namespace first
    let potentialAddresslist = n.get("addresslist");
    n.replace("potentialAddresslist", potentialAddresslist);

    //filter this list of address against existing namespace
    let namespace = [];
    var MVC_INPUTS_Obj = JSON.parse(MVC_INPUTS.stringify());
    flattenInputs(namespace, MVC_INPUTS_Obj, '', '::');
    debugpost("namespace", JSON.stringify(namespace), "\n");
    let addresslist = matchGlobs(potentialAddresslist, namespace);
    debugpost("filteredAddresslist", JSON.stringify(addresslist), "\n");
    n.replace("addresslist", addresslist);


    //let addresslist = n.get("addresslist");
    // find gone addresses and remove them in the value dict
    let missingAdresses = findGoneItems(addresslist, previousAddresses);
    for (let i = 0; i < (missingAdresses.length); i++) {
        let theAdd = missingAdresses[i];
        debugpost("missing remote address:", theAdd, '\n');
        //Remove from input's remote value
        MVC_INPUTS.remove(theAdd+"::remotes::"+uid);
        //let destNodeRemotes = asArray(MVC_INPUTS.get(theAdd+"::remotes"));
        //debugpost("current remotes are:", JSON.stringify(destNodeRemotes));
        //_removeItemFromArray(destNodeRemotes, [uid, i+1]);
        //let [inputUID, inputIndex] = MVC_INPUTS.get(theAdd+"::uid");
        //let inputNode = node(inputUID + ".attr");
        //inputNode.replace("remotes::" + uid);
    }



    // add this addresses to the relevant nodes
    let theDest = [];
    for (let i = 0; i < addresslist.length; i++) {
        let theAdd = addresslist[i];
        debugpost("adding remote address:", theAdd, '\n');
        //add to inputs
        let [destUID, destIdx] = MVC_INPUTS.get(theAdd+"::uid");
        MVC_INPUTS.replace(theAdd+"::remotes::" + uid, i+1);
        theDest.push([destUID, destIdx]);
        
        // store in array
        //let destNodeRemotes = asArray(MVC_INPUTS.get(theAdd+"::remotes"));
        //debugpost("---adding", uid, i, "to", destUID, ".attr","\n");
        //destNodeRemotes.push([uid, i+1]);
        //MVC_INPUTS.replace(theAdd+"::remotes", destNodeRemotes);

        //destNode.replace
        //Remove from input's remote value
        //let [inputUID, inputIndex] = MVC_INPUTS.get(theAdd+"::uid");
        //debugpost(inputUID, inputIndex, "\n");
        //let inputNode = node(inputUID);
        //post(inputNode.get("uid"), "\n");
        //inputNode.replace("remotes::" + uid, i+1);
    }
    // pust the destination addresses in the remote's attr dict
    n.replace("destination",theDest);

    if (addresslist.length > 0){
         //find UID of root path for this node (either in inputs, or in models)
        const initPath = commonPath(addresslist);
        const initNode = MVC_MODELS.contains(initPath) ? MVC_MODELS.get(initPath+"::uid") : MVC_INPUTS.get(initPath+"::uid");
        n.replace("initNode", initNode[0]+".publicinit");       
    }else{
        n.replace("initNode", "");
    }

    // change from pending to child models in parent's attr dictionary
    //_removeFromPendingRemotes(parent, uid);
    //_addToRemotes(parent, uid);
    //
    //debugpost("sending init message to", uid, "\n");
    messnamed(uid + ".init", addresslist.length);
}

function _registerPendingModels(n){
	debugpost("----_registerPendingModels\n");
    let pendingChildModels = asArray(n.get("pendingChildModels"));
    debugpost("... now will register pending models:", JSON.stringify(pendingChildModels));
    for (let i = 0; i < pendingChildModels.length; i++) {
        let uid = pendingChildModels[i];
        // send init message to model
        messnamed(uid + ".initialize", "bang");
        //let n = node(uid);
        //_registerModel(n);
    }
}

function _registerPendingInputs(n){
	debugpost("----_registerPendingInputs\n");
    let pendingChildInputs = asArray(n.get("pendingChildInputs"));
    debugpost("... now will register pending inputs:", JSON.stringify(pendingChildInputs));
    for (let i = 0; i < pendingChildInputs.length; i++) {
        let uid = pendingChildInputs[i];
        // send init message to input
        messnamed(uid + ".initialize", "bang");
        //let n = node(uid);
        //_registerInput(n);
    }
}

function _unregisterModel(n){
    let uid = n.get("uid");
	debugpost("----_unregisterModel", uid, "\n");

    let childInputs = asArray(n.get("childInputs"));
    for (let i = 0; i < childInputs.length; i++) {
        let childInputUID = childInputs[i];
        let childInput = node(childInputUID);
        _unregisterInput(childInput);
    }

    let childModels = asArray(n.get("childModels"));
    for (let i = 0; i < childModels.length; i++) {
        let childModelUID = childModels[i];
        let childModel = node(childModelUID);
        _unregisterModel(childModel);
    }

    //remove from namespace
    let addresslist = asArray(n.get("addresslist"));
    debugpost("addresslist", addresslist, "\n");
    for (var i = 0; i < addresslist.length; i++) {
        MVC_MODELS.remove(addresslist[i]);
        MVC_INPUTS.remove(addresslist[i]);
        MVC_PARAMETERS_VALUES.remove(addresslist[i]); // these two should not be necessary _unregisterInput
    }

    // move to parent's pending models
    let parentUID = n.get("parent");
    let parent = node(parentUID);
	_removeFromChildModels(parent, uid);
    _addToPendingChildModels(parent, uid);

    // cleanup attr dict and send init message to 0.
	//n.replace("addresslist", []);
    n.remove("addresslist");
	//n.replace("expandedAddresses", []);
	//n.replace("parentmap", []);
	//n.replace("childrenmap", []);
	messnamed(uid + ".init", 0);

    // send recursive public init signal
    publicInit(n);
}

function _unregisterInput(n){
    let uid = n.get("uid");
	debugpost("----_unregisterInput", uid, "\n");
    let parentUID = n.get("parent");
    let parent = node(parentUID);
    let addresslist = asArray(n.get("addresslist"));
    let mvcType = n.get("mvc-type");

    //remove from namespace
    for (let i = 0; i < addresslist.length; i++) {
        MVC_INPUTS.remove(addresslist[i]);
        if (mvcType == 'parameter') MVC_PARAMETERS_VALUES.remove(addresslist[i]);
        else if (mvcType == 'state') MVC_STATES_VALUES.remove(addresslist[i]);
        // else, this is a message
    }

	// move to parent's pending inputs
	_removeFromChildInputs(parent, uid);
    _addToPendingChildInputs(parent, uid);

    // cleanup attr dict and send init message to 0.
	n.replace("addresslist", []);
	//n.replace("expandedAddresses", []);
	//n.replace("parentmap", []);
	//n.replace("childrenmap", []);
	messnamed(uid + ".init", 0);

    // send recursive public init signal
    publicInit(n);
}

function _unregisterRemote(n){
    let uid = n.get("uid");
    debugpost("----_unregisterRemote", uid, "\n");

    let addresslist = asArray(n.get("addresslist"));

    //remove from namespace
    for (let i = 0; i < addresslist.length; i++) {
        let theAdd = addresslist[i];
        debugpost("remove remote address:", theAdd, '\n');
        MVC_INPUTS.remove(theAdd+"::remotes::" + uid);

        //let destNodeRemotes = asArray(MVC_INPUTS.get(theAdd+"::remotes"));
        //debugpost("current remotes are:", JSON.stringify(destNodeRemotes));
        //_removeItemFromArray(destNodeRemotes, [uid, i+1]);
//
        //Remove from input's remote value
        //let [inputUID, inputIndex] = MVC_INPUTS.get(theAdd+"::uid");
        //debugpost(inputUID, inputIndex, "\n");
        //let inputNode = node(inputUID);
        ////post(inputNode.get("uid"), "\n");
        //inputNode.remove("remotes::" + uid);        
    }
}


function publicInit(n){

    let uid = n.get("uid");
    let parentUID = n.get("parent");
    let parentNode = node(parentUID);

    //recursive call to top-level model
    if (parentUID == "mvc-root") {
        messnamed("mvc-root.publicinit", "bang");    
    } else{
        publicInit(parentNode);
    }
    post("publicinit", uid, "\n");
    messnamed(uid + ".publicinit", "bang");
}


// utils
function _removeFromPendingChildModels(n, uid){
    //debugpost("----_removeFromPendingChildModels", n.get("uid"), uid, "\n");
	let pendingChildModels = asArray(n.get("pendingChildModels"));
    //debugpost("pendingChildModels", pendingChildModels, "\n")
    let updatedArray = _removeItemFromArray(pendingChildModels, uid);
    //debugpost("updatedArray", updatedArray, "\n")
	n.replace("pendingChildModels",updatedArray );
}
function _addToPendingChildModels(n, uid){
    //debugpost("----_addToPendingChildModels", n.get("uid"), uid, "\n");
	let pendingChildModels = asArray(n.get("pendingChildModels"));
	n.replace("pendingChildModels", _addUniqueItemToArray(pendingChildModels, uid));
}
function _removeFromChildModels(n, uid){
    //debugpost("----_removeFromChildModels", n.get("uid"), uid, "\n");
	let childModels = asArray(n.get("childModels"));
	n.replace("childModels", _removeItemFromArray(childModels, uid));
}
function _addToChildModels(n, uid){
    //debugpost("----_addToChildModels", n.get("uid"), uid, "\n");
	let childModels = asArray(n.get("childModels"));
	n.replace("childModels", _addUniqueItemToArray(childModels,uid));
}
function _removeFromPendingChildInputs(n, uid){
    //debugpost("----_removeFromPendingChildInputs", n.get("uid"), uid, "\n");
	let pendingChildInputs = asArray(n.get("pendingChildInputs"));
    //debugpost("pendingChildInputs", pendingChildInputs, "\n");
    _removeItemFromArray(pendingChildInputs, uid)
    //debugpost("pendingChildInputs", pendingChildInputs, "\n");
	n.replace("pendingChildInputs", pendingChildInputs);
}
function _addToPendingChildInputs(n, uid){
    //debugpost("----_addToPendingChildInputs", n.get("uid"), uid, "\n");
	let pendingChildInputs = asArray(n.get("pendingChildInputs"));
	n.replace("pendingChildInputs", _addUniqueItemToArray(pendingChildInputs, uid));
}
function _removeFromChildInputs(n, uid){
    //debugpost("----_removeFromChildInputs", n.get("uid"), uid, "\n");
	let childInputs = asArray(n.get("childInputs"));
	n.replace("childInputs", _removeItemFromArray(childInputs, uid));
}
function _addToChildInputs(n, uid){
    //debugpost("----_addToChildInputs", n.get("uid"), uid, "\n");
	let childInputs = asArray(n.get("childInputs"));
	n.replace("childInputs", _addUniqueItemToArray(childInputs, uid));
}


function _removeItemFromArray(arr, value) {
    //debugpost("----_removeItemFromArray", JSON.stringify(arr), value, "\n")
    var index = arr.indexOf(value);
    //debugpost(value, "found at", index, "\n");
    if (index > -1) {
      arr.splice(index, 1);
    }
    //debugpost("updated:", JSON.stringify(arr), "\n")
    return arr;
}

function _addUniqueItemToArray(arr, value){
	if(arr.indexOf(value) === -1) {
    	arr.push(value);
	}
	return arr;
}

_modelAddressAlreadyInUse.local = 1;
function _modelAddressAlreadyInUse(n)
{
	let addresslist = n.get("addresslist");
    let uid = n.get("uid");
    //debugpost("----_modelAddressAlreadyInUse", uid, "\n");

    //debugpost("addresslist", JSON.stringify(addresslist), "\n");
    for (let i = 0; i < (addresslist.length); i++) {
        let theAdd = addresslist[i];
        let theUID = MVC_MODELS.get(theAdd+"::uid");
        if (theUID != null) {
            if (uid !== theUID[0]) {
                //debugpost('Model', addresslist[i].replace(/::/g, '/'), 'is already in the namespace.\n')
                return 1;
            }
        }
    }
    return 0;
}

_inputAddressAlreadyInUse.local = 1;
function _inputAddressAlreadyInUse(n)
{
	let addresslist = n.get("addresslist");
    let uid = n.get("uid");

    for (let i = 0; i < (addresslist.length); i++) {
        let theAdd = addresslist[i];
        let theUID = MVC_INPUTS.get(theAdd+"::uid");
        //if (theUID == null) break;  
        if (theUID != null) {
            if (uid !== theUID[0]) {
                //debugpost('Input', addresslist[i].replace(/::/g, '/'), 'is already in the namespace.\n')
                return 1;
            }
        }
    }
    return 0;
}

/* ===================== UTILITIES ===================== */

function node(uid) {
    var d = new Dict(uid + ".attr");
    d.quiet = 1;
    return d;
}

function keys(d) {
    return d ? d.getkeys() : null;
}

function invalid(v) {
    return v === null || v === undefined || v === "none";
}

function asArray(v) {
    return v == null ? [] : (Array.isArray(v) ? v : [v]);
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

// flattenInputs: flatten a JS object (obj) into an (target) array
// optionally add a (parent) prefix and define the separator levels (e.g. /) 
function flattenInputs(target, obj, parent, separator) {
    // init
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            var val = obj[key];
            if (isObject(val)) {
                recurse(target, val, parent + key, separator);
            }
        }
    } 

    function recurse(target, obj, parent, separator){
        for (var key in obj) {
            if (key == "uid") {
                target.push(parent);
            }
            else if (obj.hasOwnProperty(key)) {
                var val = obj[key];
                if (isObject(val)) {
                    recurse(target, val, parent + separator + key , separator);
                } 
            }
        }   
    }
}

/**
 * Check if an object is an object
 */
function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
};

/* ===================== BRACE EXPANSION ===================== */

function expandAddress(addr) {
    if (addr.indexOf("{") === -1) return [addr];

    var m = addr.match(/\{(\d+)\.\.(\d+)\}/);
    if (!m) return [addr];

    var a = parseInt(m[1], 10);
    var b = parseInt(m[2], 10);

    var out = [];
    for (var i = a; i <= b; i++) {
        out.push(addr.replace(m[0], i));
    }
    return out;
}

function expandAddressList(addr) {
    if (Array.isArray(addr)) {
        var out = [];
        for (var i = 0; i < addr.length; i++) {
            out.push(expandAddress(addr[i]));
        }
        return out;
    }
    return [expandAddress(addr)];
}

/* ===================== ADDRESS DISTRIBUTION ===================== */

function distributeAddresses(n, parent) {
    debugpost("----distributeAddresses\n");
    let addresslist = []; // the final address list
    let parentmap = [];   // an array mapping each address to the index of the parent addresses
    let childrenmap = []; // a nested array mapping parent index to an array of corresponding child addresses indices

    let expandedAddresses = n.get("expandedAddresses");
    //addresslist = expanded.flat();
    //debugpost("expandedAddresses", JSON.stringify(expandedAddresses), "\n");

    //if (!parentList || parentList.length === 0) parentList = [""];

    if (n.get("parent") == "mvc-root"){ // If no parent, consider the addresses as absolute (can only happen for the device's top level model)
      addresslist = expandedAddresses.flat();
      //debugpost('Flattened-addresslist:', addresslist, '\n');
      const tmp = new Array(addresslist.length);
      for (let i = 0; i < addresslist.length; i++) {
          parentmap[i] = 1;
          tmp[i] = i + 1;
      }
      childrenmap[0] = tmp;
    } 
    else if (parent.get("uid") != n.get("uid")){ //concat on parent address
       // debugpost("yuk\n")
      let adddressIndex = 0; //the address index in the final addresslist
      let parentAddresses = asArray(parent.get("addresslist"));
    
      for (let i = 0; i < parentAddresses.length; i++) {
        const childIndexArray = [];
        const addressesArrayForThisParentAddress = expandedAddresses[i%expandedAddresses.length];
        //debugpost('addressesArrayForThisParentAddress', addressesArrayForThisParentAddress, '\n');
    
        for (let j = 0; j < addressesArrayForThisParentAddress.length; j++) {
          var childAdd = addressesArrayForThisParentAddress[j];
          if (childAdd !== 'none'){
            addresslist.push(parentAddresses[i] + '::' + childAdd);          
            childrenmap.push(i+1);
            adddressIndex++;
            childIndexArray.push(adddressIndex);
          }
        }
        parentmap.push(childIndexArray);
      }
      //addresslist = ["addresslist"].concat(addresslist);
    }
    else { // if parent-uid and child-uid are the same: this is the device
      //addresslist = ["addresslist"].concat(expandedAddresses[0]);
      addresslist = expandedAddresses[0] || [];
      parentmap = [1];
      childrenmap = [1];
    }

  n.replace("addresslist", addresslist);
  n.replace("parentmap", parentmap);
  n.replace("childrenmap", childrenmap);
}

//let test = ["tralala"];
//debugpost("test1", test,"\n");
//_removeItemFromArray(test, "tralala");
//debugpost("test", test,"\n");


function testpicomatch() {
    var patterns = ["myModel.*/frequency", "myModel.3/frequency"];
    var namespace = [
        "myModel.1/frequency",
        "myModel.2/frequency",
        "myModel.3/frequency",
        "myModel.4/frequency"
    ];

    var matches = matchGlobs(patterns, namespace);
    debugpost("Matched files:\n" + matches.join("\n") + "\n");
}

function picomatchClearCache() {
    clearMatchGlobsCache();
    debugpost("Pattern cache cleared\n");
}


function debugpost()
{
    if (DEBUG) {
        var a = arrayfromargs(messagename, arguments);
        post(a);
    }
}



/**********************************************
 * Series of functions for finding common path
 **********************************************/

/**
 * Given an array of strings, return an array of arrays, containing the
 * strings split at the given separator
 * @param {!Array<!string>} a
 * @param {string} sep
 * @returns {!Array<!Array<string>>}
 */
const splitStrings = (a, sep = '/') => a.map(i => i.split(sep));

/**
 * Given an index number, return a function that takes an array and returns the
 * element at the given index
 * @param {number} i
 * @return {function(!Array<*>): *}
 */
const elAt = i => a => a[i];

/**
 * Transpose an array of arrays:
 * Example:
 * [['a', 'b', 'c'], ['A', 'B', 'C'], [1, 2, 3]] ->
 * [['a', 'A', 1], ['b', 'B', 2], ['c', 'C', 3]]
 * @param {!Array<!Array<*>>} a
 * @return {!Array<!Array<*>>}
 */
const rotate = a => a[0].map((e, i) => a.map(elAt(i)));

/**
 * Checks of all the elements in the array are the same.
 * @param {!Array<*>} arr
 * @return {boolean}
 */
const allElementsEqual = arr => arr.every(e => e === arr[0]);

/**
 * Checks that no element have wildcard
 * @param {!Array<*>} arr
 * @return {boolean}
 */
const noWildcardInElement = arr => arr.some(e => {
    // Define the special characters to check for
  const specialCharacters = ['*', '?'];
  // Check if the current string contains any special characters
    for (let j = 0; j < specialCharacters.length; j++) {
      if (e.includes(specialCharacters[j])) {
        return false; // Found a special character, return true
      }
    }
    // No special characters found in any of the strings
  return true;
});

/**
 * Returns the longest common path without wildcard in it
 * @param {!Array<*>} input : the array of paths
 * @return {string} : the longest path
 */
const commonPath = (input, sep = '::') => rotate(splitStrings(input, sep))
        .filter(noWildcardInElement)
    .filter(allElementsEqual)
    .map(elAt(0)).join(sep);

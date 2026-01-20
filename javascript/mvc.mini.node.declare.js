/****************************************************************
 * MVC REGISTRATION MANAGER (ADDRESS-LIST VERSION)
 * Max/MSP JavaScript
 ****************************************************************/

var MVC_MODELS = new Dict("mvc.models.dict");
var MVC_INPUTS = new Dict("mvc.inputs.dict");
var MVC_PARAMETERS_VALUES = new Dict("mvc.parameters.values.dict");
var MVC_STATES_VALUES = new Dict("mvc.states.values.dict");

MVC_MODELS.quiet = 1;
MVC_INPUTS.quiet = 1;

///////////////////////////////////////////////////////
// Public functions

// this function is called from the mvc.model object
// it unregisters the model and its submodels prior to registering with the new address/parent/type
// This unregistration should only be done at that (top) level, since we'll do it recursively in the unregisterModelSubtree function
// no need to remove sub-models and sub-inputs twice

// called from mvc.model on patcherargs's done, address or parent messages
function registerModel(uid){
	post("----registerModel\n");
    let n = node(uid);
    let address = n.get("address");
    post("address", address, "\n")
    // if invalid address 
    if (invalid(address)){
        post("Unregister node because invalid address", address, "\n")
        _unregisterModel(n);
        n.remove("addresslist");
        return;
    }
    else {
        _unregisterModel(n);
        n.remove("addresslist");
        _registerModel(n);
    }
    //_unregisterModel(n);
}

// called from mvc.model on freebang
function freeModel(uid){
	post("----freeModel\n");
	let n = node(uid);
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
	post("----registerInput\n");
    let n = node(uid);
    _registerInput(n);
}

// called from mvc.parameter, mvc.state or mvc.message on freebang
function freeInput(uid){
	post("----freeInput\n");
    let n = node(uid);
    _unregisterInput(n);  // will put this input in the parent's childInput
    //remove from parentPendingInputs
    let parentUID = n.get("parent");
    let parent = node(uid);
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
///// called from mvc.remote on patcherargs's done, address or parent messages
//function registerRemote(uid){
//    let n = node(uid);
//    _registerRemote(n);
//}
///// called from mvc.remote on freebang
//function freeRemote(uid){
//    let n = node(uid);
//    _unregisterRemote(n);
//    n.clear();
//}


///////////////////////////////////////////////////////
// Private functions

// this function is called only internally
_registerModel.local = 1;
function _registerModel(n){
	post("----_registerModel\n");

    let uid = n.get("uid");

	// if the model already has an addresslist, it means it has been initiliazed from outside
	// this happens when a parameter has been initialized that preempt the internal registration
	// think for instance of the channelcount parameter in a multichannel model like mvc.mc.lores~
    if (!invalid(n.get("addresslist"))) {
        post("This node's init has been preempted", uid, "\n");
        return;
    }

    let address = n.get("address");
    let parentUID = n.get("parent");
    let parent = node(parentUID);
    let previousAddresses = asArray(n.get('addresslist'));
    post("parentUID", parentUID, "\n")
    post("uid", uid, "\n")

    // add this node to parent's pending nodes
    if (invalid(parentUID)){
        post("Aborting as parent uid is invalid:", parentUID, "\n");
        return;
    }
    else {
        post("OK, adding", uid, "to pendingChildModels of", parentUID, "\n");
        _addToPendingChildModels(parent, uid);
    }

    post("address", address, "\n");
    if (invalid(address)){
        post("invalid address", address, "\n");
        return;
    }

    ///// Alright, parent exist and is initialized (or is mvc.root)

	// expand brace-notation
    let expandedAddresses = expandAddressList(n.get("address"));
    n.replace("expandedAddresses", expandedAddresses);
    post("expandedAddresses:", JSON.stringify(expandedAddresses) , '\n');

    // distribute addresses over parent's
    distributedAddresses = distributeAddresses(n, parent); 	

    // check namespace collision
    if (modelAddressAlreadyInUse(n)){
        post("namespace collision - exiting... \n");
		_unregisterModel(n);
    	return;
    }

    post("addresslist", n.get("addresslist"), "\n");
    post("previousAddresses", previousAddresses, "\n")

    // find gone addresses and remove them in the value dict
    let missingAdresses = findGoneItems(n.get("addresslist"), previousAddresses);
    post("missingAdresses", JSON.stringify(missingAdresses), "\n");
    for (let i = 0; i < (missingAdresses.length); i++) {
        let theAdd = missingAdresses[i];
        post("missing address:", theAdd, '\n');
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
}

_registerInput.local = 1;
function _registerInput(n){
	post("----_registerInput\n");

	// if the input already has an addresslist, it means it has been initiliazed from outside
	// this could happen when a parameter has been initialized that preempt the internal registration
	// although this is less common for inputs than for models, a parameter whose address would have been initialized by another parameter might 
    //if (n.get("addresslist")) return;
    var uid = n.get("uid");
    var mvcType = n.get("mvc-type");
    let address = n.get("address");
    let parentUID = n.get("parent");
    let parent = node(parentUID);
    let previousAddresses = asArray(n.get('addresslist'));

    if (invalid(parentUID) || invalid(address)) return;

    // if parent exists but is not initialized, add this node to parent's pending nodes
    if (invalid(parent.get("addresslist"))) {
    	let pendingChildModels = asArray(parent.get("pendingChildModels")).push(uid);
        parent.replace("pendingChildModels", pendingChildModels);
        return;
    }

    ///// Alright, parent exist and is initialized

	// expand brace-notation
    let expandedAddresses = expandAddressList(n.get("address"));
    n.replace("expandedAddresses", expandedAddresses);
    post("expandedAddresses:", JSON.stringify(expandedAddresses) , '\n');

    // distribute addresses over parent's
    distributedAddresses = distributeAddresses(n, parent); 	

    // check namespace collision
    if (inputAddressAlreadyInUse(n)){
		_unregisterInput(n);
    	return;
    }

    // find gone addresses and remove them in the value dict
    let missingAdresses = findGoneItems(n.get("addresslist"), previousAddresses);
    for (let i = 0; i < (missingAdresses.length); i++) {
        let theAdd = missingAdresses[i];
        post("missing address:", theAdd, '\n');
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

    messnamed(uid + ".init", addresscount);
}

function _registerPendingModels(n){
	post("----_registerPendingModels\n");
    let pendingChildModels = asArray(n.get("pendingChildModels"));
    for (let i = 0; i < pendingChildModels.length; i++) {
        let uid = pendingChildModels[i];
        let n = node(uid);
        _registerModel(n);
    }
}

function _registerPendingInputs(n){
	post("----_registerPendingInputs\n");
    let pendingChildInputs = asArray(n.get("pendingChildInputs"));
    for (let i = 0; i < pendingChildInputs.length; i++) {
        let uid = pendingChildInputs[i];
        let n = node(uid);
        _registerInput(n);
    }
}

function _unregisterModel(n){
	post("----_unregisterModel\n");
    let childInputs = asArray(n.get("childInputs"));
    for (let i = 0; i < childInputs.length; i++) {
        let uid = childInputs[i];
        let child = node(uid);
        _unregisterInput(child);
    }

    let childModels = asArray(n.get("childModels"));
    for (let i = 0; i < childModels.length; i++) {
        let uid = childModels[i];
        let child = node(uid);
        _unregisterModel(child);
    }

    //remove from namespace
    let addresslist = asArray(n.get("addresslist"));
    post("addresslist", addresslist, "\n");
    for (var i = 0; i < addresslist.length; i++) {
        MVC_MODELS.remove(addresslist[i]);
        //MVC_INPUTS.remove(addresslist[i]);
        //MVC_PARAMETERS_VALUES.remove(addresslist[i]); // these two should not be necessary _unregisterInput
    }

    // move to parent's pending models
    let uid = n.get("uid");
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
}

function _unregisterInput(n){
	post("----_unregisterInput\n");
    let uid = n.get("uid");
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
}



// utils

function _removeFromPendingChildModels(n, uid){
	let pendingChildModels = asArray(n.get("pendingChildModels"));
    post("pendingChildModels", pendingChildModels, "\n")
    let updatedArray = _removeItemFromArray(pendingChildModels, uid);
    post("updatedArray", updatedArray, "\n")
	n.replace("pendingChildModels",updatedArray );
}
function _addToPendingChildModels(n, uid){
	let pendingChildModels = asArray(n.get("pendingChildModels"));
	n.replace("pendingChildModels", _addUniqueItemToArray(pendingChildModels, uid));
}
function _removeFromChildModels(n, uid){
	let childModels = asArray(n.get("childModels"));
	n.replace("childModels", _removeItemFromArray(childModels, uid));
}
function _addToChildModels(n, uid){
	let childModels = asArray(n.get("childModels"));
	n.replace("childModels", _addUniqueItemToArray(childModels,uid));
}
function _removeFromPendingChildInputs(n, uid){
	let pendingChildInputs = asArray(n.get("pendingChildInputs"));
	n.replace("pendingChildInputs", _removeItemFromArray(pendingChildInputs, uid));
}
function _addToPendingChildInputs(n, uid){
	let pendingChildInputs = asArray(n.get("pendingChildInputs"));
	n.replace("pendingChildInputs", _addUniqueItemToArray(pendingChildInputs, uid));
}
function _removeFromChildInputs(n, uid){
	let childInputs = asArray(n.get("childInputs"));
	n.replace("childInputs", _removeItemFromArray(childInputs, uid));
}
function _addToChildInputs(n, uid){
	let childInputs = asArray(n.get("childInputs"));
	n.replace("childInputs", _addUniqueItemToArray(childInputs, uid));
}


function _removeItemFromArray(arr, value) {
    post("the input array:", JSON.stringify(arr), "\n")
    var index = arr.indexOf(value);
    post(value, "found at", index, "\n");
    if (index > -1) {
      arr.splice(index, 1);
    }
    post("updated:", JSON.stringify(arr), "\n")
    return arr;
}

function _addUniqueItemToArray(arr, value){
	if(arr.indexOf(value) === -1) {
    	arr.push(value);
	}
	return arr;
}

function modelAddressAlreadyInUse(n)
{
	let addresslist = n.get("addresslist");
    let uid = n.get("uid");

    for (let i = 0; i < (addresslist.length); i++) {
        let theAdd = addresslist[i];
        let theUID = MVC_MODELS.get(theAdd+"::uid");
        if (theUID == null) break;  
        else if (uid != theUID[0]) {
            post('Model', addresslist[i].replace(/::/g, '/'), 'is already in the namespace.\n')
            return 1;
        }   
    }    
    return 0;
}

function inputAddressAlreadyInUse(n)
{
	let addresslist = n.get("addresslist");
    let uid = n.get("uid");

    for (let i = 0; i < (addresslist.length); i++) {
        let theAdd = addresslist[i];
        let theUID = MVC_INPUTS.get(theAdd+"::uid");
        if (theUID == null) break;  
        else if (uid != theUID[0]) {
            post('Input', addresslist[i].replace(/::/g, '/'), 'is already in the namespace.\n')
            return 1;
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
    let addresslist = []; // the final address list
    let parentmap = [];   // an array mapping each address to the index of the parent addresses
    let childrenmap = []; // a nested array mapping parent index to an array of corresponding child addresses indices

    let expandedAddresses = n.get('expandedAddresses');
    //addresslist = expanded.flat();

    //if (!parentList || parentList.length === 0) parentList = [""];

    if (n.get('parent') == 'mvc.root'){ // If no parent, consider the addresses as absolute (can only happen for the device's top level model)
      addresslist = expandedAddresses.flat();
      //post('addresslist flattened', addresslist, '\n');
      const tmp = new Array(addresslist.length);
      for (let i = 0; i < addresslist.length; i++) {
          parentmap[i] = 1;
          tmp[i] = i + 1;
      }
      childrenmap[0] = tmp;
    } 
    else if (parent.get('uid') != n.get('uid')){ //concat on parent address
    
      let adddressIndex = 0; //the address index in the final addresslist
      let parentAddresses = asArray(parent.get('addresslist'));
    
      for (let i = 0; i < parentAddresses.length; i++) {
        const childIndexArray = [];
        const addressesArrayForThisParentAddress = expandedAddresses[i%expandedAddresses.length];
        //post('addressesArrayForThisParentAddress', addressesArrayForThisParentAddress, '\n');
    
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

  n.replace('addresslist', addresslist);
  n.replace('parentmap', parentmap);
  n.replace('childrenmap', childrenmap);
}

//let test = ["tralala"];
//post("test1", test,"\n");
//_removeItemFromArray(test, "tralala");
//post("test", test,"\n");

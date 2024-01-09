const Max = require('max-api');
const micromatch = require('micromatch')
const { braces } = require('micromatch');

// This will be printed directly to the Max console
// Max.post(`Loaded the ${path.basename(__filename)} script`);

Max.addHandler("expandonparent", (...args) => {
		//Max.post("args", args);
	var addr = args[args.length - 1]; //callback address
	var uid = args[args.length - 2]; // uid of caller

	const childdict = args[0];
	const parentdict = args[1];

	Max.outlet("send", addr);
	Max.outlet("uid", uid);

	// var target = {};
  // tableize(target, childdict, '');
  // Max.post("target", target);

	// fetch address to expand make sure it's an array
	var addressToExpand = childdict.address ?? [];
	addressToExpand = Array.isArray(addressToExpand) ? addressToExpand : [addressToExpand];
	//Max.post('addressToExpand', addressToExpand);

	// fetch parent addresses and make sure it's an array
	var parentAddresses = parentdict.addresslist ?? [];
	parentAddresses = Array.isArray(parentAddresses) ? parentAddresses : [parentAddresses];
	//Max.post('parentAddresses', parentAddresses);

	var expandedAddresses;
	expandedAddresses = braceExpandArray(addressToExpand);
	childdict.expandedAddresses = expandedAddresses;
	//Max.post('expandedAddresses', expandedAddresses);


	var adddressIndex = 0; //the address index in the final addresslist
	var addresslist = []; // the final address list
	var parentmap = [];		// an array mapping each address to the index of the parent addresses
	var childrenmap = []; // a nested array mapping parent index to an array of corresponding child addresses indices

	if (parentdict.uid == null){ // If no parent, consider the relative address as absolute
		addresslist = expandedAddresses.flat();
		//Max.post('addresslist flattened', addresslist);
		var tmpArray = [];
		for (var i = 0; i < addresslist.length; i++) {
   		parentmap.push(1);
   		tmpArray.push(i+1);
		}
		childrenmap.push(tmpArray);
	}	
	else if (parentdict.uid != childdict.uid){ //concat on parent address
		for (let i = 0; i < parentAddresses.length; i++) {
			var childIndexArray = [];
			var addressesArrayForThisParentAddress = expandedAddresses[i%expandedAddresses.length];
			//Max.post('addressesArrayForThisParentAddress', addressesArrayForThisParentAddress);
			for (let j = 0; j < addressesArrayForThisParentAddress.length; j++) {
				var childAdd = addressesArrayForThisParentAddress[j];
				if (childAdd!= 'none'){
					var concatAddress = parentAddresses[i] + '/' + childAdd;
					//Max.post('concatAddress', concatAddress);
					addresslist.push(concatAddress);					
				}
				else{
					//Max.post("youhou",childAdd )
				}

				childrenmap.push(i+1);
				adddressIndex++;
				childIndexArray.push(adddressIndex);
			}
			parentmap.push(childIndexArray);
		}
		//addresslist = ["addresslist"].concat(addresslist);
	}
	else { //this is the device
		//addresslist = ["addresslist"].concat(expandedAddresses[0]);
		addresslist = expandedAddresses[0];
		parentmap = [1];
		childrenmap = [1];
	}

	childdict.addresslist = addresslist;
	childdict.parentmap = parentmap;
	childdict.childrenmap = childrenmap;

	Max.outlet(childdict);
	// Max.outlet(['addresslist'].concat(addresslist));
	// Max.outlet(['parentmap'].concat(Object.values(parentmap[0])));
	// Max.outlet(['childrenmap'].concat(childrenmap));
	// Max.outlet('done');
});


/**
 * function expandOnParentAndFilter
 * Like expandonparentAndFilter, but filter addresses 
 * based on the mvc.inputs.dict content and the parent namespace
 *
 * @args childDict parentDict uid addr
 * childDict = dictionary containing the address to expand
 * parentDict = dictionary containing the parent namespace
 * uid =  request uid
 * addr = callback return address
 */
Max.addHandler("expandOnParentAndFilter", (...args) => {
		//Max.post("args", args);
	var addr = args[args.length - 1]; //callback address
	var uid = args[args.length - 2]; // uid of caller

	const childdict = args[0]; // this node dict attribute dict, from which we retrieve parent addresses to expand on
	const parentdict = args[1]; // parent attribute dict, from which we retrieve parent addresses to expand on
	const inputsdict = args[2]; // input dictionary, from which we can (wildcard-)filter existing addresses

	var expandedAddresses = []; // the expanded address list (may be relative ones)
	var absoluteAddresslist = []; // the list of absolute addresses
	var addresslist = []; // the final address list

	/*********************************************************
	 * 
	 *  Expand addresses
	 *  (if address changed)
	 * 
	 *********************************************************/

	// fetch address to expand make sure it's an array
	var addressToExpand = childdict.address ?? [];
	addressToExpand = Array.isArray(addressToExpand) ? addressToExpand : [addressToExpand];

	const address_changed = childdict.address_changed ?? 0;
	//Max.post("address_changed", address_changed)
	// If address changed, brace-expand it, 
	// otherwise, just read it from the attr dictionary
	if (address_changed){
		expandedAddresses = braceExpandArray(addressToExpand);
		delete childdict.address_changed;
	}
	else {
		expandedAddresses = childdict.expandedAddresses ?? [];
	}
	//Max.post("expandedAddresses", expandedAddresses);


	/*********************************************************
	 * 
	 *  Distribute expanded addresses over parent addresses
	 *  (if parent addresslist changed)
	 * 
	 *********************************************************/

	const parent_addresslist_changed = childdict.parent_addresslist_changed ?? 0;
	//Max.post("parent_addresslist_changed", parent_addresslist_changed)
	if (parent_addresslist_changed||address_changed){
		//Max.post("redistributing addresses...");
		// fetch parent addresses and make sure it's an array
		var parentAddresses = parentdict.addresslist ?? [];
		parentAddresses = Array.isArray(parentAddresses) ? parentAddresses : [parentAddresses];
		if (parentdict.uid == null){ // If no parent, consider the relative address as absolute
			absoluteAddresslist = expandedAddresses.flat();
			//Max.post("Absolute address spotted...");
		}	
		else if (parentdict.uid != childdict.uid){ //concat on parent address
			//Max.post("Relative address spotted...");
			for (let i = 0; i < parentAddresses.length; i++) {
				var addressesArrayForThisParentAddress = expandedAddresses[i%expandedAddresses.length];
				if (addressesArrayForThisParentAddress != null){
					for (let j = 0; j < addressesArrayForThisParentAddress.length; j++) {
						var concatAddress = parentAddresses[i] + '/' + addressesArrayForThisParentAddress[j];
						absoluteAddresslist.push(concatAddress);
					}				
				}
				else {
					absoluteAddresslist.push(parentAddresses[i]);
				}
			}
		}
		delete childdict.parent_addresslist_changed;
	}
	else {
		// grabbing previous addresses
		absoluteAddresslist = childdict.absoluteAddresslist ?? [];
	}
	//Max.post("addressToExpand", addressToExpand);

	//childdict.initpath = commonPath(addresslist);

	/*********************************************************
	 * 
	 *  Evaluate addresses against current namespace
	 *  (if namespace changed)
	 *********************************************************/

	// Does the address contain a wildcard ?
	//const wildcardChar = /[*?]/;
	//const addressContainsWildcard = addressToExpand.some(letter => wildcardChar.test(c));
	const addressContainsWildcard = containsWildchar(addressToExpand);
 	//Max.post("addressContainsWildcard", addressContainsWildcard)

	// If namespace_changed or address contains a wildcard, filter addresslist against parent namespace
	const namespace_changed = childdict.namespace_changed ?? 0;
	//Max.post("namespace_changed", namespace_changed)
	if (namespace_changed||addressContainsWildcard){
		// flatten the input dict to get all possible addresses
		var namespace = [];
 		flattenInputs(namespace, inputsdict, '', '/');
 		// Max.post("fullAddressList",namespace)
 		// Max.post("fullAddressList-size",namespace.length)
 		// Max.post("addresslist",addresslist)
 		// Parse namespace though wildcard
		addresslist = micromatch(namespace, absoluteAddresslist);
 		//Max.post("filteredResult", addresslist)
 		delete childdict.namespace_changed;
	} 
	else {
		addresslist = absoluteAddresslist;
	}

	//Max.post("filteredAddresses", addresslist);

	//const addressAsArray = splitStrings(addresslist, '/');
	//const test = getValueFromPath(inputsdict, addresslist[0] + '/uid');
	//Max.post("addressAsArray", test)
	// build the remote address list
	var remotelist = [];
	for (let i = 0; i < addresslist.length; i++) {
		const uidIndex = getValueFromPath(inputsdict, addresslist[i] + '/uid') ?? -1;
		remotelist.push([i+1].concat(uidIndex));
	}
	//Max.post("remotelist", remotelist)

	// Return request UID and updated dictionary
	childdict.expandedAddresses = expandedAddresses;
	childdict.absoluteAddresslist = absoluteAddresslist;
	childdict.addresslist = addresslist;
	childdict.remotelist = remotelist;
	Max.outlet("send", addr);
	Max.outlet("uid", uid);
	Max.outlet(childdict);
	const initPath = (absoluteAddresslist[0] == null) ? '' : commonPath(absoluteAddresslist);
	Max.outlet("initpath", initPath);
});



// Use the 'outlet' function to send messages out of node.script's outlet
Max.addHandler("expand", (...args) => {
	
	// callback return address is last argument
	var addr = args[args.length - 1];
	var uid = args[args.length - 2];

	// string to expand is everything before last argument
	// var msg = "";
	// if (args.length > 2) {
	// 	msg = "{" + args.slice(0, args.length - 1).join('|') + "}"; // if multiple string to expand, combine them with "|", so that they get expanded in that order
	// 		}
	// else {
	// 	msg = args[0];
	// 	}

	var result = [];
	var expansion = [];
	expansion = args.slice(0, args.length - 2).join(' '); 
	//expansion = expansion.concat(args.slice(0, args.length - 1));
	Max.outlet("send", addr);
	Max.outlet("uid", uid);
	Max.outlet("expansion", expansion);

	for (let i = (args.length - 3); i >= 0 ; i--) {
			var msg = "";
			msg = args[i];
			if (msg.includes("{")) {
				// escape brackets and all -------------
				// WARNING : order of the 2 following escape functions do matter!!
				//Max.post("msg", msg);
				var escaped = escapeMultiSlashes(msg);
				escaped = escapePipeSign(escaped);
				escaped = escapeRegExp(String(escaped));
				// Max.outlet("escape", escaped);
				if (!addr) addr = 'none';
				// expand with output limit set to 1000 (default)
				// see https://www.npmjs.com/package/braces for more info
				result = braces(escaped, { expand: true, maxLength: 1000, rangeLimit:1000 });
			}
			else {
				result = [msg];
			}
			result = ["result"].concat(i+1, result);
			Max.outlet(result);
	}
});


function braceExpandArray(arr) {
  // Check if the input is an array
  if (!Array.isArray(arr)) {
    //return arr;
    arr = [arr];
  }

  // Initialize an empty result array
  var result = [];

  // Iterate through the elements in the input array
  for (const element of arr) {
    if (typeof element === 'string') {
      // If the element is a string, brace expand its
      //Max.post("element", element)
      const escaped = escapePipeSign(escapeMultiSlashes(element));
      //const escaped = escapePipeSign(escapeMultiSlashes(element));
			const expandedElement = braces(escaped, { expand: true, maxLength: 10000, rangeLimit:10000 });
      result.push(expandedElement);
    } else if (Array.isArray(element)) {
      // If the element is another array, recursively call the function
      // to process the nested array
      const nestedResult = braceExpandArray(element);
      result.push(nestedResult);
    } else {
      // If the element is not a string or array, push it as is
      result.push(element);
    }
  }

  return result;
}

function distributeArray(inputs) {
 	let result = inputs[0]
 	for (let inputIndex = 1; inputIndex < inputs.length; inputIndex++) {
 	  const input = inputs[inputIndex]
 	  // if we refuse to have a sub-address with less addresses than there are branches in parent address
 	  //if (input.length !== result.length) {
 	  //  throw new Error(`Expected to see ${result.length} values in the input at index ${inputIndex}, but instead saw ${input.length}: ${JSON.stringify(input)}`)
 	  //}
 	  const resultNew = []
 	  for (let inputInnerIndex = 0; inputInnerIndex < result.length; inputInnerIndex++) {
 	    const stringExisting = result[inputInnerIndex]
 	    const inputArray = input[inputInnerIndex%input.length]
 	    const inputArrayMerged = inputArray.map((string) => stringExisting + '/' + string)	
 	    resultNew.push(...inputArrayMerged)
 	  }	
 	  result = resultNew
 	}
 	return result
}



// braces(patterns[, options]);

//Max.post(braces(['{01..05}', '{a..e}']));
//=> ['(0[1-5])', '([a-e])']

//Max.post(braces(['lowpass{A..z}', '{a..e}'], { expand: true }));
//=> ['01', '02', '03', '04', '05', 'a', 'b', 'c', 'd', 'e']

//https://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex
function escapeRegExp(string) {
  //return string.replace(/[.*+?^${}()|[\]\\]/g, '\\\\$&'); // $& means the whole matched string
	return string.replace(/[*+?^$|[\]\\]/g, '\\$&'); // $& means the whole matched string

}
function escapePipeSign(string) {
  //return string.replace(/[.*+?^${}()|[\]\\]/g, '\\\\$&'); // $& means the whole matched string
	return string.replace(/[|]/g, '\,'); // $& means the whole matched string

}
function escapeMultiSlashes(string) {
  //return string.replace(/[.*+?^${}()|[\]\\]/g, '\\\\$&'); // $& means the whole matched string
	return string.replace(/\/+/g, '/'); // $& means the whole matched string

}



/**
 * Recursively flatten keys for dictionary
 *
 * Params : dictionary, uid, return-address
 * e.g. for use with dict mvc.models.dict or dict mvc.inputs.dict
 */
Max.addHandler("flattenDictKeys", (...args) => {

	var addr = args[args.length - 1]; //callback address
	var uid = args[args.length - 2]; // uid of caller

	const childdict = args[0];

	Max.outlet("send", addr);
	Max.outlet("uid", uid);

	var target = [];
  flattenInputs(target, childdict, '', '/');
  //Max.post("target", target);

  var result = ["result"].concat(Object.values(target));
 	Max.outlet(result);

	})


/**
 * Recursively flatten object keys to use dot-notation.
 *
 * @param {Array} `target`
 * @param {Object} `obj`
 * @param {String} `parent`
 * @param {String} `separator`
 * usage : flattenkeys(fullAddressList, inputsdict, '', '::');
 * {
    "myDevice": {
        "myCascade": {
            "Filter.1": {
            	"frequency": {
									"uid": 123
            	},
            	"resonance": {
									"uid": 123
            	}
            }
        }
    }
  }
	myDevice/myCascade/Filter.1/frequency
 */


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
const commonPath = (input, sep = '/') => rotate(splitStrings(input, sep))
		.filter(noWildcardInElement)
    .filter(allElementsEqual)
    .map(elAt(0)).join(sep);

/**
 * Returns the value at path defined by array
 * @param {object} obj : the input object
 * @param {array} pathArray : the path to value
 * @return {string} : the longest path
 */
function getValueFromPath(obj, path) {
  const pathArray = path.split('/').filter(Boolean); // Split the path into an array

  let currentObj = obj;

  for (let key of pathArray) {
    if (currentObj && typeof currentObj === 'object' && key in currentObj) {
      currentObj = currentObj[key];
    } else {
      // If key is not found or the value is not an object, return undefined
      return undefined;
    }
  }

  return currentObj;
}

// does any item in array contains wildchar ?
function containsWildchar(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes('*') || arr[i].includes('?')) {
      return 1;
    }
  }
  return 0;
}


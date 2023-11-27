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
				var concatAddress = parentAddresses[i] + '/' + addressesArrayForThisParentAddress[j];
				addresslist.push(concatAddress);
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

	const childdict = args[0];
	const parentdict = args[1];
	const inputsdict = args[2];

	//Max.post("inputsdict", inputsdict);

	Max.outlet("send", addr);
	Max.outlet("uid", uid);

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


	// distribute arrays
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
				var concatAddress = parentAddresses[i] + '/' + addressesArrayForThisParentAddress[j];
				addresslist.push(concatAddress);
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

	// Does the address contain a wildcard ?
	const wildcardChar = /[*?]/;
	const addressContainsWildcard = addressToExpand.some(letter => wildcardChar.test(letter));

	// If address contains a wildcard, filter addresslist against parent namespace
	if (0){
		// flatten the input dict to get all possible addresses
		var fullAddressList = [];
 		flattenInputs(fullAddressList, inputsdict, '', '/');
 		Max.post("fullAddressList",fullAddressList)
 		Max.post("addresslist",addresslist)
 		// Parse namespace though wildcard
		var filteredResult = micromatch(fullAddressList, addresslist, {'nobrace':true});
 		//Max.post("filteredResult",filteredResult)

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
				result = braces([escaped], { expand: true, maxLength: 1000, rangeLimit:1000 });
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
			const expandedElement = braces(escaped, { expand: true, maxLength: 1000, rangeLimit:1000 });
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


/**
 * Given an array of strings, return an array of arrays, containing the
 * strings split at the given separator
 * @param {!Array<!string>} a
 * @param {string} sep
 * @returns {!Array<!Array<string>>}
 */
const splitStrings = (a, sep = '/') => a.map(i => i.split(sep));




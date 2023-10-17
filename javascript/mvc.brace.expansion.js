const Max = require('max-api');
const braces = require('braces');

// This will be printed directly to the Max console
// Max.post(`Loaded the ${path.basename(__filename)} script`);

Max.addHandler("parsedict", (...args) => {
		//Max.post("args", args);

		var childNode = args[0];
		var parentNode = args[1];

		Max.post("childNode", childNode);
		Max.post("parentNode", parentNode);

});


// Use the 'outlet' function to send messages out of node.script's outlet
Max.addHandler("expand-old", (...args) => {
	
	// callback return address is last argument
	var addr = args[args.length - 1];

	// string to expand is everything before last argument
	// var msg = "";
	// if (args.length > 2) {
	// 	msg = "{" + args.slice(0, args.length - 1).join('|') + "}"; // if multiple string to expand, combine them with "|", so that they get expanded in that order
	// 		}
	// else {
	// 	msg = args[0];
	// 	}
	
	// expand only once if all elements are the same ?
	// const allEqual = arr => arr.every( v => v === arr[0] )

	var result = [];
	var expansion = [];
	expansion = args.slice(0, args.length - 1).join(' '); 
	//expansion = expansion.concat(args.slice(0, args.length - 1));
	Max.outlet("send", addr);
	Max.outlet("expansion", expansion);

	for (let i = (args.length - 2); i >= 0 ; i--) {
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


// Use the 'outlet' function to send messages out of node.script's outlet
Max.addHandler("expand-brackets-first", (...args) => {
	
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

	//var regExp = /\[([^\]]+)\]/g; // does not work for nested braces
	var regExp = /\[(.*?]*)\]/g; // match all bracket patterns
	bracketMatches = expansion.match(regExp);
	var bracketMatches = bracketMatches.map(removeBrackets);
	function removeBrackets(value, index, array) {
	  return value.slice(1, -1);
	}
	Max.post("the rez", bracketMatches);


	for (let bracketMatch of bracketMatches) {
			if (bracketMatches.includes("{")) {
				// escape brackets and all -------------
				// WARNING : order of the 2 following escape functions do matter!!
				//Max.post("msg", msg);
				var escaped = escapeMultiSlashes(bracketMatch);
				escaped = escapePipeSign(escaped);
				escaped = escapeRegExp(String(escaped));
				// Max.outlet("escape", escaped);
				// expand with output limit set to 1000 (default)
				// see https://www.npmjs.com/package/braces for more info
				result.push(braces([escaped], { expand: true, maxLength: 1000, rangeLimit:1000 }));
			}
			else {
				result.push(bracketMatch);
			}
			//result = ["result"].concat(i+1, result);
	}

});


Max.addHandler("expandnew", (...args) => {
	
	// callback return address is last argument
	var addr = args[args.length - 1];
	var uid = args[args.length - 2];
	var expansion = [];
	expansion = args.slice(0, args.length - 2).join(' '); 
	Max.outlet("send", addr);
	Max.outlet("uid", uid);
	Max.outlet("expansion", expansion);

	const splittedAddress = expansion.split('/');	

	splittedAddress.forEach(function (item, index, array) {
		if (item.includes(' ')){
			array[index] = item.split(' ');
		}
		else array[index] = item;  	
  	//Max.post("el", index, array[index]);
	});

	var expandedAddresses = braceExpandArray(splittedAddress);

	//const inputArray = [["stereo", "quad"], [["foo", "bar"], ["ga", "bu", "zo"]], [["one", "oneone"],["two"],["three", "threethree"],["four"]]];
	//const inputArray = [["foo", "bar"], [["ga"], ["one", "two", "three"]], [["a", "b"], ["c"], ["d", "e"], ["f"], ["g", "h", "i"]]];
	//Max.post("remaing", inputArray.slice(1, -1));
		
	//const inputArray = [["a", "b"], [["c", "d"], ["e", "f", "g"]], [["h", "i"], ["j"], ["k", "l"], ["m"]]];
	// const inputArray = [["a", "b"], [["c", "d"]]];
	//Max.outlet("inputArray", JSON.stringify(expandedAddresses));

	var outputArray = distributeArray(expandedAddresses);
	
	result = ["result"].concat(outputArray);	
	Max.outlet(result);

});

function braceExpandArray(arr) {
  // Check if the input is an array
  if (!Array.isArray(arr)) {
    return arr;
  }

  // Initialize an empty result array
  const result = [];

  // Iterate through the elements in the input array
  for (const element of arr) {
    if (typeof element === 'string') {
      // If the element is a string, brace expand its
      var escaped = escapeMultiSlashes(element);
			escaped = escapePipeSign(escaped);
			escaped = escapeRegExp(String(escaped));
			var expandedElement = braces([escaped], { expand: true, maxLength: 1000, rangeLimit:1000 });
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
 	    const inputArrayMerged = inputArray.map((string) => stringExisting + '::' + string)	
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


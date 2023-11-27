const Max = require('max-api');
const micromatch = require('micromatch')
const { braces } = require('micromatch');
// This will be printed directly to the Max console
// Max.post(`Loaded the ${path.basename(__filename)} script`);


// Use the 'outlet' function to send messages out of node.script's outlet
Max.addHandler("expand", (...args) => {
	
	var addr = args[args.length - 1]; //callback address
	var uid = args[args.length - 2]; // uid of caller

	const requestDict = args[0];

	Max.outlet("send", addr); //set callback address on forward
	Max.outlet("uid", uid); // return request uid

	// fetch address to expand make sure it's an array
	var wildcard = requestDict.wildcard ?? [];
	wildcard = Array.isArray(wildcard) ? wildcard : [wildcard];

	// fetch parent addresses and make sure it's an array
	var namespace = requestDict.namespace ?? [];
	namespace = Array.isArray(namespace) ? namespace : [namespace];

	// expand namespace
	//namespace = ['foo.{1..10}', 'bar','ga','toto::bu','zo', 'toto::meu.{1..9}'];
	var expandedNamespace = braceExpandArray(namespace);
	//Max.post("expandedNamespace", expandedNamespace);

	// expand wildcard
	//wildcard = ['foo.4', 'bar', 'toto::meu.*'];
	var expandedWildcard = braceExpandArray(wildcard);
	//Max.post("expandedWildcard", expandedWildcard);
	
	// Parse namespace though wildcard
	var filteredResult = micromatch(expandedNamespace, expandedWildcard, {'nobrace':true});
	//Max.post(Object.values(filteredResult));

	// output result
	requestDict.result = filteredResult;
	Max.outlet(requestDict);

	// filteredResult = ["filteredResult"].concat(Object.values(filteredResult));
	// Max.outlet(filteredResult);

});

// Use the 'outlet' function to send messages out of node.script's outlet
Max.addHandler("longestPathBeforeWildcard", (...args) => {
	var addr = args[args.length - 1]; //callback address
	var uid = args[args.length - 2]; // uid of caller

	const requestDict = args[0];

	Max.outlet("send", addr); //set callback address on forward
	Max.outlet("uid", uid); // return request uid

	var input = requestDict.address;
	var result = splitStrings(input, '::');

	Max.post("result", result);
});

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
function escapeDoubleColon(string) {
  // change double colon to forward slashes
	return string.replace(/\:+/g, '/'); // $& means the whole matched string

}

function braceExpandArray(arr) {
  // Check if the input is an array
  //if (!Array.isArray(arr)) {
  //  //return arr;
  //  arr = [arr];
  //}

  // Initialize an empty result array
  var result = [];

  // Iterate through the elements in the input array
  for (const element of arr) {
    if (typeof element === 'string') {
      // If the element is a string, brace expand its
      const escaped = escapePipeSign(escapeMultiSlashes(element));
      //const escaped = escapePipeSign(escapeMultiSlashes(element));
			const expandedElement = braces(escaped, { expand: true, maxLength: 1000, rangeLimit:1000 });
      result = result.concat(expandedElement);
    } else if (Array.isArray(element)) {
      // If the element is another array, recursively call the function
      // to process the nested array
      const nestedResult = braceExpandArray(element);
      result = result.concat(nestedResult);
    } else {
      // If the element is not a string or array, push it as is
      result.push(element);
    }
  }

  return result;
}


/**
 * Given an array of strings, return an array of arrays, containing the
 * strings split at the given separator
 * @param {!Array<!string>} a
 * @param {string} sep
 * @returns {!Array<!Array<string>>}
 */
const splitStrings = (a, sep = '/') => a.map(i => i.split(sep));



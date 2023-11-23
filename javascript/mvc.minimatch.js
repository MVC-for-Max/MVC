const Max = require('max-api');
const micromatch = require('micromatch')
const { braces } = require('micromatch');
// This will be printed directly to the Max console
// Max.post(`Loaded the ${path.basename(__filename)} script`);


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

	// expand namespace
	var myNamespace = ['foo.{1..10}', ['bar','ga'],'bu','zo', 'meu.{1..9}'];
	var expandedNamespace = braceExpandArray(myNamespace);
	//Max.post("expandedNamespace", expandedNamespace);

	// expand wildcard
	var myWildcard = ['foo.4', ['bar'], 'meu.{5..7}'];
	var expandedWildcard = braceExpandArray(myWildcard);
	//Max.post("expandedWildcard", expandedWildcard);
	
	// Parse namespace though wildcard
	var filteredResult = micromatch(expandedNamespace, expandedWildcard);
	//Max.post(Object.values(filteredResult));

	// output result
	filteredResult = ["filteredResult"].concat(Object.values(filteredResult));
	Max.outlet(filteredResult);

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
      var escaped = escapeMultiSlashes(element);
			escaped = escapePipeSign(escaped);
			escaped = escapeRegExp(String(escaped));
			var expandedElement = braces(escaped, { expand: true, maxLength: 1000, rangeLimit:1000 });
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
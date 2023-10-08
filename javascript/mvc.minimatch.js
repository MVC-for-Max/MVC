const Max = require('max-api');
const micromatch = require('micromatch')
const { braces } = require('micromatch');
// This will be printed directly to the Max console
// Max.post(`Loaded the ${path.basename(__filename)} script`);

var expand = require('expand-braces');


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

	var myNamespace = ['foo', 'bar','ga','bu','zo', 'meu.{1..10}'];
	var expandedNamespace = expand(myNamespace);
	//Max.post("expandedNamespace", expandedNamespace);
	
	var myWildcard = ['meu.{5..7}'];
	var expandedWildcard = expand(myWildcard);
	//Max.post("expandedWildcard", expandedWildcard);
	
	
	//Max.post(braces('{01..05}', { expand: true, maxLength: 1000, rangeLimit:1000 }));
	
	var filteredResult = micromatch(expandedNamespace, ['foo', 'meu*']);
	//Max.post(Object.values(filteredResult));

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


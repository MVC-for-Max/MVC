inlets = 1;
outlets = 1;

let childdict = new Dict();
childdict.quiet = 1;

let parentdict = new Dict();
parentdict.quiet = 1;

let modelDict = new Dict();
modelDict.quiet = 1;
modelDict.name = "mvc.models.dict";
	
let inputsDict = new Dict();
inputsDict.quiet = 1;
inputsDict.name = "mvc.inputs.dict";

let parametersValuesDict = new Dict();
parametersValuesDict.quiet = 1;
parametersValuesDict.name = "mvc.parameters.values.dict";

let statesValuesDict = new Dict();
statesValuesDict.quiet = 1;
statesValuesDict.name = "mvc.states.values.dict";

let model_UID = 0;

let previousAddresses = [];
let currentAddresses = [];
let modelAddressDict = new Dict();
modelAddressDict.name = "modelAddressDict";
modelAddressDict.quiet = 1;


function braceExpand(str) {
  const ast = parse(str);
  //post('the chain:', ast, '\n');
  outlet(0, expandSeq([""], ast)); 
  return;// expandSeq([""], ast);
}

function braceExpandArray(strArray){
    
    let resultArray = [];
    strArray.forEach(function (item, index) {
        const ast = parse(item);
        //post('toto', ast, '\n');
        var res = expandSeq([""], ast);
        //post('res', res, '\n');
        resultArray.push(res);
    });
    
    return resultArray;
}


/* ---------------- EXPAND AND DISTRIBUTE OVER PARENT NAMESPACE ---------------- */

function braceExpandOnParents(attrDictName)
{
	childdict.name = attrDictName;
		
    var uid = childdict.get('uid');;
    //post('uid:', uid, '\n');
    var parentUid = childdict.get('parent');
    //post('parentuid:', uid, '\n');
    
    parentdict.name = parentUid + '.attr';
    
    // fetch address to expand make sure it's an array
	var addressToExpand = childdict.get('address') ?? [];
	addressToExpand = Array.isArray(addressToExpand) ? addressToExpand : [addressToExpand];
    //post('addressToExpand:', addressToExpand, '\n');

	// fetch parent addresses and make sure it's an array
	var parentAddresses = parentdict.get('addresslist') ?? [];
	parentAddresses = Array.isArray(parentAddresses) ? parentAddresses : [parentAddresses];
	//post('parentAddresses', parentAddresses);

	var expandedAddresses;
	expandedAddresses = braceExpandArray(addressToExpand);
    childdict.replace('expandedAddresses', expandedAddresses);
	//post('expandedAddresses', expandedAddresses);
    
    // DISTRIBUTE EXPANDED ADDRESSES OVER PARENT NODE'S ADDRESSES
    var adddressIndex = 0; //the address index in the final addresslist
	var addresslist = []; // the final address list
	var parentmap = [];		// an array mapping each address to the index of the parent addresses
	var childrenmap = []; // a nested array mapping parent index to an array of corresponding child addresses indices

	if (parentdict.get('uid') == null){ // If no parent, consider the relative address as absolute
		addresslist = expandedAddresses.flat();
		//Max.post('addresslist flattened', addresslist);
		var tmpArray = [];
		for (var i = 0; i < addresslist.length; i++) {
   		parentmap.push(1);
   		tmpArray.push(i+1);
		}
		childrenmap.push(tmpArray);
	}	
	else if (parentdict.get('uid') != childdict.get('uid')){ //concat on parent address
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
					childrenmap.push(i+1);
					adddressIndex++;
					childIndexArray.push(adddressIndex);
				}
				else{
					//Max.post("youhou",childAdd )
				}
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

	childdict.replace('addresslist', addresslist);
    childdict.replace('parentmap', parentmap);
    childdict.replace('childrenmap', childrenmap);

	outlet(0, 'bang');
}

/* ---------------- PARSEUR ---------------- */

function parse(str) {
  let i = 0;

  function parseSequence() {
    const seq = [];
    while (i < str.length && str[i] !== '}') {
      if (str[i] === '{') {
        i++;
        seq.push(parseChoices());
      } else {
        seq.push(parseLiteral());
      }
    }
    return seq;
  }

  function parseLiteral() {
    let start = i;
    while (i < str.length && !"{},}".includes(str[i])) i++;
    return str.slice(start, i);
  }

  function parseChoices() {
    const choices = [];
    let current = [];

    while (i < str.length && str[i] !== '}') {
      if (str[i] === ',') {
        choices.push(current);
        current = [];
        i++;
      } else if (str[i] === '{') {
        i++;
        current.push(parseChoices());
      } else {
        current.push(parseLiteral());
      }
    }
    i++;

    choices.push(current);

    return normalize(choices);
  }

  return parseSequence();
}

/* ---------------- NORMALISATION DES RANGES ---------------- */

function normalize(choices) {
  if (choices.length === 1 && choices[0].length === 1 && typeof choices[0][0] === "string") {
    const s = choices[0][0];
    const m = s.match(/^([^.]*)\.\.([^.]*)\.?([^.]+)?$/);
    if (m) {
      const [, a, b, step] = m;
      return { range: [a, b, step] };
    }
  }
  return { choices };
}

/* ---------------- EXPANSION ---------------- */

function expandSeq(list, seq) {
  for (const node of seq) {
    if (typeof node === "string") {
      for (let i = 0; i < list.length; i++) list[i] += node;
    }
    else if (node.range) {
      list = expandRange(list, node.range);
    }
    else if (node.choices) {
      let out = [];
      for (const choice of node.choices) {
        out = out.concat(expandSeq([...list], choice));
      }
      list = out;
    }
    else {
      list = expandSeq(list, node);
    }
  }
  return list;
}

/* ---------------- RANGES SANS ZERO-PADDING ---------------- */

function expandRange(list, [rawA, rawB, rawStep]) {
  const expanded = bashRangeNoPad(rawA, rawB, rawStep);

  if (!expanded) {
    return list.map(x => x + `{${rawA}..${rawB}${rawStep ? `..${rawStep}` : ""}}`);
  }

  const out = [];
  for (const v of expanded) {
    for (const base of list) out.push(base + v);
  }
  return out;
}

function bashRangeNoPad(a, b, stepStr) {
  const isNumA = /^-?\d+$/.test(a);
  const isNumB = /^-?\d+$/.test(b);

  let step = stepStr ? parseInt(stepStr, 10) : 1;
  if (step === 0) return [];

  /* --- NUMERIC RANGE (NO PADDING) --- */
  if (isNumA && isNumB) {
    const A = parseInt(a, 10);
    const B = parseInt(b, 10);

    if (step < 0) return null; // bash: illegal

    const dir = A <= B ? 1 : -1;
    const out = [];

    if (dir === 1) {
      for (let x = A; x <= B; x += step) out.push(String(x));
    } else {
      for (let x = A; x >= B; x -= step) out.push(String(x));
    }

    return out;
  }

  /* --- ALPHABETIC RANGE --- */
  if (a.length === 1 && b.length === 1) {
    const A = a.charCodeAt(0);
    const B = b.charCodeAt(0);

    if (step < 0) return null;

    const dir = A <= B ? 1 : -1;
    const out = [];

    if (dir === 1) {
      for (let x = A; x <= B; x += step) out.push(String.fromCharCode(x));
    } else {
      for (let x = A; x >= B; x -= step) out.push(String.fromCharCode(x));
    }

    return out;
  }

  return null;
}

/* ----------------------- */
/* declare the model */


function declaremodel2(attrDictName)
{
	childdict.name = attrDictName;
		
  var uid = childdict.get('uid');;
  //post('uid:', uid, '\n');
  var parentUid = childdict.get('parent');
  //post('parentuid:', uid, '\n');
  
  parentdict.name = parentUid + '.attr';
    
  // fetch address to expand make sure it's an array
	var addressToExpand = childdict.get('address') ?? [];
	addressToExpand = Array.isArray(addressToExpand) ? addressToExpand : [addressToExpand];
  //post('addressToExpand:', addressToExpand, '\n');

	// fetch parent addresses and make sure it's an array
	var parentAddresses = parentdict.get('addresslist') ?? [];
	parentAddresses = Array.isArray(parentAddresses) ? parentAddresses : [parentAddresses];
	//post('parentAddresses', parentAddresses, '\n');

	var expandedAddresses;
	expandedAddresses = braceExpandArray(addressToExpand);
  childdict.replace('expandedAddresses', expandedAddresses);
	//post('expandedAddresses', expandedAddresses, '\n');
    
    // DISTRIBUTE EXPANDED ADDRESSES OVER PARENT NODE'S ADDRESSES
  var adddressIndex = 0; //the address index in the final addresslist
	var addresslist = []; // the final address list
	var parentmap = [];		// an array mapping each address to the index of the parent addresses
	var childrenmap = []; // a nested array mapping parent index to an array of corresponding child addresses indices

	if (parentdict.get('uid') == null){ // If no parent, consider the relative address as absolute
		addresslist = expandedAddresses.flat();
		//post('addresslist flattened', addresslist, '\n');
		var tmpArray = [];
		for (var i = 0; i < addresslist.length; i++) {
   		parentmap.push(1);
   		tmpArray.push(i+1);
		}
		childrenmap.push(tmpArray);
	}	
	else if (parentdict.get('uid') != childdict.get('uid')){ //concat on parent address
		for (let i = 0; i < parentAddresses.length; i++) {
			var childIndexArray = [];
			var addressesArrayForThisParentAddress = expandedAddresses[i%expandedAddresses.length];
			//post('addressesArrayForThisParentAddress', addressesArrayForThisParentAddress, '\n');
			for (let j = 0; j < addressesArrayForThisParentAddress.length; j++) {
				var childAdd = addressesArrayForThisParentAddress[j];
				if (childAdd!= 'none'){
					var concatAddress = parentAddresses[i] + '/' + childAdd;
					//post('concatAddress', concatAddress, '\n');
					addresslist.push(concatAddress);					
					childrenmap.push(i+1);
					adddressIndex++;
					childIndexArray.push(adddressIndex);
				}
				else{
					//post("youhou",childAdd, '\n');
				}
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

	childdict.replace('addresslist', addresslist);
  childdict.replace('parentmap', parentmap);
  childdict.replace('childrenmap', childrenmap);


    //////////////////////////////////////////////////////////////
	// DECLARE THE MODEL


	currentAddresses = addresslist;
	currentAddresses = (currentAddresses == null) ? [] : (Array.isArray(currentAddresses) ? currentAddresses : [currentAddresses]);

	// Check if any of these addresses has already been registered in namespace
	// from a different parameter instance (different UID).
	// Return with exit code if this is the case.
	for (var i = 0; i < (currentAddresses.length); i++) {
		var theAdd = currentAddresses[i].replace(/\//g, '::');
        //post("current address:", theAdd + '\n');
		var theUID = modelDict.get(theAdd+"::uid");
        //post("current address UID :",theUID + '\n');
		if (theUID == null) break;	
		else if (uid != theUID[0]) {
				//post('Model', currentAddresses[i], 'is already in the namespace.\n')
				outlet(0, -1); // error code when address already exists
				return;
		}	
	}

	// get previous addresslist and make sure it's an array
	previousAddresses = modelAddressDict.get(uid);
	previousAddresses = (previousAddresses == null) ? [] : (Array.isArray(previousAddresses) ? previousAddresses : [previousAddresses]);
	
	// update nodeUID / address storage for this node 
	(currentAddresses.length == 0) ? modelAddressDict.remove(uid.toString()) : modelAddressDict.set(uid, currentAddresses);
	
	// compare new addresses with previous addresses for this node
	var missingAdresses = findGoneItems(currentAddresses, previousAddresses);
	//post('missingAdresses', missingAdresses.toString(), '\n');
	
	// remove gone addresses only for values
	for (var i = 0; i < (missingAdresses.length); i++) {
		var theAdd = missingAdresses[i].replace(/\//g, '::');
		//modelDict.remove(theAdd);
		parametersValuesDict.remove(theAdd);
		statesValuesDict.remove(theAdd);
		//inputsDict.remove(theAdd);
		//post('removing', theAdd, '\n');
	}

	for (var i = 0; i < (previousAddresses.length); i++) {
		var theAdd = previousAddresses[i].replace(/\//g, '::');
		modelDict.remove(theAdd);
		inputsDict.remove(theAdd);
	}
	
	// add new addresses in model dict
	for (var i = 0; i < (currentAddresses.length); i++) {
		var theAdd = currentAddresses[i].replace(/\//g, '::');
		//post('add', i, uid, theAdd, "\n");
		var addressUID = [uid, i + 1];
		// parametersDict.replace(theAdd + "::uid", addressUID);
		modelDict.replace(theAdd + "::uid", addressUID);
	}
	
	// return 1 if init succeed
	outlet(0, currentAddresses.length);
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


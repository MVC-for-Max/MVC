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

/* ---------------- PARSEUR ---------------- */

function asArray(v) {
    return v == null ? [] : (Array.isArray(v) ? v : [v]);
}

function replaceSlashes(str) {
    return str.replace(/\//g, '::');
}


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
    for (let s = 0; s < seq.length; s++) {
        const node = seq[s];

        if (typeof node === "string") {
            for (let i = 0; i < list.length; i++) {
                list[i] += node;
            }
        }
        else if (node.range) {
            list = expandRange(list, node.range);
        }
        else if (node.choices) {
            const out = [];
            for (let c = 0; c < node.choices.length; c++) {
                const expanded = expandSeq(list.slice(), node.choices[c]);
                for (let i = 0; i < expanded.length; i++) {
                    out.push(expanded[i]);
                }
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

function braceExpandArray(strArray) {
    const len = strArray.length;
    const result = new Array(len);

    for (let i = 0; i < len; i++) {
        result[i] = expandSeq([""], parse(strArray[i]));
    }
    return result;
}


/* ----------------------- */
/* declare the model */


function declaremodel2(attrDictName) {

    childdict.name = attrDictName;

    const uid = childdict.get('uid');
    const parentUid = childdict.get('parent');

    parentdict.name = parentUid + '.attr';

    const addressToExpand = asArray(childdict.get('address'));
    const parentAddresses = asArray(parentdict.get('addresslist'));

    const expandedAddresses = braceExpandArray(addressToExpand);
    childdict.replace('expandedAddresses', expandedAddresses);

    let addresslist = [];
    let parentmap = [];
    let childrenmap = [];

    if (parentdict.get('uid') == null) {
        addresslist = expandedAddresses[0] || [];
        const tmp = new Array(addresslist.length);
        for (let i = 0; i < addresslist.length; i++) {
            parentmap[i] = 1;
            tmp[i] = i + 1;
        }
        childrenmap[0] = tmp;
    }
    else if (parentdict.get('uid') !== uid) {

        let addressIndex = 0;

        for (let i = 0; i < parentAddresses.length; i++) {
            const childArray = [];
            const exp = expandedAddresses[i % expandedAddresses.length];

            for (let j = 0; j < exp.length; j++) {
                const childAdd = exp[j];
                if (childAdd !== 'none') {
                    addresslist.push(parentAddresses[i] + '/' + childAdd);
                    childArray.push(++addressIndex);
                }
            }
            parentmap.push(childArray);
        }
    }
    else {
        addresslist = expandedAddresses[0] || [];
        parentmap = [1];
        childrenmap = [1];
    }

    childdict.replace('addresslist', addresslist);
    childdict.replace('parentmap', parentmap);
    childdict.replace('childrenmap', childrenmap);

    /* -------- namespace registration -------- */

    const currentAddresses = asArray(addresslist);

    for (let i = 0; i < currentAddresses.length; i++) {
        const key = replaceSlashes(currentAddresses[i]) + "::uid";
        const existing = modelDict.get(key);
        if (existing && existing[0] !== uid) {
            outlet(0, -1);
            return;
        }
    }

    const previousAddresses = asArray(modelAddressDict.get(uid));
    modelAddressDict.set(uid, currentAddresses);

    const gone = findGoneItems(currentAddresses, previousAddresses);

    for (let i = 0; i < gone.length; i++) {
        const key = replaceSlashes(gone[i]);
        parametersValuesDict.remove(key);
        statesValuesDict.remove(key);
    }

    for (let i = 0; i < previousAddresses.length; i++) {
        const key = replaceSlashes(previousAddresses[i]);
        modelDict.remove(key);
        inputsDict.remove(key);
    }

    for (let i = 0; i < currentAddresses.length; i++) {
        const key = replaceSlashes(currentAddresses[i]) + "::uid";
        modelDict.replace(key, [uid, i + 1]);
    }

    outlet(0, currentAddresses.length);
}


function findGoneItems(current, previous) {
    const currentSet = new Set(current);
    const missing = [];

    for (let i = 0; i < previous.length; i++) {
        if (!currentSet.has(previous[i])) {
            missing.push(previous[i]);
        }
    }
    return missing;
}


function empty(){
	updateDictionaries();
}

function clear(){
	previousAddresses = [];
}


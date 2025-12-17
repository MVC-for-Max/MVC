inlets = 1;
outlets = 1;

function braceExpand(str) {
  const ast = parse(str);
  outlet(0, expand(ast)); 
  return; //expand(ast);
}

/* ---------------- PARSER ---------------- */

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

    choices.push(current);
    i++; // skip '}'

    return normalizeChoices(choices);
  }

  return parseSequence();
}

/* ---------------- NORMALISATION DES RANGES ---------------- */

function normalizeChoices(choices) {
  // Cas spécial : un seul élément dans le choix => peut être un range
  if (choices.length === 1 && choices[0].length === 1 && typeof choices[0][0] === "string") {
    const lit = choices[0][0];
    const m = lit.match(/^(\d+|\w)\.\.(\d+|\w)$/);
    if (m) {
      const [, a, b] = m;
      return { range: [a, b] };
    }
  }
  return { choices };
}

/* ---------------- EXPANSION ---------------- */

function expand(ast) {
  return expandSeq([""], ast);
}

function expandSeq(list, seq) {
  for (const node of seq) {
    if (typeof node === "string") {
      for (let i = 0; i < list.length; i++) list[i] += node;
    }
    else if (node.range) {
      list = expandRange(list, node.range);
    }
    else if (node.choices) {
      let result = [];
      for (const choice of node.choices) {
        result = result.concat(expandSeq([...list], choice));
      }
      list = result;
    }
    else {
      list = expandSeq(list, node);
    }
  }
  return list;
}

/* ---------------- RANGES ---------------- */

function expandRange(list, [a, b]) {
  const out = [];

  const isNum = !isNaN(a) && !isNaN(b);
  const isChar = a.length === 1 && b.length === 1;

  if (isNum) {
    const A = parseInt(a, 10);
    const B = parseInt(b, 10);
    const step = A <= B ? 1 : -1;
    const pad = a.length; // padding automatique

    for (let n = A; step === 1 ? n <= B : n >= B; n += step) {
      const s = String(n).padStart(pad, "0");
      for (const base of list) out.push(base + s);
    }
    return out;
  }

  if (isChar) {
    const A = a.charCodeAt(0);
    const B = b.charCodeAt(0);
    const step = A <= B ? 1 : -1;

    for (let c = A; step === 1 ? c <= B : c >= B; c += step) {
      const s = String.fromCharCode(c);
      for (const base of list) out.push(base + s);
    }
    return out;
  }

  // fallback: pas un range réel → littéral brut
  for (const base of list) out.push(base + `{${a}..${b}}`);
  return out;
}

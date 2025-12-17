inlets = 1;
outlets = 1;

function braceExpand(str) {
  const ast = parse(str);
  outlet(0, expandSeq([""], ast)); 
  return;// expandSeq([""], ast);
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

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
    i++; // skip '}'

    choices.push(current);

    return normalize(choices);
  }

  return parseSequence();
}

/* ---------------- NORMALISATION (BASH RULES) ---------------- */

function normalize(choices) {
  // Bash: range only if exactly one choice and that choice is exactly one string
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
  }
  return list;
}

/* ---------------- RANGE COMPATIBLE BASH ---------------- */

function expandRange(list, [rawA, rawB, rawStep]) {
  // If invalid range → Bash leaves literal unchanged
  const expanded = bashRange(rawA, rawB, rawStep);
  if (!expanded) {
    return list.map(x => x + `{${rawA}..${rawB}${rawStep ? `..${rawStep}` : ""}}`);
  }

  const out = [];
  for (const v of expanded) {
    for (const base of list) out.push(base + v);
  }
  return out;
}

/* ---------------- BASH RANGE ENGINE ---------------- */

function bashRange(a, b, stepStr) {
  const isNumA = /^-?\d+$/.test(a);
  const isNumB = /^-?\d+$/.test(b);

  let step = stepStr ? parseInt(stepStr, 10) : 1;

  // step = 0 → Bash gives empty expansion
  if (step === 0) return [];

  // NUMERIC RANGE
  if (isNumA && isNumB) {
    const A = parseInt(a, 10);
    const B = parseInt(b, 10);

    const width = Math.max(a.length, b.length);

    // negative steps not allowed in Bash
    if (step < 0) return null;

    const dir = A <= B ? 1 : -1;
    if ((dir < 0 && step > 0) || (dir > 0 && step < 0)) {
      // step direction mismatch → empty in Bash
      if ((dir < 0 && step > 0)) step = -step;
    }

    const out = [];
    if (dir === 1) {
      for (let x = A; x <= B; x += step) {
        out.push(String(x).padStart(width, "0"));
      }
    } else {
      for (let x = A; x >= B; x -= step) {
        out.push(String(x).padStart(width, "0"));
      }
    }
    return out;
  }

  // ALPHABETIC RANGE
  if (a.length === 1 && b.length === 1) {
    const A = a.charCodeAt(0);
    const B = b.charCodeAt(0);

    // Step > 0 only, negative forbidden
    if (step < 0) return null;

    const dir = A <= B ? 1 : -1;

    const out = [];
    if (dir === 1) {
      for (let c = A; c <= B; c += step) {
        out.push(String.fromCharCode(c));
      }
    } else {
      for (let c = A; c >= B; c -= step) {
        out.push(String.fromCharCode(c));
      }
    }
    return out;
  }

  // Otherwise → not a valid range
  return null;
}

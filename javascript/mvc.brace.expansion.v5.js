inlets = 1;
outlets = 1;

function braceExpand(str) {
  const ast = parse(str);
  outlet(0, expand(ast)); 
  return; //expand(ast);
}

/* ---------------- PARSEUR ---------------- */

function parse(str) {
  let i = 0;
  const n = str.length;

  function parseSequence() {
    const out = [];
    let buf = "";

    while (i < n && str[i] !== '}') {
      if (str[i] === '{') {
        if (buf) { out.push(buf); buf = ""; }
        i++; // skip {
        out.push(parseChoices());
      } else {
        buf += str[i++];
      }
    }
    if (buf) out.push(buf);
    return out;
  }

  function parseChoices() {
    const choices = [];
    let seq = [];

    while (i < n && str[i] !== '}') {
      if (str[i] === ',') {
        choices.push(seq.length ? seq : [""]);
        seq = [];
        i++;
      } else if (str[i] === '{') {
        i++; // skip {
        seq.push(parseChoices());
      } else {
        seq.push(parseLiteral());
      }
    }

    choices.push(seq.length ? seq : [""]);
    i++; // skip }

    return { choices };
  }

  function parseLiteral() {
    let start = i;
    while (i < n && str[i] !== '{' && str[i] !== '}' && str[i] !== ',') i++;
    return str.slice(start, i);
  }

  return parseSequence();
}

/* ---------------- EXPANSION ---------------- */

function expand(node) {
  return expandSequence([""], node);
}

function expandSequence(list, seq) {
  for (const part of seq) {
    if (typeof part === "string") {
      for (let i = 0; i < list.length; i++) list[i] += part;
    } else if (Array.isArray(part)) {
      list = expandSequence(list, part);
    } else if (part.choices) {
      let merged = [];
      for (const choice of part.choices) {
        merged = merged.concat(expandSequence(list.slice(), choice));
      }
      list = merged;
    }
  }
  return applyRanges(list);
}

/* ---------------- RANGES (a..z , 1..10) ---------------- */

function applyRanges(list) {
  const out = [];
  for (let s of list) {
     const m = s.match(/^(.*)\{([^{}]+)\}(.*)$/);
     if (!m) { out.push(s); continue; }

     const [_, pre, inside, post] = m;
     const r = inside.split("..");
     if (r.length === 2) {
       const [a, b] = r;
       const tmp = [];

       if (!isNaN(a) && !isNaN(b)) {
         const A = +a, B = +b;
         const step = A <= B ? 1 : -1;
         for (let x = A; x !== B + step; x += step) {
           tmp.push(pre + x + post);
         }
       } else if (a.length === 1 && b.length === 1) {
         const A = a.charCodeAt(0), B = b.charCodeAt(0);
         const step = A <= B ? 1 : -1;
         for (let c = A; c !== B + step; c += step) {
           tmp.push(pre + String.fromCharCode(c) + post);
         }
       }
       out.push(...tmp);
     } else {
       out.push(s);
     }
  }
  return out;
}

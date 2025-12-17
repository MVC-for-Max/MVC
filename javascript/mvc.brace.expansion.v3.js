inlets = 1;
outlets = 1;

function braceExpand(str) {
  const ast = parseBraces(str);
  outlet(0, expandAST(ast)); 
  return;// expandAST(ast);
}

/* ---------------- PARSER ---------------- */

function parseBraces(str) {
  const root = [];
  let stack = [root];
  let buf = "";
  let i = 0;
  const n = str.length;

  while (i < n) {
    const c = str[i];

    if (c === '{') {
      if (buf) {
        stack[stack.length - 1].push(buf);
        buf = "";
      }
      const group = [];
      stack[stack.length - 1].push(group);
      stack.push(group);
      i++;
    }
    else if (c === '}') {
      if (buf) {
        stack[stack.length - 1].push(buf);
        buf = "";
      }
      stack.pop();
      i++;
    }
    else if (c === ',' && stack.length > 1) {
      if (buf) {
        stack[stack.length - 1].push(buf);
        buf = "";
      }
      // New option inside the current group
      stack[stack.length - 1].push("__SPLIT__");
      i++;
    }
    else {
      buf += c;
      i++;
    }
  }

  if (buf) stack[stack.length - 1].push(buf);

  return normalize(root);
}

// Convert ["a", "__SPLIT__", "b", "__SPLIT__", "c"] → [["a"],["b"],["c"]]
function normalize(node) {
  if (!Array.isArray(node)) return node;
  
  let parts = [];
  let current = [];
  
  for (let x of node) {
    if (x === "__SPLIT__") {
      parts.push(current);
      current = [];
    } else {
      current.push(normalize(x));
    }
  }
  parts.push(current);

  // If single part, not a choice → collapse
  if (parts.length === 1) return parts[0];
  return { choices: parts };
}

/* ---------------- EXPANDER ---------------- */

function expandAST(ast) {
  let acc = [''];
  return expandNode(acc, ast);
}

function expandNode(list, node) {
  if (typeof node === "string") {
    const out = new Array(list.length);
    for (let i = 0; i < list.length; i++) {
      out[i] = list[i] + node;
    }
    return out;
  }

  if (node.choices) {
    let out = [];
    for (let choice of node.choices) {
      const expanded = expandSequence(list, choice);
      out = out.concat(expanded);
    }
    return out;
  }

  // sequence
  return expandSequence(list, node);
}

function expandSequence(list, seq) {
  let acc = list;
  for (let elem of seq) {
    acc = expandNode(acc, elem);
  }
  return acc;
}

/* ---------------- UTILITAIRE : RANGE SUPPORT ---------------- */

(function patchRanges() {
  const oldNormalize = normalize;
  
  // Patch normalize to detect ranges "a..z" or "1..5"
  normalize = function(node) {
    if (typeof node === "string") {
      const idx = node.indexOf("..");
      if (idx !== -1) {
        const a = node.slice(0, idx);
        const b = node.slice(idx + 2);

        if (!isNaN(a) && !isNaN(b)) {
          // numeric
          const start = +a, end = +b;
          const step = start <= end ? 1 : -1;
          const out = [];
          for (let x = start; x !== end + step; x += step) out.push(String(x));
          return out;
        }

        if (a.length === 1 && b.length === 1) {
          // alphabetic
          const A = a.charCodeAt(0), B = b.charCodeAt(0);
          const step = A <= B ? 1 : -1;
          const out = [];
          for (let c = A; c !== B + step; c += step) {
            out.push(String.fromCharCode(c));
          }
          return out;
        }
      }
      return node;
    }
    return oldNormalize(node);
  };
})();

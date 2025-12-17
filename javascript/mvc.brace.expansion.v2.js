inlets = 1;
outlets = 1;

function braceExpand(str) {
  let result = [''];
  let i = 0;
  const n = str.length;

  while (i < n) {
    if (str[i] === '{') {
      let j = i + 1, depth = 1;
      while (j < n && depth > 0) {
        if (str[j] === '{') depth++;
        else if (str[j] === '}') depth--;
        j++;
      }

      const content = str.slice(i + 1, j - 1);

      const parts = parsePart(content);

      result = cartesian(result, parts);

      i = j;
    } else {
      // Append a literal block until next "{"
      let start = i;
      while (i < n && str[i] !== '{') i++;
      const block = str.slice(start, i);

      // add block to all entries
      for (let k = 0; k < result.length; k++) {
        result[k] += block;
      }
    }
  }
  outlet(0, result);
  return;
  //return result;
}


// Parse the content inside {...}
function parsePart(content) {
  // Detect range X..Y
  const idx = content.indexOf('..');
  if (idx !== -1) {
    const a = content.slice(0, idx);
    const b = content.slice(idx + 2);

    // numeric range
    if (!isNaN(a) && !isNaN(b)) {
      const start = parseInt(a, 10);
      const end = parseInt(b, 10);
      const step = start <= end ? 1 : -1;
      const out = [];
      for (let x = start; x !== end + step; x += step) out.push(String(x));
      return out;
    }

    // alphabetical range
    if (a.length === 1 && b.length === 1) {
      const start = a.charCodeAt(0);
      const end = b.charCodeAt(0);
      const step = start <= end ? 1 : -1;
      const out = [];
      for (let x = start; x !== end + step; x += step) {
        out.push(String.fromCharCode(x));
      }
      return out;
    }
  }

  // Otherwise, simple comma-separated list
  return content.split(',');
}


// Very fast Cartesian product
function cartesian(listA, listB) {
  const out = [];
  const lenA = listA.length;
  const lenB = listB.length;
  out.length = lenA * lenB;

  let idx = 0;
  for (let i = 0; i < lenA; i++) {
    const a = listA[i];
    for (let j = 0; j < lenB; j++) {
      out[idx++] = a + listB[j];
    }
  }
  return out;
}

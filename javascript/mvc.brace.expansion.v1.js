inlets = 1;
outlets = 1;

function braceExpand(input) {
  // Trouve la première paire d'accolades {...}
  const match = input.match(/\{([^{}]+)\}/);
  if (!match) {
    // Pas d'accolades → renvoie la chaîne telle quelle
    outlet(0, [input]);
    return [input];
  }

  const inside = match[1];
  const start = match.index;
  const end = start + match[0].length;

  let parts = [];

  // Gestion des plages {1..5} ou {a..e}
  const rangeMatch = inside.match(/^(.+)\.\.(.+)$/);
  if (rangeMatch) {
    let [_, a, b] = rangeMatch;

    // Détection chiffre ou lettre
    if (!isNaN(a) && !isNaN(b)) {
      // plage numérique
      const startNum = parseInt(a, 10);
      const endNum = parseInt(b, 10);
      const step = startNum <= endNum ? 1 : -1;
      for (let i = startNum; i !== endNum + step; i += step) {
        parts.push(i);
      }
    } else if (a.length === 1 && b.length === 1) {
      // plage alphabétique
      const startCode = a.charCodeAt(0);
      const endCode = b.charCodeAt(0);
      const step = startCode <= endCode ? 1 : -1;
      for (let c = startCode; c !== endCode + step; c += step) {
        parts.push(String.fromCharCode(c));
      }
    } else {
      // Si ce n’est ni une seule lettre ni des nombres → fallback split
      parts = inside.split(',');
    }
  } else {
    // {a,b,c}
    parts = inside.split(',');
  }

  // Avant {...}, après {...}
  const prefix = input.slice(0, start);
  const suffix = input.slice(end);

  // Expansion récursive
  let results = [];
  for (const p of parts) {
    const expanded = braceExpand(prefix + p + suffix);
    results = results.concat(expanded);
  }
  //return results;
  outlet(0, results);

}

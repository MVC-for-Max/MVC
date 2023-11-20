// mvc.dict.flatten.js : output each node of a dictionary tree
// This version of flatten will output *both* the dictionary at intermediate levels and the leaf at the end of the tree.
// This enables to have parameter stored as dictionary.

inlets = 1;
outlets = 3;

function loadbang() {
	outlet(2, 'bang');
}

var prefixConcat = [];
var _separator = '::';
var _prefix = '';

if (jsarguments.length>1)
	var _separator =jsarguments[1];
if (jsarguments.length>2)
	var _prefix =jsarguments[2];


var d = new Dict();

function dictionary(dictname) {
	prefixConcat = [];
    d.name = dictname;
    flattenSimple(JSON.parse(d.stringify()));
	outlet(2, 'done');
}


// simplified version of the flatten function. 
function flattenSimple(d) {	
		
    Object.keys(d).forEach(function (key) {

		var tempArray = [];
		var arrayOfObjectsFlag = 0;
		
        var value = d[key];
        var value_type = typeof (value);
        if (value_type === "object") {
            if (Array.isArray(value)) { value_type = "array" } else { value_type = "json" }
        }

        //post(value, value_type, '\n')
        switch (value_type) {
            case 'array':
                value.forEach(function (item, index) {
                    if (typeof (item) === "object") {
						prefixConcat.push(key + '[' + index + ']');
						arrayOfObjectsFlag = 1;
                        flattenSimple(item);
						prefixConcat.pop();

					}
					else {
						arrayOfObjectsFlag = 0;
						tempArray.push(item);
                    }
                });

				if (arrayOfObjectsFlag==0) {
					prefixConcat.push(key);
					outlet(1, _prefix + prefixConcat.join(_separator));
					outlet(0, tempArray);
					prefixConcat.pop();
					arrayOfObjectsFlag = 0;
				}				
                break;

            case 'string':
				prefixConcat.push(key);
				outlet(1, _prefix + prefixConcat.join(_separator));
				outlet(0, value);
				prefixConcat.pop();
                break;

            case 'number':
                prefixConcat.push(key);
				outlet(1, _prefix + prefixConcat.join(_separator));
				outlet(0, value);
				prefixConcat.pop();
				break;

            case 'json':
				prefixConcat.push(key);

				// the following condition will output a node as a named dictionary
				// skip this if you only need the leaves of the tree
				if (true) { 
					var localD = new Dict();
					var jsonified = JSON.stringify(value);
					localD.parse(jsonified);
					outlet(1, _prefix + prefixConcat.join(_separator));
					outlet(0, "dictionary", localD.name);
				}

				flattenSimple(value);
				prefixConcat.pop();
                break;

            default:
            	break;
               //post('nope\n');
        }
    });
}


function separator(sep) {
	_separator = (sep === undefined) ? '' : sep;
}

function prefix(pfx) {	
	_prefix = (pfx === undefined) ? '' : pfx;
}

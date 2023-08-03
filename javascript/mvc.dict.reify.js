// mvc.dict.flatten.js : output each node of a dictionary tree
// This version of flatten will output *both* the dictionary at intermediate levels and the leaf at the end of the tree.
// This enables to have parameter stored as dictionary.

inlets = 1;
outlets = 2;

function loadbang() {
	outlet(1, 'bang');
}

var prefixConcat = [];
var _separator = '::';
var _prefix = '';

if (jsarguments.length>1)
	var _separator =jsarguments[1];
if (jsarguments.length>2)
	var _prefix =jsarguments[2];


var in_dict = new Dict();
var out_dict = new Dict();

function dictionary(dictname) {
	prefixConcat = [];
    in_dict.name = dictname;
	out_dict.clear();
    flattenSimple(JSON.parse(in_dict.stringify()));
	outlet(0, 'dictionary', out_dict.name);
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

        //post("value", value, value_type, '\n')
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
					if (tempArray[0]=="/dictionary"){ //pointer to dict
						var dict_as_pointer = new Dict();
						dict_as_pointer.name = tempArray[1];
						prefixConcat.push(key);
						var newKey = _prefix + prefixConcat.join(_separator);
						flattenSimple(JSON.parse(dict_as_pointer.stringify()));
						//out_dict.replace(newKey, dict_as_pointer);
						prefixConcat.pop();
					}
					else { //regular array
						prefixConcat.push(key);
						var newKey = _prefix + prefixConcat.join(_separator);
						out_dict.replace(newKey, tempArray);
						prefixConcat.pop();
					}
				}				
                break;

            case 'string':
				prefixConcat.push(key);
				var newKey = _prefix + prefixConcat.join(_separator);
				out_dict.replace(newKey, value);
				prefixConcat.pop();
                break;

            case 'number':
                prefixConcat.push(key);
				var newKey = _prefix + prefixConcat.join(_separator);
				out_dict.replace(newKey, value);
				prefixConcat.pop();
				break;

            case 'json':
				prefixConcat.push(key);

				// the following condition will output a node as a named dictionary
				// skip this if you only need the leaves of the tree
				if (false) { 
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
	_separator = sep;
}

function prefix(pfx) {
	_prefix = pfx;
}

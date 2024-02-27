// mvc.brace.compression.js : compress a dictionary hierarchy or a list of addresses into a brace-compressed string

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

var dictFromList = new Dict();
var dict_items = [];

var d = new Dict();


function braceList()
{
	var a = arrayfromargs(arguments);
	dict_items = [];
	//dictFromList.clear;

	// clear dictionary
	Object.keys(dictFromList).forEach(function (key) {
		dictFromList.remove(key);
	});
	//post("hey");
	//post("keys", dictFromList.getkeys(), "\n");
	
	// feed slash separated items into a dictionary
	a.forEach(function (item){
		var aDictItem = item.split('/').join('::');
		//post(aDictItem, "\n");
		dictFromList.replace(aDictItem, 1);
	});

	//post("hey");
	//post("keys", dictFromList.get("Animalia").get("Arthropoda").get("Insecta").getkeys(), "\n");
	
	// brace compress the dictionary
	braceDict("dictionary", dictFromList.name);
}


function braceDict(dummy, dictname) {
	prefixConcat = [];
    d.name = dictname;

    //prefixConcat.push("{");
    var json_dict = JSON.parse(d.stringify());

    flattenSimple(json_dict);

    // if more than one key, surround the final quote by braces
    if (Object.keys(json_dict).length > 1) {
    	prefixConcat.unshift("{");
    	prefixConcat.push("}");
    }
    outlet(0, _prefix + prefixConcat.join(''));
	outlet(1, 'done');
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

            case 'json':
				prefixConcat.push(key);
				prefixConcat.push("/");
				
				// if more than one key, surround the final quote by braces
    			if (Object.keys(value).length > 1) {
    				prefixConcat.push("{");
    			}

				flattenSimple(value);
				
				// if more than one key, surround the final quote by braces
    			if (Object.keys(value).length > 1) {
    				prefixConcat.push("}");
    			}
				
				//prefixConcat.push("}");
				prefixConcat.push("|");
				//prefixConcat.pop();
                break;

			//case 'string':
            default:
               //post('nope\n');
				prefixConcat.push(key);
				prefixConcat.push("|");
				//prefixConcat.pop();
                break;
        }
    });
    prefixConcat.pop(); // remove last "|" after all keys have been processed
    //prefixConcat.push("}");
}


function separator(sep) {
	_separator = sep;
}

function prefix(pfx) {
	_prefix = pfx;
}



// mvc.wildcard-node.js
// filter dictionary based on wildcard query

const Max = require('max-api');


var d = new Dict();

// Use the 'outlet' function to send messages out of node.script's outlet
Max.addHandler("expand", (msg, dictname, addr) => {
	
	var result = [];
	
	d.name = dictname;
	var d_as_object = JSON.parse(d.stringify());
	
	var escaped = escapeMultiSlashes(msg);
		escaped = escapePipeSign(escaped);
		escaped = escapeRegExp(String(escaped));
			// Max.outlet("escape", escaped);
		if (!addr) addr = 'none';
		//------------------

	result = wildcardfilter(JSON.parse(d.stringify()), msg);
	
	
	Max.outlet("send", addr);
	Max.outlet("expansion", msg);
	//Max.outlet("escape", escaped);
	Max.outlet("count", result.length);	
	//result.forEach(element => Max.outlet(element));
	result = ["result"].concat(result);
	Max.outlet(result);
	Max.outlet("done");	

});

// simplified version of the flatten function. 
function wildcardfilter(d, msg) {	
		
    Object.keys(d).forEach(function (key) {

		var tempArray = [];
		
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
               //post('nope\n');
        }
    });
}

//https://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex
function escapeRegExp(string) {
  //return string.replace(/[.*+?^${}()|[\]\\]/g, '\\\\$&'); // $& means the whole matched string
	return string.replace(/[*+?^$|[\]\\]/g, '\\$&'); // $& means the whole matched string

}
function escapePipeSign(string) {
  //return string.replace(/[.*+?^${}()|[\]\\]/g, '\\\\$&'); // $& means the whole matched string
	return string.replace(/[|]/g, '\,'); // $& means the whole matched string

}
function escapeMultiSlashes(string) {
  //return string.replace(/[.*+?^${}()|[\]\\]/g, '\\\\$&'); // $& means the whole matched string
	return string.replace(/\/+/g, '/'); // $& means the whole matched string

}


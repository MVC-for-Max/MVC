autowatch = 1;
inlets = 2;
outlets = 2;

var cached_dictname = "";

function dictionary(dictname) {
	
	if (inlet) {
		cached_dictname = dictname;
		//post("check against", dictname, "\n");
		return;
	}

	if (cached_dictname === "") {
		outlet(1, "dictionary", dictname);
		return;
	}

	var d = new Dict(dictname);
	var o = JSON.parse(d.stringify());
	
	var d2 = new Dict(cached_dictname);
	var o2 = JSON.parse(d2.stringify());

	if (iterate(o, o2) == false) {
		outlet(1, "dictionary", dictname);
	}
	else {
		outlet(0, "dictionary", dictname);
	}
}

function iterate(o1, o2) {
	
	var keys1 = Object.keys(o1);
	var keys2 = Object.keys(o2);
	
	var sameKeys =
  		keys1.length === keys2.length &&
  		keys1.every(function (element) {
    		return keys2.indexOf(element) >= 0;
  		});
	
	if (!sameKeys) {
		//post("not same keys\n");
		return false;	
	}

	for (var key in o2) {
		//post("testing " + key + "\n");
		if (typeof o1[key] != typeof o2[key]) {
			//post("missing key or type\n");
			//post(o1[key] + ", " + typeof o1[key] + ", " + typeof o2[key] + "\n");
			return false;
		}
		if (typeof o1[key] === "object") {
			 //post("objects, drilling\n");
            if (!iterate(o1[key], o2[key])) return false;
		}
		else if (o1[key] != o2[key]) {
			 //post("value mismatch: " + o1[key] + " vs. " + o2[key] + "\n");
			return false;
		}
	}
	//post("all keys matched\n");
	return true;
}	


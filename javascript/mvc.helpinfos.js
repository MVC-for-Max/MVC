inlets=1;
outlets=1;

var dict;
var shortDesc = "";
var longDesc = "";
var category = ""; 
//var aimObjectsDict = new Dict("name");


function getInfos(objectName)
{

	//aimObjectsDict.readany("aim.helper.json");
	dict = max.getrefdict(objectName);
	if (typeof(dict) == "object") {
		digest = dict.get("digest");
		description = dict.get("description");
		category = dict.get("category");
		
		if(digest !== null) {outlet(0, objectName + "::digest", digest)};
		if(description !== null) {outlet(0, objectName + "::description", description)};
		if(category !== null) {outlet(0, objectName + "::category", category)};
		
		outlet(0, "done");
		dict.freepeer();
	}
}


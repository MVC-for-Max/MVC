// mvc.dict.flatten.js : output each node of a dictionary tree
// This version of flatten will output *both* the dictionary at intermediate levels and the leaf at the end of the tree.
// This enables to have parameter stored as dictionary.

inlets = 1;
outlets = 3;

_MVC_VERSION = 0.4;

function loadbang() {
	outlet(2, 'bang');
}


var d = new Dict();

function declare(uid, deviceName, deviceType){
	
	if (!deviceName) {
		outlet(1, "mvc.device says : please provide a device name.");
		return;
	}
	
	s_uid = [uid.toString(), 1];
	//d.name = "mvc.devices.dict";
	//d.clear();
	//d.replace(deviceName+"::uid", s_uid);
	//d.replace(deviceName+"::type", deviceName);
	//d.replace(deviceName+"::version", _MVC_VERSION);
	
	//var project_filepath = getProjectPath();
	//post(project_filepath);
	//d.replace(deviceName+"::filepath", project_filepath);
		
	d.name = "mvc.models.dict";
	d.replace(deviceName+"::uid", s_uid);
	//d.replace(deviceName+"::parent", "none");
	d.replace(deviceName+"::type", deviceType);
	//d.replace(deviceName+"::instances", instances);


	outlet(0, "bang")
}

function dictionary(dictname) {
	prefixConcat = [];
    d.name = dictname;
    flattenSimple(JSON.parse(d.stringify()));
	outlet(2, 'done');
}


// getProjectPath : retrieve current project's path
// this is the place where the /data folder will be read from (or created, failing that)

function getProjectPath(){
	
	var topLevelPatcher = gettoplevelpatcher(patcher);
	var path = topLevelPatcher.filepath;
	
	const shortPath = path.substring(0, path.lastIndexOf('/'));

	if (shortPath!=''){
		return shortPath + '/';
	}
	else {
		return 'undefined';	
	}
}

// gettoplevelpatcher : returns top level patcher object

function gettoplevelpatcher(aPatch){

	if (!aPatch.parentpatcher) {
		return aPatch;
		}
	else {
		var parentPatcher = gettoplevelpatcher(aPatch.parentpatcher);
		return parentPatcher;
	}
}
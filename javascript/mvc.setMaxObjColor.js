outlets = 0;
inlets  = 1;

var originalColor; 
var theBox;
var level = 0;
var initializing = 0;


function init(lev){
	//if (jsarguments.length>1) level = jsarguments[1];
	if (lev>=0){ level = lev};
	initParentBox(level);
}

		
function initParentBox(val){
	var currentPatcherLevel = this.patcher;
	//post("val", val, "\n");
	
	for (i = 0; i < val; i++){
		if (currentPatcherLevel.parentpatcher) {
			currentPatcherLevel = currentPatcherLevel.parentpatcher;
		}
	}
	theBox = currentPatcherLevel.box;
}

function isloading(val){

	// patch where the javascript is included
	//	var theBox = this.patcher.box;

	// for the record ...
	//var boxattributes = theBox.getboxattrnames();
	//for (i=0; i< boxattributes.length; i++){
	//	outlet(0, "attr", boxattributes[i],"\n");
	//}
	
	// if (!initialized) init();
	
	if (val && !initializing){
		originalColor = theBox.getboxattr("color");
		//post("original color", originalColor, "\n");
		theBox.setboxattr("color", [1, 0.4, 0, 1]); //set the parent box orangeish
		initializing = 1;
		}
	else{
		theBox.setboxattr("color", originalColor);
		initializing = 0;
	}
}



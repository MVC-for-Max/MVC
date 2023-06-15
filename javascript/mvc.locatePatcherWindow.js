/*
--------------------------------------------------------------
/*
	mvc.locatePatcherWindow.js
*/
function bang()
{
	 outlet(0, this.patcher.wind.location);
}

function locate(level)
{
	var currentPatcher = this.patcher;
	
	for (i=1;i<=level;i++){
		if (currentPatcher.parentpatcher){
			currentPatcher = currentPatcher.parentpatcher;
		}
		else {
			break;
		}
	}
	outlet(0, currentPatcher.wind.location);
}
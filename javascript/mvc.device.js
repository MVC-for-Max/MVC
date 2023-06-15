// mvc.device.js
// initialize the mvc.device

autowatch = 1;
inlets = 1;
outlets = 1;

function loadbang(){
	//if (!max.loadbangdisabled) { // do we need this?
	//	bang();
	//}
}

// getProjectPath : retrieve current project's path
// this is the place where the /data folder will be read from (or created, failing that)

function getProjectPath(){
	
	var topLevelPatcher = gettoplevelpatcher(patcher);
	var path = topLevelPatcher.filepath;
	
	const shortPath = path.substring(0, path.lastIndexOf('/'));

	if (shortPath!=''){
		outlet(0, shortPath + '/');
	}
	else {
		outlet(0, 'undefined');	
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

////////////////////////////////////////////////////////

// getPackagePath : returns package path
// this is assuming that the patcher holding this script (mvc.device) belongs to the package

function getPackagePath(){

	var thispath = patcher.filepath.split('/').slice(0, -3).join('/')+'/';
	outlet(0, thispath);
	
}

////////////////////////////////////////////////////////


// getGitSHA : retrieve current git hash code
// if branch is not provided, it will return the branch from the current head
// adapted from : https://stackoverflow.com/questions/34518389/get-hash-of-most-recent-git-commit-in-node

function getGitSHA(branch){

	var thispath = patcher.filepath.split('/').slice(0, -3).join('/')+'/';

	if (!branch) {
		var filename = thispath + '.git/HEAD';
		var f = new File(filename, 'read');
		var gitHead = f.readline();
		
		if (gitHead.indexOf(':') === -1) { // we are on the master branch
	    	outlet(0, 'master', gitHead.slice(0, 7)); 
		} 
		else { // we are on another branch
			var branchName = gitHead.slice(16, gitHead.length); // 16 = "ref: refs/heads/".length
			filename = thispath + '.git/' + gitHead.replace('ref: ','');		
			var g = new File(filename, 'read');
			gitHead = g.readline();
	    	outlet(0, branchName, gitHead.slice(0, 7));
		}
	}
	else {
		var filename = thispath + '.git/refs/heads/' + branch;
		var f = new File(filename, 'read');
		
		if (f.isopen) {
			var gitHead = f.readline();
    		outlet(0, branch, gitHead.slice(0, 7));
		}
		else {
			outlet(0, 'not_a_git_repo');
		}
	}
}
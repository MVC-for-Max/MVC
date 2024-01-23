const fs = require("fs")
const path = require('path');
const Max = require('max-api');

Max.addHandler("createfolder", (thepath, foldername) => {
		
	var newpath = thepath + foldername;
	
	// test if folder exists
	fs.access(newpath, function(error) {
		if (error) {
			Max.outlet(foldername, ' folder does not exist.');
			//console.log("Data folder does not exist.")
			fs.mkdir(newpath, { recursive: true }, function(err) {
  				if (err) {
    				//console.log(err)
					Max.outlet('ERROR','•', 'Failed creating', foldername, 'folder:', newpath);
  				} else {
    			//console.log("New directory successfully created:", newpath)
					Max.outlet('Created',foldername, 'folder:', newpath);
  					Max.outlet('SUCCESS',foldername);
				}
			})
		} else {
			Max.outlet(foldername, 'folder found.');
			Max.outlet('SUCCESS', foldername);
		}
	})

});

Max.outlet('ready');

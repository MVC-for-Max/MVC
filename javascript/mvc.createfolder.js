const fs = require("fs")
const path = require('path');
const Max = require('max-api');

Max.addHandler("createfolder", (thepath, foldername) => {

    const newpath = path.join(thepath, foldername);

    fs.mkdir(newpath, { recursive: true }, (err) => {

        if (err) {
            Max.outlet('ERROR','•','Failed creating', foldername,':', err.message);
            return;
        }

        Max.outlet('SUCCESS', foldername);
    });
});

Max.outlet('ready');

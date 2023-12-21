const path = require('path');
const Max = require('max-api');

// This will be printed directly to the Max console
Max.post(`Loaded the ${path.basename(__filename)} script`);

// Use the 'addHandler' function to register a function for a particular message
Max.addHandler("test", (...args) => {

	const theDict = args[0];
	Max.post('address', theDict.address);

		
});


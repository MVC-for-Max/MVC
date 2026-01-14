

# model init
When one create a mvc.model in a patcher, or when one changes its address or parent using a message, it send its uid to the register function of the device. From there:

- it check if its parent is initialized, if yes, it initializes, if not, it waits for its signal
	- then the initialization goes as follow:
	- add itself in the parent's node "pendingNodes" dictionary
	- expands its name with brace (if needed) to a list in `expandedAdressed`
	- combines its address with the parent's `addresslist`
	- check if any address is already in the namespace, if so, throw a warning and return
	- add all the addresses of `addresslist` to the mvc.models.dict
	
	- send an init signal for all mvc.inputs children so that they add themselves as pendingInputNodes
	- iterate this list to initialize all mvc.inputs child nodes
		- *child mvc.input init goes here*
		
	- send an init signal for all mvc.model children so that they add themselves as pendingModelNodes
	- iterate this list to initialize all mvc.models child nodes
		- *child mvc.input init goes here*
		
	- send notification to parent nodes in a recursive function, so that it removes the pending node and check if all nodes are gone, if so, 
	- send 
a node may contain several addresses
data can be attached to each address (if param or state) or no data (model, message)
a node is attached to a parent node
addresses of the child node are dispatched onto the parent node's addresses


Two (model) initializations are necessary:
- internal : the model sends its UID to [r MVC.internal.initialized], so that params can trigger their own declaration
- external : the model send *each* of its addresses to [r MVC.initialized], so that any remote can be notified that this model (and associated params) exist

The external model init messages should be sent *after* the model's params have been declared.
So that, for instance, if one provides a model GUI with an address, this GUI will be able to automatically retrieve the model's param (because they exist in a dict) and dynamically build the GUI accordingly.


A single initialization is necessary for param/state/message, as they do not initialize anything downstream.

Remotes should init based on (external) addresses.
Parameters, states, messages and models should initialize based on uid.

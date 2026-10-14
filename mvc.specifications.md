# MVC Max package specifications

## In short

The MVC package provides a framework in Max/MSP that implements a MVC (Model View Controler) model.
Essentially, it helps defining a tree-like hierarchy of models and parameters.
Parameters are attached to a model, and models are attached to a parent model (except the single top-level model).
This hierarchy defines an OpenSoundControl (OSC) style namespace, with the address of each model and parameter.
Parallel to that, "remote" controler/view objects can monitor and/or edit the value of the parameters.

Model are of a certain "type" and the values of a given model's instance can be saved in a preset, and recalled by another model instance  of the same type. (So if you have a model of type "lowpassFilter", that implements a lowPasss filter, its parameters values (say, frequency and resonance) can be saved in presets and recalled by any other instance of the "lowpassFilter" model)

## The MVC core objects

Here are the three main Max objects ("abstractions") of this framework:
- `mvc.model <UID> <parentModelUID> <modelName>` implements a model. It has 3 arguments: 
	- UID (string): a uniqueID (UID)
	- parentModelUID (string): a parent model UID
	- modelName (string): the name of the parameter, as it will be appear in the namespace.

- `mvc.parameter <parentModelUID> <parameterName>` implements a parameter, attached to a model. It has 3 arguments: 
	- parentModelUID (string): the UID of the parent model it is attached to;
	- parameterName (string): the name of the parameter, as it will be appear in the namespace.

- `mvc.remote <address>` implements a remote view/control to a `mvc.parameter`. It has a single argument:
	- `<address>`: is the OSC address of a parameter.

- `mvc.device <UID>` implements the top-level model. This abstraction actually contains a mvc.model instance, plus some other objects that provide utility functions to the rest of the patcher (notably, some JS code for registration of model and parameter, some JS code to recall presets, some Max code for UDP I/O etc.)

We listed the needed arguments for these objects, but they also expose attributes that we'll talk about later.
These objects store their properties (arguments and attributes) in a unique dictionary whose name is based on their UID.
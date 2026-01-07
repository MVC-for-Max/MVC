/* ============================================================
   MVC – Model Declaration Script (Optimized)
   Environment: Max/MSP js
   ============================================================ */

inlets = 1;
outlets = 1;

_MVC_VERSION = 0.4;

/* -------------------- Utils -------------------- */

function createDict(name) {
    var d = new Dict();
    d.name = name;
    d.quiet = 1;
    return d;
}

function toArray(value) {
    if (value == null) return [];
    return Array.isArray(value) ? value : [value];
}

function normalizeAddress(address) {
    return address.replace(/\//g, "::");
}

function findGoneItems(currentArray, previousArray) {
    var currentSet = new Set(currentArray);
    return previousArray.filter(function (item) {
        return !currentSet.has(item);
    });
}

/* -------------------- Dicts -------------------- */

var modelDict              = createDict("mvc.models.dict");
var inputsDict             = createDict("mvc.inputs.dict");
var parametersValuesDict   = createDict("mvc.parameters.values.dict");
var statesValuesDict       = createDict("mvc.states.values.dict");
var modelAddressDict       = createDict("modelAddressDict");

/* -------------------- Main -------------------- */

function declaremodel(uid) {

    var attrDict = new Dict(uid + ".attr");
    var model_UID = attrDict.get("uid");

    // Callback
    outlet(0, "send", model_UID + ".model.declareWithAttr.done");

    // Current addresses
    var currentAddresses = toArray(attrDict.get("addresslist"));

    /* -------- Address conflict check -------- */
    for (var i = 0; i < currentAddresses.length; i++) {
        var addr = normalizeAddress(currentAddresses[i]);
        var existingUID = modelDict.get(addr + "::uid");

        if (existingUID && existingUID[0] !== model_UID) {
            outlet(0, -1); // Address already in namespace
            return;
        }
    }

    /* -------- Previous addresses -------- */
    var previousAddresses = toArray(modelAddressDict.get(model_UID));

    /* -------- Update UID → addresses -------- */
    if (currentAddresses.length === 0) {
        modelAddressDict.remove(model_UID.toString());
    } else {
        modelAddressDict.set(model_UID, currentAddresses);
    }

    /* -------- Remove gone addresses (values only) -------- */
    var goneAddresses = findGoneItems(currentAddresses, previousAddresses);

    for (var i = 0; i < goneAddresses.length; i++) {
        var addr = normalizeAddress(goneAddresses[i]);
        parametersValuesDict.remove(addr);
        statesValuesDict.remove(addr);
    }

    /* -------- Clean old addresses -------- */
    for (var i = 0; i < previousAddresses.length; i++) {
        var addr = normalizeAddress(previousAddresses[i]);
        modelDict.remove(addr);
        inputsDict.remove(addr);
    }

    /* -------- Register new addresses -------- */
    for (var i = 0; i < currentAddresses.length; i++) {
        var addr = normalizeAddress(currentAddresses[i]);
        modelDict.replace(addr + "::uid", [model_UID, i + 1]);
    }

    // Success
    outlet(0, currentAddresses.length);
}

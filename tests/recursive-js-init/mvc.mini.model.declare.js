/****************************************************************
 * MVC REGISTRATION MANAGER (UPDATED)
 * Max/MSP JavaScript
 *
 * Features:
 * - models & parameters with dynamic order
 * - tree structure with pending children
 * - full removal from namespace
 * - pending parameters initialized before models
 * - sends init message after registration/unregistration
 ****************************************************************/

var MVC_MODELS = new Dict("mvc.models");
var MVC_PARAMETERS = new Dict("mvc.parameters");

MVC_MODELS.quiet = 1;
MVC_PARAMETERS.quiet = 1;

/* ===================== UTILITIES ===================== */
function node(uid) {
    var d = new Dict(uid + ".attr");
    d.quiet = 1;
    return d;
}
function keys(d) { return d ? d.getkeys() : null; }
function invalid(v) { return v === null || v === undefined || v === "none"; }

/* ===================== REGISTER ===================== */
function register(uid) {
    var n = node(uid);
    var type = n.get("mvc-type");
    var localAddress = n.get("address");
    var parentUID = n.get("parent");

    if (invalid(type) || invalid(localAddress) || invalid(parentUID)) return;

    // Root model initializes immediately
    if (parentUID === "mvc.root") {
        initializeNode(n, null);
        return;
    }

    var parent = node(parentUID);

    /* --- Parent not initialized or not yet existing --- */
    if (invalid(parent.get("fullAddress"))) {

        if (type === "model") {
            parent.replace("pendingChildModels::" + uid, 1);
        } else {
            parent.replace("pendingChildParameters::" + uid, 1);
        }

        return;
    }

    /* --- Parent initialized --- */
    initializeNode(n, parent);
}


/* ===================== INITIALIZATION ===================== */
function initializeNode(n, parent) {
    var uid = n.get("uid");
    var type = n.get("mvc-type");
    var localAddress = n.get("address");

    //post("--initializeNode\n");
    var fullAddress = parent
        ? parent.get("fullAddress") + "::" + localAddress
        : localAddress;

    if (type === "model") {
        if (MVC_MODELS.contains(fullAddress)) return;
        MVC_MODELS.replace(fullAddress + "::uid", uid); // FULL removal
    } else {
        if (MVC_PARAMETERS.contains(fullAddress)) return;
        MVC_PARAMETERS.replace(fullAddress + "::uid", uid);
    }

    n.replace("fullAddress", fullAddress);
    n.replace("initialized", 1);

    if (parent) {
        if (type === "model") {
            parent.replace("childModels::" + uid, 1);
            parent.remove("pendingChildModels::" + uid);
        } else {
            parent.replace("childParameters::" + uid, 1);
            parent.remove("pendingChildParameters::" + uid);
        }
    }

    if (type === "model") {
        initializePendingChildren(n);
    }

    // Send init message after registration
    messnamed(uid + ".init", 1);
}

function initializePendingChildren(modelNode) {
    // --- First initialize pending parameters
    var pendingParams = keys(modelNode.get("pendingChildParameters"));
    if (pendingParams) {
        for (var j = 0; j < pendingParams.length; j++) {
            register(pendingParams[j]);
        }
    }

    // --- Then initialize pending models
    // so that parameters can preempt this
    var pendingModels = keys(modelNode.get("pendingChildModels"));
    if (pendingModels) {
        for (var i = 0; i < pendingModels.length; i++) {
            register(pendingModels[i]);
        }
    }
}

/* ===================== UNREGISTER ===================== */
function unregister(uid) {
    var n = node(uid);
    var type = n.get("mvc-type");

    if (type === "model") {
        unregisterModelSubtree(n);
    } else {
        unregisterParameter(n);
        messnamed(uid + ".init", 0);
    }
}

function unregisterModelSubtree(n) {
    var uid = n.get("uid");

    /* --- First unregister child models (deepest first) --- */
    var childModels = keys(n.get("childModels"));
    if (childModels) {
        for (var i = 0; i < childModels.length; i++) {
            unregisterModelSubtree(node(childModels[i]));
        }
    }

    /* --- Then unregister child parameters --- */
    var childParams = keys(n.get("childParameters"));
    if (childParams) {
        for (var j = 0; j < childParams.length; j++) {
            unregisterParameter(node(childParams[j]));
            messnamed(childParams[j] + ".init", 0);
        }
    }

    /* --- Finally unregister THIS model --- */
    unregisterModel(n);

    /* --- Emit init 0 AFTER children --- */
    messnamed(uid + ".init", 0);
}

function unregisterModel(n) {
    var uid = n.get("uid");
    var fullAddress = n.get("fullAddress");
    var parentUID = n.get("parent");

    if (!invalid(fullAddress)) {
        MVC_MODELS.remove(fullAddress);
        removeParametersByPrefix(fullAddress);
    }

    moveChildrenToPending(n, "childModels", "pendingChildModels");
    moveChildrenToPending(n, "childParameters", "pendingChildParameters");

    if (!invalid(parentUID) && parentUID !== "mvc.root") {
        var parent = node(parentUID);
        parent.remove("childModels::" + uid);
        parent.replace("pendingChildModels::" + uid, 1);
    }

    n.remove("fullAddress");
    n.remove("initialized");
}


function unregisterParameter(n) {
    var uid = n.get("uid");
    var fullAddress = n.get("fullAddress");
    var parentUID = n.get("parent");

    if (!invalid(fullAddress)) {
        MVC_PARAMETERS.remove(fullAddress);
    }

    if (!invalid(parentUID) && parentUID !== "mvc.root") {
        var parent = node(parentUID);
        parent.remove("childParameters::" + uid);
        parent.replace("pendingChildParameters::" + uid, 1);
    }

    n.remove("fullAddress");
    n.remove("initialized");
}

/* ===================== HELPERS ===================== */
function moveChildrenToPending(n, childKey, pendingKey) {
    var children = keys(n.get(childKey));
    if (!children) return;

    for (var i = 0; i < children.length; i++) {
        n.replace(pendingKey + "::" + children[i], 1);
        n.remove(childKey + "::" + children[i]);
    }
}

function removeParametersByPrefix(prefix) {
    var all = keys(MVC_PARAMETERS);
    if (!all) return;

    for (var i = 0; i < all.length; i++) {
        if (all[i].indexOf(prefix + "::") === 0) {
            MVC_PARAMETERS.remove(all[i]);
        }
    }
}

/* ===================== FREE ===================== */
function free(uid) {
    var n = node(uid);
    var type = n.get("mvc-type");

    if (type === "model") {
        freeModel(n);
    } else {
        freeParameter(n);
    }

    messnamed(uid + ".init", 0);
}


function freeModel(n) {
    var uid = n.get("uid");
    var fullAddress = n.get("fullAddress");
    var parentUID = n.get("parent");

    /* 1. Unregister child models recursively */
    var childModels = keys(n.get("childModels"));
    if (childModels) {
        for (var i = 0; i < childModels.length; i++) {
            unregisterModelSubtree(node(childModels[i]));
        }
    }

    /* 2. Delete subtree from namespaces */
    if (!invalid(fullAddress)) {
        MVC_MODELS.remove(fullAddress);
        MVC_PARAMETERS.remove(fullAddress);
        //removeParametersByPrefix(fullAddress);
    }

    /* 3. Move children to pending */
    moveChildrenToPending(n, "childModels", "pendingChildModels");
    moveChildrenToPending(n, "childParameters", "pendingChildParameters");

    /* 4. remove self from parent's (pending) children */
    if (!invalid(parentUID)) {
        var parent = node(parentUID);
        parent.remove("childModels::" + uid);
        parent.remove("pendingChildModels::" + uid);

    }


    // 5. Clean attribute node, but keep pending children
    n.remove("childModels");
    n.remove("childParameters");
    //n.remove("pendingChildModels");
    //n.remove("pendingChildParameters");
    n.remove("fullAddress");
    n.remove("initialized");
    n.remove("address");
    n.remove("uid");
    n.remove("parent");
    n.remove("mvc-type");
}


function freeParameter(n) {
    var uid = n.get("uid");
    var fullAddress = n.get("fullAddress");
    var parentUID = n.get("parent");

    if (!invalid(fullAddress)) {
        MVC_PARAMETERS.remove(fullAddress);
    }

    if (!invalid(parentUID)) {
        var parent = node(parentUID);
        parent.remove("childParameters::" + uid);
        parent.remove("pendingChildParameters::" + uid);

    }

    n.clear();
}



/* ===================== DEBUG ===================== */
function dump() {
    post("---- MVC MODELS ----\n");
    post(MVC_MODELS.stringify(), "\n");
    post("---- MVC PARAMETERS ----\n");
    post(MVC_PARAMETERS.stringify(), "\n");
}

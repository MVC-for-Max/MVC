/****************************************************************
 * MVC REGISTRATION MANAGER (FULL REWRITE)
 * Max/MSP JavaScript
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

function keys(d) {
    return d ? d.getkeys() : null;
}

function invalid(v) {
    return v === null || v === undefined || v === "none";
}

/* ===================== BRACE EXPANSION ===================== */

function expandAddress(addr) {
    if (addr.indexOf("{") === -1) return [addr];

    var m = addr.match(/\{(\d+)\.\.(\d+)\}/);
    if (!m) return [addr];

    var a = parseInt(m[1], 10);
    var b = parseInt(m[2], 10);

    var out = [];
    for (var i = a; i <= b; i++) {
        out.push(addr.replace(m[0], i));
    }
    return out;
}

function cartesian(parentAddrs, childAddrs) {
    if (!parentAddrs) return childAddrs.slice();

    var out = [];
    for (var i = 0; i < parentAddrs.length; i++) {
        for (var j = 0; j < childAddrs.length; j++) {
            out.push(parentAddrs[i] + "::" + childAddrs[j]);
        }
    }
    return out;
}

/* ===================== REGISTER ===================== */

function register(uid) {
    var n = node(uid);
    var type = n.get("mvc-type");
    var parentUID = n.get("parent");
    var address = n.get("address");

    if (invalid(type) || invalid(parentUID) || invalid(address)) return;

    if (parentUID === "mvc.root") {
        initializeNode(n, null);
        return;
    }

    var parent = node(parentUID);

    if (invalid(parent.get("initialized"))) {
        if (type === "model") {
            parent.replace("pendingChildModels::" + uid, 1);
        } else {
            parent.replace("pendingChildParameters::" + uid, 1);
        }
        return;
    }

    initializeNode(n, parent);
}

/* ===================== INITIALIZATION ===================== */

function initializeNode(n, parent) {
    var uid = n.get("uid");
    var type = n.get("mvc-type");

    var local = expandAddress(n.get("address"));
    var parentFull = parent ? parent.get("fullAddress") : null;

    if (parentFull && !Array.isArray(parentFull)) {
        parentFull = [parentFull];
    }

    var full = cartesian(parentFull, local);

    for (var i = 0; i < full.length; i++) {
        if (type === "model") {
            MVC_MODELS.replace(full[i] + "::uid", uid);
        } else {
            MVC_PARAMETERS.replace(full[i] + "::uid", uid);
        }
    }

    n.replace("fullAddress", full);
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

    messnamed(uid + ".init", 1);
}

function initializePendingChildren(n) {
    var p = keys(n.get("pendingChildParameters"));
    if (p) for (var i = 0; i < p.length; i++) register(p[i]);

    var m = keys(n.get("pendingChildModels"));
    if (m) for (var j = 0; j < m.length; j++) register(m[j]);
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

    var models = keys(n.get("childModels"));
    if (models) for (var i = 0; i < models.length; i++) {
        unregisterModelSubtree(node(models[i]));
    }

    var params = keys(n.get("childParameters"));
    if (params) for (var j = 0; j < params.length; j++) {
        unregisterParameter(node(params[j]));
        messnamed(params[j] + ".init", 0);
    }

    unregisterModel(n);
    messnamed(uid + ".init", 0);
}

function unregisterModel(n) {
    removeFromNamespaces(n, true);

    moveChildrenToPending(n, "childModels", "pendingChildModels");
    moveChildrenToPending(n, "childParameters", "pendingChildParameters");

    var parentUID = n.get("parent");
    if (!invalid(parentUID) && parentUID !== "mvc.root") {
        var p = node(parentUID);
        p.remove("childModels::" + n.get("uid"));
        p.replace("pendingChildModels::" + n.get("uid"), 1);
    }

    n.remove("fullAddress");
    n.remove("initialized");
}

function unregisterParameter(n) {
    removeFromNamespaces(n, false);

    var parentUID = n.get("parent");
    if (!invalid(parentUID) && parentUID !== "mvc.root") {
        var p = node(parentUID);
        p.remove("childParameters::" + n.get("uid"));
        p.replace("pendingChildParameters::" + n.get("uid"), 1);
    }

    n.remove("fullAddress");
    n.remove("initialized");
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
    var models = keys(n.get("childModels"));
    if (models) for (var i = 0; i < models.length; i++) {
        unregisterModelSubtree(node(models[i]));
    }

    removeFromNamespaces(n, true);

    moveChildrenToPending(n, "childModels", "pendingChildModels");
    moveChildrenToPending(n, "childParameters", "pendingChildParameters");

    var parentUID = n.get("parent");
    if (!invalid(parentUID)) {
        var p = node(parentUID);
        p.remove("childModels::" + n.get("uid"));
        p.remove("pendingChildModels::" + n.get("uid"));
    }

    n.remove("fullAddress");
    n.remove("initialized");
    n.remove("address");
    n.remove("parent");
    n.remove("mvc-type");
    n.remove("uid");
}

function freeParameter(n) {
    removeFromNamespaces(n, false);

    var parentUID = n.get("parent");
    if (!invalid(parentUID)) {
        var p = node(parentUID);
        p.remove("childParameters::" + n.get("uid"));
        p.remove("pendingChildParameters::" + n.get("uid"));
    }

    n.clear();
}

/* ===================== HELPERS ===================== */

function moveChildrenToPending(n, from, to) {
    var c = keys(n.get(from));
    if (!c) return;

    for (var i = 0; i < c.length; i++) {
        n.replace(to + "::" + c[i], 1);
        n.remove(from + "::" + c[i]);
    }
}

function removeFromNamespaces(n, isModel) {
    var f = n.get("fullAddress");
    if (!f) return;
    if (!Array.isArray(f)) f = [f];

    for (var i = 0; i < f.length; i++) {
        if (isModel) {
            MVC_MODELS.remove(f[i]);
            MVC_PARAMETERS.remove(f[i]);
        } else {
            MVC_PARAMETERS.remove(f[i]);
        }
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

/* ===================== DEBUG ===================== */

function dump() {
    post("---- MVC MODELS ----\n");
    post(MVC_MODELS.stringify(), "\n");
    post("---- MVC PARAMETERS ----\n");
    post(MVC_PARAMETERS.stringify(), "\n");
}

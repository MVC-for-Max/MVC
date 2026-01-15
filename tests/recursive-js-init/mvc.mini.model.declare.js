/****************************************************************
 * MVC REGISTRATION MANAGER (ADDRESS-LIST VERSION)
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

function asArray(v) {
    return v == null ? [] : (Array.isArray(v) ? v : [v]);
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

function expandAddressList(addr) {
    if (Array.isArray(addr)) {
        var out = [];
        for (var i = 0; i < addr.length; i++) {
            out.push(expandAddress(addr[i]));
        }
        return out;
    }
    return [expandAddress(addr)];
}

/* ===================== ADDRESS DISTRIBUTION ===================== */

function distributeAddresses(n, parent) {
    let addresslist = []; // the final address list
    let parentmap = [];   // an array mapping each address to the index of the parent addresses
    let childrenmap = []; // a nested array mapping parent index to an array of corresponding child addresses indices

    let expandedAddresses = n.get('expandedAddresses');
    //addresslist = expanded.flat();

    //if (!parentList || parentList.length === 0) parentList = [""];

    if (n.get('parent') == 'mvc.root'){ // If no parent, consider the addresses as absolute (can only happen for the device's top level model)
      addresslist = expandedAddresses.flat();
      //post('addresslist flattened', addresslist, '\n');
      const tmp = new Array(addresslist.length);
      for (let i = 0; i < addresslist.length; i++) {
          parentmap[i] = 1;
          tmp[i] = i + 1;
      }
      childrenmap[0] = tmp;
    } 
    else if (parent.get('uid') != n.get('uid')){ //concat on parent address
    
      let adddressIndex = 0; //the address index in the final addresslist
      let parentAddresses = parent.get('addresslist');
    
      for (let i = 0; i < parentAddresses.length; i++) {
        const childIndexArray = [];
        const addressesArrayForThisParentAddress = expandedAddresses[i%expandedAddresses.length];
        //post('addressesArrayForThisParentAddress', addressesArrayForThisParentAddress, '\n');
    
        for (let j = 0; j < addressesArrayForThisParentAddress.length; j++) {
          var childAdd = addressesArrayForThisParentAddress[j];
          if (childAdd !== 'none'){
            addresslist.push(parentAddresses[i] + '::' + childAdd);          
            childrenmap.push(i+1);
            adddressIndex++;
            childIndexArray.push(adddressIndex);
          }
        }
        parentmap.push(childIndexArray);
      }
      //addresslist = ["addresslist"].concat(addresslist);
    }
    else { // if parent-uid and child-uid are the same: this is the device
      //addresslist = ["addresslist"].concat(expandedAddresses[0]);
      addresslist = expandedAddresses[0] || [];
      parentmap = [1];
      childrenmap = [1];
    }

  n.replace('addresslist', addresslist);
  n.replace('parentmap', parentmap);
  n.replace('childrenmap', childrenmap);
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

    var expanded = expandAddressList(n.get("address"));
    n.replace("expandedAddresses", expanded);

    var parentList = parent ? parent.get("addresslist") : null;
    if (parentList && !Array.isArray(parentList)) parentList = [parentList];

    var dist = distributeAddresses(n, parent);

    //n.replace("addresslist", dist.addresslist);
    //n.replace("parentmap", dist.parentmap);
    //n.replace("childrenmap", dist.childrenmap);
    n.replace("initialized", 1);

    for (var i = 0; i < n.get('addresslist').length; i++) {
        if (type === "model") {
            MVC_MODELS.replace(n.get('addresslist')[i] + "::uid", uid, i+1);
        } else {
            MVC_PARAMETERS.replace(n.get('addresslist')[i] + "::uid", uid, i+1);
        }
    }

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

    n.remove("addresslist");
    n.remove("parentmap");
    n.remove("childrenmap");
    n.remove("initialized");
}

/* ===================== PARAMETER UNREGISTER ===================== */

function unregisterParameter(n) {
    removeFromNamespaces(n, false);

    var parentUID = n.get("parent");
    if (!invalid(parentUID) && parentUID !== "mvc.root") {
        var p = node(parentUID);
        p.remove("childParameters::" + n.get("uid"));
        p.replace("pendingChildParameters::" + n.get("uid"), 1);
    }

    n.remove("addresslist");
    n.remove("parentmap");
    n.remove("childrenmap");
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

    n.clear();
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
    var list = n.get("addresslist");
    if (!list) return;

    for (var i = 0; i < list.length; i++) {
        if (isModel) {
            MVC_MODELS.remove(list[i]);
            MVC_PARAMETERS.remove(list[i]);
        } else {
            MVC_PARAMETERS.remove(list[i]);
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

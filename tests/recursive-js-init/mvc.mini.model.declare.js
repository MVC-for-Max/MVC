let MVCnamespace = new Dict();
MVCnamespace.name = "mvc.models";
MVCnamespace.quiet = 1;

let MVCinputs = new Dict();
MVCinputs.name = "mvc.inputs";
MVCinputs.quiet = 1;

function register(uid)
{
    post("-------register", uid, "\n");
    let thisNode = new Dict();
    thisNode.quiet = 1;
    thisNode.name = uid + ".attr";;

    let thisNodeAddress = thisNode.get("address");
    //post("thisNodeAddress:", thisNodeAddress, "\n");
        
    // return if no address or none
    if ((!thisNodeAddress)||(thisNodeAddress=="none")){
        post("Error: missing address for node:", uid, "\n")
        unregister(uid);
        return;
    }

    // return if no parent or none or same UID as node
    let parentNodeUID = thisNode.get("parent");
    //post("parentNodeUID:", parentNodeUID, "\n");
    if ((!parentNodeUID)||(parentNodeUID=="none")||(parentNodeUID==uid)){
        post("Error: missing parent for node:", uid, "\n")
        return;
    }

    post("Register node:", uid, "\n");
    // fulladdress will hold the concatenation (should be addresslist)
    let fulladdress;

    let parentNode = new Dict();
    parentNode.quiet = 1;
    parentNode.name = parentNodeUID + ".attr";

    // select relevant namespace
    let mvcType = thisNode.get("mvc-type");
    post("mvc-type", mvcType, "\n");
    let theNamespace;
    switch(mvcType) {
        case "model":
            {
                theNamespace = MVCnamespace;
                break;         
            }
        case "parameter":
            {
                theNamespace = MVCinputs;
                break;         
            }
        }

    // create full address for this node and register in namespace
    if (parentNodeUID != "mvc.root") { // if not top level
        //post(uid, "is a sub-node.\n")
        let parentNodeFulladdress = parentNode.get("fulladdress");
        if (parentNodeFulladdress) {
            fulladdress = parentNodeFulladdress + "::" + thisNodeAddress;
            //check if some of these adresses already exist in the namespace, if so returns
            if (theNamespace.contains(fulladdress)){
                 post("This address already exists in the namespace", fulladdress, "\n");
                 return;
            }

            thisNode.replace("fulladdress", fulladdress);
        } 
        else{
            post("Missing address for parent node", parentNodeUID, "\n")
            return;
        }
    }
    else { // this is the device/top-level node
        post(uid, "is a top-level node.\n");
        fulladdress = thisNodeAddress;
        thisNode.set("fulladdress", fulladdress);
    }

    // add this address to the namespace
    theNamespace.replace(fulladdress+"::uid", uid);

    // Initialize first inputs, then only child models (so that input can preempt it)
    initializeChildInputs(thisNode);
    initializeChildModels(thisNode);

}

// notifyParentNode
// remove pending child node from parent when init done
// output public init message if all child nodes have been initialized
function notifyParentNode(parentNodeUID, uid)
{ 
    post("-------notifyParentNode", parentNodeUID, uid, "\n");
    let parentNode = new Dict();
    parentNode.quiet = 1;
    parentNode.name = parentNodeUID + ".attr";;

    // Remove from pendingNodes and add to childNodes
    parentNode.remove("pendingNodes::" + uid);
    parentNode.replace("childNodes::" + uid, 1);
    post("Node", uid, "is now a child node of", parentNodeUID, "\n");

    parentParentNodeUID = parentNode.get("parent");
    post("parentParentNodeUID", parentParentNodeUID, "\n");
    // send public init signal for this node (for view and remotes which have a parent)
    // notifyParentNode(parentNodeUID)
    if (parentNodeUID == "mvc.root") return;

    let pendingNodes = parentNode.get("pendingNodes").getkeys();
    if (!pendingNodes) {
        //post(parentNodeUID, "contains no more pending nodes\n");
        // send it recursively to parents
        //let parentParentNodeUID = parentNode.get("parent");
        if (parentParentNodeUID != "mvc.root"){
            //post("---We should trigger notify on:", parentParentNodeUID, "\n");
            messnamed(parentNodeUID + ".init", "----private");
            notifyParentNode(parentParentNodeUID, parentNodeUID);
        }
        else {
            //post("---Reached top-level node\n");
            messnamed(parentNodeUID + ".init", "----private");
        }
        // send public init
        messnamed(parentNodeUID + ".init", "++++public");
    }
    else {
        //post("PendingNodes left in", parentNodeUID, ":" , pendingNodes, "\n");
    }
}

// notifyParentNode
// remove pending child node from parent when init done
// output public init message if all child nodes have been initialized
function inputNotifyParentNode(parentNodeUID, uid)
{ 
    let parentNode = new Dict();
    parentNode.quiet = 1;
    parentNode.name = parentNodeUID + ".attr";;

    // Remove from pendingNodes and add to childNodes
    parentNode.remove("pendingInputs::" + uid);
    parentNode.replace("childInputs::" + uid, 1);
    //post("Node", uid, "is now a child node of", parentNodeUID, "\n");

    // parentParentNodeUID = parentNode.get("parent");

    // send public init signal for this node (for view and remotes which have a parent)
    // notifyParentNode(parentNodeUID)
    // let pendingNodes = parentNode.get("pendingNodes").getkeys();
    // if (!pendingNodes) {
    //     //post(parentNodeUID, "contains no more pending nodes\n");
    //     // send it recursively to parents
    //     let parentParentNodeUID = parentNode.get("parent");
    //     if (parentParentNodeUID != "mvc.root"){
    //         //post("---We should trigger notify on:", parentParentNodeUID, "\n");
    //         messnamed(parentNodeUID + ".init", "----private");
    //         notifyParentNode(parentParentNodeUID, parentNodeUID);
    //     }
    //     else {
    //         //post("---Reached top-level node\n");
    //         messnamed(parentNodeUID + ".init", "----private");
    //     }
    //     // send public init
    //     messnamed(parentNodeUID + ".init", "++++public");
    // }
    // else {
    //     //post("PendingNodes left in", parentNodeUID, ":" , pendingNodes, "\n");
    // }
}


// undeclare node from the namespace
// this is called from mvc.model (and mvc.inputs?)
function unregister(uid)
{
    // get the attr dict for this node
    post("--------Unregister node:", uid, "\n");
    let thisNode = new Dict();
    thisNode.quiet = 1;
    thisNode.name = uid + ".attr";;
    let fulladdress = thisNode.get("fulladdress");
    //post("Removing from namespace:", fulladdress, "\n");
    //remove this node's address from namespace

    MVCnamespace.remove(fulladdress);
    // TODO : also remove from parameters.value, state.value, etc.

    // remove from parent's child nodes
    parentUID = thisNode.get("parent");
    let parentNode = new Dict();
    parentNode.quiet = 1;
    parentNode.name = parentUID + ".attr";;
    parentNode.remove("childNodes::"+uid);

    //recursively undeclare child nodes
    let childNodes = thisNode.get("childNodes");
    let theChildNodes;
    if (childNodes){
        theChildNodes = childNodes.getkeys();
        //post("theChildNodes", theChildNodes, "\n");
    }
    else{
        theChildNodes = null;
    }
    if (theChildNodes !== null){
        for (const [key, value] of Object.entries(theChildNodes)) {
            unregister(value);
            //post("Undeclare", value, "\n");
            thisNode.set("pendingNodes::"+value, 1);
        }
    }
    // last, clear this node attr
    thisNode.remove("fulladdress");
}

function punregister(uid)
{
    // get the attr dict for this node
    post("Unregister input:", uid, "\n");
    let thisNode = new Dict();
    thisNode.quiet = 1;
    thisNode.name = uid + ".attr";;
    let fulladdress = thisNode.get("fulladdress");
    //post("Removing from namespace:", fulladdress, "\n");
    //remove this node's address from namespace
    MVCinputs.remove(fulladdress);
    // TODO : also remove from parameters.value, state.value, etc.

    // remove from parent's child nodes
    parentUID = thisNode.get("parent");
    let parentNode = new Dict();
    parentNode.quiet = 1;
    parentNode.name = parentUID + ".attr";;
    parentNode.remove("childInputs::"+uid);

    // last, clear this node attr
    thisNode.remove("fulladdress");
}

function free(uid)
{
    // get the attr dict for this node
    post("------Freeing node:", uid, "\n");
    unregister(uid);

    let thisNode = new Dict();
    thisNode.quiet = 1;
    thisNode.name = uid + ".attr";;

    //remove from parent's child/pending nodes
    parentUID = thisNode.get("parent");
    let parentNode = new Dict();
    parentNode.quiet = 1;
    parentNode.name = parentUID + ".attr";;

    let mvcType = thisNode.get("mvc-type");
    switch(mvcType) {
    case "model":
        {
            parentNode.remove("childNodes::"+uid);
            parentNode.remove("pendingNodes::"+uid); 
            break;         
        }
    case "parameter":
        {
            parentNode.remove("childInputs::"+uid);
            parentNode.remove("pendingInputs::"+uid); 
            break;         
        }
    }

    thisNode.remove("parent");
    thisNode.remove("address");
    thisNode.remove("uid");

    //thisNode.clear();
}

function initializeChildInputs(thisNode){
        ///////////////////////////////
    // initialize pending nodes
    post("--------initializeChildInputs", thisNode, "\n");
    let uid = thisNode.get("uid");
    let parentNodeUID = thisNode.get("parent");
    let pendingInputs = thisNode.get("pendingInputs");
    let thePendingInputs;
    if (pendingInputs){
        thePendingInputs = pendingInputs.getkeys();
        post("thePendingInputs", thePendingInputs, "\n");
    }
    else{
        thePendingInputs = null;
    }
    
    // iterate over pending nodes and initialize them recursively down to the leaves
    if (thePendingInputs == null){
        post("No (more) pending nodes in node:", uid, "\n");
        // we are on a leaf, send public signal back recursively
        messnamed(uid + ".init", "---private"); //send private init notif for this node
        notifyParentNode(parentNodeUID, uid);
        //messnamed(uid + ".init", "++public");
    }
    else {
        //Object.keys(pendingNodes); //pendingNodes.keys();
        post("There are",thePendingInputs.length, "pending nodes in", uid, ":", thePendingInputs, "\n");
        //pendingNodes.forEach((element) => declare(element));   
        for (const [key, value] of Object.entries(thePendingInputs)) {
            register(value);
            //post(value, "\n");
        }
    }
}

function initializeChildModels(thisNode){
        ///////////////////////////////
    // initialize pending nodes
    post("--------initializeChildModels", thisNode, "\n");
    let uid = thisNode.get("uid");
    let parentNodeUID = thisNode.get("parent");
    let pendingNodes = thisNode.get("pendingNodes");
    let thePendingNodes;
    if (pendingNodes){
        thePendingNodes = pendingNodes.getkeys();
        //post("pendingNodes", thePendingNodes, "\n");
    }
    else{
        thePendingNodes = null;
    }
    
    // iterate over pending nodes and initialize them recursively down to the leaves
    if (thePendingNodes == null){
        post("No (more) pending nodes in node:", uid, "\n");
        // we are on a leaf, send public signal back recursively
        messnamed(uid + ".init", "---private"); //send private init notif for this node
        notifyParentNode(parentNodeUID, uid);
        messnamed(uid + ".init", "++public");
    }
    else {
        //Object.keys(pendingNodes); //pendingNodes.keys();
        post("There are",thePendingNodes.length, "pending nodes in", uid, ":", thePendingNodes, "\n");
        //pendingNodes.forEach((element) => declare(element));   
        for (const [key, value] of Object.entries(thePendingNodes)) {
            register(value);
            //post(value, "\n");
        }
    }
}

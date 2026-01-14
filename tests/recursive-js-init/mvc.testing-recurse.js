let MVCnamespace = new Dict();
MVCnamespace.name = "mvc.namespace";
MVCnamespace.quiet = 0;

function declare(uid)
{
    post("Registering node:", uid, "\n");
    let thisNode = new Dict();
    thisNode.name = uid;

    let thisNodeAddress = thisNode.get("address");
    post("thisNodeAddress:", thisNodeAddress, "\n");
    
    // return if no address
    if (!thisNodeAddress){
        post("missing address for node:", uid, "\n")
        return;
    }

    // return if no parent
    let parentNodeUID = thisNode.get("parent");
    post("parentNodeUID:", parentNodeUID, "\n");
    if (!parentNodeUID){
        post("missing parent for node:", uid, "\n")
        return;
    }

    // harvest child nodes
    //messnamed(uid + ".harvest", "bang");

    // fulladdress will hold the concatenation (should be addresslist)
    let fulladdress;

    // create full address for this node and register in namespace
    if (parentNodeUID != "mvc.root") { // if not top level
        post(uid, "is a sub-node.\n")
        let parentNode = new Dict();
        parentNode.name = parentNodeUID;
        let parentNodeFulladdress = parentNode.get("fulladdress");
        if (parentNodeFulladdress) {
            fulladdress = parentNodeFulladdress + "::" + thisNodeAddress;
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

    //post("fulladdress", fulladdress, "\n");
    MVCnamespace.replace(fulladdress+"::uid", uid);

    // declare child-nodes
    messnamed(uid + ".i.ini", 1);
    
    //while pending node
    // initialize them and remove them from the pending nodes
    var pendingNodes = thisNode.get("pendingNodes");
    //post("pendingNodes", pendingNodes.getkeys(), "\n");
    //post("length.......", Object.keys(pendingNodes).length, "\n");
    //post("stringify", JSON.stringify(pendingNodes), "\n");
    var thePendingNodes = pendingNodes.getkeys();

    if (thePendingNodes == null){
        post("No (more) pending nodes in node:", uid, "\n");
    }
    else {
        //Object.keys(pendingNodes); //pendingNodes.keys();
        post("There are",thePendingNodes.length, "pending nodes in", uid, ":", thePendingNodes, "\n");
        //pendingNodes.forEach((element) => declare(element));   
        for (const [key, value] of Object.entries(thePendingNodes)) {
            declare(value);
            //post(value, "\n");
        }
    }

    if (parentNodeUID!="mvc.root"){
        notifyParentNode(parentNodeUID, uid);
    }
}


// notifyParentNode
// remove pending child node from parent when init done
// output public init message if all child nodes have been initialized
function notifyParentNode(parentNodeUID, uid)
{ 
    let parentNode = new Dict();
    parentNode.quiet = 1;
    parentNode.name = parentNodeUID;
    
    //remove pending node
    parentNode.remove("pendingNodes::" + uid);
    post("Removing pending node", uid, "from", parentNodeUID, "\n")    

 
    // send public init signal for this node (for view and remotes which have a parent)
    // notifyParentNode(parentNodeUID)
    let pendingNodes = parentNode.get("pendingNodes").getkeys();
    if (!pendingNodes) {
        post(parentNodeUID, "contains no more pending nodes\n");
        messnamed(parentNodeUID + ".init", 1);
    }
    else {
        post("PendingNodes left in", parentNodeUID, ":" , pendingNodes, "\n");
    }
}


// undeclare node from the namespace
// this is called from mvc.model (and mvc.inputs?)
function undeclare(uid)
{
    // get the attr dict for this node
    post("Undeclaring node:", uid, "\n");
    let thisNode = new Dict();
    thisNode.name = uid;
    let fulladdress = thisNode.get("fulladdress");

    //remove this node's address from namespace
    MVCnamespace.remove(fulladdress);
    // TODO : also remove from parameters.value, state.value, etc.

    // undeclare child-nodes (if any)
    messnamed(uid + ".i.ini", 0);

    // last, clear this node attr
    thisNode.remove("fulladdress");
}


// unregister node from the namespace
// lighter than undeclare, as it considers that namespace was already cleaned by parent node
// we just remove fulladdress from this node's attr dict, and trigger subnodes to do the same
function unregister(uid)
{
    // get the attr dict for this node
    post("Unregistering node:", uid, "\n");
    let thisNode = new Dict();
    thisNode.name = uid;

    // undeclare child-nodes (if any)
    messnamed(uid + ".i.ini", 0);

    // last, clear this node attr
    thisNode.remove("fulladdress");
}
let MVCnamespace = new Dict();
MVCnamespace.name = "mvc.inputs";
MVCnamespace.quiet = 1;

function pregister(uid)
{
    let thisNode = new Dict();
    thisNode.quiet = 1;
    thisNode.name = uid + ".attr";

    let thisNodeAddress = thisNode.get("address");
    post("thisNodeAddress:", thisNodeAddress, "\n");
    
    // return if no address or none
    if ((!thisNodeAddress)||(thisNodeAddress=="none")){
        post("Error: missing address for input:", uid, "\n")
        unregister(uid);
        return;
    }

    // return if no parent or none or same UID as node
    let parentNodeUID = thisNode.get("parent");
    post("parentNodeUID:", parentNodeUID, "\n");
    if ((!parentNodeUID)||(parentNodeUID=="none")||(parentNodeUID==uid)){
        post("Error: missing parent for input:", uid, "\n")
        return;
    }

    post("Register input:", uid, "\n");
    // fulladdress will hold the concatenation (should be addresslist)
    let fulladdress;

    let parentNode = new Dict();
    parentNode.quiet = 1;
    parentNode.name = parentNodeUID + ".attr";

    // create full address for this node and register in namespace
    //post(uid, "is a sub-node.\n")
    let parentNodeFulladdress = parentNode.get("fulladdress");
    post("parentNodeFulladdress", parentNodeFulladdress);

    if (parentNodeFulladdress) {
        fulladdress = parentNodeFulladdress + "::" + thisNodeAddress;

        //check if some of these adresses already exist in the namespace, if so returns
        if (MVCnamespace.contains(fulladdress)){
             post("This address already exists in the namespace", fulladdress, "\n");
             return;
        }

        thisNode.replace("fulladdress", fulladdress);
    } 
    else{
        post("Missing address for parent node", parentNodeUID, "\n")
        return;
    }
    

    // add this address to the namespace
    MVCnamespace.replace(fulladdress+"::uid", uid);

    messnamed(uid + ".init", "---private"); //send private init notif for this node
    notifyParentNode(parentNodeUID, uid);
    messnamed(uid + ".init", "++public");
    
}

// notifyParentNode
// remove pending child node from parent when init done
// output public init message if all child nodes have been initialized
function notifyParentNode(parentNodeUID, uid)
{ 
    let parentNode = new Dict();
    parentNode.quiet = 1;
    parentNode.name = parentNodeUID + ".attr";;

    //add child node
    parentNode.replace("childInputs::" + uid, 1);
    //post("Adding child node", uid, "to", parentNodeUID, "\n");

    //remove pending node
    parentNode.remove("pendingInputs::" + uid);
    //post("Removing pending node", uid, "from", parentNodeUID, "\n");

    parentParentNodeUID = parentNode.get("parent");

    // send public init signal for this node (for view and remotes which have a parent)
    // notifyParentNode(parentNodeUID)
    let pendingNodes = parentNode.get("pendingInputs").getkeys();
    if (!pendingNodes) {
        //post(parentNodeUID, "contains no more pending nodes\n");
        // send it recursively to parents
        let parentParentNodeUID = parentNode.get("parent");
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


// undeclare node from the namespace
// this is called from mvc.model (and mvc.inputs?)
function punregister(uid)
{
    // get the attr dict for this node
    post("Unregister node:", uid, "\n");
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
    thisNode.remove("fulladdress");
}


function pfree(uid)
{
    // get the attr dict for this node
    post("Freeing node:", uid, "\n");
    punregister(uid);

    let thisNode = new Dict();
    thisNode.quiet = 1;
    thisNode.name = uid + ".attr";;

    //remove from parent's child/pending nodes
    parentUID = thisNode.get("parent");
    let parentNode = new Dict();
    parentNode.quiet = 1;
    parentNode.name = parentUID + ".attr";;

    parentNode.remove("childInputs::"+uid);
    parentNode.remove("pendingInputs::"+uid);

    thisNode.remove("parent");
    thisNode.remove("address");
    thisNode.remove("uid");

    //thisNode.clear();
}



/*************************************************************
 * MVC NODE MANAGEMENT – SINGLE SCRIPT (COMMENTED)
 * Gestion hiérarchique MVC (models / parameters)
 * Compatible Max/MSP Dict API
 *************************************************************/

/* ==========================================================
 * NAMESPACES
 * ==========================================================
 * Contient la configuration et les namespaces globaux
 * pour chaque type MVC.
 */

const MVC = {
    model: {
        namespace: new Dict("mvc.models"),   // Namespace des modèles
        pendingKey: "pendingNodes",          // Clé des enfants en attente
        childKey: "childNodes",              // Clé des enfants validés
        notify: notifyParentNode             // Fonction de notification parent
    },
    parameter: {
        namespace: new Dict("mvc.inputs"),   // Namespace des paramètres
        pendingKey: "pendingInputs",
        childKey: "childInputs",
        notify: inputNotifyParentNode
    }
};

MVC.model.namespace.quiet = 1;
MVC.parameter.namespace.quiet = 1;


/* ==========================================================
 * UTILITIES
 * ==========================================================
 */

/**
 * Retourne le Dict .attr associé à un UID
 * @param {String} uid
 * @returns {Dict}
 */
function nodeDict(uid) {
    const d = new Dict(uid + ".attr");
    d.quiet = 1;
    return d;
}

/**
 * Teste si une valeur est absente ou invalide
 * @param {*} v
 * @returns {Boolean}
 */
function hasNoValue(v) {
    return !v || v === "none";
}

/**
 * Retourne les clés d’un Dict ou null s’il est vide
 * @param {Dict} dict
 * @returns {Array|null}
 */
function getKeys(dict) {
    return dict ? dict.getkeys() : null;
}

/**
 * Replace un enfant supprimé dans les pending du parent
 * @param {Dict} node
 * @param {String} pendingKey
 */
function restoreToPending(node, pendingKey) {
    const parentUID = node.get("parent");
    if (!parentUID) return;

    const parent = nodeDict(parentUID);
    parent.replace(pendingKey + "::" + node.get("uid"), 1);
}


/* ==========================================================
 * REGISTER
 * ==========================================================
 */

/**
 * Point d’entrée principal :
 * - vérifie les attributs du nœud
 * - sélectionne le type MVC
 * - déclenche l’initialisation
 * @param {String} uid
 */
function register(uid) {
    post("---- register", uid, "\n");

    const node = nodeDict(uid);
    const address = node.get("address");
    const parentUID = node.get("parent");
    const type = node.get("mvc-type");

    if (hasNoValue(address)) {
        post("Error: missing address for node:", uid, "\n");
        unregister(uid);
        return;
    }

    if (hasNoValue(parentUID) || parentUID === uid) {
        post("Error: missing parent for node:", uid, "\n");
        return;
    }

    const handler = MVC[type];
    if (!handler) return;

    initializeNode(node, handler);
}


/* ==========================================================
 * INITIALIZATION
 * ==========================================================
 */

/**
 * Initialise un nœud :
 * - calcule son adresse complète
 * - l’enregistre dans le namespace correspondant
 * - déclenche l’initialisation de ses enfants
 * @param {Dict} node
 * @param {Object} handler
 */
function initializeNode(node, handler) {
    const uid = node.get("uid");
    const parentUID = node.get("parent");
    const address = node.get("address");
    const parent = nodeDict(parentUID);
    let fulladdress;

    if (parentUID !== "mvc.root") {
        const parentAddress = parent.get("fulladdress");
        if (!parentAddress) {
            post("Missing address for parent:", parentUID, "\n");
            return;
        }

        fulladdress = parentAddress + "::" + address;

        if (handler.namespace.contains(fulladdress)) {
            post("Address already exists:", fulladdress, "\n");
            return;
        }
    } else {
        post(uid, "is a top-level node\n");
        fulladdress = address;
    }

    node.replace("fulladdress", fulladdress);
    handler.namespace.replace(fulladdress + "::uid", uid);

    initializeChildren(node, handler);
}

/**
 * Initialise récursivement les enfants d’un nœud :
 * - si aucun enfant en attente → notification
 * - sinon → register() sur chaque enfant
 * @param {Dict} node
 * @param {Object} handler
 */
function initializeChildren(node, handler) {
    const uid = node.get("uid");
    const parentUID = node.get("parent");
    const pending = getKeys(node.get(handler.pendingKey));

    if (!pending) {
        messnamed(uid + ".init", "---private");
        handler.notify(parentUID, uid);

        if (handler === MVC.model) {
            messnamed(uid + ".init", "++public");
        }
        return;
    }

    post("Pending", handler.pendingKey, "in", uid, ":", pending, "\n");
    for (const k in pending) {
        register(pending[k]);
    }
}


/* ==========================================================
 * NOTIFICATIONS
 * ==========================================================
 */

/**
 * Notifie le parent d’un modèle qu’un enfant est initialisé :
 * - enlève l’enfant des pending
 * - l’ajoute aux enfants actifs
 * - propage la notification si nécessaire
 * @param {String} parentUID
 * @param {String} uid
 */
function notifyParentNode(parentUID, uid) {
    post("---- notifyParentNode", parentUID, uid, "\n");
    if (parentUID === "mvc.root") return;

    const parent = nodeDict(parentUID);
    parent.remove("pendingNodes::" + uid);
    parent.replace("childNodes::" + uid, 1);

    const stillPending = getKeys(parent.get("pendingNodes"));
    if (stillPending) return;

    const grandParentUID = parent.get("parent");
    messnamed(parentUID + ".init", "----private");

    if (grandParentUID && grandParentUID !== "mvc.root") {
        notifyParentNode(grandParentUID, parentUID);
    }

    messnamed(parentUID + ".init", "++++public");
}

/**
 * Notifie le parent qu’un paramètre est initialisé
 * (version simplifiée, sans propagation)
 * @param {String} parentUID
 * @param {String} uid
 */
function inputNotifyParentNode(parentUID, uid) {
    const parent = nodeDict(parentUID);
    parent.remove("pendingInputs::" + uid);
    parent.replace("childInputs::" + uid, 1);
}


/* ==========================================================
 * UNREGISTER
 * ==========================================================
 */

/**
 * Désenregistre un nœud selon son type MVC
 * @param {String} uid
 */
function unregister(uid) {
    const node = nodeDict(uid);
    const type = node.get("mvc-type");

    if (type === "model") unregisterModel(uid);
    if (type === "parameter") unregisterInput(uid);
}

/**
 * Désenregistre récursivement un modèle :
 * - suppression du namespace
 * - suppression des enfants
 * @param {String} uid
 */
function unregisterModel(uid) {
    post("---- Unregister model:", uid, "\n");

    const node = nodeDict(uid);
    const fulladdress = node.get("fulladdress");

    // Remove from namespace
    MVC.model.namespace.remove(fulladdress);

    // Remove from parent's active children
    removeFromParent(node, "childNodes");

    // Restore into parent's pendingNodes
    restoreToPending(node, "pendingNodes");

    // Recursively unregister children
    unregisterChildren(node, "childNodes", unregisterModel);

    node.remove("fulladdress");
}


/**
 * Désenregistre un paramètre
 * @param {String} uid
 */
function unregisterInput(uid) {
    post("---- Unregister input:", uid, "\n");

    const node = nodeDict(uid);
    const fulladdress = node.get("fulladdress");

    // Remove from namespace
    MVC.parameter.namespace.remove(fulladdress);

    // Remove from parent's active inputs
    removeFromParent(node, "childInputs");

    // Restore into parent's pendingInputs
    restoreToPending(node, "pendingInputs");

    node.remove("fulladdress");
}



/* ==========================================================
 * FREE
 * ==========================================================
 */

/**
 * Nettoyage complet d’un nœud :
 * - unregister
 * - suppression des liens parent/enfant
 * - suppression des attributs
 * @param {String} uid
 */
function free(uid) {
    post("---- Free node:", uid, "\n");

    const node = nodeDict(uid);
    unregister(uid);

    const parentUID = node.get("parent");
    if (parentUID) {
        const parent = nodeDict(parentUID);
        parent.remove("childNodes::" + uid);
        parent.remove("pendingNodes::" + uid);
        parent.remove("childInputs::" + uid);
        parent.remove("pendingInputs::" + uid);
    }

    node.remove("parent");
    node.remove("address");
    node.remove("uid");
}


/* ==========================================================
 * HELPERS
 * ==========================================================
 */

/**
 * Supprime un nœud de la liste enfant de son parent
 * @param {Dict} node
 * @param {String} key
 */
function removeFromParent(node, key) {
    const parentUID = node.get("parent");
    if (!parentUID) return;
    nodeDict(parentUID).remove(key + "::" + node.get("uid"));
}

/**
 * Désenregistre récursivement les enfants d’un nœud
 * @param {Dict} node
 * @param {String} key
 * @param {Function} fn
 */
function unregisterChildren(node, key, fn) {
    const children = getKeys(node.get(key));
    if (!children) return;
    for (const k in children) {
        fn(children[k]);
    }
}

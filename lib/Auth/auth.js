function authorisation(id_gate, id_agent, tab_auth) {
    var isallowed = false;
    if (tab_auth != null) {
        nbAuth = tab_auth.length;
        for (var i = 0; i < nbAuth; i++) {
            if (tab_auth[i].id_gate == id_gate) {
                isallowed = true;
            }
        }
    } else {
        console.log("tab_auth is null");
    }
    return isallowed;
}
exports.authorisation = authorisation;
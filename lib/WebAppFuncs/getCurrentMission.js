var sqlConn = require('../SqlReq/index');

// tab name, family name agent , address mission 
function getCurrentMission() {
    sqlConn.currentAuth(function(err, auth) {
        var myLength = auth.length;
        var currentMission = [];
        for (var i = 0; i < myLength; i++) {
            id_gate = auth[i].id_gate;
            id_agent = auth[i].id_agent;
            sqlConn.addressGate(id_gate, function(err, address) {
                sqlConn.infoAgent(id_agent, function(err, infoAgent) {
                    currentMission[i] = { 'firstName': infoAgent[0], 'familyName': infoAgent[1], 'address': address };
                })
            })
        }
    });
}

exports.getCurrentMission = getCurrentMission;
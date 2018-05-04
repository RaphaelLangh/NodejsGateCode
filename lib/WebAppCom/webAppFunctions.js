var sqlReq = require('../SqlReq/index.js');

function listAgent(callback) {
    sqlReq.getListAgent(function(err, result) {
        if (err) { callback(err, null) } else {
            callback(null, result);
        }
    });
}

function agentAuth(id_agent, callback) {
    sqlReq.getAuth(id_agent, function(err, tabAuth) {
        if (err) { callback(err, null); } else {
            callback(null, tabAuth);
        }
    });
}

function givAgentAuth(id_agent, id_gate) {
    sqlReq.addAuth(id_agent, id_gate);
}

function delAgentAuth(id_agent, id_gate) {
    sqlReq.delAgentAuth(id_agent, id_gate);
}

exports.listAgent = listAgent;
exports.agentAuth = agentAuth;
exports.givAgentAuth = givAgentAuth;
exports.delAgentAuth = delAgentAuth;
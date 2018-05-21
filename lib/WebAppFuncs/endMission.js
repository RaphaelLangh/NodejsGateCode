var sqlConn = require('../SqlReq/index');

function endMission(id_agent, id_gate) {
  sqlConn.delAuth(id_agent, id_gate);
}

exports.endMission = endMission;

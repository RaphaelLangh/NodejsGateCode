var sqlConn = require('../SqlReq/index');

function endMission(firstName, familyName, address) {
  sqlConn.getIdAgentWithName(firstName, familyName, function(err, id_agent) {
    if (err) {
      throw err;
    } else {
      sqlConn.getIdgateWithAddress(address, function(err, id_gate) {
        if (err) {
          throw err;
        } else {
          sqlConn.delAuth(id_agent, id_gate);
        }
      });
    }
  });
}

exports.endMission = endMission;

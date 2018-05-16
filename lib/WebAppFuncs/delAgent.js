var sqlConn = require('../SqlReq/index');

function delAgent(firstName, familyName, address) {
  sqlConn.getIdAgentWithName(firstName, familyName, function(err, id_agent) {
    if (err) {
      throw err;
    } else {
      sqlConn.delAgent(id_agent);
    }
  });
}

exports.delAgent = delAgent ; 

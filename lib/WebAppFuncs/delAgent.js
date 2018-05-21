var sqlConn = require('../SqlReq/index');

function delAgent(id_agent) {
  sqlConn.delAgent(id_agent);
}
exports.delAgent = delAgent;

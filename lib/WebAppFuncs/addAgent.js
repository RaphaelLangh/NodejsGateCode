var sqlConn = require('../SqlReq/index');
var generateId_agent = require('../Generate/index').generateId_agent;

function addAgent(firstName, FamilyName, imei){
  var id_agent = generateId_agent() ;
  console.log("id_agent");
  sqlConn.addAgent(id_agent,firstName,familyName);
  sqlConn.addPhone(id_agent,imei);
}

exports.addAgent = addAgent ;

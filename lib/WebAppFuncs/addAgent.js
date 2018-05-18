var sqlConn = require('../SqlReq/index');
var generateId_agent = require('../Generate/index').generateId_agent;

function addAgent(firstName, familyName, imei){
  var id_agent = generateId_agent() ;
  console.log("id : " + id_agent);
  console.log("firstName : "+ firstName);
  console.log("familyName : "+ familyName);
  console.log("imei : "+ imei);
  sqlConn.addAgent(id_agent,firstName,familyName);
  sqlConn.addPhone(id_agent,imei);
}

exports.addAgent = addAgent ;

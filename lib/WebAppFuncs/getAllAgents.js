var sqlConn = require('../SqlReq/index');

// agent not in mission
function getAllAgent(callback) {
  sqlConn.getListAgent(function(err, listAgent) {
    if (err) {
      callback(err, null);
    } else {
      var myListOfAgents = [] ;
      var numOfAgents = listAgent.length ;
      for (var i = 0 ; i < numOfAgents ; i++){
        myListOfAgents[i] = {firstName : listAgent[i].firstName,familyName : listAgent[i].familyName } ;
      }
      callback(null,myListOfAgents);
    }
  });
}

exports.allAgent = getAllAgent ; 

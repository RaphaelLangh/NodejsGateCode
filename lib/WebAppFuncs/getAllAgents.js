var sqlConn = require('../SqlReq/index');

// agent not in mission
function getAllAgent(callback) {
  sqlConn.getListAgent(function(err, listAgent) {
    if (err) {
      callback(err, null);
    } else {
      var myListOfAgents = [] ;
      var myAgentId = []
      var numOfAgents = listAgent.length ;
      for (var i = 0 ; i < numOfAgents ; i++){
        myListOfAgents[i] = {firstName : listAgent[i].firstName, familyName : listAgent[i].familyName } ;
        myAgentId[i] = {id_agent : listAgent[i].id_agent} ;
      }
      callback(null,{listAgent : myListOfAgents, agentsId : myAgentId});
    }
  });
}

exports.allAgent = getAllAgent ;

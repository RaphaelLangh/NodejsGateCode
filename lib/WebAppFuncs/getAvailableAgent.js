var sqlConn = require('../SqlReq/index');

// agent not in mission
function getAvailableAgent(callback) {
  sqlConn.getListAgent(function(err, listAgent) {
    if (err) {
      callback(err, null);
    } else {
      sqlConn.currentAuth(function(err, auth) {
        if (err) {
          callback(err, null);
        } else {
          var myLength = auth.length;
          for (var i = 0; i < myLength; i++) {
            for (var j = 0; j < listAgent.length; j++) {
              if (listAgent[j].id_agent == auth[i].id_agent) {
                listAgent[j].id_agent = "notA"
              }
            }
          }
          var listAvailable = [];
          var i = 0;
          for (var j = 0; j < listAgent.length; j++) {
            if (listAgent[j].id_agent != "notA") {
              listAvailable[i] = {
                'firstName': listAgent[j].firstName,
                'familyName': listAgent[j].familyName
              };
            }
          }
          callback(null, listAvailable);
        }
      });
    }
  });
}

exports.getAvailableAgent = getAvailableAgent;

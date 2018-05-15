var sqlConn = require('../SqlReq/index');
// tab name, family name agent , address mission
function getCurrentMission(callback) {
  sqlConn.currentAuth(function(err, auth) {
      if (err) {
        callback(err, null);
      } else {
        var myLength = auth.length;
        var promisetab = [];
        for (var i = 0; i < myLength; i++) {
          promisetab[i] = new Promise(function(resolve, reject) {
              id_gate = auth[i].id_gate;
              id_agent = auth[i].id_agent;
              sqlConn.addressGate(id_gate, function(err, address) {
                if (err) {
                  console.log("rejected");
                  reject();
                } else {
                  sqlConn.infoAgent(id_agent, function(err, infoAgent) {
                    if (err) {
                      console.log("rejected");
                      reject();
                    } else {
                      currentMission = {
                        'firstName': infoAgent[0],
                        'familyName': infoAgent[1],
                        'address': address
                      };
                      resolve(currentMission);
                    }
                  });
                }
              });
            });
          }
          Promise.all(promisetab).then(function(currentMissions) {
            callback(null, currentMissions);
          });
        }
      });
  }

  exports.getCurrentMission = getCurrentMission;

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
        promisetab[i] = getMissionPromise(auth[i].id_agent, auth[i].id_gate);
      }
      Promise.all(promisetab).then(function(currentMissions) {
        callback(null, {
          missions: currentMissions,
          auths: auth
        });
      });
    }
  });
}

function getMissionPromise(id_agent, id_gate) {
  return new Promise(function(resolve, reject) {
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
              'firstName': infoAgent.firstName,
              'familyName': infoAgent.familyName,
              'address': address
            };
            resolve(currentMission);
          }
        });
      }
    });
  });
}

exports.getCurrentMission = getCurrentMission;

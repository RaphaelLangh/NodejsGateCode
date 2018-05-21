var express = require('express');

var app = express();
var andrFunc = require('./lib/AndroidCom/index.js');
var webAppFuncs = require('./lib/WebAppFuncs/index.js');
var HTMLFuncs = require('./lib/HTMLParser/index.js');

// road for andoid phone

// retourn the gate connection information
app.get('/beginMission', function(req, res) {
  console.log("hitten beginMiss");
  andrFunc.beginMission(req.query.imei, function(err, gateData) {
    if (err) {
      res.sendStatus(404);
    } else {
      res.send(gateData);
    }
  });
});
app.get('/openGate', function(req, res) {
  andrFunc.openGate(req.query.imei, function(err, passwords) {
    if (err) {
      res.sendStatus(404);
    } else {
      res.send(passwords);
    }
  });
});
app.get('/closeGate', function(req, res) {
  andrFunc.closeGate(req.query.imei, req.query.id_gate, req.query.password, req.query.nPassword, function(err, message) {
    if (err) {
      res.sendStatus(404);
    } else {
      res.send(message);
    }
  });
});


// old road
app.get('/gatePassword', function(req, res) {
  andrFunc.getGatePassword(req.query.id_gate, req.query.imei, function(err, password) {
    if (err) {
      res.sendStatus(403);
    } else {
      res.send([password]);
    }
  });
});
app.get('/changePassword', function(req, res) {
  andrFunc.changingGatePassword(req.query.id_gate, req.query.imei, function(err, newPassword) {
    if (err) {
      res.sendStatus(403);
    } else {
      res.send([newPassword]);
    }
  });
});

// road for webapp
app.get('/popoverContent', function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  webAppFuncs.getPopoverContent(function(err, popoverContent) {
    if (err) {
      res.sendStatus(403);
    } else {
      res.send(popoverContent);
    }
  });
});

app.get('/agents', function(req, res) { // we want the list of agents curently employed
  res.setHeader('Access-Control-Allow-Origin', '*');
  webAppFuncs.availableAgent(function(err, result) {
    if (err) {
      res.sendStatus(403);
    } else {
      HTMLFuncs.agentParser(result, function(err, htmlResult) {
        if (err) {
          res.sendStatus(403);
        } else {
          res.send(htmlResult);
        }
      });
    }
  });
});

app.get('/allAgents', function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  webAppFuncs.allAgent(function(err, MyAgents) {
    if (err) {
      console.log("error");
      res.sendStatus(403);
    } else {
      HTMLFuncs.agentParser(MyAgents.listAgent, function(err, htmlResult) {
        if (err) {
          res.sendStatus(403);
        } else {
          res.send({agentsId : MyAgents.agentsId, listAgentHTML : htmlResult});
          // idee : send also id_agent ?
        }
      });
    }
  });
});

app.get('/missions', function(req, res) { // currentMission
  res.setHeader('Access-Control-Allow-Origin', '*');
  webAppFuncs.getCurrentMission(function(err, result) {
    if (err) {
      res.sendStatus(403);
    } else {
      HTMLFuncs.missionParser(result.missions, function(err, htmlResult) {
        if (err) {
          res.sendStatus(403);
        } else {
          res.send({missions : htmlResult, missionsIdentifier : result.auths });
        }
      });
    }
  });
});

app.get('/addMission', function(req, res) { // add a mission
  console.log("addMissionHitten");
  res.setHeader('Access-Control-Allow-Origin', '*');
  webAppFuncs.addMission(req.query.firstName, req.query.familyName, req.query.address);
  res.sendStatus(200);
});

app.get('/addAgent', function(req, res) {
  console.log('addAgentHitten');
  res.setHeader('Access-Control-Allow-Origin', '*');
  webAppFuncs.addAgent(req.query.FirstName, req.query.FamilyName, req.query.imei);
  res.sendStatus(200);
});

app.get('/endMission', function(req, res) { // delete mission
  res.setHeader('Access-Control-Allow-Origin', '*');
  console.log("id_agent : " + req.query.id_agent);
  console.log("id_gate : " + req.query.id_gate);
  webAppFuncs.endMission(req.query.id_agent, req.query.id_gate);
  res.sendStatus(200);
});

app.get('/delAgent', function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  console.log("id_agent : " + req.query.id_agent);
  webAppFuncs.delAgent(req.query.id_agent);
  res.sendStatus(200);
});


module.exports = app;

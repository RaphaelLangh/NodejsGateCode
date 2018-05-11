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
app.get('/agents', function(req, res) { // we want the list of agents curently employed
  webAppFuncs.availableAgent(function(err, result) {
    if (err) {
      res.sendStatus(403);
      console.log("error1");
    } else {
      HTMLFuncs.getAvailableAgent(result, function(err, htmlResult) {
        if (err) {
          res.sendStatus(403);
          console.log("error2");
        } else {
          res.send(htmlResult);
        }
      });
    }
  });
});

app.get('/agentAuth', function(req, res) { // we want the gate that an agent can open

  webAppFuncs.agentAuth(req.query.id_agent, function(err, gateList) {
    if (err) {
      res.sendStatus(403);
    } else {
      res.send(gateList);
    }
  });
});

app.get('/givAgentAuth', function(req, res) { // alow agent to access to a given gate
  webAppFuncs.givAgentAuth(req.query.id_agent, req.query.id_gate);
  res.sendStatus(200);
});

app.get('/delAgentAuth', function(req, res) { // don't anymore alow agent to access to a given gate
  webAppFuncs.delAgentAuth(req.query.id_agent, req.query.id_gate);
  res.sendStatus(200);
});


module.exports = app;

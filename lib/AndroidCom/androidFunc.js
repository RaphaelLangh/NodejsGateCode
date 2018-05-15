var auth = require('../Auth/index');
var sqlReq = require('../SqlReq/index');
var changePassword = require('../Generate/index').generateNewPassword;
var agentAuthOneDoor = require('../SqlReq/index').agentAuthOneDoor;

function getGatePassword(id_gate, imei, callback) {
    sqlReq.getIdAgent(imei, function(err, id_agent) {
        if (err) { callback(err, null); } else {
            sqlReq.getAuth(id_gate, id_agent, function(err, tabAuth) {
                if (err) { callback(err, null); } else {
                    if (auth.authorisation(id_gate, id_agent, tabAuth)) {
                        sqlReq.getPassword(id_gate, function(err, pass) {
                            callback(null, pass[0].password);
                        });
                    } else {
                        callback(new Error("access non allowed"), null);
                    }
                }
            });
        }
    });
}

function changingGatePassword(id_gate, imei, callback) {
    sqlReq.getIdAgent(imei, function(err, id_agent) {
        if (err) { callback(err, null); } else {
            sqlReq.getAuth(id_gate, id_agent, function(err, tabAuth) {
                if (err) { callback(err, null); } else {
                    if (auth.authorisation(id_gate, id_agent, tabAuth)) {
                        var nPassword = changePassword();
                        callback(null, nPassword);
                        /*sqlReq.changeGatePassword(id_gate, nPassword, function(err, result) {
                            if (err) { callback(err, null); } else {
                                callback(null, nPassword);
                                console.log("access allowed, password changed");
                            }
                        });*/
                    } else {
                        console.log("access non allowed");
                        callback(new Error("access non allowed"), null);
                    }
                }
            });
        }
    });
}

function beginMission(imei, callback) {
    sqlReq.getIdAgent(imei, function(err, id_agent) {
        if (err) { callback(err, null); } else {
            agentAuthOneDoor(id_agent, function(err, id_gate) {
                if (err) {
                    callback(err, null);
                } else {
                    console.log(id_gate);
                    console.log("here");
                    sqlReq.gateInformations(id_gate, function(err, gateData) {
                        console.log("inside begin misson : " + gateData);
                        callback(null, gateData);
                    });
                }
            });
        }
    });
}

function openGate(imei, callback) {
    sqlReq.getIdAgent(imei, function(err, id_agent) {
        if (err) { callback(err, null); } else {
            agentAuthOneDoor(id_agent, function(err, id_gate) {
                if (err) {
                    callback(err, null);
                } else {
                    sqlReq.getPassword(id_gate, function(err, pass) {
                        if (err) {
                            callback(err, null);
                        } else {
                            var nPassword = changePassword();
                            callback(null, [pass, nPassword]);
                        }
                    });
                }
            });
        }
    });
}

function closeGate(imei, id_gate, password, nPassword, callback) {
    sqlReq.getIdAgent(imei, function(err, id_agent) {
        if (err) { callback(err, null); } else {
            sqlReq.getAuth(id_gate, id_agent, function(err, tabAuth) {
                if (err) { callback(err, null); } else {
                    if (auth.authorisation(id_gate, id_agent, tabAuth)) {
                        sqlReq.getPassword(id_gate, function(err, pass_database) {
                            if (err) { callback(err, null); } else {
                                if (password == pass_database) {
                                    sqlReq.changeGatePassword(id_gate, nPassword, function(err, result) {
                                        if (err) { callback(err, null); } else {
                                            callback(null, result);
                                        }
                                    });
                                } else {
                                    callback(new Error("wrong password"), null);
                                }
                            }
                        });
                    } else {
                        callback(new Error("no authorisation"), null);
                    }
                }
            });
        }
    });
}

exports.getGatePassword = getGatePassword;
exports.changingGatePassword = changingGatePassword;
exports.beginMission = beginMission;
exports.openGate = openGate;
exports.closeGate = closeGate;

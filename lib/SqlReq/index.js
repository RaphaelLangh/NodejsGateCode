var sql = require('mysql');

var AgentAuth = require('./getAuth');
var password = require('./getPassword');
var IdAgent = require('./getIdAgent');
var addAgent = require('./addAgent');
var addAuth = require('./addAuth');
var delAuth = require('./delAuth');
var changePhoneAgent = require('./changePhoneAgent');
var getListAgent = require('./getListAgent');
var changeGatePassword = require('./changeGatePassword');
var gateInformations = require('./gateConnectionInformations');
var AgentAuthOneDoor = require('./getAuthDoorAllowed');
var getCurrentAuht = require('./getCurrentAuth');
var getGateAddress = require('./getAddressGate');
var getInfoAgent = require('./getInfoAgent');

var conn = sql.createConnection({
    host: 'localhost',
    user: 'pi',
    password: 'paris',
    database: 'gate'
});

conn.connect((err) => {
    if (err) {
        console.log('Error connecting to Db');
        return;
    }
    console.log('Connection established');
});

function getAuth(id_gate, id_agent, callback) {
    AgentAuth.AgentAuth(conn, id_gate, id_agent, callback);
}

function getPassword(id_gate, callback) {
    password.password(conn, id_gate, callback);
}

function getIdAgent(imei, callback) {
    IdAgent.id_agent(conn, imei, callback);
}

function addAgent(id_agent, imei) {
    addAgent.addAgent(conn, id_agent, imei);
}

function addAgentAuth(id_agent, id_gate) {
    addAuth.addAuth(conn, id_agent, id_gate);
}

function delAgentAuth(id_agent, id_gate) {
    delAuth.delAuth(conn, id_agent, id_gate);
}

function changePhoneMyAgent(id_agent, imei) {
    changePhoneAgent.changePhoneAgent(conn, id_agent, imei);
}

function getListAgent(callback) {
    getListAgent.getListAgent(conn, callback);
}

function changeMyGatePassword(id_gate, nPassword, callback) {
    changeGatePassword.changeGatePassword(conn, id_gate, nPassword, callback);
}

function gateInformation(id_gate, callback) {
    gateInformations.gateInformations(conn, id_gate, callback);
}

function myAgentAuthOneDoor(id_agent, callback) {
    AgentAuthOneDoor.AgentAuthOneDoor(conn, id_agent, callback);
}

function currentAuth(callback) {
    getCurrentAuth.getCurrentAuth(conn, callback);
}

function addressGate(id_gate, callback) {
    getGateAddress.getGateAddress(conn, id_gate, callback);
}

function infoAgent(id_agent, callback) {
    getInfoAgent.getInfoAgent(conn, id_agent, callback);
}

exports.getAuth = getAuth;
exports.getPassword = getPassword;
exports.getIdAgent = getIdAgent;
exports.addAgent = addAgent;
exports.addAuth = addAgentAuth;
exports.delAuth = delAgentAuth;
exports.changePhoneAgent = changePhoneMyAgent;
exports.getListAgent = getListAgent;
exports.changeGatePassword = changeMyGatePassword;
exports.gateInformations = gateInformation;
exports.agentAuthOneDoor = myAgentAuthOneDoor;
exports.currentAuth = currentAuth;
exports.addressGate = addressGate;
exports.infoAgent = infoAgent;
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
var getCurrentAuth = require('./getCurrentAuth');
var getGateAddress = require('./getAddressGate');
var getInfoAgent = require('./getInfosAgent');
var getIdAgentWName = require('./getId_agentWithName');
var getIdgateWAddress = require('./getId_gateWithAddress');
var addNewPhone = require('./addPhone');
var delTotAgent = require('./delAgent');

var conn = sql.createConnection({
    host: 'localhost',
    user: 'pi',
    password: 'paris',
    database: 'gate',
    multipleStatements: true
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

function addNewAgent(id_agent,firstName, familyName) {
    addAgent.addAgent(conn, id_agent,firstName, familyName);
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

function listAgent(callback) {
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

function getIdAgentWithName(firstName, familyName, callback){
  getIdAgentWName.id_agent(conn, firstName, familyName, callback);
}

function getIdgateWithAddress(address, callback){
  getIdgateWAddress.id_gate(conn, address, callback);
}

function addPhone(id_agent,imei){
  addNewPhone.addPhone(conn, id_agent, imei);
}

function delAgent(id_agent){
  delTotAgent.delAgent(conn, id_agent);
}

exports.getAuth = getAuth;
exports.getPassword = getPassword;
exports.getIdAgent = getIdAgent;
exports.addAgent = addNewAgent;
exports.addAuth = addAgentAuth;
exports.delAuth = delAgentAuth;
exports.changePhoneAgent = changePhoneMyAgent;
exports.getListAgent = listAgent;
exports.changeGatePassword = changeMyGatePassword;
exports.gateInformations = gateInformation;
exports.agentAuthOneDoor = myAgentAuthOneDoor;
exports.currentAuth = currentAuth;
exports.addressGate = addressGate;
exports.infoAgent = infoAgent;
exports.getIdAgentWithName = getIdAgentWithName ;
exports.getIdgateWithAddress = getIdgateWithAddress ;
exports.addPhone = addPhone ;
exports.delAgent = delAgent ;

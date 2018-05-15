var generatePassword = require('./PasswordGeneration').generatePassword;
var generateMyId_agent = require('./AgentIdGen').generateId_agent;

exports.generateNewPassword = generatePassword;
exports.generateId_agent =  generateMyId_agent; 

var availableAgent = require('./AgentParser');
var currentMission = require('./CurrentMission')
exports.agentParser = availableAgent.getAvailableAgent ;
exports.missionParser = currentMission.getCurrentMission ;

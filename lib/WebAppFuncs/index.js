var getCurrentMission = require('./getCurrentMission').getCurrentMission;
var getAvailableAgent = require('./getAvailableAgent').getAvailableAgent;
var addMission = require('./addMission').addMission;
var getAllAgent = require('./getAllAgents').allAgent;
var addNewAgent = require('./addAgent').addAgent
var getPopoverContent = require("./getPopoverContent").getPopoverContent ;
var delAgent = require("./delAgent").delAgent ;
var endMission = require('./endMission').endMission ;

exports.getCurrentMission = getCurrentMission;
exports.availableAgent = getAvailableAgent;
exports.addMission = addMission;
exports.allAgent = getAllAgent ;
exports.addAgent = addNewAgent ;
exports.getPopoverContent = getPopoverContent ;
exports.delAgent = delAgent ;
exports.endMission = endMission ; 

var rand = require('random-lib');

function generateId_agent(){
    var myAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";
    var myId_agent = '';
    maxIndice = myAlphabet.length - 1;
    id_agentSize = 5;
    var indice = rand.intsSync({ min: 0, max: maxIndice, num: id_agentSize });
    for (var i = 0; i < id_agentSize; i++) {
        myId_agent += myAlphabet[indice[i]];
    }
    return myId_agent;
}

exports.generateId_agent = generateId_agent ;

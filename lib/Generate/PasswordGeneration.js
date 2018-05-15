var rand = require('random-lib');

function generateNewPassword() {
    var myAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789?.,;/:^#*@abcdefghijklmnopqrstuvwxyz";
    var myPassword = "";
    maxIndice = myAlphabet.length - 1;
    passwordSize = 10;
    var indice = rand.intsSync({ min: 0, max: maxIndice, num: passwordSize });
    for (var i = 0; i < passwordSize; i++) {
        myPassword += myAlphabet[indice[i]];
    }
    return myPassword;
}

exports.generatePassword = generateNewPassword;
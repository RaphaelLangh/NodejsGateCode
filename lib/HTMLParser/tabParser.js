// return html table
var fs = require("fs");

function CreateTab(tab, callback){
  var myLength = tab.length ; // number of row
  fs.readFile('Ressources/tabTemplates.html',function(err, myData)){
    if(err){callback(err,null);}
    else{
      // Jquery manip
    }
  }
}

var fs = require("fs");
var nQuery = require("nodeQuery");

function CreateTab(tab, callback){
  var myLength = tab.length ; // number of row
  fs.readFile('Ressources/tabTemplates.html',function(err, myData)){
    if(err){callback(err,null);}
    else{
      // Jquery manip
      nQuery.use(function $){
        // title
        var columm1title =  $("<th></th>").text("firstName")
        var columm2title =  $("<th></th>").text("familytName")
        $('.columms').append(columm1title);
        $('.columms').append(columm2title);
      }
    }
  }
}

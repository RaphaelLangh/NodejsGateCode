var fs = require("fs");
var cheerio = require('cheerio');
var path = require("path");

function createListAgent(agents,callback){
  var myLength = agents.length ;
  fs.readFile(path.resolve(__dirname,'../Ressources/tabTemplates.html'),"utf8", function(err, myData) {
    if (err) {
      callback(err, null);
    } else {
      var $ = cheerio.load(myData);
      if (err) {
        callback(err, null);
      } else {
        // jQuery manip
        $(".columms").append("<th>firstName</th>");
        $(".columms").append("<th>familytName</th>");
        // rows
        for(var i = 0 ; i < myLength ; i++){
          $()
        }
      }
    }
  });
}

exports.listAgent = createListAgent ;

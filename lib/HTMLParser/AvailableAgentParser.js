var fs = require("fs");
var cheerio = require('cheerio');
var path = require("path");

function createTab(tab, callback) {
  var myLength = tab.length; // number of row
  fs.readFile(path.resolve(__dirname,'../Ressources/tabTemplates.html'),"utf8", function(err, myData) {
    if (err) {
      callback(err, null);
    } else {
      var $ = cheerio.load(myData);
      if (err) {
        callback(err, null);
      } else {
        // Jquery manip
        // title
        $(".columms").append("<th>firstName</th>");
        $(".columms").append("<th>familytName</th>");
        // rows
        for(var i = 0 ; i < myLength ; i++){
          var agentsFirstName = "<td>" + tab[i].firstName + "</td>" ;
          var agentsfamilyName = "<td>" + tab[i].familyName + "</td>" ;
          $(".agents").append("<tr>"+agentsFirstName+agentsfamilyName+"</tr>");
        }
      }
      callback(null,$.html());
    }
  });
}

exports.getAvailableAgent = createTab ;

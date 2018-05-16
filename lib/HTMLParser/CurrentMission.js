var fs = require("fs");
var cheerio = require('cheerio');
var path = require("path");

function getCurrentMission(tab, callback) {
  var myLength = tab.length; // number of row
  fs.readFile(path.resolve(__dirname, '../Ressources/tabTemplates.html'), "utf8", function(err, myData) {
    if (err) {
      callback(err, null);
    } else {
      var $ = cheerio.load(myData);
      if (err) {
        callback(err, null);
      } else {
        // Jquery Manip
        // title
        $('.title').append("Current Missions");
        $(".columms").append("<th>firstName</th>");
        $(".columms").append("<th>familytName</th>");
        $(".columms").append("<th>address</th>");
        // rows
        for (var i = 0; i < myLength; i++) {
          var agentsFirstName = "<td>" + tab[i].firstName + "</td>";
          var agentsfamilyName = "<td>" + tab[i].familyName + "</td>";
          var address = "<td>" + tab[i].address + "</td>";
          //set class
          var entete = "<tr class=\"mission\">" ;
          $(".trows").append(entete + agentsFirstName + agentsfamilyName + address + "</tr>");
        }
        callback(null,$.html());
      }
    }
  });
}
exports.getCurrentMission = getCurrentMission ;

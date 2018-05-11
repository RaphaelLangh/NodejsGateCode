var fs = require("fs");
var cheerio = require('cheerio');

function CreateTab(tab, callback) {
  var myLength = tab.length; // number of row
  fs.readFile('Ressources/tabTemplates.html', function(err, myData) {
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
        $(".columms".append("<th>familytName</th>");
      }
      callback($.html());
    }
  });
}

exports.getAvailableAgent = CreateTab ;

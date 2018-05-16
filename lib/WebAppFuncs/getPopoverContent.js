var fs = require("fs");
var path = require("path");

function getPopoverContent(callback){
  fs.readFile(path.resolve(__dirname,'../Ressources/popover.html'),"utf8", function(err, myPopoverContent) {
    if(err){
      callback(err,null);
    }
    else{
      callback(null,myPopoverContent);
    }
});
}
exports.getPopoverContent = getPopoverContent ;

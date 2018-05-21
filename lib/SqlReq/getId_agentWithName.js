function id_agent(conn, firstName, familyName, callback) {
  conn.query('SELECT * FROM agents ', function(err, data) {
    if (err) {
      callback(err, null);
    } else {
      var id_agent = "";
      var myLength = data.length;
      console.log("firstName I begin with : " + firstName);
      console.log("familyName I begin with : " + familyName);
      for (var i = 0; i < myLength; i++) {
        console.log(data[i].firstName);
        console.log(data[i].familyName);
        if (data[i].firstName === firstName && data[i].familyName === familyName) {
          console.log("found");
          id_agent = data[i].id_agent;
        }
      }
      if (id_agent === "") {
        console.log("agent not found");
        callback(new Error("not agent with this name"), null);
      } else {
        callback(null, id_agent);
      }
    }
  });
}

exports.id_agent = id_agent;
